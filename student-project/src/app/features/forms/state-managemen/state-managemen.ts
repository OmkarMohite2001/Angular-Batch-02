import { HttpClient } from '@angular/common/http';
import { AfterContentInit, Component, OnInit } from '@angular/core';
import { Appointment } from './appointment';

@Component({
  selector: 'app-state-managemen',
  imports: [],
  templateUrl: './state-managemen.html',
  styleUrl: './state-managemen.css',
})
export class StateManagemen {
      constructor(private http:HttpClient , private appServ:Appointment){
        this.getPatients();

        this.appServ.selectedPatient.subscribe(
          (res)=>{
            res.selectedPatient = res;
          }
        )
        this,appServ.emergencyMode.subscribe((res)=>{
          this.isEmergencyMode = res;
        })

        this.appServ.appointmentStatus.subscribe((res)=>{
          this.appointmentStatus = res;
        })
      };
      
      
      // ngOnInit(): void {
      //   this.getPatients();
      // }
      // ngAfterContentInit(): void {
      //   this.getPatients();
      //   this.loading = false;
      // }
      patients:any[] = [];
      loading:boolean = false;
      selectedPatient:any = null;
      isEmergencyMode = false;
      appointmentStatus = '';

      getPatients(){
        this.loading = true;
        this.http.get('http://localhost:3000/patients').subscribe({
          next:(res:any)=>{
              this.patients = res;
              this.loading = false;
          },
          error:(err:any)=>{
            console.log(err);
            this.loading = false;
          }})
      }

      viewPatient(patient:any){
        // this.selectedPatient  = patient;
        // this.appointmentStatus = patient.status;
        this.appServ.setSelectedPatient(patient);
      }
      toggleEmergencyMode(){
        // this.isEmergencyMode = !this.isEmergencyMode;
        this.appServ.toggleEmergencyMode(this.isEmergencyMode);
      }
      confirmAppointment(){
        this.appServ.confirmAppointment();
      }

  
}
