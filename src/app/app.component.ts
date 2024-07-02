import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BlagueService } from './blague.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {


  oneBlague: any;
  oneRandomBlague: any;
  blagues: any;
  idBlagueInput: number = 0; 
  
  title = 'carambar-co-githubpages';

  constructor(private modalService: NgbModal, private blagueService: BlagueService) {
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }

  ngOnInit(): void {
    this.fetchAllBlague();
  }

  fetchRandomBlague(): void {
    this.blagueService.getRandomBlague().subscribe(data => {
      this.oneRandomBlague = data;
    });
  }

  fetchOneBlague(): void {
    this.blagueService.getBlague(this.idBlagueInput).subscribe(data => {
      this.oneBlague = data;
    });
  }

  fetchAllBlague(): void {
    this.blagueService.getAllBlague().subscribe(data => {
      this.blagues = data;
    });
  }
}
