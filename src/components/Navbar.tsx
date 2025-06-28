// src/components/Navbar.js
import { SignedIn, SignedOut, SignInButton, SignUp, SignUpButton, UserButton } from '@clerk/nextjs';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="py-5 px-4 md:px-10 flex justify-between items-center sticky top-0 bg-white/80 backdrop-blur-sm z-50 border-b border-slate-100">
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
          <i className="fas fa-robot text-white text-xl"></i>
        </div>
        <span className="text-xl font-bold text-dark">Article<span className="text-primary">Forge</span></span>
      </div>
      
      <div className="hidden md:flex space-x-8">
        <a href="#features" className="font-medium hover:text-primary transition">Features</a>
        <a href="#how-it-works" className="font-medium hover:text-primary transition">How It Works</a>
        <a href="#pricing" className="font-medium hover:text-primary transition">Pricing</a>
        <a href="#testimonials" className="font-medium hover:text-primary transition">Testimonials</a>
      </div>
      
      <div className="flex items-center space-x-4">
      <SignedOut>
      <SignInButton mode='modal'>
        <a  className="hidden md:block font-medium hover:text-primary transition">Sign In</a>
        </SignInButton>
        <SignUpButton mode='modal'>
        <a  className="bg-primary text-white px-5 py-2 rounded-lg font-medium hover:opacity-80 transition shadow hover:shadow-md">Get Started</a>

        </SignUpButton>
        </SignedOut>
        <SignedIn>
              <UserButton />
            </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;