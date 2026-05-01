const services = [
  {
    id: 'landing',
    name: 'Landing Page',
    price: 'K2,000',
    icon: '/service-landing-page.png',
    desc: 'A single, high-converting page perfect for promoting a product, service, or event. Mobile responsive with contact form integration.',
    features: ['Mobile responsive design', 'Contact form + WhatsApp button', 'Basic SEO setup', 'Delivery in 5 days'],
  },
  {
    id: 'business',
    name: 'Business Website',
    price: 'K4,000',
    icon: '/service-business-website.png',
    desc: 'A complete 5-page website with Home, About, Services, Gallery, and Contact pages. Includes domain name for the first year.',
    features: ['5 fully responsive pages', 'Domain name included (1st year)', 'Google Maps integration', 'WhatsApp chat button', 'Priority support'],
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce',
    price: 'K5,000',
    icon: '/service-ecommerce.png',
    desc: 'A full online store with up to 20 product listings, payment gateway integration, and order management. Start selling online today.',
    features: ['Up to 20 product listings', 'Payment gateway integration', 'Order management system', 'Mobile optimised', 'Domain name included'],
  },
  {
    id: 'domain',
    name: 'Domain Name',
    price: 'K700',
    icon: '🌐',
    desc: 'Register your custom domain name (.com, .co.zm, .zm) with all DNS配置. First year hosting included.',
    features: ['.com, .co.zm, .zm available', 'Full DNS configuration', 'First year hosting', 'Email forwarding setup'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-glossy-gray">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-label">What We Offer</p>
          <h2 className="section-title">Our Services & Pricing</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Transparent, honest pricing. No hidden fees. Every project includes free hosting through Vercel.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.id} className="glass-card p-6 flex flex-col">
              <div className="w-16 h-16 mb-5">
                {s.icon.startsWith('/') ? (
                  <img src={s.icon} alt={s.name} className="w-full h-full object-contain" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-4xl">{s.icon}</div>
                )}
              </div>
              <h3 className="text-lg font-bold text-dark mb-1">{s.name}</h3>
              <div className="text-2xl font-extrabold text-orange mb-3">{s.price}</div>
              <p className="text-sm text-muted leading-relaxed mb-5 flex-1">{s.desc}</p>
              <ul className="space-y-2 mb-6">
                {s.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-dark">
                    <span className="text-orange mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contract" className="btn-primary text-sm justify-center">
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}