import { Navbar } from "src/components";
import { RightDrawerProvider } from "src/context";
import { About, Hero } from "src/sections";

export default function Home() {
  return (
    <RightDrawerProvider>
      <div className="absolute h-[100vh] w-[100vw] pt-[5.4rem] md:pt-[4.5rem] overflow-scroll scrollbar-hide">
        <Hero />
        <div className="relative">
          <About />
        </div>
        {/* <div className="relative">
        <GetStarted />
        <div className="gradient-04 z-0" />
        <WhatsNew />
      </div>
      <World />
      <div className="relative">
        <Insights />
        <div className="gradient-04 z-0" />
        <Feedback />
      </div>
      <Footer /> */}
      </div>
      <Navbar />
    </RightDrawerProvider>
  );
}
