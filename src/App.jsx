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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-700 p-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-full" />
            <span className="text-white font-semibold">Semesta Medika Support</span>
          </div>
          <div className="flex space-x-4">
            <button className="text-white">Login</button>
            <button className="bg-white px-4 py-2 rounded-md text-blue-700">Sign Up</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-blue-700 text-white text-center py-12 px-4">
        <h1 className="text-4xl font-bold mb-4">Medical Equipment Support</h1>
        <p className="mb-8">Comprehensive support for healthcare professionals</p>
        
        {/* Search Bar - Updated with background-white */}
        <div className="max-w-2xl mx-auto relative">
          <input
            type="text"
            placeholder="Search for support, products, or solutions"
            className="w-full p-3 rounded-lg text-gray-800 pr-10 bg-white"
          />
          <Search className="absolute right-3 top-3 text-gray-500" />
        </div>

        {/* Quick Links */}
        <div className="flex justify-center space-x-6 mt-6">
          {['Maintenance', 'Repair', 'Product Manuals'].map((link) => (
            <button key={link} className="text-white hover:underline">
              {link}
            </button>
          ))}
        </div>
      </div>

      {/* Rest of the component remains the same */}
      {/* Support Services */}
      <section className="py-16 px-4">
        <h2 className="text-2xl font-bold text-center mb-12">Our Support Services</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map(({ Icon, title, description, button }) => (
            <div key={title} className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <Icon size={48} className="text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{title}</h3>
              <p className="text-gray-600 mb-6">{description}</p>
              <button className="bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-800">
                {button}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          {/* FAQ Tabs */}
          <div className="flex justify-center space-x-4 mb-8">
            {['General Questions', 'Equipment Maintenance', 'Technical Support'].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 rounded-md ${
                  activeTab === tab ? 'bg-blue-100 text-blue-700' : 'text-gray-600'
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
                className="border rounded-lg bg-white overflow-hidden"
              >
                <button
                  className="w-full text-left p-4 flex justify-between items-center"
                  onClick={() => setExpandedQuestion(
                    expandedQuestion === item.question ? '' : item.question
                  )}
                >
                  <span className="font-medium">{item.question}</span>
                  {expandedQuestion === item.question ? 
                    <ChevronUp className="text-gray-500" size={20} /> : 
                    <ChevronDown className="text-gray-500" size={20} />
                  }
                </button>
                {expandedQuestion === item.question && (
                  <div className="p-4 pt-0 text-gray-600">
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