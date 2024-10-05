import '../css/ProgressBar.css'

import React, { useEffect, useState } from 'react';

const ProgressBar = () => {
    const [scrollWidth, setScrollWidth] = useState(0);

    const handleScroll = () => {
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / totalHeight) * 100;
        setScrollWidth(scrolled);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="progress-bar">
            <div
                className="filled"
                style={{ width: `${scrollWidth}%` }}
            />
        </div>
    );
};

export default ProgressBar;
