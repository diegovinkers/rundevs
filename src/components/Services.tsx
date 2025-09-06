import React from "react";

interface ServicesProps {
  data: {
    title: string;
    subtitle: string;
    plans: {
      name: string;
      price: string;
      description: string;
      features: string[];
      cta: string;
    }[];
  };
}

const Services: React.FC<{ data: ServicesProps["data"] }> = ({ data }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-4">{data.title}</h2>
      <p className="text-center text-gray-600 mb-10">{data.subtitle}</p>

      <div className="grid gap-8 md:grid-cols-3">
        {data.plans.map((plan, idx) => (
          <div
            key={idx}
            className="border rounded-2xl shadow-sm bg-white p-6 flex flex-col"
          >
            <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
            <p className="text-3xl font-bold mb-4">{plan.price}</p>
            <p className="text-gray-600 mb-6">{plan.description}</p>
            <ul className="space-y-2 mb-6 flex-1">
              {plan.features.map((f, i) => (
                <li key={i} className="text-sm text-gray-700">• {f}</li>
              ))}
            </ul>
            <a
              href="#contacto"
              className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-center font-medium hover:opacity-95"
            >
              {plan.cta}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
