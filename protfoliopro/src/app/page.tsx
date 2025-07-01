import Head from 'next/head';
import AnimatedText from "../components/AnimatedText";
import AnimatedImage from "../components/AnimatedImage";
import AnimatedTitle from "../components/AnimatedTitle";
import ProjectCard from '../components/ProjectCard';
import Header from '../components/Header';
import Image from 'next/image';

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Bouet Valentin | Web Développeur</title>
        <meta
          name="description"
          content="Portfolio professionnel de Valentin, développeur web spécialisé en interfaces modernes, performantes et accessibles."
        />
        <meta name="google-site-verification" content="google2a95d1fb4f78c4fa.html" />
        <link
          href="https://fonts.googleapis.com/css2?family=Saira:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />

      <main className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 text-gray-800 p-12 sm:p-20 flex flex-col gap-28 transition-colors mt-12 ">
         <section className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 md:gap-24 pt-28 sm:pt-32 md:pt-36">
          <AnimatedText>
            <h1 className="text-6xl sm:text-7xl font-extrabold leading-tight bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Bouet Valentin, Développeur web
            </h1>
            <p className="mt-6 text-xl text-gray-800 max-w-lg mx-auto md:mx-0 drop-shadow-sm">
              Je conçois des interfaces web <strong className="font-bold">rapides</strong> et <strong className="font-bold">accessibles</strong>.<br />
              Donnez vie à votre <strong className="font-bold">présence digitale</strong> grâce à un code <strong className="font-bold">propre</strong>, <strong className="font-bold">optimisé</strong> et <strong className="font-bold">pérenne</strong>.
            </p>
          </AnimatedText>

          <AnimatedImage>
            <Image
              src="/images/Les-formations-devenir-developpeur-application-mobile-F.jpg"
              alt="Illustration développeur web"
              width={500}
              height={300}
              className="rounded-lg shadow-[18px_18px_8px_13px_#a0aec0]"
              priority
            />
          </AnimatedImage>
        </section>

        {/* Projets */}
        <section id="projets" className="mb-24 pt-8 sm:pt-12 md:pt-16 max-w-4xl mx-auto">
          <AnimatedTitle>
            Mes Projets
          </AnimatedTitle>
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
      <section id="technologies" className="w-full bg-gradient-to-r from-purple-900 via-pink-900 to-red-900 pt-16">
          <AnimatedTitle>Technologies maîtrisées</AnimatedTitle>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-8 text-center text-white max-w-2/3 mx-auto">
            {/* Exemple d’icônes + texte */}
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

      <main className="text-centermin-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 text-gray-800 p-12 sm:p-20 flex flex-col gap-32 transition-colors">
        {/* Contact */}
       <section
          id="contact"
          className="pt-8 sm:pt-12 md:pt-16 w-3/3 mx-auto text-center"
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
        © {new Date().getFullYear()} Valentin – Tous droits réservés.
      </footer>
    </>
  );
}
