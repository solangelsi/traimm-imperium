"use client"

import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Shield, Truck, Wrench, Phone, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  const handleWhatsAppContact = () => {
    const phoneNumber = "573001234567"
    const message = "¡Hola! Me interesa conocer más sobre sus productos de acero de alta calidad."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const productCategories = [
    {
      name: "Placas Hardox",
      description: "Acero antiabrasivo de máxima resistencia",
      image: "https://ugc.same-assets.com/zgHpBKGRuPxbNNbJwOM0uKG-aPzw7645.png",
      features: ["Alta resistencia al desgaste", "Dureza 400-600 HBW", "Soldabilidad excelente"]
    },
    {
      name: "Acero Inoxidable",
      description: "Resistente a la corrosión y oxidación",
      image: "https://ugc.same-assets.com/FDBms2yCmFTAfrN897Ks3IWH4mWpsL1b.jpeg",
      features: ["Resistencia a la corrosión", "Acabado brillante", "Grados 304, 316, 430"]
    },
    {
      name: "Acero Galvanizado",
      description: "Protección superior contra la corrosión",
      image: "https://ugc.same-assets.com/jxLFL-OKM-hVe33XV72r1HUNuOwetyXv.jpeg",
      features: ["Recubrimiento de zinc", "Larga durabilidad", "Ideal para exteriores"]
    },
    {
      name: "Placas Navales",
      description: "Calidad marina para aplicaciones críticas",
      image: "https://ugc.same-assets.com/OadHGc--2lbTS7H9J88xB8ytdN1nMwZf.jpeg",
      features: ["Certificación naval", "Alta resistencia", "Uso marítimo"]
    }
  ]

  const services = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Fabricación",
      description: "Fabricación de estructuras y componentes según especificaciones"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Corte Láser",
      description: "Corte de precisión con tecnología láser de última generación"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Laminado",
      description: "Proceso de laminado para formar placas y perfiles"
    }
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 steel-texture opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
              ESPECIALISTAS EN ACERO INDUSTRIAL
            </Badge>
            <h1 className="heading-industrial mb-6">
              PLACAS DE ACERO
              <br />
              <span className="text-primary">DE ALTA CALIDAD</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Más de 15 años suministrando placas Hardox, acero inoxidable, galvanizado y placas navales.
              Fabricación, corte y laminado profesional para la industria colombiana.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/catalogo">
                <Button className="btn-industrial text-lg px-8 py-4">
                  Explorar Catálogo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button
                variant="outline"
                onClick={handleWhatsAppContact}
                className="text-lg px-8 py-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Phone className="w-5 h-5 mr-2" />
                Cotizar Ahora
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bebas tracking-wider text-foreground mb-4">
              NUESTROS PRODUCTOS
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Amplio catálogo de placas de acero para todas las necesidades industriales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCategories.map((category) => (
              <Card key={category.name} className="card-industrial group hover:scale-105 transition-transform duration-300">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{category.name}</h3>
                  <p className="text-muted-foreground mb-4">{category.description}</p>
                  <ul className="space-y-2 mb-4">
                    {category.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full btn-industrial" size="sm">
                    Ver Productos
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bebas tracking-wider text-foreground mb-4">
              NUESTROS SERVICIOS
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Servicios especializados para transformar el acero según sus necesidades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="card-industrial text-center group hover:scale-105 transition-transform duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Más Información
                  </Button>
                </CardContent>
              </Card>
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
                ¿NECESITA UNA COTIZACIÓN?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Contáctenos ahora y reciba una cotización personalizada para sus proyectos industriales
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleWhatsAppContact}
                  className="btn-industrial text-lg px-8 py-4"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  WhatsApp
                </Button>
                <Link href="/contacto">
                  <Button variant="outline" className="text-lg px-8 py-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Contactar
                  </Button>
                </Link>
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