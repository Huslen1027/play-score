import Stepper from "./Stepper";
import { useState } from "react";
export default function Card() {
  const [Score1, setScore1] = useState(0);
  const [Score2, setScore2] = useState(0);
  const [Score3, setScore3] = useState(0);
  return (
    <div className="person">
      <p>John Cena</p>
      {/* <Stepper /> */}
      <button onClick={() => setScore1(Score1 - 1)}>-</button>
      {Score1}
      <button onClick={() => setScore1(Score1 + 1)}>+</button>
    </div>
  );
}

//
