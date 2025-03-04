"use client";
import { NavbarContent, NavbarBrand, NavbarItem, Navbar } from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { IoWalletOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/icons";
import LoginModal from "./loginModal";
import { useDisclosure } from "@heroui/modal";
//@ts-expect-error
import { ConnectWallet } from "@coinbase/onchainkit/wallet";


export const NavBar = () => {
  const pathname = usePathname();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleConnectWallet = () => {
    onOpen();
  };
  const Links = [
    {
      label: "Marketplace",
      href: "/",
    },
    {
      label: "Collections",
      href: "/collector/collections",
    },
    {
      label: "Profile",
      href: "/collector/profile",
    },
  ];
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
          <ConnectWallet className={`py-5 text-lg bg-[#695dd6] text-[#8896e6] font-semibold rounded-full hover:bg-blue-500 transition px-[80px]`} />
          {/* <Button
            // as={Link}
            color="primary"
            onPress={handleConnectWallet}
            startContent={<IoWalletOutline size={24} />}
            // href="#"
            variant="flat"
          >
            Connect Wallet
          </Button> */}
        </NavbarItem>
      </NavbarContent>

      <LoginModal isOpen={isOpen} onClose={onClose} />
    </Navbar>
  );
};
