// Path: pages/index.tsx
import Head from "next/head";
import React from "react";

import Hero from "../components/Hero";
import Services from "../components/Services";
import Differentiators from "../components/Differentiators";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Footer from "../components/layout/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import content from "../../content.json";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>{content.meta.title || "Rundevs — Landing pages para profesionales"}</title>
        <meta name="description" content={content.meta.description || "Rundevs - landings profesionales rápidas y fáciles de editar."} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
        {/* Header / Nav */}
        <header className="w-full bg-white/60 backdrop-blur-sm sticky top-0 z-40 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-4">
                <a href="#" className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-md bg-gradient-to-br from-indigo-600 to-pink-500 flex items-center justify-center text-white font-bold">
                    R
                  </div>
                  <span className="font-semibold text-lg tracking-tight">Rundevs</span>
                </a>
              </div>

              <nav className="hidden md:flex items-center gap-6">
                <a href="#servicios" className="text-sm hover:underline">Planes</a>
                <a href="#diferenciadores" className="text-sm hover:underline">Diferenciadores</a>
                <a href="#faq" className="text-sm hover:underline">FAQ</a>
                <a href="#contacto" className="text-sm font-medium rounded-md px-4 py-2 bg-indigo-600 text-white hover:opacity-95">Contratar</a>
              </nav>

              <div className="md:hidden">
                <a href="#contacto" className="inline-flex items-center px-3 py-2 rounded-md bg-indigo-600 text-white text-sm">Contratar</a>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Hero */}
          <section id="hero" className="mb-16">
            <Hero data={content.hero} />
          </section>

          {/* Servicios / Planes */}
          <section id="servicios" className="mb-20">
            <Services data={content.services} />
          </section>

          {/* Diferenciadores */}
          <section id="diferenciadores" className="mb-20">
            <Differentiators data={content.differentiators} />
          </section>

          {/* CTA sección intermedia */}
          <section id="cta-intermedia" className="mb-20">
            <CTA data={content.cta} />
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-20">
            <FAQ data={content.faq} />
          </section>
        </main>

        {/* Footer */}
        <Footer data={content.footer} />

        {/* Botón WhatsApp flotante (opcional) */}
        <WhatsAppButton phone={content.contact.whatsapp} message={content.contact.defaultWhatsappMessage} />
      </div>
    </>
  );
};

export default Home;
