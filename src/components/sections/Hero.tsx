import React from 'react';
import { Bot, MessageSquare, Users } from 'lucide-react';
import GradientText from '../ui/GradientText';

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* Background with subtle patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyOHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left animate-fade-in">
              <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl mb-8">
                <GradientText gradient="primary" className="block">
                  AI-Powered
                </GradientText>
                <GradientText gradient="secondary" className="block">
                  Customer Engagement
                </GradientText>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Transform your customer service with intelligent chatbots and voicebots. Enhance engagement, reduce response times, and scale your support operations 24/7.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow-lg transition-transform duration-200 hover:scale-105">
                  <a href="#contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 md:py-4 md:text-lg md:px-10">
                    Get Started
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a href="#demo" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-blue-50 hover:bg-blue-100 transition-colors duration-200 md:py-4 md:text-lg md:px-10">
                    Try Demo
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="h-56 w-full bg-blue-50/50 backdrop-blur-sm sm:h-72 md:h-96 lg:w-full lg:h-full flex items-center justify-center p-8">
          <div className="grid grid-cols-3 gap-8">
            <div className="flex flex-col items-center space-y-4 animate-float" style={{ animationDelay: '0s' }}>
              <div className="w-16 h-16 bg-white/80 backdrop-blur rounded-full flex items-center justify-center shadow-lg transition-transform duration-200 hover:scale-110">
                <MessageSquare className="h-8 w-8 text-blue-600" />
              </div>
              <span className="text-sm font-medium text-gray-600">24/7 Support</span>
            </div>
            <div className="flex flex-col items-center space-y-4 animate-float" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-white/80 backdrop-blur rounded-full flex items-center justify-center shadow-lg transition-transform duration-200 hover:scale-110">
                <Bot className="h-8 w-8 text-blue-600" />
              </div>
              <span className="text-sm font-medium text-gray-600">AI-Powered</span>
            </div>
            <div className="flex flex-col items-center space-y-4 animate-float" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-white/80 backdrop-blur rounded-full flex items-center justify-center shadow-lg transition-transform duration-200 hover:scale-110">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <span className="text-sm font-medium text-gray-600">Multi-language</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}