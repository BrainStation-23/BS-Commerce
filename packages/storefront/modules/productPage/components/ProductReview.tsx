import { useAppSelector } from 'store/hooks/index';
import { useState } from 'react';
import SingleReview from './SingleReview';
import ButtonSecondary from '@/modules/common/buttons/buttonSecondary';
import StarIcon from '@/modules/common/icons/starIcon';

interface IReview {
  name: string;
  email: string;
  message: string;
  rating: number;
}

const ProductReview: React.FC = () => {
  const [reviews, setReviews] = useState<IReview[]>([]);
  const [message, setMessage] = useState<string>('');
  const [rating, setRating] = useState<number>(0);

  const token = useAppSelector(
    (state) => state.persistedReducer.auth.access_token
  );

  const customer = useAppSelector(
    (state) => state.persistedReducer.user.customerDetails
  );

  const handleRating = (rate: number) => {
    setRating(rate);
  };

  const handleReviewSubmit = () => {
    const name: string = customer.name;
    const email: string = customer.email || customer.phone!;
    const review: IReview = {
      name,
      email,
      message,
      rating,
    };
    setReviews([...reviews, review]);
    setMessage('');
    setRating(0);
  };

  const stars = Array(5).fill(0);

  const fakeReview: IReview = {
    name: 'Walter white',
    email: 'walter@white.com',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamusvel turpis a risus hendrerit blandit. Sed imperdiet sem non lectus placerat dapibus. In scelerisque lectus eget sem ultricies, idegestas ex aliquam. Proin pretium pretium tempus. Ut dignissimnunc elementum purus viverra, ac pellentesque augue blandit. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
    rating: 3,
  };

  return (
    <div className="flex w-full flex-col justify-between md:flex-row">
      <div className="order-2 flex w-full flex-col gap-y-4 pr-10 md:order-1 md:w-3/5">
        <SingleReview
          name={fakeReview.name}
          email={fakeReview.email}
          message={fakeReview.message}
          rating={fakeReview.rating}
        />
        {reviews.map((review, index) => (
          <SingleReview
            key={index}
            name={review.name}
            email={review.email}
            message={review.message}
            rating={review.rating}
          />
        ))}
      </div>
      {token ? (
        <div className="order-1 mb-4 flex w-full flex-col items-start gap-y-4 md:order-2 md:w-2/5">
          <div className="text-2xl font-semibold">Add your review</div>
          <div className="flex">
            <div className="mr-2 font-semibold">Your rating:</div>
            <div className="flex">
              {stars.map((_, index) => (
                <span
                  key={index}
                  onClick={() => handleRating(index + 1)}
                  className="cursor-pointer"
                >
                  {index + 1 <= rating ? (
                    <StarIcon fill="currentColor" />
                  ) : (
                    <StarIcon fill="none" stroke="currentColor" />
                  )}
                </span>
              ))}
            </div>
          </div>
          <div className="flex w-full flex-col">
            <span className="font-semibold">Message</span>
            <textarea
              className="w-full rounded border border-gray-600/20 p-1 focus:outline-primary/20"
              rows={4}
              value={message}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setMessage(e.target.value)
              }
            />
          </div>
          <ButtonSecondary
            disabled={message === ''}
            onClickFunction={handleReviewSubmit}
            type="submit"
            text="Submit"
            className="ml-0 py-1 px-2"
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ProductReview;
