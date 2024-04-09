import "./App.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import {
  Hero,
  Form,
  About,
  CarCollections,
  HowItWorks,
  Services,
  Testimonals,
  DownloadApp,
  Footer,
} from "./component";
function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <Hero />
      <Form />
      <About />
      <CarCollections />
      <HowItWorks />
      <Services />
      <Testimonals />
      <DownloadApp />
      <Footer />
    </>
  );
}

export default App;
