import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase.config";

const Featured = () => {
  const [totalRevenue, setTotalRevenue] = useState(0);

  const getRevenue = async () => {
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    const startTimestamp = start.getTime();
  
    const q = query(
      collection(db, "orders"),
      where("timeStamp", ">=", startTimestamp)
    );
    const querySnapshot = await getDocs(q);
    let revenue = 0;
    querySnapshot.forEach((doc) => {
      revenue += doc.data().total;
    });
    setTotalRevenue(revenue);
  };
  
  useEffect(() => {
    getRevenue();
  }, []);

  return (
    <div className="featured">
    <img src="/logo-color.png" alt="Logo" />
  </div>
  
  );
};

export default Featured;
