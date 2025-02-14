import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function EmojiFeatureSection() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-24">
      <div className="container px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="grid items-center gap-8 sm:gap-10 lg:gap-12 lg:grid-cols-2">
          {/* Image Side */}
          <div className="relative flex justify-center lg:justify-start order-1">
            <div className="relative h-[300px] w-[320px] sm:h-[350px] sm:w-[380px] md:h-[400px] md:w-[420px] lg:h-[450px] lg:w-[480px]">
              <Image
                src="/cloud.png"
                alt="3D Emoji Illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="max-w-xl mx-auto lg:mx-0 order-2">
            <div className="mb-4 text-sm font-medium uppercase tracking-wider text-white/60">Overline</div>
            <h2 className="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Habitant tristique aliquam in vel scelerisque
            </h2>
            <p className="mb-6 sm:mb-8 text-base text-white/60">
              Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam
              commodo.
            </p>

            {/* Features */}
            <div className="mb-6 sm:mb-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 mb-2 sm:mb-0">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon1-0wes8LIMsEZSvNSNH4uAtlQO9fxpQU.svg"
                    alt="Feature icon"
                    width={32}
                    height={32}
                  />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-white">Sollicitudin sapien</h3>
                  <p className="text-sm text-white/60">Cursus fermentum</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 mb-2 sm:mb-0">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon2-0lTGO7L3EtLrqEL8m7dolUX14cQp9o.svg"
                    alt="Feature icon"
                    width={32}
                    height={32}
                  />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-white">Pulvinar metus</h3>
                  <p className="text-sm text-white/60">Nunc sed</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="w-full sm:w-auto bg-[#514cff] text-white hover:bg-[#514cff]/90">
                Get started
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/10 bg-white/5 text-white hover:bg-white/10">
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}