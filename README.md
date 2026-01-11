# CareSuite Landing Page

A modern landing page for CareSuite, a comprehensive scheduling platform for care agencies. Built with Next.js, TypeScript, Tailwind CSS, and Shadcn UI.

## Features

- **Advanced Scheduling**: AI-powered scheduling suggestions based on staff availability and hours worked
- **Digital Document Management**: Secure storage, retrieval, and form generation with auditing
- **HR & Payroll Management**: Employee management, payroll processing, leave tracking
- **Financial Planning**: Budget planning, expense tracking, vendor management

## Tech Stack

- Next.js 16
- TypeScript
- Tailwind CSS
- Shadcn UI
- ESLint

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build

```bash
npm run build
```

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── Footer.tsx
│   └── ui/
│       ├── button.tsx
│       ├── card.tsx
│       └── badge.tsx
└── lib/
    └── utils.ts
```

## Deployment

### Docker Deployment

1. Build the Docker image:
```bash
docker build -t caresuit-landing .
```

2. Run the container:
```bash
docker run -p 5000:5000 caresuit-landing
```

3. Or use Docker Compose:
```bash
docker-compose up -d
```

The application will be available at [http://localhost:5000](http://localhost:5000).

### Vercel Deployment

Deploy on Vercel or any platform supporting Next.js.
