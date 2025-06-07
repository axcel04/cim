function HeaderPhoto() {
  return (
    <div className="relative w-full h-48 md:h-72 lg:h-96 overflow-hidden">
      <img
        src="/image.jpg"
        alt="Club Informatique et Multimédia"
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-500/40 flex items-center justify-center">
        <h1 className="text-white text-center text-xl md:text-3xl font-bold drop-shadow-lg px-4">
          Bienvenue sur le site officiel du Club Informatique & Multimédia
        </h1>
      </div>
    </div>
  );
}
export default HeaderPhoto;