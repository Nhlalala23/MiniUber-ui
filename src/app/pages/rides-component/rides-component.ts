import { Component, OnInit } from '@angular/core';
import { RideServices } from '../../services/ride';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-rides-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rides-component.html',
  styleUrl: './rides-component.css',
})
export class RidesComponent implements OnInit {
  rides:any[]=[];

  constructor(private rideService:RideServices){}
  ngOnInit(){
    this.rideService.getRides().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.rides = res;
      },
      error:(err) =>{
        console.error(err);
      }
    });
  }

}
