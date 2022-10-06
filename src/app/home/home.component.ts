import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // For the sake of simplicity we will show latest 2 categories with latest prodcuts
  categoryList: any[] = [];
  loading = true;

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.productService.getHomeCategories().subscribe((data: any) => {
      this.categoryList = data;
      this.loading = false;
    }, (err) => {
      console.log(err);
      this.loading = false;
    });
  }

  viewProduct(id: string){
    this.router.navigate(['/product/' + id]);
  }

}
