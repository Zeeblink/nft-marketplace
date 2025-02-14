import Image from "next/image"

export default function BrandLogos() {
  const brands = [
    {
      src: "/brand-Logos/ritter-sport.svg",
      alt: "Ritter Sport",
    },
    {
      src: "/brand-Logos/Nike.svg",
      alt: "Nike",
    },
    {
      src: "/brand-Logos/Adidas.svg",
      alt: "Adidas",
    },
    {
      src: "/brand-Logos/New-Holland.svg",
      alt: "New Holland",
    },
  ]

  return (
    <div className="mx-auto mb-16 grid max-w-4xl grid-cols-2 gap-20 opacity-60 md:grid-cols-4">
      {brands.map((brand) => (
        <div key={brand.alt} className="flex items-center justify-center">
          <Image
            src={brand.src || "/placeholder.svg"}
            alt={brand.alt}
            width="85"
            height="45"
            className="max-h-[85px] max-w-[45px] "
          />
        </div>
      ))}
    </div>
  )
}

