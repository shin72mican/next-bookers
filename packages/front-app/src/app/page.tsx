import Link from 'next/link';
import styles from "./Layout.module.scss";

export default function Home() {
  return (
    <>
      <h1>Top Page</h1>
      <Link href={'/books'} className={`${styles.text}`}>start</Link>
    </>
  );
}
