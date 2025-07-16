import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="bg-neutral-900 text-white py-20 px-6 min-h-[600px] items-center justify-center flex "
    >
      <div className="max-w-6xl w-auto mx-auto ">
        <h2 className="text-3xl font-bold text-yellow-400 mb-10">Portfolio</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Dialog>
            <DialogTrigger asChild>
              <Card className="bg-neutral-800 border border-yellow-400/20 hover:border-yellow-400 transition cursor-pointer">
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-yellow-400">
                    Los Pollos Hermanos
                  </h3>
                  <p className="text-sm text-gray-400">
                    From suspicious to sophisticated.
                  </p>
                </div>
              </Card>
            </DialogTrigger>
            <DialogContent className="bg-neutral-900 border border-yellow-400/10 text-white max-w-xl">
              <DialogTitle className="text-xl font-bold text-yellow-400">
                Los Pollos Hermanos — Rebrand
              </DialogTitle>
              <div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  After its...{" "}
                  <span className="italic">complicated history</span>, Los
                  Pollos Hermanos needed more than a rebrand — it needed a
                  complete digital reset. They wanted a trustworthy site to
                  support their “new ethical mission” and enable online orders
                  without raising eyebrows. I built it using{" "}
                  <strong>Next.js</strong>, <strong>Tailwind CSS</strong>, and a{" "}
                  <strong>headless CMS</strong> for content control. The result?
                  A clean, fast platform where customers can browse the menu
                  without calling their lawyer first.
                </p>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Card className="bg-neutral-800 border border-yellow-400/20 hover:border-yellow-400 transition cursor-pointer">
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-yellow-300">
                    Hamlin Hamlin & McGill
                  </h3>
                  <p className="text-sm text-gray-400">
                    A classic firm, modernized.
                  </p>
                </div>
              </Card>
            </DialogTrigger>
            <DialogContent className="bg-neutral-900 border border-yellow-400/10 text-white max-w-xl">
              <DialogTitle className="text-xl font-bold text-yellow-400">
                Hamlin, Hamlin & McGill — Site Revamp
              </DialogTitle>
              <p className="text-sm text-gray-300 mt-4 leading-relaxed">
                Legacy law firm, new digital front. I redesigned their static
                site with <b>Next.js</b> and <b>MDX</b>, keeping it minimal and
                classy. ADA-compliant, fast-loading, and with a firm tone —
                perfect for people who bill by the minute.
              </p>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Card className="bg-neutral-800 border border-yellow-400/20 hover:border-yellow-400 transition cursor-pointer">
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-yellow-400">
                    This Site
                  </h3>
                  <p className="text-sm text-gray-400">
                    My playground (and portfolio).
                  </p>
                </div>
              </Card>
            </DialogTrigger>
            <DialogContent className="bg-neutral-900 border border-yellow-400/10 text-white max-w-xl">
              <DialogTitle className="text-xl font-bold text-yellow-400">
                This Site — Built by Me
              </DialogTitle>
              <p className="text-sm text-gray-300 mt-4 leading-relaxed">
                A clean, black-and-yellow portfolio built with <b>Next.js</b>,{" "}
                <b>Tailwind</b>, <b>shadcn/ui</b>, and a lot of overthinking.
                I’ve only had two clients — and yes, they were friends — but
                this site proves I can ship and deliver. Fast, functional, and
                just serious enough.
              </p>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}
