import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-8">
      <Image
        src="/profile.jpg"
        width={300}
        height={300}
        alt="Photo de Dimitri"
        className="rounded-full border-4 border-white shadow-lg"
      />

      <div className="text-center md:text-left max-w-xl">
        <h1 className="text-3xl font-bold mb-4">Salut, moi c’est Dimitri 👋</h1>
        <p className="text-lg mb-6">
          Développeur Full-Stack congolais, je transforme des idées en expériences web solides et élégantes. Frontend, backend, base de données — je suis à l’aise sur tous les terrains.
          Mon objectif ? Bâtir des applications modernes, performantes et pensées pour durer.
        </p>
        <div className="flex justify-center md:justify-start gap-4 text-2xl">
          <a
            href=""
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href=""
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-800 transition"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="www.linkedin.com/in/dimitri-curtis-fila-13a614311"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transition"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
