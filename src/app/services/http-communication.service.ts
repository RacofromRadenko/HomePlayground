import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpCommunicationService {

  constructor(private http:HttpClient) { }
}
