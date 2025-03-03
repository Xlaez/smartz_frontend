"use client";
import Image from "next/image";
import { Button } from "@heroui/button";
import NFTModal from "./NFTModal";
import { useState } from "react";

// Sample NFT Data
const nftData = [
  {
    id: 1,
    image: "/images/nft1.jpg",
    name: "Skyline Dreams",
    creator: "@NFT_Artist",
    date: "March 3, 2025",
    price: "2.8 ETH",
    description:
      "A breathtaking digital skyline masterpiece that captures the beauty of futuristic dreams.",
  },
  {
    id: 2,
    image: "/images/nft2.jpg",
    name: "Neon Waves",
    creator: "@CryptoPunk",
    date: "Feb 25, 2025",
    price: "3.1 ETH",
    description:
      "A breathtaking digital skyline masterpiece that captures the beauty of futuristic dreams.",
  },
  {
    id: 3,
    image: "/images/nft3.jpg",
    name: "Ethereal Light",
    creator: "@Visionary",
    date: "Jan 15, 2025",
    price: "5.2 ETH",
    description:
      "A breathtaking digital skyline masterpiece that captures the beauty of futuristic dreams.",
  },
  {
    id: 4,
    image: "/images/nft4.jpg",
    name: "Golden Future",
    creator: "@ArtisticSoul",
    date: "Feb 8, 2025",
    price: "4.0 ETH",
    description:
      "A breathtaking digital skyline masterpiece that captures the beauty of futuristic dreams.",
  },
  {
    id: 5,
    image: "/images/nft5.jpg",
    name: "Cyber Samurai",
    creator: "@TechMaster",
    date: "March 1, 2025",
    price: "6.5 ETH",
    description:
      "A breathtaking digital skyline masterpiece that captures the beauty of futuristic dreams.",
  },
  {
    id: 6,
    image: "/images/nft6.jpg",
    name: "Blue Horizon",
    creator: "@NFT_Guru",
    date: "April 10, 2025",
    price: "3.7 ETH",
    description:
      "A breathtaking digital skyline masterpiece that captures the beauty of futuristic dreams.",
  },
  {
    id: 7,
    image: "/images/nft7.jpg",
    name: "Aurora Essence",
    creator: "@DigitalDawn",
    date: "May 2, 2025",
    price: "4.9 ETH",
    description:
      "A breathtaking digital skyline masterpiece that captures the beauty of futuristic dreams.",
  },
  {
    id: 8,
    image: "/images/nft8.jpg",
    name: "Midnight Glow",
    creator: "@Moonlight",
    date: "June 6, 2025",
    price: "2.9 ETH",
    description:
      "A breathtaking digital skyline masterpiece that captures the beauty of futuristic dreams.",
  },
];

export function NFTCard({
  id,
  image,
  name,
  creator,
  date,
  price,
  description,
}: {
  id: any;
  image: any;
  name: any;
  creator: any;
  date: any;
  price: any;
  description: any;
}) {
  const [selectedNFT, setSelectedNFT] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = (nft: any) => {
    setSelectedNFT(nft);
    setModalOpen(true);
  };
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-blue-300">
      {/* NFT Image */}
      <div className="overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={400}
          height={400}
          className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* NFT Details */}
      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-900">{name}</h2>
        <p className="text-gray-500 text-sm mt-1">
          By <span className="text-blue-600 font-medium">{creator}</span>
        </p>
        <p className="text-gray-500 text-sm">
          Created on <span className="text-gray-700">{date}</span>
        </p>

        <div className="mt-3">
          <span className="text-lg font-bold text-blue-600">
            Price: {price}
          </span>
        </div>

        {/* View NFT Button */}
        <Button
          className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2"
          onPress={() =>
            openModal({ id, image, name, creator, date, price, description })
          }
        >
          View NFT
        </Button>
      </div>

      {/* NFT Modal */}
      <NFTModal
        nft={selectedNFT}
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}

export default function ExploreNFTs() {
  return (
    <section className="w-full py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
          Explore <span className="text-blue-600">NFTs</span>
        </h1>
        <p className="text-gray-600 text-center mt-2">
          Browse through exclusive digital collectibles and artworks.
        </p>

        {/* NFT Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {nftData.map((nft) => (
            <NFTCard key={nft.id} {...nft} />
          ))}
        </div>
      </div>
    </section>
  );
}
