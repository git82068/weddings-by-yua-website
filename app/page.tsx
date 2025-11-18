import dynamic from 'next/dynamic';
import Header from '@/components/Navigation/Header';
import CustomCursor from '@/components/Shared/CustomCursor';

// Lazy load heavy components for better performance
const HeroSection = dynamic(() => import('@/components/Hero/HeroSection'), {
  loading: () => <div className="h-screen bg-navy-900" />,
});

const GalleryGrid = dynamic(() => import('@/components/Portfolio/GalleryGrid'), {
  loading: () => <div className="h-screen bg-cream-50" />,
});

const AboutSection = dynamic(() => import('@/components/About/AboutSection'), {
  loading: () => <div className="h-screen bg-white" />,
});

const PackageCards = dynamic(() => import('@/components/Services/PackageCards'), {
  loading: () => <div className="h-screen bg-white" />,
});

const TestimonialCarousel = dynamic(
  () => import('@/components/Testimonials/TestimonialCarousel'),
  {
    loading: () => <div className="h-screen bg-cream-50" />,
  }
);

const ContactForm = dynamic(() => import('@/components/Contact/ContactForm'), {
  loading: () => <div className="h-screen bg-cream-50" />,
});

const Footer = dynamic(() => import('@/components/Shared/Footer'), {
  loading: () => <div className="h-96 bg-navy-900" />,
});

export default function Home() {
  return (
    <main className="relative">
      {/* Custom Cursor - only on desktop */}
      <CustomCursor />
      
      {/* Header */}
      <Header />
      
      {/* Home Section */}
      <section id="home">
        <HeroSection />
      </section>

      {/* Portfolio Section */}
      <GalleryGrid />

      {/* About Section */}
      <AboutSection />

      {/* Services Section */}
      <PackageCards />

      {/* Testimonials Section */}
      <TestimonialCarousel />

      {/* Contact Section */}
      <ContactForm />

      {/* Footer */}
      <Footer />
    </main>
  );
}

