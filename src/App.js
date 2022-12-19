import React from "react";
 import img from "./img/IMG_5662.JPG";

class App extends React.Component {
  state = {
    fullName: "Shehab Taher",
    bio: "I Love Football",
    imgSrc: img,
    profession: "Front-End JS developer",
    show: true,
    counter:0,
  };

  handletoggle = (e) => {
    e.preventDefault();
    this.setState({ show: !this.state.show,counter:0 });
    
  };
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(),1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({counter: this.state.counter+1});
  }


  render() {
    return (
      <div className="App" style={{ textAlign: "center" }}>
        <h2>{this.state.counter} sec</h2>
        <button
          onClick={this.handletoggle}
          style={{ width: "100px", height: "50px", backgroundColor: "red" }}
        >
          Click me
        </button>
        {this.state.show ? (
          <header className="App-header">
            <h3>{this.state.fullName}</h3>
            <p>{this.state.bio}</p>
            <img src={this.state.imgSrc} alt="img"/>
            <br />
            <p>{this.state.profession}</p>
          </header>
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default App;