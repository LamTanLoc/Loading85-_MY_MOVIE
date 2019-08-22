import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/_core/services/data.service';

@Component({
  selector: 'app-phim-sap-chieu',
  templateUrl: './phim-sap-chieu.component.html',
  styleUrls: ['./phim-sap-chieu.component.scss']
})
export class PhimSapChieuComponent implements OnInit {
  danhSachPhimSapChieu = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getDanhSachPhimSapChieu();
  }
  getDanhSachPhimSapChieu() {

    const uri = `QuanLyPhim/LayDanhSachPhim?MaNhom=GP09`;
    this.dataService.get(uri).subscribe((data) => {
      this.danhSachPhimSapChieu = data;
      // console.log(this.danhSachPhimDangChieu);

    })


  }

}
