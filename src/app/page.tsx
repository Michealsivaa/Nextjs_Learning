import Link from "next/link";

export default function page() {
  return (
    <>
      <div>page</div>
      <Link href="/blog">Blog</Link>
      <Link href="/articles/breaking-news-123?lang=en">Read in English</Link>
      <Link href="/articles/breaking-news-123?lang=fr">Read in French</Link>
    </>
  )
}
