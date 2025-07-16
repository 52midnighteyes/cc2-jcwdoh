import Image from "next/image";

export default function ReviewSection() {
  return (
    <section
      id="review"
      className="bg-neutral-800 py-20 px-6 min-h-[600px] flex items-center justify-center"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
        <div className="w-[220px] h-[300px] relative rounded-md overflow-hidden border border-yellow-400/10 shadow-2xl contrast-125">
          <Image
            src="/kim.webp"
            alt="Kim Wexler"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="space-y-6 text-center md:text-left max-w-2xl">
          <h2 className="text-3xl font-bold text-yellow-400">
            Outstanding Review — Hamlin Hamlin
          </h2>
          <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
            “We had our doubts — he wasn’t exactly known for clean work. But the
            code?{" "}
            <span className="text-yellow-400 font-semibold">Immaculate</span>.{" "}
            <span className="italic">Structured. Fast.</span> Like he took all
            that courtroom trickery and rewired it into JavaScript. And this
            time,
            <span className="text-yellow-400 font-semibold"> it’s legal</span>.
            Our new website runs smoother than our best closing argument.”
          </p>
          <p className="text-sm text-yellow-400 font-semibold">
            — Kim Wexler, Managing Partner at Hamlin Hamlin
          </p>
        </div>
      </div>
    </section>
  );
}
