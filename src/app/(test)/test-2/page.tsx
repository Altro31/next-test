import ClientComponent from "@/components/ClientComponent";
import ServerComponent from "@/components/ServerComponent";

export default function Page() {
  return (
    <div className="text-center h-screen flex items-center flex-col justify-center gap-4">
      <p>
        Los Server Components hijos de un Client Component con renderizado
        condicional, se mantienen como Server Components
      </p>
      <ClientComponent delay>
        <ServerComponent />
      </ClientComponent>
      <p className="text-start bg-gray-900 p-2 rounded-md">
        1. Revisar terminal del servidor
        <br />
        2. Revisar terminal del navegador
        <br />
        En cada una aparecen los componentes que se renderizaron, además
        <br />
        cuando se muestra el Server Component hijo, no se muestra ningún<br/>
        relacionado a ese componente en ninguna de las consolas, sólo<br/>
        se muestra el mensaje correspondiente al Client Component, porque<br/>
        se re-renderizó
        <br />
      </p>
    </div>
  );
}
