import { Component, OnInit } from '@angular/core';
import { BodegaService } from '../bodega.service';
import { Router } from '@angular/router';
import { Bodega } from '../model/bodega';
import { Categoria } from '../model/categoria';
import { ThrowStmt } from '@angular/compiler';
import { Observable } from 'rxjs';
import { ok } from 'assert';

@Component({
  selector: 'app-registar-bodega',
  templateUrl: './registar-bodega.component.html',
  styleUrls: ['./registar-bodega.component.css']
})
export class RegistarBodegaComponent implements OnInit {

  bodega: Bodega
  ex: string
  categoria: Observable<Categoria[]>

  constructor(private bodegaService:BodegaService, private router:Router) { }

  ngOnInit(): void {
    this.getCategoria()
  }

  save(){
    console.log(this.ex);
    this.bodegaService.registrarBodega(this.bodega).subscribe(
      data => this.router.navigate([""])
    )
  }

  getCategoria(){
    this.bodegaService.obtenerCategoria().subscribe(
      cat => this.categoria = cat 
    )
    console.log(this.categoria)
  }

}
