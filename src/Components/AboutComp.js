import React, { useState } from 'react';

export default function About(props) {
  const [name, setName] = useState("Mitesh Shah");
  return (
    <div>
      {/* <h1>{props.title}</h1> */}
      <div className="container mt-4">
        <h2 className="text-primary">{props.header}</h2>
        <div className="col-md-12 mt-4 text-start">My name is <strong>{name}</strong>. I'm from India and I'm {props.age} age.
          I'm excited to be in your class because I'm always eager to learn more and I'm curious about what your class has to offer.
          I'm a dedicated student who enjoys challenges. Some of my hobbies include cricet".</div>
        <div className="col-md-12 mt-4 text-start">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
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
  );
};

