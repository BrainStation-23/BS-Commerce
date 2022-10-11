import { useAppSelector } from 'customHooks/hooks';
import { useState } from 'react';
import SingleReview from './SingleReview';

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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                  )}
                </span>
              ))}
            </div>
          </div>
          <div className="flex w-full flex-col">
            <span className="font-semibold">Message</span>
            <textarea
              className="w-full rounded border border-gray-600/20 p-1 focus:outline-green-600/20"
              rows={4}
              value={message}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setMessage(e.target.value)
              }
            />
          </div>

          <button
            className="rounded bg-green-600 py-1 px-2 text-white hover:bg-slate-800 disabled:bg-green-600/50"
            disabled={message === ''}
            onClick={handleReviewSubmit}
            type="submit"
          >
            Submit
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ProductReview;
