# Hangoma Lucky Web Dev — Contract System

A professional digital contract signing system. Generate, sign, and download PDF contracts for every client.

---

## How It Works

1. **Open `index.html`** — Fill in the client's details and select the package
2. **Open `sign.html`** — Client reads the full contract and types their name to sign
3. **Download PDF** — Both parties get a copy instantly
4. **Done** — Contract is legally signed and saved

---

## File Structure

```
hangoma-contracts/
├── index.html          ← Step 1: Fill in project details (YOU use this)
├── sign.html           ← Step 2: Client reads and signs
├── success.html        ← Step 3: Confirmation + summary
├── assets/
│   ├── css/
│   │   └── style.css   ← All styles
│   ├── js/
│   │   └── app.js      ← Contract logic, packages, pricing
│   └── images/
│       └── logo.png    ← Your logo (already included)
└── README.md
```

---

## To Update Pricing or Packages

Open `assets/js/app.js` and find the `PACKAGES` array at the top. Each package looks like:

```js
{
  id: "business",
  name: "Business",
  price: 2300,
  deposit: 1150,
  pages: "5 pages",
  desc: "Short description",
  deliverables: [
    "Item 1",
    "Item 2",
  ]
}
```

Change the `price` and `deposit` values and save. That's it.

---

## To Update Your Details

Open `assets/js/app.js` and find `FREELANCER` at the top:

```js
const FREELANCER = {
  name:    "Lucky Hangoma",
  business:"Hangoma Lucky Web Dev",
  phone:   "0976532605",
  email:   "hangomalucky1@gmail.com",
  network: "Airtel Money"
};
```

Update any field and save.

---

## Deploy to Vercel

```bash
git init
git add .
git commit -m "Contract system launch"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/hangoma-contracts.git
git push -u origin main
```

Then connect the repo on Vercel — live in 30 seconds.

---

## Packages

| Package | Price | Deposit |
|---|---|---|
| Starter | K1,500 | K750 |
| Business | K2,300 | K1,150 |
| Store | K3,500 | K1,750 |
| Premium | K5,000 | K2,500 |

## Maintenance

| Plan | Price |
|---|---|
| Monthly Care | K250/month |
| On-Demand | K100/update |
| None | Free |
