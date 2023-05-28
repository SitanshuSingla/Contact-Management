import TextField from "@mui/material/TextField";
import { useState } from "react";
import Navbar from "../../Component/Navbar/Navbar";
import { useDispatch } from "react-redux";
import "./ContactForm.css";
import { add } from "../../reducer";
import { useNavigate } from "react-router-dom";

export default function ContactForm() {
  let [data, setData] = useState({
    name: "",
    photo: "",
    email: "",
    phone: "",
    company: "",
    title: ""
  });
  let dispatcher = useDispatch();
  let navigate = useNavigate();
  function handleSubmit() {
    dispatcher(add(data));
    navigate("/");
  }

  return (
    <div>
      <Navbar />
      <div className="form-wrapper">
        <div className="createText">Create Contact</div>
        <TextField
          className="textfield"
          required
          id="outlined-required"
          label="Name"
          style={{ marginBottom: "20px" }}
          onInput={(e) => setData({ ...data, name: e.target.value })}
        />
        <TextField
          className="textfield"
          required
          id="outlined-required"
          label="Photo Url"
          style={{ marginBottom: "20px" }}
          onInput={(e) => setData({ ...data, photo: e.target.value })}
        />
        <TextField
          className="textfield"
          required
          type="number"
          id="outlined-required"
          label="Phone No."
          style={{ marginBottom: "20px" }}
          onInput={(e) => setData({ ...data, phone: e.target.value })}
        />
        <TextField
          className="textfield"
          required
          id="outlined-required"
          label="Email"
          style={{ marginBottom: "20px" }}
          onInput={(e) => setData({ ...data, email: e.target.value })}
        />
        <TextField
          className="textfield"
          required
          id="outlined-required"
          label="Company"
          style={{ marginBottom: "20px" }}
          onInput={(e) => setData({ ...data, company: e.target.value })}
        />
        <TextField
          className="textfield"
          required
          id="outlined-required"
          label="Title"
          style={{ marginBottom: "20px" }}
          onInput={(e) => setData({ ...data, title: e.target.value })}
        />
        <button
          style={{ width: "50%", margin: "auto" }}
          className="btn btn-success"
          onClick={handleSubmit}
        >
          Create
        </button>
      </div>
    </div>
  );
}
