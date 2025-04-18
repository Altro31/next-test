"use client";
import dynamic from "next/dynamic";
import type { PropsWithChildren } from "react";

const ClientComponent = dynamic(() => import("@/components/ClientComponent"), {
  ssr: false,
});

export default function ClientOnlyComponent({ children }: PropsWithChildren) {
  return <ClientComponent>Y no tengo SSR{children}</ClientComponent>;
}
