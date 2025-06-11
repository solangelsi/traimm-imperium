"use client"

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Phone, Menu, X } from 'lucide-react'
import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Inicio', href: '/' },
    { name: 'Catálogo', href: '/catalogo' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Contacto', href: '/contacto' },
  ]

  const handleWhatsAppContact = () => {
    const phoneNumber = "573001234567" // Reemplazar con número real
    const message = "Hola, me interesa obtener información sobre sus productos de acero."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bebas text-xl font-bold">TI</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bebas text-xl tracking-wider text-foreground">TRAIMM</span>
            <span className="font-bebas text-sm tracking-widest text-muted-foreground">IMPERIUM</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* WhatsApp Contact Button */}
        <div className="hidden md:flex items-center space-x-4">
          <Button
            onClick={handleWhatsAppContact}
            className="btn-industrial"
            size="sm"
          >
            <Phone className="w-4 h-4 mr-2" />
            Cotizar
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button
              onClick={handleWhatsAppContact}
              className="btn-industrial w-full mt-4"
              size="sm"
            >
              <Phone className="w-4 h-4 mr-2" />
              Cotizar por WhatsApp
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
