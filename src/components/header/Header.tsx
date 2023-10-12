import styles from "./header.module.scss";
import headerImage from "../../images/header.png";
import Image from "next/image";
import { BrandText } from "../heading/BrandText";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div  className={styles.text}>
        <BrandText as="h1" className={styles.title}>Find the university that’s right for you.</BrandText>
        <BrandText as="p"  className={styles.subTitle}>
          Tenetur ex explicabo et illo. Recusandae fugit eius voluptatem.
          Voluptas atque autem totam.
        </BrandText>
      </div>
      <div  className={styles.image}>
        <Image src={headerImage} width={384} height={384} alt="header image" />
      </div>
    </div>
  );
};
