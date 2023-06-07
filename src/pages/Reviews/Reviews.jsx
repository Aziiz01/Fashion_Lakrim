import React, { useState, useEffect } from "react";
import { auth, db, storage } from "../../firebase.config";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { Table, Button } from "react-bootstrap";
import "../Style.css"

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const ReviewCollectionRef= collection(db, "reviews");

  useEffect(() => {
    getReviews();
  }, []);

  const getReviews = async () => {
    let list = [];
         try {
           const querySnapshot = await getDocs(collection(db, "reviews"));
           querySnapshot.forEach((doc) => {
            list.push({ id: doc.id, ...doc.data() });
           });
           setReviews(list);
         } catch (err) {
           console.log(err);
         }}
         const deleteReview = (id) => {
          const reviewdoc = doc(db, "reviews", id);
          return deleteDoc(reviewdoc);
        };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>

      <h1 style={{ fontSize: "36px", fontWeight: "bold", textAlign: "center", marginBottom: "30px" }}>
        Reviews
      </h1>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50vh" }}>

      <Table className="reviews-table" >
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Rating</th>
            <th>Comment</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((doc) => (
            <tr key={doc.id}>
              <td>{doc.titre}</td>
              <td>{doc.nom}</td>
              <td>{doc.rating}</td>
              <td style={{ whiteSpace: "pre-wrap" }}> 
              <div
                  style={{
                    width: "200px",
                    overflow: "hidden",
                    wordWrap: "break-word"
                  }}
                >
                  {doc.description}
                </div>
                </td>
              <td>
                <button
                  style={{ backgroundColor: "red", color: "white" }}
                  onClick={() => deleteReview(doc.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      </div>
    </div>
  );
};

export default Reviews;
