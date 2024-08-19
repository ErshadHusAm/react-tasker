import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import TaskkBoard from "./Task/TaskkBoard";

export default function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <Hero />
        <TaskkBoard />
      </div>
      <Footer />
    </>
  );
}
