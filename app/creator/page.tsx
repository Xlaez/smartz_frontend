"use client";

import { Card, CardHeader, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import Image from "next/image";
import { NFTCard } from "@/components/marketplace/ExploreNfts";
import { title } from "@/components/primitives";

const creator = {
  image: "/creator-image.jpg", // Replace with actual creator image
  username: "NFT_Artist",
  totalNFTs: 5, // Replace with actual number
  joined: "March 2023",
};

const nftsCreated: any[] = [
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
]; // Replace with actual NFT data

export default function CreatorDashboard() {
  return (
    <div className="p-6 min-h-screen bg-white flex flex-row  text-gray-900">
      {/* <h1 className={title({ size: "md" })}>Creator</h1> */}

      {/* About Creator Section */}
      <Card className="p-6 flex flex-col items-start justify-start gap-8 shadow-none w-[30%] mx-auto mt-6">
        {/* Image Section */}
        <div className="w-full rounded-full overflow-hidden border border-blue-500 shadow-md flex-shrink-0">
          <Image
            src={creator.image}
            alt={creator.username}
            width={150}
            height={150}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Creator Info */}
        <div className="flex flex-col text-left space-y-2">
          <h3 className="text-2xl font-bold dark:text-blue-400">
            @{creator.username}
          </h3>

          <p className="text-gray-600 dark:text-gray-300 text-sm flex items-center">
            🗓️{" "}
            <span className="ml-2">
              Joined{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                {creator.joined}
              </span>
            </span>
          </p>

          <p className="text-gray-700 dark:text-gray-300 text-sm flex items-center">
            🎨{" "}
            <span className="ml-2">
              Total NFTs Created:{" "}
              <span className="font-bold text-blue-500 dark:text-blue-400">
                {creator.totalNFTs}
              </span>
            </span>
          </p>

          <p className="text-gray-500 dark:text-gray-400 text-sm italic mt-1">
            "Passionate NFT creator & blockchain enthusiast 🚀"
          </p>
        </div>
      </Card>

      <div className="w-[70%] ml-6">
        {/* NFTs Created Section */}
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          NFTs Created
        </h2>

        <div
          className={`${nftsCreated.length === 0 ? "border border-blue-300" : "border-none"} p-6 rounded-lg`}
        >
          {nftsCreated.length === 0 ? (
            <p className="text-gray-500 text-center">
              🚀 This creator has not created any NFTs yet.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {nftsCreated.map((nft) => (
                <NFTCard
                  creator={nft.username}
                  date={nft.joined}
                  description={nft.description}
                  id={nft.id}
                  image={nft.image}
                  name={nft.name}
                  price={nft.price}
                  key={nft.id}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
