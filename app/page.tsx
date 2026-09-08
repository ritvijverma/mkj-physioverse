import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import Programs from "@/components/Programs";
import Roadmap from "@/components/Roadmap";
import AboutMentor from "@/components/AboutMentor";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <AboutMentor />

                <TrustSection />
                <Programs/>
        <Roadmap />
        <Testimonials/>
        <FAQ/>
<Contact/>

        {/* <CTA/> */}
        <Footer/>
        <WhatsAppButton/>


      </main>
    </>
  );
}