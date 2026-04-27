import { Component } from '@angular/core';
import { Toolsservice } from '../../services/toolsservice';

@Component({
  selector: 'app-main',
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {

  public allProducts: any;
  public rooms: any[] = []; 

  constructor(public tools: Toolsservice) {
    this.getHotels();
  }

  getHotels() {
    this.tools.getAllProducts()
      .subscribe((data: any) => {
        this.allProducts = data;
      });
  }

  getRooms(hotelId: number) {
    this.tools.getRoomsByHotelId(hotelId)
      .subscribe((data: any) => {
        this.rooms = data;
      });
  }
}
