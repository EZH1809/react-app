import {} from "react";
import cls from "./Button.module.css";
const isPrimary = true;
export const Button = (props) => {
  console.log(props);
  return (
    <button className={`${cls.btn} ${isPrimary ? cls.primary : ""}`}>
      Click
    </button>
  );
  // <button className={isPrimary ? cls.primary : cls.btn}>Click</button>;
};
