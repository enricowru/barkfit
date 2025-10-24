import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Woofouts from './components/Woofouts';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/woofouts" element={<Woofouts />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

// Header Component
function Header() {
  const location = useLocation();
  
  return (
    <header className="bg-black w-full sticky top-0 z-50">
      <div className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="block">
            <img 
              src="/images/logos/logo.jpg" 
              alt="BarkFit Logo" 
              className="h-15 w-auto max-w-32 object-contain transition-transform duration-300 hover:scale-105"
            />
          </Link>
        </div>
        
        {/* Navigation */}
        <nav className="flex gap-12 flex-1 justify-center">
          <Link 
            to="/" 
            className={`text-white font-bold text-base tracking-wider uppercase transition-colors duration-300 hover:text-barkfit-gold ${
              location.pathname === '/' ? 'text-barkfit-gold underline' : ''
            }`}
          >
            HOME
          </Link>
          <Link 
            to="/woofouts" 
            className={`text-white font-bold text-base tracking-wider uppercase transition-colors duration-300 hover:text-barkfit-gold ${
              location.pathname === '/woofouts' ? 'text-barkfit-gold underline' : ''
            }`}
          >
            WOOFOUTS
          </Link>
          <Link 
            to="/contact" 
            className={`text-white font-bold text-base tracking-wider uppercase transition-colors duration-300 hover:text-barkfit-gold ${
              location.pathname === '/contact' ? 'text-barkfit-gold underline' : ''
            }`}
          >
            CONTACT US
          </Link>
        </nav>
        
        {/* Login Section */}
        <div className="flex items-center gap-6 flex-shrink-0">
          <Link to="/login" className="flex items-center gap-2 text-white transition-opacity duration-300 hover:opacity-80">
            <div className="text-base">👤</div>
            <span className="text-white font-bold text-sm tracking-wider uppercase">LOGIN</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

// Home Page Component
function HomePage() {
  return (
    <main className="flex-1 bg-gradient-to-br from-barkfit-gray to-barkfit-dark py-8 h-[calc(100vh-80px)] overflow-hidden">
      <div className="max-w-[95vw] mx-auto px-8 flex flex-col items-center justify-center h-[calc(100vh-120px)] text-center">
        {/* Text Section */}
        <div className="py-4 w-full max-w-full mx-auto">
          <h1 className="font-serif text-6xl font-bold text-white mb-4 -mt-8 leading-tight text-shadow-lg">
            BarkFit
          </h1>
          <p className="text-xl leading-relaxed text-white max-w-full mx-auto mb-4 text-justify text-center px-4">
            At BarkFit, we believe a healthy dog is a happy dog. Our comprehensive fitness platform is designed to transform your furry friend's life through expertly crafted exercise routines, personalized nutrition plans, and innovative wellness programs. We understand that every dog is unique, which is why our certified canine fitness trainers have developed specialized workout regimens that cater to different breeds, ages, and fitness levels.
          </p>
          <p className="text-xl leading-relaxed text-white max-w-full mx-auto mb-4 text-justify text-center px-4">
            From high-energy puppies who need structured playtime to senior dogs requiring gentle mobility exercises, BarkFit provides the perfect solution for every stage of your dog's life. Our state-of-the-art facilities feature cutting-edge equipment specifically designed for canine fitness, including specialized treadmills, agility courses, and strength training apparatus that ensure safe and effective workouts.
          </p>
          <p className="text-xl leading-relaxed text-white max-w-full mx-auto mb-4 text-justify text-center px-4">
            Beyond physical fitness, BarkFit focuses on mental stimulation and emotional well-being. Our programs include interactive games, puzzle-solving activities, and socialization opportunities that keep your dog's mind sharp and spirits high. We also offer comprehensive nutritional counseling, weight management programs, and preventive health screenings to ensure your beloved companion enjoys a long, vibrant, and healthy life.
          </p>
          <p className="text-xl leading-relaxed text-white max-w-full mx-auto mb-4 text-justify text-center px-4">
            Join thousands of satisfied pet parents who have witnessed remarkable transformations in their dogs' energy levels, behavior, and overall quality of life. Whether your pup needs to shed a few pounds, build endurance, recover from injury, or simply maintain peak fitness, BarkFit makes it easy for every dog to live their healthiest, happiest, and most tail-wagging life possible.
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
