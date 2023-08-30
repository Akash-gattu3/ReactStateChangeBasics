import React, { Component } from "react";

class Car extends Component {
  constructor(props) {
    super(props);

    this.state = {
      make: props.make,
      model: props.model,
      year: props.year
    };
  }

  render() {
    const { make, model, year } = this.state;

    return (
      <div>
        <h2>Car Details</h2>
        <p>Make: {make}</p>
        <p>Model: {model}</p>
        <p>Year: {year}</p>
      </div>
    );
  }
}

export default Car;





