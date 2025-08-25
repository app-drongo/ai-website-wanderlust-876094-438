import Pageheader1 from '@/components/Pageheader1';
import Services from '@/components/Services';
import Pricing from '@/components/Pricing';
import Cta2 from '@/components/Cta2';

export default function SafariToursPage() {
  return (
    <main className="min-h-screen">
      <section id="section-0" className="scroll-mt-16">
        <Pageheader1 />
      </section>
      <section id="section-1" className="scroll-mt-16">
        <Services />
      </section>
      <section id="section-2" className="scroll-mt-16">
        <Pricing />
      </section>
      <section id="section-3" className="scroll-mt-16">
        <Cta2 />
      </section>
    </main>
  );
}