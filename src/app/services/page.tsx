export default function ServicesPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-4">Nuestros Servicios</h1>
      <ul className="space-y-3">
        <li className="p-4 bg-white shadow rounded-lg">
          Desarrollo Web con Next.js y React
        </li>
        <li className="p-4 bg-white shadow rounded-lg">
          Aplicaciones móviles
        </li>
        <li className="p-4 bg-white shadow rounded-lg">
          Consultoría tecnológica y SEO
        </li>
      </ul>
    </section>
  );
}