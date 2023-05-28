import { useSelector } from "react-redux";
import ContactCard from "../../Component/ContactCard/ContactCard";
import Navbar from "../../Component/Navbar/Navbar";
import { selector } from "../../reducer";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import SlideBar from "../../Component/SlideBar/SlideBar";
import { useState } from "react";

export default function Home() {
  let data = useSelector(selector);
  let navigate = useNavigate();
  let [search, setSearch] = useState("");
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <SlideBar />
        <div className="home-wrapper">
          <div style={{ marginTop: "30px" }}>
            <span style={{ fontWeight: "bold", fontSize: "large" }}>
              Phone Directory
            </span>
            <button
              onClick={() => {
                navigate("/form");
              }}
              className="btn btn-success bt"
            >
              New
            </button>
          </div>
          <div>
            Take control of your contacts effortlessly with our comprehensive
            contact management application. Add, update, and delete contacts
            with ease, ensuring your address book is always up to date and
            organized
          </div>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Enter Name"
              aria-label="Search"
              onInput={(e) => {
                e == "" ? setSearch("") : setSearch(e.target.value);
              }}
            />
          </form>

          <div className="card-wrapper">
            {data
              .filter((fil) => {
                if (search == "") return fil;
                else if (fil.name.toLowerCase().includes(search.toLowerCase()))
                  return fil;
              })
              .map((data, index) => {
                return <ContactCard key={index} item={data} index={index} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
