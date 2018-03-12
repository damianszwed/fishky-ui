import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {addToCart} from '../actions'
import {getVisibleProducts} from '../reducers/products'
import ProductItem from '../components/ProductItem'
import ProductsList from '../components/ProductsList'

const FlashcardsContainer = ({flashcards}) => (
  <div>
    {flashcards.map(flashcard => (
      <div>{flashcard.question}</div>
    ))}

    {/*<Flashcard/>*/}
    <div className="input-group">
      <input type="text" className="form-control" placeholder="Question" aria-label="Question"
             aria-describedby="basic-addon2"/>
      <div class="input-group-prepend">
        <span class="input-group-text">=</span>
      </div>
      <input type="text" className="form-control" placeholder="Answer" aria-label="Answer"
             aria-describedby="basic-addon2"/>
      <div className="input-group-append">
        <button className="btn btn-outline-secondary" type="button">Edit</button>
        <button className="btn btn-outline-secondary" type="button">Delete</button>
      </div>
    </div>



  </div>
  // {/*<ProductsList title="Products">*/}
  // {flashcards.map(product =>
  //     {/*<ProductItem*/}
  // key={product.id}
  // product={product}
  // onAddToCartClicked={() => addToCart(product.id)} />
  // )}
  // </ProductsList>
);

FlashcardsContainer.propTypes = {
  flashcards: PropTypes.arrayOf(PropTypes.shape({
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  })).isRequired,
  // addToCart: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  flashcards: state.flashcards.flashcards
});

export default connect(
  mapStateToProps,
  {/*addToCart*/}
)(FlashcardsContainer)
