import { Component, OnInit } from '@angular/core';
import { CreateticketsService } from './createtickets.service';

@Component({
  selector: 'app-createtickets',
  templateUrl: './createtickets.component.html',
  styleUrls: ['./createtickets.component.scss'],
})

export class CreateticketsComponent implements OnInit {
    servicetypeitemArray: any = [];
    severityitemArray: any = [];
    public tickets = {
        ticketname: '',
        ticketdescription: '',
        servicetype: '',
        severity: '',
    }

    constructor (
        private createticketsService: CreateticketsService,
    ) { }

    ngOnInit() {
    }
    servicetypeGpGetAllValues() {
        this.createticketsService.servicetypeGpGetAllValues().subscribe(data => {
            this.servicetypeitemArray = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    severityGpGetAllValues() {
        this.createticketsService.severityGpGetAllValues().subscribe(data => {
            this.severityitemArray = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    GpCreate() {
        this.createticketsService.GpCreate(this.tickets).subscribe(data => {
            this.tickets.ticketname = ''
 	 	this.tickets.ticketdescription = ''
 	 	this.tickets.servicetype = ''
 	 	this.tickets.severity = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}