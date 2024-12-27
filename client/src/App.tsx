import { Outlet } from 'react-router-dom';
import Nav from './components/Navigation.tsx';
import Footer from './components/Footer.tsx';

function App() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer /> 
    </>
  );
}

export default App;