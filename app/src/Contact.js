import React from "react";

const initialState = {
  name: "",
  email: "",
  phone: "",
  nameError: "",
  emailError: "",
  phoneError: "",
};

export default class Contact extends React.Component {
  state = initialState;

  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  validate = () => {
    let nameError = "";
    let emailError = "";
    let phoneError = "";
    // let passwordError = "";

    if (!this.state.name) {
      nameError = "A name must have more than one character";
    }

    if (!this.state.email.includes("@")) {
      emailError = "invalid email";
    }
    if (!this.state.phone) {
        phoneError = "Please enter a phone number";
      }

    if (emailError || nameError || phoneError) {
      this.setState({ emailError, nameError, phoneError });
      return false;
    }

    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      // clear form
      this.setState(initialState);
    }
  };

  render() {
    return (
       <div> 
           <h1 style={{ fontSize: 16, fontFamily: "Open Sans"}}> 
               Contact me!
           </h1>
    
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 9, color: "red" }}>
            {this.state.nameError}
          </div>
        </div>
        <div>
          <input
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 9, color: "red" }}>
            {this.state.emailError}
          </div>
        </div>
        <div>
          <input
            name="phone"
            placeholder="Phone Number"
            value={this.state.phone}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 9, color: "red" }}>
            {this.state.phoneError}
          </div>
        </div>
        <button type="submit" color= "#ecf0f1">submit</button>
      </form>
      </div>
    );
  }
}
