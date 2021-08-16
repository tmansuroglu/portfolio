import './index.scss';
import PropTypes from 'prop-types';
import Ratings from 'react-ratings-declarative';

const Skill = ({ icon, title, rating }) => (
  <div className="skill">
    <h5>{title}</h5>
    <img src={icon} alt={title} className="skill__icon" />
    <Ratings
      rating={rating}
      changeRating={false}
      widgetEmptyColors="#434343"
      widgetRatedColors="white"
      widgetDimensions={25}
      widgetSpacings={3}
    >
      <Ratings.Widget />
      <Ratings.Widget />
      <Ratings.Widget />
    </Ratings>
  </div>
);

Skill.propTypes = {
  icon: PropTypes.instanceOf(Image),
  title: PropTypes.string,
  rating: PropTypes.number,
};

Skill.defaultProps = {
  icon: <img src="" alt="placeholder" />,
  title: 'HTML5',
  rating: 0,
};

export default Skill;
