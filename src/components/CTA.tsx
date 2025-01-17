import React from 'react';
import { Calendar } from 'lucide-react';

const CTA = () => {
  return (
    <div className="bg-teal-600">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block">Pronto para dar o primeiro passo?</span>
          <span className="block text-teal-200">Agende sua consulta hoje mesmo.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-teal-600 bg-white hover:bg-teal-50">
              <Calendar className="mr-2 h-5 w-5" />
              Agendar Consulta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;