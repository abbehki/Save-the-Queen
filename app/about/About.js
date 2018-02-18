import React from 'react';
import {connect} from 'react-redux';
import ACTION from '../action_constants';
import { Link } from 'react-router-dom';

import injectSheet from 'react-jss';

const styles = {
  block: {
    color: 'blue'
  },
  img: {
    width: '100%'
  }
};

@injectSheet(styles) // do this, else the styles won't come... very important
class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.block}> 
      <p>Save the queen in minimum nuber of step.Try with your friends,its fun!</p>     
        <Link to="/">GO BACK AND PLAY!!</Link>        
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    about: state.about
  };
};
export default connect(mapStateToProps)(About);
