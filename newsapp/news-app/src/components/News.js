import React, { Component } from 'react'
import NewsItem from './NewsItem'
export default class News extends Component {
 
  constructor(){
    super();
    // console.log("Hello I am a constructor");
    this.state={
      articles:[],
      loading:true,
      page:1
    }
  }

async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=067b6b09407344599f58f8a0d85fd9a3&page=1&pageSize=20";
    let data=await fetch(url);
    let parseData=await data.json();
    console.log(parseData);
    this.setState({articles:parseData.articles,totalResults:parseData.totalResults
    })
}

handlePrevClick=async()=>{
  
  let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=067b6b09407344599f58f8a0d85fd9a3&page=${this.state.page-1}&pageSize=20`;
    let data=await fetch(url);
    let parseData=await data.json();
    console.log(parseData);
  this.setState({
    articles:parseData.articles,
    page:this.state.page-1,
  })
  // console.log(url)
}
handleNextClick = async()=>{
  if(this.state.page+1>Math.ceil(this.state.totalResults/20)){
  
}else{
  let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=067b6b09407344599f58f8a0d85fd9a3&page=${this.state.page+1}&pageSize=20`;
    let data=await fetch(url);
    let parseData=await data.json()
    console.log(parseData);
    this.setState({
      articles:parseData.articles,
    page:this.state.page+1,
  })
  // console.log(url)
}
}



  render() {
    return (
      <>
        <div className='container my-3'>
        <h2>NewsMonkey - Top Headlines</h2>
        
        <div className="row ">
        {this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
            <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,60):""} imgUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
        })}   
        </div>
      </div>
      <div className="container my-3 d-flex justify-content-between">
      <button disabled={this.state.page===1} type="button" className="btn btn-danger" onClick={this.handlePrevClick}>&larr; Prev</button>
      <button type="button" className="btn btn-danger" onClick={this.handleNextClick}>Next &rarr;</button>
      </div>
      </>
    )
  }
}
// 067b6b09407344599f58f8a0d85fd9a3