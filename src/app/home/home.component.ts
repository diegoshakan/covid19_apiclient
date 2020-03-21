import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public dados: any = [];
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.getGlobalList().subscribe(data => this.dados = [data]);
  }
}
