import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function App() {
  const [route, setRoute] = useState<string>(() => window.location.hash.replace('#/', '') || 'home');

  useEffect(() => {
    const handleHashChange = () => setRoute(window.location.hash.replace('#/', '') || 'home');
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (route === 'privacy') {
    return (
      <div className="min-h-screen bg-slate-900">
        <Header />
        <Privacy />
        <Footer />
      </div>
    );
  }

  if (route === 'terms') {
    return (
      <div className="min-h-screen bg-slate-900">
        <Header />
        <Terms />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
