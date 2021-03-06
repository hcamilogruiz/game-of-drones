import { Move } from './move';
import { User } from './user';
import { Round } from './round';
import { Game } from './game';

export class Play {
  scores: Round[] = [];
  user1: User = new User();
  user2: User = new User();
  currentUser: string = null;
  titleRound: string = null;
  moves: Move[] = [];
  winner: string;
  count = 1;
  game: Game = new Game();
}
