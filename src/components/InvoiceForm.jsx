import { useState } from 'react'
import { jsPDF } from 'jspdf'

const SERVICES = [
  { value: 'landing', label: 'Landing Page — K2,000' },
  { value: 'business', label: 'Business Website — K4,000' },
  { value: 'ecommerce', label: 'E-Commerce — K5,000' },
  { value: 'domain', label: 'Domain Name — K700' },
]

function generateInvoiceNumber() {
  return 'INV-' + Date.now().toString(36).toUpperCase() + '-' + String(Math.floor(Math.random() * 900) + 100)
}

export default function InvoiceForm() {
  const [form, setForm] = useState({ clientName: '', clientEmail: '', service: '' })
  const [downloading, setDownloading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const update = (field, value) => setForm(prev => ({ ...prev, [field]: value }))

  const handleDownload = async () => {
    if (!form.clientName.trim()) return setError('Please enter the client name.')
    if (!form.service) return setError('Please select a service.')

    setError('')
    setDownloading(true)

    try {
      const doc = new jsPDF()
      const pageW = doc.internal.pageSize.getWidth()
      const invoiceNo = generateInvoiceNumber()
      const date = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
      const service = SERVICES.find(s => s.value === form.service)
      const amount = parseInt(service?.label.replace(/[^0-9]/g, '') || '0')

      // Header
      doc.setFillColor(255, 107, 0)
      doc.rect(0, 0, pageW, 45, 'F')

      doc.setTextColor(255, 255, 255)
      doc.setFontSize(20)
      doc.setFont('helvetica', 'bold')
      doc.text('INVOICE', 20, 24)
      doc.setFontSize(11)
      doc.setFont('helvetica', 'normal')
      doc.text('Orange Core Web Dev Solutions', 20, 33)
      doc.setFontSize(9)
      doc.text('0203 Depot Road, Zambia', 20, 39)
      doc.text(`TPIN: 2002975771`, pageW - 20, 33, { align: 'right' })

      // Meta info right side
      doc.setFontSize(10)
      doc.text(`Invoice: ${invoiceNo}`, pageW - 20, 24, { align: 'right' })
      doc.text(`Date: ${date}`, pageW - 20, 31, { align: 'right' })
      doc.text('Tel: 0203 Depot Road', pageW - 20, 39, { align: 'right' })

      let y = 60
      doc.setTextColor(30, 30, 30)

      // Bill To
      doc.setFontSize(10)
      doc.setFont('helvetica', 'bold')
      doc.text('Bill To:', 20, y)
      doc.setFont('helvetica', 'normal')
      y += 7
      doc.setFontSize(10)
      doc.text(`Client: ${form.clientName}`, 20, y)
      y += 5
      if (form.clientEmail) {
        doc.text(`Email: ${form.clientEmail}`, 20, y)
        y += 5
      }

      y += 6

      // Table header
      doc.setFillColor(244, 244, 249)
      doc.rect(20, y, pageW - 40, 10, 'F')
      doc.setFontSize(10)
      doc.setFont('helvetica', 'bold')
      doc.text('Description', 22, y + 7)
      doc.text('Amount', pageW - 22, y + 7, { align: 'right' })

      y += 10

      // Line item
      doc.setFont('helvetica', 'normal')
      doc.text(service?.label.replace('—', '').trim() || form.service, 22, y + 6)
      doc.text('K' + amount.toLocaleString(), pageW - 22, y + 6, { align: 'right' })

      y += 10
      doc.setDrawColor(200, 200, 200)
      doc.line(20, y, pageW - 20, y)
      y += 8

      // Subtotal
      doc.setFontSize(10)
      doc.text('Subtotal:', 22, y + 6)
      doc.text('K' + amount.toLocaleString(), pageW - 22, y + 6, { align: 'right' })
      y += 8

      doc.text('Tax (0%):', 22, y + 6)
      doc.text('K0', pageW - 22, y + 6, { align: 'right' })
      y += 10

      // Total
      doc.setFillColor(255, 107, 0)
      doc.rect(pageW - 80, y, 60, 14, 'F')
      doc.setTextColor(255, 255, 255)
      doc.setFont('helvetica', 'bold')
      doc.text('Total: K' + amount.toLocaleString(), pageW - 22, y + 10, { align: 'right' })

      // Footer note
      doc.setTextColor(100, 100, 100)
      doc.setFont('helvetica', 'normal')
      doc.setFontSize(8)
      y += 28
      doc.text('Payment details: Please make payment to Orange Core Web Dev Solutions, 0203 Depot Road.', 20, y)
      y += 4
      doc.text('This invoice was generated online. For queries contact: 0203 Depot Road, Zambia.', 20, y)
      y += 4
      doc.text(`Document: ${invoiceNo} · ${date}`, 20, y)

      doc.save(`${invoiceNo}.pdf`)
      setSuccess(true)
      setTimeout(() => setSuccess(false), 3000)
    } catch (e) {
      setError('PDF generation failed. Please try again.')
    }
    setDownloading(false)
  }

  return (
    <section id="invoice" className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="section-label">Get Paid Faster</p>
          <h2 className="section-title">Generate an Invoice</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Create a professional PDF invoice in seconds. Filled with Orange Core business details and ready to send to your client.
          </p>
        </div>

        <div className="glass-card p-8 md:p-10">
          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-bold text-dark mb-2">Client Name *</label>
              <input
                type="text"
                value={form.clientName}
                onChange={e => update('clientName', e.target.value)}
                placeholder="e.g. Chibesa Mwale"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition text-dark text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-dark mb-2">Client Email</label>
              <input
                type="email"
                value={form.clientEmail}
                onChange={e => update('clientEmail', e.target.value)}
                placeholder="client@example.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition text-dark text-sm"
              />
            </div>
          </div>

          <div className="mb-8">
            <label className="block text-sm font-bold text-dark mb-2">Service *</label>
            <select
              value={form.service}
              onChange={e => update('service', e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition text-dark text-sm bg-white"
            >
              <option value="">— Choose a service —</option>
              {SERVICES.map(s => (
                <option key={s.value} value={s.value}>{s.label}</option>
              ))}
            </select>
          </div>

          {/* Business info display */}
          <div className="mb-8 p-4 bg-glossy-gray rounded-lg text-sm text-muted flex flex-wrap gap-6">
            <div>
              <span className="font-bold text-dark">Business:</span> Orange Core Web Dev Solutions
            </div>
            <div>
              <span className="font-bold text-dark">Location:</span> 0203 Depot Road
            </div>
            <div>
              <span className="font-bold text-dark">TPIN:</span> 2002975771
            </div>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700 flex items-center gap-2">
              <span>⚠️</span> {error}
            </div>
          )}

          {success && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-sm text-green-700 flex items-center gap-2">
              <span>✅</span> Invoice PDF downloaded! Check your downloads folder.
            </div>
          )}

          <button
            onClick={handleDownload}
            disabled={downloading}
            className="btn-primary text-base w-full justify-center py-4 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {downloading ? (
              <>⏳ Generating PDF…</>
            ) : (
              <>📄 Generate & Download Invoice (PDF)</>
            )}
          </button>
        </div>
      </div>
    </section>
  )
}