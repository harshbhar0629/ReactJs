import React from 'react'
import {FaQuoteLeft, FaQuoteRight} from "react-icons/fa"

function Card(props) {
    let review = props.review;
    return (
      <div>
          <div>
              <img src={review.image}></img>
          </div>

          <div>
              <p>{review.name}</p>
          </div>

          <div>
                <p>{review.job}</p>
          </div>

          <div>
              <FaQuoteLeft></FaQuoteLeft>
          </div>  
            
            <div>
                {review.text}
          </div>

          <div>
            <button>
                    +        
            </button> 
            <button>
                    *
            </button>
          </div>

            <div>
                <button>
                    Surprise Me
                </button>
          </div>
      </div>
  )
}

export default Card