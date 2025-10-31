import { MessageCircle, X } from "lucide-react";
import backgroundGif from "@/assets/background.gif";
import santoImage from "@/assets/santo.png";
import envelopeIcon from "@/assets/envelope.png";

interface MainScreenProps {
  onNavigateToChat: () => void;
  onNavigateToPrayers: () => void;
  hasNewMessages?: boolean;
}

export const MainScreen = ({ 
  onNavigateToChat, 
  onNavigateToPrayers,
  hasNewMessages = true 
}: MainScreenProps) => {
  const handleSupportClick = () => {
    window.open("https://forms.gle/HaeqCG7ZBBb5rkHg7", "_blank");
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background with reduced opacity overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundGif})`,
          filter: "blur(8px)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.4)",
        }}
      />

      {/* Message icon with notification */}
      <button
        onClick={onNavigateToChat}
        className="fixed top-4 left-4 md:top-6 md:left-6 z-50 relative"
        aria-label="Ver mensajes"
      >
        <img 
          src={envelopeIcon} 
          alt="Mensajes" 
          className="w-12 h-12 md:w-16 md:h-16 hover:scale-110 transition-transform duration-300"
        />
        {hasNewMessages && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-destructive rounded-full border-2 border-background animate-pulse" />
        )}
      </button>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-4">
        {/* Saint image */}
        <div className="mb-3 sm:mb-4 md:mb-5 lg:mb-6">
          <img
            src={santoImage}
            alt="San Benito"
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 object-contain"
          />
        </div>

        {/* Main title with glowing effect */}
        <h1 
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-1 sm:mb-1.5 md:mb-2 px-2"
          style={{
            color: "hsl(var(--gold))",
            textShadow: "0 0 20px hsl(var(--gold-glow)), 0 0 40px hsl(var(--gold-glow) / 0.5)",
          }}
        >
          ALGO DIVINO ESTÁ A
        </h1>
        <h1 
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-2 sm:mb-3 md:mb-4 lg:mb-5 px-2"
          style={{
            color: "hsl(var(--gold))",
            textShadow: "0 0 20px hsl(var(--gold-glow)), 0 0 40px hsl(var(--gold-glow) / 0.5)",
          }}
        >
          PUNTO DE SUCEDER
        </h1>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm md:text-base text-[hsl(var(--parchment))] text-center mb-0.5 sm:mb-1 max-w-xs sm:max-w-md px-2">
          HAZ CLIC EN EL BOTÓN DE ABAJO PARA
        </p>
        <p className="text-xs sm:text-sm md:text-base text-[hsl(var(--parchment))] text-center mb-2 sm:mb-3 max-w-xs sm:max-w-md px-2">
          ACCEDER A LAS ORACIONES
        </p>

        {/* Animated arrows */}
        <div className="flex gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-3">
          <span 
            className="text-[hsl(var(--gold))] text-2xl sm:text-3xl md:text-4xl animate-arrow-bounce"
            style={{ 
              animationDelay: "0s",
              textShadow: "0 0 10px hsl(var(--gold-glow))"
            }}
          >
            ↓
          </span>
          <span 
            className="text-[hsl(var(--gold))] text-2xl sm:text-3xl md:text-4xl animate-arrow-bounce"
            style={{ 
              animationDelay: "0.2s",
              textShadow: "0 0 10px hsl(var(--gold-glow))"
            }}
          >
            ↓
          </span>
          <span 
            className="text-[hsl(var(--gold))] text-2xl sm:text-3xl md:text-4xl animate-arrow-bounce"
            style={{ 
              animationDelay: "0.4s",
              textShadow: "0 0 10px hsl(var(--gold-glow))"
            }}
          >
            ↓
          </span>
        </div>

        {/* Prayers button */}
        <button
          onClick={onNavigateToPrayers}
          className="bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--gold-glow))] text-[hsl(var(--dark-brown))] px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-2.5 md:py-3 rounded-full text-sm sm:text-base md:text-lg font-bold mb-2 sm:mb-3 md:mb-4 hover:scale-105 transition-transform duration-300 shadow-lg animate-gentle-glow mx-2"
          style={{
            boxShadow: "0 0 20px hsl(var(--gold) / 0.5), 0 0 40px hsl(var(--gold-glow) / 0.3)",
            border: "2px solid hsl(var(--gold))"
          }}
        >
          ACCEDER A LAS ORACIONES
        </button>

        {/* Small update text */}
        <p className="text-[10px] sm:text-xs md:text-sm text-[hsl(var(--parchment))] text-center mb-3 sm:mb-4 md:mb-5 max-w-xs sm:max-w-md px-2">
          CADA MES, LAS ORACIONES SE ACTUALIZARÁN, ¡NO TE LAS PIERDAS!
        </p>

        {/* Support button */}
        <button
          onClick={handleSupportClick}
          className="bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--gold-glow))] text-[hsl(var(--dark-brown))] px-4 sm:px-5 md:px-7 lg:px-9 py-2 sm:py-2.5 md:py-3 rounded-full text-xs sm:text-sm md:text-base lg:text-lg font-bold hover:scale-105 transition-transform duration-300 shadow-lg mx-2"
          style={{
            boxShadow: "0 0 20px hsl(var(--gold) / 0.5), 0 0 40px hsl(var(--gold-glow) / 0.3)",
            border: "2px solid hsl(var(--gold))"
          }}
        >
          QUIERO SOPORTE / REEMBOLSO
        </button>
      </div>
    </div>
  );
};
