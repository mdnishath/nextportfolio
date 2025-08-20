import Image from "next/image";
export const metadata = {
  title: "About | Nishath - Web Developer & SEO Specialist",
  description:
    "Learn more about Nishath, a passionate full stack web developer specializing in WordPress, local SEO, and business growth solutions.",
};

const About = () => {
  return (
    <div className="flex flex-col items-center min-h-[calc(100dvh-220px)] max-h-[calc(100dvh-220px)] overflow-y-auto">
      <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-4">
        <div>
          <h1 className="text-lg md:text-2xl font-bold my-4 text-left text-black dark:text-gray-200">
            About Me
          </h1>
          <p className=" text-gray-600 dark:text-gray-300 max-w-2xl mb-6 text-left">
            Hi, I’m Nishath, a passionate Full Stack Developer and Digital
            Growth Strategist with a strong focus on creating impactful online
            experiences. I specialize in building fast, scalable, and modern web
            applications using Next.js and other cutting-edge technologies.
          </p>
          <p className=" text-gray-600 dark:text-gray-300 max-w-2xl mb-6 text-left">
            Beyond development, I bring a unique blend of WordPress expertise,
            Local SEO optimization, and Google My Business (GMB) ranking
            strategies that help businesses grow their digital presence and
            attract real customers.
          </p>
          <p className=" text-gray-600 dark:text-gray-300 max-w-2xl mb-6 text-left">
            I’ve helped brands and entrepreneurs not only get stunning,
            functional websites but also achieve top visibility on Google Maps
            and boost credibility through Google Reviews management. My goal is
            simple: turn ideas into powerful digital solutions that deliver
            results.
          </p>
          <h2 className="text-lg md:text-2xl font-bold my-4 text-left text-black dark:text-gray-200">
            ✨ What I do best:
          </h2>
          <ul>
            <li>
              🚀 Full Stack Web Development (Next.js, React, Node.js, etc.)
            </li>
            <li>🎨 WordPress Website Design & Customization</li>
            <li>📍 Local SEO & Google My Business Optimization</li>
            <li>⭐ Google Reviews & Reputation Management</li>
            <li>📈 Helping businesses rank higher and grow faster</li>
          </ul>
        </div>
        <div>
          <Image
            src={"/about-nishath.jpg"}
            width={1000}
            height={1300}
            alt="Md Nishath Khgandakar"
            className="h-[500px] w-auto rounded-[8px]"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
