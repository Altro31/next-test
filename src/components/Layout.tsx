import { Button } from "@/components/ui/button";
import Link from "next/link";
import { type PropsWithChildren } from "react";

type Props = PropsWithChildren;

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-screen">
      <nav className="absolute w-full p-4 flex justify-center gap-2">
        <Button size="sm" variant="ghost" asChild>
          <Link href="/">Test 1</Link>
        </Button>
        <Button size="sm" variant="ghost" asChild>
          <Link href="/test-2">Test 2</Link>
        </Button>
        <Button size="sm" variant="ghost" asChild>
          <Link href="/test-3">Test 2</Link>
        </Button>
      </nav>
      {children}
    </div>
  );
}
