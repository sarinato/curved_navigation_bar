import React from 'react';
import CurvedNavBar from 'rn-curved-navigation-bar'


export default class App extends React.Component{

  render() {
    return(

      <CurvedNavBar icons={['auto-fix','alarm','android-auto','auto-fix','bell-ring']} 
        navColor={'#482ff7'}
        cb={(id)=>{this.setState({page:id})}} //change the parent's state of page 
      />
    );
  }
}