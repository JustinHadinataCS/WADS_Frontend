import React from 'react';
import { 
  Search, 
  Stethoscope, 
  WrenchIcon, 
  GraduationCap,
  ChevronUp,
  ChevronDown 
} from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = React.useState('General Questions');
  const [expandedQuestion, setExpandedQuestion] = React.useState('');

  const faqData = {
    'General Questions': [
      {
        question: 'How often should medical equipment be calibrated?',
        answer: 'Calibration frequency varies by device. Most equipment requires calibration every 6-12 months, but check your device manual for specific requirements.'
      },
      {
        question: 'What is the emergency support process?',
        answer: 'For urgent equipment issues, call our 24/7 emergency support line. Have your device ID and facility code ready.'
      }
    ]
  };

  const services = [
    {
      Icon: Stethoscope,
      title: "Medical Equipment Support",
      description: "Comprehensive support for all medical devices and equipment",
      button: "Learn More"
    },
    {
      Icon: WrenchIcon,
      title: "Technical Assistance",
      description: "Expert troubleshooting and technical support for complex medical systems",
      button: "Contact Technicians"
    },
    {
      Icon: GraduationCap,
      title: "Training & Resources",
      description: "Educational materials and training programs for medical equipment",
      button: "Explore Resources"
    }
  ];

  return (
    <div className="min-h-screen bg-[#E3EFF9]">
      {/* Header */}
      <header className="bg-[#0A3E7A] p-4 shadow-lg">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-[#4A81C0] rounded-full flex items-center justify-center">
              <Stethoscope className="text-white" size={24} />
            </div>
            <span className="text-white font-semibold text-lg">Semesta Medika Support</span>
          </div>
          <div className="flex space-x-4">
            <button className="text-white hover:text-[#ffffff8d]">Login</button>
            <button className="bg-[#FFFFFF] px-6 py-2 rounded-md text-[#0A3E7A] hover:text-[#ffffff] hover:bg-[#4A81C0] transition-colors">
              Sign Up
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-[#0A3E7A] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Medical Equipment Support</h1>
          <p className="text-xl mb-12 text-[#E3EFF9]">Comprehensive support for healthcare professionals</p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <input
              type="text"
              placeholder="Search for support, products, or solutions"
              className="w-full p-4 rounded-lg text-gray-800 pr-12 bg-white shadow-lg focus:ring-2 focus:ring-[#FFD166] focus:outline-none"
            />
            <Search className="absolute right-4 top-4 text-[#4A81C0]" />
          </div>

          {/* Quick Links */}
          <div className="flex justify-center space-x-8 mt-8">
            {['Maintenance', 'Repair', 'Product Manuals'].map((link) => (
              <button 
                key={link} 
                className="text-[#E3EFF9] hover:text-[#FFD166] transition-colors text-lg"
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Support Services */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#0A3E7A] mb-16">Our Support Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map(({ Icon, title, description, button }) => (
              <div key={title} className="bg-[#E3EFF9] p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-6">
                  <Icon size={48} className="text-[#4A81C0]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#0A3E7A]">{title}</h3>
                <p className="text-gray-600 mb-8">{description}</p>
                <button className="w-full bg-[#0A3E7A] text-white px-6 py-3 rounded-lg hover:bg-[#4A81C0] transition-colors">
                  {button}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-[#E3EFF9]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#0A3E7A] mb-16">Frequently Asked Questions</h2>
          
          {/* FAQ Tabs */}
          <div className="flex justify-center space-x-4 mb-12">
            {['General Questions', 'Equipment Maintenance', 'Technical Support'].map((tab) => (
              <button
                key={tab}
                className={`px-6 py-3 rounded-lg transition-colors ${
                  activeTab === tab 
                    ? 'bg-[#0A3E7A] text-white' 
                    : 'bg-white text-[#0A3E7A] hover:bg-[#4A81C0] hover:text-white'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqData[activeTab]?.map((item) => (
              <div
                key={item.question}
                className="border border-[#4A81C0] rounded-lg bg-white overflow-hidden shadow-md"
              >
                <button
                  className="w-full text-left p-6 flex justify-between items-center hover:bg-[#E3EFF9]"
                  onClick={() => setExpandedQuestion(
                    expandedQuestion === item.question ? '' : item.question
                  )}
                >
                  <span className="font-medium text-[#0A3E7A]">{item.question}</span>
                  {expandedQuestion === item.question ? 
                    <ChevronUp className="text-[#4A81C0]" size={20} /> : 
                    <ChevronDown className="text-[#4A81C0]" size={20} />
                  }
                </button>
                {expandedQuestion === item.question && (
                  <div className="p-6 pt-0 text-gray-600 bg-white">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;