import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Toolsservice {

  constructor(public http: HttpClient) {}

  getAllProducts() {
    return this.http.get(
      'https://hotelbooking.stepprojects.ge/api/Hotels/GetAll'
    );
  }

  
  getRoomsByHotelId(hotelId: number) {
    return this.http.get(
      `https://hotelbooking.stepprojects.ge/api/Rooms/${hotelId}`
    );
  }
}
