import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import CitationList from './citationList'
import DetailCitation from './DetailCitation'

export default class App extends Component {
  render() {
    return (
      <div className ='container'>
        <div className ='jumbotron bg-dark'>
          <h3 className ='text-center text-white'>CITATIONS REACT-REDUX by <span style ={{fontSize:' 2vw'}} className='bg-danger'>padaneamet@hotmail.com</span></h3>
        </div>


       <div className ='row'>
        <div className ='col-md-5 col-5'>
          <CitationList />
        </div>

        <div className ='col-md-7 col-7'>
          <DetailCitation />
        </div>

       </div>
       
      </div>
    )
  }
}
