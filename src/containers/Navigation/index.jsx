import React, { Component } from 'react';
import './index.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import TopNavBar from '../../components/TopNavBar';

const TOP_BAR_HEIGHT = 50;

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      lastScrollPosition: 0,
    };
    this.onScroll = this.onScroll.bind(this);
    this.scrollWithOffset = this.scrollWithOffset.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  // Hide or show the menu.
  onScroll() {
    const { lastScrollPosition } = this.state;
    /* eslint-disable */
    const currentScrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;
    /* eslint-enable */
    if (currentScrollPosition < 0) {
      return;
    }

    // Stop executing this function if the difference between
    // current scroll position and last scroll position is less than some offset
    if (Math.abs(currentScrollPosition - lastScrollPosition) < TOP_BAR_HEIGHT) {
      return;
    }
    this.setState({
      visible: currentScrollPosition < lastScrollPosition,
      lastScrollPosition: currentScrollPosition,
    });
  }

  scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -50;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  render() {
    const { visible } = this.state;
    return (
      <>
        <Router>
          <TopNavBar visible={visible} onScroll={this.scrollWithOffset} />
        </Router>
      </>
    );
  }
}

export default Navigation;
