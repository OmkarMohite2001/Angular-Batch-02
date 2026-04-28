import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Appointment {
  selectedPatient = new BehaviorSubject<any>(null);
  emergencyMode = new BehaviorSubject<any>(false);
  appointmentStatus = new BehaviorSubject<string>('');

  constructor(){};

  setSelectedPatient(patient:any){
    this.selectedPatient.next(patient);
    this.appointmentStatus.next(patient.status);
  }

  toggleEmergencyMode(currentValue:boolean){
    this.emergencyMode.next(!currentValue);
  }

  confirmAppointment(){
    this.appointmentStatus.next('Confirmed');
  }
}
