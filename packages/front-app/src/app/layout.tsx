// import "../styles/globals.css";
// import { Footer } from "./_components/Footer";
// import { Header } from "./_components/Header";
// import { Nav } from "./_components/Nav";
import styles from './Layout.module.scss';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // ★:全ての画面に適用される共通レイアウト
  return (
    <html lang="ja">
      <body className={styles.body}>
        {/* <div className={styles.container}> */}
          {/* <Header /> */}
          {/* <div className={styles.content}> */}
            {/* <Nav /> */}
            <main>{children}</main>
          {/* </div> */}
          {/* <Footer /> */}
        {/* </div> */}
      </body>
    </html>
  );
}