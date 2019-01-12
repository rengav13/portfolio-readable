import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import { MdArrowDownward } from 'react-icons/md';
import IconButton from '@material-ui/core/IconButton';

import SelectOption from "../../commom/SelectOption";

const SORTBY = [
  {
    id: 'timestamp',
    label: 'Date'
  },
  {
    id: 'voteScore',
    label: 'Vote score'
  }
];

const style = (theme) => ({
  root: {
    display: 'flex',
    displayDirections: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  baseTransition: {
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    })
  },
  ascending: {
    transform: 'rotate(0deg)'
  },
  descending: {
    transform: 'rotate(180deg)'
  }
});

class PostsSortBy extends React.Component {

  state = {
    sortBy: 'timestamp',
    ascending: true
  };

  buttonWithTransition = (classes, flag) =>
    classnames(
      classes.baseTransition,
      {
        [ classes.ascending ]: flag,
        [ classes.descending ]: !flag
      }
    );

  handleChangeSortType = () => {
    this.setState((state, props) => {
      const isAscending = !state.ascending;
      props.onChange({ sortBy: state.sortBy, order: this.getOrder(isAscending) });
      return { ascending: isAscending };
    });
  };

  handleSelect = (sortBy) => {
    this.setState((state, props) => {
      props.onChange({ sortBy: state.sortBy, order: this.getOrder(state.ascending) });
      return { sortBy };
    });
  };

  getOrder = (ascending) => ascending ? 'asc' : 'desc';

  render() {
    const { classes } = this.props;

    return (
      <div className={ classes.root }>
        <SelectOption
          title='Sort by'
          options={ SORTBY }
          onSelect={ this.handleSelect }
          defaultValue={ SORTBY[ 0 ].id }
        />

        <IconButton
          onClick={ this.handleChangeSortType }
          aria-label="Change sort type"
          className={ this.buttonWithTransition(classes, this.state.ascending) }
        >
          <MdArrowDownward size={ 20 }/>
        </IconButton>
      </div>
    );
  }
}

PostsSortBy.propTypes = {
  classes: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};

export default withStyles(style)(PostsSortBy);