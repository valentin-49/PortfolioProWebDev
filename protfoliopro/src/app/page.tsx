import Head from 'next/head';

import AnimatedText from "../components/AnimatedText";
import AnimatedImage from "../components/AnimatedImage";
import AnimatedTitle from "../components/AnimatedTitle";
import AnimatedSlide from "../components/animatedSlide";
import TypingHeading from "../components/TypingHeading";
import Carousel from "../components/Carousel";

import ProjectCard from '../components/ProjectCard';
import Header from '../components/Header';
import Image from 'next/image';

import { Analytics } from "@vercel/analytics/next";

const images = [
  { src: "/images/vitrine.png", alt: "Dempartner" },
  { src: "/images/saas-trends.webp", alt: "La Bulle" },
  { src: "/images/ecommerce.png", alt: "SaaS App" }
];

export default function Home() {
  
  return (
    <>
      <Head>
        <meta name="google-site-verification" content="VOhnB3pMMDS5-rYVwwAMXYz0lLLl2kPZCCioDgk_SSU" />
        <link
          href="https://fonts.googleapis.com/css2?family=Saira:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="preload"
          as="image"
          href="/images/black_wavy_lines_background.webp"
          type="image/webp"
        />
      </Head>

      <Header />

  <main
    className="relative min-h-screen bg-cover bg-center text-white p-6 sm:p-20 flex flex-col gap-28 transition-colors mt-12"
    style={{ backgroundImage: "url('/images/black_wavy_lines_background.webp')" }}
  >
    <Analytics />
{/* 
  Section Title 
*/}
    <section className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 md:gap-24 pt-20 sm:pt-28 md:pt-36 px-4">
      <AnimatedText>
        {/* Conteneur qui évite les sauts verticaux pendant l'animation */}
        <div className="min-h-[120px] sm:min-h-[160px] max-w-xl mx-auto md:mx-0">
          <TypingHeading />
        </div>

          <p className="mt-6 text-lg sm:text-xl text-gray-800 max-w-xl mx-auto md:mx-0 text-center md:text-left drop-shadow-sm">
            Je conçois des interfaces web <strong className="font-bold">rapides</strong> et <strong className="font-bold">accessibles</strong>.<br />
            Donnez vie à votre <strong className="font-bold">présence digitale</strong> grâce à un code <strong className="font-bold">propre</strong> et <strong className="font-bold">optimisé</strong>.
          </p>

          <div className="mt-8 flex justify-center md:justify-start gap-6 max-w-xl mx-auto md:mx-0">
            <a
              href="https://www.linkedin.com/in/valentin-bouet-9861bb312/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-transform hover:scale-110"
            >
              <img src="/images/linkedin-svgrepo-com.svg" alt="LinkedIn" className="w-8 h-8" />
            </a>
            <a
              href="https://github.com/valentin-49"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition-transform hover:scale-110"
            >
              <img src="/images/github-142-svgrepo-com.svg" alt="GitHub" className="w-8 h-8" />
            </a>
          </div>
      </AnimatedText>
  <div className="relative w-full max-w-[380px] mx-auto">
    <AnimatedImage>
      <Image
        src="/images/Les-formations-devenir-developpeur-application-mobile-F.jpg"
        alt="Illustration développeur web"
        width={420}
        height={250}
        className="rounded-lg shadow-[6px_10px_8px_3px_#a0aec0] w-full h-auto"
        priority
      />
      {/* Colonne blanche chevauchante */}
      <div
        className="absolute top-0 -right-6 w-[60px] bg-white rounded-r-lg border-3 border-pink-500 shadow-md flex flex-col items-center justify-center gap-3 p-2 mt-10"
      >
        <Image
          src="/images/app-developer-development-svgrepo-com.svg"
          alt="dev logo"
          width={32}
          height={32}
          className="drop-shadow-sm m-2"
        />
        <Image
          src="/images/developer-development-object-svgrepo-com.svg"
          alt="infra logo"
          width={32}
          height={32}
          className="drop-shadow-sm m-2"
        />
        <Image
          src="/images/developer-mode-svgrepo-com.svg"
          alt="code logo"
          width={32}
          height={32}
          className="drop-shadow-sm m-2"
        />
      </div>
    </AnimatedImage>
  </div>
</section>
{/*  
SectionProjets 
*/}
  <section id="projets" className="mb-24 pt-8 sm:pt-12 md:pt-16 max-w-4xl mx-auto">
    <AnimatedTitle>
      Mes Projets
    </AnimatedTitle>
    <div className="grid gap-12 sm:grid-cols-2">
      <AnimatedSlide>
        <ProjectCard
          title="Site WEB"
          description="Site web de la sociéte Panneaux Stationnement"
          link="https://www.panneauxstationnement.fr/"
          imageSrc="/images/PanneauxStationnementImg.png"
          imageAlt="Apercu site Panneaux Stationnement"
          className="bg-gray-900 border border-gray-700 text-gray-200 hover:border-pink-500 shadow-[6px_10px_8px_3px_#a0aec0] "
        />
      </AnimatedSlide>
      <AnimatedSlide>
        <ProjectCard
          title="Application SaaS"
          description="Application Web Saas de Panneaux Stationnement"
          link="https://app.panneauxstationnement.fr/"
          imageSrc="/images/PanneauxStationnementSaaSImg.png"
          imageAlt="Aperçu SaaS Panneaux Stationnement"
          className="bg-gray-900 border border-gray-700 text-gray-200 hover:border-pink-500 transition shadow-[6px_10px_8px_3px_#a0aec0]"
        />
      </AnimatedSlide>
      <AnimatedSlide>
        <ProjectCard
          title="Site WEB"
          description="Site web de la sociéte Dempartner"
          link="https://www.dempartner.fr/"
          imageSrc="/images/DempartnerImg.png"
          imageAlt="Aperçu Site Dempartner"
          className="bg-gray-900 border border-gray-700 text-gray-200 hover:border-pink-500 transition shadow-[6px_10px_8px_3px_#a0aec0]"
        />
      </AnimatedSlide>
      <AnimatedSlide>
        <ProjectCard
        title="Site WEB"
        description="Site Web du salon de Coiffure La Bulle à Nantes"
        link="https://www.labullecoiffure.fr/"
        imageSrc="/images/LaBulleImg.png"
        imageAlt="Aperçu site La Bulle"
        className="bg-gray-900 border border-gray-700 text-gray-200 hover:border-pink-500 transition shadow-[6px_10px_8px_3px_#a0aec0]"
        />
      </AnimatedSlide>
    </div>
  </section>
</main>
<AnimatedSlide>
{/* 
  Section Carousel 
  */}
<section className="max-w-full mx-auto flex flex-col pt-20 pb-20 sm:pt-28 md:pt-36 px-4 lg:px-8 bg-gradient-to-b from-black via-neutral-900 to-neutral-950 text-white py-20 px-4">
  {/* Titre centré en haut */}
  <div className="w-full text-center mb-8">
    <AnimatedTitle>
      Donner vie à vos projets Web
    </AnimatedTitle>
  </div>

  {/* Contenu en deux colonnes */}
  <div className="max-w-6xl m-auto flex flex-col-reverse md:flex-row items-center gap-16 md:gap-24">
    <AnimatedText>
      <div className="text-center md:text-left max-w-6xl mx-auto md:mx-0">
        <p className="text-lg sm:text-xl text-white mb-6 drop-shadow-sm">
          Je développe des solutions web sur mesure : que ce soit pour un <strong className="font-bold">SaaS</strong>, un <strong className="font-bold">site vitrine</strong> ou une <strong className="font-bold">boutique en ligne</strong>, je vous accompagne de la conception à la mise en ligne.
        </p>

        <ul className="text-base sm:text-lg text-white list-disc list-inside space-y-2">
          <li>Performances optimisées (Core Web Vitals)</li>
          <li>Design responsive et moderne</li>
          <li>SEO technique et bonnes pratiques</li>
        </ul>
      </div>
    </AnimatedText>
      <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl mx-auto md:mx-0">
        <Carousel items={images} autoSlide autoSlideInterval={4000} />
      </div>
  </div>
</section>
</AnimatedSlide>
<AnimatedSlide>
 {/* 
  Section Technologie 
*/}
  <section id="technologies" className="w-full bg-gradient-to-r from-purple-900 via-pink-900 to-red-900 pt-16">
      <AnimatedTitle>Technologies maîtrisées</AnimatedTitle>
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-8 text-center text-white max-w-2/3 mx-auto place-items-center">
        {/* Exemple d’icônes + texte */}
        <div>
          <img src="/images/bubble-io.svg" alt="Bubble.io" className="mx-auto mb-2 h-12 w-12" />
          <p className="font-semibold">Bubble.io</p>
        </div>
        <div>
          <img src="/images/webflow-svgrepo-com.svg" alt="Webflow" className="mx-auto mb-2 h-12 w-12" />
          <p className="font-semibold">Webflow</p>
        </div>
        <div>
          <img src="/images/react.svg" alt="React" className="mx-auto mb-2 h-12 w-12" />
          <p className="font-semibold">React</p>
        </div>
        <div>
          <img src="/images/next-dot-js-svgrepo-com.svg" alt="Next.js" className="mx-auto mb-2 h-12 w-12" />
          <p className="font-semibold">Next.js</p>
        </div>
        <div>
          <img src="/images/typescript.svg" alt="TypeScript" className="mx-auto mb-2 h-12 w-12" />
          <p className="font-semibold">TypeScript</p>
        </div>
        <div className="hidden sm:block sm:col-span-1"></div> {/* Décalage */}
        <div>
          <img src="/images/tailwind.svg" alt="Tailwind CSS" className="mx-auto mb-2 h-12 w-12" />
          <p className="font-semibold">Tailwind CSS</p>
        </div>
        <div>
          <img src="/images/node-js-svgrepo-com.svg" alt="Node.js" className="mx-auto mb-2 h-12 w-12" />
          <p className="font-semibold">Node.js</p>
        </div>
        <div>
          <img src="/images/css-3-svgrepo-com.svg" alt="CSS3" className="mx-auto mb-2 h-12 w-12" />
          <p className="font-semibold">CSS 3</p>
        </div>
        {/* Ajoute/modifie les technologies et icônes que tu souhaites */}
      </div>
        <p className="mt-16 text-xl text-white max-w-lg mx-auto drop-shadow-sm text-center">
          <strong>et plus encore ...</strong>
        </p>
  {/* CV hors main pour 100% width background */}
    <div className="max-w-4xl mx-auto text-center px-6 sm:px-12 py-16">
      <p className="text-white mb-8 text-lg max-w-xl mx-auto drop-shadow-sm">
        Téléchargez mon CV au format PDF pour en savoir plus.
      </p>
      <a
        href="/CV_bouet_valentin.pdf"
        download
        className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full hover:brightness-125 transition text-lg drop-shadow-md"
      >
        Télécharger le CV
      </a>
    </div>
  </section>
</AnimatedSlide>
<main
  className="relative min-h-screen bg-cover bg-center text-white p-6 sm:p-20 flex flex-col gap-28 transition-colors"
  style={{ backgroundImage: "url('/images/black_wavy_lines_background.webp')" }}
>
 {/* 
  Section Contact 
*/}
  <section
    id="contact"
    className="pt-8 sm:pt-12 md:pt-16 w-3/3 mx-auto text-center pb-20"
  >
    <AnimatedTitle>
      Contact
    </AnimatedTitle>
    <p className="mt-6 text-xl text-gray-800 max-w-lg mx-auto drop-shadow-sm mb-12">
    Une idée ? Un projet ? N&apos;hésitez pas à me contacter pour discuter de vos besoins, poser vos questions ou simplement échanger autour du développement web. Je suis là pour vous accompagner dans vos projets numériques.
    </p>
    <form
      action="https://formspree.io/f/xovwrbzl"
      method="POST"
      className="bg-gray-800 bg-opacity-70 p-8 rounded-lg max-w-5xl mx-auto flex flex-col gap-6 text-left"
    >
      <div className="flex flex-col sm:flex-row gap-6">
        <input
          type="text"
          name="name"
          placeholder="Votre nom"
          required
          className="flex-1 p-3 border border-gray-700 rounded bg-gray-900 text-gray-200 placeholder-gray-500 focus:outline-pink-500 focus:outline-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Votre e-mail"
          required
          className="flex-1 p-3 border border-gray-700 rounded bg-gray-900 text-gray-200 placeholder-gray-500 focus:outline-pink-500 focus:outline-2"
        />
      </div>
      <textarea
        name="message"
        placeholder="Votre message"
        required
        rows={6}
        className="w-full p-3 border border-gray-700 rounded bg-gray-900 text-gray-200 placeholder-gray-500 focus:outline-pink-500 focus:outline-2"
      />
      <button
        type="submit"
        className="bg-pink-600 hover:bg-pink-700 transition text-white px-6 py-3 rounded"
      >
        Envoyer
      </button>
    </form>
  </section>
</main>
  {/* Footer */}
  <footer className="text-center text-sm text-gray-500 pt-24 pb-8 bg-[#121417] bg-opacity-90 backdrop-blur-md z-50">
    © {new Date().getFullYear()}  – Bouet Valentin – Tous droits réservés.
  </footer>
</>
  );
}
