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
                                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                                className={`group relative rounded-[2rem] overflow-hidden border border-gray-100 bg-white hover:border-orange-200/60 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(249,115,22,0.08)]`}
                            >
                                <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                                    {/* Image side */}
                                    <div className="relative lg:w-[45%] h-64 lg:h-auto overflow-hidden shrink-0">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent" />
                                        {/* Tag */}
                                        <div
                                            className="absolute top-6 left-6 px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-widest text-white shadow-lg backdrop-blur-sm"
                                            style={{ backgroundColor: `${service.color}dd` }}
                                        >
                                            {service.tag}
                                        </div>
                                    </div>

                                    {/* Content side */}
                                    <div className="lg:w-[55%] p-8 lg:p-12 flex flex-col justify-center">
                                        <div className="space-y-5">
                                            {/* Icon + Title */}
                                            <div className="flex items-start gap-4">
                                                <div
                                                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md shrink-0"
                                                    style={{ backgroundColor: service.color }}
                                                >
                                                    <Icon size={22} strokeWidth={2.5} />
                                                </div>
                                                <div>
                                                    <h3 className="text-2xl lg:text-3xl font-black text-gray-900 tracking-tight leading-tight">
                                                        {service.title}
                                                    </h3>
                                                </div>
                                            </div>

                                            <p className="text-gray-500 leading-relaxed text-[15px]">
                                                {service.description}
                                            </p>

                                            {/* Features in 2-col grid */}
                                            <div className="grid grid-cols-2 gap-2.5">
                                                {service.features.map((f, i) => (
                                                    <div key={i} className="flex items-center gap-2">
                                                        <Check size={14} strokeWidth={3} style={{ color: service.color }} />
                                                        <span className="text-sm font-semibold text-gray-700">{f}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            <button
                                                onClick={scrollToContact}
                                                className="inline-flex items-center gap-2 font-bold text-sm mt-2 group/btn transition-colors"
                                                style={{ color: service.color }}
                                            >
                                                Learn More & Enroll
                                                <ArrowRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
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
