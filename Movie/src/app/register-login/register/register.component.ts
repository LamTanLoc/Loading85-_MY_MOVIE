import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/_core/services/data.service';
import swal from 'sweetalert2';
import { ShareDataService } from 'src/_core/shared/share-data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  anHienDN: boolean = false;
  anDangKy: boolean = true;
  constructor(private dataService: DataService, private shareDataSerVice: ShareDataService) { }

  ngOnInit() {
  }
  HienThiDangNhap() {
    this.anHienDN = !this.anHienDN;
    this.anDangKy = !this.anDangKy;
  }
 
  DangKy(value) {
    // console.log(value);
    let nguoiDung = {
      TaiKhoan: value.TaiKhoan,
      MatKhau: value.MatKhau,
      Email: value.Email,
      SoDT: value.SoDienThoai,
      MaNhom: "GP09",
      MaLoaiNguoiDung: "KhachHang"
    }

    let ShareData: object = {
      TaiKhoan: value.TaiKhoan,
      MatKhau: value.MatKhau,
      Email: value.Email,
      SoDT: value.SoDienThoai,
      HoTen: value.Ho + " " + value.Ten,
      NgaySinh: value.NgaySinh
    }

    const uri = `QuanLyNguoiDung/ThemNguoiDung`;
    this.dataService.post(uri, nguoiDung).subscribe((data) => {
      console.log(data);
      if (data === "Tài khoản đã tồn tại") {
        swal.fire({
          type: 'error',
          title: 'Tài khoản đã tồn tại',
          animation: false,
          customClass: {
            popup: 'animated tada'
          }
        })
      } else {
        this.anDangKy = false;
        swal.fire({
          position: 'center',
          type: 'success',
          title: 'Đăng ký thành công !',
          showConfirmButton: false,
          timer: 1500
        });
        this.shareDataSerVice.sharingDataThongTinCaNhan(ShareData);
        this.anHienDN = !this.anHienDN;
      }
    })

  }
}
