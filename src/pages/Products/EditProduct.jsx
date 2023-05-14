import { useEffect, useState } from "react";
import {
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { auth, db, storage } from "../../firebase.config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate, useParams } from "react-router-dom";
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';

const Update_p = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [data, setData] = useState({});
  const [per, setPerc] = useState(null);
  const { productId } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    const getProductData = async () => {
      const productDoc = await doc(db, "produits", productId).get();
      setData(productDoc.data());
    }
    getProductData();
  }, [productId]);

  useEffect(() => {
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
      await setDoc(doc(db, "produits", productId), {
        ...data,
        timeStamp: serverTimestamp(),
      }, { merge: true });
      navigate(-1)
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
              src={
                file
                  ? URL.createObjectURL(file)
                  : data.img
              }
              alt=""
            />
            <div className="updateInput">
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
          </div>
          <div className="right">
            <form onSubmit={handleUpdate}>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  {input.type === "select" ? (
                    <select id={input.id} onChange={handleInput} defaultValue={data[input.id]}>
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
                      onChange={handleInput}
                      defaultValue={data[input.id]}
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
                  }
                  export default Update_p;