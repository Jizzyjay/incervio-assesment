import PropTypes from 'prop-types';
import award from "../../assets/award.svg";

const categories = [
  { id: 1, name: 'All Categories' },
  { id: 2, name: 'Music and Books' },
  { id: 3, name: 'Art and Crafts' },
  { id: 4, name: 'Mom and Babies' },
  { id: 5, name: 'Softwares' },
  { id: 6, name: 'Home and Gardens' },
  { id: 7, name: 'Electronics' },
  { id: 8, name: 'Kids and Toys' },
  { id: 9, name: 'Clothings and Shoes' },
  { id: 10, name: 'Beauty and Health' },
  { id: 11, name: 'Sport' },
  { id: 12, name: 'Jewelries' }
];

const Category = ({ name }) => {
  return (
    <div className="flex flex-row gap-x-2 gap-y-4 p-2">
      <img src={award} alt="award" />
      <a href='/'>
        <p className='text-sm'>{name}</p></a>
    </div>
  );
};

Category.propTypes = {
  name: PropTypes.string.isRequired
};

const AllCategories = () => {
  return (
    <div className='bg-white w-[235px] pt-3'>
      {categories.map(category => (
        <Category key={category.id} name={category.name} />
      ))}
    </div>
  );
};

export default AllCategories;
