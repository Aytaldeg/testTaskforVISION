import React from "react";
import { Link } from "react-router-dom";
import { CategoryArray } from "./ICategory";
import { saveDataToLocalStorage } from "./utils";

type Props = {
  setData: (e: any) => void;
};

export default function Categories(props: Props) {
  const handleClick = (item: any) => {
    saveDataToLocalStorage("appData", item);
  };

  return (
    <div className="categories">
      <div className="categories-title">Модели</div>
      <div className="categories-content">
        {CategoryArray?.map((i: any) => {
          return (
            <Link
              to={"/model"}
              className="categories-content-item"
              style={{ color: i?.color }}
              onClick={() => {
                handleClick(i);
              }}
            >
              {i?.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
