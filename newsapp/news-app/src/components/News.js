import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spin from './Spin';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News=(props)=> {
 const [articles,setArticles]=useState([])
 const [loading,setLoading]=useState(true)
 const [page,setPage]=useState(1)
 const [totalResults,setTotalResults]=useState(0)
//  document.title='NewsHub - '+props.category.charAt(0).toUpperCase()+props.category.slice(1);


const fetchMoreData = async () => {
  setPage(page + 1);
  setLoading(true);

  const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;

  try {
    const response = await fetch(url);
    const parseData = await response.json();

    // Check if parseData.articles is truthy before updating state
    if (parseData.articles) {
      setArticles((prevArticles) => [...prevArticles, ...parseData.articles]);
      setTotalResults(parseData.totalResults);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    setLoading(false);
  }
};

const updateNews = async () => {
  props.setProgress(10);
  const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;

  setLoading(true);

  props.setProgress(30);
  try {
    const response = await fetch(url);
    const parseData = await response.json();

    // Check if parseData.articles is truthy before updating state
    if (parseData.articles) {
      setArticles(parseData.articles);
      setTotalResults(parseData.totalResults);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    setLoading(false);
    props.setProgress(100);
  }
};


useEffect(()=>{
  updateNews();
  
},[])

const handlePrevClick=async()=>{
  setPage(page-1);
  updateNews();
}
const handleNextClick = async()=>{
  setPage(page+1);
  updateNews();
}

    return (
      <>
        <div className='container my-3'>
        <h1 className='text-center' style={{margin:'20px'}}>NewsHub - {props.category.charAt(0).toUpperCase()}{props.category.slice(1)}</h1>
        {/* <div className="my-3"></div> */}
        {loading && <Spin/>}

        
        <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length!==totalResults}
            loader={articles.length < totalResults ? <Spin /> : null}
          >
          <div className="container">
          <div className="row ">
        {articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
            <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,60):""} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
            {/* console.log({element.publishedAt}) */}
            </div>
        })}
        </div>
        </div>
        </InfiniteScroll>   
        
        
      </div>
      <div className="container my-3 d-flex justify-content-between">
      <button disabled={page===1} type="button" className="btn btn-danger" onClick={handlePrevClick}>&larr; Prev</button>
      <button disabled={page+1>Math.ceil(totalResults/props.pageSize)} type="button" className="btn btn-danger" onClick={handleNextClick}>Next &rarr;</button>
      </div>
      </>
    )
}
// 067b6b09407344599f58f8a0d85fd9a3
News.defaultProps = {
  country:'in',
  pageSize:8,
  category:'science',

}
News.propTypes={
  country: PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string,
}

export default News