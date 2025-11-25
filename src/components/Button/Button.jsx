import {} from "react";
import cls from "./Button.module.css";
const isPrimary = true;
export const Button = () => {
  return <button className={isPrimary ? cls.primary : cls.btn}>Click</button>;
};
