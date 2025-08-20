import Image from "next/image";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

// ✅ App Router Metadata (SEO)
export const metadata = {
  title: "Nishath | Full Stack Dev, WordPress, Local SEO Expert",
  description:
    "Professional web developer offering Full Stack solutions, WordPress sites, Local SEO, Google My Business setup, and review strategies.",
};

// ✅ JSON-LD component for Schema.org
const JsonLdScript = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nishath",
    url: "https://nextportfolio-six-phi.vercel.app/", // ← REPLACE with real domain
    jobTitle: "Full Stack Developer",
    sameAs: [
      "https://www.linkedin.com/in/mdnishath",
      "https://github.com/mdnishath",
    ],
    description:
      "Nishath is a Full Stack Developer and SEO specialist providing web development, WordPress design, and Google My Business setup services.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default function Home() {
  return (
    <>
      <JsonLdScript />

      <div className="flex flex-col items-center justify-center min-h-[calc(100dvh-220px)] overflow-y-auto px-4 py-6">
        <Image
          src="/nishath.png"
          alt="Nishath"
          width={200}
          height={600}
          className="rounded-full border-2 border-orange-500"
        />

        <h1 className="text-lg md:text-xl font-bold my-4 text-center text-black dark:text-gray-200">
          Hi, I’m <span className="text-orange-500">Nishath</span> — Creative
          Web Developer & Designer
        </h1>

        <h2 className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-6 text-center">
          I specialize in building modern, responsive, and user-friendly
          websites that blend clean design with powerful functionality.
        </h2>

        <div className="flex flex-col md:flex-row gap-4">
          <Link
            href="/work"
            className="bg-orange-500 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-600 transform transition duration-300 hover:scale-105"
          >
            <h3>View My Work</h3>
          </Link>
          <Link
            href="https://wa.me/8801767591988"
            className="border border-orange-500 text-orange-500 px-6 py-3 rounded-full font-medium hover:bg-orange-500 hover:text-white transform transition duration-300 hover:scale-105 flex gap-2 items-center justify-center"
          >
            <BsWhatsapp className="text-green-500" />
            <h3>Let’s Connect</h3>
          </Link>
        </div>

        {/* Social Media Panel */}
        <div className="flex gap-3 my-4 text-2xl text-white">
          <Link href="https://github.com/mdnishath" target="_blank">
            <FaGithub className="bg-orange-500 p-2 rounded-full hover:bg-orange-600 transform transition duration-300 hover:scale-110 text-4xl" />
          </Link>
          <Link href="https://linkedin.com/in/mdnishath" target="_blank">
            <FaLinkedin className="bg-orange-500 p-2 rounded-full hover:bg-orange-600 transform transition duration-300 hover:scale-110 text-4xl" />
          </Link>
          <Link href="https://x.com/kh_nishath" target="_blank">
            <FaTwitter className="bg-orange-500 p-2 rounded-full hover:bg-orange-600 transform transition duration-300 hover:scale-110 text-4xl" />
          </Link>
          <Link
            href="https://www.instagram.com/nishath.khandakar/ text-4xl"
            target="_blank"
          >
            <FaInstagram className="bg-orange-500 p-2 rounded-full hover:bg-orange-600 transform transition duration-300 hover:scale-110" />
          </Link>
        </div>
      </div>
    </>
  );
}
