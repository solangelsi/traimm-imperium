"use client"

import React from 'react'
import { MessageCircle } from 'lucide-react'

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "573001234567" // Reemplazar con número real
    const message = "¡Hola! Me gustaría obtener más información sobre sus productos de acero."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div
      onClick={handleWhatsAppClick}
      className="whatsapp-float cursor-pointer flex items-center justify-center"
      title="Contactar por WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </div>
  )
}

export default WhatsAppFloat
