import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const SplashScreen = ({ onComplete }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Complete loading after 2-3 seconds
        const timer = setTimeout(() => {
            setTimeout(() => {
                setIsVisible(false);
                setTimeout(() => {
                    onComplete?.();
                }, 500); // Wait for fade out animation
            }, 200);
        }, 2500);

        return () => {
            clearTimeout(timer);
        };
    }, [onComplete]);

    if (!isVisible) return null;

    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'
            } bg-white dark:bg-black splash-fade-in`}>
            <div className="text-center">
                {/* Logo/Name */}
                <div className="mb-8">
                    <h1 className="text-5xl md:text-6xl font-bold md:mb-4 splash-pulse text-black dark:text-white font-caveat">
                        You made it!
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400">
                        Let&apos;s make the web experience smoother
                    </p>
                </div>

                {/* Made with love */}
                <div className="">
                    <p className="text-sm text-gray-400">
                        made with ❤️ by Rajeev
                    </p>
                </div>
            </div>
        </div>
    );
};

SplashScreen.propTypes = {
    onComplete: PropTypes.func
};

export default SplashScreen;
