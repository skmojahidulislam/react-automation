import React from 'react';

const tools = [
  {
    name: 'Git & GitHub',
    description: 'Version control and remote code collaboration.',
    icon: '🌿',
  },
  {
    name: 'Linux 1',
    description: 'Command-line operating system for server management.',
    icon: '🐧',
  },
  {
    name: 'Docker',
    description: 'Containerization platform to package applications.',
    icon: '🐳',
  },
  {
    name: 'AWS',
    description: 'Cloud platform offering compute, storage, and more.',
    icon: '☁️',
  },
  {
    name: 'Ansible',
    description: 'Configuration management tool to automate provisioning.',
    icon: '🔧',
  },
  {
    name: 'Terraform',
    description: 'Infrastructure as Code tool for managing resources.',
    icon: '🌍',
  },
  {
    name: 'Grafana',
    description: 'Monitoring and observability dashboard.',
    icon: '📊',
  },
  {
    name: 'Kubernetes',
    description: 'Container orchestration platform for scaling apps.',
    icon: '☸️',
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-blue-700 text-white p-6 text-center shadow-lg">
        <h1 className="text-3xl font-bold">DevOps Tools Dashboard & More</h1>
        <p className="text-sm mt-2">Explore the modern DevOps toolchain</p>
      </header>

      <main className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center hover:shadow-xl transition"
          >
            <div className="text-4xl mb-3">{tool.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{tool.name}</h2>
            <p className="text-center text-sm">{tool.description}</p>
          </div>
        ))}
      </main>

      <footer className="bg-blue-700 text-white text-center p-4 mt-8">
        <p>🚀 DevOps Dashboard • Deployed using GitHub Actions + DockerHub</p>
      </footer>
    </div>
  );
}

export default App;
