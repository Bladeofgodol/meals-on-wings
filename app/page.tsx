 // Ensure this is imported

import Counter from "./component/Content/countert";
import Greeter from "./component/Content/greeter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Greeter />
      <Counter/>
    </main>
  );
}
