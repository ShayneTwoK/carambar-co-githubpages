import { Component, OnInit } from '@angular/core';
import { BlagueService } from '../blague.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-random-blague',
  standalone: true,
  imports: [NgIf],
  templateUrl: './random-blague.component.html',
  styleUrl: './random-blague.component.css'
})
export class RandomBlagueComponent implements OnInit {

  blague: any;

  constructor(private blagueService: BlagueService) { }

  ngOnInit(): void {
    this.blagueService.getRandomBlague().subscribe(data => {
      this.blague = data;
    });
  }

}
