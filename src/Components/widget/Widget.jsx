import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase.config";
import { Link } from "react-router-dom";


const Widget = ({ type }) => {
  const [amount, setAmount] = useState(null);
  const [diff, setDiff] = useState(null);
  const [totalRevenue, setTotalRevenue] = useState(0);

  let data;
  

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: (
          <Link to="/users" style={{ textDecoration: "none" }}>
            See all users
          </Link>
        ),   
       query:"users",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        query:"orders",
        isMoney: false,
        link: (
          <Link to="/orders" style={{ textDecoration: "none" }}>
            See all orders
          </Link>
        ),        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    
    case "product":
      data = {
        title: "PRODUCTS",
        query:"produits",
        link: (
          <Link to="/products" style={{ textDecoration: "none" }}>
            See all products
          </Link>
        ),        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
      case "earning":
      data = {
        title: "EARNINGS",
        query:"revenue",
        isMoney: true,
        value: totalRevenue,
        link: (
          <Link to="/revenue" style={{ textDecoration: "none" }}>
              View net earnings
          </Link>
        ),        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    default:
      break;
  }

  useEffect(() => {
    const fetchData = async () => {
      const today = new Date();
      const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1));
      const prevMonth = new Date(new Date().setMonth(today.getMonth() - 2));

      const lastMonthQuery = query(
        collection(db, data.query),
        where("timeStamp", "<=", today),
        where("timeStamp", ">", lastMonth)
      );
      const prevMonthQuery = query(
        collection(db, data.query),
        where("timeStamp", "<=", lastMonth),
        where("timeStamp", ">", prevMonth)
      );

      const lastMonthData = await getDocs(lastMonthQuery);
      const prevMonthData = await getDocs(prevMonthQuery);

      setAmount(lastMonthData.docs.length);
      setDiff(
        ((lastMonthData.docs.length - prevMonthData.docs.length) / prevMonthData.docs.length) *
          100
      );
    };
    fetchData();
    const getRevenue = async () => {
      const q = query(collection(db, "orders"));
      const querySnapshot = await getDocs(q);
      let revenue = 0;
      querySnapshot.forEach((doc) => {
        revenue += doc.data().total;
      });
      setTotalRevenue(revenue);
    };
    getRevenue();
  }, []);

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney ? "$" + totalRevenue : amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        {!data.isMoney && (
          <div className={`percentage ${diff < 0 ? "negative" : "positive"}`}>
            {diff < 0 ? <KeyboardArrowDownIcon/> : <KeyboardArrowUpIcon/> }
            {diff} %
          </div>
        )}
        {data.icon}
      </div>
    </div>
  );
  
};

export default Widget;
