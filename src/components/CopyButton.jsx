import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

export default function WhatsAppCopy() {
  const [copied, setCopied] = useState(false);
  const number = "+48 123 456 789";

  const handleCopy = () => {
    navigator.clipboard.writeText(number);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-2 text-green-500 hover:text-green-600 text-lg transition"
      title="Kliknij, aby skopiować numer WhatsApp"
    >
      <FaWhatsapp className="text-2xl" />
      {copied ? "Skopiowano!" : "WhatsApp"}
    </button>
  );
}
