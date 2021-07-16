import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
import { ProductWrapper } from './ProductWrapper';


const Product = ({ product }) => {
  const { id, title, img, price,inCart } = product;

  return (
    <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
      <div className="card">
        <ProductConsumer>
          {(value) => (
            <div
              className="img-container p-5"
              onClick={() => value.handleDetail(id)}
            >
              <Link to="/details">
                <img
                  src={img}
                  alt="product img"
                  className="card-img-top product-img"
                />
              </Link>
              <button
                className="cart-btn"
                disabled={inCart ? true : false}
                onClick={() => {
                  value.addToCart(id);
                  value.openModal(id);
                }}
              >
                {inCart ? (
                  <p className="mb-0 fw-bold text-white" disabled>
                    In Cart
                  </p>
                ) : (
                  <FontAwesomeIcon icon={faCartPlus} className="text-white"/>
                )}
              </button>
            </div>
          )}
        </ProductConsumer>
        <div className="card-footer d-flex justify-content-between">
          <p className="align-self-center mb-0"> {title} </p>
          <h5 className="text-blue font-italic mb-0">
            <span className="mr-1">$ {price} </span>
          </h5>
        </div>
      </div>
    </ProductWrapper>
  );
};

export default Product;

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }),
};