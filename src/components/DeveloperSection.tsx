import React from 'react';

const DeveloperSection = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-white/30">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Built for transparency. Built for builders.
          </h2>
          
          <div className="bg-[#3f1c08] rounded-lg shadow-lg overflow-hidden">
            <div className="flex items-center px-4 py-2 bg-[#3f1c08]/80">
              <div className="flex space-x-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="ml-4 text-[#f9e3be]/80 text-sm">
                example.js
              </div>
            </div>
            
            <div className="p-6 overflow-x-auto font-mono text-sm leading-relaxed">
              <pre className="text-[#f9e3be]">
{`// Initialize OATH client
import { OathClient } from '@oath/sdk';

const client = new OathClient({
  apiKey: process.env.OATH_API_KEY
});

// Define your ML model workload
const job = await client.jobs.create({
  name: 'Image Classification Training',
  model: {
    type: 'tensorflow',
    architecture: 'resnet50',
    hyperparameters: {
      learningRate: 0.001,
      batchSize: 32,
      epochs: 5
    }
  },
  dataset: {
    id: 'ds_12345',
    splitRatio: [0.8, 0.2]
  },
  compute: {
    minNodes: 3,
    gpuRequired: true
  },
  budget: {
    maxTokens: 1000,
    priorityLevel: 'standard'
  }
});

// Listen for job completion
client.on('job.completed', (result) => {
  console.log('Model trained successfully!');
  console.log(\`Validation accuracy: \${result.metrics.accuracy}\`);
  console.log(\`Model stored at: \${result.model.uri}\`);
});

// Start the distributed training process
await job.start();`}
              </pre>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <a href="#" className="text-[#a26320] hover:text-[#8b5318] font-medium flex items-center justify-center">
              <span>View API Documentation</span>
              <svg
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="ml-1"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperSection;