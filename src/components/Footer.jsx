import React from "react";

const logos = [
  { name: "HOGI", src:"image.jpg"},
  { name: "BBS", src:"image.jpg" },
  { name: "Lumitel", src:"image.jpg" },
  { name: "XTech", src:"image.jpg" },
];

function Footer() {
  // On répète les logos deux fois pour faire tourner en boucle fluide
  const repeatedLogos = [...logos, ...logos];

  return (
    <footer className="bg-gray-100 py-6 overflow-hidden px-4 relative">
      <h2 className="text-gray-700 font-bold text-center mb-4">
        Les collaborateurs
      </h2>

      <div className="relative w-full overflow-hidden">
        <div className="flex gap-2 md:gap-8 lg:gap-16 animate-marquee hover:[animation-play-state:paused]">
          {repeatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex flex-col items-center min-w-[120px]"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="w-14 h-14 rounded-full mb-2 "
              />
              <span className="text-sm font-medium text-blue-700">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
