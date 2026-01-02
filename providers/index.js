"use client"
import { UiProvider } from "./UiProvider";
import { SessionProvider } from "next-auth/react";

export default function Providers({ children }) {
  return (
    <SessionProvider>
      <UiProvider>{children}</UiProvider>
    </SessionProvider>
  );
}
