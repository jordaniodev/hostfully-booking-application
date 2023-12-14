import { Card } from "../Card";
import { ListCardProps } from "./ListCard.types";
import { ContainerCards } from "./ListCard.style";
import { Container } from "../../layout/Container/Container.style";
export const ListCard = ({ cards }: ListCardProps) => {
  return (
    <Container>
      <ContainerCards>
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
      </ContainerCards>
    </Container>
  );
};
