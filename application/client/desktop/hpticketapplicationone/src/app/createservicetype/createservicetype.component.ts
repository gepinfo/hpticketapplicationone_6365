import { Component, OnInit } from '@angular/core';
import { CreateservicetypeService } from './createservicetype.service';

@Component({
  selector: 'app-createservicetype',
  templateUrl: './createservicetype.component.html',
  styleUrls: ['./createservicetype.component.scss'],
})

export class CreateservicetypeComponent implements OnInit {
    public servicetype = {
        servicetypename: '',
        description: '',
    }

    constructor (
        private createservicetypeService: CreateservicetypeService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.createservicetypeService.GpCreate(this.servicetype).subscribe(data => {
            this.servicetype.servicetypename = ''
 	 	this.servicetype.description = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}