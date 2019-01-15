import React from 'react';
import MainBar from "../components/commom/MainBar";

class PostPage extends React.Component {

  render() {
    const { match } = this.props;
    return (
      <div className="App">
        <MainBar/>
        { match.params.category }
        { match.params.post_id }
      </div>
    );
  }
}

export default PostPage;