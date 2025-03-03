"use client";
import { NavbarContent, NavbarBrand, NavbarItem, Navbar } from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { IoWalletOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/icons";
import { RiNftLine } from "react-icons/ri";
import { useDisclosure } from "@heroui/modal";
import CreateNftModal from "./CreateNftModal";

export const CreatorNavBar = () => {
  const pathname = usePathname();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const Links = [
    {
      label: "Overview",
      href: "/creator",
    },
  ];

  const handleCreateNFT = () => {
    onOpen();
  };
  return (
    <Navbar className="py-4">
      <NavbarBrand>
        <Logo />
        <p className="font-bold text-inherit">SMARTZ</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        {Links.map((link) => (
          <NavbarItem key={link.href} isActive={pathname === link.href}>
            <Link href={link.href}>
              <p
                className={`${pathname === link.href ? "text-primary" : "text-foreground"}`}
              >
                {link.label}
              </p>
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            color="primary"
            startContent={<RiNftLine size={24} />}
            onPress={handleCreateNFT}
            variant="flat"
          >
            Create NFT
          </Button>
        </NavbarItem>
      </NavbarContent>

      <CreateNftModal isOpen={isOpen} onClose={onClose} />
    </Navbar>
  );
};
