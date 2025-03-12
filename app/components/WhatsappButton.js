import { BsWhatsapp } from "react-icons/bs"; // Import WhatsApp icon from react-icons

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/918882382276" // Replace with the WhatsApp number (country code + number)
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition z-50"
      aria-label="Chat on WhatsApp"
    >
      <BsWhatsapp className="w-6 h-6" />
    </a>
  );
}
