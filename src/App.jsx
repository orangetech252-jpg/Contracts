import Hero from './components/Hero'
import Services from './components/Services'
import Maintenance from './components/Maintenance'
import ContractForm from './components/ContractForm'
import InvoiceForm from './components/InvoiceForm'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Services />
      <Maintenance />
      <ContractForm />
      <InvoiceForm />
      <Footer />
    </div>
  )
}