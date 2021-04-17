import React from "react";
import slots from "../helpers/slots";

const TimeSlots = () => {
  return (
    <div>
      {slots(8, 25).map((slot) => (
        <button> {`${slot} `}</button>
      ))}
    </div>
  );
};

export default TimeSlots;
