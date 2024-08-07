import React, { useState, useEffect } from 'react';
import firebaseApp from "@/libs/firebase";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import Button from '@/app/components/Button';
import { CartProductType } from '@prisma/client';
import toast from "react-hot-toast";

interface DownloadImageProps {
  item: CartProductType
  }

const DownloadImage: React.FC<DownloadImageProps> = ({ item }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Button clicked');
    await handleDownload();
  };

  //TODO: currently only opens image in a new tab need to look into CORS in order to allow real download to computer
  const handleDownload = async () => {
    setIsLoading(true);
    try {
            toast("Downloading File");

            const storage = getStorage(firebaseApp);

            
            // Open the URL in a new tab
            window.open(item.selectedImg.image, '_blank');

            
            setIsLoading(false);
              } catch (error) {
                console.error("Failed to get download URL", error);
                toast("Download Failed");
                setIsLoading(false);
              }
  };


    return (
      <Button
      label={`${isLoading ? 'Preparing Download...' : 'Download Image'}`}
      onClick={handleButtonClick}
      small={true}
  />
    )

};






export default DownloadImage;