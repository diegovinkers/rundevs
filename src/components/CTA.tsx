import React from "react";

interface CTAProps {
  data: {
    headline: string;
    subheadline: string;
    button: string;
  };
}

const CTA: React.FC<{ data: CTAProps["data"] }> = ({ data }) => {
  return (
    <div className="bg-indigo-600 text-white rounded-2xl py-16 text-center px-6">
      <h2 className="text-3xl font-bold mb-4">{data.headline}</h2>
      <p className="text-lg mb-8">{data.subheadline}</p>
      <a
        href="#contacto"
        className="px-6 py-3 rounded-lg bg-white text-indigo-600 font-medium hover:opacity-90"
      >
        {data.button}
      </a>
    </div>
  );
};

export default CTA;
