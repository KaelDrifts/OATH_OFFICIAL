import React from 'react';

const Tokenomics = () => {
  return (
    <div className="pt-20 px-4 md:px-8 min-h-screen">
      <div className="container mx-auto py-12 max-w-4xl bg-white rounded-none shadow-[8px_8px_0_#3f1c08] border-4 border-[#3f1c08]">
        <div className="px-6 md:px-12">
          <h1 className="text-3xl font-serif font-bold mb-8">OATH Token Economics</h1>
          
          <section className="mb-12">
            <h2 className="text-xl font-serif font-bold mb-4">Token Distribution</h2>
            <div className="space-y-4 text-sm font-serif">
              <p className="leading-relaxed">
                Total Supply: 1,000,000,000 OATH
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Network Rewards (40%): 400,000,000 OATH</li>
                <li>Development Fund (20%): 200,000,000 OATH</li>
                <li>Community Treasury (15%): 150,000,000 OATH</li>
                <li>Team and Advisors (15%): 150,000,000 OATH</li>
                <li>Initial Liquidity (10%): 100,000,000 OATH</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-serif font-bold mb-4">Vesting Schedule</h2>
            <div className="space-y-4 text-sm font-serif">
              <ul className="list-disc pl-5 space-y-2">
                <li>Network Rewards: Linear release over 4 years</li>
                <li>Development Fund: 2-year cliff, then linear release over 2 years</li>
                <li>Team and Advisors: 1-year cliff, then linear release over 2 years</li>
                <li>Initial Liquidity: 20% at TGE, remaining locked for 1 year</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold mb-4">Token Utility</h2>
            <div className="space-y-4 text-sm font-serif">
              <ul className="list-disc pl-5 space-y-2">
                <li>Computation Payment: Users pay in OATH tokens for AI training</li>
                <li>Node Rewards: Validators earn OATH for providing compute</li>
                <li>Governance: Token holders participate in protocol decisions</li>
                <li>Staking: Lock tokens to run validator nodes</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;