export default function FAQ() {
  const faqs = [
    {
      question: "What is your teacher-to-child ratio?",
      answer: "We maintain small class sizes to ensure each child receives personalized attention and guidance tailored to their unique development."
    },
    {
      question: "Do you provide snacks for the children?",
      answer: "Yes, we provide healthy, nutritious snacks. We also use snack time as a practical life lesson in independence and grace."
    },
    {
      question: "How does 'hands-on' learning work at BSBMLC?",
      answer: "Children work with specialized Montessori materials that allow them to explore concepts through touch and movement, fostering a deeper understanding of the world."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-[var(--navy)] mb-2">
          ❓ Frequently Asked Questions
        </h2>
        <p className="text-gray-600">Common questions from our community of parents.</p>
      </div>

      <div className="grid gap-4">
        {faqs.map((faq, index) => (
          <div key={index} className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-blue-700 mb-2">{faq.question}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}