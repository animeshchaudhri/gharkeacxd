"use client";
import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { stringify } from "querystring";

export function Gharkaacxd() {
  const [isOn, setIsOn] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    if (initialLoad) {
      fetch("/api/webserver", {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("currentstate:", data);
          setIsOn(data.state === "true");
          setInitialLoad(false);
        })
        .catch((error) => console.error("Error:", error));
    }
  }, [initialLoad]);

  useEffect(() => {
    if (!initialLoad) {
      const ans = isOn ? "true" : "false";
      fetch("/api/webserver", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ state: ans }),
      })
        .then((response) => response.json())
        .then((data) => console.log("Success:", data))
        .catch((error) => console.error("Error:", error));
    }
  }, [isOn, initialLoad]);

  const handleToggle = () => {
    setIsOn((prevIsOn) => !prevIsOn);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10">
      <h1 className="text-4xl font-bold tracking-tight text-gray-50 dark:text-gray-50 z-20">
        Ghar Ka AC
      </h1>
      <div className="flex items-center justify-center gap-4 z-10">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline">Current state </Button>
          </AlertDialogTrigger>

          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={handleToggle}>
                turn off
              </AlertDialogCancel>
              <AlertDialogAction onClick={handleToggle}>
                turn on
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <p>--&gt;</p>

        <p className="px-8 py-0.5  border-2 border-black dark:border-white uppercase bg-white text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
          {isOn ? " on" : " off"}
        </p>
      </div>
      <div className="fixed bottom-0 right-0 hidden md:block">
        {" "}
        {/* Hide on mobile screens */}
        <img
          src="gay2.png"
          alt=""
          className="max-w-full h-auto md:max-w-none md:h-auto -z-10"
        />
      </div>
      <div className="fixed bottom-0 left-0 hidden md:block">
        {" "}
        {/* Hide on mobile screens */}
        <img
          src="gay2.png"
          alt=""
          className="max-w-full h-auto md:max-w-none md:h-auto -z-10"
        />
      </div>
      <div className="fixed bottom-0 left-0  md:hidden">
        {" "}
        {/* Hide on mobile screens */}
        <img
          src="gay2.png"
          alt=""
          className="max-w-64 h-auto md:max-w-none md:h-auto -z-10"
        />
      </div>
    </div>
  );
}

export default Gharkaacxd;
