export default function Home() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6">
        <h1 className="text-5xl font-bold mb-4 animate-fade-in">Welcome to Our Website</h1>
        <p className="text-lg mb-6 text-center max-w-lg animate-slide-up">
          Experience the best services with us. Join us today and explore amazing features designed just for you.
        </p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-gray-200 transition-transform transform hover:scale-105 animate-bounce">
          Get Started
        </button>
      </div>
    );
  }
  