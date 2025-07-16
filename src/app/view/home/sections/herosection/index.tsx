import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="bg-black text-white py-20 px-6 min-h-[600px] items-center justify-center flex"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        <div className="w-full flex justify-center order-1 lg:order-2">
          <Image
            src="/jimmy.jpg"
            alt="Jimmy McGill"
            width={400}
            height={540}
            className="rounded-md object-cover shadow-2xl grayscale contrast-125"
            priority
          />
        </div>

        <div className="space-y-4 order-2 lg:order-1">
          <h1 className="text-4xl lg:text-4xl font-bold text-white">
            Jimmy “Code” McGill
          </h1>
          <h2 className="text-lg text-gray-400 font-medium">
            Full-Stack Web Developer
          </h2>

          <p className="text-gray-300 text-sm lg:text-base leading-relaxed max-w-prose">
            <span className="font-semibold text-white">I'm Jimmy</span> — or if
            you knew me as Saul Goodman, relax, I’m in tech now. I used to bend
            the law, now I bend layouts. Courtrooms are out,{" "}
            <span className="font-mono text-yellow-400 font-bold">
              console.log
            </span>{" "}
            is in. These days I make{" "}
            <span className="font-bold text-yellow-400">
              slow sites disappear
            </span>{" "}
            with <span className="font-semibold text-white">Next.js</span>,{" "}
            <span className="font-semibold text-white">Node.js</span>, and a
            little leftover charm. It’s cleaner. Quieter. And yeah — <br />
            <span className="font-bold text-yellow-400">better call...</span> me
            for a website problem
          </p>

          <blockquote className="border-l-4 border-yellow-400 pl-5 italic text-yellow-300 text-base">
            “I used to make people disappear — now I make React components
            vanish. Some call it progress. I call it Tailwind.”
          </blockquote>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link href="#contact">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-5">
                Better Make a Website!
              </Button>
            </Link>
            <Link href="#aboutme">
              <Button
                variant="outline"
                className="border bg-black border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-medium px-5"
              >
                About Me
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
