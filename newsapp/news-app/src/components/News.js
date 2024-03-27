import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spin from './Spin';
import PropTypes from 'prop-types'

export default class News extends Component {
 
  static defaultProps = {
    country:'in',
    pageSize:8,
    category:'science',

  }
  static propTypes={
    country: PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,
  }

  constructor(props){
    super();
    // console.log("Hello I am a constructor");
    this.state={
      articles:[],
      loading:true,
      page:1
    }
    document.title='NewsMonkey - '+props.category.charAt(0).toUpperCase()+props.category.slice(1);
  }

async updateNews(){
  const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&&apiKey=067b6b09407344599f58f8a0d85fd9a3&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  this.setState({loading:true});
  let data=await fetch(url);
  let parseData=await data.json();
  console.log(parseData);
  this.setState({articles:parseData.articles,totalResults:parseData.totalResults,
    loading:false
  })
}

async componentDidMount(){
    this.updateNews();
}

handlePrevClick=async()=>{
  this.setState({page:this.state.page-1});
  this.updateNews();
}
handleNextClick = async()=>{
  this.setState({page:this.state.page+1});
  this.updateNews();
}



  render() {
    return (
      <>
        <div className='container my-3'>
        <h1 className='text-center' style={{margin:'20px'}}>NewsMonkey - {this.props.category.charAt(0).toUpperCase()}{this.props.category.slice(1)}</h1>
        {/* <div className="my-3"></div> */}
        {this.state.loading && <Spin/>}

        <div className="row ">
        {!this.state.loading &&this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
            <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,60):""} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
            {/* console.log({element.publishedAt}) */}
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