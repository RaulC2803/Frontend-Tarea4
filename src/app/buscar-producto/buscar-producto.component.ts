import { Component, OnInit } from '@angular/core';
import { Producto } from '../model/producto';
import { ProductoService } from '../producto.service';
import { ActivatedRoute } from '@angular/router';
import { BodegaService } from '../bodega.service';
import { BodegaProducto } from '../model/bodega-producto';
import { Observable } from 'rxjs';
import { Categoria } from '../model/categoria';
import { Bodega } from '../model/bodega';


@Component({
  selector: 'app-buscar-producto',
  templateUrl: './buscar-producto.component.html',
  styleUrls: ['./buscar-producto.component.css']
})
export class BuscarProductoComponent implements OnInit {

  bodegaProducto: BodegaProducto[];
  x: number = 0;
  counter= Array;
  cantidad: number = Math.round(2.2);
  param: string;
  tipo: number; 
  cat: Categoria[];
  nombre:string;
  catg:number = 0;
  filmarca:string[];
  filbodega:string[];

  constructor(private bodegaService:BodegaService, private _Activatedroute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.bodegaService.obtenerCategoria().subscribe(data => this.cat = data);
    this.param=this._Activatedroute.snapshot.paramMap.get("param");
    this.tipo = Number(this._Activatedroute.snapshot.paramMap.get("tipo"));
    if (this.tipo == 1) {
      this.nombre = this.param;
      this.buscarPorNombre();
    }
    else{
      this.nombre = "";
      this.catg = Number(this.param);
      this.buscarPorCategoria();
    }
    
    //this.mostrarfiltros();
  }

  buscarMixto(){
    if (this.catg == 0) {
      console.log("Buscando", this.catg, ", ", this.nombre);
      this.buscarPorNombre();
    }
    else{
      console.log("Buscando", this.catg, ", ", this.nombre);
      this.bodegaService.buscarCategoriaProducto(this.catg, this.nombre).subscribe(data => this.bodegaProducto = data);
    }
  }
  buscarPorNombre(){
    this.bodegaService.obtenerBodegaProducto(this.nombre).subscribe(
      data => this.bodegaProducto = data
      
    );

    
  }
 
  buscarPorCategoria(){
    this.bodegaService.buscarCategoria(Number(this.param)).subscribe(
      data => this.bodegaProducto = data
    );
  }
  mostrarfiltros(){
    if(this.bodegaProducto.length != 0){
      let filtros = [];
      for(var i = 0;i < this.bodegaProducto.length ;i++ ){
        if(!(filtros.includes(this.bodegaProducto[i].bodega.nombre))){
          filtros.push(this.bodegaProducto[i].bodega.nombre);
        }
        /*if(!(filtros.includes(this.bodegaProducto[i].producto.))){
          filtros.push(this.bodegaProducto[i].bodega.nombre);
        }*/
      }
    }
  }
}
