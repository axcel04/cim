import React, { useState, useEffect } from "react";

const logos = [
  { name: "HOGI", src: "image.jpg", desc: "Partenaire technologique majeur." },
  { name: "BBS", src: "cim.png", desc: "Support logistique et financier." },
  { name: "Lumitel", src: "image.jpg", desc: "Partenaire télécom officiel." },
  { name: "XTech", src: "cim.png", desc: "Expertise en développement logiciel." },
];

function Footer() {
  const [current, setCurrent] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  // Responsive: 2 on mobile, 3 on md+
  useEffect(() => {
    function handleResize() {
      setVisibleCount(window.innerWidth < 768 ? 2 : 3);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % logos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [logos.length]);

  // Get visible logos for the carousel
  const getVisibleLogos = () => {
    let arr = [];
    for (let i = 0; i < visibleCount; i++) {
      arr.push(logos[(current + i) % logos.length]);
    }
    return arr;
  };

  return (
    <footer className="bg-gray-100 pt-6 pb-2 px-4 relative">
      <h2 className="text-gray-700 font-bold text-center mb-4">
        Les collaborateurs
      </h2>
      <div className="relative flex items-center justify-center max-w-3xl mx-auto px-4">
        {/* Logos */}
        <div className="flex gap-8 justify-center items-center w-full py-4">
          {getVisibleLogos().map((logo, idx) => (
            <div key={logo.name + idx} className="flex flex-col items-center min-w-[150px]">
              <img
                src={logo.src}
                alt={logo.name}
                className="w-24 h-24 rounded-full mb-2 border-2 border-blue-200 shadow"
              />
              <span className="text-base font-semibold text-blue-700">{logo.name}</span>
              <span className="text-xs text-gray-500 text-center mt-1">{logo.desc}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Simple Footer Bar */}
      <div className="mt-8 border-t border-gray-200 pt-4 text-center text-xs text-gray-500 bg-gray-50">
        © {new Date().getFullYear()} Club Informatique & Multimédia — CIM.<br />
        Powered by <a href="https://vovota.bi/about" className="underline text-sky-500 hover:text-sky-700" target="_blank" rel="noopener noreferrer">vovota</a>
      </div>
    </footer>
  );
}
export default Footer;