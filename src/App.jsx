import Layout from '../src/components/ui/Layout';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Footer from './Footer/Footer';

function App() {
  return (
    <main>
      <Navbar />
      <Layout>
        <Hero />
      </Layout>
      <Footer />
    </main>
  );
}

export default App;
