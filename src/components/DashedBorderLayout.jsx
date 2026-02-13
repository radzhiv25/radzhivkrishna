import { motion } from "framer-motion";

export default function DashedBorderLayout({ children }) {
    return (
        <div className="relative w-full">
            {/* Background vertical dashed borders framing the content */}
            <div className="hidden lg:grid absolute inset-0 pointer-events-none" style={{
                gridTemplateColumns: "1fr minmax(0, 800px) 1fr"
            }}>
                {/* Left divider */}
                <div className="border-r-2 border-dashed border-gray-300 dark:border-gray-700"></div>
                {/* Center - no border */}
                <div></div>
                {/* Right divider */}
                <div className="border-l-2 border-dashed border-gray-300 dark:border-gray-700"></div>
            </div>

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
}
