"use client";
import profileAbi from "./abis/profile.json";
import marketplaceAbi from "./abis/market.json"
import nftAbi from "./abis/nft.json";
import { marketPlaceAddress, nftAddress, profileAddress } from './contractAddresses';
import { useReadContract, useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { useCallback } from "react";
import { Address } from "viem";

export const contractConfigs = {
    profile: {
        abi: profileAbi,
        address: profileAddress,
    },
    nft: {
        abi: nftAbi,
        address: nftAddress,
    },
    marketplace: {
        abi: marketplaceAbi,
        address: marketPlaceAddress,
    },
}

export interface dataProps{
    contractName: keyof typeof contractConfigs;
    functionName: string;
    args?: Array<any>;
    account?: Address;
    value?: bigint;
}

export const useRead = ({ contractName, functionName, account, args, value }: dataProps) => {
    let content = {
        abi: contractConfigs[contractName]?.abi,
        address: contractConfigs[contractName]?.address,
        functionName,
    } as any;

    if(args?.length){
        content.args = args;
    }

    const { data, isLoading, error } = useReadContract(content);

    return {data: data || null, isLoading, error};
}

export const useWrite = ({ contractName, functionName, args }: dataProps) => {
    const { data: writeData, isPending: writeLoading, writeContract } = useWriteContract();

    console.log("Write Data: ", writeData);

    const fetchWriteContract = useCallback(() => {
        writeContract({
            abi: contractConfigs[contractName]?.abi,
            address: contractConfigs[contractName]?.address,
            functionName,
            args,
        });

        console.log("Currently fetching contract.");
    }, [writeData, writeLoading]);

    const { isError: writeWaitError, isSuccess: writeWaitSuccess, isLoading: writeWaitLoading } = useWaitForTransactionReceipt({hash: writeData});

    return {
        writeData,
        writeLoading,
        fetchWriteContract,
        writeWaitError,
        writeWaitLoading,
        writeWaitSuccess,
    };
};