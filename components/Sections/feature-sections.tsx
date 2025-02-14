import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function FeatureSection() {
  return (
    <section className="relative">
      <div className="container px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="relative rounded-2xl p-6 sm:p-8 lg:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            {/* Content */}
            <div className="max-w-xl order-2 lg:order-1">
              <div className="mb-4 text-sm font-medium uppercase tracking-wider text-white/60">Overline</div>
              <h2 className="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Sapien ipsum scelerisque convallis fusce
              </h2>
              <p className="mb-6 text-base text-white/60 sm:mb-8">
                Ut enim vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat
                aliquam commodo.
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <Button size="lg" className="w-full bg-[#4F46E5] text-white hover:bg-[#4F46E5]/90 sm:w-auto">
                  Get started
                </Button>
                <Button variant="outline" size="lg" className="w-full border-white/10 bg-white/5 text-white hover:bg-white/10 sm:w-auto">
                  Learn more
                </Button>
              </div>
            </div>

            {/* Image */}
            <div className="relative mt-8 flex justify-center lg:mt-0 lg:justify-end order-1 lg:order-2">
              <div className="relative h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] md:h-[350px] md:w-[350px] lg:h-[400px] lg:w-[400px]">
                <Image
                  src="/bucket-image.png"
                  alt="3D Paint Bucket Illustration"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}