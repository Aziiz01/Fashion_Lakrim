import "../Users/Add.scss";
import { useEffect, useState } from "react";
import {
  collection,
  doc,
  serverTimestamp,
  setDoc,
  getDoc,
  updateDoc
} from "firebase/firestore";
import { auth, db, storage } from "../../firebase.config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { useParams, useNavigate } from "react-router-dom";

const Update_p = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [data, setData] = useState({});
  const [per, setPerc] = useState(null);
  const { productId } = useParams(); // Extract the productId from the URL
  const navigate = useNavigate();
  const [productPhoto, setProductPhoto] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const productDoc = await getDoc(doc(db, "produits", productId));
        if (productDoc.exists()) {
          const productData = productDoc.data();
          setData(productData);
          setProductPhoto(productData.img || "");
        } else {
          console.log("Product not found");
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchProductData();

    const uploadFile = () => {
      const name = new Date().getTime() + file.name;

      console.log(name);
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setPerc(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const updatedData = {
        timeStamp: serverTimestamp(),
      };
  
      for (const key in data) {
        if (data.hasOwnProperty(key) && data[key] !== undefined) {
          updatedData[key] = data[key];
        }
      }
  
      await updateDoc(doc(db, "produits", productId), updatedData);
      navigate(-1);
    } catch (err) {
      console.log(err);
    }
  };
  


  return (
    <div className="new">
      <div className="newContainer">
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
          <img
              src={imageUrl || data.img || "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
              alt=""
            />
          </div>
          <div className="right">
            <form onSubmit={handleUpdate}>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

             
    {inputs.map((input) => (
  <div className="formInput" key={input.id}>
    <label>{input.label}</label>
    {input.type === 'select' ? (
      <select id={input.id} value={data[input.id] || ''} onChange={handleInput}>
        {input.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    ) : (
      <input
        id={input.id}
        type={input.type}
        placeholder={input.placeholder}
        value={data[input.id] || ''}
        onChange={handleInput}
      />
    )}
  </div>
))}


              <button disabled={per !== null && per < 100} type="submit">
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update_p;

