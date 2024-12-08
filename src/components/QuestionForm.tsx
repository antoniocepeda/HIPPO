import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { UserInfoModal } from './UserInfoModal';
import { SuccessModal } from './SuccessModal';

export function QuestionForm() {
  const [question, setQuestion] = useState('');
  const [showUserInfoModal, setShowUserInfoModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowUserInfoModal(true);
  };

  const handleUserInfoSubmit = (userInfo: {
    name: string;
    email: string;
    phone: string;
    acceptedTerms: boolean;
  }) => {
    // Handle the submission with both question and user info
    console.log('Submitting:', { question, userInfo });
    setShowUserInfoModal(false);
    setShowSuccessModal(true);
    setQuestion('');
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
        <div className="relative transition-all duration-300 transform hover:scale-[1.01]">
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Type your lab-related question here..."
            className="w-full h-32 p-4 text-gray-700 bg-white border-2 border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent resize-none transition-all duration-200"
            required
          />
          <button
            type="submit"
            className="absolute bottom-4 right-4 bg-primary-700 text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-primary-800 transition-colors duration-200"
          >
            <span>Ask Question</span>
            <Send className="w-4 h-4" />
          </button>
        </div>
      </form>

      <UserInfoModal
        isOpen={showUserInfoModal}
        onClose={() => setShowUserInfoModal(false)}
        onSubmit={handleUserInfoSubmit}
      />

      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
      />
    </>
  );
}