'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { useDropzone } from 'react-dropzone';

// Define props interface for SelectImage component
interface SelectImageProps {
  item?: { image: File | null }; // Image item object (optional)
  handleFileChange: (value: File) => void; // Function to handle file change
  handleRemoveImage: () => void; // Function to handle removing image
}

// Define SelectImage component
const SelectImage: React.FC<SelectImageProps> = ({ item, handleFileChange, handleRemoveImage }) => {
  const [preview, setPreview] = useState<string | undefined | null>(item?.image ? URL.createObjectURL(item.image) : undefined);

  // Callback function for handling file drop
  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      handleFileChange(acceptedFiles[0]);
      setPreview(URL.createObjectURL(acceptedFiles[0]));
    }
  };

  // useDropzone hook to handle file drop
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': ['.jpeg', '.png'] }, // Accept only image files with .jpeg and .png extensions
  });

  return (
    <div
      {...getRootProps()}
      className="border-2 border-slate-400 p-2 border-dashed cursor-pointer text-sm font-normal text-slate-400 flex flex-col items-center justify-center"
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the image here...</p>
      ) : (
        <div className="flex flex-col items-center">
          {preview ? (
            <div className="relative">
              <Image
                src={preview}
                alt="Preview"
                width={100}
                height={100}
                className="object-contain mb-2"
              />
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemoveImage();
                  setPreview(null);
                }}
                className="absolute top-0 right-0 p-1 bg-red-500 text-white rounded-full"
              >
                ×
              </button>
            </div>
          ) : (
            <p>Image</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SelectImage;
