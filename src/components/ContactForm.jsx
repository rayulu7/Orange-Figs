import React, { useState } from 'react';
import { Mail, MapPin, MessageCircle, ArrowRight, User, AtSign, PhoneCall, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Card } from './ui/card';
import { toast } from 'sonner';
import { classesData, contactInfo } from '../data/mock';
import { motion, AnimatePresence } from 'framer-motion';

export const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        parentName: '',
        email: '',
        phone: '',
        childName: '',
        childAge: '',
        selectedClass: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);
        toast.success("Inquiry Sent Successfully!", {
            description: "We'll get back to you within 24 hours.",
        });
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <section id="contact" className="section-padding bg-gradient-to-b from-white to-orange-50/30 relative overflow-hidden">
            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-20">
                    {/* Left: Contact Info */}
                    <div className="space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-200 bg-orange-50 text-orange-600 font-bold text-xs uppercase tracking-[0.2em]">
                                Join Our Community
                            </div>
                            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 leading-tight tracking-tight">
                                Start Your <br />
                                <span className="gradient-text">Culinary Journey.</span>
                            </h2>
                            <p className="text-xl text-gray-500 leading-relaxed max-w-md">
                                Experience the Orange Figs difference. Book a trial or send us your questions today.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <motion.div variants={itemVariants} className="flex items-center gap-6 group">
                                <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center text-orange-500 group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:to-orange-600 group-hover:text-white transition-all duration-500 group-hover:rotate-6 group-hover:shadow-orange-500/20">
                                    <Mail size={28} />
                                </div>
                                <div>
                                    <div className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Email Us</div>
                                    <div className="text-xl font-bold text-gray-900">{contactInfo.email}</div>
                                </div>
                            </motion.div>

                            <motion.div variants={itemVariants} className="flex items-center gap-6 group">
                                <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center text-orange-500 group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:to-orange-600 group-hover:text-white transition-all duration-500 group-hover:rotate-6 group-hover:shadow-orange-500/20">
                                    <PhoneCall size={28} />
                                </div>
                                <div>
                                    <div className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Call Us</div>
                                    <div className="text-xl font-bold text-gray-900">{contactInfo.phone}</div>
                                </div>
                            </motion.div>

                            <motion.div variants={itemVariants} className="flex items-center gap-6 group">
                                <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center text-orange-500 group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:to-orange-600 group-hover:text-white transition-all duration-500 group-hover:rotate-6 group-hover:shadow-orange-500/20">
                                    <MapPin size={28} />
                                </div>
                                <div>
                                    <div className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Visit Us</div>
                                    <div className="text-xl font-bold text-gray-900">{contactInfo.address}</div>
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-[32px] bg-orange-50 border border-orange-100 inline-block"
                        >
                            <div className="flex items-center gap-4 text-orange-600">
                                <MessageCircle size={32} />
                                <div className="text-sm font-bold uppercase tracking-widest">Enrollment Team Standing By</div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Form Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <Card className="p-10 lg:p-12 rounded-[40px] border-none shadow-[0_50px_100px_rgba(249,115,22,0.08)] bg-white relative z-10 transition-all duration-500">
                            <AnimatePresence mode="wait">
                                {!isSubmitted ? (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        onSubmit={handleSubmit}
                                        className="space-y-8"
                                    >
                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="space-y-3">
                                                <Label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Parent Name</Label>
                                                <div className="relative">
                                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                                    <Input name="parentName" value={formData.parentName} onChange={handleChange} required className="h-14 pl-12 rounded-2xl bg-gray-50 border-none focus:ring-2 ring-orange-300/40 font-medium" placeholder="Full Name" />
                                                </div>
                                            </div>
                                            <div className="space-y-3">
                                                <Label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</Label>
                                                <div className="relative">
                                                    <AtSign className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                                    <Input name="email" value={formData.email} onChange={handleChange} required type="email" className="h-14 pl-12 rounded-2xl bg-gray-50 border-none focus:ring-2 ring-orange-300/40 font-medium" placeholder="your@email.com" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="space-y-3">
                                                <Label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Child's Name</Label>
                                                <Input name="childName" value={formData.childName} onChange={handleChange} required className="h-14 px-6 rounded-2xl bg-gray-50 border-none focus:ring-2 ring-orange-300/40 font-medium" placeholder="Name" />
                                            </div>
                                            <div className="space-y-3">
                                                <Label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Child's Age</Label>
                                                <Input name="childAge" value={formData.childAge} onChange={handleChange} required type="number" className="h-14 px-6 rounded-2xl bg-gray-50 border-none focus:ring-2 ring-orange-300/40 font-medium" placeholder="Age" />
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <Label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Preferred Program</Label>
                                            <select name="selectedClass" value={formData.selectedClass} onChange={handleChange} required className="w-full h-14 px-6 rounded-2xl bg-gray-50 border-none focus:ring-2 ring-orange-300/40 font-medium appearance-none">
                                                <option value="">Select a Program</option>
                                                {classesData.map(c => (
                                                    <option key={c.id} value={c.title}>{c.title}</option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className="space-y-3">
                                            <Label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Your Message</Label>
                                            <Textarea name="message" value={formData.message} onChange={handleChange} required className="min-h-[120px] p-6 rounded-2xl bg-gray-50 border-none focus:ring-2 ring-orange-300/40 font-medium" placeholder="Share any dietary restrictions or special interests..." />
                                        </div>

                                        <Button
                                            disabled={isSubmitting}
                                            className="w-full h-16 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-black text-lg shadow-xl shadow-orange-500/25 hover:shadow-2xl hover:shadow-orange-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 group"
                                        >
                                            {isSubmitting ? (
                                                <span className="flex items-center gap-2">
                                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                    Processing...
                                                </span>
                                            ) : (
                                                <span className="flex items-center gap-2">
                                                    Book Free Trial Class
                                                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                                                </span>
                                            )}
                                        </Button>
                                    </motion.form>
                                ) : (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="py-16 text-center space-y-8"
                                    >
                                        <div className="w-24 h-24 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                                            <CheckCircle2 size={48} />
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="text-4xl font-black text-gray-900">Application Sent!</h3>
                                            <p className="text-gray-500 text-lg">
                                                Thank you, {formData.parentName}. We've received your request for {formData.childName} and will contact you shortly.
                                            </p>
                                        </div>
                                        <Button
                                            variant="outline"
                                            onClick={() => setIsSubmitted(false)}
                                            className="h-12 px-8 rounded-xl font-bold border-2 border-orange-200 text-orange-500 hover:bg-orange-50"
                                        >
                                            Submit Another Request
                                        </Button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </Card>

                        {/* Background glow */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-400/15 rounded-full blur-[40px] -z-10" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-amber-400/10 rounded-full blur-[50px] -z-10" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
