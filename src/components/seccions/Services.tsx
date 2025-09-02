"use client"

import { motion } from "framer-motion"
import { Code, Globe, Smartphone } from "lucide-react"

const services = [
  { icon: <Code className="w-10 h-10" />, title: "Desarrollo Web", desc: "Aplicaciones modernas con Next.js y React." },
  { icon: <Globe className="w-10 h-10" />, title: "Startups & SaaS", desc: "Soluciones digitales escalables para crecer." },
  { icon: <Smartphone className="w-10 h-10" />, title: "Apps Responsivas", desc: "Diseños optimizados para todos los dispositivos." },
]

export default function Services() {
  return (
    <section className="py-20 px-6 bg-neutral-50">
      <h2 className="text-4xl font-bold text-center mb-12">Nuestros Servicios</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {services.map((s, i) => (
          <motion.div 
            key={i}
            className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 text-neutral-800">{s.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-neutral-600">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
