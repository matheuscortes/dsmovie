import './style.css'; 

import {ReactComponent as FullStar} from 'assets/full-star.svg'; 
import {ReactComponent as HalfStar} from 'assets/half-star.svg'; 
import {ReactComponent as EmptyStar} from 'assets/empty-star.svg'; 

function MovieStars() {
    return(
        <div className="dsmovie-stars-container">
            <FullStar />            
            <FullStar />            
            <FullStar /> 
            <HalfStar />
            <EmptyStar />         
        </div>
    ); 
}

export default MovieStars; 