import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem';
import axios from 'axios'
import { Loading } from './Loading';

function FunBCom() {

    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading({loading: true})
        axios.get(`https://newsapi.org/v2/everything?q=tesla&from=2021-12-20&sortBy=publishedAt&apiKey=ca89ac78d81a4c8bb2a30bb5a4aa0856`)
            .then(res => {
                const n = res.data;
                console.log(n.articles);
                const news = n.articles;
                setNews(() => news )
                setLoading( () => loading)
            })
    },[]);

    return (
        <div className="container my-3">
            <h2>News - Top Headlines</h2>
            <div className='row'>
            {!loading ?
                news.map((element, index) => {
                    return <div className='col-md-4' key={index}>
                        <NewsItem title={element.title.slice(0, 30)}
                            description={element.description.slice(0, 88)}
                            imageUrl={element.urlToImage}
                            newsUrl={element.url}
                        />
                    </div>
                }): <Loading message="Loading..." /> }
            </div>
        </div>
    )
}

export default FunBCom
