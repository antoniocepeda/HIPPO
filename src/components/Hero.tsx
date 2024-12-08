import React from 'react';
import { Microscope } from 'lucide-react';

export function Hero() {
  return (
    <div className="text-center space-y-4">
      <div className="flex items-center justify-center gap-3 text-primary-700">
        <Microscope className="w-8 h-8" />
        <span className="text-xl font-semibold">DHH Lab</span>
      </div>
      <h1 className="text-4xl font-bold text-primary-900 md:text-5xl">
        Get Expert Answers About Your Lab Results
      </h1>
      <p className="text-lg text-primary-600 max-w-2xl mx-auto">
        Connect with certified lab experts for clear, reliable answers to your medical laboratory questions
      </p>
    </div>
  );
}