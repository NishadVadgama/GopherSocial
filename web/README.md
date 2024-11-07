This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## URL patterns

### Main Platform URLs:

- acme.com - Main marketing website and platform homepage
- acme.com/login - Secure login portal for business owners and team members
- acme.com/register - Business account registration page
- acme.com/dashboard - Business portfolio overview - manage all your registered businesses in one place, assuming user can have multiple businesses/branches
  - jiffy-lube-kitchener.acme.com
  - jiffy-lube-waterloo.acme.com

### Business-Specific URLs:

- acme.com/sites/[domain] - Individual business storefront/landing page
  - Accessible via: [domain].acme.com
  - Example: A business called "Jiffy Lube Kitchener" might use jiffy-lube-kitchener.acme.com

- acme.com/sites/[domain]/dashboard - Business management hub
  - Accessible via: [domain].acme.com/dashboard
  - Restricted to business owners and authorized team members
  - Contains all dashboard-related functionality and settings

- acme.com/sites/[domain]/my_account - Client self-service portal
  - Accessible via: [domain].acme.com/my_account
  - Secure area for customers to manage their account and services
