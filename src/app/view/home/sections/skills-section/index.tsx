import { Progress } from "@/components/ui/progress";

export default function SkillsSection() {
  return (
    <section className="bg-black py-20 px-6 text-white min-h-[600px] items-center justify-center flex">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Text Section */}
        <div className="space-y-5">
          <h2 className="text-3xl font-bold text-yellow-400">Skills</h2>
          <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
            I build both the{" "}
            <span className="font-bold text-yellow-400">front-end</span> and the{" "}
            <span className="font-bold text-yellow-400">back-end</span> — all
            sleek, fast, and drama-free. I like my UIs minimal, my APIs clean,
            and my errors gone without a trace. Whether it’s a component that
            refuses to center or a server throwing attitude, I’ll handle it — in{" "}
            <span className="font-semibold text-white">black and white</span>,
            just the way I like it.
          </p>
        </div>

        {/* Progress Section */}
        <div className="space-y-5">
          <div>
            <div className="mb-1 text-sm text-gray-400">Node.js</div>
            <Progress
              value={85}
              className="h-3 bg-yellow-400/10 [&>*]:bg-yellow-400"
            />
          </div>

          <div>
            <div className="mb-1 text-sm text-gray-400">Express.js</div>
            <Progress
              value={80}
              className="h-3 bg-yellow-400/10 [&>*]:bg-yellow-400"
            />
          </div>

          <div>
            <div className="mb-1 text-sm text-gray-400">PostgreSQL</div>
            <Progress
              value={75}
              className="h-3 bg-yellow-400/10 [&>*]:bg-yellow-400"
            />
          </div>

          <div>
            <div className="mb-1 text-sm text-gray-400">
              React (Front-end Magic)
            </div>
            <Progress
              value={60}
              className="h-3 bg-yellow-400/10 [&>*]:bg-yellow-400"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
