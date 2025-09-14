"use client";

import Button from "./_components/Button";
import Heading from "./_components/Heading";
import LaserFlow from "./_components/LaserFlow";
import ScrollReveal from "./_components/ScrollReveal";
import ScrambledText from "./_components/ScrambledText";

const Home = () => {
  return (
    <div>
      {/* First Two Section - Hero & About */}
      <div
        className="h-[90vh] lg:h-[200vh] overflow-hidden relative"
        style={{}}
      >
        <LaserFlow
          // className={"absolute top-0 "} //Commented please see
          color={"#B33030"}
          mouseTiltStrength={0.05}
          verticalSizing={5}
        />

        {/*
        //////////////////////////////////////////////////
        //                                              //
        //                Hero Section                  //
        //                                              //
        //////////////////////////////////////////////////
      */}
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
          <p className="font-satoshi font-normal text-zWhite lg:leading-[120%] lg:text-lg ">
            We bring together creative minds and advanced technology to design
            solutions that solve real business challenges.
          </p>
          <Button
            label={"Work With Us"}
            btnType={2}
            isMagnetic={true}
            isShiny={true}
            redirect={"https://tailwindcss.com/docs/border-color"}
            extraClass={"mt-8"}
          />
          
        </div>

        {/*******************  $$$  **************/}

        {/*
        //////////////////////////////////////////////////
        //                                              //
        //               About Section                  //
        //                                              //
        //////////////////////////////////////////////////
      */}
        {/*******************  SUPPORT TEXT DIV **************/}
        <div
          className=" absolute top-[50%] w-[100%] h-[400px] border-t-4 rounded-xl md:rounded-2xl lg:rounded-4xl border-primaryRed bg-[#090110] flex justify-center"
        >
          <div className=" mt-16 items-start left-[8rem] w-[80%] flex flex-col justify-start ">
            <div className=""><Heading content="BEHIND THE CODE" className={"justify-self-start"}/></div>
            <div className=" mt-8 ">
              <ScrambledText
                className=" lg:tracking-[-0.02rem] text-3xl text-left justify-center" 
                radius={100}
                duration={1.2}
                speed={0.5}
                scrambleChars=".:"
              >
                At MindZed Technologies, we believe technology is more than just
                code— <br />it&apos;s creativity, strategy, and innovation combined. We are
                a team of passionate <br /> developers, designers, and innovators
                dedicated to building impactful digital <br /> solutions for businesses
                of all sizes. Our mission is to deliver innovative IT <br />solutions 
                that empower businesses to grow in the digital-first world.
              </ScrambledText>
            </div>
            <div className="flex mt-6">
              <Button label={"Know More"} btnType={2} isShiny={true} extraClass={"mr-4"}/>
              <Button label={"Get Started"} btnType={1} />
            
            </div>
          </div>
        </div>
      </div>

      <div className="bg-amber-300 w-[90vh] h-7"></div>
    </div>
  );
};

// import StaggeredMenu from "./_components/StaggeredMenu";
// const menuItems = [
//   { label: "Home", ariaLabel: "Go to home page", link: "/" },
//   { label: "About", ariaLabel: "Learn about us", link: "/about" },
//   { label: "Services", ariaLabel: "View our services", link: "/services" },
//   { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
// ];

// const socialItems = [
//   { label: "Twitter", link: "https://twitter.com" },
//   { label: "GitHub", link: "https://github.com" },
//   { label: "LinkedIn", link: "https://linkedin.com" },
// ];

// const Home = () => {
//   return (
//     <div className="h-dvh overflow-hidden bg-zBlack">
//       <div style={{ height: "100vh", background: "#1a1a1a" }}>
//         <StaggeredMenu
//           position="right"
//           items={menuItems}
//           socialItems={socialItems}
//           displaySocials={true}
//           displayItemNumbering={true}
//           menuButtonColor="#fff"
//           openMenuButtonColor="#fff"
//           changeMenuColorOnOpen={true}
//           colors={["#B19EEF", "#5227FF"]}
//           logoUrl="/path-to-your-logo.svg"
//           accentColor="#ff6b6b"
//           onMenuOpen={() => console.log("Menu opened")}
//           onMenuClose={() => console.log("Menu closed")}
//         />
//       </div>
//     </div>
//   );
// };

export default Home;
