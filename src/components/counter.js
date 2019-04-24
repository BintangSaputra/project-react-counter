import React from "react";
import { Button, Container, Icon } from "semantic-ui-react";

class Counter extends React.Component {
  state = {
    counter: 0
  };

  onClick = value => {
    this.setState({
      counter: this.state.counter + value
    });
  };

  render() {
    const container = {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column"
    };

    const title = {
      display: "flex",
      justifyContent: "center"
    };

    const styledButton = {
      display: "flex",
      justifyContent: "center",
      marginBottom: "2px",
      fontSize: "30px"
    };
    return (
      <Container>
        <div style={container}>
          <h1 style={title}>Counter Practice</h1>
          <i class="thumbs up icon" />
          <h1 style={title}>{this.state.counter}</h1>
          <Icon />
          <div style={styledButton}>
            <Button onClick={() => this.onClick(1)} inverted color="orange">
              +
            </Button>
          </div>
          <div style={styledButton}>
            <Button onClick={() => this.onClick(-1)} inverted color="pink">
              -
            </Button>
          </div>
        </div>
      </Container>
    );
  }
}

export default Counter;
