import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {addToCart} from '../actions'
import {getVisibleProducts} from '../reducers/products'
import ProductItem from '../components/ProductItem'
import ProductsList from '../components/ProductsList'

const FlashcardsContainer = ({flashcards}) => (
  <div>
    {
      flashcards.length
    }
    {flashcards.map(flashcard => {
        // flashcard.question
      // {flashcards:question}
    })}
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
