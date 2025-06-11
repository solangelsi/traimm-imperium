import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Wrench, Zap, Truck, Shield, Clock, CheckCircle, Phone, ArrowRight } from 'lucide-react'

export default function ServiciosPage() {
  const services = [
    {
      id: 1,
      icon: <Wrench className="w-12 h-12" />,
      title: "Fabricación Industrial",
      description: "Fabricación de estructuras metálicas, tanques, recipientes y componentes industriales según especificaciones técnicas.",
      image: "https://ugc.same-assets.com/zyaNnxm1Kd27Yk86YIszmw7_7kMCzbie.jpeg",
      features: [
        "Estructuras metálicas complejas",
        "Tanques y recipientes a presión",
        "Componentes industriales",
        "Soldadura certificada",
        "Control de calidad ISO"
      ],
      capabilities: [
        "Capacidad hasta 50 toneladas",
        "Soldadura MIG, TIG, Arco",
        "Certificación AWS D1.1",
        "Pruebas no destructivas"
      ]
    },
    {
      id: 2,
      icon: <Zap className="w-12 h-12" />,
      title: "Corte Láser CNC",
      description: "Corte de precisión con tecnología láser de última generación para placas de acero de diferentes espesores.",
      image: "https://ugc.same-assets.com/1ivddDDlBZtCDbOXlTHhSwRR5f00g4UC.jpeg",
      features: [
        "Corte láser de alta precisión",
        "Espesores hasta 25mm",
        "Tolerancias de ±0.1mm",
        "Bordes limpios sin rebaba",
        "Programación CAD/CAM"
      ],
      capabilities: [
        "Mesa de corte 3000x1500mm",
        "Potencia láser 4kW",
        "Corte en acero, inoxidable, aluminio",
        "Formas complejas y detalles finos"
      ]
    },
    {
      id: 3,
      icon: <Truck className="w-12 h-12" />,
      title: "Laminado y Conformado",
      description: "Proceso de laminado y conformado de placas para crear perfiles, cilindros y formas específicas.",
      image: "https://ugc.same-assets.com/qsx25wRMBJysNRIbBdKmB4siYI9RWjMc.png",
      features: [
        "Laminado de placas gruesas",
        "Conformado de cilindros",
        "Perfiles especiales",
        "Doblado de precisión",
        "Acabados superficiales"
      ],
      capabilities: [
        "Capacidad hasta 12mm espesor",
        "Radio mínimo 100mm",
        "Longitud hasta 6000mm",
        "Control numérico CNC"
      ]
    }
  ]

  const additionalServices = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Tratamientos Superficiales",
      description: "Galvanizado, pintura industrial y recubrimientos especiales"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Entregas Rápidas",
      description: "Tiempos de entrega optimizados y servicio urgente"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Control de Calidad",
      description: "Inspección completa y certificación de todos los trabajos"
    }
  ]

  const handleWhatsAppContact = (serviceName?: string) => {
    const phoneNumber = "573001234567"
    const message = serviceName
      ? `Hola, me interesa obtener información sobre el servicio de ${serviceName}. ¿Podrían enviarme más detalles y cotización?`
      : "Hola, me interesa conocer más sobre sus servicios industriales. ¿Podrían proporcionarme información detallada?"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Page Header */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
              SERVICIOS ESPECIALIZADOS
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bebas tracking-wider text-foreground mb-6">
              NUESTROS SERVICIOS
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Servicios integrales de fabricación, corte y conformado de acero con tecnología de vanguardia
              y más de 15 años de experiencia en el sector industrial.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={service.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
                {/* Service Image */}
                <div className="lg:w-1/2">
                  <div className="aspect-video rounded-lg overflow-hidden steel-texture p-4">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>

                {/* Service Content */}
                <div className="lg:w-1/2">
                  <Card className="card-industrial">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                          {service.icon}
                        </div>
                        <h2 className="text-3xl font-bebas tracking-wider text-foreground">
                          {service.title}
                        </h2>
                      </div>

                      <p className="text-lg text-muted-foreground mb-6">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="mb-6">
                        <h3 className="text-lg font-bold text-foreground mb-4">Características:</h3>
                        <ul className="space-y-2">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-center text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-primary mr-3" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Capabilities */}
                      <div className="mb-8">
                        <h3 className="text-lg font-bold text-foreground mb-4">Capacidades:</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {service.capabilities.map((capability) => (
                            <div key={capability} className="bg-muted/30 p-3 rounded-lg">
                              <span className="text-sm text-foreground font-medium">{capability}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Button
                        onClick={() => handleWhatsAppContact(service.title)}
                        className="btn-industrial"
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Solicitar Cotización
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bebas tracking-wider text-foreground mb-4">
              SERVICIOS ADICIONALES
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Servicios complementarios para brindar soluciones integrales a nuestros clientes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service) => (
              <Card key={service.title} className="card-industrial text-center group hover:scale-105 transition-transform duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bebas tracking-wider text-foreground mb-4">
              NUESTRO PROCESO
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Un proceso estructurado para garantizar la máxima calidad en cada proyecto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consulta", description: "Análisis de requerimientos y especificaciones técnicas" },
              { step: "02", title: "Cotización", description: "Presupuesto detallado y tiempos de entrega" },
              { step: "03", title: "Producción", description: "Fabricación con los más altos estándares de calidad" },
              { step: "04", title: "Entrega", description: "Inspección final y entrega en tiempo y forma" }
            ].map((item, index) => (
              <div key={item.step} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bebas font-bold text-primary-foreground">{item.step}</span>
                  </div>
                  {index < 3 && (
                    <ArrowRight className="absolute top-8 left-1/2 transform translate-x-8 hidden md:block w-6 h-6 text-primary" />
                  )}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-4">
          <Card className="card-industrial max-w-4xl mx-auto">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bebas tracking-wider text-foreground mb-4">
                ¿NECESITA UN SERVICIO ESPECIALIZADO?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Contáctenos para discutir su proyecto y recibir una cotización personalizada
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => handleWhatsAppContact()}
                  className="btn-industrial text-lg px-8 py-4"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  WhatsApp
                </Button>
                <Button variant="outline" className="text-lg px-8 py-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Ver Proyectos
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
