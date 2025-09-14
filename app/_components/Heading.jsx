import GradientText from "./GradientText";
 
const Heading = ({ content }) => {
  return (
    <>
      <GradientText
        colors={["#818181", "#E7E7E7", "#818181", "#E7E7E7", "#818181"]}
        animationSpeed={10}
        showBorder={false}
        className="custom-class font-clash-displaybold lg:text-[1.7rem]"
      >
        { content }
      </GradientText>
    </>
  );
};

export default Heading;
