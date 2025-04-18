  "use client"

  import {useState} from "react"
  import { Avatar, AvatarFallback, AvatarImage } from "../avatar"
  import { Badge } from "../badge"
  import { Button } from "@/components/ui/button"
  import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
  import { Separator } from "@/components/ui/separator"
  import { Shield, Star, CheckCircle, MapPin, Calendar, Languages, Flag } from "lucide-react"
  import { TenantStatusSelector } from "@/components/tenant-status-selector"
  import { CheckCircle2, Clock, AlertCircle, MessageCircle } from "lucide-react";


  type TenantStatus = "active" | "pending" | "completed" | "cancelled" | "late"
  export default function UserProfile() {
    const [tenantStatus, setTenantStatus] =
    useState<TenantStatus>("active")

    const statusConfig = {
      active: {
        label: "Activo",
        color: "bg-green-100 text-green-800 border-green-200",
        icon: CheckCircle,
        description: "Este arrendatario tiene un contrato vigente y esta al dia con sus pagos"
      },
      pending:{
        label: "Pendiente",
        color: "bg.amber-100 text-amber-800 border-amber-200",
        icon: Clock,
        description: "La solicitud de este arrendatario esta en proceso de revisión o esperando aprobación.",
      },
      
      completed: {
        label: "Completado",
        color: "bg.blue-100 text-blue-800 border-blue-200",
        icon: CheckCircle2,
        description: "El periodo de alquiler de este arrendatario ha finalizado satisfactoriamente.",

      },
      cancelled: {
        label: "Cancelado",
        color: "bg.gray-100 text-gray-800 border-gray-200",
        icon: Flag,
        description: "El contrato de alquiler fue cancelado antes de su finalización",

      },
      late: {
        label: "Atrasado",
        color: "bg.red-100 text-red-800 border-red-200",
        icon: AlertCircle,
        description: "Este arrendetario tiene pagos pendientes o esta atrasado en sus obligaciones",

      },

    }

    const status = statusConfig[tenantStatus]
    const StatusIcon = status.icon

    const handleStatusChange = (newStatus: TenantStatus) => {
      setTenantStatus(newStatus)
    }
    return (
      <div className="container mx-auto py-4 px-6 ">
        {/*<div className="flex flex-col sm:flex-row
        sm:items-center sm:justify-between gap-4 mb-6">
          <TenantStatusSelector currentStatus={tenantStatus}
          onStatusChange={handleStatusChange} />
        </div>*/}
        <div className="grid md:grid-cols-[440px_1fr] gap-7">
          {/* Profile Sidebar */}
          <div className="space-y-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="h-24 w-24 mb-4">
                    <AvatarImage src="/placeholder-user.jpg" alt="User" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <h2 className="text-2xl font-bold">Juan Pérez</h2>
                  <p className="text-muted-foreground">Miembro desde 2018</p>

                  <div className="flex items-center mt-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>La Paz, Bolivia</span>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="space-y-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500" fill="currentColor" />
                    ))}
                    <p className="ml-2 font-medium text-sm text-gray-700">5.0 (Alquileres)</p>
                  </div>

                  <div className="flex items-center">
                    <Star className="h-5 w-5 mr-2 text-amber-500" />
                    <div>
                      <p className="font-medium">73 reseñas</p>
                    </div>
                  </div>

                  <Button className="w-full mt-2 gap-2">
                    <MessageCircle className= "h-4 w-4" />WhatsApp</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Verificaciones</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                  <span>Correo electrónico</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                  <span>Número de teléfono</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                  <span>Documento de identidad</span>
                </div>
              </CardContent>
            </Card>

          { /*<Card>
              <CardHeader>
                <CardTitle>Información</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center">
                  <Languages className="h-5 w-5 mr-2" />
                  <span>Habla Español, Inglés</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>Tasa de respuesta: 100%</span>
                </div>
                <div className="flex items-center">
                  <Flag className="h-5 w-5 mr-2" />
                  <span>Reportar este perfil</span>
                </div>
              </CardContent>
            </Card>*/}
          </div>
          

          {/* Main Content */}
          <div className="space-y-4">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <h3 className="text-2xl font-bold">Información</h3>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <TenantStatusSelector currentStatus={tenantStatus}
                onStatusChange={handleStatusChange} />
            </div>

                {/*<div className= {`flex items-center gap-2 px-4 py-2 rounded-lg ${status.color} border`}>
                  <StatusIcon className="h-5 w-5" />
                  <span className="font-medium">{status.label}

                  </span>
                </div>*/}
            </div> 

            <Card className="mb-4">
              <CardContent className="pt-6">
                <div className="flex item-start gap-3">
                  <StatusIcon className={`h-6 w-6 mt-0.5 flex-shrink-0 ${status.color.split("")[1]}
                  `}/>
                  <p>{status.description}</p>
                </div>
              </CardContent>
            </Card>

          </div>
              
            <div className="mt-6 border-t border-gray-100">
              <dl className="divide-y divide-gray-100">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm/6 font-medium text-gray-900">Nombre </dt>
                  <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">Margot </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm/6 font-medium text-gray-900">Apellido</dt>
                  <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">Foster</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm/6 font-medium text-gray-900">Ocupación</dt>
                  <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">Desarrollador Backend</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm/6 font-medium text-gray-900">Dirección</dt>
                  <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">Av. Miraflores</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm/6 font-medium text-gray-900">Correo electrónico</dt>
                  <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">margot.foster@example.com</dd>
                </div>
              </dl>
            </div>
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">Reseñas</h2>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-amber-500 mr-1" />
                  <span className="font-bold">4.9</span>
                  <span className="text-muted-foreground ml-1">(73 reseñas)</span>
                </div>
              </div>

              <div className="space-y-6">
                {/* Review Item */}
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" alt="María" />
                        <AvatarFallback>ML</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center mb-1">
                          <h3 className="font-semibold">María López</h3>
                          <span className="text-muted-foreground text-sm ml-2">Marzo 2023</span>
                        </div>
                        <p>
                          Juan fue un cliente excelente. El coche estaba muy limpio 
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Review Item */}
                <Card>
                  <CardContent className="pt-10">
                    <div className="flex items-start gap-4">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" alt="Carlos" />
                        <AvatarFallback>CR</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center mb-1">
                          <h3 className="font-semibold">Carlos Rodríguez</h3>
                          <span className="text-muted-foreground text-sm ml-2">Febrero 2023</span>
                        </div>
                        <p>
                          La comunicación con Juan fue excelente. Siempre respondió rápidamente a mis preguntas 
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Review Item */}
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" alt="Ana" />
                        <AvatarFallback>AS</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center mb-1">
                          <h3 className="font-semibold">Ana Sánchez</h3>
                          <span className="text-muted-foreground text-sm ml-2">Enero 2023</span>
                        </div>
                        <p>
                          Excelente experiencia. 
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Button variant="outline" className="w-full">
                  Ver todas las reseñas
                </Button>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    )
  }
