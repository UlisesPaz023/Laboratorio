import './App.css';
import Navbar from './components/Navbar.tsx';
import MainSection from './components/MainSection.tsx';
import ServiceSection from './components/ServiceSection/ServiceSection.tsx';
import TeamSection from './components/TeamSection/TeamSection.tsx';
import FaqSection from './components/FaqSection/FaqSection.tsx';
import ContactSection from './components/ContactSection/ContactSection.tsx';
import Footer from './components/Footer.tsx'
import PatientLogin from './pages/PatientLogin.tsx';
import PatientDashboard from './pages/PatientDashboard/PatientDashboard.tsx';
import SecretaryLogin from './pages/SecretaryLogin.tsx';
import SecretaryDashboard from './pages/SecretaryDashboard/SecretaryDashboard.tsx';
import { 
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

function App() {
  const location = useLocation();
  const hideLayoutRoutes = ['/paciente/dashboard', '/secretario/dashboard'];
  const hideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <div>
      {!hideLayout && <Navbar />}
        <Routes>
          <Route
            path="/"
            element = {
              <>
                <MainSection id="inicio"/>
                <ServiceSection id="servicios"/>
                <TeamSection id="equipo"/>
                <FaqSection id="faq"/>
                <ContactSection id="contacto"/>
              </>
            }
          />
          <Route path="/paciente/login" element={<PatientLogin/>}/>
          <Route path="/secretario/login" element={<SecretaryLogin/>}/>
          <Route path="/paciente/dashboard" element={<PatientDashboard/>}/>
          <Route path="/secretario/dashboard" element={<SecretaryDashboard/>}/>
        </Routes>
      {!hideLayout && <Footer/>}
    </div>
  );
}

export default App;
