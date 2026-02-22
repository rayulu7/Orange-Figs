import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Instagram, Play, Heart, MessageCircle } from 'lucide-react';

const socialPosts = [
    {
        id: 1,
        type: 'video',
        thumbnail: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80',
        likes: '1.2k',
        comments: '45'
    },
    {
        id: 2,
        type: 'video',
        thumbnail: 'https://images.unsplash.com/photo-1590424753062-3251f4912dff?auto=format&fit=crop&q=80',
        likes: '850',
        comments: '22'
    },
    {
        id: 3,
        type: 'video',
        thumbnail: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80',
        likes: '2.1k',
        comments: '110'
    },
    {
        id: 4,
        type: 'video',
        thumbnail: 'https://images.unsplash.com/photo-1588195541006-218206263884?auto=format&fit=crop&q=80',
        likes: '1.5k',
        comments: '64'
    }
];

const SocialCard = ({ post, index }) => {
    const cardRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e) => {
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * index }}
            className="group relative aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-xl bg-gray-100 cursor-pointer hover:shadow-[0_40px_80px_rgba(249,115,22,0.25)] transition-shadow duration-500"
        >
            <div className="absolute inset-0 z-0 h-full w-full">
                <img
                    src={post.thumbnail}
                    alt="Social post"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </div>

            {/* Content Overlay with 3D Pop */}
            <div
                className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6"
                style={{ transform: "translateZ(50px)" }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-orange-950/80 via-orange-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-20 flex flex-col items-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-8 group-hover:translate-y-0">
                    <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="w-16 h-16 rounded-full bg-orange-500/90 backdrop-blur-md flex items-center justify-center text-white shadow-2xl shadow-orange-500/40"
                    >
                        <Play fill="white" size={32} className="ml-1" />
                    </motion.div>

                    <div className="flex gap-6 text-white text-lg font-black tracking-tight">
                        <span className="flex items-center gap-2 drop-shadow-lg"><Heart size={20} className="fill-white" /> {post.likes}</span>
                        <span className="flex items-center gap-2 drop-shadow-lg"><MessageCircle size={20} className="fill-white" /> {post.comments}</span>
                    </div>
                </div>
            </div>

            {/* Social Icon Corner */}
            <div
                className="absolute top-6 right-6 w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white z-20 shadow-xl"
                style={{ transform: "translateZ(30px)" }}
            >
                <Instagram size={24} />
            </div>
        </motion.div>
    );
};

export const SocialVideos = () => {
    return (
        <section className="py-14 lg:py-20 bg-white overflow-hidden">
            <div className="container-custom">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-200 bg-orange-50 text-orange-600 font-bold text-xs uppercase tracking-[0.2em] mb-2"
                    >
                        <Instagram size={16} />
                        Social Feed
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl lg:text-6xl font-black text-gray-900 tracking-tight"
                    >
                        Kitchen in <span className="gradient-text">Motion.</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="pt-2"
                    >
                        <a
                            href="https://www.instagram.com/orangefigs"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-900 text-white px-8 py-3 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-orange-600 transition-all shadow-xl shadow-gray-200 hover:shadow-orange-200 flex items-center gap-3 w-fit mx-auto group"
                        >
                            Follow @orangefigs
                            <Instagram size={18} className="group-hover:rotate-12 transition-transform" />
                        </a>
                    </motion.div>
                </div>

                {/* 3D Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {socialPosts.map((post, index) => (
                        <SocialCard key={post.id} post={post} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};
