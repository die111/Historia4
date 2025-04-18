import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function CardExample() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Componente Card</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Card básica */}
        <Card>
          <CardHeader>
            <CardTitle>Tarjeta básica</CardTitle>
            <CardDescription>Esta es una tarjeta básica con título y descripción</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Este es el contenido principal de la tarjeta. Aquí puedes colocar cualquier información que necesites
              mostrar.
            </p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancelar</Button>
            <Button>Guardar</Button>
          </CardFooter>
        </Card>

        {/* Card con imagen */}
        <Card className="overflow-hidden">
          <div className="h-48 w-full">
            <img
              src="/placeholder.svg?height=200&width=400"
              alt="Imagen de ejemplo"
              className="h-full w-full object-cover"
            />
          </div>
          <CardHeader>
            <CardTitle>Tarjeta con imagen</CardTitle>
            <CardDescription>Una tarjeta que incluye una imagen en la parte superior</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Contenido de la tarjeta con imagen. Ideal para mostrar productos, artículos o cualquier elemento visual.
            </p>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Ver más</Button>
          </CardFooter>
        </Card>

        {/* Card de perfil */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" alt="Usuario" />
                <AvatarFallback>JP</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>Juan Pérez</CardTitle>
                <CardDescription>Desarrollador Web</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p>
              Perfil profesional con información sobre experiencia y habilidades. Esta tarjeta es ideal para mostrar
              información de contacto.
            </p>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button>WhatssApp</Button>
          </CardFooter>
        </Card>

        {/* Card con borde personalizado */}
        <Card className="border-primary">
          <CardHeader className="bg-primary/10">
            <CardTitle>Tarjeta con estilo personalizado</CardTitle>
            <CardDescription>Ejemplo de personalización con colores y bordes</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <p>
              Las tarjetas pueden personalizarse con diferentes estilos, colores y bordes para adaptarse al diseño de tu
              aplicación.
            </p>
          </CardContent>
          <CardFooter className="bg-muted/50">
            <Button variant="outline" className="w-full">
              Acción personalizada
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
