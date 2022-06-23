import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FaylService } from 'src/app/shared/service/fayl.service';
import { ShowBiznesServiceService } from 'src/app/shared/service/show-biznes-service.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-show-biznes',
  templateUrl: './show-biznes.component.html',
  styleUrls: ['./show-biznes.component.scss']
})
export class ShowBiznesComponent implements OnInit {
  showBiznesForm!: FormGroup

  matn: String = ''

  showBiznes!: any[]

  selectedFile: File | undefined;
  fayl: any;

  constructor(
    private fb: FormBuilder,
    private showBiznesService: ShowBiznesServiceService,
    private fileService: FaylService
  ) { }

  ngOnInit(): void {
    this.showBiznesForm = this.fb.group({
      matn: [''],
      image: [''],
      tuliqMalumot: ['']
    })

    this.loader()
  }

  loader() {
    this.showBiznesService.getAll().subscribe(data => {
      this.showBiznes = data.content
    })
  }

  save() {
    let info = this.showBiznesForm.getRawValue();

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
      this.showBiznesService.create(i).subscribe(data => {
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

  displayedColumns: string[] = ['id', 'image', 'nom', 'tuliqMalumot', 'dateTime', 'actions'];
}
