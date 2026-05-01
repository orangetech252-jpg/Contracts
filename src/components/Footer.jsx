export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-orange rounded-lg flex items-center justify-center">
                <span className="text-white font-extrabold text-lg">OC</span>
              </div>
              <span className="font-extrabold text-lg">Orange Core</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Bright Ideas, Solid Solutions.<br />
              Web development that empowers local Zambian businesses to succeed online.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-gray-400 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="text-gray-300 hover:text-orange transition">Services & Pricing</a></li>
              <li><a href="#maintenance" className="text-gray-300 hover:text-orange transition">Maintenance Plans</a></li>
              <li><a href="#contract" className="text-gray-300 hover:text-orange transition">Service Agreement</a></li>
              <li><a href="#invoice" className="text-gray-300 hover:text-orange transition">Generate Invoice</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-gray-400 mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="mt-0.5">📍</span>
                <span>0203 Depot Road, Zambia</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📱</span>
                <span>0203 Depot Road</span>
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <span>hello@orangecore.co.zm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Orange Core Web Dev Solutions. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Powered by <span className="text-orange">Orange Core</span>
          </p>
        </div>
      </div>
    </footer>
  )
}