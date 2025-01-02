import { Outlet } from 'react-router-dom';

import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js';

const App = () => {
  return (
    <div>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
};
export default App
