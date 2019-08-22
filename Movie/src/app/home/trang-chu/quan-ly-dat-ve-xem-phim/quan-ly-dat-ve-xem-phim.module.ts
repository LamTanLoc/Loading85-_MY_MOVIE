import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuanLyDatVeXemPhimComponent } from './quan-ly-dat-ve-xem-phim.component';
import { ChiTietPhimComponent } from './chi-tiet-phim/chi-tiet-phim.component';
import { QuanLyDatVeXemPhimRoutingModule } from './quan-ly-dat-ve-xem-phim-routing.module';
import { ChonVePhimComponent } from './chon-ve-phim/chon-ve-phim.component';
import { DanhSachChonGheXemPhimComponent } from './danh-sach-chon-ghe-xem-phim/danh-sach-chon-ghe-xem-phim.component';
import { ItemGheNgoiComponent } from './item-ghe-ngoi/item-ghe-ngoi.component';
import { LoginComponent } from 'src/app/register-login/login/login.component';
import { ResgisterLoginModule } from 'src/app/register-login/resgister-login.module';
import { KetQuaDatVeComponent } from './ket-qua-dat-ve/ket-qua-dat-ve.component';
import { ShareModule } from 'src/_core/shared/share.module';
import { TrangCaNhanComponent } from './trang-ca-nhan/trang-ca-nhan.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [QuanLyDatVeXemPhimComponent, ChiTietPhimComponent, ChonVePhimComponent, DanhSachChonGheXemPhimComponent, ItemGheNgoiComponent, KetQuaDatVeComponent, TrangCaNhanComponent],
  imports: [
    CommonModule,
    QuanLyDatVeXemPhimRoutingModule,
    ResgisterLoginModule,
    ShareModule,
    FormsModule
    
  ]
})
export class QuanLyDatVeXemPhimModule { }
