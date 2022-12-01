import React, { Component } from 'react'
import NewsItem from './NewsItem'
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from 'prop-types'


export default class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 6,
        category: 'general'
      }
    
      static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
      }
    
      capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }


    constructor(props) {
        super(props)
        console.log('constructer')

        this.state = {
            articles: [],
            loaded: false,
            page:1,
            totalResults: 0
        }
        document.title = `NewsMonkey ${this.capitalizeFirstLetter(this.props.category)}`
    }

    async componentDidMount() {
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=0dd6b88e63604450b5fc945062711b2f&page=${this.state.page}&pageSize=${this.props.pageSize}`
        let data = await fetch(url)
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults
        })
    }

    fetchMoreData = async () => {
        this.setState({
            page: this.state.page + 1
        })
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=0dd6b88e63604450b5fc945062711b2f&page=${this.state.page}&pageSize=${this.props.pageSize}`
        let data = await fetch(url)
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults
        })
      };


    render() {
        return (
            <>
                <div className='container'>
                <h1 className='text-center' style={{ margin: '35px 0px' }}>News Monkey Top Headlines on  {this.capitalizeFirstLetter(this.props.category)}</h1>

                    <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}>
          <div className='container'>
            <div className='row '>
              {this.state.articles.map((element) => {
                return <div className='col-md-4 my-4' key={element.url}>
                  <NewsItem title={element.title ? element.title : ""} description={element.title ? element.description : ""} imageUrl={element.urlToImage ? element.urlToImage : ""} newsUrl={element.url ? element.url : ""} author={!element.author ? 'unknown' : element.author} date={element.publishedAt} />
                </div>
              })}
            </div>
          </div>
        </InfiniteScroll>
                </div>
                
            </>
        )
    }
}
