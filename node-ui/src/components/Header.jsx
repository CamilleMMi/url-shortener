import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Header() {
    return (
        <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-primary-600 hover:text-primary-800 transition-colors">
                    <a href="/">URL Shortener</a>
                </h1>
                <nav>
                    <ul className="flex space-x-4">
                    <li>
                        <a
                        href="https://github.com/CamilleMMi"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="text-gray-600 hover:text-primary-600 transition-colors"
                        >
                        <FaGithub size={24} />
                        </a>
                    </li>
                    <li>
                        <a
                        href="https://www.linkedin.com/in/camille-michaud-meli/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="text-gray-600 hover:text-primary-600 transition-colors"
                        >
                        <FaLinkedin size={24} />
                        </a>
                    </li>
                    </ul>
                </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;