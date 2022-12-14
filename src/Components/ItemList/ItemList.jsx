
import { Link, useNavigate } from 'react-router-dom';

const ItemList = ({ id, title, stock, price, pictureUrl }) => {
  const navigate = useNavigate()
  return (
    <div className="group relative" onClick={()=>{navigate(`/product/${id}`)}}>
      <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
        <img src={pictureUrl} alt="Front of men&#039;s Basic Tee in black." className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href="#">
              <span aria-hidden="true" className="absolute inset-0"></span>
              {title}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{stock} unidades.</p>
        </div>
        <p className="text-sm font-medium text-gray-900">${price}</p>
      </div>
    </div>
  );
}

export default ItemList;