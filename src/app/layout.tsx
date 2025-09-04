import type { Metadata } from "next";
import "./css/globals.css";


export const metadata: Metadata = {
  title: "RunDevs | Desarrollo Web y Software",
  description: "Agencia de desarrollo web y software a medida con foco en escalabilidad y diseño.",
  openGraph: {
    title: "RunDevs | Desarrollo Web y Software",
    description: "Creamos software y sitios web de alto rendimiento.",
    url: "https://rundevs.com",
    siteName: "RunDevs",
    images: [
      {
        url: "https://rundevs.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_ES",
    type: "website",
  },
};

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">{children}</main>
    </div>
  );
}
