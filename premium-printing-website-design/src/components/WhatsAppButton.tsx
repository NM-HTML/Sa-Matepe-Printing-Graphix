import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const handleClick = () => {
    const message = encodeURIComponent(
      "Hi Sa Matepe Printing And Graphix! I'd like to get a quote for printing services."
    );
    window.open(`https://wa.me/27769409175?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white shadow-2xl shadow-green-500/30 flex items-center justify-center hover:scale-110 hover:shadow-green-500/50 transition-all duration-300 pulse-glow group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 group-hover:rotate-6 transition-transform" />
    </button>
  );
}
