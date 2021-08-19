import React, { Component } from 'react';
import './index.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import TopNavBar from '../../components/TopNavBar';
import SideNavBar from '../../components/SideNavBar';
import ContactModal from '../../components/ContactModal';

const TOP_BAR_HEIGHT = 50;

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isContainervisible: true,
      lastScrollPosition: 0,
      showOffCanvas: false,
      isContactModalVisible: false,
    };
    this.onScroll = this.onScroll.bind(this);
    this.scrollWithOffset = this.scrollWithOffset.bind(this);
    this.handleCloseOffCanvas = this.handleCloseOffCanvas.bind(this);
    this.handleShowOffCanvas = this.handleShowOffCanvas.bind(this);
    this.handleCloseContactModal = this.handleCloseContactModal.bind(this);
    this.handleOpenContactModal = this.handleOpenContactModal.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  handleCloseContactModal() {
    this.setState((state) => ({
      ...state,
      isContactModalVisible: false,
    }));
  }

  handleOpenContactModal() {
    this.setState((state) => ({
      ...state,
      isContactModalVisible: true,
    }));
  }

  handleShowOffCanvas() {
    this.setState((state) => ({
      ...state,
      showOffCanvas: true,
    }));
  }

  handleCloseOffCanvas() {
    this.setState((state) => ({
      ...state,
      showOffCanvas: false,
    }));
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
    this.setState((state) => ({
      ...state,
      isContainervisible: currentScrollPosition < lastScrollPosition,
      lastScrollPosition: currentScrollPosition,
    }));
  }

  scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -50;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  render() {
    /*  eslint-disable  */
    const { isContainervisible, showOffCanvas, isContactModalVisible } =
      this.state;
    /*  eslint-enable  */

    return (
      <>
        <Router>
          <TopNavBar
            isContainervisible={isContainervisible}
            onScroll={this.scrollWithOffset}
            handleOpenContactModal={this.handleOpenContactModal}
          />
          <SideNavBar
            isContainerVisible={isContainervisible}
            showOffCanvas={showOffCanvas}
            handleCloseOffCanvas={this.handleCloseOffCanvas}
            handleShowOffCanvas={this.handleShowOffCanvas}
            onScroll={this.scrollWithOffset}
            handleOpenContactModal={this.handleOpenContactModal}
          />
        </Router>
        <ContactModal
          modalVisibility={isContactModalVisible}
          closeModal={this.handleCloseContactModal}
        />
      </>
    );
  }
}

export default Navigation;
