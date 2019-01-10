import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from "@material-ui/core/styles/index";
import IconButton from '@material-ui/core/IconButton';
import { MdAdd, MdRemove } from 'react-icons/md';
import AmountValue from "../commom/AmountValue";

const styles = {
  score: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

class Score extends React.Component {

  addScore = () => this.props.onChange(this.props.score + 1);

  subtractScore = () => this.props.onChange(this.props.score - 1);

  render() {
    const { classes, score } = this.props;

    return (
      <div className={ classes.score }>
        <IconButton
          aria-label='Add Score'
          onClick={ () => this.addScore(score) }
        >
          <MdAdd/>
        </IconButton>

        <AmountValue amount={ score }/>

        <IconButton
          aria-label='Subtract Score'
          onClick={ () => this.subtractScore(score) }
        >
          <MdRemove/>
        </IconButton>
      </div>
    );
  }
}

Score.propTypes = {
  classes: PropTypes.object.isRequired,
  score: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default withStyles(styles)(Score);