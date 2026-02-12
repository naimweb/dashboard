import React from "react";
import { TopPruducsData } from "../Data/Data";
import ContentHeader from "../ContentHeader";
import MyLineChart from "./LineChart";


function TopProducs() {
  const label = ["#", "Name", "Popularity", "Sales", "Trend"];

  return (
    <div className="p-4 ">
      <ContentHeader tittle="Top Products" />

      {/* header */}
      <div className="flex text-gray-300 px-2 text-sm border-b pb-2 justify-between">
         {
           label.map((data)=>(
              <h1>{data}</h1>
           ))
         }
      </div>

      {/* rows */}
      {TopPruducsData.map((i, ind) => (
        <div
          key={i.id}
          className="flex justify-between  items-center w-full text-white text-sm py-3 border-b px-3"
        >
          {/* index */}
          <div className="w-[5%]">{ind + 0}</div>

          {/* name */}
          <div className="w-[25%] mx-auto  ml-[16%] text-[20px] ">{i.name}</div>

          {/* progress */}
          <div className="w-[25%]">
            <div className="w-full h-[14px] bg-gray-500 rounded-full ">
              <div
                className="h-full rounded-full flex gap-"
                style={{
                  width: `${i.priority}%`,
                  background: i.color,
                }}
              />
            </div>
          </div>

          {/* percentage */}
          <div className="w-[10%] flex gap-6 ">
            <div></div>
            <button
              className="px-2 py-1 rounded-sm border"
              style={{ color: i.color, borderColor: i.color }}
            >
               <div className="">

              {i.priority}%
               </div>
            </button>
          </div>

          {/* line chart */}
          <div className="w-[20%]">
            <MyLineChart />
          </div>
        </div>
      ))}
    </div>
  );
}

export default TopProducs;
