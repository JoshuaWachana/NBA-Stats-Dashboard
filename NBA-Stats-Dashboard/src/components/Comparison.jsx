import { useState } from "react";
import Dropdown from "./Dropdown";
import '../styles/Comparison.css'

const options = [
  {
    title: "Total Points",
  }
];

const Comparison = () => {
  const [criteria, setCriteria] = useState(options[0]);


  return (
    <div className="comparison">
      <h1 className="comparison__title">Player Comparison</h1>
      <Dropdown
        options={options}
        onSelect={(event) => {
          setCriteria(event);
        }}
      />
    </div>
  );
};

export default Comparison;
