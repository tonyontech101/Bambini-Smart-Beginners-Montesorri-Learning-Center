"use client"; // Required for interactivity [cite: 41, 42]

import React, { useState } from 'react';

const questions = [
  { id: 1, text: "Does your child prefer choosing their own activities?" },
  { id: 2, text: "Does your child enjoy exploring different textures and materials?" },
  { id: 3, text: "Is your child developing a sense of independence in daily tasks?" },
  { id: 4, text: "Does your child concentrate deeply when they find something interesting?" },
  { id: 5, text: "Are you looking for an environment that respects your child's natural pace?" },
];

export default function MontessoriQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0); 
  const [showResult, setShowResult] = useState(false);
  const [email, setEmail] = useState("");

  const handleAnswer = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    return (
      <div className="p-8 bg-purple-50 rounded-lg text-center border-2 border-purple-200">
        <h3 className="text-2xl font-bold text-purple-900 mb-4">It looks like a great fit!</h3>
        <p className="mb-6 text-gray-700">
          Your child&apos;s natural curiosity aligns perfectly with the Montessori method. [cite: 13, 36]
        </p>
        <div className="max-w-sm mx-auto">
          <p className="text-sm font-semibold mb-2">Get your free &quot;Parent&apos;s Guide to Montessori at Home&quot; PDF:</p>
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="w-full p-2 border rounded mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          /> [cite: 12, 35]
          <button className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition">
            Send My Guide & Results
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="p-10 bg-white shadow-xl rounded-2xl border border-gray-100 max-w-2xl mx-auto my-10">
      <div className="mb-4 text-sm font-bold text-purple-600 uppercase tracking-widest">
        Question {currentQuestion + 1} of {questions.length}
      </div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        {questions[currentQuestion].text} [cite: 11]
      </h2>
      <div className="flex gap-4">
        <button 
          onClick={handleAnswer}
          className="flex-1 py-4 px-6 rounded-xl border-2 border-purple-600 text-purple-600 font-bold hover:bg-purple-600 hover:text-white transition"
        >
          Yes, definitely
        </button>
        <button 
          onClick={handleAnswer}
          className="flex-1 py-4 px-6 rounded-xl border-2 border-gray-300 text-gray-500 font-bold hover:border-purple-600 hover:text-purple-600 transition"
        >
          Sometimes
        </button>
      </div>
    </section>
  );
}