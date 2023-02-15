import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {FC} from "react";
import s from './Card.module.css'

type CardItemPropsType = {
  title: string;
  description: string;
  rating: number;
  brand: string;
  price: number
  img: string
}



export const CardItem:FC<CardItemPropsType> = (
  {title, description, rating, price, brand, img}
) => {
  return (
    <Card style={{ width: '18rem'}}>
      <div className={s.imgWrapper}>
        <Card.Img variant="top" src={img} />
      </div>

      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <div>Price: {price}</div>

        <Button variant="primary">Buy</Button>
      </Card.Body>
    </Card>
  );
}