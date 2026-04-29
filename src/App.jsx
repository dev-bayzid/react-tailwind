import { Suspense } from "react";
import "./App.css";
// import DaisyNav from "./components/Navbar/DaisyNav";
import Navbar from "./components/Navbar/Navbar";
import PricingData from "./components/Pricing/PricingOption";

const pricingPromise= fetch('pricingData.json').then(res => res.json());

function App() {
  return (
    <>
      <header>
        <Navbar></Navbar>
        {/* <DaisyNav></DaisyNav> */}
      </header>

    <main>
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <PricingData pricingPromise={pricingPromise}></PricingData>
      </Suspense>
    </main>

    </>
  );
}

export default App;
