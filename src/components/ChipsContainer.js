import "../styles/components/chipsContainer.css";
import { useState } from "react";

export const ChipsContainer = ({ getActiveChip }) => {
  const keyWordsList = [
    { id: 1, keyName: "All" },
    { id: 2, keyName: "Vegetable Farming" },
    { id: 3, keyName: "Pesticides" },
    { id: 4, keyName: "Fruit Farming" },
    { id: 5, keyName: "Indian Farmer" },
  ];

  const [isActiveChip, setIsActiveChip] = useState(0);
  const setChipStyle = (index) => {
    if (index === isActiveChip) return "active-chip";
    else return "inactive-chip";
  };

  return (
    <div className="chips fw-bold pd-y-xsm">
      {keyWordsList.map((item, index) => (
        <div
          key={item.id}
          id={index}
          className={`basic-chip ${setChipStyle(index)}`}
          onClick={() => {
            setIsActiveChip(index);
            getActiveChip(item.keyName);
          }}
        >
          {item.keyName}
        </div>
      ))}
    </div>
  );
};
