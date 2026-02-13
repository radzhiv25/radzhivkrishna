import { motion } from "framer-motion";

export default function SectionDivider({ label = null }) {
    return (
        <motion.div
            className="flex items-center justify-center gap-4 my-16 md:my-24 py-8 md:py-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
        >
            {/* Left Dashed Line */}
            <div className="hidden md:flex flex-1 dashed-border-horizontal"></div>
            
            {/* Label with Dashed Box */}
            {label && (
                <motion.div
                    className="dashed-border-box px-6 py-3 md:px-8 md:py-4"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <p className="section-label">{label}</p>
                </motion.div>
            )}
            
            {/* Right Dashed Line */}
            <div className="hidden md:flex flex-1 dashed-border-horizontal"></div>
        </motion.div>
    );
}
