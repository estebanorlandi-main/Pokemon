import { BiHeart, BiShield } from "react-icons/bi";
import { MdSpeed } from "react-icons/md";
import { RiSwordFill } from "react-icons/ri";

import styles from "./StatItem.module.css";

const iconSize = 24;

const stats = {
  hp: <BiHeart size={iconSize} />,
  defense: <BiShield size={iconSize} />,
  attack: <RiSwordFill size={iconSize} />,
  "special-attack": "SpA",
  "special-defense": "SpD",
  speed: <MdSpeed size={iconSize} />,
};

export function StatItem({ stat: { name, base }, color }) {
  return (
    <li className={`${styles.stat} c-${color}`}>
      <div className={styles.stat_name}>{stats[name]}</div>
      <span className={styles.stat_value}>{base}</span>
    </li>
  );
}
