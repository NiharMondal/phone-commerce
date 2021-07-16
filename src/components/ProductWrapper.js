import styled from "styled-components";
export const ProductWrapper = styled.div`
  backgourd: var(--mainWhite);
  .card {
    border-color: transparent;
    transition: all .5s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all .5s linear;
  }
  &:hover{
    .card{
      border: 0.04rem solid rgba(0,0,0,0.2);
      box-shadow: 2px 2px 5px rgba(0,0,0,0.2);
    }
    .card-footer{
      backgraound: rgba(247,247,247)
    }
  }
  .img-container{
    position: relative;
    overflow: hidden;
  }
  .card-img-top{
    transition: all .5s linear;
  }
  .img-container:hover .card-img-top{
    transform: scale(1.1);

  }
  .cart-btn{
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite)
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%,100%);
    transition: all .5s linear;
  }
  .img-container:hover .cart-btn{
    transform: translate(0,0)
  }
  .cart-btn:hover{
    color: var(--mainBlue);
    cursor: pointer;
  }
`;