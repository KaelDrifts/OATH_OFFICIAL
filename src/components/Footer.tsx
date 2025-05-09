import React from 'react';
import { Trees as Tree, Github, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#3f1c08]/10 pt-12 pb-6 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between mb-12 gap-8">
          <div className="max-w-xs">
            <div className="flex items-center mb-4">
            
              <span className="text-2xl font-bold">OATH</span>
            </div>
            <p className="text-[#3f1c08]/80 mb-4">
              Decentralized AI infrastructure for an open future.
            </p>
            <div className="flex space-x-4">
              <a 
                 href="https://github.com/KaelDrifts/OATH-AI"
                 target="_blank"
                 rel="noopener noreferrer"
              className="text-[#3f1c08]/70 hover:text-[#a26320] transition-colors">
                <Github size={20} />
              </a>
              <a href="https://x.com/OATH_ML"
                target="_blank"
                 rel="noopener noreferrer" 
              className="text-[#3f1c08]/70 hover:text-[#a26320] transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Protocol</h4>
              <ul className="space-y-2">
                <li><a href="/tokenomics" className="text-[#3f1c08]/80 hover:text-[#a26320] transition-colors">Tokenomics</a></li>
                <li><a href="/governance" className="text-[#3f1c08]/80 hover:text-[#a26320] transition-colors">Governance</a></li>
                <li><a href="/roadmap" className="text-[#3f1c08]/80 hover:text-[#a26320] transition-colors">Roadmap</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="/docs" className="text-[#3f1c08]/80 hover:text-[#a26320] transition-colors">Documentation</a></li>
                <li><a href="/api-docs" className="text-[#3f1c08]/80 hover:text-[#a26320] transition-colors">API Reference</a></li>
                <li><a href="https://github.com/KaelDrifts/OATH-AI" className="text-[#3f1c08]/80 hover:text-[#a26320] transition-colors">GitHub</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <ul className="space-y-2">
                <li><a href="https://t.me/OATH_management" className="text-[#3f1c08]/80 hover:text-[#a26320] transition-colors">Telegram</a></li>
                <li><a href="#" className="text-[#3f1c08]/80 hover:text-[#a26320] transition-colors">Twitter</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-[#3f1c08]/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#3f1c08]/70 text-sm">
            &copy; {currentYear} OATH Protocol. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-[#3f1c08]/70 hover:text-[#a26320] text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-[#3f1c08]/70 hover:text-[#a26320] text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-[#3f1c08]/70 hover:text-[#a26320] text-sm transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;