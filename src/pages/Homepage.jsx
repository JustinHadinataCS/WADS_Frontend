import FAQSection from "../components/homepage/FAQSection";
import Header from "../components/homepage/Header";
import Hero from "../components/homepage/Hero";
import ServicesSection from "../components/homepage/ServicesSection";

function Homepage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <ServicesSection />
      <FAQSection />
    </div>
  );
}

export default Homepage;
