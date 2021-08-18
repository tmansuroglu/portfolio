import React, { Component } from 'react';
import './index.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const NAVBAR_HEIGHT = 50;
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

  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  // Remove the event listener when the component is unmount.
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
    if (Math.abs(currentScrollPosition - lastScrollPosition) < NAVBAR_HEIGHT) {
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
          <div className={`navbar-container ${visible ? '' : 'hide-navbar'}`}>
            <HashLink
              className="navbar-container__nav"
              smooth
              to="#top"
              scroll={(el) => this.scrollWithOffset(el)}
            >
              Home
            </HashLink>
            <HashLink
              className="navbar-container__nav"
              smooth
              to="#about"
              scroll={(el) => this.scrollWithOffset(el)}
            >
              About
            </HashLink>
            <HashLink
              className="navbar-container__nav"
              smooth
              to="#projects"
              scroll={(el) => this.scrollWithOffset(el)}
            >
              Projects
            </HashLink>
            <HashLink className="navbar-container__nav contact-button">
              Contact
            </HashLink>
            <HashLink className="navbar-container__nav">Resume</HashLink>
          </div>
        </Router>
        {/* <ContactModal
          modalVisibility={modalVisibility}
          setModalVisibility={setModalVisibility}
        /> */}
      </>
    );
  }
}

// const Navigation = () => {
//   const [modalVisibility, setModalVisibility] = useState(false);
//   const [isNavbarVisible, setIsNavbarVisible] = useState(true);
//   const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

//   const scrollWithOffset = (el) => {
//     const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
//     const yOffset = -50;
//     window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollPos = window.pageYOffset;
//       const visible = prevScrollPos > currentScrollPos;

//       setPrevScrollPos(currentScrollPos);
//       setIsNavbarVisible(visible);
//     };

//     const scrollHandler = window.addEventListener('scroll', handleScroll);

//     return scrollHandler;
//   }, []);

//   return (
//     <>
//       <Router>
//         <div
//           className={`navbar-container ${isNavbarVisible ? '' : 'hide-navbar'}`}
//         >
//           <HashLink
//             className="navbar-container__nav"
//             smooth
//             to="#top"
//             scroll={(el) => scrollWithOffset(el)}
//           >
//             Home
//           </HashLink>
//           <HashLink
//             className="navbar-container__nav"
//             smooth
//             to="#about"
//             scroll={(el) => scrollWithOffset(el)}
//           >
//             About
//           </HashLink>
//           <HashLink
//             className="navbar-container__nav"
//             smooth
//             to="#projects"
//             scroll={(el) => scrollWithOffset(el)}
//           >
//             Projects
//           </HashLink>
//           <HashLink
//             onClick={() => {
//               setModalVisibility(!modalVisibility);
//             }}
//             className="navbar-container__nav contact-button"
//           >
//             Contact
//           </HashLink>
//           <HashLink className="navbar-container__nav">Resume</HashLink>
//         </div>
//       </Router>
//       <ContactModal
//         modalVisibility={modalVisibility}
//         setModalVisibility={setModalVisibility}
//       />
//     </>
//   );
// };

export default Navigation;
