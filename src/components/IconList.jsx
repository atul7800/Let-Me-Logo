import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { icons, Smile } from "lucide-react";
import { iconList } from "@/constants/icons";
import axios from "axios";

function IconList({ iconSelected }) {
  const [openDialog, setOpenDialog] = useState(false);
  const storageValue = JSON.parse(localStorage.getItem("value"));
  const [newIcon, setNewIcon] = useState(
    storageValue ? storageValue?.icon : "Smile",
  );
  const [colorIconsList, setColorIconsList] = useState([]);
  const BASE_URL = "https://logoexpress.tubeguruji.com";

  // repeating in LogoPrevie.jsx
  const Icon = ({ name, size, color }) => {
    const LucidIcon = icons[name];
    if (!LucidIcon) {
      return;
    }
    return <LucidIcon color={color} size={size} />;
  };
  //

  useEffect(() => {
    getColorIconsList();
  }, []);

  function getColorIconsList() {
    axios
      .get(BASE_URL + "/getIcons.php")
      .then((response) => setColorIconsList(response.data));
  }

  return (
    <div>
      <div>
        <label>Icons</label>
        <div
          onClick={() => setOpenDialog(true)}
          className="my-2 flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-md bg-gray-200 p-3"
        >
          {newIcon?.includes(".png") ? (
            <img src={BASE_URL + "/png/" + newIcon} />
          ) : (
            <Icon name={newIcon} color={"#000"} size={30} />
          )}
        </div>
      </div>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="mb-2">Select an Icon</DialogTitle>

            <DialogDescription>
              <Tabs defaultValue="icon">
                <TabsList>
                  <TabsTrigger value="icon">Icons</TabsTrigger>
                  <TabsTrigger value="color-icon">Color Icons</TabsTrigger>
                </TabsList>
                <TabsContent value="icon">
                  <div className="grid h-[450px] grid-cols-2 gap-5 overflow-auto p-5 pl-1 pt-2 md:grid-cols-4 lg:grid-cols-5">
                    {iconList.map((iconItem, index) => (
                      <div
                        key={index}
                        onClick={() => {
                          iconSelected(iconItem);
                          setOpenDialog(false);
                          setNewIcon(iconItem);
                        }}
                        className="flex cursor-pointer items-center justify-center rounded-sm border p-2"
                      >
                        <Icon name={iconItem} color={"#000"} size={30} />
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="color-icon">
                  <div className="grid h-[450px] grid-cols-2 gap-5 overflow-auto p-5 pl-1 pt-2 md:grid-cols-4 lg:grid-cols-5">
                    {colorIconsList.map((iconItem, index) => (
                      <div
                        key={index}
                        onClick={() => {
                          iconSelected(iconItem);
                          setOpenDialog(false);
                          setNewIcon(iconItem);
                        }}
                        className="flex cursor-pointer items-center justify-center rounded-sm border p-2"
                      >
                        <img src={BASE_URL + "/png/" + iconItem} />
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default IconList;
