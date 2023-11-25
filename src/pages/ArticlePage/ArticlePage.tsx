import { useState } from "react"
import ArticleList from "../../components/ArticleList/ArticleList"
import { articles } from "../../data/articles"

export default function ArticlePage(){
const [topArticle] = useState(()=> [...articles.slice(0, 4)])
const [allArticles] = useState(()=> [...articles.slice(3)])

    return(
        <div>
            <ArticleList items={topArticle} type="top"/>
            <ArticleList items={allArticles} type="standart"/>
        </div>
    )
}