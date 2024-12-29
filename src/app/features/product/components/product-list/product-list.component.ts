import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  products: any[] = [];

  constructor(private productService: ProductService, private router: Router,    private toastr: ToastrService  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  editProduct(id: number): void {
    this.router.navigate([`/admin/products/edit/${id}`]);
  }

  deleteProduct(id: number): void {
    const confirmDelete = confirm('Are you sure you want to delete this product?');
    if (confirmDelete) {
      this.productService.deleteProduct(id).subscribe(
        () => {
          // Filter out the deleted product from the list (fake)
          this.products = this.products.filter(product => product.id !== id);
          //// TODO : TOASTER CSS 
          // this.toastr.success('Product deleted successfully!', 'Success');
        },
        (error) => {
        }
      );
    }
  }
}