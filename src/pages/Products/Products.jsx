import React, { useState, useEffect } from "react";
import "../Style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { categories } from "../../Data/Categories";
import { db } from "../../firebase.config";
import {
  collection,
  getDocs,
  deleteDoc,
  doc
} from "firebase/firestore";
import { Button } from "react-bootstrap";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categorie, setCategory] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const productCollectionRef = collection(db, "produits");
  const getAllProducts = () => {
    return getDocs(productCollectionRef);
  };
  const deleteProduct = (id) => {
    const productDoc = doc(db, "produits", id);
    return deleteDoc(productDoc);
  };
  const getProducts = async () => {
    let list = [];
    try {
      const querySnapshot = await getDocs(collection(db, "produits"));
      querySnapshot.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() });
      });
      setProducts(list);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteHandler = async (id) => {
    await deleteProduct(id);
    getProducts();
  };

  useEffect(() => {
    getProducts();

    // Filter products based on selected categories
    const filtered = products.filter((product) => {
      return !categorie || product.categorie === categorie;
    });

    setFilteredProducts(filtered);
  }, [products, categorie]);

  const getRating = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<FontAwesomeIcon key={i} icon={faStar} />);
      } else {
        stars.push(<FontAwesomeIcon key={i} icon={faStarRegular} />);
      }
    }
    return stars;
  };

  return (
    <div className="container mt-5">
      <div className="mb-2">
        <Button variant="dark edit" onClick={getProducts}>
          Refresh List
        </Button>
      </div>
      <label className="label">Catégorie</label>
      <div className="control">
        <div className="select">
          <select
            value={categorie}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">-- Sélectionner une catégorie --</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
      <Link to="/add_p" className="add_p">
        Add New
      </Link>
      <div className="columns is-multiline mt-2">
      {filteredProducts.map((doc) => (
      <Card key={doc.id} sx={{ maxWidth: 200 }}>
        <CardActionArea onClick={handleExpandClick}>
          {doc.img.length > 0 ? (
            <Carousel>
              {doc.img.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={image}
                    alt={`Product image ${index + 1}`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          ) : (
            <img
              className="d-block w-100"
              src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              alt="No images selected"
            />
          )}
          <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {doc.nom}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Le prix : {doc.prix} TND
                </Typography>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div>
                    <Typography variant="body2" color="text.secondary">
                      La Marque : {doc.marque}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      La Catégorie : {doc.categorie}
                    </Typography>
                  </div>
                </div>
                {expanded && (
                  <>
                    <Typography variant="body2" color="text.secondary">
                      La Description : {doc.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      La Quantité : {doc.quantite}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" onClick={handleExpandClick}>
                  {getRating(doc.rating)}
                </Typography>
                  </>
                )}
              </CardContent>
            </CardActionArea>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
             
              <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
                <div className="editButton" onClick={() => navigate(`/Products/edit/${doc.id}`)}>
                  Modifier
                </div>
                <div
                  className="deleteButton"
                  onClick={() => {
                    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce produit?")) {
                      deleteHandler(doc.id);
                    }
                  }}
                >
                  Supprimer
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Products;
