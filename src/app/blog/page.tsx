import Link from "next/link"

const posts = [
  {
    id: 1,
    title: "Cómo mejorar el SEO de tu web con Next.js",
    date: "2025-09-01",
    excerpt: "Aprende las mejores prácticas para optimizar tu sitio con SSR y SSG en Next.js.",
    slug: "mejorar-seo-nextjs",
  },
  {
    id: 2,
    title: "Diseño moderno con Tailwind CSS",
    date: "2025-08-25",
    excerpt: "Descubre cómo crear interfaces atractivas y responsivas usando utilidades de Tailwind.",
    slug: "diseno-tailwind",
  },
  {
    id: 3,
    title: "Por qué elegir Next.js para tu empresa",
    date: "2025-08-15",
    excerpt: "Next.js ofrece rendimiento, escalabilidad y excelente SEO. Conoce sus ventajas.",
    slug: "ventajas-nextjs",
  },
]

export default function BlogPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition"
          >
            <div>
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-500 text-sm mb-4">{post.date}</p>
              <p className="text-gray-700 mb-6">{post.excerpt}</p>
            </div>
            <Link
              href={`/blog/${post.slug}`}
              className="text-blue-600 font-medium hover:underline mt-auto"
            >
              Leer más →
            </Link>
          </article>
        ))}
      </div>
    </main>
  )
}
