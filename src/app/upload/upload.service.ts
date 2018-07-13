import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpResponse, HttpRequest } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient) { }

  /**
    * @description A Http request to upload files
    * @param file
    */
  upload(file: File): Observable<any> {

    const formData: FormData = new FormData();
    let url = '';

    formData.append('video', file, file.name);
    url = 'http://localhost:1500/api/upload/videos';

    const req = new HttpRequest('POST', url, formData, {
      reportProgress: true,
      responseType: 'text'
    });

    const progress = new Subject<any>();

    this.http.request(req).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        const percentDone = Math.round(100 * event.loaded / event.total);
        progress.next({ percent: percentDone, loaded: event.loaded });
      } else if (event instanceof HttpResponse) {
        progress.complete();
      }
    });
    return progress.asObservable();
  }
}
