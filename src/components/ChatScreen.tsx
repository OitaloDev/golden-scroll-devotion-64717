import { useState, useEffect, useRef } from "react";
import pergaminhoChat from "@/assets/pergaminho-chat-tela-3.png";
import balaoTela3 from "@/assets/balao-tela-3.png";

interface ChatScreenProps {
  onReturn: () => void;
}

export const ChatScreen = ({ onReturn }: ChatScreenProps) => {
  const [messages, setMessages] = useState<string[]>([]);
  const [userInput, setUserInput] = useState("");
  const [showInput, setShowInput] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // First message appears immediately
    const timer1 = setTimeout(() => {
      setMessages([
        "¡Hijo amado, qué bendición tenerte aquí!\n\nNada sucede por casualidad… si estás leyendo este mensaje, es porque Dios quiso alcanzarte en este momento. Él conoce tus lágrimas, tus luchas y tus sueños y quiere transformar todo eso en victoria.\n\nHay un mover espiritual ocurriendo ahora mismo, y el Señor te ha elegido para recibir esta palabra. La fe que te trajo hasta aquí es la misma que abrirá caminos, restaurará lo que se perdió y traerá paz a tu corazón.",
      ]);
    }, 500);

    // Second message appears after 3 seconds
    const timer2 = setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        "Por favor, escribe tu nombre completo y el tópico para el cual deseas que la oración sea hecha.",
      ]);
      setShowInput(true);
    }, 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userInput.trim()) {
      setMessages((prev) => [...prev, `Tu mensaje: ${userInput}`]);
      setUserInput("");
      setShowInput(false);

      // Show final message after user submits
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          "¡Amén! Tu nombre ha sido recibido con fe y ya está siendo colocado en la lista sagrada de oración, que será presentada ante el altar del Señor por nuestro obispo representante del Vaticano.\n\nDos días antes del día 15 del próximo mes, nos comunicaremos contigo por correo electrónico, enviándote todas las instrucciones y avisándote el lugar donde se transmitirá la celebración en vivo, para que puedas acompañar este momento de bendición y unión espiritual.\n\nRecuerda, hijo: esta cadena está movida por la fe y el compromiso. Si llegas a solicitar un reembolso o la cancelación de tu contribución, tu nombre será removido automáticamente de la oración mensual del obispo, para mantener la integridad y el propósito sagrado de esta corriente.\n\nQue la paz, la gracia y la presencia de Dios permanezcan contigo hasta el gran día de la oración.",
        ]);
      }, 1500);
    }
  };

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 animate-fade-in">
      <button
        onClick={onReturn}
        className="mb-6 animate-golden-pulse-slow hover:scale-105 transition-transform duration-300"
      >
        <img
          src={balaoTela3}
          alt="Volver"
          className="w-full max-w-xs md:max-w-md h-auto"
        />
      </button>

      <div className="relative w-full max-w-3xl h-[70vh] md:h-[75vh] flex items-center justify-center">
        <img
          src={pergaminhoChat}
          alt="Pergaminho"
          className="absolute inset-0 w-full h-full object-contain pointer-events-none"
        />
        <div className="relative z-10 w-[70%] h-[62%] overflow-y-auto px-4 md:px-6 py-4 md:py-6 scrollbar-thin scrollbar-thumb-[hsl(var(--gold))] scrollbar-track-transparent"
          style={{
            marginTop: "2%"
          }}
        >
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-4 text-[hsl(var(--dark-brown))] text-xs md:text-sm leading-relaxed whitespace-pre-line ${
                message.startsWith("Tu mensaje:") ? "italic text-right" : ""
              }`}
            >
              {message}
            </div>
          ))}
          {showInput && (
            <form onSubmit={handleSubmit} className="mt-4">
              <textarea
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Escribe tu nombre y tópico de oración..."
                className="w-full p-2 md:p-3 bg-[hsl(var(--parchment))] border-2 border-[hsl(var(--gold))] rounded-lg text-[hsl(var(--dark-brown))] text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(var(--gold-glow))] resize-none"
                rows={3}
              />
              <button
                type="submit"
                className="mt-2 w-full py-2 px-4 bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--gold-glow))] text-[hsl(var(--dark-brown))] text-sm font-semibold rounded-lg hover:scale-105 transition-transform duration-300"
              >
                Enviar
              </button>
            </form>
          )}
          <div ref={chatEndRef} />
        </div>
      </div>
    </div>
  );
};
