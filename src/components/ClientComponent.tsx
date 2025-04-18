"use client";

import { Button } from "@/components/ui/button";
import { useState, type PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  delay?: boolean;
}

export default function ClientComponent({ children, delay = false }: Props) {
  const [show, setShow] = useState(!delay);

  console.log("ClientComponent render");

  return (
    <div className="rounded-lg bg-orange-400 p-4 aspect-square font-semibold text-center space-y-2 w-fit">
      <h2>Soy Client Component</h2>
      {show ? children : <Button onClick={() => setShow(true)}>Tócame!!!</Button>}
    </div>
  );
}
