import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/modal";
import { Button } from "@heroui/button";
import Image from "next/image";

const NFTModal = ({
  nft,
  isOpen,
  onOpen,
  onClose,
}: {
  nft: any;
  isOpen: boolean;
  onOpen?: any;
  onClose: any;
}) => {
  return (
    <Modal
      backdrop={"opaque"}
      className="bg-none"
      isOpen={isOpen}
      onClose={onClose}
    >
      {/* Modal Content */}
      <ModalContent className="relative w-full max-w-3xl bg-white border border-blue-300 rounded-xl shadow-lg">
        {(onClose) => (
          <>
            {/* Modal Header */}
            <ModalHeader className="text-2xl font-bold text-blue-600 p-6">
              {nft.name}
            </ModalHeader>

            {/* Modal Body */}
            <ModalBody className="p-6 flex flex-col md:flex-row gap-6">
              {/* Left Side: NFT Image */}
              <div className="md:w-1/2">
                <div className="overflow-hidden rounded-lg shadow-md">
                  <Image
                    src={nft.image}
                    alt={nft.name}
                    width={500}
                    height={500}
                    className="w-full h-auto object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>

              {/* Right Side: NFT Details */}
              <div className="md:w-1/2 flex flex-col justify-between">
                <div>
                  <p className="text-gray-600 text-sm">
                    By <span className="text-blue-500">{nft.creator}</span>
                  </p>
                  <p className="text-gray-500 text-sm mt-1">
                    Created on <span className="text-gray-700">{nft.date}</span>
                  </p>
                  <p className="text-gray-700 mt-4 leading-relaxed text-sm">
                    {nft.description}
                  </p>
                  <div className="mt-4 text-lg font-semibold text-blue-500">
                    Price: <span className="text-blue-600">{nft.price}</span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="mt-6 flex gap-3">
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                    Purchase NFT
                  </Button>
                </div>
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default NFTModal;
