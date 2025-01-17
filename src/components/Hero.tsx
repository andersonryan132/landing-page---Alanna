import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-teal-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Cuidando da sua</span>
              <span className="block text-teal-600">saúde mental</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Oferecemos terapia individual, de casal e online para ajudar você a superar desafios e encontrar equilíbrio.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left">
              <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700">
                Agendar Consulta
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
              <button className="ml-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-teal-600 bg-white hover:bg-gray-50">
                Saiba Mais
              </button>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <img
              className="w-full rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
              src="/Doutora.jpg"
              alt="Dra. Maria Silva - Psicóloga"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;