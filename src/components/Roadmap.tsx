import React from 'react';

const Roadmap = () => {
  return (
    <div className="pt-20 px-4 md:px-8 min-h-screen">
      <div className="container mx-auto py-12 max-w-4xl bg-white rounded-none shadow-[8px_8px_0_#3f1c08] border-4 border-[#3f1c08]">
        <div className="px-6 md:px-12">
          <h1 className="text-3xl font-serif font-bold mb-8">OATH Roadmap</h1>
          
          <section className="mb-12">
            <h2 className="text-xl font-serif font-bold mb-4">Q1 2024: Foundation</h2>
            <div className="space-y-4 text-sm font-serif">
              <ul className="list-disc pl-5 space-y-2">
                <li>Protocol specification release</li>
                <li>Core smart contracts development</li>
                <li>Initial validator node implementation</li>
                <li>Community building and partnerships</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-serif font-bold mb-4">Q2 2024: Network Launch</h2>
            <div className="space-y-4 text-sm font-serif">
              <ul className="list-disc pl-5 space-y-2">
                <li>Testnet deployment</li>
                <li>Security audits</li>
                <li>Validator onboarding program</li>
                <li>SDK and documentation release</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-serif font-bold mb-4">Q3 2024: Expansion</h2>
            <div className="space-y-4 text-sm font-serif">
              <ul className="list-disc pl-5 space-y-2">
                <li>Mainnet launch</li>
                <li>Governance implementation</li>
                <li>Partnership program expansion</li>
                <li>Advanced node features release</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold mb-4">Q4 2024: Ecosystem Growth</h2>
            <div className="space-y-4 text-sm font-serif">
              <ul className="list-disc pl-5 space-y-2">
                <li>Cross-chain integration</li>
                <li>Developer grants program</li>
                <li>Enterprise solutions</li>
                <li>Protocol optimization and scaling</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;