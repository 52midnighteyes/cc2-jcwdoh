import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function AboutMeSection() {
  return (
    <section
      id="aboutme"
      className="bg-[#1A1A1A] py-20 px-6 min-h-[600px] items-center justify-center flex"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div className="w-full flex justify-center md:justify-start">
          <Image
            src="/transformation.jpeg"
            alt="Transformation"
            width={500}
            height={500}
            className="rounded-md object-cover shadow-2xl contrast-125"
            priority
          />
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-yellow-400">About Me</h2>
          <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
            <span className="font-bold text-yellow-400">
              These days, I debug code — not court cases.
            </span>{" "}
            I build clean, fast, and persuasive websites that convert better
            than any closing argument I ever made. Before this, I was a lawyer —
            the kind you called when things got... complicated. Let’s just say I
            knew my way around "client confidentiality" a little too well. But
            I’ve hung up the suit and picked up the semicolons.{" "}
            <span className="font-bold text-yellow-400">
              Need someone who solves problems fast?
            </span>{" "}
            I still do that — now with{" "}
            <span className="font-semibold text-white">React</span>,{" "}
            <span className="font-semibold text-white">Next.js</span>, and fewer
            FBI files.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            <Badge className="bg-yellow-400/10 text-yellow-400 border border-yellow-400/30">
              JavaScript
            </Badge>
            <Badge className="bg-yellow-400/10 text-yellow-400 border border-yellow-400/30">
              TypeScript
            </Badge>
            <Badge className="bg-yellow-400/10 text-yellow-400 border border-yellow-400/30">
              Next.js
            </Badge>
            <Badge className="bg-yellow-400/10 text-yellow-400 border border-yellow-400/30">
              Node.js
            </Badge>
            <Badge className="bg-yellow-400/10 text-yellow-400 border border-yellow-400/30">
              Tailwind CSS
            </Badge>
            <Badge className="bg-yellow-400/10 text-yellow-400 border border-yellow-400/30">
              REST API
            </Badge>
            <Badge className="bg-yellow-400/10 text-yellow-400 border border-yellow-400/30">
              Go (Golang)
            </Badge>
            <Badge className="bg-yellow-400/10 text-yellow-400 border border-yellow-400/30">
              PostgreSQL
            </Badge>
            <Badge className="bg-yellow-400/10 text-yellow-400 border border-yellow-400/30">
              Supabase
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
