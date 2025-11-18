# Weddings by Yua - Interactive Wedding Photography Website

A beautiful, highly interactive Next.js website for wedding photography and videography services. Features elegant animations, creative design components, portfolio gallery, testimonials, and lead generation forms.

## Features

- **Interactive Hero Section** - Full-screen parallax background with animated text reveals and floating particles
- **Portfolio Gallery** - Masonry grid layout with filters, hover effects, and lightbox modal
- **3D Testimonials Carousel** - Auto-rotating carousel with 3D effects and animated rating stars
- **About Section** - Split-screen layout with animated timeline and statistics counter
- **Services Packages** - Interactive flip cards showcasing different packages
- **Contact Form** - Multi-step form with validation and smooth transitions
- **Custom Cursor** - Interactive cursor that responds to hover states (desktop only)
- **Smooth Animations** - Framer Motion animations throughout the site
- **Responsive Design** - Fully responsive across all device sizes

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** - Custom colors, fonts, and animations
- **Framer Motion** - Advanced animations and interactions
- **React Hook Form** - Form handling
- **Zod** - Form validation
- **Swiper.js** - Carousel components
- **Lucide React** - Icons

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Homepage with all sections
│   └── globals.css         # Global styles and animations
├── components/
│   ├── Hero/               # Hero section components
│   ├── Navigation/         # Header, mobile menu, scroll progress
│   ├── Portfolio/          # Gallery grid, items, filters, lightbox
│   ├── Testimonials/       # Testimonial carousel and cards
│   ├── About/              # About section, timeline, stats
│   ├── Services/           # Package cards and process steps
│   ├── Contact/            # Contact form and form fields
│   └── Shared/             # Shared components (footer, buttons, cursor)
├── lib/
│   ├── animations.ts       # Reusable animation variants
│   └── utils.ts            # Utility functions
└── public/                 # Static assets
```

## Key Features Explained

### Custom Cursor
The custom cursor follows mouse movement and responds to interactive elements. Only active on desktop devices (non-touch).

### Portfolio Gallery
- Masonry grid layout that adapts to different screen sizes
- Filter system for categories (ceremony, reception, portraits, details)
- Hover effects with image lift and overlay information
- Full-screen lightbox modal with keyboard navigation

### 3D Testimonial Carousel
- Swiper.js with coverflow effect for 3D perspective
- Auto-rotating carousel that pauses on hover
- Animated star ratings that appear sequentially
- Video testimonial support (ready for implementation)

### Interactive Package Cards
- 3D flip cards that rotate on hover
- Shows package details on the front and complete feature list on the back
- Special highlighting for popular packages

### Multi-Step Contact Form
- Progressive form with 3 steps
- Real-time validation using Zod schemas
- Smooth transitions between steps
- Success animation on submission

## Customization

### Colors
Edit `tailwind.config.ts` to customize the color palette:
- `primary` - Rose/pink colors
- `gold` - Gold/amber colors  
- `cream` - Cream/beige colors
- `navy` - Navy/blue colors

### Fonts
Fonts are configured in `app/layout.tsx`:
- **Serif**: Playfair Display, Cormorant Garamond (headings)
- **Sans**: Inter, Poppins (body text)

### Images
Replace placeholder images in components with your own:
- Hero background: `components/Hero/HeroSection.tsx`
- Portfolio images: `components/Portfolio/GalleryGrid.tsx`
- Testimonials: `components/Testimonials/TestimonialCarousel.tsx`

## Performance Optimizations

- **Code Splitting** - Components are lazy-loaded using `next/dynamic`
- **Image Optimization** - Using Next.js Image component with optimized sizes
- **Animation Performance** - GPU-accelerated transforms for smooth 60fps animations
- **Lazy Loading** - Images and heavy components load on demand

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive design works on all screen sizes
- Custom cursor disabled on touch devices

## License

This project is created for Weddings by Yua.

## Contact

For questions or support, please contact the development team.

