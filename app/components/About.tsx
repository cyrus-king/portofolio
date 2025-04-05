import Image from "next/image";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-10 text-center">À propos de moi</h2>

      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-2/3 text-lg text-gray-700 space-y-6">
          <p>
            Développeur Full-Stack passionné, je conçois des applications web performantes, scalables et pensées pour durer. Mon parcours m’a mené à travailler sur des projets exigeants, de la simple interface à l’architecture complète d’applications complexes.
          </p>
          <p>
            Mon stack tourne autour des technologies modernes : React.js, Vue.js, Laravel, Express.js, et Flutter. Je jongle avec les bases de données comme MySQL ou PostgreSQL, je construis des APIs RESTful solides, et j’ancre mes projets dans une vraie démarche Agile et collaborative.
          </p>
          <p>
            Mon moteur ? L’envie constante d’apprendre, d’optimiser, d’aller plus loin. J’aime quand les lignes de code ont du sens, que chaque fonctionnalité répond à un vrai besoin. Mon esprit d’initiative me pousse à proposer, tester, améliorer — toujours avec une exigence de qualité.
          </p>
        </div>

        <div className="md:w-1/3">
          <Image
            src="/gg.jpg"
            width={300}
            height={500}
            alt="Photo de profil dans la section à propos"
            className="rounded-lg shadow-lg object-cover w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
