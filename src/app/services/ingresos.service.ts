import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Ingreso } from '../modelo/ingreso';

@Injectable({
  providedIn: 'root'
})
export class IngresosService {

  //Arreglo donde se guardarán los ingresos
  public ingresos:Array<Ingreso>=[];

  //se utiliza la bibilioteca http para conectar al url backend
  constructor(
    private http : HttpClient
  ) { }

  public agregarIngreso(ingreso:Ingreso){
    //agregamos el Ingreso que el usuario anotó en ingreso.html, procesado en ingreso.ts
    //y dirigido aquí
    this.ingresos.push(ingreso);
  }

  //esto proviene de enviroment.ts
  UrlBase:string=environment.UrlBackend;

  public getIngresos(){
    //defino la url donde está el servivio en backend
    let url = this.UrlBase + '/ingresos';
    let header=new HttpHeaders();
    header.append('Content-Type','aplication/json')
    header.append('Access-Control-Allow-Origin','http://localhost');
    return this.http.get<Ingreso[]>(url,{headers:header});
  }

  public crearIngreso(ingreso:Ingreso){
    console.log(ingreso);
    let url = this.UrlBase + '/ingresos/crear';
    let header=new HttpHeaders();
    header.append('Content-Type','aplication/json')
    header.append('Access-Control-Allow-Methods','"POST, GET,DELETE,PUT"')
    header.append('Access-Control-Allow-Origin','http://localhost');
    return this.http.post(url,JSON.stringify(ingreso),{headers:header});
  }

  public editarIngreso(ingreso:Ingreso){
    let url = this.UrlBase + '/ingresos/editar' + ingreso.id;
    let header=new HttpHeaders();
    header.append('Content-Type','aplication/json')
    header.append('Access-Control-Allow-Methods','"POST, GET,DELETE,PUT"')
    header.append('Access-Control-Allow-Origin','http://localhost');
    return this.http.put(url,JSON.stringify(ingreso),{headers:header});
  }

  public eliminarIngreso(ingreso:Ingreso){
    let url = this.UrlBase + '/ingresos/eliminar' + ingreso.id;
    let header = new HttpHeaders();
    header.append('Content-Type','aplication/json')
    header.append('Access-Control-Allow-Origin','http://localhost');
    return this.http.delete(url,{headers:header});
  }


}
