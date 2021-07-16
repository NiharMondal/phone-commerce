import React from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from "./Button";

const Details = () => {
  return (
    <ProductConsumer>
      {(value) => {
        const { id, title, company, img, price, info, inCart } = value.detailProduct;
        return (
          <div className="container py-5">
            <div className="row">
              <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                <h1> {title} </h1>
              </div>
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} alt="product" className="img-fluid" />
                </div>
                <div className="col-10 mx-auto col-md-6 my-3">
                  <h2>Model: {title} </h2>
                  <h4 className="text-title text-muted mt-3 mb-2">
                    {" "}
                    Made By: <span>{company}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      Price: <span> ${price}</span>
                    </strong>
                  </h4>
                  <p className="fw-bold mt-3 mb-0">
                    Some Info About Product:
                  </p>
                  <p className="text-muted lead"> {info} </p>
                  <div>
                    <Link to="/">
                      <ButtonContainer>
                        Back To Product
                      </ButtonContainer>
                    </Link>
                    <ButtonContainer
                      cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id)
                      }}
                    >
                      {inCart? "In Cart": "Add to cart"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </ProductConsumer>
  );
};

export default Details;