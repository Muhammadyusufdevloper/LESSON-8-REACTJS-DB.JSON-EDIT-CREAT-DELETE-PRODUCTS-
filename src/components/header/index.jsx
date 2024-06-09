import{ useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    const [shrink, setShrink] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 60) {
                setShrink(true);
            } else {
                setShrink(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header className={`sticky top-0 left-0 py-5 z-50 bg-slate-600 ${shrink ? "shadow-lg" : ""} mb-11`}>
                <div className="max-w-7xl mx-auto px-5">
                    <nav className="flex items-center justify-between gap-5">
                        <Link to="/"><h1 className="text-2xl font-bold text-white">Logoo</h1></Link>
                        <ul className="flex items-center justify-between gap-6">
                            <li className="">
                                <Link to="/create-product" className="text-base font-normal text-white">Create product</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Header;
