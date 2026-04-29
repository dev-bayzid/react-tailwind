import { use } from "react";
import PricingCard from "../PricingCard/PricingCard";

const PricingOption = ({ pricingPromise }) => {
  const pricingData = use(pricingPromise);
  
  return (
      <div>
        <h2 className="text-4xl text-center mt-10 font-semibold">Get our Memberhip</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {
            pricingData.map(pricing => <PricingCard key={pricing.id} pricing={pricing}></PricingCard>)
          }
        </div>
      </div>

  )
  
};

export default PricingOption;
