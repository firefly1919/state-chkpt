import React from 'react'
import CardList from './Cardslist';
const ListCard = ({data}) => {
    console.log(data);
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "30px",
          marginTop: "5%",
        }}
      >
        {data.map((el) => (
          <CardList key={el.id} el={el} />
        ))}
      </div>
    );
  };
  
  export default ListCard;
  
