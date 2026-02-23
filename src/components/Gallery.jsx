import React, { useState, useRef } from "react";
import { galleryImages } from "../data/mock";
import {
    motion,
    AnimatePresence,
    useMotionValue,
    useSpring,
} from "framer-motion";
import { ZoomIn, X } from "lucide-react";

const GalleryItem = ({ image, index, open }) => {
    const cardRef = useRef(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { stiffness: 120, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 120, damping: 20 });

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };

    const isLarge = index === 0 || index === 4;

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onClick={() => open(image)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.07 }}
            whileHover={{ y: -8 }}
            className={`group relative cursor-pointer rounded-2xl overflow-hidden bg-gray-100 shadow-sm hover:shadow-[0_25px_60px_rgba(249,115,22,0.15)] transition-all duration-500
      ${isLarge ? "md:col-span-2 md:row-span-2 aspect-[4/3]" : "aspect-square"}`}
        >
            <motion.img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.6 }}
            />

            {/* Soft Spotlight */}
            <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(400px circle at ${springX}px ${springY}px, rgba(249,115,22,0.18), transparent 70%)`,
                }}
            />

            {/* Minimal Hover Label */}
            <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold">
                    <ZoomIn size={14} />
                    View
                </div>
            </div>
        </motion.div>
    );
};

export const Gallery = () => {
    const [activeImage, setActiveImage] = useState(null);

    return (
        <section id="gallery" className="pt-24 pb-0 bg-white border-t border-orange-100">
            <div className="container-custom">

                {/* HEADER */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="inline-flex px-4 py-2 text-xs font-semibold uppercase tracking-widest text-orange-600 border border-orange-200 rounded-full">
                        Our Moments
                    </span>

                    <h2 className="mt-6 text-4xl lg:text-6xl font-black tracking-tight">
                        Capturing the{" "}
                        <span className="text-orange-500">Joy</span>
                    </h2>

                    <p className="mt-4 text-gray-500">
                        It’s not just about recipes — it’s about smiles, focus, and friendships.
                    </p>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 auto-rows-fr">
                    {galleryImages.slice(0, 8).map((image, index) => (
                        <GalleryItem
                            key={image.id}
                            image={image}
                            index={index}
                            open={setActiveImage}
                        />
                    ))}
                </div>
            </div>

            {/* LIGHTBOX MODAL */}
            <AnimatePresence>
                {activeImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setActiveImage(null)}
                        className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-6"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            className="relative max-w-4xl w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setActiveImage(null)}
                                className="absolute -top-12 right-0 text-white hover:text-orange-400 transition"
                            >
                                <X size={28} />
                            </button>

                            <img
                                src={activeImage.url}
                                alt={activeImage.title}
                                className="w-full rounded-2xl shadow-2xl"
                            />

                            <div className="mt-6 text-center text-white">
                                <h4 className="text-xl font-semibold">
                                    {activeImage.title}
                                </h4>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};