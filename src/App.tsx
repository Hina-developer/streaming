import { AppProvider } from '@/context';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Pricing from '@/components/Pricing';
import Devices from '@/components/Devices';
import Showcase from '@/components/Showcase';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import CustomCursor from '@/components/CustomCursor';
export default function App() {
  return (
    <AppProvider>
        <CustomCursor />

      <div className="min-h-screen" style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
        <Navbar />
        <main>
          <Hero />
          <Pricing />
          <Devices />
          <Showcase />
          <Testimonials />
          <FAQ />
        </main>
        <Footer />
        <WhatsAppWidget />
      </div>
    </AppProvider>
  );
}
