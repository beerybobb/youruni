import Link from "next/link";
import styles from "./card.module.scss";
import { BrandText } from "../heading/BrandText";
import { urlValidate } from "@/util/urlValidate";

export type CardTypes = {
  id: string;
  state: string;
  city: string;
  name: string;
  link: string;
};

export const Card = (props: CardTypes) => {
  return (
    <div className={styles.card} data-id={props.id}>
      <div className={styles.location}>
        {props.city} · {props.state}
      </div>
      <BrandText as="h3" className={styles.uniName}>
        {props.name}
      </BrandText>
      <div className={styles.link}>
        <Link href={urlValidate(props.link)}>{props.link}</Link>
      </div>
    </div>
  );
};
