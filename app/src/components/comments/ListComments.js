import React from 'react';
import PropType from 'prop-types';
import Comment from "./Comment";

const ListComments = ({ comments }) =>
  <div>
    <ul>
      { comments.map(comment =>
        <li key={ comment.id }>
          <Comment comment={ comment }/>
        </li>
      ) }
    </ul>
  </div>;

ListComments.propType = {
  comments: PropType.array.isRequired
};

export default ListComments;