/* eslint-disable react/prop-types */
import { ChevronDown } from "lucide-react";

function FAQItem({ question, answer, isOpen, toggle }) {
  return (
    <div className="border rounded-md mb-4 overflow-hidden">
      <button
        className="w-full text-left p-4 flex justify-between items-center bg-white"
        onClick={toggle}
      >
        <span className="font-medium">{question}</span>
        <ChevronDown
          size={20}
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="p-4 bg-blue-50 text-sm text-gray-700">{answer}</div>
      )}
    </div>
  );
}

export default FAQItem;
