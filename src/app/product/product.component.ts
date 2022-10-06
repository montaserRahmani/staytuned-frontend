import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  loading = false;
  notFoundError = false;
  productDetails: any;
  productList: any[] = [];

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {

      // Validate whether the id param is a valid UUID
      if (
        /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/.test(params['id'])
      ) {
        this.loading = true;
        this.getProductDetails(params['id']);
      } else {
        this.notFoundError = true;
      }
    });
  }

  getProductDetails(id: string){
    this.loading = true;

    this.productService.getProduct(id).subscribe((data: any) => {
      if(data) {
        this.productDetails = data;
        this.getMoreProductList(this.productDetails.category.id);
      } else {
        this.notFoundError = true;
      }

      this.loading = false;
    }, (err) => {
      console.log(err);
      this.loading = false;
    });
  }

  getMoreProductList(catId: string){
    this.productService.getProductsByCategory(catId).subscribe((data: any) => {
      if(data) {
        this.productList = data;
      }
    }, (err) => {

    });
  }

  viewProduct(id: string){
    this.router.navigate(['/product/' + id]);
  }

}
