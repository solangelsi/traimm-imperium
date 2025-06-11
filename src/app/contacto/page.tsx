"use client"

import type React from 'react'
import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Building2 } from 'lucide-react'

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    mensaje: ''
  })

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Teléfono",
      info: ["+57 300 123 4567", "+57 4 444 5555"],
      description: "Lunes a Viernes 8:00 - 17:00"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      info: ["info@traimmimperium.com", "ventas@traimmimperium.com"],
      description: "Respuesta en menos de 24 horas"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Ubicación",
      info: ["Calle 50 #45-67", "Medellín, Antioquia, Colombia"],
      description: "Zona industrial La América"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Horarios",
      info: ["Lunes - Viernes: 8:00 - 17:00", "Sábados: 8:00 - 12:00"],
      description: "Atención personalizada"
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create WhatsApp message with form data
    const phoneNumber = "573001234567"
    const message = `Hola, me gustaría contactarlos con la siguiente información:

Nombre: ${formData.nombre}
Empresa: ${formData.empresa}
Email: ${formData.email}
Teléfono: ${formData.telefono}

Mensaje:
${formData.mensaje}`

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')

    // Reset form
    setFormData({
      nombre: '',
      empresa: '',
      email: '',
      telefono: '',
      mensaje: ''
    })
  }

  const handleWhatsAppDirect = () => {
    const phoneNumber = "573001234567"
    const message = "Hola, me gustaría obtener más información sobre sus productos y servicios."
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
              ESTAMOS AQUÍ PARA AYUDARLE
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bebas tracking-wider text-foreground mb-6">
              CONTÁCTENOS
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Póngase en contacto con nuestro equipo de expertos para discutir sus necesidades
              de acero industrial y recibir una cotización personalizada.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((item) => (
              <Card key={item.title} className="card-industrial text-center group hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                  <div className="space-y-1 mb-3">
                    {item.info.map((info) => (
                      <p key={info} className="text-muted-foreground font-medium">{info}</p>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Contact Form */}
            <Card className="card-industrial">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Send className="w-6 h-6 text-primary mr-3" />
                  <h2 className="text-2xl font-bebas tracking-wider text-foreground">
                    ENVÍENOS UN MENSAJE
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nombre" className="block text-sm font-medium text-foreground mb-2">
                        Nombre *
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Su nombre completo"
                      />
                    </div>
                    <div>
                      <label htmlFor="empresa" className="block text-sm font-medium text-foreground mb-2">
                        Empresa
                      </label>
                      <input
                        type="text"
                        id="empresa"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Nombre de su empresa"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="su@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="telefono" className="block text-sm font-medium text-foreground mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="+57 300 123 4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-foreground mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows={6}
                      value={formData.mensaje}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                      placeholder="Describa sus necesidades, especificaciones técnicas, cantidades, etc."
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button type="submit" className="btn-industrial flex-1">
                      <Send className="w-4 h-4 mr-2" />
                      Enviar Mensaje
                    </Button>
                    <Button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="bg-green-600 hover:bg-green-700 text-white flex-1"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp Directo
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Company Information and Map */}
            <div className="space-y-8">

              {/* Company Info */}
              <Card className="card-industrial">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Building2 className="w-6 h-6 text-primary mr-3" />
                    <h2 className="text-2xl font-bebas tracking-wider text-foreground">
                      TRAIMM IMPERIUM
                    </h2>
                  </div>

                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Empresa líder en el suministro de placas de acero de alta calidad para la industria colombiana.
                      Con más de 15 años de experiencia, ofrecemos productos y servicios especializados para
                      satisfacer las necesidades más exigentes del sector industrial.
                    </p>

                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border/40">
                      <div>
                        <h4 className="font-bold text-foreground mb-2">Especialidades:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Placas Hardox</li>
                          <li>• Acero Inoxidable</li>
                          <li>• Acero Galvanizado</li>
                          <li>• Placas Navales</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-2">Servicios:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Fabricación</li>
                          <li>• Corte Láser</li>
                          <li>• Laminado</li>
                          <li>• Tratamientos</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="card-industrial">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">Nuestra Ubicación</h3>
                  <div className="aspect-video bg-muted/30 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                      <p className="text-foreground font-medium">Medellín, Antioquia</p>
                      <p className="text-muted-foreground text-sm">Zona Industrial La América</p>
                      <p className="text-muted-foreground text-sm mt-2">Calle 50 #45-67</p>
                    </div>
                  </div>
                  <div className="mt-4 text-sm text-muted-foreground">
                    <p>• Fácil acceso por transporte público</p>
                    <p>• Amplio parqueadero para visitantes</p>
                    <p>• Cerca de la autopista sur</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="card-industrial max-w-4xl mx-auto">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bebas tracking-wider text-foreground mb-4">
                ¿NECESITA ATENCIÓN URGENTE?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Para proyectos urgentes o consultas fuera del horario normal, contáctenos por WhatsApp
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleWhatsAppDirect}
                  className="btn-industrial text-lg px-8 py-4"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp 24/7
                </Button>
                <div className="flex items-center justify-center text-muted-foreground">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>Respuesta rápida garantizada</span>
                </div>
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
