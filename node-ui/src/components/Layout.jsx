import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
            <div className="w-full max-w-3xl px-4 sm:px-6 lg:px-8 py-8">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="p-6">{children}</div>
            </div>
            </div>
        </main>
        <Footer />
        </div>
    );
}

export default Layout;