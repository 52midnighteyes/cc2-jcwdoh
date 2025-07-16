import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-black py-20 px-6 min-h-[600px] flex items-center justify-center"
    >
      <div className="max-w-xl w-full space-y-10">
        <div className="text-center space-y-2">
          <h2 className="text-4xl font-bold text-white">
            Let’s <span className="text-yellow-400">Make It Disappear</span>
          </h2>
          <p className="text-gray-400 text-sm">
            Pixels or problems — I handle both.{" "}
          </p>
        </div>

        <Card className="bg-[#0B0D10] border border-yellow-400/10 shadow-xl">
          <CardContent className="pt-6 space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm text-white">
                Name
              </label>
              <Input
                id="name"
                placeholder="Enter your name"
                className="bg-[#1D232A] text-white border-none placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm text-white">
                Email
              </label>
              <Input
                id="email"
                placeholder="Enter your email"
                className="bg-[#1D232A] text-white border-none placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm text-white">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Your message here..."
                className="bg-[#1D232A] text-white border-none placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0 min-h-[150px]"
              />
            </div>

            <Button className="bg-yellow-400 text-black w-full hover:bg-yellow-300 font-medium">
              Send Message
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
