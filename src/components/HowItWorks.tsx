import React from 'react';
import { Code, Share2, Shield, Coins } from 'lucide-react';

const steps = [
  {
    title: 'Submit workload',
    description: 'Submit your AI training workload to the decentralized network with a few lines of code.',
    icon: <Code size={32} />,
  },
  {
    title: 'Distributed computation',
    description: 'Your workload is distributed across thousands of nodes for parallel processing.',
    icon: <Share2 size={32} />,
  },
  {
    title: 'Trustless verification',
    description: 'Consensus algorithms ensure accurate and tamper-proof results.',
    icon: <Shield size={32} />,
  },
  {
    title: 'Token reward',
    description: 'Node operators are compensated with OATH tokens for their contribution.',
    icon: <Coins size={32} />,
  },
];

const StepCard = ({ step, index }: { step: typeof steps[0], index: number }) => {
  return (
    <div className="relative bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-md transition-transform hover:translate-y-[-4px] hover:shadow-lg">
      <div className="absolute top-0 left-0 w-12 h-12 -mt-4 -ml-4 flex items-center justify-center rounded-full bg-[#a26320] text-white font-bold text-lg">
        {index + 1}
      </div>
      <div className="mb-4 text-[#a26320] ml-6">{step.icon}</div>
      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
      <p className="text-[#3f1c08]/80">{step.description}</p>
    </div>
  );
};

const HowItWorks = () => {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">How It Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative">
          {/* Connecting line between cards (desktop only) */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#a26320]/30 hidden lg:block -z-10" />
          
          {steps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;