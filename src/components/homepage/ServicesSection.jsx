import ServiceCard from "./ServiceCard";

function ServicesSection() {
  return (
    <section className="py-10 px-4 bg-gray-50">
      <h2 className="text-center text-2xl font-bold mb-8">
        Our Support Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <ServiceCard
          icon={
            <div className="w-12 h-12 text-blue-600">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M8 2a6 6 0 016 6v1h2a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2v-8a2 2 0 012-2h2V8a2 2 0 10-4 0v2H4V8a6 6 0 014-6z" />
              </svg>
            </div>
          }
          title="Medical Equipment Support"
          description="Comprehensive support for all medical devices and equipment"
          buttonText="Learn More"
          buttonLink="#"
        />
        <ServiceCard
          icon={
            <div className="w-12 h-12 text-blue-600">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
              </svg>
            </div>
          }
          title="Technical Assistance"
          description="Expert troubleshooting and technical support for complex medical systems"
          buttonText="Contact Technicians"
          buttonLink="#"
        />
        <ServiceCard
          icon={
            <div className="w-12 h-12 text-blue-600">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c0 3 2 4 6 4s6-1 6-4v-5" />
              </svg>
            </div>
          }
          title="Training & Resources"
          description="Educational materials and training programs for medical equipment"
          buttonText="Explore Resources"
          buttonLink="#"
        />
      </div>
    </section>
  );
}

export default ServicesSection;
