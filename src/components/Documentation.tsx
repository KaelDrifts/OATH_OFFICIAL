import React from 'react';

const Documentation = () => {
  return (
    <div className="pt-20 px-4 md:px-8 min-h-screen">
      <div className="container mx-auto py-12 max-w-4xl bg-white rounded-none shadow-[8px_8px_0_#3f1c08] border-4 border-[#3f1c08]">
        <div className="px-6 md:px-12">
          <h1 className="text-3xl font-serif font-bold mb-8">OATH — A Protocol for Decentralized Machine Learning Workload Execution</h1>
          
          <section className="mb-12">
            <h2 className="text-xl font-serif font-bold mb-4">1. Introduction</h2>
            <p className="text-sm mb-6 font-serif leading-relaxed">
              The AI industry is heavily reliant on centralized infrastructure. OATH (Open Autonomous Training Hub) is a decentralized protocol to distribute, execute, and verify machine learning workloads on a trustless network. Our mission is to make AI infrastructure accessible, verifiable, and community-governed.
            </p>
            <p className="text-sm font-serif leading-relaxed">
              The centralization of AI infrastructure presents significant challenges to innovation, accessibility, and fairness in the artificial intelligence sector. By creating a decentralized protocol, OATH aims to democratize access to computational resources while ensuring security and reliability through cryptographic verification.
            </p>
          </section>
          
          <hr className="border-[#3f1c08]/10 my-8" />
          
          <section className="mb-12">
            <h2 className="text-xl font-serif font-bold mb-4">2. Technical Architecture</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-serif font-semibold mb-2">Workload Submission</h3>
                <p className="text-sm font-serif leading-relaxed">
                  Users submit training jobs to the network through a standardized interface. Each workload is cryptographically signed and assigned a unique identifier. The training data and model specifications are stored on decentralized storage networks, ensuring both availability and integrity.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-serif font-semibold mb-2">Distributed Execution</h3>
                <p className="text-sm font-serif leading-relaxed">
                  The network employs a sophisticated job distribution algorithm that considers factors such as node capacity, historical performance, and stake. Compute nodes maintain verifiable execution logs and periodic checkpoints to ensure transparency and enable verification.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-serif font-semibold mb-2">Verification Protocol</h3>
                <p className="text-sm font-serif leading-relaxed">
                  A multi-layered verification system ensures computational integrity. Verifier nodes perform selective recomputation of checkpoints and validate intermediate results using zero-knowledge proofs where applicable. This creates a trustless environment where results can be verified without complete recomputation.
                </p>
              </div>
            </div>
          </section>
          
          <hr className="border-[#3f1c08]/10 my-8" />
          
          <section>
            <h2 className="text-xl font-serif font-bold mb-4">3. Implementation Example</h2>
            
            <div className="bg-[#3f1c08] rounded-none overflow-hidden border-4 border-[#3f1c08]">
              <div className="flex items-center px-4 py-2 bg-[#3f1c08]">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 bg-red-500"></div>
                  <div className="w-3 h-3 bg-yellow-500"></div>
                  <div className="w-3 h-3 bg-green-500"></div>
                </div>
              </div>
              <pre className="p-6 text-[#f9e3be] overflow-x-auto font-mono text-sm">
{`import { OathClient } from 'oath-protocol-sdk'

const client = new OathClient({
  apiKey: 'YOUR_API_KEY',
  endpoint: 'https://api.oath.network'
})

// Example workload
const workload = {
  name: 'resnet50-training',
  framework: 'pytorch',
  script: 'train.py',
  dataset: 'ipfs://bafy...xyz',
  epochs: 20,
  reward: 10 // OATH tokens
}

async function submitJob() {
  const jobId = await client.submitWorkload(workload)
  console.log(\`Job submitted: \${jobId}\`)
}`}
              </pre>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Documentation;