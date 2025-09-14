import Button from "./_components/Button";
import Heading from "./_components/Heading";
import LaserFlow from "./_components/LaserFlow";


const Home = () => {
  return (
    <div>
      <div
        className="h-[90vh] lg:h-[200vh] overflow-hidden relative"
        style={{}}
      >
        <LaserFlow
          className={"absolute top-0 "}
          color={"#B33030"}
          mouseTiltStrength={0.05}
          verticalSizing={5}
        />

        {/*******************  TAGLINE DIV **************/}

        <div className="tagline absolute top-[25%] translate-y-[-50%] mx-10">
          <Heading content="TURNING CREATIVE MINDS INTO" />
          <h1 className="font-clash-displaybold lg:text-[5.2rem] lg:leading-[76%] lg:tracking-[-0.06rem]">
            <span className="text-zWhite">DIGITAL</span> <br />
            <span className="text-primaryRed">SOLUTION</span>
          </h1>
        </div>

        {/*******************  $$$  **************/}

        {/*******************  SUPPORT TEXT DIV **************/}
        <div className="support absolute top-[25.5%] right-0 translate-y-[-50%] mx-10 w-[25rem]">
          <p className="font-satoshi font-normal text-zWhite lg:leading-[120%] lg:text-lg ">We bring together creative minds and advanced technology to design solutions that solve real business challenges.</p>
          <Button label={"Work With Us"} btnType={2} isMagnetic={true} isShiny={true} redirect={"https://tailwindcss.com/docs/border-color"} extraClass={"mt-8"}/>
        </div>

        {/*******************  $$$  **************/}

        <div
          className=" absolute top-[50%] w-[100%] h-[400px] border-t-4 rounded-xl md:rounded-2xl lg:rounded-4xl border-primaryRed bg-[#090110]"
          style={{}}
        ></div>
      </div>
    </div>
  );
};

// const Home = () => {
//   return (
//     <div className="h-dvh bg-zBlack">
//       <div className="absolute top-1/2 left-1/2 translate-[-50%]">
        
//       </div>
//     </div>
//   );
// };

export default Home;
