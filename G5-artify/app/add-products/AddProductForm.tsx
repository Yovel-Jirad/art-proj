'use client';

// Import necessary modules and components
import Button from "@/app/components/Button";
import Heading from "@/app/components/Heading";
import CustomCheckBox from "@/app/components/inputs/CustomCheckBox";
import Input from "@/app/components/inputs/Input";
import TextArea from "@/app/components/inputs/TextArea";
import firebaseApp from "@/libs/firebase";
import { useCallback, useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import axios from "axios";
import { useRouter } from "next/navigation";
import { colors } from "@/Utils/Colors";
import SelectImage from "../components/inputs/SelectImage";

// Define types for image and uploaded image
export type ImageType = {
  color: string;
  colorCode: string;
  image: File | null;
};

export type UploadedImageType = {
  color: string;
  colorCode: string;
  image: string;
};

// Define AddProductForm component
const AddProductForm = (user_name:any) => {
  // State variables
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState<ImageType[]>([]);
  const [isProductCreated, setIsProductCreated] = useState(false);
  const{user_name: Artist_name} = user_name;
  
  // Initialize React hook form
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      description: "",
      Size: "",
      Artist_Name: Artist_name,
      inStock: false,
      images: [],
      price: "",
    },
  });

  // useEffect hook to reset form and images state when product is created
  useEffect(() => {
    setCustomValue("images", images);
  }, [images]);

  useEffect(() => {
    if (isProductCreated) { 
      reset();
      setImages([]);
      setIsProductCreated(false);
    }
  }, [isProductCreated, reset]);

  // Function to handle form submission
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log("Product Data", data);
    setIsLoading(true);
    let uploadedImages: UploadedImageType[] = [];

    if (!images || images.length === 0) {
      setIsLoading(false);
      return toast.error("No selected image!");
    }

    // Function to handle image uploads to Firebase Storage
    const handleImageUploads = async () => {
      toast("Creating product, please wait..");
      try {
        for (const item of images) {
          if (item.image) {
            const fileName = new Date().getTime() + "-" + item.image.name;
            const storage = getStorage(firebaseApp);
            const storageRef = ref(storage, `products/${fileName}`);
            const uploadTask = uploadBytesResumable(storageRef, item.image);
            await new Promise<void>((resolve, reject) => {
              uploadTask.on(
                "state_changed",
                (snapshot) => {
                  const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                  console.log("Upload is " + progress + "% done");
                },
                (error) => {
                  console.log("Error uploading image", error);
                  reject(error);
                },
                () => {
                  getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    uploadedImages.push({
                      ...item,
                      image: downloadURL,
                    });
                    console.log("File available at", downloadURL);
                    resolve();
                  }).catch((error) => {
                    console.log("Error getting the download URL", error);
                    reject(error);
                  });
                }
              );
            });
          }
        }
      } catch (error) {
        setIsLoading(false);
        console.log("Error handling image uploads", error);
        return toast.error("Error handling image uploads");
      }
    };

    await handleImageUploads();

    const productData = { ...data, images: uploadedImages };

    axios.post("/api/product", productData)
      .then(() => {
        toast.success("Product created");
        setIsProductCreated(true);
        router.refresh();
      })
      .catch(() => {
        toast.error("Something went wrong when saving product to db");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // Function to set custom form value
  const setCustomValue = useCallback((id: string, value: any) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  }, [setValue]);

  // Function to add image to state
  const addImageToState = useCallback((value: ImageType) => {
    
    console.log('actually reached here blyat >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
    setImages((prev) => {
      
    console.log('actually reached here insideeee blyat >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
      if (!prev) {
        return [value];
      }

      return [...prev, value];
    });
  }, [setImages]);

  // Function to remove image from state
  const removeImageFromState = useCallback((value: ImageType) => {
    setImages((prev) => {
      if (prev) {
        console.log('actually reached here >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')

        const filteredImages = prev.filter((item) => {
          console.log("item  ",item)
          return item.image !== value.image;
        });
        console.log("imagges: >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", images)
        console.log("filteredImages  ",filteredImages)
        return filteredImages;
      }

      return prev;
    });
  }, [setImages]);

  // Render form components
  return (
    <>
      <Heading title="Add a Product" center />
      <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="price"
        label="Price"
        disabled={isLoading}
        register={register}
        errors={errors}
        type="number"
        required
      />
      <Input
        id="Size"
        label="Size"
        disabled={isLoading}
        register={register}
        errors={errors}
      />
      <TextArea
        id="description"
        label="Description"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <CustomCheckBox
        id="inStock"
        register={register}
        label="This product is in stock"
      />
      <div className="w-full flex flex-col flex-wrap gap-4">
        <div>
          <div className="font-bold">
            Upload image of your artwork.
          </div>
          <div className="text-sm">
            First, you must commit that the creation is yours alone in order to avoid copyright infringement.
          </div>
        </div>
        <div className="gap-3">
        {colors.map((item, index) => {
          const currentImage = images.find(img => img.color === item.color);
          return (
            <SelectImage
              key={index}
              item={{...item, image: currentImage?.image || null}}
              handleFileChange={(file) => addImageToState({ ...item, image: file })}
              handleRemoveImage={() => removeImageFromState({ ...item })}
            />
          );
        })}
        </div>
      </div>
      <Button
        label={isLoading ? "Loading..." : "Add Product"}
        onClick={handleSubmit(onSubmit)}
      />
    </>
  );
};

export default AddProductForm;
