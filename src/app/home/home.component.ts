import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { DataModel } from '../model/dataModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  data: DataModel[] = [];

  constructor(private dataService: DataService) {

  }

  ngOnInit(): void {
    this.data = this.dataService.getMockData();
  }

}
