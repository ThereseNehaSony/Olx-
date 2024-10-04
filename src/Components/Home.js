import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
  const { products, search, menu } = props;

  return (
    <div className="grid grid-cols-4 p-5">
      {products &&
        products
          .filter(
            (data) =>
              data &&
              data.title &&
              data.title.toLowerCase().includes(search ? search.toLowerCase() : '') &&
              data.category &&
              data.category.toLowerCase().includes(menu ? menu.toLowerCase() : '')
          )
          .map((data) => (
            <Link to="/details" state={{data:data}}>
            <div className="border border-spacing-1 p-2 ml-3 mt-3" key={data.id}>
              <img src={data.image} className="w-60 h-48" alt={data.title} />
              <h1 className="font-bold text-xl">$ {data.price}</h1>
              <h1>{data.title}</h1>
              <h1>{data.category}</h1>
            </div>
            </Link>
          ))}
    </div>
  );
};

export default Home;
