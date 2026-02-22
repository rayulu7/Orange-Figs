import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Sparkles, CheckCircle2, ChefHat, Bell, Gift } from 'lucide-react';
import { toast } from 'sonner';

const perks = [
    { icon: Bell, text: 'New workshop announcements' },
    { icon: Gift, text: 'Exclusive subscriber discounts' },
    { icon: ChefHat, text: 'Chef-approved home recipes' },
];

export const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        setSubmitted(true);
        toast.success('Welcome to the Orange Figs family! 🎉');
        setTimeout(() => { setEmail(''); setName(''); setSubmitted(false); }, 4000);
    };

    return (
        <section className="bg-white py-14 lg:py-20 overflow-hidden">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                    className="relative rounded-[3rem] overflow-hidden"
                    style={{
                        background: 'linear-gradient(135deg, #F97316 0%, #EA580C 50%, #D97706 100%)',
                    }}
                >
                    {/* Decorative circles */}
                    <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.15]"
                        style={{ background: 'radial-gradient(circle, #FDE68A, transparent)' }} />
                    <div className="absolute -bottom-40 -left-20 w-[400px] h-[400px] rounded-full opacity-[0.1]"
                        style={{ background: 'radial-gradient(circle, #fff, transparent)' }} />
                    {/* Grid texture */}
                    <div className="absolute inset-0 opacity-[0.04]"
                        style={{
                            backgroundImage: 'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
                            backgroundSize: '40px 40px'
                        }}
                    />

                    <div className="relative z-10 grid lg:grid-cols-2 gap-0 min-h-[520px]">

                        {/* LEFT: Copy */}
                        <div className="flex flex-col justify-center p-12 lg:p-16 xl:p-20 space-y-8">
                            <div>
                                <motion.div
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-6"
                                >
                                    <Sparkles size={14} className="text-amber-200" />
                                    Stay in the Loop
                                </motion.div>
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                    className="text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight"
                                >
                                    Get the Best <br />
                                    <span className="text-amber-200">Delivered</span> <br />
                                    to You.
                                </motion.h2>
                            </div>

                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-white/80 text-lg leading-relaxed max-w-md"
                            >
                                Join 3,000+ parents already receiving weekly updates on workshops, seasonal programmes, and home cooking inspiration.
                            </motion.p>

                            <motion.ul
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="space-y-3"
                            >
                                {perks.map((perk, i) => {
                                    const Icon = perk.icon;
                                    return (
                                        <li key={i} className="flex items-center gap-3 text-white/90 font-medium text-[15px]">
                                            <div className="w-8 h-8 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                                                <Icon size={15} className="text-amber-200" />
                                            </div>
                                            {perk.text}
                                        </li>
                                    );
                                })}
                            </motion.ul>
                        </div>

                        {/* RIGHT: Form */}
                        <div className="flex items-center justify-center p-12 lg:p-16 xl:p-20">
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                                className="w-full max-w-md bg-white rounded-[2.5rem] p-10 shadow-[0_40px_100px_rgba(0,0,0,0.3)]"
                            >
                                {submitted ? (
                                    <div className="text-center py-8 space-y-4">
                                        <CheckCircle2 size={56} className="mx-auto text-orange-500" strokeWidth={1.5} />
                                        <h3 className="text-2xl font-black text-gray-900">You're In!</h3>
                                        <p className="text-gray-500">Welcome to the Orange Figs family. Check your inbox for a welcome surprise!</p>
                                    </div>
                                ) : (
                                    <>
                                        <div className="mb-8 space-y-1">
                                            <h3 className="text-2xl font-black text-gray-900 tracking-tight">Register for Updates</h3>
                                            <p className="text-gray-400 text-sm">No spam, ever. Unsubscribe anytime.</p>
                                        </div>

                                        <form onSubmit={handleSubscribe} className="space-y-4">
                                            <div>
                                                <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-2">Your Name</label>
                                                <input
                                                    type="text"
                                                    placeholder="e.g. Sarah Johnson"
                                                    required
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                    className="w-full h-14 px-5 rounded-2xl border-2 border-gray-100 bg-gray-50 text-gray-900 font-medium text-sm focus:outline-none focus:border-orange-400 transition-colors"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-2">Email Address</label>
                                                <div className="relative">
                                                    <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                                    <input
                                                        type="email"
                                                        placeholder="sarah@example.com"
                                                        required
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        className="w-full h-14 pl-12 pr-5 rounded-2xl border-2 border-gray-100 bg-gray-50 text-gray-900 font-medium text-sm focus:outline-none focus:border-orange-400 transition-colors"
                                                    />
                                                </div>
                                            </div>

                                            <button
                                                type="submit"
                                                className="w-full h-14 rounded-2xl font-black text-base text-white shadow-xl shadow-orange-500/30 transition-all active:scale-[0.98] hover:opacity-90 mt-2"
                                                style={{ background: 'linear-gradient(135deg, #F97316, #EA580C)' }}
                                            >
                                                Subscribe Now →
                                            </button>

                                            <p className="text-center text-gray-400 text-xs font-medium">
                                                Join 3,000+ parents already subscribed.
                                            </p>
                                        </form>
                                    </>
                                )}
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
