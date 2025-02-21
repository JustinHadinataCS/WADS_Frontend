function FAQTabs({ activeTab, setActiveTab }) {
  const tabs = [
    "General Questions",
    "Equipment Maintenance",
    "Technical Support",
  ];

  return (
    <div className="flex justify-center space-x-4 mb-12">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`px-6 py-3 rounded-lg transition-colors ${
            activeTab === tab
              ? "bg-[#0A3E7A] text-white"
              : "bg-white text-[#0A3E7A] hover:bg-[#4A81C0] hover:text-white"
          }`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
