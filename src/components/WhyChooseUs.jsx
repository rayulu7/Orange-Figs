import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, ShieldCheck, HeartPulse, Award, Star, ArrowUpRight } from 'lucide-react';

const reasons = [
    {
        id: 1,
        icon: UserCheck,
        number: '01',
        title: 'Expert Instructors',
        description: 'Guided by Michelin-experienced chefs who specialize in child development. Every instructor is passionate, certified, and dedicated to your child\'s growth.',
        color: '#F97316',
        highlight: true,
        image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80',
    },
    {
        id: 2,
        icon: ShieldCheck,
        number: '02',
        title: 'Safety First, Always',
        description: 'State-of-the-art kitchen with induction heating, age-appropriate tools, and rigorous hygiene standards. Every detail is designed for safe, joyful learning.',
        color: '#EA580C',
    },
    {
        id: 3,
        icon: HeartPulse,
        number: '03',
        title: 'Healthy Habits for Life',
        description: 'We cultivate a deep love for fresh, whole ingredients — building nutritional literacy that goes far beyond any single recipe.',
        color: '#D97706',
    },
    {
        id: 4,
        icon: Award,
        number: '04',
        title: 'Award-Winning Curriculum',
        description: 'Nationally recognised for blending creativity, nutrition, and technique into a programme that consistently produces confident young cooks.',
        color: '#F59E0B',
    },
];

const stats = [
    { value: '1,200+', label: 'Happy Students' },
    { value: '15+', label: 'Master Chefs' },
    { value: '4.9 / 5', label: 'Parent Rating' },
    { value: '50+', label: 'Workshops Run' },
    { value: '6 yrs', label: 'Of Excellence' },
];

export const WhyChooseUs = () => {
    return (
        <section id="why" className="bg-[#FFFBF5] py-20 lg:py-32 overflow-hidden relative border-t border-orange-100/50">

            {/* Background watermark text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                <span className="text-[20vw] font-black text-orange-500/[0.03] leading-none whitespace-nowrap tracking-tighter">
                    DIFFERENCE
                </span>
            </div>

            <div className="container-custom relative z-10">

                {/* HEADER */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
                    <div className="space-y-5">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.25em] text-orange-600 border border-orange-200 bg-white px-4 py-2 rounded-full shadow-sm"
                        >
                            Why Orange Figs
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl lg:text-7xl font-black text-gray-900 leading-[1.05] tracking-tight"
                        >
                            The Orange Figs <br />
                            <span className="text-orange-500">Difference.</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-500 max-w-sm leading-relaxed text-lg lg:text-right"
                    >
                        We don't just teach cooking — we build confidence, creativity, and healthy habits that last a lifetime.
                    </motion.p>
                </div>

                {/* BENTO GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">

                    {/* Card 1 — Large feature card with image */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                        className="lg:col-span-5 lg:row-span-2 relative rounded-[3rem] overflow-hidden min-h-[500px] group shadow-premium"
                    >
                        <img
                            src={reasons[0].image}
                            alt={reasons[0].title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                        {/* Content */}
                        <div className="absolute inset-0 p-10 flex flex-col justify-between">
                            <div className="flex items-center justify-between relative z-10">
                                <span className="text-7xl font-black text-white/20">01</span>
                                <div className="w-14 h-14 rounded-2xl bg-orange-500 flex items-center justify-center text-white shadow-xl shadow-orange-500/30">
                                    <UserCheck size={26} strokeWidth={2.5} />
                                </div>
                            </div>
                            <div className="space-y-4 relative z-10">
                                <div className="flex items-center gap-1 mb-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                                    ))}
                                    <span className="text-white/80 text-[10px] font-black uppercase tracking-widest ml-2">Parent Rated #1</span>
                                </div>
                                <h3 className="text-3xl font-black text-white leading-tight tracking-tight">
                                    Expert Instructors
                                </h3>
                                <p className="text-white/80 text-sm leading-relaxed max-w-md">
                                    Guided by Michelin-experienced chefs who specialize in child development. Passionate, certified, and dedicated to every young chef's growth.
                                </p>
                                <div className="inline-flex items-center gap-2 text-orange-400 font-black text-xs uppercase tracking-widest group-hover:gap-3 transition-all">
                                    Learn more <ArrowUpRight size={16} />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Cards 2, 3, 4 */}
                    {reasons.slice(1).map((reason, index) => {
                        const Icon = reason.icon;
                        return (
                            <motion.div
                                key={reason.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * (index + 1), duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                                className="lg:col-span-7 group relative rounded-[2.5rem] bg-white border border-gray-100 hover:border-orange-200 shadow-sm hover:shadow-premium transition-all duration-500 p-10 flex flex-col md:flex-row gap-8 items-start cursor-default overflow-hidden"
                            >
                                {/* Number watermark */}
                                <span className="absolute right-8 bottom-4 text-9xl font-black text-gray-100 pointer-events-none select-none leading-none opacity-50">
                                    {reason.number}
                                </span>

                                {/* Icon */}
                                <div
                                    className="relative shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300"
                                    style={{ backgroundColor: reason.color }}
                                >
                                    <Icon size={28} strokeWidth={2.5} />
                                </div>

                                {/* Content */}
                                <div className="space-y-3 relative z-10">
                                    <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                                        {reason.title}
                                    </h3>
                                    <p className="text-gray-500 leading-relaxed text-base max-w-lg">
                                        {reason.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* STATS BAR */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="mt-6 rounded-[2.5rem] bg-white border border-gray-100 px-10 py-10 grid grid-cols-2 md:grid-cols-5 gap-10 shadow-sm"
                >
                    {stats.map((stat, i) => (
                        <div key={i} className="text-center space-y-2">
                            <div
                                className="text-4xl lg:text-5xl font-black tracking-tighter"
                                style={{ color: ['#F97316', '#EA580C', '#D97706', '#F59E0B', '#FB923C'][i] }}
                            >
                                {stat.value}
                            </div>
                            <div className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-400">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </motion.div>

            </div>
        </section >
    );
};
