import { ElementSchemaRegistry } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() sideNavToggled=new EventEmitter<boolean>()
  menuStatus: boolean=false;
  searchRes!:FormGroup;
  searchForm:any;
  public defaultName:any="Login/SignUp";
  public uName:any="";
  public aName:any="";
  public hasUname:boolean=false;
  public hasAname:boolean=false;

  
  
  constructor(private prdSer:ProductService, private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.searchRes=this.fb.group({
      searchTerm:['',Validators.required]
    })
  }
  retrive(){
    this.uName=localStorage.getItem("userName")
    this.aName=localStorage.getItem("adminName")
    if(this.uName == null&&this.aName == null){
      this.hasAname =false;
      this.hasUname=false;
      return this.defaultName
    }
    else{
      if(this.uName==null && this.aName != null){
        this.hasAname=true;
        return this.aName;
      }else{
        this.hasUname = true;
        return this.uName;
      }
      
    }
  } 

  logout(){
    localStorage.removeItem('adminName')
    sessionStorage.removeItem('userId')
    sessionStorage.removeItem('userName')
    localStorage.removeItem('userId')
    localStorage.removeItem('userName')
    alert("You are logged out")
  }

  SideNavToggle(){
    this.menuStatus= !this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus)
  }
  search(){
    this.searchForm=this.searchRes.value;
    localStorage.setItem("searchKey",this.searchForm.searchTerm.toString())
    console.log(this.searchForm.searchTerm);
  }

}



