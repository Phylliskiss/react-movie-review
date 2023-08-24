/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import ClassComponent from "./components/ClassComponent";
import LifeCycleMethods from "./components/LifeCycleMethods";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <>
    <div className="min-h-screen ">
      <NavigationBar/>
        <div className=" p-5 bg-red-300">
          {/* <ClassComponent/>      */}
          <LifeCycleMethods />
        </div>
    </div>
    </>
  );
}

export default App;
