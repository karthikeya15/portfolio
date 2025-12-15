# Portfolio Website

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS.

## Features

- 🎨 Modern and beautiful UI design
- 📱 Fully responsive (mobile, tablet, desktop)
- 🌙 Dark mode support
- ⚡ Fast and optimized with Next.js
- 📄 Resume display and download
- 🔗 LinkedIn and GitHub integration
- 🎯 Skills showcase section
- 📧 Contact section

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Icons** - Icon library

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Update Your Information

1. **LinkedIn & GitHub Links**: Edit the URLs in:
   - `components/Contact.tsx`
   - `components/Footer.tsx`

2. **Resume**: Replace the download function in `components/Resume.tsx` with a link to your actual PDF resume

3. **Email**: Update the email address in `components/Contact.tsx`

4. **About Section**: Customize the content in `components/About.tsx`

5. **Hero Section**: Update the name and description in `components/Hero.tsx`

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
.
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── Navigation.tsx  # Navigation bar
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills showcase
│   ├── Resume.tsx      # Resume section
│   ├── Contact.tsx     # Contact section
│   └── Footer.tsx      # Footer
└── public/             # Static assets
```

## License

MIT License - feel free to use this portfolio for your own projects!
