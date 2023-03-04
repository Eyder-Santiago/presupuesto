import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Egreso } from '../modelo/egreso';
import { environment } from 'src/environments/environment'; //se importó enviroment

@Injectable({
  providedIn: 'root'
})
export class EgresoService {

  //Arreglo donde se guardarán los egresos
  public egresos:Array<Egreso>=[];


  //Para crear los servicios de egreso

  constructor(
    private http : HttpClient
  ) { }

  public agregarEgreso(egreso:Egreso){
    //agregamos el egreso que el usuario anotó en egreso.html, procesado en egreso.ts
    //y dirigido aquí
    this.egresos.push(egreso);
  }

  //esto viene de environment.ts
  UrlBase:string=environment.UrlBackend;

  public getEgresos(){
    //defino la url donde está el servicio
    let url = this.UrlBase + '/egresos';
    let header=new HttpHeaders();
    header.append('Content-Type','aplication/json')
    header.append('Access-Control-Allow-Origin','http://localhost');
    return this.http.get<Egreso[]>(url,{headers:header});
  }

  public crearEgreso(egreso:Egreso){
    let url = this.UrlBase + '/egresos/crear';
    let header=new HttpHeaders();
    header.append('Content-Type','aplication/json')
    header.append('Access-Control-Allow-Methods','"POST, GET,DELETE,PUT"')
    header.append('Access-Control-Allow-Origin','http://localhost');
    return this.http.post(url,JSON.stringify(egreso),{headers:header});
  }

  public editarEgreso(egreso:Egreso){
    let url = this.UrlBase + '/egresos/editar/' + egreso.id;
    let header=new HttpHeaders();
    header.append('Content-Type','aplication/json')
    header.append('Access-Control-Allow-Methods','"POST, GET,DELETE,PUT"')
    header.append('Access-Control-Allow-Origin','http://localhost');
    return this.http.put(url,JSON.stringify(egreso),{headers:header});
  }

  public eliminarEgreso(egreso:Egreso){
    let  url = this.UrlBase + '/egresos/eliminar/' + egreso.id;
    let header=new HttpHeaders();
    header.append('Content-Type','aplication/json')
    header.append('Access-Control-Allow-Origin','http://localhost');
    return this.http.delete(url,{headers:header});
  }


  



}
