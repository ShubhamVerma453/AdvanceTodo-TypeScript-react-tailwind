import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

function useDarkMode():[Theme, () => void] {
    const [theme, setTheme] = useState<Theme>(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme && (storedTheme === 'light' || storedTheme === 'dark')) {
            return storedTheme;
        }
        return 'light';
    });

    const toggleTheme = () => {
        const newTheme: Theme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    useEffect(() => {
        // Toggle Tailwind CSS classes based on the theme
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            document.body.style.backgroundColor = "#2b2c37";
        } else {
            document.documentElement.classList.remove('dark');
            document.body.style.backgroundColor = "white";
        }
    }, [theme]);

    return [theme, toggleTheme];
}

export default useDarkMode;
