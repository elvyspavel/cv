import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ElvysRodService {

  profesional: any[] = [];
  educacion: any[] = [];
  testimonio: any[] = [];
  experiencia: any[] = [];
  // blog: any[] = [];

  constructor(private http: HttpClient) {
    this.CargarProfesional();
    this.CargarEducacion();
    this.CargarTestimonio();
    // this.CargarBlog();
  }

  private CargarProfesional(){
    this.http.get('https://cvelvys.firebaseio.com/Professional.json')
      .subscribe((resp: any[]) => {
        this.profesional = resp;
        console.log(resp);
    });
  }

  private CargarEducacion(){
    this.http.get('https://cvelvys-23092-default-rtdb.firebaseio.com/Educacion')
      .subscribe((resp: any[]) => {
        this.educacion = resp;
        console.log(resp);
    });
  }

  private CargarTestimonio(){
    this.http.get('https://cvelvys.firebaseio.com/Testimonio.json')
      .subscribe((resp: any[]) => {
        this.testimonio = resp;
        console.log(resp);
    });
  }

  // private CargarBlog(){
  //   this.http.get('https://cv-tutorial-70504.firebaseio.com/Blog.json')
  //     .subscribe((resp: any[]) => {
  //       this.blog = resp;
  //       console.log(resp);
  //   });
  // }
}