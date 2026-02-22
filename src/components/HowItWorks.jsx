import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, Package, ChefHat, PartyPopper } from 'lucide-react';

const steps = [
    {
        id: 1,
        icon: ClipboardList,
        title: 'Subscribe',
        description: 'Pick a monthly, quarterly, or annual plan that suits your family best. Quick signup — takes under 2 minutes.',
        color: '#F97316',
    },
    {
        id: 2,
        icon: Package,
        title: 'Receive Your Kit',
        description: 'A beautifully packaged box arrives at your door with recipes, tools, pre-measured ingredients, and access to video tutorials.',
        color: '#EA580C',
    },
    {
        id: 3,
        icon: ChefHat,
        title: 'Cook Together',
        description: 'Follow the step-by-step recipe cards as a family. Each kit is designed for kids aged 4–17 with clear, illustrated instructions.',
        color: '#D97706',
    },
    {
        id: 4,
        icon: PartyPopper,
        title: 'Share & Celebrate',
        description: 'Enjoy your creation together! Share photos, earn badges, and join our online community of young chefs around the world.',
        color: '#F59E0B',
    },
];

export const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-14 lg:py-20 bg-[#FFFBF5] overflow-hidden">
            <div className="container-custom">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
                    <motion.span
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-200 bg-white text-orange-600 font-bold text-xs uppercase tracking-[0.2em]"
                    >
                        How It Works
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight"
                    >
                        Four Simple <span className="gradient-text">Steps</span>
                    </motion.h2>
                </div>

                {/* Timeline — vertical on mobile, horizontal on desktop */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Connecting line */}
                    <div className="hidden lg:block absolute top-[60px] left-[60px] right-[60px] h-[2px] bg-gradient-to-r from-orange-200 via-orange-300 to-amber-200 z-0" />
                    <div className="lg:hidden absolute top-0 bottom-0 left-[30px] w-[2px] bg-gradient-to-b from-orange-200 via-orange-300 to-amber-200 z-0" />

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-6 relative z-10">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <motion.div
                                    key={step.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.12 * index, duration: 0.5 }}
                                    className="relative"
                                >
                                    {/* Mobile: horizontal layout. Desktop: vertical layout */}
                                    <div className="flex lg:flex-col items-start lg:items-center gap-5 lg:gap-4 lg:text-center">
                                        {/* Circle */}
                                        <div className="relative shrink-0">
                                            <div
                                                className="w-[60px] h-[60px] rounded-full flex items-center justify-center bg-white border-[3px] shadow-md transition-all"
                                                style={{ borderColor: step.color }}
                                            >
                                                <Icon size={24} strokeWidth={2} style={{ color: step.color }} />
                                            </div>
                                            <div
                                                className="absolute -top-1.5 -right-1.5 w-7 h-7 rounded-full flex items-center justify-center text-white text-[11px] font-black shadow-md"
                                                style={{ backgroundColor: step.color }}
                                            >
                                                {step.id}
                                            </div>
                                        </div>

                                        {/* Text */}
                                        <div className="space-y-1.5">
                                            <h3 className="text-lg font-black text-gray-900 tracking-tight">{step.title}</h3>
                                            <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
