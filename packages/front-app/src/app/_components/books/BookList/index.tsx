import Link from 'next/link'
import { getBooks } from "@/services/books/getBooks";
import { BookDeleteBtn } from "@/app/_components/books/BookDeleteBtn";
import styles from './BookList.module.scss';
import Image from 'next/image'

type Book = {
  id: string,
  title: string,
  body: string,
}

export const BookList = async() => {
  // 本一覧情報の取得
  const books:Book[] = await getBooks();

  //
  const noImagePath = "/images/no-image1.png";

  return (
    <>
      <div className={styles.main}>
        <div className={styles.content}>
          <ul className={styles.cards}>
          {books.length > 0 && 
            books.map((book:Book) => (
              <li className={styles.card} key={book.id}>
                <figure className={styles.cardFigure}>
                  <div>
                    <Image
                      src={noImagePath}
                      alt="Picture of the book"
                      width={500}
                      height={500}
                    />
                  </div>
                  <figcaption className="">
                    <h3>{book.title}</h3>
                  </figcaption>
                  <p>{book.body}</p>
                  <footer>
                    <Link href={"/books/" + book.id} className={styles.link}>show</Link>
                    <Link href={"/books/" + book.id + "/edit"} className={styles.link}>edit</Link>
                    <BookDeleteBtn bookId={book.id} />
                  </footer>
                </figure>
              </li>
            ))
          }
          </ul>
        </div>
      </div>
    </>
  )
}