import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export default function ExperienceSection() {
  return (
    <section className="bg-black py-20 px-6 text-white min-h-[600px] items-center justify-center flex">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">
          My <span className="text-yellow-400">Experiences</span>
        </h2>
        <p className="text-gray-400 mb-10 max-w-2xl">
          From the courtroom to the codebase — it’s been one wild switch. Now
          I’m rewriting my path with React and Node.js.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Mail Boy */}
          <Card className="bg-neutral-900 border border-yellow-400/10 text-white">
            <CardHeader>
              <CardDescription>2017 - 2018</CardDescription>
              <CardTitle className="text-yellow-400 text-lg">
                Mail Boy
              </CardTitle>
              <p className="text-sm text-gray-300">
                <strong>Hamlin, Hamlin & McGill</strong>
              </p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-400">
                Delivered mail, dodged lawsuits, and overheard enough legal
                drama to last a lifetime. Humble beginnings — but it sparked the
                hustle.
              </p>
            </CardContent>
          </Card>

          {/* Lawyer */}
          <Card className="bg-neutral-900 border border-yellow-400/10 text-white">
            <CardHeader>
              <CardDescription>2018 - 2024</CardDescription>
              <CardTitle className="text-yellow-400 text-lg">
                Criminal Lawyer
              </CardTitle>
              <p className="text-sm text-gray-300">
                <strong>Self-Employed</strong>
              </p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-400">
                Represented clients in tough situations — from courtroom chaos
                to legal loopholes. Always had a way with words… and loopholes.
              </p>
            </CardContent>
          </Card>

          {/* Web Dev */}
          <Card className="bg-neutral-900 border border-yellow-400/10 text-white">
            <CardHeader>
              <CardDescription>2025 - Present</CardDescription>
              <CardTitle className="text-yellow-400 text-lg">
                Full-Stack Web Developer
              </CardTitle>
              <p className="text-sm text-gray-300">
                <strong>Independent</strong>
              </p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-400">
                Now writing code instead of briefs. Building full-stack apps
                with React, Next.js, Node.js, and PostgreSQL — clean, sharp, and
                legally solid.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
