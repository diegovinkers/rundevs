"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion"

export default function Header() {
  return (
    <motion.header 
      className="flex items-center justify-between px-8 py-4 shadow-md bg-white sticky top-0 z-50"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link href="/" className="text-2xl font-bold text-neutral-900">
        RunDevs
      </Link>

      <nav className="flex gap-6">
        <Link href="/services" className="hover:text-neutral-700">Servicios</Link>
        <Link href="/contact" className="hover:text-neutral-700">Contacto</Link>
      </nav>

      <Button asChild>
        <Link href="/contact">Hablemos 🚀</Link>
      </Button>
    </motion.header>
  )
}
