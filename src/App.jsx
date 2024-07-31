import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import BackgroundController from "./components/BackgroundController";
import IconController from "./components/IconController";
import LogoPreview from "./components/LogoPreview";
import { UpdateStorageContext } from "./components/UpdateStorageContext";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [updateStorage, setUpdateStorage] = useState({});
  const [downloadLogo, setDownloadLogo] = useState("");

  return (
    <UpdateStorageContext.Provider value={{ updateStorage, setUpdateStorage }}>
      <div>
        <Header setDownloadLogo={(flagData) => setDownloadLogo(flagData)} />
        <div className="fixed w-64">
          <SideNav setSelectedIndex={setSelectedIndex} />
        </div>
        <div className="ml-64 grid grid-cols-1 md:grid-cols-6">
          <div className="h-screen overflow-auto border p-5 shadow-sm md:col-span-2">
            {selectedIndex === 0 ? (
              <IconController />
            ) : (
              <BackgroundController />
            )}
          </div>
          <div className="border shadow-sm md:col-span-3">
            <LogoPreview downloadLogo={downloadLogo} />
          </div>
          <div className="flex items-center justify-center border bg-blue-100 shadow-sm md:col-span-1">
            Ad banner
          </div>
        </div>
      </div>
    </UpdateStorageContext.Provider>
  );
}

export default App;
