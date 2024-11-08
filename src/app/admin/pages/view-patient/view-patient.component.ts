import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/API/api.service';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';


@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrls: ['./view-patient.component.css']
})
export class ViewPatientComponent implements OnInit {

  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.getPatients()
  }

  allPatientData:any = []
  getPatients(){
    this.api.adminPatientGet().subscribe((res:any)=>{
      console.log('all patient data', res)
      this.allPatientData = res.data
    })
  }

  generateInvoice(patient: any): void {
    const doc = new jsPDF();

    // // Add header
    doc.setFillColor(195, 177, 225); // Set the header fill color using RGB values
    doc.rect(0, 0, 210, 30, 'F'); // Fill rectangle for the header
    doc.setFontSize(24);
    doc.setTextColor(255, 255, 255);
    // doc.text(`Face Sheet ${patient.name}`, 80, 20);

    const title = `Face Sheet ${patient.name}`;
    const titleWidth = doc.getTextWidth(title);
    const pageWidth = doc.internal.pageSize.getWidth();
    const x = (pageWidth - titleWidth) / 2; // Calculate x position for centering
    doc.text(title, x, 20);

    // Patient details for the table
    const patientDetails = [
      ['Patient Name', patient.name],
      ['Email', patient.email],
      ['Gender', patient.gender],
      ['Date of Birth', patient.dateofBirth],
      ['Facility Name', patient.facilityName],
      ['Medications', patient.medications],
      ['Doctor Name', patient.doctorName],
      ['Contact', patient.contact],
      ['Blood Group', patient.bloodGroup],
      ['Behavior  ', patient.Behavior  ],
      ['Medical Conditions', patient.medicalConditions],
      ['Allergies', patient.allergies],
      ['Weight', `${patient.weight} kg`],
      ['Height', `${patient.height} cm`],
      ['Eye Color', patient.eyeColor]
    ];

    // Generate the table using autoTable
    autoTable(doc, {
      head: [['Field', 'Value']], // Table headers
      body: patientDetails,
      startY: 40,
      styles: { 
        fontSize: 10, 
        textColor: [0, 0, 0], 
        fillColor: [242, 242, 242] // Use RGB array for alternating row fill color
      },
      headStyles: { 
        fillColor: [195, 177, 225], // Use RGB array for header fill color
        textColor: [255, 255, 255] // White text color for the header
      },
      alternateRowStyles: { fillColor: [245, 245, 245] }, // Use RGB array for alternate row fill color
      theme: 'grid',
    });

    // Save the PDF
    doc.save(`faceSheet_${patient.name}.pdf`);
  }

}
