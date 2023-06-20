import React, { Component } from "react";
import './Form.css';

class Form extends Component {

    state = {
        name: '',
        tag: '',
      };

      handleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value })
      }

      handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
      }

      reset = () => {
        this.setState({ name: '', tag: '', })
      }

      // handleNameChange = e => {
  //   // console.log(e.currentTarget.value);
  //   this.setState({ name: e.currentTarget.value });
  // }

      render() {
        return ( 
            <form className="form" onSubmit={this.handleSubmit}>
        <label htmlFor="" className="form__label">
          Name <input className="form__input" type="text" value={this.state.name} 
          name="name"
          onChange={this.handleChange}/>
        </label>
        <label htmlFor="" className="form__label">
          Tag <input className="form__input" type="text" value={this.state.tag} 
          name="tag"
          onChange={this.handleChange}/>
        </label>
        <button type="submit" className="form__btn">Send</button>
      </form>
        )
      }
}

export default Form;
