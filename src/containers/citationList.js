import React, { Component } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import {SelectCitation} from '../actions/index'

 class citationList extends Component {
   
    render() {
      
        return (
            <div className ='btn btn-group-vertical'>
              {this.props.myCitation.map(index =>{
                  return(
                    
                    <button key ={index.id} type="button" className="btn btn-danger m-2" onClick ={()=>this.props.SelectCitation(index)}>
                        {index.auteur}
                    </button>
                     
                  )
              })}  
            </div>
        )
    }
}

function mapStateToProps(state){
   return{
       myCitation: state.citations
   }
}

function  mapDispatchToProps(dispatch){
   return bindActionCreators({SelectCitation: SelectCitation}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(citationList)
