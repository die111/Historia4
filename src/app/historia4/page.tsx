"use client";

import { ProductosTable } from "@/components/ui/historia4/ProductosTable";
import Header from "@/components/ui/Header";
import { useEffect, useState } from "react";

export default function Historia4Page() {
  const [hostId, setHostId] = useState(null);

  useEffect(() => {
    setHostId(1); 
  }, []);

  return (
    <div>
      <Header />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">Historial de Reservaciones</h1>
        {hostId ? (
          <ProductosTable />
        ) : (
          <div className="text-center py-8">Cargando información del host...</div>
        )}
      </div>
    </div>
  );
}