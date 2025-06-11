"use client"

import React, { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Search, Filter, ShoppingCart, CheckCircle, Phone } from 'lucide-react'

interface Product {
  id: number
  name: string
  category: string
  description: string
  image: string
  thickness: string[]
  dimensions: string
  hardness?: string
  grade?: string
  coating?: string
  price: string
  inStock: boolean
  features: string[]
}

export default function CatalogoPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = [
    { id: 'all', name: 'Todos los Productos', count: 24 },
    { id: 'hardox', name: 'Placas Hardox', count: 8 },
    { id: 'inoxidable', name: 'Acero Inoxidable', count: 6 },
    { id: 'galvanizado', name: 'Acero Galvanizado', count: 5 },
    { id: 'naval', name: 'Placas Navales', count: 5 }
  ]

  const products: Product[] = [
    // Hardox Products
    {
      id: 1,
      name: "Hardox 400",
      category: 'hardox',
      description: "Placa de acero antiabrasivo con dureza 400 HBW",
      image: "https://ugc.same-assets.com/zgHpBKGRuPxbNNbJwOM0uKG-aPzw7645.png",
      thickness: ["6mm", "8mm", "10mm", "12mm", "15mm", "20mm"],
      dimensions: "1500x3000mm",
      hardness: "400 HBW",
      price: "Consultar",
      inStock: true,
      features: ["Resistencia al desgaste", "Soldabilidad excelente", "Formabilidad buena"]
    },
    {
      id: 2,
      name: "Hardox 500",
      category: 'hardox',
      description: "Placa de acero antiabrasivo con dureza 500 HBW",
      image: "https://ugc.same-assets.com/zgHpBKGRuPxbNNbJwOM0uKG-aPzw7645.png",
      thickness: ["8mm", "10mm", "12mm", "15mm", "20mm", "25mm"],
      dimensions: "1500x3000mm",
      hardness: "500 HBW",
      price: "Consultar",
      inStock: true,
      features: ["Máxima resistencia", "Larga vida útil", "Aplicaciones pesadas"]
    },
    {
      id: 3,
      name: "Hardox 600",
      category: 'hardox',
      description: "Placa de acero antiabrasivo con dureza 600 HBW",
      image: "https://ugc.same-assets.com/zgHpBKGRuPxbNNbJwOM0uKG-aPzw7645.png",
      thickness: ["6mm", "8mm", "10mm", "12mm", "15mm"],
      dimensions: "1500x3000mm",
      hardness: "600 HBW",
      price: "Consultar",
      inStock: true,
      features: ["Dureza extrema", "Resistencia superior", "Aplicaciones críticas"]
    },
    // Stainless Steel Products
    {
      id: 4,
      name: "Acero Inoxidable 304",
      category: 'inoxidable',
      description: "Acero inoxidable austenítico estándar",
      image: "https://ugc.same-assets.com/FDBms2yCmFTAfrN897Ks3IWH4mWpsL1b.jpeg",
      thickness: ["1mm", "2mm", "3mm", "4mm", "5mm", "6mm"],
      dimensions: "1200x2400mm",
      grade: "304",
      price: "Consultar",
      inStock: true,
      features: ["Resistencia a la corrosión", "Acabado brillante", "Fácil limpieza"]
    },
    {
      id: 5,
      name: "Acero Inoxidable 316",
      category: 'inoxidable',
      description: "Acero inoxidable con resistencia marina",
      image: "https://ugc.same-assets.com/FDBms2yCmFTAfrN897Ks3IWH4mWpsL1b.jpeg",
      thickness: ["1mm", "2mm", "3mm", "4mm", "5mm", "6mm", "8mm"],
      dimensions: "1200x2400mm",
      grade: "316",
      price: "Consultar",
      inStock: true,
      features: ["Resistencia química", "Ambiente marino", "Calidad médica"]
    },
    // Galvanized Products
    {
      id: 6,
      name: "Lámina Galvanizada Cal 20",
      category: 'galvanizado',
      description: "Lámina de acero galvanizado calibre 20",
      image: "https://ugc.same-assets.com/jxLFL-OKM-hVe33XV72r1HUNuOwetyXv.jpeg",
      thickness: ["0.9mm"],
      dimensions: "1200x2400mm",
      coating: "Z275",
      price: "Consultar",
      inStock: true,
      features: ["Protección zinc", "Resistencia corrosión", "Uso exterior"]
    },
    {
      id: 7,
      name: "Lámina Galvanizada Cal 18",
      category: 'galvanizado',
      description: "Lámina de acero galvanizado calibre 18",
      image: "https://ugc.same-assets.com/jxLFL-OKM-hVe33XV72r1HUNuOwetyXv.jpeg",
      thickness: ["1.2mm"],
      dimensions: "1200x2400mm",
      coating: "Z275",
      price: "Consultar",
      inStock: true,
      features: ["Mayor espesor", "Durabilidad", "Construcción"]
    },
    // Naval Plates
    {
      id: 8,
      name: "Placa Naval AH36",
      category: 'naval',
      description: "Placa de acero naval alta resistencia",
      image: "https://ugc.same-assets.com/OadHGc--2lbTS7H9J88xB8ytdN1nMwZf.jpeg",
      thickness: ["6mm", "8mm", "10mm", "12mm", "15mm", "20mm"],
      dimensions: "2000x6000mm",
      grade: "AH36",
      price: "Consultar",
      inStock: true,
      features: ["Certificación naval", "Alta tenacidad", "Soldabilidad"]
    }
  ]

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleWhatsAppQuote = (product: Product) => {
    const phoneNumber = "573001234567"
    const message = `Hola, me interesa solicitar una cotización para:

Producto: ${product.name}
Descripción: ${product.description}
Dimensiones: ${product.dimensions}

Por favor envíenme información de precios y disponibilidad.`
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
            <h1 className="text-5xl md:text-6xl font-bebas tracking-wider text-foreground mb-6">
              CATÁLOGO DE PRODUCTOS
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Explore nuestra amplia gama de placas de acero de alta calidad para aplicaciones industriales
            </p>

            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories and Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">

            {/* Categories Sidebar */}
            <div className="lg:w-1/4">
              <Card className="card-industrial sticky top-24">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <Filter className="w-5 h-5 text-primary mr-2" />
                    <h3 className="text-lg font-bold text-foreground">Categorías</h3>
                  </div>
                  <ul className="space-y-3">
                    {categories.map((category) => (
                      <li key={category.id}>
                        <button
                          onClick={() => setSelectedCategory(category.id)}
                          className={`w-full text-left p-3 rounded-lg transition-colors ${
                            selectedCategory === category.id
                              ? 'bg-primary text-primary-foreground'
                              : 'hover:bg-muted text-muted-foreground hover:text-foreground'
                          }`}
                        >
                          <div className="flex justify-between items-center">
                            <span className="font-medium">{category.name}</span>
                            <Badge variant="secondary" className="ml-2">
                              {category.count}
                            </Badge>
                          </div>
                        </button>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Products Grid */}
            <div className="lg:w-3/4">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-foreground">
                  {selectedCategory === 'all' ? 'Todos los Productos' :
                   categories.find(cat => cat.id === selectedCategory)?.name}
                  <span className="text-muted-foreground ml-2">
                    ({filteredProducts.length} productos)
                  </span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <Card key={product.id} className="card-industrial group hover:scale-105 transition-transform duration-300">
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-foreground">{product.name}</h3>
                        {product.inStock && (
                          <Badge className="bg-green-500/20 text-green-500 border-green-500/30">
                            En Stock
                          </Badge>
                        )}
                      </div>

                      <p className="text-muted-foreground mb-4">{product.description}</p>

                      {/* Technical Specs */}
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Dimensiones:</span>
                          <span className="text-foreground font-medium">{product.dimensions}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Espesores:</span>
                          <span className="text-foreground font-medium">
                            {product.thickness.slice(0, 3).join(', ')}{product.thickness.length > 3 ? '...' : ''}
                          </span>
                        </div>
                        {product.hardness && (
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Dureza:</span>
                            <span className="text-foreground font-medium">{product.hardness}</span>
                          </div>
                        )}
                        {product.grade && (
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Grado:</span>
                            <span className="text-foreground font-medium">{product.grade}</span>
                          </div>
                        )}
                      </div>

                      {/* Features */}
                      <ul className="space-y-1 mb-4">
                        {product.features.slice(0, 2).map((feature) => (
                          <li key={feature} className="flex items-center text-sm text-muted-foreground">
                            <CheckCircle className="w-3 h-3 text-primary mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {/* Price and Actions */}
                      <div className="border-t border-border pt-4">
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-2xl font-bold text-primary">{product.price}</span>
                          <Button
                            onClick={() => handleWhatsAppQuote(product)}
                            className="btn-industrial"
                            size="sm"
                          >
                            <Phone className="w-4 h-4 mr-2" />
                            Cotizar
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-xl text-muted-foreground">
                    No se encontraron productos que coincidan con su búsqueda.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
