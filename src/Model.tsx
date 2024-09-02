import { useState } from "react";
import { Link } from "react-router-dom";
import { getDataFromLocalStorage } from "./utils";

type Props = {
  data: any;
};

export default function Model(props: Props) {
  const [sortPrice, setSortPrice] = useState<boolean>(false);
  const [data, setData] = useState<any>(getDataFromLocalStorage("appData"));

  return (
    <div className="model">
      <Link className="model-back" to="/">
        Назад
      </Link>
      <div className="model-title" style={{ color: data?.color }}>
        {data?.name}
      </div>
      <div
        title={
          sortPrice ? "Сортировать по возрастанию" : "Сортировать по Убыванию"
        }
        className="model-sort"
        onClick={() => {
          setSortPrice(!sortPrice);
        }}
      >
        Сортировать{" "}
        <div
          className={sortPrice ? "model-sort-arrowDown" : "model-sort-arrowUp"}
        />
      </div>
      <div className="model-tip">
        {data?.models
          .sort((a: any, b: any) =>
            sortPrice ? b.price - a.price : a.price - b.price
          )
          .map((i: any, index: number) => {
            return (
              <div className="model-tip-item">
                <div>
                  {index + 1}) {i?.name}{" "}
                </div>{" "}
                <div>{i?.price} рб</div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
