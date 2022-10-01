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

import logo from './logo.svg';

function App() {
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
