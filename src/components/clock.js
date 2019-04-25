import React from "react";
import { Container } from "semantic-ui-react";

class Clock extends React.Component {
  state = {
    time: new Date()
  };

  componentDidMount() {
    setInterval(this.update, 1000);
  }

  update = () => {
    this.setState({
      time: new Date()
    });
  };

  render() {
    const h = this.state.time.getHours();
    const m = this.state.time.getMinutes();
    const s = this.state.time.getSeconds();

    return (
      <Container>
        <h1>
          {h % 12}:{m < 10 ? "0" + m : m}:{s < 10 ? "0" + s : s}{" "}
          {h < 12 ? "am" : "pm"}
        </h1>
      </Container>
    );
  }
}

export default Clock;
