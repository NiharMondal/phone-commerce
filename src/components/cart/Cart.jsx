import React from 'react';
import Title from '../Title';
import CartColums from './CartColums';
import { ProductConsumer } from '../../context';
import CartList from './CartList';
import CartTotal from './CartTotal';
const Cart = (props) => {
  return (
    <section>
      <ProductConsumer>
        {value => {
          const { cart } = value;
          if (cart.length > 0) {
            return (
              <React.Fragment>
                <Title name="Your" title="cart" />
                <CartColums />
                <CartList value={value} />
                <CartTotal value={value} history={ props.history}/>
              </React.Fragment>
            )
          } else {
            return <h1 className="text-center mt-3 text-danger">Your Cart Is Currently Empty</h1>
          }
        }}
      </ProductConsumer>
      
    </section>
  );
};

export default Cart;