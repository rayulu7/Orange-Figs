import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube, Twitter, ArrowUp, Heart } from 'lucide-react';
import { contactInfo } from '../data/mock';
import { motion } from 'framer-motion';
import logo from '../assets/logo.jpg';

export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const currentYear = new Date().getFullYear();

    const footerLinks = [
        {
            title: 'School',
            links: [
                { name: 'Our Classes', href: '#classes' },
                { name: 'Why Us', href: '#why' }
            ]
        },
        {
            title: 'Community',
            links: [
                { name: 'Parents Portal', href: '#' },
                { name: 'School Events', href: '#' },
                { name: 'Gallery', href: '#gallery' },
                { name: 'Gift Cards', href: '#' }
            ]
        }
    ];

    const socialLinks = [
        { icon: Instagram, href: '#', label: 'Instagram' },
        { icon: Facebook, href: '#', label: 'Facebook' },
        { icon: Youtube, href: '#', label: 'Youtube' },
        { icon: Twitter, href: '#', label: 'Twitter' }
    ];

    return (
        <footer className="bg-[#1A120B] pt-16 pb-12 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute bottom-0 left-0 w-full h-[500px] bg-orange-500/5 rounded-full blur-[150px] translate-y-1/2 pointer-events-none" />
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-orange-400/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 mb-12">
                    {/* Brand Info */}
                    <div className="lg:col-span-5 space-y-10">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3"
                        >
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                                <img src={logo} alt="Orange Figs Logo" className="w-10 h-10 object-contain" />
                            </div>
                            <div>
                                <span className="text-3xl font-black text-white tracking-tighter">ORANGE FIGS</span>
                                <span className="block text-[10px] font-black text-orange-400 uppercase tracking-[0.4em] ml-1">Culinary School</span>
                            </div>
                        </motion.div>

                        <p className="text-xl text-gray-400 leading-relaxed max-w-sm">
                            Nurturing the next generation of culinary masters through creativity, safety, and joy in every dish.
                        </p>

                        <div className="flex gap-4">
                            {socialLinks.map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.href}
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20"
                                    aria-label={social.label}
                                >
                                    <social.icon size={20} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-4 grid grid-cols-2 gap-8">
                        {footerLinks.map((group, i) => (
                            <div key={i} className="space-y-8">
                                <h4 className="text-xs font-black text-gray-500 uppercase tracking-[0.3em]">{group.title}</h4>
                                <ul className="space-y-6">
                                    {group.links.map((link, j) => (
                                        <li key={j}>
                                            <a
                                                href={link.href}
                                                className="text-gray-400 hover:text-orange-400 font-bold transition-colors block"
                                            >
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Contact Info Group */}
                    <div className="lg:col-span-3 space-y-8">
                        <h4 className="text-xs font-black text-gray-500 uppercase tracking-[0.3em]">Location</h4>
                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <MapPin className="text-orange-400 mt-1 shrink-0" size={20} />
                                <span className="text-gray-400 font-medium leading-relaxed">
                                    {contactInfo.address}
                                </span>
                            </div>
                            <div className="flex items-center gap-4">
                                <Phone className="text-orange-400 shrink-0" size={20} />
                                <span className="text-gray-400 font-medium">{contactInfo.phone}</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <Mail className="text-orange-400 shrink-0" size={20} />
                                <span className="text-gray-400 font-medium">{contactInfo.email}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-gray-500 text-sm font-medium">
                        © {currentYear} Orange Figs Culinary School. All rights reserved.
                    </p>

                    <div className="flex items-center gap-8">
                        <a href="#" className="text-gray-500 hover:text-orange-400 text-sm transition-colors">Privacy Policy</a>
                        <a href="#" className="text-gray-500 hover:text-orange-400 text-sm transition-colors">Terms of Service</a>
                        <button
                            onClick={scrollToTop}
                            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20"
                        >
                            <ArrowUp size={20} />
                        </button>
                    </div>
                </div>

                {/* Made with Love */}
                <div className="mt-12 text-center">
                    <p className="text-gray-600 text-[10px] font-black uppercase tracking-[0.5em] flex items-center justify-center gap-2">
                        Made with <Heart size={10} className="text-orange-500 fill-orange-500" /> for young chefs
                    </p>
                </div>
            </div>
        </footer>
    );
};
