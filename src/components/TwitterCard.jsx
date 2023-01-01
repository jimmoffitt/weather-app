import React, { useContext } from "react";
import AppContext from "../provider/AppContext";

function TwitterCard({ children, className }) {
  const {
    app: { isDark },
  } = useContext(AppContext);
  const card = {
    background: "rgb(28 36 42)",
    color: "#fff",
  };
  return (
    <div className={className} style={isDark ? card : null}>
      {children}
    </div>
  );
}

export default TwitterCard;