import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import * as SC from '../Reviews/Reviews.styled'
import { getReviewsMovie } from 'services/getMovie';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const Reviews = await getReviewsMovie(movieId);
        setReviews(Reviews);
      } catch (e) {
        console.log(e);
      }
    };
    fetchReviews()
  }, [movieId]);

  return reviews.length === 0 ? (
      <h3>No Reviews</h3>
    ) : (
    
    <SC.List>
      {reviews.map(({ id, author, content }) => (
        <SC.Item key={id}>
          <SC.ReviewsDescr>{author}</SC.ReviewsDescr>
          <SC.Descrp>{content}</SC.Descrp>
        </SC.Item>
      ))}
    </SC.List>
  );
};

export default Reviews;
