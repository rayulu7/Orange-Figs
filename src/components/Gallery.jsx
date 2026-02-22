import React, { useState, useRef } from 'react';
import { galleryImages } from '../data/mock';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ZoomIn } from 'lucide-react';

const GalleryItem = ({ image, index }) => {
    const cardRef = useRef(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
    const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

    function handleMouseMove(e) {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    }

    const isLarge = index === 0 || index === 5 || index === 8;

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
                delay: 0.1 * index,
                duration: 0.6,
                ease: [0.23, 1, 0.32, 1]
            }}
            className={`group relative rounded-[2.5rem] overflow-hidden bg-gray-100 cursor-pointer shadow-[0_15px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_rgba(249,115,22,0.15)] transition-all duration-700 
                ${isLarge ? 'md:col-span-2 md:row-span-2 aspect-[4/3]' : 'aspect-[1/1]'}`}
        >
            <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />

            {/* Interactive Spotlight Effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                style={{
                    background: `radial-gradient(600px circle at ${springX}px ${springY}px, rgba(249, 115, 22, 0.15), transparent 80%)`,
                }}
            />

            {/* Content Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-orange-900/90 via-orange-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 z-20">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h4 className="text-xl font-black text-white mb-2">{image.title}</h4>
                    <div className="flex items-center gap-2 text-amber-300 font-bold text-[10px] uppercase tracking-widest">
                        <ZoomIn size={14} /> View Moment
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export const Gallery = () => {
    return (
        <section id="gallery" className="py-14 lg:py-20 bg-white overflow-hidden">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                    <motion.span
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-200 bg-orange-50 text-orange-600 font-bold text-xs uppercase tracking-[0.2em]"
                    >
                        Our Moments
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl lg:text-6xl font-black text-gray-900 leading-tight tracking-tight"
                    >
                        Capturing the <span className="gradient-text">Joy.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-base text-gray-500"
                    >
                        Success isn't just about the recipe; it's about the smiles, the focus, and the friendships formed.
                    </motion.p>
                </div>

                {/* Premium Bento/Masonry Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-fr">
                    {galleryImages.slice(0, 7).map((image, index) => (
                        <GalleryItem key={image.id} image={image} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};
