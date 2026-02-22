import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.jpg';

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    const navItems = [
        { label: 'Programs', id: 'classes' },
        { label: 'How It Works', id: 'how-it-works' },
        { label: 'Why Us', id: 'why' },
        { label: 'Pricing', id: 'pricing' },
        { label: 'Gallery', id: 'gallery' },
        { label: 'Contact', id: 'contact' }
    ];

    return (
        <div
            className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${isScrolled ? 'shadow-[0_4px_30px_rgba(249,115,22,0.08)]' : ''}`}
        >
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                className="max-w-[1440px] mx-auto"
            >
                <nav className="px-6 lg:px-12 h-20 flex items-center justify-between">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center gap-3 cursor-pointer"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-orange-500/20 rounded-xl blur-lg animate-pulse" />
                            <img src={logo} alt="Logo" className="w-12 h-12 object-contain rounded-xl relative z-10" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-black tracking-tighter text-gray-900">
                                Orange<span className="text-orange-500">Figs</span>
                            </span>
                            <span className="text-[8px] font-black uppercase tracking-[0.35em] text-orange-400 -mt-1">Culinary School</span>
                        </div>
                    </motion.div>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navItems.map((item) => (
                            <motion.button
                                key={item.label}
                                onClick={() => scrollToSection(item.id)}
                                whileHover={{ y: -2 }}
                                className="relative px-4 py-2 text-[13px] font-bold text-gray-600 hover:text-orange-600 transition-colors group"
                            >
                                {item.label}
                                <motion.div
                                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] bg-gradient-to-r from-orange-400 to-amber-400 rounded-full"
                                    initial={{ width: 0 }}
                                    whileHover={{ width: '60%' }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.button>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="hidden lg:flex items-center gap-3">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button
                                onClick={() => scrollToSection('contact')}
                                className="h-11 px-7 rounded-full bg-gradient-to-r from-orange-500 via-orange-500 to-amber-500 text-white font-bold text-sm shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40 transition-shadow border-0 relative overflow-hidden group"
                            >
                                <span className="relative z-10">Get Started Free</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-orange-600 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Button>
                        </motion.div>
                    </div>

                    {/* Mobile */}
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-orange-50 text-orange-600"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                    </motion.button>
                </nav>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="lg:hidden overflow-hidden bg-white border-t border-orange-100"
                        >
                            <div className="px-6 py-6 flex flex-col gap-2">
                                {navItems.map((item, i) => (
                                    <motion.button
                                        key={item.label}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.05 * i }}
                                        onClick={() => scrollToSection(item.id)}
                                        className="text-left text-lg font-bold text-gray-900 py-3 px-4 rounded-2xl hover:bg-orange-50 transition-colors"
                                    >
                                        {item.label}
                                    </motion.button>
                                ))}
                                <Button
                                    onClick={() => scrollToSection('contact')}
                                    className="mt-2 h-14 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-base"
                                >
                                    Get Started Free
                                </Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.header>
        </div>
    );
};
