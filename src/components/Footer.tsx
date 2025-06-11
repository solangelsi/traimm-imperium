import React from 'react'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border steel-texture">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bebas text-lg font-bold">TI</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bebas text-lg tracking-wider text-foreground">TRAIMM</span>
                <span className="font-bebas text-xs tracking-widest text-muted-foreground">IMPERIUM</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Especialistas en placas de acero de alta calidad. Fabricación, corte y laminado profesional para la industria.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-foreground uppercase tracking-wider">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/catalogo" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Catálogo
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="font-bold text-foreground uppercase tracking-wider">Productos</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Placas Hardox</li>
              <li className="text-sm text-muted-foreground">Acero Inoxidable</li>
              <li className="text-sm text-muted-foreground">Acero Galvanizado</li>
              <li className="text-sm text-muted-foreground">Placas Navales</li>
              <li className="text-sm text-muted-foreground">Aceros Especiales</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-bold text-foreground uppercase tracking-wider">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">+57 300 123 4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">info@traimmimperium.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">Medellín, Colombia</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">Lun - Vie: 8:00 - 17:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/40 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Traimm Imperium. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacidad" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Política de Privacidad
            </Link>
            <Link href="/terminos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Términos de Servicio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer