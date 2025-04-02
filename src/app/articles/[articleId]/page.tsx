import Link from 'next/link'
import React from 'react'

export default async function page({params, searchParams} : {
    params: Promise<{articleId: string}>;
    searchParams: Promise<{lang?: 'en'| 'sp' | 'fr'}>
}) {
    const {articleId} = await params;
    const {lang = "en"} = await searchParams;
  return (
    <>
        <div>News article id</div>
        <p>Reading in language</p>

        <div>
            <Link href={`/articles/${articleId}?lang=en`}>English</Link>
            <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
            <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
        </div>
    </>
  )
}
