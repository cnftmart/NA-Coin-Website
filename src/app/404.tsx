import Router from "next/router";
import React from "react";
import Image from "next/image";

export default function FourOhFour() {
  const [timer, setTimer] = React.useState<number>(5);

  //Countdown
  React.useEffect(() => {
    timer > 0 && setTimeout(() => setTimer(timer - 1), 1000);
  }, [timer]);

  //Move to the main page
  React.useEffect(() => {
    setTimeout(() => {
      Router.back();
    }, 5000);
  }, []);

  return (
    <div className="flex flex-col h-[100vh] w-full items-center justify-center">
      <h2>404</h2>
      <h3>error</h3>
      <p>
        Automatically redirected in{" "}
        <span className="timer font-semibold ">{timer}</span> seconds
        <span className="font-semibold ">...</span>
      </p>
    </div>
  );
}
