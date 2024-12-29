import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {
  productForm: FormGroup = this.fb.group({});

  constructor(
    private productService: ProductService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      category: ['', Validators.required],
      image: ['', Validators.required],
    });
  }

  get title() {
    return this.productForm.get('title');
  }

  get description() {
    return this.productForm.get('description');
  }

  get price() {
    return this.productForm.get('price');
  }

  get category() {
    return this.productForm.get('category');
  }

  get image() {
    return this.productForm.get('image');
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      this.productService.addProduct(this.productForm.value).subscribe(
        (response) => {
          this.router.navigate(['/products']);
        },
        (error) => {
        }
      );
    }
  }
}