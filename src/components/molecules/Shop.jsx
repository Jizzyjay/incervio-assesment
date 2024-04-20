import PropTypes from "prop-types";

const ProductItem = ({ imageSrc, productName }) => {
  return (
    <div className="flex flex-col gap-y-2">
      <a href="/">
        <img
          className="w-[4.5rem] h-[4.5rem] sm:w-[6.5rem] sm:h-[6.5rem] rounded-lg"
          src={imageSrc}
          alt="product"
        />

        <p className="text-[0.75rem] font-normal">{productName}</p>
      </a>
    </div>
  );
};

ProductItem.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
};

const Shop = () => {
  const products = [
    {
      id: 1,
      imageSrc:
        "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      productName: "Technology",
    },
    {
      id: 2,
      imageSrc:
        "https://images.pexels.com/photos/709567/pexels-photo-709567.jpeg?auto=compress&cs=tinysrgb&w=400",
      productName: "Fruits",
    },
    {
      id: 3,
      imageSrc:
        "https://images.pexels.com/photos/1128259/pexels-photo-1128259.jpeg?auto=compress&cs=tinysrgb&w=400",
      productName: "Drinks",
    },
    {
      id: 4,
      imageSrc:
        "https://images.pexels.com/photos/7032143/pexels-photo-7032143.jpeg?auto=compress&cs=tinysrgb&w=400",
      productName: "Soap",
    },
    {
      id: 5,
      imageSrc:
        "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=400",
      productName: "Cars",
    },
    {
      id: 6,
      imageSrc:
        "https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=400",
      productName: "Diaries",
    },
    {
      id: 7,
      imageSrc:
        "https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      productName: "Technology",
    },
    {
      id: 8,
      imageSrc:
        "https://images.pexels.com/photos/1375807/pexels-photo-1375807.jpeg?auto=compress&cs=tinysrgb&w=400",
      productName: "Sweet",
    },
    {
      id: 9,
      imageSrc:
        "https://images.pexels.com/photos/2926575/pexels-photo-2926575.jpeg?auto=compress&cs=tinysrgb&w=400",
      productName: "Farm",
    },
    {
      id: 10,
      imageSrc:
        "https://images.pexels.com/photos/6062009/pexels-photo-6062009.jpeg?auto=compress&cs=tinysrgb&w=400",
      productName: "Biscuits",
    },
    {
      id: 11,
      imageSrc:
        "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400",
      productName: "Books",
    },
    {
      id: 12,
      imageSrc:
        "https://images.pexels.com/photos/10510747/pexels-photo-10510747.jpeg?auto=compress&cs=tinysrgb&w=400",
      productName: "Cakes",
    },
    {
      id: 13,
      imageSrc:
        "https://images.pexels.com/photos/6062009/pexels-photo-6062009.jpeg?auto=compress&cs=tinysrgb&w=400",
      productName: "Biscuits",
    },
    {
      id: 14,
      imageSrc:
        "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400",
      productName: "Books",
    },
    {
      id: 15,
      imageSrc:
        "https://images.pexels.com/photos/10510747/pexels-photo-10510747.jpeg?auto=compress&cs=tinysrgb&w=400",
      productName: "Cakes",
    },
  ];

  return (
    <div className="flex flex-col py-8 px-4 sm:px-8">
      <h3 className="text-base font-bold py-4">Shop by Department</h3>
      <div className="flex flex-row flex-wrap gap-8">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            imageSrc={product.imageSrc}
            productName={product.productName}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;
