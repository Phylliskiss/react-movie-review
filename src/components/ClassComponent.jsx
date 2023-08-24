/* eslint-disable no-unused-vars */
import React, { Component } from "react";

export class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { movies: [] };
  }

  componentDidMount() {
    fetch(
      "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=evUQHLLMG2DdnAk5rQHsMCViqxR4nf1s"
    )
      .then((info) => info.json())
      .then((displayedInfo) => {
        console.log(displayedInfo);
        this.setState({ movies: displayedInfo.results });
        // always remember to add .result or whatever is in the console
      });
  }

  render() {
    return (
      <div>
        <div className="">
          {/* // always remember to console.log the data to be able to determine the names for it */}
          {this.state.movies.map((movie, index) => {
            return (
              <div key={index} className="border">
                <p>Byline:{movie.byline}</p>
                <p>Critic Picks:{movie.critics_pick}</p>
                <p>Title:{movie.display_title}</p>
                <p>Headline:{movie.headline}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ClassComponent;
