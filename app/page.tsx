import About from "./component/Content/about";
import Counter from "./component/Content/countert";
import Greeter from "./component/Content/greeter";
import Locations from "./component/Content/location";
import Partners from "./component/Content/partners";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll md:snap-y md:snap-mandatory">
      <div className="snap-start md:h-screen">
        <Greeter />
      </div>
      <div className="snap-start lg:h-screen lg:my-20">
        <About />
      </div>
      <div className="snap-start md:h-screen">
        <Locations />
      </div>
      <div className="snap-start md:h-screen">
        <Partners />
        <Counter />
      </div>
      <div className="snap-start m-0">
        <Footer />
      </div>
    </main>
  );
}
