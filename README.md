# Care.xyz 🏥

### Baby Sitting & Elderly Care Service Platform

A trusted web application that helps families find and book professional caregivers for children, elderly, and special care needs — right at your doorstep.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Native-green?style=for-the-badge&logo=mongodb)
![NextAuth](https://img.shields.io/badge/NextAuth-v5-blue?style=for-the-badge&logo=auth0)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38bdf8?style=for-the-badge&logo=tailwindcss)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-black?style=for-the-badge&logo=vercel)

---

## 🔗 Links

| | |
|---|---|
| 🌐 **Live Site** | [care-xyz.vercel.app](https://care-xyz-pearl.vercel.app) |
| 📁 **Repository** | [github.com/nimostic/care.xyz](https://github.com/nimostic/care.xyz) |

---

## ✨ Features

- 🔐 **User Authentication** — Email/Password & Google Social Login
- 📋 **Dynamic Booking** — Select duration, division, district, city & address
- 💰 **Auto Cost Calculation** — Duration × service charge
- 📦 **Booking Status** — Pending / Confirmed / Completed / Cancelled
- 📬 **Email Invoice** — Booking confirmation sent to user email
- 🔒 **Private Routes** — Middleware-based route protection
- 📱 **Fully Responsive** — Mobile, tablet & desktop supported
- 🎨 **Skeleton Loaders** — Smooth loading experience

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| **Framework** | Next.js 15 (App Router) |
| **Database** | MongoDB (Native Driver) |
| **Authentication** | NextAuth.js (Credentials + Google OAuth) |
| **Styling** | Tailwind CSS |
| **Animation** | Framer Motion + Lottie |
| **Forms** | React Hook Form + Zod |
| **Toast** | Sonner |
| **Icons** | Lucide React + React Icons |
| **Deployment** | Vercel |

---

## 📁 Project Structure
```
src/
├── app/
│   ├── (root)/
│   │   ├── page.jsx               # Homepage
│   │   ├── services/
│   │   │   ├── page.jsx           # All services
│   │   │   └── [id]/
│   │   │       ├── page.jsx       # Service details
│   │   │       └── loading.jsx    # Skeleton loader
│   │   ├── booking/
│   │   │   └── [id]/
│   │   │       └── page.jsx       # Booking form (private)
│   │   └── my-booking/
│   │       └── page.jsx           # My bookings (private)
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.jsx
│   │   └── register/
│   │       └── page.jsx
│   ├── api/auth/[...nextauth]/
│   │   └── route.js
│   └── layout.jsx
├── actions/
│   └── server/
│       ├── service.js             # getServices, getSingleService
│       └── auth.js                # postUser, logInUser
├── components/
│   ├── Buttons/
│   │   ├── BookingButton.jsx
│   │   └── SocialLogin.jsx
│   ├── motion/
│   │   └── MotionDiv.jsx
│   └── skeleton/
│       ├── CaregiverCardSkeleton.jsx
│       └── ServiceCardSkeleton.jsx
├── lib/
│   ├── dbConnect.js
│   └── authOptions.js
└── proxy.js                  # Private route protection
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- MongoDB Atlas account
- Google OAuth credentials

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/nimostic/care.xyz.git
cd care.xyz
```

**2. Install dependencies**
```bash
npm install
```

**3. Set up environment variables**

Create a `.env.local` file in the root:
```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/
DB_NAME=care_xyz

NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
NEXT_PUBLIC_SITE_URL=http://localhost:3000

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

**4. Run the development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📄 Pages & Routes

| Route | Description | Access |
|---|---|---|
| `/` | Homepage with banner, services & testimonials | Public |
| `/services` | All available services | Public |
| `/services/:id` | Service detail page | Public |
| `/booking/:id` | Booking form with cost calculator | 🔒 Private |
| `/my-booking` | User's booking history | 🔒 Private |
| `/login` | Login with email or Google | Public |
| `/register` | Create new account | Public |

---

## 🔒 Environment Variables

| Variable | Description |
|---|---|
| `MONGODB_URI` | MongoDB connection string |
| `DB_NAME` | Database name |
| `NEXTAUTH_SECRET` | NextAuth secret key |
| `NEXTAUTH_URL` | App base URL |
| `GOOGLE_CLIENT_ID` | Google OAuth client ID |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret |
| `NEXT_PUBLIC_SITE_URL` | Public site URL for metadata |

---

## 👨‍💻 Author

**Abu Nayeem Riyad**

[![GitHub](https://img.shields.io/badge/GitHub-nimostic-black?style=flat-square&logo=github)](https://github.com/nimostic)

---

## 📝 License

This project is for educational purposes.
