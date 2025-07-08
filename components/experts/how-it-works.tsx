import { Search, Calendar, Video, Heart } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: 'Find Your Mentor',
      description: 'Browse our community of verified spiritual mentors and find someone who resonates with your faith journey.'
    },
    {
      icon: Calendar,
      title: 'Schedule a Session',
      description: 'Book a convenient time for your spiritual guidance session through our easy scheduling system.'
    },
    {
      icon: Video,
      title: 'Connect & Grow',
      description: 'Meet with your mentor via video call, chat, or in-person to receive personalized spiritual guidance.'
    },
    {
      icon: Heart,
      title: 'Transform Your Faith',
      description: 'Apply biblical wisdom and spiritual practices to deepen your relationship with God and grow in faith.'
    }
  ];

  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Connect with experienced spiritual mentors in four simple steps and begin your journey of faith growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transform translate-x-4 z-0"></div>
              )}
              
              <div className="relative bg-gray-900 border border-gray-800 rounded-xl p-6 text-center hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 z-10">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4">
                  <step.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
                
                {/* Step Number */}
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  {index + 1}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}