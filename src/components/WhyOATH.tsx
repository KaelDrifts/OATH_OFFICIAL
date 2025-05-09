import React from 'react';
import { Server, Scale, Users } from 'lucide-react';

const features = [
  {
    title: 'Open Infrastructure',
    description: 'A permissionless network anyone can join to provide or use computational resources for AI training.',
    icon: <Server size={36} />,
  },
  {
    title: 'Transparent Incentives',
    description: 'Clear reward mechanisms ensure fair compensation for computational contributions.',
    icon: <Scale size={36} />,
  },
  {
    title: 'Community Governance',
    description: 'Protocol upgrades and parameter changes are decided by token holders through decentralized voting.',
    icon: <Users size={36} />,
  }
];

const FeatureCard = ({ feature }: { feature: typeof features[0] }) => {
  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-lg p-8 shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px]">
      <div className="text-[#a26320] mb-4">{feature.icon}</div>
      <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
      <p className="text-[#3f1c08]/80">{feature.description}</p>
    </div>
  );
};

const WhyOATH = () => {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Why OATH?</h2>
        <p className="text-lg text-center max-w-2xl mx-auto mb-12 text-[#3f1c08]/80">
          Our protocol is designed with core principles that ensure a fair, open, and efficient ecosystem for AI computation.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyOATH;