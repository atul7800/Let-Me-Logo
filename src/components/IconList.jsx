import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { icons, Smile } from "lucide-react";
import { iconList } from "@/constants/icons";

function IconList() {
  const [openDialog, setOpenDialog] = useState(false);
  const storageValue = JSON.parse(localStorage.getItem("value"));
  const Icon = ({ name, size, color }) => {
    const LucidIcon = icons[name];
    if (!LucidIcon) {
      return;
    }

    return <LucidIcon color={color} size={size} />;
  };

  return (
    <div>
      <div>
        <label>Icons</label>
        <div
          onClick={() => setOpenDialog(true)}
          className="my-2 flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-md bg-gray-200 p-3"
        >
          <Smile />
        </div>
      </div>
      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Select an Icon</DialogTitle>
            <DialogDescription>
              <div>
                {iconList.map((icon, index) => (
                  <div>
                    <Icon name={icon} color={"#000"} size={20} />
                  </div>
                ))}
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default IconList;
