import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Button } from "@heroui/button";
import featuredNFT from "@/public/nfts/solana.png";

export function HeroSection() {
  return (
    <section className="text-white w-full py-10 px-6 md:px-12 bg-gray-100 grid place-items-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-black">
            Discover, Collect & Trade <br />
            <span className="text-blue-400">Exclusive NFTs</span>
          </h1>
          <p className={"text-black mt-4"}>
            Join the next generation of digital art collectors. Secure and trade
            unique NFTs with ease.
          </p>
          <Button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 flex items-center gap-2">
            Explore Marketplace <AiOutlineArrowRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Right Content - Featured NFT */}
        <div className="md:w-1/2 flex justify-center">
          <div className=" p-4 rounded-xl w-90">
            {/* NFT Image with Hover Effect */}
            <div className="relative w-90 h-90">
              <div className="absolute -top-4 -left-4 w-full h-full bg-blue-200 rounded-lg shadow-lg transform rotate-3"></div>
              <div className="absolute -top-2 -left-2 w-full h-full bg-blue-300 rounded-lg shadow-md transform rotate-1"></div>
              <Image
                src={featuredNFT}
                alt="Featured NFT"
                width={400}
                height={400}
                className="relative w-full h-full object-cover rounded-lg shadow-xl transition-transform duration-300 hover:scale-105"
              />
              {/* <h3 className="text-xl font-semibold text-blue-600">
                "Blue Horizon"
              </h3> */}
            </div>

            {/* NFT Details */}
            {/* <div className="mt-4">
              <p className="text-gray-400 text-sm my-2">
                By{" "}
                <span className="text-blue-400 font-medium">@NFT_Artist</span>
              </p>
              <p className="text-gray-400 text-sm">Created on March 3, 2025</p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
