import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../../Component/Navbar/Navbar";
import { selector } from "../../reducer";
import "./ContactDetails.css";

export default function ContactDetails() {
  let { name } = useParams();
  let [detail, setDetail] = useState();
  let data = useSelector(selector);

  useEffect(() => {
    let item = data.find((i) => i.name === name);
    console.log(item);
    setDetail(item);
  }, []);

  console.log(detail);

  return (
    <div>
      <Navbar />
      <div className="detail-wrapper">
        <img
          height="150px"
          alt=""
          src={
            detail?.photo ||
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/1024px-Google_Contacts_icon.svg.png"
          }
        />

        <div className="contact-detail">
          <div>Name: {detail?.name}</div>
          <div>Phone: {detail?.phone}</div>
          <div>Email: {detail?.email}</div>
          <div>Company: {detail?.company}</div>
          <div>Title: {detail?.title}</div>
        </div>
      </div>
    </div>
  );
}
