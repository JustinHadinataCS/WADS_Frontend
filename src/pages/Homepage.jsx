import Header from "../components/homepage/Header";

const Homepage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <ServicesSection />
      <FAQSection />
      <SearchHelp />
    </div>
  );
};

export default Homepage;
