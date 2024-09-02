import React, { useEffect, useState } from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Categories from "./Categories";
import Model from "./Model";
import { saveDataToLocalStorage, getDataFromLocalStorage } from "./utils";

export default function App() {
  const [data, setData] = useState<any>(getDataFromLocalStorage("appData"));
  useEffect(() => {
    saveDataToLocalStorage("appData", data);
  }, [data]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Categories setData={setData} />} />
        <Route path="/model" element={<Model data={data} />} />
      </Routes>
    </BrowserRouter>
  );
}
