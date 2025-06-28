// src/components/FeaturesSection.js
import React from 'react';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="card bg-white p-8 rounded-2xl shadow-md border border-slate-100">
    <div className="feature-icon">
      <i className={`${icon} text-2xl text-primary`}></i>
    </div>
    <h3 className="text-xl font-bold text-dark mb-3">{title}</h3>
    <p className="text-slate-600 mb-4">{description}</p>
  </div>
);

const FeaturesSection = () => {
  const features = [
    {
      icon: "fas fa-bolt",
      title: "Lightning Fast Generation",
      description: "Create full-length articles in under 30 seconds. Just provide a topic and watch our AI work its magic."
    },
    {
      icon: "fas fa-search",
      title: "SEO Optimized",
      description: "Our AI analyzes top-ranking content to create SEO-friendly articles that help you rank higher."
    },
    {
      icon: "fas fa-sync-alt",
      title: "Multiple Content Variations",
      description: "Generate different versions of content for A/B testing or repurposing across platforms."
    },
    {
      icon: "fas fa-globe",
      title: "Multilingual Support",
      description: "Create content in over 20 languages to reach a global audience without translation hassles."
    },
    {
      icon: "fas fa-copy",
      title: "Content Templates",
      description: "Choose from dozens of templates for blog posts, product descriptions, social media, and more."
    },
    {
      icon: "fas fa-brain",
      title: "Smart Research",
      description: "Our AI researches your topic across the web to create accurate, well-informed content."
    }
  ];

  return (
    <section id="features" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Powerful AI Writing Capabilities</h2>
          <p className="text-lg text-slate-600">Transform your content creation process with our advanced AI technology</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;