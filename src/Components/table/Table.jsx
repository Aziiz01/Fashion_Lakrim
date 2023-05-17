import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { auth, db, storage } from "../../firebase.config";
import React, { useState, useEffect } from "react";


const List = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const getOrders = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "orders"));
      const list = querySnapshot.docs
        .map((doc) => ({ id: doc.id, ...doc.data() }))
        .filter((order) => {
          // calculate the difference between the order's timestamp and the current date
          const diffInMs = Date.now() - order.timeStamp.toMillis();
          const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  
          // return true if the order is from the past week
          return diffInDays <= 7;
        });
      setOrders(list);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  
  
  useEffect(() => {
    getOrders();
  }, []);
        
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Region</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell colSpan={7} className="tableCell">Loading...</TableCell>
            </TableRow>
          ) : (
            orders.map((doc) => (
              <TableRow key={doc.id}>
                <TableCell className="tableCell">{doc.id}</TableCell>
                <TableCell className="tableCell">
                  <div className="cellWrapper">
                    {doc.prenom}
                  </div>
                </TableCell>
                <TableCell className="tableCell">{doc.nom}</TableCell>
                <TableCell className="tableCell">{new Date(doc.timeStamp.seconds * 1000).toLocaleString()}</TableCell>
                <TableCell className="tableCell">{doc.quantite}</TableCell>
                <TableCell className="tableCell">{doc.region}</TableCell>
                <TableCell className="tableCell">
                  aaa
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
