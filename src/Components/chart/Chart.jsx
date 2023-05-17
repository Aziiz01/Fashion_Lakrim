import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { db } from "../../firebase.config";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { startOfMonth, endOfMonth, format } from "date-fns";

const Chart = ({ aspect, title }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const q = query(collection(db, "orders"));
      const querySnapshot = await getDocs(q);
      const orders = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      // Group orders by month and calculate total for each month
      const dataByMonth = orders.reduce((acc, order) => {
        const date = order.timeStamp && order.timeStamp.toDate();
        if (date) {
          const month = format(date, "MMMM");
          const total = order.total || 0;
          if (!acc[month]) {
            acc[month] = { date: startOfMonth(date), total };
          } else {
            acc[month].total += total;
          }
        }
        return acc;
      }, {});

      // Map data by month to an array of objects with date and total properties
      const data = Object.values(dataByMonth).map(({ date, total }) => ({
        date: format(date, "MMMM"),
        total,
      }));

      // Sort data by month in ascending order
      data.sort((a, b) => {
        const months = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
        return months.indexOf(a.date) - months.indexOf(b.date);
      });

      setData(data);
    };
    fetchOrders();
  }, []);

  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="date" stroke="gray" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart
