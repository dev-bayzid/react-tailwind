import PricingFeature from "./PricingFeature";

const PricingCard = ({ pricing }) => {
  const { name, price, description, features } = pricing;
  return (
    <div className="border-2 border-black bg-[#A78BFA] p-4 mt-4 rounded-3xl">
      {/* card header */}
      <div>
        <h1 className="text-4xl font-semibold">{name}</h1>
        <h3 className="text-2xl font-bold">{price}</h3>
      </div>
      {/* card body */}
      <div>
        <p>{description}</p>
        {features.map((feature, index) => (
          <PricingFeature key={index} feature={feature}></PricingFeature>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
