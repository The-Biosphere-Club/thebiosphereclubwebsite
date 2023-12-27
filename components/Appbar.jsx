'use client'
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import {
    Navbar,
    NavbarBrand,
    NavbarMenuToggle,
    NavbarMenuItem,
    NavbarMenu,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
    Avatar,
    DropdownItem,
    DropdownTrigger,
    Dropdown,
    DropdownMenu,
} from "@nextui-org/react";

export default function Appbar() {
    const { data: session } = useSession();
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        { "Home": "/" },
        { "Events": "/events" },
        { "Our Team": "/our-team" },
        { "Gallery": "/gallery" },
        { "Blogs": "/blogs" },
        { "Add Blogs": "/add-blogs" },
    ];

    const filteredMenuItems = menuItems.filter(
        (item) => !(item["Add Blogs"] && !session)
    );

    return (
        <Navbar
            isBordered
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
        >
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                />
            </NavbarContent>
            {filteredMenuItems.map((item, index) => {
                const [itemName, itemLink] = Object.entries(item)[0];
                return (
                    <NavbarContent
                        key={`${item}-${index}`}
                        className="hidden sm:flex gap-4"
                        justify="center"
                    >
                        <NavbarItem>
                            <Link
                                className="w-full"
                                color="foreground"
                                href={itemLink}
                                size="lg"
                            >
                                {itemName}
                            </Link>
                        </NavbarItem>
                    </NavbarContent>
                );
            })}

            <NavbarContent justify="end">
                <NavbarItem as="div">
                    <Dropdown placement="bottom-end">
                        <DropdownTrigger>
                            {session && session.user ? (
                                <Avatar
                                    className="cursor-pointer"
                                    src={session.user.image}
                                />
                            ) : (
                                <Avatar className="cursor-pointer" />
                            )}
                        </DropdownTrigger>
                        <DropdownMenu
                            aria-label="Profile Actions"
                            variant="flat"
                            className="text-gray-500"
                        >
                            <DropdownItem key="profile" className="h-14 gap-2">
                                {session && session.user ? (
                                    <p className="font-semibold">Signed in as</p>
                                ) : (
                                    <p className="font-semibold">Guest</p>
                                )}
                                {session && session.user && (
                                    <p className="font-semibold">{session.user.email}</p>
                                )}
                            </DropdownItem>
                            <DropdownItem key="logout" color="danger">
                                {session && session.user ? (
                                    <button onClick={() => signOut()} className="text-red-600">
                                        Sign Out
                                    </button>
                                ) : (
                                    <button onClick={() => signIn()} className="text-green-600">
                                        Sign In
                                    </button>
                                )}
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
                {filteredMenuItems.map((item, index) => {
                    const [itemName, itemLink] = Object.entries(item)[0];
                    return (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                className="w-full"
                                color="foreground"
                                href={itemLink}
                                size="lg"
                            >
                                {itemName}
                            </Link>
                        </NavbarMenuItem>
                    );
                })}
            </NavbarMenu>
        </Navbar>
    );
}

