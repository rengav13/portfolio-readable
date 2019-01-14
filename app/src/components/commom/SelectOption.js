import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ReactDOM from "react-dom";

import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedInput from '@material-ui/core/OutlinedInput';

const style = theme => ({
  root: {
    margin: '10px',
    width: '100%'
  },
  formControl: {
    margin: theme.spacing.unit ,
    width: '90%'
  }
});

class SelectOption extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      option: props.defaultValue || 'all',
      labelWidth: 0
    };
  }

  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth
    });
  }

  handleChange = (event) => {
    this.setState((state, props) => {
      const option = event.target.value;
      const selected = option === 'all' ? '' : option;

      props.onSelect(selected);

      return { option };
    });
  };

  render() {
    const { classes, title, options, hasAllOption } = this.props;

    return (
      <form className={ classes.root } autoComplete="off">
        <FormControl className={ classes.formControl } variant="outlined">
          <InputLabel
            ref={ ref => this.InputLabelRef = ref }
            htmlFor="select-id"
          >
            { title }
          </InputLabel>
          <Select
            value={ this.state.option }
            onChange={ this.handleChange }
            input={
              <OutlinedInput
                labelWidth={ this.state.labelWidth }
                name={ title }
                id='select-id'
              />
            }
          >
            {
              !hasAllOption ? null :
              (<MenuItem value='all'>
                  <Typography>All</Typography>
                </MenuItem>
              )
            }

            {
              options.map((option) =>
                <MenuItem
                  key={ option.id }
                  value={ option.id }
                >
                  <Typography>{ option.label }</Typography>
                </MenuItem>
              )
            }
          </Select>
        </FormControl>
      </form>
    );
  }
}

SelectOption.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  hasAllOption: PropTypes.bool,
  defaultValue: PropTypes.any
};

export default withStyles(style)(SelectOption);