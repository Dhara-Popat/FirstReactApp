import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import NewsItem from '../NewsItem'
import { fetchNews } from '../redux'


function NewsContainer({ newsData, fetchNews }) {
    useEffect(() => {
        fetchNews()
    }, [])
    return newsData.loading ? (
        <h2>Loading</h2>
    ) : newsData.error ? (
        <h2>{newsData.error}</h2>
    ) : (
        <div>
            <div className="container my-3">
                <h2>News - Top Headlines</h2>
                <div className='row'>
                    {
                        newsData.news.map((element, index) => {
                            return <div className='col-md-4' key={index}>
                                <NewsItem title={element.title.slice(0, 30)}
                                    description={element.description.slice(0, 88)}
                                    imageUrl={element.urlToImage}
                                    newsUrl={element.url}
                                />
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        newsData: state.news
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchNews: () => dispatch(fetchNews())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer)


