import React from 'react';
import PropTypes from 'prop-types';

import Snackbar from '@material-ui/core/Snackbar';
import MessageAlertContent from "./MessageAlertContent";

class MessageAlert extends React.Component {

  render() {
    const { message } = this.props;

    return (
      <Snackbar
        anchorOrigin={ {
          vertical: 'bottom',
          horizontal: 'center'
        } }
        open={ !!message }
        autoHideDuration={ 3000 }
      >
        <MessageAlertContent message={ message }/>
      </Snackbar>
    );
  }
}

MessageAlert.propTypes = {
  message: PropTypes.string
};

export default MessageAlert;