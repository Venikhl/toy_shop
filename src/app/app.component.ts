import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Toy} from './entities/Toy';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService]
})
export class AppComponent implements OnInit {
  title = 'toy_shop';

  toys: Toy[]=[];
  bought_toys: string[]=[];
     
  constructor(private httpService: HttpService){}
      
  ngOnInit(){
    this.httpService.getData().subscribe((data: any) => this.toys=data.toyList);
  }

  

  public addToCart (_name: any){
    this.bought_toys.push(_name);
    console.log(this.bought_toys);
  }
}
