import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { FaylService } from 'src/app/shared/service/fayl.service';
import { YangilikServiceService } from 'src/app/shared/service/yangilik-service.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-yangilik',
  templateUrl: './yangilik.component.html',
  styleUrls: ['./yangilik.component.scss']
})
export class YangilikComponent implements OnInit {

  yangilikFrom!: FormGroup

  matn: String = ''

  showBiznes!: any[]

  selectedFile: File | undefined;
  fayl: any;

  @ViewChild(MatAccordion) accordion!: MatAccordion;

  constructor(
    private fb: FormBuilder,
    private yangilikService: YangilikServiceService,
    private fileService: FaylService
  ) { }

  ngOnInit(): void {
    this.yangilikFrom = this.fb.group({
      matn: [''],
      image: [''],
      tuliqMalumot: [''],
      onlineYangilik: ['']
    })

    this.loader()
  }

  loader() {
    this.yangilikService.getAll().subscribe((data: any) => {
      this.showBiznes = data.content
    })
  }

  save() {
    let info = this.yangilikFrom.getRawValue();

    if (this.selectedFile) {
      this.fileService.upload(this.selectedFile).subscribe((data: any) => {
        info.image = {
          id: data.id
        }
        this.save2(info);
      });

    } else {
      this.save2(info);
    }
  }
  save2(i: any) {
    this.yangilikService.create(i).subscribe(() => {
      this.loader();
    })
  }

  selectFile(e: any) {
    this.selectedFile = e.target.files[0];
    if (this.selectedFile) {
      let reader = new FileReader();
      reader.onloadend = (e) => {
        this.fayl = reader.result;
      }
      reader.readAsDataURL(this.selectedFile);


    }
  }

  delete(id: number) {
    this.yangilikService.deleteById(id).subscribe(() => {
      this.loader()
    })
  }

  tuliqView(i: any) {
    this.matn = i.tuliqMalumot;
    this.tuliqMatn()
  }

  tuliqMatn() {
    return this.matn
  }

  getUrl(fayl: any) {
    if (fayl && fayl.id) {
      return environment.api + "/api/fail/download/" + fayl.id;
    }
    return "assets/no_photo.png"
  }

  tozalash1(){
    this.accordion.closeAll();
  }


  displayedColumns: string[] = ['id', 'image', 'matn', 'tuliqMalumot', 'onlineYangilik', "amal"];
}
