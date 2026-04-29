import PricingFeature from "./PricingFeature";

const PricingCard = ({ pricing }) => {
  const { name, price, description, features } = pricing;
  return (
    <div className="flex flex-col border-2 border-black bg-[#A78BFA] p-4 mt-4 rounded-3xl">
      {/* card header */}
      <div>
        <h1 className="text-4xl font-semibold">{name}</h1>
        <h3 className="text-2xl font-bold">{price}</h3>
      </div>
      {/* card body */}
      <div className="flex-1 ">
        <p>{description}</p>
        {features.map((feature, index) => (
          <PricingFeature key={index} feature={feature}></PricingFeature>
        ))}
      </div>
      <button
        className="btn w-full text-white bg-black rounded-2xl border-black mt-4
      "
      >
        Subscribe
      </button>
    </div>
  );
};

export default PricingCard;
