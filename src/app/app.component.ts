import { Component } from '@angular/core';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(pdfMake as any).vfs = pdfFonts;
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  showData={}
      constructor(private fb :FormBuilder){}
  personalInformation=this.fb.group({
    fullname:['', Validators.required],
    email:['', Validators.required],
    Phone:['', Validators.required],
    linkedin:['', Validators.required],
    address:[''],
  });

  objective=this.fb.group({
    objective:['', Validators.required]
  });

  education=this.fb.group({
    degree:['' ,Validators.required],
    institution:['', Validators.required],
    year:['', Validators.required],
    percentage:['', Validators.required]
  });

  experiences=this.fb.group({
    role:['', Validators.required],
    companyName:['', Validators.required],
    duration:['', Validators.required]
  });

  project=this.fb.group({
    title:['', Validators.required],
    description:['', Validators.required],
    tech:['', Validators.required],
  });
  skills=this.fb.group({

  });

  submit(){
    if(
    this.personalInformation.valid&&
    this.objective.valid&&
    this.education.valid&&
    this.experiences.valid&&
    this.project.valid&&
    this.skills.valid)
    this.showData={
      pernalinfo:this.personalInformation.value,
      objective:this.objective.value,
      edu:this.education.value,
      experience:this.education.value,
      proj:this.project.value,
      skill:this.skills.value
    }
    console.log(this.showData);
  }


}
