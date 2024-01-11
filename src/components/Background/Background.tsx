import { ReactNode } from "react";
import "./Background.css";

const Background = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="background-universe">{children}</div>
    </>
  );
};

export default Background;
