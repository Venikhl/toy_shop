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
  bought_toys: Toy[]=[];
     
  constructor(private httpService: HttpService){}
      
  ngOnInit(){
    this.httpService.getData().subscribe((data: any) => this.toys=data.toyList);
  }

  

  public addToCart (_toy: any){
    this.bought_toys.push(_toy);
    // console.log(JSON.stringify(this.bought_toys));
    localStorage.setItem("toys", JSON.stringify(this.bought_toys));
    // localStorage.setItem <- типа бд
  }

  // public goToCart(){
  //   // console.log(JSON.stringify(this.bought_toys));
  //   localStorage.setItem("toys", JSON.stringify(this.bought_toys));
  // }
}
