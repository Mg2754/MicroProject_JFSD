import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehicle } from './model/Vehicle';
import { subscribe } from 'diagnostics_channel';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  url:string;
  vehicle:any;
  vehicleArr:Vehicle[]

  constructor(private http: HttpClient) {
    this.url="http://localhost:3004/vehicles";
    this.vehicle="";
    this.vehicleArr=[];
    
   }
   insertVehicle(vehicle:Vehicle){
    this.http.post<Vehicle>(this.url,vehicle).subscribe();
    return "Vehicle details added";
   }
   updateVehicle(vehicle:Vehicle){
    this.http.put<Vehicle>(this.url+'/'+vehicle.id,vehicle).subscribe();
    return "Vehicle details Updated"
   }
   deleteVehicle(vecId:number){
    this.http.delete<Vehicle>(this.url+'/'+vecId).subscribe();
    return "vehicle details deleted"
   }
   findVehicle(vecId:number){
    this.http.get<Vehicle[]>(this.url+'/'+vecId).subscribe(data => this.vehicle=data);
    return this.vehicle
   }
   findallVehicle(){
    this.http.get<Vehicle[]>(this.url).subscribe(data => this.vehicleArr=data);
    return this.vehicleArr
   }
}
