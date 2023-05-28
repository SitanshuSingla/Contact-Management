import "./ContactCard.css";
import PreviewIcon from "@mui/icons-material/Preview";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, selector } from "../../reducer";
import { useNavigate } from "react-router-dom";
export default function ContactCard(props) {
  let data = useSelector(selector);
  let dispatcher = useDispatch();
  let navigate = useNavigate();
  function handleView(name) {
    navigate("/details/" + name);
  }
  function handleEdit(name) {
    navigate("/editForm/" + name);
  }

  return (
    <div style={{ backgroundColor: "white", width: "80%", padding: "50px" }}>
      <div className="row">
        <div className="col-4">
          <img
            height="100px"
            width="100px"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/1024px-Google_Contacts_icon.svg.png"
          />
        </div>
        <div className="col-6">
          <div style={{ marginBottom: "10px" }}>Name: {props.item.name}</div>
          <div style={{ marginBottom: "10px" }}>Mobile: {props.item.phone}</div>
          <div>Email: {props.item.email}</div>
        </div>
        <div className="col-2">
          <div className="col-2">
            <PreviewIcon
              onClick={() => handleView(props.item.name)}
              style={{
                backgroundColor: "yellow",
                marginBottom: "10px",
                cursor: "pointer"
              }}
            />
            <EditIcon
              onClick={() => handleEdit(props.item.name)}
              style={{
                backgroundColor: "blue",
                marginBottom: "10px",
                cursor: "pointer"
              }}
            />
            <DeleteIcon
              onClick={() => {
                dispatcher(deleteContact(props.index));
              }}
              style={{
                backgroundColor: "red",
                marginBottom: "10px",
                cursor: "pointer"
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
