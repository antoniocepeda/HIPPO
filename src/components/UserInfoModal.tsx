import React from 'react';
import { X } from 'lucide-react';

interface UserInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (userInfo: {
    name: string;
    email: string;
    phone: string;
    acceptedTerms: boolean;
  }) => void;
}

export function UserInfoModal({ isOpen, onClose, onSubmit }: UserInfoModalProps) {
  const [userInfo, setUserInfo] = React.useState({
    name: '',
    email: '',
    phone: '',
    acceptedTerms: false,
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(userInfo);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-primary-400 hover:text-primary-600"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-xl font-semibold text-primary-900 mb-4">
          Almost there!
        </h2>
        <p className="text-primary-600 mb-6">
          Please provide your contact information so we can send you the answer.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-primary-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full px-3 py-2 border border-primary-200 rounded-md focus:ring-2 focus:ring-primary-400 focus:border-transparent"
              value={userInfo.name}
              onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-primary-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-3 py-2 border border-primary-200 rounded-md focus:ring-2 focus:ring-primary-400 focus:border-transparent"
              value={userInfo.email}
              onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-primary-700 mb-1">
              Phone Number (optional)
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full px-3 py-2 border border-primary-200 rounded-md focus:ring-2 focus:ring-primary-400 focus:border-transparent"
              value={userInfo.phone}
              onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
            />
          </div>

          <div className="pt-4 border-t border-primary-100">
            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                required
                className="mt-1"
                checked={userInfo.acceptedTerms}
                onChange={(e) => setUserInfo({ ...userInfo, acceptedTerms: e.target.checked })}
              />
              <span className="text-sm text-primary-600">
                I acknowledge that my question and personal information will be processed in accordance
                with the <a href="#" className="text-primary-700 underline">Privacy Policy</a>. The response
                provided is for informational purposes only and does not constitute medical advice. Always
                consult with your healthcare provider for medical decisions.
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-primary-600 text-white py-2 rounded-md hover:bg-primary-700 transition-colors"
          >
            Submit Question
          </button>
        </form>
      </div>
    </div>
  );
}