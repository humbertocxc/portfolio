import "./portfolio.scss"
import PortfolioList from "../portfoLiolist/PortfolioList"
import { useState, useEffect } from "react";import {
    sapos,
    gatinhos,
    onibus,
    eri,
} from "../../data";

export default function Portfolio() {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);
    const list = [
      {
        id: "sapos",
        title: "Sapinhos Diferentes",
      },
      {
        id: "gatinhos",
        title: "Amores da minha vida",
      },
      {
        id: "onibus",
        title: "Ônibus Legal",
      },
      {
        id: "eri",
        title: "Eri Johnson",
      },
    ];
  
    useEffect(() => {
      switch (selected) {
        case "sapos":
          setData(sapos);
          break;
        case "gatinhos":
          setData(gatinhos);
          break;
        case "onibus":
          setData(onibus);
          break;
        case "eri":
          setData(eri);
          break;
        default:
          setData(sapos);
      }
    }, [selected]);
  
    return (
      <div className="portfolio" id="portfolio">
        <h1>Portfolio</h1>
        <ul>
          {list.map((item) => (
            <PortfolioList
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
            />
          ))}
        </ul>
        <div className="container">
          {data.map((d) => (
            <div className="item">
              <img
                src={d.img}
                alt=""
              />
              <h3>{d.title}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  }