import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HpService } from '../../services/hp.service';
import { Character } from '../../models/character';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-characterlist',
  standalone: true,
  imports: [CommonModule, MatCardModule, RouterModule],
  templateUrl: './characterlist.component.html',
  styleUrls: ['./characterlist.component.css']
})
export class CharacterlistComponent implements OnInit {
  characters: Character[] = [];

  constructor(private hpService: HpService) {}

  ngOnInit(): void {
    this.hpService.getAllCharacters().subscribe((data: Character[]) => {
      this.characters = data;
    });
  }
}
