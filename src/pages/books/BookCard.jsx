import PropTypes from 'prop-types';
import { FiShoppingCart } from 'react-icons/fi';
import { getImgUrl } from '../../utils/getImgUrl';
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {

  console.log(getImgUrl);
  const {
    _id,
    coverImage,
    title,
    description,
    newPrice,
    oldPrice,
  } = book;

  return (
    <div className="rounded-lg transition-shadow duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center sm:h-72 sm:justify-center gap-4">
        
        {/* Book Image */}
        <div className="sm:h-72 sm:flex-shrink-0 border rounded-md">
          <Link to={`/books/${_id}`}>
            <img
              src={getImgUrl(coverImage)}
              alt={title}
              className="w-full h-full object-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-transform duration-200"
            />
          </Link>
        </div>

        {/* Book Details */}
        <div>
          {/* Book Title */}
          <Link to={`/books/${_id}`}>
            <h3 className="text-xl font-semibold hover:text-blue-600 mb-3">
              {title}
            </h3>
          </Link>

          {/* Book Description */}
          <p className="text-gray-600 mb-5">
            {description.length > 80 ? `${description.slice(0, 80)}...` : description}
          </p>

          {/* Pricing */}
          <p className="font-medium mb-5">
            ${newPrice} <span className="line-through font-normal ml-2">${oldPrice}</span>
          </p>

          {/* Add to Cart Button */}
          <button className="btn-primary px-6 flex items-center gap-1">
            <FiShoppingCart />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;

BookCard.propTypes = {
  book: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    coverImage: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    newPrice: PropTypes.number.isRequired,
    oldPrice: PropTypes.number,
  }).isRequired,
};
