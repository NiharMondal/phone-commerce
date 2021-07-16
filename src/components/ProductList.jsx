import React from 'react';
import Product from './Product';
import Title from './Title';
import { ProductConsumer } from '../context';
const ProductList = () => {
  return (
    <React.Fragment>
      <div className="py-5">
        <div className="container">
          <Title name="Our" title="Products"/>
          <div className="row">
            <ProductConsumer>
              { value => {
                return value.products.map(product => {
                  return <Product product={product} key={product.id}/>
                })
              }}
            </ProductConsumer>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductList;