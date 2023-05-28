import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import Navbar from "../../Component/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selector, update } from "../../reducer";
import { Navigation } from "@mui/icons-material";

export default function EditForm() {
  let [editData, seteditData] = useState();
  let navigation = useNavigate();
  let data = useSelector(selector);
  let dispatcher = useDispatch();
  let { name } = useParams();
  useEffect(() => {
    let item = data.find((i) => i.name == name);

    seteditData(item);
  }, []);
  function handleUpdate() {
    let index = data.findIndex((i) => i.name === name);
    dispatcher(update({ index: index, editData: editData }));
    navigation("/");
  }
  console.log(editData);
  return (
    <div>
      <Navbar />
      <div className="form-wrapper">
        <div className="createText">Update Contact</div>
        <TextField
          className="textfield"
          label="Name"
          style={{ marginBottom: "20px" }}
          onInput={(e) =>
            seteditData({
              ...editData,
              name: e.target.value
            })
          }
        />
        <TextField
          className="textfield"
          required
          id="outlined-required"
          label="Photo Url"
          style={{ marginBottom: "20px" }}
        />
        <TextField
          className="textfield"
          required
          type="number"
          id="outlined-required"
          label="Phone No."
          style={{ marginBottom: "20px" }}
        />
        <TextField
          className="textfield"
          required
          id="outlined-required"
          label="Email"
          style={{ marginBottom: "20px" }}
        />
        <TextField
          className="textfield"
          required
          id="outlined-required"
          label="Company"
          style={{ marginBottom: "20px" }}
        />
        <TextField
          className="textfield"
          required
          id="outlined-required"
          label="Title"
          style={{ marginBottom: "20px" }}
        />
        <button
          style={{ width: "50%", margin: "auto" }}
          className="btn btn-success"
          onClick={handleUpdate}
        >
          Update
        </button>
      </div>
    </div>
  );
}
