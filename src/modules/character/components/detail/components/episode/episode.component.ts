import { Component, Input, OnInit } from '@angular/core';
import { EpisodeService } from '../../../../services/episode.service';
import { IEpisode } from '../../../../../../core/models/IEpisode';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent implements OnInit {
  @Input() episodeId: any;
  episode!:IEpisode;
  constructor(private episodeService: EpisodeService) {
  }
  
  ngOnInit() {
    this.episodeService.getById(Number(this.episodeId)).subscribe(r=>{
      this.episode = r;
    })
  }

}
