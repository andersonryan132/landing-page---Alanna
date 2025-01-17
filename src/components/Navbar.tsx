import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-semibold text-teal-600">PsicoVida</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-teal-600">Home</a>
            <a href="#" className="text-gray-600 hover:text-teal-600">Sobre</a>
            <a href="#" className="text-gray-600 hover:text-teal-600">Serviços</a>
            <a href="#" className="text-gray-600 hover:text-teal-600">Contato</a>
            <button className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700">
              Agendar Consulta
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-gray-600">Home</a>
            <a href="#" className="block px-3 py-2 text-gray-600">Sobre</a>
            <a href="#" className="block px-3 py-2 text-gray-600">Serviços</a>
            <a href="#" className="block px-3 py-2 text-gray-600">Contato</a>
            <button className="w-full text-left px-3 py-2 text-teal-600">
              Agendar Consulta
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;