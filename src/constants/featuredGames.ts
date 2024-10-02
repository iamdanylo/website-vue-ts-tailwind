import game1 from './../assets/images/games/game_1.webp';
import game2 from './../assets/images/games/game_2.webp';
import game3 from './../assets/images/games/game_3.webp';
import game4 from './../assets/images/games/game_4.webp';


export type GameCard = {
  title: string;
  image: string;
  likes: number;
  plays: number;
  views: number;
}

export const featuredGames: GameCard[] = [
  {
    title: "World of the Future",
    image: game1,
    likes: 124,
    plays: 24,
    views: 325,
  },
  {
    title: "The Lost Armada",
    image: game2,
    likes: 124,
    plays: 24,
    views: 325,
  },
  {
    title: "Eclipse of Eternity",
    image: game3,
    likes: 124,
    plays: 24,
    views: 325,
  },
  {
    title: "Mystery Manor: Shadows Unveiled",
    image: game4,
    likes: 124,
    plays: 24,
    views: 325,
  },
]