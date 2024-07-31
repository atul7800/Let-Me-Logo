import React from "react";
import { Button } from "./ui/button";
import { Download } from "lucide-react";

function Header({ setDownloadLogo }) {
  return (
    <div className="flex items-center justify-between border p-4 shadow-sm">
      <span className="flex items-center gap-3 text-3xl font-bold">
        <img src="/slack.png" alt="" />
        <h1>LetMeLogo</h1>
      </span>
      <Button
        onClick={() => setDownloadLogo(Date.now())}
        className="flex items-center gap-2"
      >
        <Download className="h-4 w-4" /> Download
      </Button>
    </div>
  );
}

export default Header;
