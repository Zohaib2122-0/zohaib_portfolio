import React, { useState } from 'react';

export const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'How secure is my insurance information?',
      answer:
        'We prioritize the security of your insurance information. We use advanced encryption and strict data protection measures to ensure your data is safe and confidential.',
    },
    {
      question: 'How can I customize my insurance coverage?',
      answer:
        'Our insurance plans are customizable. You can tailor your coverage to meet your specific needs and budget.',
    },
    {
      question: 'Is there a waiting period for insurance claims?',
      answer:
        'There may be a waiting period for certain insurance claims, depending on the policy terms and conditions. Please refer to your policy documents for details.',
    },
    {
      question: 'Is there a waiting period for insurance claims?',
      answer:
        'There may be a waiting period for certain insurance claims, depending on the policy terms and conditions. Please refer to your policy documents for details.',
    },
  ];

  return (
    <div className="pb-4 pt-24 px-12 w-full mx-auto flex flex-col md:flex-row gap-12 bg-darkbg">
      <div className="flex flex-col text-left basis-1/2">
        <p className="sm:text-4xl text-2xl font-semibold text-base-content text-gray-300">Our methodology for</p>
        <p className="inline-block font-bold  text-7xl  text-lab">sucess</p>
      </div>

      <ul className="basis-1/2">
        {faqs.map((faq, index) => {
          const isOpen = activeIndex === index;
          return (
            <li key={index}>
              <button
                className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
                aria-expanded={isOpen}
                onClick={() => toggleFAQ(index)}
              >
                <span className="flex-1 text-base-content text-gray-300">{faq.question}</span>
                <svg
                  className={`flex-shrink-0 w-4 h-4 ml-auto fill-current transform transition duration-200 ease-out ${
                    isOpen ? 'rotate-45' : ''
                  }`}
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="7" width="16" height="2" rx="1"></rect>
                  <rect y="7" width="16" height="2" rx="1" className="rotate-90 origin-center"></rect>
                </svg>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="pb-5 leading-relaxed space-y-2 text-gray-400" >{faq.answer}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
