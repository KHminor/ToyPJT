import axios from "axios";
import React, { useEffect, useState } from "react";
import LastStockComp from "./LastStockComp";

function Stock() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/scrap/last").then((r) => {
      setData(r.data);
    });
  }, []);

  return (
    <>
      <div className="w-full h-[96vh]">
        <LastStockComp data={data} />
      </div>
    </>
  );
}

export default Stock;
