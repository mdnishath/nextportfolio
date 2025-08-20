import Hero from "@/components/ui/Hero";
import Image from "next/image";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100dvh-220px)] max-h-[calc(100dvh-220px)] overflow-y-auto">
      <Image
        src="/nishath.png"
        alt="Nishath"
        width={200}
        height={600}
        className="rounded-full border-2 border-orange-500"
      />
      <h1 className="text-lg md:text-xl font-bold my-4 text-center text-black dark:text-gray-200">
        Hi, I’m <span className="text-orange-500">Nishath</span> — Creative Web
        Developer & Designer
      </h1>
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-6 text-center">
        I specialize in building modern, responsive, and user-friendly websites
        that blend clean design with powerful functionality. With a focus on
        performance and aesthetics, I help businesses and individuals bring
        their digital vision to life.
      </p>
      <div className="flex gap-4">
        <Link
          href="#projects"
          className="bg-orange-500 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-600 transform transition duration-300 hover:scale-105"
        >
          View My Work
        </Link>
        <Link
          href="https://wa.me/8801767591988"
          className="border border-orange-500 text-orange-500 px-6 py-3 rounded-full font-medium hover:bg-orange-500 hover:text-white transform transition duration-300 hover:scale-105 flex gap-2 items-center justify-center"
        >
          <BsWhatsapp className="text-green-500" />
          Let’s Connect
        </Link>
      </div>

      {/* Social Media Panel */}
      <div className="flex gap-3 my-4 text-2xl text-white ">
        <Link
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-500 p-2 rounded-full hover:bg-orange-600 transform transition duration-300 hover:scale-110"
        >
          <FaGithub />
        </Link>
        <Link
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-500 p-2 rounded-full hover:bg-orange-600 transform transition duration-300 hover:scale-110"
        >
          <FaLinkedin />
        </Link>
        <Link
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-500 p-2 rounded-full hover:bg-orange-600 transform transition duration-300 hover:scale-110"
        >
          <FaTwitter />
        </Link>
        <Link
          href="https://instagram.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-500 p-2 rounded-full hover:bg-orange-600 transform transition duration-300 hover:scale-110"
        >
          <FaInstagram />
        </Link>
      </div>
    </div>
  );
}
