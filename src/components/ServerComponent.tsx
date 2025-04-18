import { type PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  name?: string;
}

export default function ServerComponent({
  children,
  name = "ServerComponent",
}: Props) {
  console.log(`${name} render`);

  return (
    <div className="rounded-lg bg-green-400 p-4 font-semibold text-center">
      <h2>Soy un Server</h2>
      <h2>Component</h2>
      {children}
    </div>
  );
}
