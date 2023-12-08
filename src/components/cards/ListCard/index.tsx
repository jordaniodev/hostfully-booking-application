import { Card } from "../Card";
import { ListCardProps } from "./ListCard.types";
import './ListCard.scss'
export const ListCard = ({ cards }: ListCardProps) => {
  return (
    <div className="container">
      <div className="containerCards">
        {cards.map((card) => {
          return (
            <Card
              imageUrl={card.imageUrl}
              title={card.title}
              subTitle={card.subTitle}
              price={card.price}
            />
          );
        })}
      </div>
    </div>
  );
};
