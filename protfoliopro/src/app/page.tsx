'use client';

import { motion } from 'framer-motion';
import Head from 'next/head';
import ProjectCard from '../components/ProjectCard';
import Header from '../components/Header';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Valentin | Développeur Web</title>
        <meta
          name="description"
          content="Portfolio professionnel de Valentin, développeur web spécialisé en interfaces modernes, performantes et accessibles."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />

      <main className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 text-gray-800 p-12 sm:p-20 flex flex-col gap-32 transition-colors mt-12">
        <section className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 md:gap-24 pt-28 sm:pt-32 md:pt-36">
          {/* Texte à gauche */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Valentin,<br /> développeur web moderne
            </h1>
            <p className="mt-6 text-lg text-gray-800 max-w-lg mx-auto md:mx-0 drop-shadow-sm"> 
              Je crée des expériences web performantes, accessibles et esthétiques.<br />
              Boostez votre présence en ligne avec un code propre, réactif et durable.
            </p>
          </motion.div>

          {/* Image à droite */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 max-w-md mx-auto md:mx-0"
          >
            <Image
              src="/images/Les-formations-devenir-developpeur-application-mobile-F.jpg"
              alt="Illustration développeur web"
              width={500}
              height={300}
              className="rounded-lg shadow-[18px_18px_8px_13px_#a0aec0]"
              priority
            />
          </motion.div>
        </section>

        {/* Projets */}
        <section id="projets" className="mb-24 pt-8 sm:pt-12 md:pt-16 max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-3/3 relative text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-24 pb-6"
          >
            Mes Projets
            <span className="absolute left-1/2 bottom-[-10px] -translate-x-1/2 h-1 w-3/3 rounded-full bg-pink-500 shadow-pink-500/70 animate-pulse"></span>
          </motion.h2>
          <div className="grid gap-10 sm:grid-cols-2">
            <ProjectCard
              title="Site WEB"
              description="Site web de la sociéte Panneaux Stationnement"
              link="https://www.panneauxstationnement.fr/"
              imageSrc="/images/PanneauxStationnementImg.png"
              imageAlt="Apercu site Panneaux Stationnement"
              className="bg-gray-900 border border-gray-700 text-gray-200 hover:border-pink-500 transition shadow-[6px_10px_8px_3px_#a0aec0]"
            />
            <ProjectCard
              title="Application SaaS"
              description="Application Web Saas de Panneaux Stationnement"
              link="https://app.panneauxstationnement.fr/"
              imageSrc="/images/PanneauxStationnementSaaSImg.png"
              imageAlt="Aperçu SaaS Panneaux Stationnement"
              className="bg-gray-900 border border-gray-700 text-gray-200 hover:border-pink-500 transition shadow-[6px_10px_8px_3px_#a0aec0]"
            />
            <ProjectCard
              title="Site WEB"
              description="Site web de la sociéte Dempartner"
              link="https://www.dempartner.fr/"
              imageSrc="/images/DempartnerImg.png"
              imageAlt="Aperçu Site Dempartner"
              className="bg-gray-900 border border-gray-700 text-gray-200 hover:border-pink-500 transition shadow-[6px_10px_8px_3px_#a0aec0]"
            />
            <ProjectCard
              title="Site WEB"
              description="Site Web du salon de Coiffure La Bulle à Nantes"
              link="https://www.labullecoiffure.fr/"
              imageSrc="/images/LaBulleImg.png"
              imageAlt="Aperçu site La Bulle"
              className="bg-gray-900 border border-gray-700 text-gray-200 hover:border-pink-500 transition shadow-[6px_10px_8px_3px_#a0aec0]"
            />
            
          </div>
        </section>
      </main>

      {/* CV hors main pour 100% width background */}
      <section
        id="cv"
        className="w-full bg-gradient-to-r from-purple-900 via-pink-900 to-red-900"
      >
        <div className="max-w-4xl mx-auto text-center px-6 sm:px-12 py-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-3/3 relative text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-24 pb-6 drop-shadow-md"
          >
            Mon CV
            <span className="absolute left-1/2 bottom-[-10px] -translate-x-1/2 h-1 w-3/3 rounded-full bg-pink-500 shadow-pink-500/70 animate-pulse"></span>
          </motion.h2>
          <p className="text-white mb-8 text-lg max-w-xl mx-auto drop-shadow-sm">
            Téléchargez mon CV au format PDF pour en savoir plus sur mon parcours.
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

      <main className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 text-gray-800 p-12 sm:p-20 flex flex-col gap-32 transition-colors">
        {/* Contact */}
       <section
          id="contact"
          className="pt-8 sm:pt-12 md:pt-16 w-3/3 mx-auto text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full relative text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-14 pb-6"
          >
            Contact
            <span className="absolute left-1/2 bottom-[-10px] -translate-x-1/2 h-1 w-3/4 rounded-full bg-pink-500 shadow-pink-500/70 animate-pulse"></span>
          </motion.h2>
          <p className="text-black mb-8 text-lg max-w-xl mx-auto drop-shadow-sm">
            Une idée ? Un projet ? N'hésitez pas à me contacter pour discuter de vos besoins, poser vos questions ou simplement échanger autour du développement web. Je suis là pour vous accompagner dans vos projets numériques.
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
                className="flex-1 p-3 border border-gray-700 rounded bg-gray-900 text-gray-200 placeholder-gray-500 text-lg"
              />
              <input
                type="email"
                name="email"
                placeholder="Votre email"
                required
                className="flex-1 p-3 border border-gray-700 rounded bg-gray-900 text-gray-200 placeholder-gray-500 text-lg"
              />
            </div>
            <textarea
              name="message"
              rows={4}
              placeholder="Votre message"
              required
              className="p-3 border border-gray-700 rounded bg-gray-900 text-gray-200 placeholder-gray-500 text-lg resize-y"
            ></textarea>
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full hover:brightness-110 transition text-lg"
            >
              Envoyer
            </button>
          </form>
        </section>

      </main>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 pt-24 pb-8 bg-[#121417] bg-opacity-90 backdrop-blur-md z-50">
        © {new Date().getFullYear()} Valentin – Tous droits réservés.
      </footer>
    </>
  );
}
