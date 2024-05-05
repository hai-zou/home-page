import ProjectCard, { ProjectCardData } from "./project";
import UserCard, { UserCardData } from "./user";

export interface CustomCard {
  id: string;
  type: 'custom';
  name: string;
  children: React.ReactNode;
}

export type AllCard = ProjectCardData | UserCardData | CustomCard;

const CardItem = (props: { cardItem: AllCard }) => {
  const { cardItem } = props;

  return <>
    {
      cardItem.type === 'project' ? <ProjectCard projectData={cardItem} /> :
      cardItem.type === 'user' ? <UserCard userData={cardItem} /> :
      cardItem.type === 'custom' ? cardItem.children :
      <></>
    }
  </>;
};

export default CardItem;