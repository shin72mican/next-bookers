import Link from 'next/link';

export default async function Page() {
  return (
    <>
      <h1>Top Page</h1>
      <Link href={'/books'}>books</Link>
    </>
  )
}