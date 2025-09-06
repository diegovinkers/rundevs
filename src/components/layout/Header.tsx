"use client";

import Link from "next/link";

export function Header() {
  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto flex justify-between items-center px-4 py-4">
        <Link href="/" className="text-xl font-bold text-blue-600">
          Rundevs
        </Link>
        <ul className="flex space-x-6">
          <li><Link href="/">Inicio</Link></li>
          <li><Link href="/services">Servicios</Link></li>
          <li><Link href="/about">Nosotros</Link></li>
          <li><Link href="/contact">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
}