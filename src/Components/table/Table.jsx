import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase.config";
import React, { useState, useEffect } from "react";

const List = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedProductName, setSelectedProductName] = useState("");

  const getOrders = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "orders"));
      const list = querySnapshot.docs
        .map((doc) => ({ id: doc.id, ...doc.data() }))
        .filter((order) => {
          const diffInMs = Date.now() - order.timeStamp.toMillis();
          const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
          return diffInDays <= 7;
        });
      setOrders(list);
      setLoading(false);

      // Set the default selected product and its name
      if (list.length > 0) {
        const defaultProduct = list[0].produits[0];
        setSelectedProduct(defaultProduct.produitId);
        setSelectedProductName(defaultProduct.nom);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  const handleProductChange = async (e) => {
    const productId = e.target.value;
    setSelectedProduct(productId); // Update selected product
    const productRef = doc(db, "produits", productId);
    const productSnapshot = await getDoc(productRef);
    const productName = productSnapshot.data()?.nom || "";
    setSelectedProductName(productName); // Update selected product name
  };

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Reference</TableCell>
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
              <TableCell colSpan={7} className="tableCell">
                Loading...
              </TableCell>
            </TableRow>
          ) : (
            orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="tableCell">{order.id}</TableCell>
                <TableCell className="tableCell">
                  <select
                    value={selectedProduct}
                    onChange={handleProductChange}
                  >
                    {order.produits.map((product) => (
                      <option key={product.produitId} value={product.produitId}>
                        {product.produitId}
                      </option>
                    ))}
                  </select>
                </TableCell>
                <TableCell className="tableCell">
                  {selectedProductName}
                </TableCell>
                <TableCell className="tableCell">
                  {order.nom} {order.societe}
                </TableCell>
                <TableCell className="tableCell">
                  {new Date(order.timeStamp.seconds * 1000).toLocaleString()}
                </TableCell>
                <TableCell className="tableCell">
                  {order.produits.map((product) => {
                    if (product.produitId === selectedProduct) {
                      return product.quantite_o;
                    }
                    return null;
                  })}
                </TableCell>
                <TableCell className="tableCell">{order.region}</TableCell>
                <TableCell className="tableCell">aaa</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
