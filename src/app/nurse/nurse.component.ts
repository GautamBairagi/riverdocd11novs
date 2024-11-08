import { Component,ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nurse',
  templateUrl: './nurse.component.html',
  styleUrls: ['./nurse.component.css']
})
export class NurseComponent {
  @ViewChild('cameraFeed') cameraFeed!: ElementRef<HTMLVideoElement>;
  @ViewChild('mySidebar') mySidebar!: ElementRef<HTMLElement>;
  @ViewChild('main') main!: ElementRef<HTMLElement>;

  toggleNav() {
    const sidebar = this.mySidebar.nativeElement;
    const main = this.main.nativeElement;
    sidebar.classList.toggle('closed');
    
    if (window.innerWidth <= 768) {
      sidebar.classList.toggle('open');
    }
  }

  openCamera() {
    const videoElement = this.cameraFeed.nativeElement;

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          videoElement.srcObject = stream;
          videoElement.style.display = 'block';
        })
        .catch((err) => {
          console.error("Error accessing camera: ", err);
        });
    } else {
      alert("Camera not supported on this device.");
    }
  }

  constructor(
    private route :Router
  ){
    
  }
  logouts() {
    localStorage.removeItem('token')
    localStorage.removeItem('id')
    localStorage.removeItem('homecare_name')
    this.route.navigateByUrl("/", { replaceUrl: true })
  }
}
