"use client"

import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="w-full bg-white shadow-md">
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image 
            src="/logo.png" 
            alt="Logo de la empresa" 
            width={100} 
            height={100} 
            priority 
          />
        </Link>

        {/* Links de navegación */}
        <div className="flex space-x-6">
          <Link href="/about" className="hover:text-blue-600">Sobre nosotros</Link>
          <Link href="/services" className="hover:text-blue-600">Servicios</Link>
          <Link href="/blog" className="hover:text-blue-600">Blog</Link>
          <Link href="/contact" className="hover:text-blue-600">Contacto</Link>
        </div>
      </nav>
    </header>
  )
}
