"use client";

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const menuItems = [
    { title: '選ばれる理由', href: 'about' },
    { title: 'サービス', href: 'services' },
    { title: '実績', href: 'works' },
    { title: 'FAQ', href: 'faq' },
    { title: 'お問い合わせ', href: 'contact' },
  ];

  return (
    <motion.header 
      className="fixed w-full z-50 transition-all duration-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className={`w-full transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="#" className={`text-xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-blue-900' : 'text-white'
            }`}>
              xxxx
            </a>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.title}
                  onClick={() => scrollToSection(item.href)}
                  className={`transition-colors duration-300 ${
                    isScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.title}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection('contact')}
                className={isScrolled ? 'bg-blue-600 hover:bg-blue-700' : 'bg-white text-blue-900 hover:bg-blue-50'}
              >
                お問い合わせ
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden p-2 transition-colors duration-300 ${
                isScrolled ? 'text-blue-900' : 'text-white'
              }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-white z-40 md:hidden"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b">
                <span className="text-xl font-bold text-blue-900">Company</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-600"
                >
                  <X />
                </button>
              </div>
              <nav className="flex-1 overflow-y-auto p-4">
                {menuItems.map((item) => (
                  <button
                    key={item.title}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left py-4 text-lg font-medium text-gray-600 hover:text-blue-600 border-b border-gray-100"
                  >
                    {item.title}
                  </button>
                ))}
              </nav>
              <div className="p-4 border-t">
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  お問い合わせ
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}