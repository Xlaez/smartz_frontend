import { Button } from "@heroui/button";
import { Modal, ModalBody, ModalContent, ModalHeader } from "@heroui/modal";
import { Input, Textarea } from "@heroui/input";
import React, { useState } from "react";
import Image from "next/image";

const CreateNftModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [imageUrl, setImageUrl] = useState("");

  return (
    <Modal backdrop="opaque" isOpen={isOpen} onClose={onClose}>
      <ModalContent className="max-w-4xl mx-auto p-4 bg-white dark:bg-gray-900 border border-blue-300 rounded-xl shadow-lg">
        <ModalHeader>
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">
            Create Your NFT
          </h1>
        </ModalHeader>

        <ModalBody className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Left Column - NFT Image Preview */}
          <div className="col-span-2 flex justify-center items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt="NFT Preview"
                width={300}
                height={300}
                className="w-full h-auto rounded-lg object-cover"
              />
            ) : (
              <p className="text-gray-500 dark:text-gray-400 text-sm text-center">
                NFT image preview will appear here
              </p>
            )}
          </div>

          {/* Right Column - Form Inputs */}
          <div className="col-span-3 flex flex-col gap-4">
            {/* NFT Name */}
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Name of NFT
              </label>
              <Input
                type="text"
                placeholder="Enter NFT name"
                className="mt-1"
              />
            </div>

            {/* NFT Image URL */}
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                NFT Image URL
              </label>
              <Input
                type="text"
                placeholder="Paste image URL"
                className="mt-1"
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </div>

            {/* NFT Description */}
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Description
              </label>
              <Textarea placeholder="Describe your NFT" className="mt-1" />
            </div>

            {/* NFT Price */}
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Price (ETH)
              </label>
              <Input type="number" placeholder="Set price" className="mt-1" />
            </div>

            {/* Publish NFT Button */}
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold mt-4">
              Publish NFT
            </Button>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CreateNftModal;
