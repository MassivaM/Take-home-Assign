import React from "react";

export default class Info extends React.Component {
    
    constructor() {
        super()
        this.state = {
            loading: true,
            person: null,
            isVisible : false,
          };
    }
    

  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results[0], loading: false });
  }
  
  operation(){

    this.setState(
        {
            isVisible:true
        }
    )
      
    
  }
 

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.person) {
      return <div>No result</div>;
    }

    return (

        <div>

        <h1 style={{ fontSize: 16, fontFamily: "Open Sans"}}> 
        Click to see a person
    </h1>
            {
        this.state.isVisible?
        <div>
        <div>{this.state.person.name.title}</div>
        <div>{this.state.person.name.first}</div>
        <div>{this.state.person.name.last}</div>
        <img src={this.state.person.picture.large} />
        </div>
        : null
            }
      
        
     <button onClick={()=>this.operation()}>Click me</button>
    </div>
    
    
    
    );
  }
}