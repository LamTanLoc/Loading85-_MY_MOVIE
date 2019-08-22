import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loai-phim',
  templateUrl: './loai-phim.component.html',
  styleUrls: ['./loai-phim.component.scss']
})
export class LoaiPhimComponent implements OnInit {
  phimDangChieu: boolean = true;
  phimSapChieu : boolean = false;
  constructor() { }

  ngOnInit() {
    
  }

  AnHien(value){
    if(value === "phimDangChieu"){
      this.phimDangChieu = true;
      this.phimSapChieu = false;
    }

    if(value === "phimSapChieu"){
      this.phimDangChieu = false;
      this.phimSapChieu = true;
    }

  }
  

}
