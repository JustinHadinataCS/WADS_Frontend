import FAQSection from "../components/homepage/FAQSection";
import Header from "../components/homepage/Header";
import Hero from "../components/homepage/Hero";
import SearchHelp from "../components/homepage/SearchHelp";
import ServicesSection from "../components/homepage/ServicesSection";

function Homepage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <ServicesSection />
      <FAQSection />
      <SearchHelp />
    </div>
  );
}

export default Homepage;
