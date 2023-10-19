import './App.css';
import MainNavBar from './components/MainNavBar';
import AboutPage from './pages/AboutPage';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div>
      <MainNavBar/>
      <AboutPage />
    </div>
  );
}

export default App;
