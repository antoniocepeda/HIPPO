import React from 'react';
import { Shield, Award, BadgeCheck } from 'lucide-react';

export function TrustIndicators() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-primary-100">
        <Shield className="w-6 h-6 text-primary-700" />
        <div>
          <h3 className="font-semibold text-primary-900">HIPAA Compliant</h3>
          <p className="text-sm text-primary-600">Your data is secure & protected</p>
        </div>
      </div>
      <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-primary-100">
        <Award className="w-6 h-6 text-primary-700" />
        <div>
          <h3 className="font-semibold text-primary-900">Certified Experts</h3>
          <p className="text-sm text-primary-600">Licensed medical professionals</p>
        </div>
      </div>
      <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-primary-100">
        <BadgeCheck className="w-6 h-6 text-primary-700" />
        <div>
          <h3 className="font-semibold text-primary-900">10,000+</h3>
          <p className="text-sm text-primary-600">Questions answered</p>
        </div>
      </div>
    </div>
  );
}