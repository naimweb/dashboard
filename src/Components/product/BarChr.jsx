import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const data = [
  { name: "Electronics", sales: 4000 },
  { name: "Fashion", sales: 2400 },
  { name: "Grocery", sales: 3200 },
  { name: "Sports", sales: 2000 },
];

export default function MyBarChart() {
  return (
    <>
               <div className="flex justify-around mb-[30px] mt-[60px]">
                     <h1> 📊 Category-wise Products (Bar Chart)</h1>
                     <h1>🥧 Stock Distribution (Pie Chart)</h1>
                 </div>

      <div className="flex w-[60%] pl-6 ">

         <div className="w-full h-80 bg-white p-4 rounded-xl shadow">
            <div>
            </div>
            <h2 className="text-xl font-bold mb-4 text-center">Category-wise Sales</h2>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sales" fill="#2563EB" radius={[8, 8, 0, 0]} />
                </BarChart>
                    </ResponsiveContainer>
               </div>

               {/* second  */}
                <div>
                     <h1 className=" text-center pl-[210%] w-[90px]  " style={{color:"green", font:"bolder", fontSize:"20px"}}>proccece 40%</h1>
                </div>
       </div>
        </>
  );
}
