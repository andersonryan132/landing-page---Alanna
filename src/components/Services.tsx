import React from 'react';
import { User, Video, Brain, BookA } from 'lucide-react';

const services = [
  {
    title: 'Psicologia Escolar',
    description: 'orientação de alunos, professores e pais em questões relacionadas ao desenvolvimento infantil, aprendizado, comportamento e relacionamento interpessoal.',
    icon: BookA,
  },
  {
    title: 'Acompanhamento personalizado:',
    description: 'Planejamento terapêutico adaptado às suas necessidades específicas, visando o autoconhecimento e a melhoria da qualidade de vida.',
    icon: User,
  },
  {
    title: 'Psicoterapia presencial e online:',
    description: 'Atendimento individual para adolescentes, adultos e idosos, com enfoque na Terapia Cognitivo-Comportamental.',
    icon: Video,
  },
  {
    title: 'Tratamento de demandas emocionais',
    description: 'Ansiedade, depressão, conflitos familiares, conjugais e outros desafios do dia a dia.',
    icon: Brain,
  },
];

const Services = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Serviços</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Nossos Serviços
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Oferecemos uma variedade de serviços para atender às suas necessidades específicas.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {services.map((service) => (
              <div
                key={service.title}
                className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="absolute h-12 w-12 flex items-center justify-center rounded-md bg-teal-500 text-white">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">{service.title}</h3>
                  <p className="mt-2 text-base text-gray-500">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;