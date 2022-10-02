import {
  Brands,
  Cta,
  Feature1,
  Feature2,
  Feature3,
  Footer,
  Header,
  Hero,
  Overview,
  Pricing,
  Product,
  Testimonials,
} from './components';

import Aos from 'aos';
import 'aos/dist/aos.css';
import logo from './logo.svg';

function App() {
  Aos.init({ duration: 1800, offset: 100 });
  return (
    <div className=''>
      <Header />
      <Hero />
      <Overview />
      <Brands />

      <Feature1 />

      <Feature2 />
      <Feature3 />
      <Product />
      <Pricing />
      <Testimonials />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
