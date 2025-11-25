import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export default function FAQItem({ number, question, answer, defaultOpen = false, variant = 'white' }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const bgColor = variant === 'green'
    ? 'bg-green-700 hover:bg-green-800 text-white'
    : 'bg-white hover:bg-gray-50 text-gray-900 border border-gray-200';

  const contentBg = variant === 'green' ? 'bg-green-600/20' : 'bg-gray-50';

  return (
    <div className="mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full ${bgColor} px-6 py-4 rounded-lg transition-all duration-300 flex items-center justify-between`}
      >
        <span className="font-medium text-left">
          {number}. {question}
        </span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 flex-shrink-0" />
        )}
      </button>

      {isOpen && (
        <div className={`${contentBg} px-6 py-4 rounded-b-lg mt-1 animate-fadeIn`}>
          <p className="text-gray-700 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

