import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {User} from '../../models/User';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class CitiesService {
    uri = "/src/assets/data/cities.json";
    constructor(private http: HttpClient) { 
      
    }
    
    getJSon() :any{
        return this.http.get(this.uri).map(res => res);
      }
}