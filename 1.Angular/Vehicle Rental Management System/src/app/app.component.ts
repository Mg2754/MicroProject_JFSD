import { Component } from '@angular/core';
import { Vehicle } from './model/Vehicle'
import { VehicleService } from './vehicle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MicroProject';

  vehicle:Vehicle;
  result:string;
  flag:boolean;
  flag1:boolean;
  vechicleArr:Vehicle[];

  constructor(private service:VehicleService){
    this.vehicle = new Vehicle();
    this.result=""
    this.flag=false;
    this.flag1=false;

    this.vechicleArr=[];

  }

  insertVehicle(data:any){
    this.vehicle.id = data.vecId;
    this.vehicle.conName = data.conName;
    this.vehicle.renDate = data.renDate;
    this.vehicle.conPhone = data.conPhone;
    this.vehicle.vecType = data.vecType;
    this.result=this.service.insertVehicle(this.vehicle);
    
  }
  updateVehicle(data:any){
    this.vehicle.id = data.vecId;
    this.vehicle.conName = data.conName;
    this.vehicle.renDate = data.renDate;
    this.vehicle.conPhone = data.conPhone;
    this.vehicle.vecType = data.vecType;
    this.result=this.service.updateVehicle(this.vehicle);
  }
  deleteVehicle(data:any){
    this.result=this.service.deleteVehicle(data.vecId);

  }
  findVehicle(data:any){
    this.vehicle=this.service.findVehicle(data.vecId);
    this.flag=false;
    this.flag1=true;
    
  }
  findallvehicle(){
    this.vechicleArr=this.service.findallVehicle();
    this.flag=true;
    this.flag1=false;
  }
}
