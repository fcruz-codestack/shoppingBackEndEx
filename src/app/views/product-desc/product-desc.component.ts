import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Product } from 'src/app/interfaces/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-desc',
  templateUrl: './product-desc.component.html',
  styleUrls: ['./product-desc.component.scss']
})
export class ProductDescComponent implements OnInit {
  product: Product;
  constructor(private dService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    // We are going to grab the id number
    const id = this.route.snapshot.paramMap.get('id');
    this.getProduct(id);
  }

  getProduct(sku: string) {
    // Find this information via service
    console.log(sku);
    this.dService.getItem(sku).subscribe(
      x => this.product = x
    );

  }
}
