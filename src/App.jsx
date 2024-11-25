import React from "react";
import GreetingCards from "./Components/GreetingCards";
import Header from "./Components/Header";

const App = () => {
  return (
    <div>
      <Header/>

      <div className="flex justify-between">
    <GreetingCards title={"Happy Birthday"} message={"Wishing ypu a fantastic day filled with joy"}/>
      <GreetingCards title={"Congratulations"} message={"Great job on your achievement!"}/>
      <GreetingCards title={"Thank You!"} message={"Thanks for your kindness and support!"}/>
      </div>
      
    </div>
  );
};

export default App;
