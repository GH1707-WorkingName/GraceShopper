import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../store'

class SingleProduct extends Component {
  constructor(props){
    super(props)
  }


  render(){
    return (
      <div>
      </div> 
    )
  }
}

mapStateToProps = function(){

}

mapDispatchToProps = {}
//export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)