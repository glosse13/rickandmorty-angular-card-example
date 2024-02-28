import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../../services/character.service';
import { ICharacter } from '../../../../core/models/ICharacter';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  character!: ICharacter;
  constructor(
    private characterService: CharacterService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.characterService
      .getById(Number(this.route.snapshot.paramMap.get('id')))
      .subscribe((r) => {
        console.log('r', r);
        this.character = r;
      });
  }
  episodeIdSelection(episodeUrl: string) : string {
    const seperatorUrl = episodeUrl.split('/');
    const id = seperatorUrl[seperatorUrl.length - 1];
    return id;
  }
}
