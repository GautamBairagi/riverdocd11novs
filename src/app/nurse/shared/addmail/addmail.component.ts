import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/API/api.service';

@Component({
  selector: 'app-addmail',
  templateUrl: './addmail.component.html',
  styleUrls: ['./addmail.component.css']
})
export class AddmailComponent {

  myForm!: FormGroup;
  ck :boolean=false;
  getpriscriber:any=[];

  constructor(
    private service: ApiService,
    private route: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getpriscriberAdmins();
    this.myForm = this.fb.group({
      fromMail: ['rehanmultanikiaatech@gmail.com', Validators.required],
      toMail: ['', ],
      pdf: ['',],
      subject: ['',],
      message:['',]
    })
  }


  onSubmit() {
    if (this.myForm.invalid) {
      this.ck = true;
      return;
    } else {   
      console.log("Patient data", this.myForm.value);
      this.service.addmail(this.myForm.value).subscribe({
        next: (res) => {
          console.log("Patient created data:", res);
          // this.swet.SucessToast(`Mail Send Successfully`);
          // this.route.navigate(["/Admin/View_Aloramail"]);
        },
        error: (err) => {
          console.log("Error creating patient:", err);
        }
      });
    }
  }

  getpriscriberAdmins(){
    this.service.gemail().subscribe((res:any)=>{
      this.getpriscriber = res.data
      // this.sentEmailDatas = res.data.length
    })
  }


  id: any;
  adminByIdData: any = [];
  pdfData:any;
  adminById(data: any) {
    this.id = data;
    this.service.getbyidmailss(data).subscribe((res: any) => {
      this.adminByIdData = res.data;
      this.pdfData = res.data.pdf;
    })
  }

  // addprescriber.component.ts

downloadPdf(pdfUrl: string): void {
  const link = document.createElement('a');
  link.href = pdfUrl;  // The URL for your PDF
  link.download = 'Patient_Face_Sheet.pdf';  // The name of the file to download
  link.click();
}


  downloadImage(imageUrl: string) {
    // Fetch the image as a Blob
    fetch(imageUrl)
      .then(response => response.blob())
      .then(blob => {
        // Create a temporary URL for the Blob
        const url = window.URL.createObjectURL(blob);

        // Create an anchor element and trigger the download
        const a = document.createElement('a');
        a.href = url;
        a.download = 'license-image.jpg'; // Set the file name here
        document.body.appendChild(a);
        a.click();

        // Clean up: remove the anchor element and revoke the Blob URL
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      })
      .catch(error => console.error('Download failed', error));
  }


}
