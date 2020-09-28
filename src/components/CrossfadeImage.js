import React, { Component } from "react";

export default class CrossfadeImage extends Component {

  state = {
    topSrc: this.props.src,
    bottomOpacity: 0,
    bottomSrc: this.props.src
  };

  componentWillReceiveProps(newProps) {
    const oldSrc = this.state.topSrc;
    const newSrc = newProps.src;
    if (newSrc !== oldSrc) {
      // Reset the component everytime we receive new prop, to
      // cancel out any animation that's still going on
      this.setState({ bottomSrc: false, topSrc: false }, () =>
        this.setState(
          // Opacity less than 1 takes precendence in stacking order
          { bottomSrc: oldSrc, topSrc: newSrc, bottomOpacity: 0.99 },
          () => {
            // One of the few times setTimeout does wonders, this is for
            // getting fade out transition without css keyframe
            if (!this.timeout) clearTimeout(this.timeout);
            this.timeout = setTimeout(
              () => this.setState({ bottomOpacity: 0 }),
              20
            );
          }
        )
      );
    }
  }

  render() {
    const { topSrc, bottomOpacity, bottomSrc } = this.state;
    return (
      <div style={{ position: "relative" }}>
        {topSrc &&
          <img
            style={{ position: "absolute" }}
            alt={''}
            src={topSrc}
          />}
        {bottomSrc &&
          <img
            style={{
              opacity: bottomOpacity,
              transition: 'opacity .5s ease'
            }}
            alt={''}
            src={bottomSrc}
          />}
      </div>
    );
  }
}

