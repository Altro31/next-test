import ClientComponent from "@/components/ClientComponent";
import ServerComponent from "@/components/ServerComponent";

export default function Page() {
  return (
    <div className="text-center h-screen flex items-center flex-col justify-center gap-4">
      <p>
        Un Client Component no convierte a sus hijos en otros Client Components
      </p>
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
      <p className="text-start bg-gray-900 p-2 rounded-md">
        1. Revisar terminal del servidor<br/>
        2. Revisar terminal del navegador<br/>
        En cada una aparecen los componentes que se renderizaron
      </p>
    </div>
  );
}
