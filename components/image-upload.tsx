"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, Camera, X } from "lucide-react";

interface ImageUploadProps {
  currentImage?: string;
  onImageChange?: (imageUrl: string) => void;
  className?: string;
}

export function ImageUpload({
  currentImage,
  onImageChange,
  className,
}: ImageUploadProps) {
  const [uploadedImage, setUploadedImage] = useState<string>(
    currentImage || "/images/happy.png"
  );
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (file: File) => {
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string;
        setUploadedImage(imageUrl);
        onImageChange?.(imageUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFileSelect(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFileSelect(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const removeImage = () => {
    const fallback = "/images/happy.png";
    setUploadedImage(fallback);
    onImageChange?.(fallback);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const triggerFileInput = () => fileInputRef.current?.click();

  return (
    <div className={className}>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileInput}
        className="hidden"
      />

      {uploadedImage ? (
        <div className="relative group">
          <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-2 shadow-2xl">
            <Image
              src={uploadedImage}
              alt="Profile Picture"
              width={400}
              height={400}
              className="w-full h-full rounded-full object-cover"
              priority
            />
          </div>

          <div className="absolute inset-0 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="flex space-x-4">
              <Button
                onClick={triggerFileInput}
                size="sm"
                className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
              >
                <Camera className="w-4 h-4 mr-2" />
                Change
              </Button>
              <Button
                onClick={removeImage}
                size="sm"
                className="bg-blue-500/80 backdrop-blur-sm text-white hover:bg-blue-600/80"
              >
                <X className="w-4 h-4 mr-2" />
                Reset
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <Card
          className={`w-80 h-80 lg:w-96 lg:h-96 rounded-full border-2 border-dashed cursor-pointer transition-all duration-300 ${
            isDragging
              ? "border-blue-500 bg-blue-50 scale-105"
              : "border-slate-300 hover:border-blue-400 hover:bg-slate-50"
          }`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={triggerFileInput}
        >
          <CardContent className="flex flex-col items-center justify-center h-full p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-4">
              <Upload className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              Upload Profile Picture
            </h3>
            <p className="text-slate-600 mb-4">
              Drag and drop your image here, or click to browse
            </p>
            <p className="text-sm text-slate-500">
              Supports: JPG, PNG, GIF (Max 5MB)
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
