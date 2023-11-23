import React from 'react'
import Article from './Article.js'

function ArticleList({ blogData }) {
    console.log(blogData)
    let mapPosts = blogData.map(item => (
        <Article 
        articleKey={ item.id } 
        title={ item.title } 
        date={ item.date } 
        preview={ item.preview } 
        time={ item.minutes }
        />
    ))
    
    return (
        <main>
            {mapPosts}
        </main>
    )
}

export default ArticleList