import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductosService } from "../productos.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  createForm;

  constructor(
    public productosService: ProductosService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {

    this.createForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      price: ['', Validators.required],
      quantity: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  onSubmit(formData) {
    formData.value.price = parseFloat(formData.value.price);
    formData.value.quantity = parseInt(formData.value.quantity);

    this.productosService.createProducto(formData.value).subscribe(res => {
      this.router.navigateByUrl('productos/list');
    });
  }

}
