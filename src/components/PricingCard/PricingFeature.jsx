import { CircleCheck } from "lucide-react";


const PricingFeature = ({feature}) => {
    return (
        <p className="flex mt-2 font-bold"><CircleCheck className="mr-2"></CircleCheck> {feature}</p>
    );
};

export default PricingFeature;