import React from 'react';
import { Bot, MessageCircle, GitMerge, Globe, BarChart3, Clock } from 'lucide-react';

const services = [
  {
    title: 'Custom Chatbot Development',
    description: 'Tailored conversational AI solutions designed specifically for your business needs and customer interactions.',
    icon: Bot
  },
  {
    title: '24/7 Automated Support',
    description: 'Round-the-clock customer service that never sleeps, ensuring your customers always get immediate responses.',
    icon: Clock
  },
  {
    title: 'System Integration',
    description: 'Seamless integration with your existing business systems, CRM, and customer service platforms.',
    icon: GitMerge
  },
  {
    title: 'Multi-language Support',
    description: 'Break language barriers with AI-powered translation and multi-language conversation capabilities.',
    icon: Globe
  },
  {
    title: 'Voice Integration',
    description: 'Advanced voicebot solutions for natural, human-like conversations over phone or voice interfaces.',
    icon: MessageCircle
  },
  {
    title: 'Analytics & Insights',
    description: 'Comprehensive analytics and reporting to track performance and optimize customer interactions.',
    icon: BarChart3
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Comprehensive AI solutions to enhance your customer engagement
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div>
                  <span className="rounded-lg inline-flex p-3 bg-blue-50 text-blue-600 ring-4 ring-white">
                    <Icon className="h-6 w-6" />
                  </span>
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-medium">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}