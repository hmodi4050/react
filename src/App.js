import './App.css';
import Header from './components/Header'
import HomeRouter from './components/HomeRouter'
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <Header />
      <HomeRouter />
      <Footer />
      {/*
      {false? 'welcome' : <Login />} 
      */}
    </div>
  );
}

export default App;
