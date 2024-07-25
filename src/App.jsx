import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SideNav from "./components/SideNav";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className="fixed w-64">
        <SideNav />
      </div>
      <div className="ml-64 grid grid-cols-1 md:grid-cols-6">
        <div className="bg-slate-500 md:col-span-2">Control</div>
        <div className="bg-blue-500 md:col-span-3">Icon preview</div>
        <div className="bg-green-500 md:col-span-1">Ad banner</div>
      </div>
    </>
  );
}

export default App;
