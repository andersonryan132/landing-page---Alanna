import React from 'react';

const About = () => {
  return (
    <div className="bg-teal-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Quem Sou
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-500">
              Sou Alanna Domingos, psicóloga formada pela UNIFACEX e
              especialista em Terapia Cognitivo-Comportamental (TCC). Ofereço
              Plantão Psicológico Online, um espaço seguro e acolhedor que
              promove escuta ativa, empatia e intervenções baseadas em
              evidências, de forma acessível e prática, com valor social.
            </p>

            <div className="mt-8">
              <div className="flex items-center">
                <img
                  className="h-12 w-12 rounded-full"
                  src="/Doutora.jpg"
                  alt="Psicologa Alanna Domingos"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900">
                    Psicol. Alanna Domingos
                  </h4>
                  <p className="text-gray-500">CRP 01/12345</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 lg:mt-0">
            <img
              className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Consultório"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
