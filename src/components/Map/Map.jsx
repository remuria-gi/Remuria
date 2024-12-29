import React from "react";
import styles from "./Map.module.css";

const GenshinMap = () => {
  return (
    <div className={styles.MapContainer}>
      <iframe
        className={styles.MapIFrame}
        src="https://act.hoyolab.com/ys/app/interactive-map/index.html?lang=en-us#/map/2"
        title="genshin-map"
      ></iframe>
    </div>
  );
};

export default GenshinMap;
