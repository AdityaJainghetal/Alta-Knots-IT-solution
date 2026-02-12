import React from 'react';
import { Newspaper, ExternalLink, Clock, Cpu, Zap, Globe } from 'lucide-react';

const TechNews = () => {
  // You can update / add your own company news here
  
  
  const newsItems = [
    {
      id: 1,
      title: "Our Company Launches New AI-Powered Feature",
      description: "We just released a groundbreaking update that boosts performance by 40% using next-gen AI.",
      date: "Feb 10, 2026",
      category: "Company Update",
      icon: <Cpu className="w-5 h-5" />,
      link: "#",
    },
    {
      id: 2,
      title: "Cisco Unveils AI Networking Chip to Challenge Nvidia",
      description: "New silicon aims to optimize data center AI workloads with better efficiency.",
      date: "Feb 10, 2026",
      category: "Hardware",
      icon: <Zap className="w-5 h-5" />,
      link: "https://www.reuters.com/technology",
    },
    {
      id: 3,
      title: "Alibaba Releases AI Model for Robotics & Physical AI",
      description: "Chinese tech giant pushes 'physical AI' with robot control capabilities.",
      date: "Feb 10, 2026",
      category: "AI",
      icon: <Globe className="w-5 h-5" />,
      link: "https://www.cnbc.com/technology",
    },
    {
      id: 4,
      title: "ChatGPT Starts Showing Ads – New Revenue Stream",
      description: "OpenAI begins testing advertisements inside ChatGPT interface.",
      date: "Feb 9, 2026",
      category: "Industry",
      icon: <Newspaper className="w-5 h-5" />,
      link: "https://techcrunch.com/",
    },
    {
      id: 5,
      title: "xAI Opens New Office – Joins Growing AI Hub",
      description: "Elon Musk’s xAI expands presence in Bellevue AI corridor.",
      date: "Feb 9, 2026",
      category: "Company News",
      icon: <Cpu className="w-5 h-5" />,
      link: "https://www.geekwire.com/",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-gray-100 p-6 md:p-10">
      {/* Header */}
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <Newspaper className="w-10 h-10 text-red-600" strokeWidth={2.5} />
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Tech<span className="text-red-600">News</span>
            </h1>
          </div>
          <p className="text-gray-400 text-sm md:text-base">
            Latest updates from tech world & our company
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <div
              key={item.id}
              className="group bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-red-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-red-900/20"
            >
              {/* Card Header */}
              <div className="bg-gradient-to-r from-red-950/30 to-transparent p-5 border-b border-gray-800">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-red-900/30 rounded-lg text-red-500">
                      {item.icon}
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-red-400">
                      {item.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500 text-xs">
                    <Clock className="w-3.5 h-3.5" />
                    {item.date}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-xl font-bold mb-3 group-hover:text-red-500 transition-colors">
                  {item.title}
                </h2>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Footer / Link */}
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-medium text-sm transition-colors"
                >
                  Read more
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          Add your latest company announcements in the <code>newsItems</code> array
        </div>
      </div>
    </div>
  );
};

export default TechNews;