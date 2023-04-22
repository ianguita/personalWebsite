import { Inter, Roboto_Mono } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });
const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="bg-zinc-950 bg-opacity-80 backdrop-blur-xl h-16 w-full fixed bottom-0">
        <hr className="h-px border-0 bg-gradient-to-r from-sky-500 to-indigo-500 fixed w-full" />
        <div className={`${robotoMono.className} flex px-5 justify-between h-full items-center`}>
          <p className="font-bold p-3 bg-zinc-900 rounded-lg">About</p>
          <p>Articles</p>
          <p>Projects</p>
          <p>Contact</p>
        </div>
      </div>
      <main className={`${robotoMono.className} mt-5 mb-24 px-5`}>
        <div>
          <h1 className="text-2xl font-black leading-relaxed text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h1>
          <p className="mt-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            blandit quam nec hendrerit aliquam. Interdum et malesuada fames ac
            ante ipsum primis in faucibus.
          </p>
          <p className="mt-8">
            Donec pharetra, sem sit amet tristique ultrices, lectus felis
            imperdiet erat, vehicula laoreet nunc nibh eget tellus. Aenean sed
            neque id diam consectetur molestie sed quis lorem. Aenean tempor
            ipsum lectus.
          </p>
          <p className="mt-8">
            Sed sapien eros, bibendum nec sapien eget, finibus tristique felis.
            Nullam elementum erat mauris, non viverra lectus tincidunt non.
          </p>
          <div className="flex w-full mt-8 justify-between align-middle">
            <div className="flex w-1/2 justify-between">
              <a href="">
                <Image
                  src="icons/twitter.svg"
                  width={24}
                  height={24}
                  alt="Twitter"
                  className="fill-gray-200"
                />
              </a>
              <a href="">
                <Image
                  src="icons/instagram.svg"
                  width={24}
                  height={24}
                  alt="Instagram"
                  className="fill-gray-200"
                />
              </a>
              <a href="">
                <Image
                  src="icons/linkedin-in.svg"
                  width={24}
                  height={24}
                  alt="LinkedIn"
                  className="fill-gray-200"
                />
              </a>
              <a href="">
                <Image
                  src="icons/github.svg"
                  width={24}
                  height={24}
                  alt="Github"
                  className="fill-gray-200"
                />
              </a>
            </div>
            <div>
              <a
                href="#"
                className="font-bold text-right text-gray-200 text-sm rounded-full px-4 py-2 bg-zinc-800 border border-zinc-700"
              >
                Email me
              </a>
            </div>
          </div>
        </div>
        <hr className="my-14 h-px border-0 bg-zinc-800" />
        <div>
          <h2 className="text-xl text-gray-200 font-bold">Latest articles</h2>
          <p className="mt-3">
            A collection of some articles about things I find interesting.
          </p>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg my-7 p-3">
            <h3 className="text-lg text-gray-200 font-bold">
              Lorem ipsum dolor sit amet
            </h3>
            <p className="text-xs">Category &gt; 22/04/2023</p>
            <p className="mt-2">
              Sed augue lectus, volutpat ac neque vel, lobortis molestie tortor.
              Sed tempor pulvinar orci, in dictum erat volutpat ut. Maecenas
              fringilla, tellus ac pulvinar placerat, ligula enim maximus
              lectus, rhoncus sagittis est odio ac libero.
            </p>
            <a
              href="#"
              className="text-gray-200 font-bold bg-zinc-950 rounded-lg py-3 block text-center mt-2 border border-zinc-800 text-sm"
            >
              Read More
            </a>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg my-7 p-3">
            <h3 className="text-lg text-gray-200 font-bold">
              Lorem ipsum dolor sit amet
            </h3>
            <p className="text-xs">Category &gt; 22/04/2023</p>
            <p className="mt-2">
              Sed augue lectus, volutpat ac neque vel, lobortis molestie tortor.
              Sed tempor pulvinar orci, in dictum erat volutpat ut. Maecenas
              fringilla, tellus ac pulvinar placerat, ligula enim maximus
              lectus, rhoncus sagittis est odio ac libero.
            </p>
            <a
              href="#"
              className="text-gray-200 font-bold bg-zinc-950 rounded-lg py-3 block text-center mt-2 border border-zinc-800 text-sm"
            >
              Read More
            </a>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg my-7 p-3">
            <h3 className="text-lg text-gray-200 font-bold">
              Lorem ipsum dolor sit amet
            </h3>
            <p className="text-xs">Category &gt; 22/04/2023</p>
            <p className="mt-2">
              Sed augue lectus, volutpat ac neque vel, lobortis molestie tortor.
              Sed tempor pulvinar orci, in dictum erat volutpat ut. Maecenas
              fringilla, tellus ac pulvinar placerat, ligula enim maximus
              lectus, rhoncus sagittis est odio ac libero.
            </p>
            <a
              href="#"
              className="text-gray-200 font-bold bg-zinc-950 rounded-lg py-3 block text-center mt-2 border border-zinc-800 text-sm"
            >
              Read More
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
