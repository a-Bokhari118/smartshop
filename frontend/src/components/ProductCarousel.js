import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './Loader';
import Message from './Message';
import { listTopProducts } from '../actions/productActions';
import pp1 from '../pp1.jpg';
import pp2 from '../pp2.png';
import pp3 from '../pp3.png';
const ProductCarousel = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(
    (state) => state.productTopRated
  );

  useEffect(() => {
    dispatch(listTopProducts());
  }, [dispatch]);
  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <Carousel pause='hover' className='bg-dark'>
      <Carousel.Item>
        <Image src={pp1} alt='phone' />
      </Carousel.Item>
      <Carousel.Item>
        <Image src={pp2} alt='phone2' />
      </Carousel.Item>
      <Carousel.Item>
        <Image src={pp3} alt='phone2' />
      </Carousel.Item>
    </Carousel>
  );
};

export default ProductCarousel;
