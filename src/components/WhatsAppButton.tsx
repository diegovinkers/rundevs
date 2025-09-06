import React from "react";

interface WhatsAppButtonProps {
  phone: string;
  message: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phone, message }) => {
  if (!phone) return null;
  const url = `https://wa.me/${phone.replace(/\D/g, "")}?text=${encodeURIComponent(
    message
  )}`;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20.52 3.48A11.92 11.92 0 0012.01 0C5.38 0 .01 5.37.01 12c0 2.11.55 4.18 1.6 6.01L0 24l6.15-1.59A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22a9.92 9.92 0 01-5.05-1.36l-.36-.21-3.64.94.97-3.55-.23-.37A9.94 9.94 0 012 12c0-5.52 4.48-10 10-10a9.93 9.93 0 017.07 2.93A9.93 9.93 0 0122 12c0 5.52-4.48 10-10 10zm5.27-7.46c-.29-.15-1.71-.84-1.98-.94-.27-.1-.47-.15-.66.15-.19.29-.76.94-.93 1.13-.17.19-.34.21-.63.06-.29-.15-1.21-.45-2.31-1.45-.85-.76-1.43-1.7-1.6-1.99-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.66-1.6-.9-2.2-.24-.57-.48-.49-.66-.5h-.57c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43s1.02 2.82 1.16 3.01c.14.19 2 3.05 4.85 4.28.68.29 1.21.46 1.62.59.68.22 1.29.19 1.77.12.54-.08 1.71-.7 1.95-1.37.24-.67.24-1.24.17-1.37-.07-.13-.26-.2-.55-.35z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
