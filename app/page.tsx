import About from "./component/Content/about";
import Counter from "./component/Content/countert";
import Greeter from "./component/Content/greeter";
import Locations from "./component/Content/location";
import Partners from "./component/Content/partners";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <main className="h-screen overflow-auto md:snap-y md:snap-mandatory ">
      <div className="snap-start md:h-screen" id="greeter">
        <Greeter />
      </div>
      <div className="snap-start lg:h-screen lg:my-20" id="about">
        <About />
      </div>

      <div className="snap-start md:h-screen" id="partners">
        <Partners />
        <Counter />
      </div>
      <div className="snap-start md:h-screen" id="location">
        <Locations />
      </div>
      <div className="snap-start min:h-1/3">
        <Footer />
      </div>
    </main>
  );
}
