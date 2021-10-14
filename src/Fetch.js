import React, { Component } from "react";

class Fetch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/photos/?_limit=50")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ data: data });
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div>
        {this.state.data.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <div>
              <img
                src={item.thumbnailUrl}
                alt={item.title}
                style={{ height: "150px", width: "150px" }}
              />
            </div>
            <div
              style={{
                marginLeft: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <h4
                style={{ alignSelf: "flex-start", justifySelf: "flex-start" }}
              >
                {item.title}
              </h4>
              <a
                style={{ alignSelf: "flex-start", justifySelf: "flex-start" }}
                href={item.url}
              >
                {item.url}
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Fetch;
