import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Productos } from "../productos";
import { ProductosService } from "../productos.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: string;
  producto: Productos;
  editForm;

  constructor(
    public productosService: ProductosService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.editForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      price: ['', Validators.required],
      quantity: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.productosService.getProducto(this.id).subscribe((data: Productos) => {
      this.producto = data;
      this.editForm.patchValue(data);
    });
  }

  onSubmit(formData) {
    formData.value.price = parseFloat(formData.value.price);
    formData.value.quantity = parseInt(formData.value.quantity);

    this.productosService.updateProducto(this.id, formData.value).subscribe(res => {
      this.router.navigateByUrl('productos/list');
    });
  }

}
