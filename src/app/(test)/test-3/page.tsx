import ClientComponent from "@/components/ClientComponent";
import ClientOnlyComponent from "@/components/ClientOnlyComponent";
import ServerComponent from "@/components/ServerComponent";
import { connection } from "next/server";

export default async function Page() {
  await connection();
  return (
    <div className="text-center h-screen flex items-center flex-col justify-center gap-4">
      <p>Los Client Components padres no afectan el SEO</p>
      <div className="flex gap-2">
        <ClientComponent>
          <ServerComponent />
        </ClientComponent>
        <ClientOnlyComponent>
          <ServerComponent />
        </ClientOnlyComponent>
      </div>
      <p className="text-start bg-gray-900 p-2 rounded-md">
        Se presentan dos Client Components. El 2do no tiene SSR,
        <br />
        Por lo que solo se renderizará en el cliente.
        <br />
        Si se desactiva el Javscript, y se refresca la página
        <br />
        se puede notar que solo el 1er componente es el que aparece
        <br />
        por lo tanto, como el primer Client Component, que es el que tiene
        <br />
        el comportamiento por defecto de Next.js, se renderiza aún sin JS,
        <br />
        por lo que se prueba que no afecta el SEO
        <br />
      </p>
    </div>
  );
}
