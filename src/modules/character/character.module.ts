import { NgModule } from '@angular/core';
import { CharacterComponent } from './components/index/character.component';
import { SharedModule } from '../shared/shared.module';
import { CharacterRoutingModule } from './character-routing.module';
import { CharacterService } from './services/character.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DetailComponent } from './components/detail/detail.component';
import { EpisodeComponent } from './components/detail/components/episode/episode.component';

@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatPaginatorModule,
    SharedModule,
    CharacterRoutingModule,
  ],
  providers: [CharacterService],
  declarations: [CharacterComponent, DetailComponent, EpisodeComponent],
})
export class CharacterModule {}
