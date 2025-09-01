"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center py-24 px-6 bg-gradient-to-b from-neutral-100 to-white">
      <motion.h1 
        className="text-5xl font-extrabold mb-6 text-neutral-900"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Construimos el futuro con <span className="text-neutral-700">RunDevs</span>
      </motion.h1>

      <motion.p 
        className="text-lg max-w-2xl text-neutral-600 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Desarrollo web y soluciones digitales modernas, escalables y potentes para startups y empresas.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Button asChild size="lg">
          <Link href="/contact">Comencemos</Link>
        </Button>
      </motion.div>
    </section>
  )
}
