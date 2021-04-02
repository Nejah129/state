import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {show:true,
      count:0,
      person :{ fullName :"Nejah Yengui",bio:"inta3ab fi wasim wa7med", imgSrc:"logo192.png", profession:"kif kif inta3eb fi wasimm wa7med wsea3at Mohamed"
    }
     
    }
  
  }
  tog = ()=>this.setState({show:!this.state.show , count:0})
  remiz=()=>this.setState({count:this.State.count=0})
  componentDidMount(){
    setInterval(() => {this.setState({count:this.state.count+1})
      
    }, 1000);
  }

  
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button id="toggle" onClick={this.tog}>{this.state.show ? "Hide":"Show"}</button>
        {this.state.show?(<div>
          <img src={this.state.person.imgSrc} alt="Pic"/>
          
        <br/>
        {this.state.person.fullName}
        <br/>
        {this.state.person.bio}
        <br/>
        {this.state.person.profession}
        </div>

        ) : <p>cilck on show</p> }
      </div>
    )
  }
}
