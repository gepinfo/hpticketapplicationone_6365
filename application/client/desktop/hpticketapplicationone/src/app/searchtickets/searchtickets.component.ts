import { Component, OnInit } from '@angular/core';
import { SearchticketsService } from './searchtickets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchtickets',
  templateUrl: './searchtickets.component.html',
  styleUrls: ['./searchtickets.component.scss'],
})

export class SearchticketsComponent implements OnInit {
    columnDefs: any = [{ headerName: 'Name', field: 'ticketname'  },{ headerName: 'Description', field: 'ticketdescription'  },{ headerName: 'Service Type', field: 'servicetype'  },{ headerName: 'Severity', field: 'severity'  },];
    public tickets = {
        ticketname: '',
        ticketdescription: '',
        servicetype: '',
        severity: '',
    }
    paginationPageSize = 10;
 	page=1;
 	rowData: any = [];

    constructor (
        private searchticketsService: SearchticketsService,
        private router: Router,
    ) { }

    ngOnInit() {
    }
    GpSearch() {
        this.searchticketsService.GpSearch(this.tickets).subscribe(data => {
            this.rowData = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    GpRoute(queryId) {
        this.router.navigate(['./updatetickets'], { queryParams: { 'id': queryId } })
    }
    onSelectionChanged(values) {
        this.GpRoute(values._id);
    }
}