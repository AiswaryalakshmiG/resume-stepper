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
export class AppComponent {
  title = "stepper";
  isLinear=true;

  constructor(private fb: FormBuilder) {}

  personalInformation = this.fb.group({
    fullname: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/)]],
    phone:  ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]], 
    linkedin: ['', [ Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]],
    address: [''],
  });

  objective = this.fb.group({
    objective: ['', Validators.required]
  });

  education = this.fb.group({
    degree: ['', Validators.required],
    institution: ['', Validators.required],
    year: ['', Validators.required],
    percentage: ['', Validators.required]
  });

  experiences = this.fb.group({
    role: ['', Validators.required],
    companyName: ['', Validators.required],
    duration: ['', Validators.required]
  });

  project = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    tech: ['', Validators.required],
  });

  submit() {
    console.log('Personal Information:', this.personalInformation.value);
    console.log('Objective:', this.objective.value);
    console.log('Education:', this.education.value);
    console.log('Experiences:', this.experiences.value);
    console.log('Project:', this.project.value);
  }
  downloadPdf(){
  const docDefinition = {
    content:[
      { text: 'RESUME', marginLeft:160, fontSize: 24, bold: true, },
          { text: 'Personal Information', style: 'subheading' },
          { text: '__________________', color: '#616161' },
       
      
          {
            ul: [
              `Full Name: ${this.personalInformation.value.fullname}`,
              `Email: ${this.personalInformation.value.email}`,
              `Phone: ${this.personalInformation.value.phone}`,
              `LinkedIn: ${this.personalInformation.value.linkedin}`,
              `Address: ${this.personalInformation.value.address }`,
            ]
          },       
        

      { text: 'Objective', style: 'subheading' },
      { text: '_______', color: '#616161' },
      { text: this.objective.value.objective },
      { text: 'Education', style: 'subheading' },
      { text: '________', color: '#616161' },

      {
        ul: [
          `Degree: ${this.education.value.degree}`,
          `Institution: ${this.education.value.institution}`,
          `Year of Passing: ${this.education.value.year}`,
          `Percentage: ${this.education.value.percentage}`,
        ]
      },
      { text: 'Work Experiences', style: 'subheading' },
      { text: '_______________', color: '#616161' },

      {
        ul: [
          `Job Title: ${this.experiences.value.role}`,
          `Company Name: ${this.experiences.value.companyName}`,
          `Duration: ${this.experiences.value.duration}`,
        ]
      },
      { text: 'Project', style: 'subheading' },
      { text: '______', color: '#616161' },

      {
        ul: [
          `Title: ${this.project.value.title}`,
          `Description: ${this.project.value.description}`,
          `Technologies Used: ${this.project.value.tech}`,
        ]
      }

    ],

    styles:{
      subheading:{
          marginTop: 10,
          fontSize: 10,
          bold: true,
          color: '#0f6dd1',
      }
    }
  };
  pdfMake.createPdf(docDefinition).open();

}
}













// downloadPdf() {
//   if (
//     this.personalInformation.invalid ||
//     this.objective.invalid ||
//     this.education.invalid ||
//     this.experiences.invalid ||
//     this.project.invalid
//   ) {
//     alert('Please fill all required fields before downloading the PDF.');
//     return;
//   }

//   const docDefinition = {
//     content: [
//       { text: 'RESUME', style: 'header' },
//       { text: 'Personal Information', style: 'subheading' },
//       {
//         ul: [
//           `Full Name: ${this.personalInformation.value.fullname}`,
//           `Email: ${this.personalInformation.value.email}`,
//           `Phone: ${this.personalInformation.value.phone}`,
//           `LinkedIn: ${this.personalInformation.value.linkedin}`,
//           `Address: ${this.personalInformation.value.address || 'N/A'}`,
//         ]
//       },
//       { text: 'Objective', style: 'subheading' },
//       { text: this.objective.value.objective || 'N/A' },
//       { text: 'Education', style: 'subheading' },
//       {
//         ul: [
//           `Degree: ${this.education.value.degree}`,
//           `Institution: ${this.education.value.institution}`,
//           `Year of Passing: ${this.education.value.year}`,
//           `Percentage: ${this.education.value.percentage}`,
//         ]
//       },
//       { text: 'Work Experiences', style: 'subheading' },
//       {
//         ul: [
//           `Job Title: ${this.experiences.value.role}`,
//           `Company Name: ${this.experiences.value.companyName}`,
//           `Duration: ${this.experiences.value.duration}`,
//         ]
//       },
//       { text: 'Project', style: 'subheading' },
//       {
//         ul: [
//           `Title: ${this.project.value.title}`,
//           `Description: ${this.project.value.description}`,
//           `Technologies Used: ${this.project.value.tech}`,
//         ]
//       }
//     ],
//     styles: {
//       header: {
//         fontSize: 18,
//         bold: true,
//         margin: [0, 0, 0, 10]
//       },
//       subheading: {
//         fontSize: 14,
//         bold: true,
//         margin: [0, 10, 0, 5]
//       }
//     }
//   };

//   pdfMake.createPdf(docDefinition).open();
// }