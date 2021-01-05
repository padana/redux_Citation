import React, { Component } from 'react'
import { connect } from 'react-redux'

class DetailCitation extends Component {
    render() {
       const { myActiveCiation} = this.props
       if(!myActiveCiation){
           return(
               <div className ='col-md-7 col-7'>
                <h3 style ={{fontSize:' 3vw'}}><span className="badge bg-danger text-white">Veuiller choisir un auteur</span></h3>
               </div>
           )
       }
        return (
            <div className ='jumbotron bg-info'>
                <h3 className ='bg-primary text-white w-30 mb-4 text-center'>{myActiveCiation.auteur} 🧐🧐</h3>
                <h5 style ={{wordSpacing: "2px", lineHeight: 1.8}} className ='text-white p-2'> 
                 {myActiveCiation.citation}
                </h5>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        myActiveCiation: state.activeReducer
     }
}

export default connect(mapStateToProps)(DetailCitation)
