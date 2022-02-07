import { useEffect, useState } from "react";
import bug from "../../assets/icons/bug.svg";
import dark from "../../assets/icons/dark.svg";
import dragon from "../../assets/icons/dragon.svg";
import electric from "../../assets/icons/electric.svg";
import fairy from "../../assets/icons/fairy.svg";
import fighting from "../../assets/icons/fighting.svg";
import fire from "../../assets/icons/fire.svg";
import flying from "../../assets/icons/flying.svg";
import ghost from "../../assets/icons/ghost.svg";
import grass from "../../assets/icons/grass.svg";
import ground from "../../assets/icons/ground.svg";
import ice from "../../assets/icons/ice.svg";
import normal from "../../assets/icons/normal.svg";
import poison from "../../assets/icons/poison.svg";
import psychic from "../../assets/icons/psychic.svg";
import rock from "../../assets/icons/rock.svg";
import steel from "../../assets/icons/steel.svg";
import water from "../../assets/icons/water.svg";

import styles from "./Icons.module.css";

function Icons({ type, imageClass }) {
  const [img, setImg] = useState(null);

  useEffect(() => {
    switch (type) {
      case "bug":
        return setImg(bug);
      case "dark":
        return setImg(dark);
      case "dragon":
        return setImg(dragon);
      case "electric":
        return setImg(electric);
      case "fairy":
        return setImg(fairy);
      case "fighting":
        return setImg(fighting);
      case "fire":
        return setImg(fire);
      case "flying":
        return setImg(flying);
      case "ghost":
        return setImg(ghost);
      case "grass":
        return setImg(grass);
      case "ground":
        return setImg(ground);
      case "ice":
        return setImg(ice);
      case "normal":
        return setImg(normal);
      case "poison":
        return setImg(poison);
      case "psychic":
        return setImg(psychic);
      case "rock":
        return setImg(rock);
      case "steel":
        return setImg(steel);
      case "water":
        return setImg(water);
    }
  }, [type]);

  return (
    <div className={styles.sm_container}>
      <img className={styles.icon} src={img} />
    </div>
  );
}

export default Icons;
