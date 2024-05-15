import Layout from '../src/components/ui/Layout';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Footer from './Footer/Footer';
import SliderComponent from './components/Sections/SliderComponent';
import Products from './components/Sections/Products';

function App() {
  return (
    <main>
      <Navbar />
      <Layout>
        <Hero />
        <SliderComponent />
        <Products />
      </Layout>
      <Footer />
    </main>
  );
}

export default App;
