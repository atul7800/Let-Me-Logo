import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import BackgroundController from "./components/BackgroundController";
import IconController from "./components/IconController";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <Header />
      <div className="fixed w-64">
        <SideNav setSelectedIndex={setSelectedIndex} />
      </div>
      <div className="ml-64 grid grid-cols-1 md:grid-cols-6">
        <div className="h-screen border p-5 shadow-sm md:col-span-2">
          {selectedIndex === 0 ? <IconController /> : <BackgroundController />}
        </div>
        <div className="bg-blue-500 md:col-span-3">Icon preview</div>
        <div className="bg-green-500 md:col-span-1">Ad banner</div>
      </div>
    </>
  );
}

export default App;
