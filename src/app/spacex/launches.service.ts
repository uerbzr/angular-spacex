import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Launch } from '../model/launch';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class LaunchesService {
  private http = inject(HttpClient);

  public getLaunches(): Observable<Launch[]> {
    return this.http.get<Launch[]>(`${environment.api}`);
  }
}
