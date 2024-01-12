import Header from "./Header";
import Card from "./Card";
import Stepper from "./Stepper";
import Reset from "./Reset";
import "../styles/container.css";
import "../styles/stepper.css";
import "../styles/card.css";
export default function Container() {
  return (
    <div className="container">
      <Header />
      <Card />
      <Card />
      <Card />
      <Reset />
    </div>
  );
}
