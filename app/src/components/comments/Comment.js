import React from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import Information from "../commom/Information";
import Score from "../score/Score";
import { disableComment, editComment, voteComment } from "../../actions/comments";
import CommentActions from "./CommentActions";

const style = theme => ({
  root: {
    margin: theme.spacing.unit
  },
  commentBody: {
    display: 'flex',
    displayDirections: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center'
  },
  commentOptions: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});

class Comment extends React.Component {

  onNewScore = option => {
    const { comment } = this.props;
    this.props.dispatch(voteComment(comment.id, option));
  };

  onCommentUpdate = comment => {
    this.props.dispatch(editComment(comment));
  };

  onCommentDelete = () => {
    const { comment, dispatch } = this.props;
    dispatch(disableComment(comment.id));
  };

  render() {
    const { classes, comment } = this.props;
    return (
      <div className={ classes.root }>
        <div className={ classes.commentBody }>
          <Typography>
            { comment.body }
          </Typography>
          <CommentActions
            comment={ comment }
            onUpdate={ this.onCommentUpdate }
            onDelete={ this.onCommentDelete }
          />
        </div>
        <div className={ classes.commentOptions }>
          <Information
            author={ comment.author }
            timestamp={ comment.timestamp }
          />
          <Score
            score={ comment.voteScore }
            onChange={ this.onNewScore }
          />
        </div>
        <Divider/>
      </div>
    );
  }
}

Comment.propType = {
  classes: PropType.object.isRequired,
  comment: PropType.object.isRequired
};

export default connect()(withStyles(style)(Comment));