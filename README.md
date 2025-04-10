# Cadex Website

## 📌 Overview
Two-page website with:
- **Homepage** (YouTube video embed, services section)
- **Contact Page** (form with backend processing)
- **Sticky Header/Footer**

Built with:
- **Framework**: Next.js 15 (App Router)
- **UI Components**: shadcn/ui + Radix Primitives
- **Styling**: Tailwind CSS + CSS Variables
- **Backend**: Nest.js
- **Form Handling**: React Hook Form + Zod + Custom components

# 🔧 Environment Variables

To run the application, you need to create a file `.env.local` in the root of the project, observing the variables:

```ini
NEXT_PUBLIC_API_URL=your_api_url_here  # Required (without trailing slash)
# Example: NEXT_PUBLIC_API_URL=https://api.cadex.com/v1
```

## 🚀 Setup

### Environment Setup
Create `.env.local` (see [Environment Variables](#-environment-variables))

### Local Development
```bash
git clone https://github.com/3N14C/tz-cadex-client
cd tz-cadex-client
npm install
npm run dev
