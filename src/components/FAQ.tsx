import React from "react";

interface FAQProps {
  data: {
    title: string;
    items: { question: string; answer: string }[];
  };
}

const FAQ: React.FC<{ data: FAQProps["data"] }> = ({ data }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-12">{data.title}</h2>
      <div className="space-y-6 max-w-3xl mx-auto">
        {data.items.map((faq, idx) => (
          <div
            key={idx}
            className="p-6 rounded-xl border bg-white shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-lg font-medium mb-2">{faq.question}</h3>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
