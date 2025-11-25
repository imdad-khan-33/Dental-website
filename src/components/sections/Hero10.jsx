import React, { useState } from "react";

const Hero10 = () => {
  const [expandedId, setExpandedId] = useState(1);

  const faqs = [
    {
      id: 1,
      question: "Can I see who reads my email campaigns?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Convallis cras placerat dignissim aliquam massa. Aliquet volutpat rhoncus in convallis consectetur. Cras adipiscing volutpat non hac enim odio enim.",
    },
    {
      id: 2,
      question: "Do you offer non-profit discounts?",
      answer:
        "Yes, we offer special discounts for non-profit organizations. Please contact our team to discuss your specific needs and eligible programs.",
    },
    {
      id: 3,
      question: "Can I see who reads my email campaigns?",
      answer:
        "We track email opens and clicks to help you understand your audience engagement. Our analytics dashboard provides detailed insights.",
    },
    {
      id: 4,
      question: "Can I see who reads my email campaigns?",
      answer:
        "Yes, detailed recipient information is available in your campaign reports for better audience analysis.",
    },
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Heading */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Frequently Ask Question
          </h2>
        </div>

        {/* Description */}
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-[16px] sm:text-[18px] font-normal leading-[155%] tracking-[0.015em] text-center text-[#3C4959] w-full max-w-[455px] mx-auto">
            We use only the best quality materials on the market in order to
            provide the best products to our patients.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-2 mb-8 rounded-lg overflow-hidden">
          {faqs.map((faq) => (
            <div key={faq.id}>
              {/* Question Button */}
              <button
                onClick={() =>
                  setExpandedId(expandedId === faq.id ? null : faq.id)
                }
                className={`w-full flex items-center justify-between p-4 sm:p-6 transition-all ${
                  expandedId === faq.id
                    ? "bg-[#1376F8] text-white"
                    : "bg-white text-gray-900 hover:bg-gray-50"
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="text-lg mt-1">•</span>
                  <h3 className="text-base sm:text-lg font-semibold text-left">
                    {faq.question}
                  </h3>
                </div>
                <span
                  className={`text-xl flex-shrink-0 ml-4 ${
                    expandedId === faq.id ? "text-white" : "text-blue-500"
                  }`}
                >
                  {expandedId === faq.id ? "⊖" : "⊕"}
                </span>
              </button>

              {/* Answer */}
              {expandedId === faq.id && (
                <div className="bg-[#1376F8] text-white p-4 sm:p-6 text-sm sm:text-base leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Dimension Badge */}
      </div>
    </section>
  );
};

export default Hero10;
