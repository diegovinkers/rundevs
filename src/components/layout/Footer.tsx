import React from "react";

interface FooterProps {
  data: {
    copyright: string;
    links: { label: string; href: string }[];
  };
}

const Footer: React.FC<{ data: FooterProps["data"] }> = ({ data }) => {
  return (
    <footer
      id="contacto"
      className="bg-gray-900 text-gray-300 py-10 mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm">{data.copyright}</div>
          <nav className="flex gap-6 text-sm">
            {data.links.map((link, idx) => (
              <a key={idx} href={link.href} className="hover:text-white">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
