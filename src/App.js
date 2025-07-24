import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { I18nextProvider } from 'react-i18next';
import store from './redux/store';
import { ThemeProvider } from './contexts/ThemeContext';
import i18n from './i18n';
import GlobalStyles from './styles/GlobalStyles';
import Navigation from './components/Navigation';
import ScrollToTop from './components/ScrollToTop';
import ButterflyEffect from './components/ButterflyEffect';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <HelmetProvider>
          <ThemeProvider>
            <GlobalStyles />
            <ButterflyEffect />
            <Router>
              <ScrollToTop />
              <div className="App">
                <Navigation />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/experience" element={<Experience />} />
                  <Route path="/skills" element={<Skills />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                </Routes>
              </div>
            </Router>
          </ThemeProvider>
        </HelmetProvider>
      </I18nextProvider>
    </Provider>
  );
}

export default App;