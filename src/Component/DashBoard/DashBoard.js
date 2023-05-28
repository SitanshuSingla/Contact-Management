import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import axios from "axios";
import Navbar from "../Navbar/Navbar";

const Dashboard = () => {
  const [historicalData, setHistoricalData] = useState();
  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
      .then((response) => response.json())
      .then((data) => {
        setHistoricalData(data);
      });
  }, []);

  useEffect(() => {
    if (historicalData) {
      const casesDataX = Object.keys(historicalData.cases);
      const casesDataY = Object.values(historicalData.cases);

      const xValues = casesDataX;
      const yValues = casesDataY;

      new Chart("myChart", {
        type: "line",
        data: {
          labels: xValues,
          datasets: [
            {
              fill: false,
              tension: 0,
              backgroundColor: "rgba(0,0,255,1.0)",
              borderColor: "rgba(0,0,255,0.1)",
              data: yValues
            }
          ]
        },
        options: {
          plugins: {
            legend: { display: false }
          },
          scales: {
            y: { min: 500, max: 676570149 }
          }
        }
      });
    }
  }, [historicalData]);

  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/countries")
      .then((res) => res.json())
      .then((res) => setCountriesData(res));
  }, []);

  return (
    <div>
      <Navbar />
      <h2>COVID-19 Cases</h2>
      <canvas
        id="myChart"
        style={{ width: "100%", maxWidth: "900px", height: "400px" }}
      ></canvas>

      <h2 style={{ marginTop: "30px" }}>Countries Data Map</h2>
      <MapContainer
        center={[0, 0]}
        zoom={2}
        style={{ height: "600px", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {countriesData &&
          countriesData.map((country) => (
            <Marker
              key={country.country}
              position={[country.countryInfo.lat, country.countryInfo.long]}
            >
              <Popup>
                <div>
                  <h3>{country.country}</h3>
                  <p>Total Cases: {country.cases}</p>
                  <p>Recovered: {country.recovered}</p>
                  <p>Deaths: {country.deaths}</p>
                </div>
              </Popup>
            </Marker>
          ))}
      </MapContainer>
    </div>
  );
};

export default Dashboard;
