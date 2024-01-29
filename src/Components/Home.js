import React from "react";
import { Link } from "react-router-dom";

export default function Home(props) {
    return (
      <div>
        <div className="col-md-12 mt-4">
        <div className="container mt-4">
            <h2>Welcom To My React Bootstrap Pages</h2>
            <div className="col-md-12 mt-4 text-start"><Link className="px-3" to="/about">About </Link >Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
            but also the leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</div>
            <div className="col-md-12 mt-4 text-start">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
            but also the leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</div>
            </div>
        </div>
      </div>
    );
  };
  
