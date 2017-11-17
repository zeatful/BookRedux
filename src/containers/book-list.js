import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList(){
    return this.props.books.map(book => {
      return (
        <li onClick={() => this.props.selectBook(book) }
        key={book.title}
        className="list-group-item">
        {book.title}</li>
      );
    });
  }

  render(){
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

// glue between react and redux
function mapStateToProps(state) {
  return {
    books: state.books
  };
}

// Anything returned should be added as props to the BookList container
function mapDispatchToProps(dispatch) {
  // when selectBook is called, the result should be passed 
  // to all reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote BookList from a component to a container, needs to know about new dispatch method
export default connect(mapStateToProps, mapDispatchToProps)(BookList);