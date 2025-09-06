import React from "react";

interface HeroProps {
  data: {
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
}

const Hero: React.FC<{ data: HeroProps["data"] }> = ({ data }) => {
  return (
    <div className="text-center py-20 sm:py-28">
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
        {data.headline}
      </h1>
      <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
        {data.subheadline}
      </p>
      <div className="flex justify-center gap-4">
        <a
          href="#contacto"
          className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:opacity-95"
        >
          {data.ctaPrimary}
        </a>
        <a
          href="#servicios"
          className="px-6 py-3 rounded-lg bg-gray-200 text-gray-800 font-medium hover:bg-gray-300"
        >
          {data.ctaSecondary}
        </a>
      </div>
    </div>
  );
};

export default Hero;
