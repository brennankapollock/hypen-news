import React from 'react'
import Nav from '../../components/Nav'


export const getServerSideProps = async pageContext => {
     const pageNumber = pageContext.query.pageid

     if(!pageNumber || pageNumber < 1 || pageNumber > 5) {
         return {
             props: {
                 article: [],
                 pageNumber: 1,
             }
         }
     }

     const response = await fetch(`https://newsapi.org/v2/everything?domains=techcrunch.com&sortBy=popularity&pageSize=10&page=${pageNumber}`,
        { 
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
        }}

     );

     const apiJSON = await response.json();

     const {articles} = apiJSON;

     return {
         props: {
             articles,
             pageNumber: Number.parseInt(pageNumber),
         }
     }
}

export default function Feed({pageNumber, articles}) {
    return (
        <div className="my-8 mx-1 lg:mx-2 lg:px-12 flex flex-col font-mono" >
            <Nav/>
            {articles.map((article, index) => (
                <div key={index} className="py-8 m-4 px-6  content-center" >
                    <a href={article.url}> <h1 className="text-black hover:text-blue-400 text-center text-xl font-bold">{article.title}</h1>  </a>
                    <p className="pt-4 pb-4 font-small italic text-center">{article.description}</p>
                    <img className="rounded-lg mx-auto" src={article.urlToImage} />
                </div>
            ))}
        </div>
    )
}
