import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { ICharacter } from '../../../../core/models/ICharacter';
import { ISearchFilter } from '../../../../core/interface/ISearchFilter';
import { IInfo } from '../../../../core/interface/IInfo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnInit {
  pageNo: number = 0;
  info: IInfo = {
    count: 0,
    next: '',
    pages: 0,
    prev: '',
  };
  searchFilter: ISearchFilter = {
    name: '',
    type: '',
    status: '',
    gender: '',
  };
  // card component test data
  // character!: ICharacter;
  characters: Array<ICharacter> = [];
  constructor(private characterService: CharacterService,private router:Router) {}

  ngOnInit() {
    // card component test request
    // this.characterService.getById(1).subscribe((r) => {
    //   this.character = r;
    //   console.log('this.chracter', this.character);
    // });
    this.filterCharacter();
  }
  characterDetail(id:number){
    this.router.navigateByUrl('/characters/'+id)
  }
  filterCharacter(filter: string = '') {
    this.characterService.find(filter).subscribe((r) => {
      this.characters = r.results;
      this.info = r.info;
    });
  }
  filterSearch() {
    console.log('this.searchFilter', this.searchFilter);
    let requestUrl:string='';
    Object.keys(this.searchFilter).forEach((key) => {
      let value = Object.assign(this.searchFilter)[key];
      if(value)
        requestUrl+=`${key}=${value}&`
    });
    this.filterCharacter('?'+requestUrl)
  }
  filterReset() {
    this.searchFilter = {
      name: '',
      type: '',
      status: '',
      gender: '',
    };
    this.filterCharacter();
  }
  // this func params pageIndex,previousPageIndex,pageSize,Lenght
  pageEvent(event: any) {
    let substr = '';
    if (event.pageIndex > this.pageNo) {
      substr = this.info.next.split('?')[1];
      this.filterCharacter('?' + substr);
    } else {
      substr = this.info.prev.split('?')[1];
      this.filterCharacter('?' + substr);
    }
    this.pageNo = event.pageIndex;
  }
}
