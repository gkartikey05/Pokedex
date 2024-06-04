import { Link } from 'react-router-dom';
import './Pokemon.css'

function Pokemon({name, image, id}){
  return (
    <div className='Pokemon'>
      <Link to={`/pokemon/${id}`}>
        <div className='Pokemon-name'>{name}</div>
        <div><img className='Pokemon-image' src={image} alt="" /></div>
      </Link>
    </div>
  )
};

export default Pokemon;