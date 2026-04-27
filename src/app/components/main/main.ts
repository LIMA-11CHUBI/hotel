import { ChangeDetectorRef, Component } from '@angular/core';
import { Toolsservice } from '../../services/toolsservice';

@Component({
  selector: 'app-main',
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {

  public allProducts: any;
  public rooms: any[] = []; 

  constructor(public tools: Toolsservice, private cdr: ChangeDetectorRef) {
    this.getHotels();
  }

  getHotels() {
    this.tools.getAllProducts()
      .subscribe((data: any) => {
        this.allProducts = data;
        this.cdr.detectChanges();
      });
  }

  getRooms(hotelId: number) {
    this.tools.getRoomsByHotelId(hotelId)
      .subscribe((data: any) => {
        this.rooms = [data];
        this.cdr.detectChanges();
      });
  }
}
