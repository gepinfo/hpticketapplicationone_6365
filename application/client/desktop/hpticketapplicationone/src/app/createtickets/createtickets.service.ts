import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../shared/shared.service';

@Injectable({
    providedIn: 'root'
})

export class CreateticketsService {
    constructor(
        private sharedService: SharedService,
        private http: HttpClient,
    ) { }

    GpCreate(tickets): Observable<any> {
        return this.http.post(this.sharedService.DESKTOP_API + '/tickets', tickets);
    }
    servicetypeGpGetAllValues(): Observable<any> {
        return this.http.get(this.sharedService.DESKTOP_API + '/servicetype');
    }
    severityGpGetAllValues(): Observable<any> {
        return this.http.get(this.sharedService.DESKTOP_API + '/severity');
    }
}