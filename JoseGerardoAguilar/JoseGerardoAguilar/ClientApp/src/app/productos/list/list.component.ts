import { Component, OnInit } from '@angular/core';
import { Productos } from "../productos";
import { ProductosService } from "../productos.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  productos: Productos[] = [];

  constructor(public productosService: ProductosService) { }

  ngOnInit(): void {
    this.productosService.getProductos().subscribe((data: Productos[]) => {
      this.productos = data;
    });
  }

  deleteProducto(id) {
    this.productosService.deleteProducto(id).subscribe(res => {
      this.productos = this.productos.filter(item => item.id !== id);
    });
  }

}
