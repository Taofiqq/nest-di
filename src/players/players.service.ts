import { Injectable } from '@nestjs/common';

@Injectable()
export class PlayersService {
  private readonly players = [
    { id: 1, name: 'Lionel Messi' },
    { id: 2, name: 'Christiano Ronaldo' },
  ];
  getPlayers(): any {
    return this.players;
  }
}
