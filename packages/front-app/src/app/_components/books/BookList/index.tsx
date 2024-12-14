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
  const data:Book[] = await getBooks();

  //
  const noImagePath = "/images/no-image1.png";

  return (
    <>
      <h1>投稿一覧</h1>

      <div className={styles.cards}>
        {data.books.length > 0 && 
          data.books.map((book:Book) => (
            <article className={styles.card}>
              <header>
                <h2>{book.title}</h2>
              </header>
              <Image
                src={noImagePath}
                alt="Picture of the book"
                width={500}
                height={500}
              />
              <div className="content">
                <p>{book.body}</p>
              </div>
              <footer>
                <Link href={"/books/" + book.id} className={styles.link}>show</Link>
                <Link href={"/books/" + book.id + "/edit"} className={styles.link}>edit</Link>
                <BookDeleteBtn bookId={book.id} />
              </footer>
            </article>
          ))
        }
      </div>
    </>
  )
}