import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { ProductService } from '../product.service';
import { IProduct } from '../iproduct';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  constructor(private _ProductService:ProductService){

  }

  
  products:IProduct[]=[]

  ngOnInit(): void {
      this._ProductService.getProducts().subscribe({
        next:(res)=>{
          this.products=res
          console.log(res)
        },
        error:(err)=>{
          console.log(err)
        }
      })
  }
  

}
