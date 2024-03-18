import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spin from './Spin';

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
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=067b6b09407344599f58f8a0d85fd9a3&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data=await fetch(url);
    let parseData=await data.json();
    console.log(parseData);
    this.setState({articles:parseData.articles,totalResults:parseData.totalResults,
      loading:false
    })
}

handlePrevClick=async()=>{
  
  let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=067b6b09407344599f58f8a0d85fd9a3&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
  this.setState({loading:true});
    let data=await fetch(url);
    let parseData=await data.json();
    console.log(parseData);
  this.setState({
    articles:parseData.articles,
    page:this.state.page-1,
    loading:false
  })
  // console.log(url)
}
handleNextClick = async()=>{
  if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize))){
  // }
  // else{
  let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=067b6b09407344599f58f8a0d85fd9a3&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
  this.setState({loading:true});
    let data=await fetch(url);
    let parseData=await data.json()
    console.log(parseData);
    this.setState({
      articles:parseData.articles,
    page:this.state.page+1,
    loading:false
  })
  // console.log(url)
}
}



  render() {
    return (
      <>
        <div className='container my-3'>
        <h1 className='text-center'>NewsMonkey - Top Headlines</h1>
        {/* <div className="my-3"></div> */}
        {this.state.loading && <Spin/>}

        <div className="row ">
        {!this.state.loading &&this.state.articles.map((element)=>{
          return <div className="col-lg-4 col-md-6 d-flex justify-content-center" key={element.url}>
            <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,60):""} imgUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
        })}   
        </div>
      </div>
      <div className="container my-3 d-flex justify-content-between">
      <button disabled={this.state.page===1} type="button" className="btn btn-danger" onClick={this.handlePrevClick}>&larr; Prev</button>
      <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-danger" onClick={this.handleNextClick}>Next &rarr;</button>
      </div>
      </>
    )
  }
}
// 067b6b09407344599f58f8a0d85fd9a3