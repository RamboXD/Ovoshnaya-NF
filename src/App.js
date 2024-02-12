import Footer from './components/Footer';
import { Header } from './components/Header';
import Showcase from './components/Showcase';

function App() {
  return (
    <div
      style={{
        display: 'grid',
        height: '100vh',
        gridTemplateRows: '50px 1fr 50px',
      }}
    >
      <Header />
      <Showcase />
      <Footer />
    </div>
  );
}

export default App;
