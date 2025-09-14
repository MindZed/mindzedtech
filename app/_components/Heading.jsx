import GradientText from "./GradientText";
 
const Heading = ({ content, className}) => {
  return (
    <>
      <GradientText
        colors={["#818181", "#E7E7E7", "#818181", "#E7E7E7", "#818181"]}
        animationSpeed={10}
        showBorder={false}
        className={` font-clash-displaybold lg:text-[1.7rem] ${className}`}
      >
        { content }
      </GradientText>
    </>
  );
};

export default Heading;
