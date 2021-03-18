import { Component, OnInit } from '@angular/core';
import { UpdateticketsService } from './updatetickets.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updatetickets',
  templateUrl: './updatetickets.component.html',
  styleUrls: ['./updatetickets.component.scss'],
})

export class UpdateticketsComponent implements OnInit {
    queryId: any;
    public tickets = {
        ticketname: '',
        ticketdescription: '',
        servicetype: '',
        severity: '',
    }

    constructor (
        private updateticketsService: UpdateticketsService,
        private activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit() {
            this.activatedRoute.queryParams.subscribe(params => { 
 	 	this.queryId = params.id;
 	 	this.GpGetNounById();
 	 	});
    }
    GpUpdate() {
        this.updateticketsService.GpUpdate(this.tickets).subscribe(data => {
            this.tickets.ticketname = ''
 	 	this.tickets.ticketdescription = ''
 	 	this.tickets.servicetype = ''
 	 	this.tickets.severity = ''
        },
        error => {
            console.log('Error', error);
        });
    }
    GpGetNounById() {
        this.updateticketsService.GpGetNounById(this.queryId).subscribe(data => {
            this.tickets = data
        },
        error => {
            console.log('Error', error);
        });
    }
}