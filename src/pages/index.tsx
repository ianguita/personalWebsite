import { Inter, Roboto_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="bg-zinc-950 bg-opacity-80 backdrop-blur-xl h-16 w-full fixed bottom-0">
        <hr className="h-px border-0 bg-gradient-to-r from-sky-500 to-indigo-500 fixed w-full" />
        <div
          className={`${robotoMono.className} flex px-5 justify-between h-full items-center`}
        >
          <p className="font-bold p-3 bg-zinc-900 rounded-lg">About</p>
          <p className="p-3">
            <Link href="#articles">Articles</Link>
          </p>
          <p className="p-3">Contact</p>
        </div>
      </div>
      <main className={`${robotoMono.className} mt-5 mb-24 px-5`}>
        <div>
          <h1 className="text-2xl font-black leading-relaxed text-gray-200">
            Front-end Developer creating thoughtful and creative websites.
          </h1>
          <p className="mt-8">
            Hi! I&apos;m Ivan Anguita, a Barcelona based web developer with five
            years of experince. I specialise in fornt-end, working with nextjs
            with a focus on simplicity and usability.
          </p>
          <p className="mt-8">
            I&apos;m currently working at 
            <a
              className="text-zinc-100 font-bold hover:text-indigo-300"
              href="https://addmira.com/"
            >
              Addmira Multimedia
            </a>
             where I give my best at offering the best solutions to our client&apos;s
            needs.
          </p>
          <p className="mt-8">
            My tools of work are Photoshop, Illustrator, Figma, Visual Studio
            Code, Github and my creativity.
          </p>
          <div className="flex w-full mt-8 justify-between align-middle">
            <div className="flex w-1/2 justify-between">
              <a href="https://twitter.com/anguitageist">
                <Image
                  src="icons/twitter.svg"
                  width={24}
                  height={24}
                  alt="Twitter"
                />
              </a>
              <a href="https://www.instagram.com/anguitageist/">
                <Image
                  src="icons/instagram.svg"
                  width={24}
                  height={24}
                  alt="Instagram"
                />
              </a>
              <a href="https://www.linkedin.com/in/ivan-anguita-888aba129/">
                <Image
                  src="icons/linkedin-in.svg"
                  width={24}
                  height={24}
                  alt="LinkedIn"
                />
              </a>
              <a href="https://github.com/ianguita">
                <Image
                  src="icons/github.svg"
                  width={24}
                  height={24}
                  alt="Github"
                />
              </a>
            </div>
            <div>
              <a
                href="mailto:ivan_anguita@outlook.es"
                className="font-bold text-right text-gray-200 text-sm rounded-full px-4 py-2 bg-zinc-800 border border-zinc-700 hover:bg-zinc-700"
              >
                Email me
              </a>
            </div>
          </div>
        </div>
        <hr className="my-14 h-px border-0 bg-zinc-800" />
        <div>
          <h2 id="articles" className="text-xl text-gray-200 font-bold">
            Latest articles
          </h2>
          <p className="mt-3">
            A collection of some articles about things I find interesting.
          </p>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg my-7 p-3 hover:bg-zinc-800">
            <h3 className="text-lg text-gray-200 font-bold">
              10 Essential CSS Techniques for Stunning Web Designs
            </h3>
            <p className="text-xs">22/04/2023</p>
            <p className="mt-2">
              CSS is an incredibly powerful tool that can transform a website
              from a plain-looking page to a stunning visual masterpiece. In
              this article, we&apos;ll cover 10 essential CSS techniques that every
              front-end web developer should know to create visually appealing
              and responsive designs. From mastering the box model to using
              flexbox and grid, these techniques will help you take your web
              design skills to the next level.
            </p>
            <a
              href="#"
              className="text-gray-200 font-bold bg-zinc-950 rounded-lg py-3 block text-center mt-2 border border-zinc-800 text-sm hover:bg-zinc-900"
            >
              Read More
            </a>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg my-7 p-3 hover:bg-zinc-800">
            <h3 className="text-lg text-gray-200 font-bold">
              Best Practices for Creating Accessible Web Interfaces
            </h3>
            <p className="text-xs">22/04/2023</p>
            <p className="mt-2">
              As a front-end web developer, it&apos;s essential to create interfaces
              that are accessible to all users, including those with
              disabilities. In this article, we&apos;ll cover some best practices for
              creating accessible web interfaces, including using semantic HTML,
              providing alternative text for images, and ensuring keyboard
              navigation. By following these guidelines, you can ensure that
              your website is inclusive and accessible to everyone.
            </p>
            <a
              href="#"
              className="text-gray-200 font-bold bg-zinc-950 rounded-lg py-3 block text-center mt-2 border border-zinc-800 text-sm hover:bg-zinc-900"
            >
              Read More
            </a>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg my-7 p-3 hover:bg-zinc-800">
            <h3 className="text-lg text-gray-200 font-bold">
              The Pros and Cons of Using JavaScript Frameworks for Front-End
              Development
            </h3>
            <p className="text-xs">22/04/2023</p>
            <p className="mt-2">
              JavaScript frameworks like React, Vue, and Angular have become
              increasingly popular in recent years for front-end web
              development. However, there are pros and cons to using these
              frameworks, and it&apos;s important to understand them before deciding
              whether to use them in your projects. In this article, we&apos;ll
              explore the benefits and drawbacks of using JavaScript frameworks,
              including their impact on performance, development speed, and
              maintainability. We&apos;ll also provide some tips for choosing the
              right framework for your project.
            </p>
            <a
              href="#"
              className="text-gray-200 font-bold bg-zinc-950 rounded-lg py-3 block text-center mt-2 border border-zinc-800 text-sm hover:bg-zinc-900"
            >
              Read More
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
