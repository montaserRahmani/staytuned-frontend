import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';
import { ToastrService } from 'ngx-toastr';

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
  showEmailForm = false;
  isSubscribed = false;
  emailInput!: string;
  emailError = false;
  subscription! : any;

  constructor(private productService: ProductService,
     private route: ActivatedRoute,
     private router: Router,
     private toastr: ToastrService) { }

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
      this.toastr.error('Oops! we couldn\'t get the product , please try again');
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

  subscribeToNotification(){

    if(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.emailInput)){
      this.productService.subscribeToNotification({
        receiverEmail: this.emailInput,
        product: {
          id: this.productDetails.id,
        },
      }).subscribe((data) => {
        if(data){
          this.emailError = false;
          this.showEmailForm = false;
          this.isSubscribed = true;

          // show notifications
          this.toastr.success('You have subscribed successfully!');

          // store the subscribtions locally

        } else {
          // error
          this.toastr.error('Oops! we couldn\'t complete the request, please try again');
        }
      }, (err) => {
        console.log(err);
        this.toastr.error('Oops! we couldn\'t complete the request, please try again');
      });

      this.showEmailForm = false;

    } else {
      this.emailError = true;
    }

  }

  unsubscribeFromNotification(){
      this.productService.subscribeToNotification({
        id: this.subscription.id,
        isActive: false,
      }).subscribe((data) => {
        if(data){
          this.isSubscribed = false;

          // show notifications
          this.toastr.success('You have unsubscribed successfully!');

          // store the subscribtions locally

        } else {
          // error
          this.toastr.error('Oops! we couldn\'t complete the request, please try again');
        }
      }, (err) => {
        console.log(err);
        this.toastr.error('Oops! we couldn\'t complete the request, please try again');
      });

      this.showEmailForm = false;
  }

}
