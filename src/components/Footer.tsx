import React from 'react';
import { Instagram, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-semibold text-white">PsicoVida</span>
            <p className="mt-4 text-gray-300">
              Cuidando da sua saúde mental com empatia e profissionalismo.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Links Rápidos</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Home</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Sobre</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Serviços</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Redes Sociais</h3>
            <div className="mt-4 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
            
            <div className="mt-8">
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Contato</h3>
              <p className="mt-4 text-base text-gray-300">
              alannadomingospsi@gmail.com<br />
                +55 (84) 98805-0237
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">
            © 2025 Ryan-Dev. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;