import styles from "./Cards.module.css";

export type Props = {
  likebutton: boolean;
  title: string;
  artist: string;
  image: string;
};

function Trackcard(props: Props) {
  return (
    <div className={styles.trackcard}>
      <img className={styles.cardimage} src={props.image} />
      <h3 className={styles.title}>{props.title}</h3>
      <h4 className={styles.artist}>{props.artist}</h4>
      <button className={styles.likebutton}>{props.likebutton}</button>
    </div>
  );
}

export default Trackcard;
