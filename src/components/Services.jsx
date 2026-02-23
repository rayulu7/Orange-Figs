import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChefHat, Cake, Utensils, Star, Check } from 'lucide-react';

const services = [
    {
        id: 1,
        icon: ChefHat,
        tag: 'Ages 4–6',
        title: 'Little Chefs Foundation',
        description: 'A playful, hands-on introduction to the kitchen. Children discover the joy of cooking through simple, colorful recipes and fun food art that builds confidence from day one.',
        features: ['Kitchen safety basics', 'Fruit & veggie art', 'Simple no-heat recipes', 'Sensory play activities'],
        color: '#F97316',
        image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80',
    },
    {
        id: 2,
        icon: Utensils,
        tag: 'Ages 7–12',
        title: 'Junior Culinary Arts',
        description: 'Building real skills — from knife technique to sauce making. Kids tackle exciting recipes from around the world in a safe, guided environment with professional chefs.',
        features: ['Knife & chopping skills', 'Sauce & flavour building', 'Baking fundamentals', 'World cuisine exploration'],
        color: '#EA580C',
        image: 'https://images.unsplash.com/photo-1514986888952-8cd320577b68?auto=format&fit=crop&q=80',
    },
    {
        id: 3,
        icon: Star,
        tag: 'Ages 13–17',
        title: 'Teen Masterclass',
        description: 'Advanced culinary techniques for ambitious teens. Master plating, international cuisines, and pastry arts under expert chef mentorship in a collaborative studio setting.',
        features: ['Pastry & dessert arts', 'International cuisines', 'Professional plating', 'Menu design & planning'],
        color: '#D97706',
        image: 'https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?auto=format&fit=crop&q=80',
    },
    {
        id: 4,
        icon: Cake,
        tag: 'All Ages',
        title: 'Private & Family Sessions',
        description: 'Book an exclusive session for your family or a group. Perfect for birthdays, special occasions, or a unique bonding experience everyone will love and remember.',
        features: ['Flexible scheduling', 'Custom menu planning', 'Perfect for celebrations', 'Take-home recipe book'],
        color: '#F59E0B',
        image: 'https://images.unsplash.com/photo-1551218808-94e220e03107?auto=format&fit=crop&q=80',
    },
];

export const Services = () => {
    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="classes" className="bg-white py-14 lg:py-20">
            <div className="container-custom">

                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
                    <motion.span
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block text-xs font-black uppercase tracking-[0.2em] text-orange-600 bg-orange-50 border border-orange-200/50 px-4 py-2 rounded-full"
                    >
                        Our Programs
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight tracking-tight"
                    >
                        A Program for Every <span className="gradient-text">Young Chef</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-base text-gray-500 leading-relaxed"
                    >
                        From toddler-friendly kitchen play to advanced teen masterclasses — we have a program designed for every age and skill level.
                    </motion.p>
                </div>

                {/* Alternating service cards */}
                <div className="space-y-6">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        const isReversed = index % 2 !== 0;

                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                                className={`group relative rounded-[2.5rem] overflow-hidden border border-gray-100 bg-white shadow-premium shadow-premium-hover`}
                            >
                                <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                                    {/* Image side */}
                                    <div className="relative lg:w-[45%] h-72 lg:h-auto overflow-hidden shrink-0">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        {/* Tag */}
                                        <div
                                            className="absolute top-8 left-8 px-5 py-2 rounded-full text-[12px] font-black uppercase tracking-widest text-white shadow-xl backdrop-blur-md border border-white/20"
                                            style={{ backgroundColor: `${service.color}cc` }}
                                        >
                                            {service.tag}
                                        </div>
                                    </div>

                                    {/* Content side */}
                                    <div className="lg:w-[55%] p-10 lg:p-16 flex flex-col justify-center">
                                        <div className="space-y-6">
                                            {/* Icon + Title */}
                                            <div className="flex items-start gap-5">
                                                <motion.div
                                                    whileHover={{ rotate: 10, scale: 1.1 }}
                                                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg shrink-0 transition-transform duration-500"
                                                    style={{
                                                        backgroundColor: service.color,
                                                        boxShadow: `0 10px 20px -5px ${service.color}44`
                                                    }}
                                                >
                                                    <Icon size={26} strokeWidth={2.5} />
                                                </motion.div>
                                                <div>
                                                    <h3 className="text-3xl lg:text-4xl font-black text-gray-900 tracking-tight leading-tight">
                                                        {service.title}
                                                    </h3>
                                                </div>
                                            </div>

                                            <p className="text-gray-500 leading-relaxed text-base lg:text-lg">
                                                {service.description}
                                            </p>

                                            {/* Features in 2-col grid */}
                                            <div className="grid grid-cols-2 gap-4 pt-2">
                                                {service.features.map((f, i) => (
                                                    <div key={i} className="flex items-center gap-3">
                                                        <div className="w-5 h-5 rounded-full flex items-center justify-center bg-gray-50 shadow-inner">
                                                            <Check size={12} strokeWidth={4} style={{ color: service.color }} />
                                                        </div>
                                                        <span className="text-sm font-bold text-gray-700">{f}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            <button
                                                onClick={scrollToContact}
                                                className="inline-flex items-center gap-3 font-black text-sm mt-4 group/btn transition-all duration-300 uppercase tracking-widest"
                                                style={{ color: service.color }}
                                            >
                                                Explore Program
                                                <span className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover/btn:bg-orange-50 transition-colors">
                                                    <ArrowRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
