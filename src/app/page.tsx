export default function HomePage() {
  return (
    <section className="text-center">
      <h1 className="text-4xl font-bold mb-4">
        Bienvenido a Rundevs
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Desarrollo de software a medida con foco en calidad, escalabilidad y SEO.
      </p>
      <a
        href="/services"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Ver Servicios
      </a>
    </section>
  );
}
