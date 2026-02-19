const partners = [
  { name: "AngelHub", logo: "/images/partners/angelhub.jpg" },
  { name: "Founder Institute", logo: "/images/partners/founder-institute.jpg" },
  { name: "Uniandinos", logo: "/images/partners/uniandinos.jpg" },
  { name: "BVC", logo: "/images/partners/bvc.jpg" },
  { name: "Google for Startups", logo: "/images/partners/google-startups.jpg" },
  { name: "Tecnológico de Monterrey", logo: "/images/partners/tec-monterrey.jpg" },
  { name: "Startuplinks", logo: "/images/partners/startuplinks.jpg" },
  { name: "Startti", logo: "/images/partners/startti.jpg" },
  { name: "Wandr", logo: "/images/partners/wandr.jpg" },
]

export function Partners() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-oxford-blue text-center mb-12 sm:mb-16">
          Nuestros Partners
        </h2>

        {/* Static Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 sm:gap-10 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-16 sm:h-20 w-full"
            >
              <img
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                className="max-h-14 sm:max-h-16 max-w-full object-contain transition-all duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
