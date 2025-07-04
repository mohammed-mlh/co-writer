// src/components/Testimonials.js
import React from 'react';

interface TestimonialCardProps {
  initials: string;
  name: string;
  role: string;
  content: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ initials, name, role, content }) => (
  <div className="testimonial-card rounded-2xl p-8">
    <div className="flex items-center mb-6">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold mr-4">
        {initials}
      </div>
      <div>
        <h4 className="font-bold">{name}</h4>
        <p className="text-slate-600 text-sm">{role}</p>
      </div>
    </div>
    <p className="text-slate-700 mb-4">&quot;{content}&quot;</p>
    <div className="flex text-amber-400">
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
    </div>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      initials: "JD",
      name: "John Davis",
      role: "Content Marketer",
      content: "CoWriter has transformed how we create content. We've cut our writing costs by 70% while increasing our blog traffic by 40% in just three months."
    },
    {
      initials: "SR",
      name: "Sarah Reynolds",
      role: "SEO Specialist",
      content: "The SEO optimization is incredible. Our AI-generated articles consistently rank higher than our human-written content. It's like having an SEO expert on the team."
    },
    {
      initials: "MT",
      name: "Mike Thompson",
      role: "E-commerce Owner",
      content: "I used to spend hours writing product descriptions. Now I generate hundreds in minutes. The quality is excellent, and it's saved me countless hours."
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-slate-50 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Trusted by Thousands of Content Creators</h2>
          <p className="text-lg text-slate-600">See what our users say about CoWriter AI</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;