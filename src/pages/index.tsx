import { Navbar } from "src/components";
import { About, Hero } from "src/sections";

export default function Home() {
  return (
    <>
      <Navbar />
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
    </>
  );
}
