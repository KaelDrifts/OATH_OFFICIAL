import React from 'react';

const Governance = () => {
  return (
    <div className="pt-20 px-4 md:px-8 min-h-screen">
      <div className="container mx-auto py-12 max-w-4xl bg-white rounded-none shadow-[8px_8px_0_#3f1c08] border-4 border-[#3f1c08]">
        <div className="px-6 md:px-12">
          <h1 className="text-3xl font-serif font-bold mb-8">OATH Governance</h1>
          
          <section className="mb-12">
            <h2 className="text-xl font-serif font-bold mb-4">Governance Model</h2>
            <div className="space-y-4 text-sm font-serif">
              <p className="leading-relaxed">
                OATH follows a decentralized governance model where token holders can propose and vote on protocol changes.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>1 OATH = 1 Vote</li>
                <li>Minimum token holding required for proposal submission</li>
                <li>Quadratic voting for fair representation</li>
                <li>Time-locked execution of approved proposals</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-serif font-bold mb-4">Proposal Process</h2>
            <div className="space-y-4 text-sm font-serif">
              <ul className="list-disc pl-5 space-y-2">
                <li>Proposal Submission: 100,000 OATH minimum holding</li>
                <li>Discussion Period: 7 days</li>
                <li>Voting Period: 5 days</li>
                <li>Execution Delay: 2 days after approval</li>
                <li>Minimum Quorum: 10% of total supply</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold mb-4">Governable Parameters</h2>
            <div className="space-y-4 text-sm font-serif">
              <ul className="list-disc pl-5 space-y-2">
                <li>Network reward rates</li>
                <li>Minimum stake requirements</li>
                <li>Protocol fees</li>
                <li>Validator requirements</li>
                <li>Treasury fund allocation</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Governance;