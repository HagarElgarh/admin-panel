import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../../../core/models/category.model';
import { Product } from '../../../../core/models/product.modal';

@Component({
  selector: 'app-category-product',
  templateUrl: './category-product.component.html',
  styleUrls: ['./category-product.component.scss']
})
export class CategoryProductComponent implements OnInit {
  categories: Category[] = [];
  products: Product[] = [];
  selectedCategory: string | null = null;
  isLoading: boolean = false;

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.fetchCategories();
  }

  fetchCategories(): void {
    this.categoryService.getCategories().subscribe({
      next: (data) => (this.categories = data),
      error: (err) => console.error('Failed to fetch categories:', err),
    });
  }

  onCategoryChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement; 
    const category = selectElement.value;
    this.selectedCategory = category;
    this.fetchProductsByCategory(category);
  }
  

  fetchProductsByCategory(category: string): void {
    this.isLoading = true;
    this.categoryService.getProductsByCategory(category).subscribe({
      next: (data) => {
        this.products = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Failed to fetch products:', err);
        this.isLoading = false;
      },
    });
  }
}
