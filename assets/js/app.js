// ── CONTRACT DATA ──────────────────────────────────────────
const FREELANCER = {
  name:    "Lucky Hangoma",
  business:"Hangoma Lucky Web Dev",
  phone:   "0976532605",
  email:   "hangomalucky1@gmail.com",
  network: "Airtel Money"
};

const PACKAGES = [
  {
    id: "starter",
    name: "Starter",
    price: 1500,
    deposit: 750,
    pages: "1 page",
    desc: "1 page, mobile responsive, contact form, WhatsApp button",
    deliverables: [
      "1 fully responsive page",
      "Contact form with WhatsApp integration",
      "Mobile optimised design",
      "Basic SEO setup"
    ]
  },
  {
    id: "business",
    name: "Business",
    price: 2300,
    deposit: 1150,
    pages: "5 pages",
    desc: "Home, About, Services, Gallery, Contact + domain first year",
    deliverables: [
      "5 fully responsive pages",
      "Home, About Us, Services, Gallery, Contact",
      "Domain name for first year included",
      "Google Maps integration",
      "WhatsApp chat button",
      "Basic SEO setup"
    ]
  },
  {
    id: "store",
    name: "Store",
    price: 3500,
    deposit: 1750,
    pages: "E-Commerce",
    desc: "Full online store with payment integration, up to 20 products",
    deliverables: [
      "Full e-commerce website",
      "Up to 20 product listings",
      "Payment gateway integration",
      "Order management",
      "Mobile optimised design",
      "Domain name for first year included"
    ]
  },
  {
    id: "premium",
    name: "Premium",
    price: 5000,
    deposit: 2500,
    pages: "Custom",
    desc: "Custom features, booking systems, dashboards, unlimited pages",
    deliverables: [
      "Custom designed website",
      "Unlimited pages",
      "Booking or reservation system",
      "Custom dashboard or admin panel",
      "Advanced integrations",
      "Domain name for first year included",
      "Priority support"
    ]
  }
];

const MAINTENANCE = [
  {
    id: "basic",
    name: "Basic Care",
    price: "K200/month",
    desc: "For Starter (1 page) sites — minor text and image updates"
  },
  {
    id: "growth",
    name: "Growth Care",
    price: "K450/month",
    desc: "For Business and Store sites — unlimited small changes and additions"
  },
  {
    id: "premium",
    name: "Premium Care",
    price: "K800+/month",
    desc: "For Premium sites — priority support, advanced changes, new features"
  },
  {
    id: "ondemand",
    name: "On-Demand",
    price: "K100/update",
    desc: "No monthly fee — pay only when you need a change made"
  },
  {
    id: "none",
    name: "No Maintenance",
    price: "Free",
    desc: "No ongoing support. Future changes quoted separately"
  }
];

// ── STORAGE ────────────────────────────────────────────────
function saveContract(data) {
  localStorage.setItem('hld_contract', JSON.stringify(data));
}

function loadContract() {
  const d = localStorage.getItem('hld_contract');
  return d ? JSON.parse(d) : null;
}

// ── DATE HELPERS ───────────────────────────────────────────
function today() {
  return new Date().toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric'
  });
}

function addDays(days) {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric'
  });
}

function contractRef() {
  return 'HLD-' + Date.now().toString().slice(-6);
}

// ── FORMAT CURRENCY ────────────────────────────────────────
function fmt(n) { return 'K' + Number(n).toLocaleString(); }

