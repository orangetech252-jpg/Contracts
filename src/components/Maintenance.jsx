const plans = [
  {
    id: 'landing-maint',
    title: 'Landing Page',
    price: 'K300/mo',
    desc: 'Ideal for Starter sites. Covers minor text and image updates each month.',
    note: 'For 1-page sites',
  },
  {
    id: 'business-maint',
    title: 'Business / E-Commerce',
    price: 'K600/mo',
    desc: 'Unlimited small changes and additions for your business or store website.',
    note: 'For 5-page sites & stores',
  },
  {
    id: 'ondemand',
    title: 'Per-Update',
    price: 'K150/update',
    desc: "No monthly fee. Pay only when you need a change. Perfect if changes are infrequent.",
    note: 'No maintenance contract',
    highlight: true,
  },
]

export default function Maintenance() {
  return (
    <section id="maintenance" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-label">Keep It Running</p>
          <h2 className="section-title">Maintenance Plans</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Monthly maintenance ensures your website stays updated, secure, and running smoothly.
            Or choose per-update pricing — no commitment required.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div
              key={p.id}
              className={`glass-card p-8 flex flex-col text-center ${p.highlight ? 'ring-2 ring-orange' : ''}`}
            >
              {p.highlight && (
                <div className="bg-orange text-white text-xs font-bold px-3 py-1 rounded-full self-center mb-4">
                  Most Flexible
                </div>
              )}
              <h3 className="text-lg font-bold text-dark mb-2">{p.title}</h3>
              <div className="text-3xl font-extrabold text-orange mb-2">{p.price}</div>
              <p className="text-sm text-muted leading-relaxed mb-2 flex-1">{p.desc}</p>
              <p className="text-xs text-muted italic">{p.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-xl px-6 py-4 text-sm text-dark">
            <span className="text-orange text-lg">💡</span>
            <span>
              <strong>Pro tip:</strong> An active maintenance plan is required for priority support and advanced feature requests.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}