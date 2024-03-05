import React from 'react';

export const AsliP = (props) => {
    const {id, name, price, image} = props.data;
  return (
    <>
    <div>{name }</div>
    <div>${price}</div>
    <div><img src={image}></img></div>
    </>
  )
}
