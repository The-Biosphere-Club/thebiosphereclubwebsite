'use client'
import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";
import React from "react";

const Providers = (props) => {
    return <NextUIProvider><SessionProvider>{props.children}</SessionProvider></NextUIProvider>;
};

export default Providers;
