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
  title="stepper";

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

  submit(){
    console.log(this.personalInformation.value);
    console.log(this.objective.value);
    console.log(this.education.value);
    console.log(this.experiences.value);
    console.log(this.project.value);
  }
  downloadPdf(){
    const docDefinition = {
    content:[
      {text:'RESUME',},
      {text:'personal Information',style:'subheading'},
      // {
      //   ul:[
      //     'Name': this.personalInformation.value,
      //   ]
      // }
    ]
  };
  pdfMake.createPdf(docDefinition).open();
}
}