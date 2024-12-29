import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.scss'
})
export class EditProductComponent implements OnInit {
  editProductForm: FormGroup = this.fb.group({});  // Initialize with an empty form
  productId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private fb: FormBuilder,
    private toastr: ToastrService,  
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productId = +(this.route?.snapshot?.paramMap?.get('id') ?? 0);
        
    this.editProductForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      category: ['', Validators.required],
      image: ['', Validators.required],
    });

    this.productService.getProductById(this.productId).subscribe((product) => {
      this.editProductForm.patchValue(product);
    });
  }

  get title() {
    return this.editProductForm.get('title');
  }

  get description() {
    return this.editProductForm.get('description');
  }

  get price() {
    return this.editProductForm.get('price');
  }

  get category() {
    return this.editProductForm.get('category');
  }

  get image() {
    return this.editProductForm.get('image');
  }

  onSubmit(): void {
    if (this.editProductForm.valid) {
      this.productService.updateProduct(this.productId, this.editProductForm.value).subscribe(
        (response) => {
          this.toastr.success('Product updated successfully');
          this.router.navigate(['/products']);
        },
        (error) => {
          this.toastr.error('Failed to update product');
        }
      );
    }
  }
}