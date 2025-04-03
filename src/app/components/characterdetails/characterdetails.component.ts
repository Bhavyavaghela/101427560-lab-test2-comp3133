import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HpService } from '../../services/hp.service';
import { Character } from '../../models/character';

@Component({
  selector: 'app-characterdetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './characterdetails.component.html',
  styleUrls: ['./characterdetails.component.css']
})
export class CharacterdetailsComponent implements OnInit {
  character?: Character;

  constructor(private route: ActivatedRoute, private hpService: HpService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    this.hpService.getAllCharacters().subscribe((characters: Character[]) => {
      const found = characters.find((c: Character) => c.id === id);
      if (found) {
        this.character = found;
      }
    });
  }
}
