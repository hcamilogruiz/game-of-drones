import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Move } from '../../models/move';
import { PlayService } from '../../services/play.service';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-round',
  templateUrl: './round.component.html',
  styleUrls: ['./round.component.css']
})
export class RoundComponent implements OnInit {
  private move: any = '';

  constructor(
    private router: Router,
    public playService: PlayService,
    private gameService: GameService
  ) { }

  ngOnInit() {
    this.playService.nextRound();
  }

  play() {
    // tslint:disable-next-line:curly
    if (this.move === '') return;
    const m = this.playService.objPlay.moves.filter(item => {
      return item._id === this.move;
    })[0];
    const respose = this.playService.nextMove(m);
    if (respose) {
      this.gameService.saveGame().then((rta) => {
        this.router.navigate(['/win']);
      });
    }

    this.move = '';
  }

}
