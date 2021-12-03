import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Productos } from "../productos";
import { ProductosService } from "../productos.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id: string;
  producto: Productos;

  constructor(
    public productosService: ProductosService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.productosService.getProducto(this.id).subscribe((data: Productos) => {
      this.producto = data;
    });
  }

}