// ── GENERATE CONTRACT HTML ─────────────────────────────────
function generateContractHTML(data) {
  const pkg = PACKAGES.find(p => p.id === data.package);
  const mnt = MAINTENANCE.find(m => m.id === data.maintenance);
  const balance = pkg.price - pkg.deposit;
  const deliveryDate = addDays(5);

  const deliverablesList = pkg.deliverables.map(d => `<li>${d}</li>`).join('');

  return `
    <div style="text-align:center; margin-bottom:1.5rem;">
      <img src="assets/images/logo.png" alt="Logo" style="height:48px; margin-bottom:0.75rem;">
      <h1 style="font-size:1.5rem; margin-bottom:0.2rem;">Web Development Services Agreement</h1>
      <p class="meta">Contract Ref: ${data.ref} &nbsp;|&nbsp; Date: ${data.date}</p>
    </div>

    <div class="highlight">
      This agreement is entered into between <strong>${FREELANCER.business}</strong> ("Developer") 
      and <strong>${data.clientName}</strong> ("Client") on ${data.date}.
    </div>

    <h2>1. Parties</h2>
    <table>
      <tr><th>Developer</th><th>Client</th></tr>
      <tr>
        <td>
          <strong>${FREELANCER.name}</strong><br>
          ${FREELANCER.business}<br>
          📞 ${FREELANCER.phone}<br>
          ✉ ${FREELANCER.email}
        </td>
        <td>
          <strong>${data.clientName}</strong><br>
          ${data.clientBusiness}<br>
          📞 ${data.clientPhone}<br>
          ${data.clientEmail ? '✉ ' + data.clientEmail : ''}
        </td>
      </tr>
    </table>

    <h2>2. Project Scope</h2>
    <p><strong>Package:</strong> ${pkg.name} — ${fmt(pkg.price)}</p>
    <p><strong>Description:</strong> ${data.projectDesc}</p>
    <p><strong>Deliverables included:</strong></p>
    <ul style="margin: 0.5rem 0 0.5rem 1.5rem;">${deliverablesList}</ul>
    <p style="margin-top:0.5rem; color:#64748b; font-size:0.82rem;">
      Any features or pages not listed above are not included and will be quoted separately.
    </p>

    <h2>3. Payment Terms</h2>
    <table>
      <tr><th>Item</th><th>Amount</th><th>When Due</th></tr>
      <tr><td>50% Deposit</td><td><strong>${fmt(pkg.deposit)}</strong></td><td>Before work begins</td></tr>
      <tr><td>Remaining Balance</td><td><strong>${fmt(balance)}</strong></td><td>Before final handover</td></tr>
      <tr><td>Total</td><td><strong>${fmt(pkg.price)}</strong></td><td>—</td></tr>
    </table>
    <p><strong>Payment Method:</strong> ${FREELANCER.network} — ${FREELANCER.phone} (${FREELANCER.name})</p>
    <p style="color:#ef4444; font-size:0.82rem; margin-top:0.5rem;">
      ⚠ Work will not begin until the 50% deposit is confirmed. The remaining balance must be paid in full before the website is handed over or made live.
    </p>

    <h2>4. Delivery Timeline</h2>
    <p>The project will be delivered within <strong>5 business days</strong> of deposit confirmation, estimated by <strong>${deliveryDate}</strong>.</p>
    <p>The Client will receive daily progress updates. Feedback must be provided within <strong>24 hours</strong> of each update to keep the project on schedule. Delays in client feedback may affect the delivery date.</p>

    <h2>5. Revisions</h2>
    <p>Two (2) rounds of revisions are included at no extra charge during the build period. Each additional revision after delivery will be charged at <strong>K100 per change</strong>.</p>

    <h2>6. Maintenance</h2>
    <p><strong>Selected Plan:</strong> ${mnt.name} — ${mnt.price}</p>
    <p>${mnt.desc}</p>
    ${data.maintenance === 'monthly' ? '<p>Monthly maintenance begins after final handover and is billed at the start of each month.</p>' : ''}
    ${data.maintenance === 'none' ? '<p style="color:#64748b; font-size:0.82rem;">The Client may upgrade to a maintenance plan at any time after delivery.</p>' : ''}

    <h2>7. Ownership</h2>
    <p>The Client owns all content provided — photos, text, logos, and branding. The Developer retains ownership of the code until final payment is received in full. Upon full payment, complete ownership of the website is transferred to the Client.</p>

    <h2>8. Cancellation Policy</h2>
    <ul style="margin-left:1.5rem; margin-top:0.5rem;">
      <li>If the Client cancels after work has begun — the 50% deposit is <strong>non-refundable</strong>.</li>
      <li>If the Developer cancels — the full deposit will be returned to the Client within 48 hours.</li>
    </ul>

    <h2>9. Domain & Hosting</h2>
    <p>Where included in the selected package, the domain name is covered for the first year. Renewal after 12 months is the Client's responsibility. Hosting is provided free of charge through a third-party service (Vercel) at no cost to the Client.</p>

    <h2>10. Confidentiality</h2>
    <p>The Developer will not share, sell, or disclose any business information, content, or materials provided by the Client to any third party without written consent.</p>

    <h2>11. Dispute Resolution</h2>
    <p>Both parties agree to resolve any disputes through good-faith communication before pursuing any legal action. This agreement is governed under the laws of the Republic of Zambia.</p>

    <h2>12. Signatures</h2>
    <p>By signing below, both parties confirm they have read, understood, and agreed to the terms of this agreement.</p>

    <table style="margin-top:1.5rem;">
      <tr>
        <th style="width:50%;">Developer</th>
        <th style="width:50%;">Client</th>
      </tr>
      <tr>
        <td style="padding: 1rem 0.75rem;">
          <div style="font-family:Georgia,serif; font-style:italic; font-size:1.4rem; color:#f97316; min-height:40px; border-bottom:1px solid #e2e8f0; margin-bottom:0.5rem;">
            ${data.devSignature || ''}
          </div>
          <strong>${FREELANCER.name}</strong><br>
          <span style="font-size:0.78rem; color:#64748b;">${FREELANCER.business}</span><br>
          <span style="font-size:0.78rem; color:#64748b;">Date: ${data.date}</span>
        </td>
        <td style="padding: 1rem 0.75rem;">
          <div style="font-family:Georgia,serif; font-style:italic; font-size:1.4rem; color:#f97316; min-height:40px; border-bottom:1px solid #e2e8f0; margin-bottom:0.5rem;">
            ${data.clientSignature || ''}
          </div>
          <strong>${data.clientName}</strong><br>
          <span style="font-size:0.78rem; color:#64748b;">${data.clientBusiness}</span><br>
          <span style="font-size:0.78rem; color:#64748b;">Date: ${data.date}</span>
        </td>
      </tr>
    </table>

    <p style="text-align:center; font-size:0.75rem; color:#94a3b8; margin-top:2rem; padding-top:1rem; border-top:1px solid #e2e8f0;">
      This contract was generated by Hangoma Lucky Web Dev · ${data.ref} · ${data.date}
    </p>
  `;
}
