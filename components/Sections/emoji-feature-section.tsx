import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function EmojiFeatureSection() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-24">
      <div className="container px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="grid items-center gap-8 sm:gap-10 lg:gap-12 lg:grid-cols-2">
          {/* Image Side - Unchanged */}
          <div className="relative flex justify-center lg:justify-start order-1">
            <div className="relative h-[300px] w-[320px] sm:h-[350px] sm:w-[380px] md:h-[400px] md:w-[420px] lg:h-[450px] lg:w-[480px]">
              <Image
                src="/emoji.png"
                alt="3D Emoji Illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="max-w-xl mx-auto lg:mx-0 order-2 items-center">
            <div className="mb-4 text-sm font-medium uppercase tracking-wider text-muted bg-white/5 rounded-full px-3 py-1 inline-block sm:bg-transparent sm:p-0">Overline</div>

            <h2 className="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Habitant tristique aliquam in vel scelerisque
            </h2>

            <p className="mb-6 sm:mb-8 text-base text-muted">
              Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam
              commodo.
            </p>

            {/* Features - Mobile-only modifications */}
            <div className="mb-6 sm:mb-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-row items-center sm:flex-col sm:items-start p-4 bg-white/[0.03] rounded-xl sm:p-0 sm:bg-transparent gap-4 sm:gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 mb-0 sm:mb-2">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon1-0wes8LIMsEZSvNSNH4uAtlQO9fxpQU.svg"
                    alt="Feature icon"
                    width={32}
                    height={32}
                  />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-white mb-1">Sollicitudin sapien</h3>
                  <p className="text-xs sm:text-sm text-muted">Cursus fermentum</p>
                </div>
              </div>

              <div className="flex flex-row items-center sm:flex-col sm:items-start p-4 bg-white/[0.03] rounded-xl sm:p-0 sm:bg-transparent gap-4 sm:gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 mb-0 sm:mb-2">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon2-0lTGO7L3EtLrqEL8m7dolUX14cQp9o.svg"
                    alt="Feature icon"
                    width={32}
                    height={32}
                  />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-white mb-1">Pulvinar metus</h3>
                  <p className="text-xs sm:text-sm text-muted">Nunc sed</p>
                </div>
              </div>
            </div>

            {/* CTAs - Mobile-only modifications */}
            <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 sm:space-x-4">
              <Button size="lg" className="w-full sm:w-auto text-white">
                Get started
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-white hover:bg-white/10">
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}