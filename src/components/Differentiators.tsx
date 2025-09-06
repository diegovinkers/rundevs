import React from "react";

interface DifferentiatorsProps {
  data: {
    title: string;
    items: { title: string; description: string }[];
  };
}

const Differentiators: React.FC<{ data: DifferentiatorsProps["data"] }> = ({
  data,
}) => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-12">{data.title}</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {data.items.map((item, idx) => (
          <div
            key={idx}
            className="p-6 rounded-xl border bg-white shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Differentiators;
