import { useContext } from "react";
import AppContext from "../provider/appContext";

function Footer() {
  const {
    app: { isDark },
  } = useContext(AppContext);
  const anchorStyle = {
    color: "#C6C6C6",
  };
  return (
    <>
      <footer className="footer">
        <p>This project is based on https://github.com/hicodersofficial/weather-app (see below). 
          This version with Twitter snippets is at https://github.com/jimmoffitt/weather-app:
        </p>
        <a
          href="https://github.com/jimmoffitt/weather-app"
          target="_blank"
          rel="noreferrer"
          style={isDark ? anchorStyle : null}
        >
          <i class="fa-brands fa-github"></i> <span>GitHub</span>
        </a>
        <a
          href="https://github.com/jimmoffitt/weather-app"
          target="_blank"
          rel="noreferrer"
          style={isDark ? anchorStyle : null}
        >
          <i class="fa-solid fa-code-fork"></i> <span>Fork</span>
        </a>
        <a
          href="https://github.com/jimmoffitt/weather-app"
          target="_blank"
          rel="noreferrer"
          style={isDark ? anchorStyle : null}
        >
          <i class="fa-solid fa-star"></i> <span>Star</span>
        </a>
      </footer>
      <footer className="footer">
        <p>https://github.com/hicodersofficial/weather-app:</p>
        <a
          href="https://github.com/hicodersofficial/weather-app"
          target="_blank"
          rel="noreferrer"
          style={isDark ? anchorStyle : null}
        >
          <i class="fa-brands fa-github"></i> <span>GitHub</span>
        </a>
        <a
          href="https://github.com/hicodersofficial/weather-app"
          target="_blank"
          rel="noreferrer"
          style={isDark ? anchorStyle : null}
        >
          <i class="fa-solid fa-code-fork"></i> <span>Fork</span>
        </a>
        <a
          href="https://github.com/hicodersofficial/weather-app"
          target="_blank"
          rel="noreferrer"
          style={isDark ? anchorStyle : null}
        >
          <i class="fa-solid fa-star"></i> <span>Star</span>
        </a>
      </footer>
    </>
  );
}

export default Footer;
