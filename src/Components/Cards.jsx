import React from 'react';

function Cards({ cards }) {
  return (
    <div className='card-container'>
      {cards.map((card, index) => {
        let badgeText;
        
        // Dynamically set badgeText for each card
        if (card.openSpots === 0) {
          badgeText = "SOLD OUT";
        } else if (card.location === "Online") {
          badgeText = "ONLINE";
        }

        return (
          <div key={index} className='card'>
            <div>{badgeText && <div className='card--badge'>{badgeText}</div>}</div>
            <img src={card.img} className='card--image' alt={card.title} />
            <div className='card--stats'>
              <img src='/src/assets/Star 1.png' className='card--star' alt='star'/>
              {card.rating} ({card.reviewCount}) . {card.country} | {card.location}
              <div className='card--title'>{card.title}</div>
              <div className='card--price'>${card.price} / {card.item}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
