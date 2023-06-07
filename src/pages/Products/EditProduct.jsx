import { useEffect, useState } from "react";
import { doc, serverTimestamp, updateDoc, getDoc } from "firebase/firestore";
import { auth, db, storage } from "../../firebase.config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { useParams, useNavigate } from "react-router-dom";
const Update_p = ({ inputs, title }) => {
  const [files, setFiles] = useState([]);
  const [data, setData] = useState({});
  const [per, setPerc] = useState(null);
  const { productId } = useParams();
  const navigate = useNavigate();
  const [productPhoto, setProductPhoto] = useState("");
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const productDoc = await getDoc(doc(db, "produits", productId));
        if (productDoc.exists()) {
          const productData = productDoc.data();
          setData(productData);
          setProductPhoto(productData.img || "");
          setImageUrls(productData.img || []);
        } else {
          console.log("Product not found");
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchProductData();
  }, [productId]);

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const updatedData = {
        timeStamp: serverTimestamp(),
        ...data,
      };
  
      if (files.length > 0) {
        const uploadTasks = files.map((file) => {
          const name = new Date().getTime() + file.name;
          const storageRef = ref(storage, name);
          const uploadTask = uploadBytesResumable(storageRef, file);
  
          return new Promise((resolve, reject) => {
            uploadTask.on(
              "state_changed",
              (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log("Upload is " + progress + "% done");
                setPerc(progress);
              },
              (error) => {
                console.log(error);
                reject(error);
              },
              async () => {
                try {
                  const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
  
                  // Remove existing URLs from updatedData.img
                  const updatedImg = updatedData.img ? updatedData.img.filter(url => !imageUrls.includes(url)) : [];
  
                  // Add the new downloadURLs to updatedImg
                  updatedData.img = [...updatedImg, downloadURL];
  
                  resolve();
                } catch (error) {
                  console.log(error);
                  reject(error);
                }
              }
            );
          });
        });
  
        await Promise.all(uploadTasks);
        console.log("All files uploaded successfully");
      }
  
      await updateDoc(doc(db, "produits", productId), updatedData);
      navigate(-1);
    } catch (err) {
      console.log(err);
    }
  };
  
  

  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
  };

  return (
    <div className="new">
      <div className="newContainer">
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            {imageUrls.map((imageUrl, index) => (
              <img
                key={index}
                src={imageUrl}
                alt={`Product Image ${index}`}
              />
            ))}
          </div>
          <div className="right">
            <form onSubmit={handleUpdate}>
              <div className="formInput">
                <label htmlFor="file">
                  Images: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                  multiple
                />
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  {input.type === 'select' ? (
                    <select
                      id={input.id}
                      value={data[input.id] || ''}
                      onChange={handleInput}
                    >
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
              <div>
              <button disabled={per !== null && per < 100} type="submit">
                Update
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update_p;
