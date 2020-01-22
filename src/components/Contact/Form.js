import React, { Component } from "react";
import "./form.css";

export default class Form extends Component {
  state = {
    name: "",
    email: "",
    message: ""
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  render() {
    return (
      <form
        className="form-display"
        action="https://formspree.io/krstic.bojan80@gmail.com"
        method="POST"
      >
        <h3>Пошаљите поруку</h3>
        <label>
          <input
            type="text"
            name="name"
            className="name"
            placeholder="Иme"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
        </label>
        <label>
          <input
            type="email"
            name="email"
            className="email"
            placeholder="Emaил"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
        </label>
        <label>
          <textarea
            name="message"
            className="message"
            placeholder="Порука"
            value={this.state.message}
            onChange={this.handleChange}
            required
          ></textarea>
        </label>
        <input className="btn-submit" type="submit" value="Пошаљи" />
      </form>
    );
  }
}
