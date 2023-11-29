import { useEffect, useState } from 'react';
import { getReviewsMovies } from 'components/services/getMovie';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const Reviews = await getReviewsMovies(movieId);
        setReviews(reviews);
      } catch (e) {
        console.log(e);
      }
    };
    fetchReviews;
  }, [movieId]);

  return (
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

export default Reviews
