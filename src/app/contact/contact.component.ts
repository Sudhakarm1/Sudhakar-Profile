import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators, FormBuilder, AbstractControl } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  constructor(private fb:FormBuilder) { }
  ImageSrc:string="./assets/Image/Cart.png";
  ImageSrcHome:string="./assets/Image/PassPort size Photo.png";
  Resume:string="./assets/Image/java-2.png";
  Angular:string="./assets/Image/angular-icon.svg";
  Spring:string="./assets/Image/spring-boot.png";
  JavaScript:string="./assets/Image/javascript.svg";
  jQuery:string="./assets/Image/JQuery.png";
  bootatrap:string="./assets/Image/Bootstrap.png";
  Microsoft:string="./assets/Image/microsoft-sql-server.svg";
  MySql:string="./assets/Image/MySQL.png";
  Mongo:string="./assets/Image/mongodb.svg";
  CSharp:string="./assets/Image/CSharp.png";
  DotNet:string="./assets/Image/NET_Core.png"; 
  DotNetMVC:string="./assets/Image/NET.png";
  Html:string="./assets/Image/html.png";
  Css:string="./assets/Image/CSS3.png";
  AboutSubImage:string="./assets/Image/Sub-AboutImage.jpg";
  python:string="./assets/Image/Python.png";
  CertificationPro:string="./assets/Image/Certification-1.png";
  CertificationGuvi:string="./assets/Image/Certification-2.jpg";
  AboutImage:string="./assets/Image/3d-flame-100.png";
  CertificationJava:string="./assets/Image/Javac.png";
  ngOnInit
  (): void {
  }
  form = this.fb.group({
    FirstName: ['',Validators.compose([Validators.required, Validators.minLength(3),Validators.maxLength(10),Validators.pattern('^[a-zA-Z ]*$'),])],
    LastName: ['',Validators.compose([Validators.required, Validators.minLength(3),Validators.maxLength(10),Validators.pattern('^[a-zA-Z ]*$'),])],
    Email: ['',Validators.compose([Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')])],
    Mobile: ['',Validators.compose([Validators.required, Validators.minLength(10),Validators.maxLength(12),Validators.pattern('^[0-9]*$'),])],
    Subject:['',Validators.compose([Validators.required, Validators.minLength(3),Validators.maxLength(30),Validators.pattern('^[a-zA-Z ]*$'),])]
  });
  OnSubmit():void
  {
    console.log("Successfully Submitted");
  }
  Click():void
  {
    
  }
}