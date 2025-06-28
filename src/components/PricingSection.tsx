// src/components/PricingSection.js
import React from 'react';

interface Feature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  features: Feature[];
  popular: boolean;
  ctaText: string;
  ctaColor: string;
}

const PricingCard: React.FC<PricingCardProps> = ({ title, description, price, features, popular, ctaText, ctaColor }) => (
  <div className={`pricing-card bg-white ${popular ? 'border-primary border border-2' : ''}`}>
    <div className="p-8">
      {popular && (
        <div className="bg-primary text-white text-xs font-bold px-4 py-1 rounded-full inline-block mb-4">
          MOST POPULAR
        </div>
      )}
      <h3 className="text-xl font-bold text-slate-700 mb-2">{title}</h3>
      <p className="text-slate-600 mb-6">{description}</p>
      <div className="mb-6">
        <span className="text-4xl font-bold text-dark">${price}</span>
        <span className="text-slate-600">/month</span>
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <i className={`fas ${feature.included ? 'fa-check-circle text-green-500' : 'fa-times-circle'} mr-3`}></i>
            <span className={feature.included ? '' : 'text-slate-400'}>{feature.text}</span>
          </li>
        ))}
      </ul>
      <a href="#" className={`block text-center ${ctaColor} font-medium py-3 rounded-lg transition`}>
        {ctaText}
      </a>
    </div>
  </div>
);

const PricingSection = () => {
  const plans = [
    {
      title: "Starter",
      description: "Perfect for individuals and small blogs",
      price: "29",
      popular: false,
      ctaText: "Get Started",
      ctaColor: "bg-slate-100 text-dark hover:bg-slate-200",
      features: [
        { text: "50,000 words per month", included: true },
        { text: "25+ content templates", included: true },
        { text: "Basic SEO optimization", included: true },
        { text: "Priority support", included: false },
        { text: "Team collaboration", included: false }
      ]
    },
    {
      title: "Professional",
      description: "Ideal for content marketers and growing businesses",
      price: "79",
      popular: true,
      ctaText: "Get Started",
      ctaColor: "bg-primary text-white hover:bg-indigo-600",
      features: [
        { text: "250,000 words per month", included: true },
        { text: "50+ content templates", included: true },
        { text: "Advanced SEO optimization", included: true },
        { text: "Priority support", included: true },
        { text: "Team collaboration (3 members)", included: true }
      ]
    },
    {
      title: "Enterprise",
      description: "For agencies and large content teams",
      price: "199",
      popular: false,
      ctaText: "Get Started",
      ctaColor: "bg-slate-100 text-dark hover:bg-slate-200",
      features: [
        { text: "1,000,000+ words per month", included: true },
        { text: "All content templates", included: true },
        { text: "Premium SEO optimization", included: true },
        { text: "24/7 priority support", included: true },
        { text: "Team collaboration (10+ members)", included: true }
      ]
    }
  ];

  return (
    <section id="pricing" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-slate-600">Choose the plan that fits your content needs</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;