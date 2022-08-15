import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { OnlineYangiliklarServiceService } from 'src/app/shared/service/online-yangiliklar-service.service';

@Component({
  selector: 'app-online-yangililar',
  templateUrl: './online-yangililar.component.html',
  styleUrls: ['./online-yangililar.component.scss']
})
export class OnlineYangililarComponent implements OnInit {
  OnlineForm!: FormGroup
  OnlineYangiliklar!: any[]
  disableSelect: FormControl = new FormControl(false);



  @ViewChild(MatAccordion) accordion!: MatAccordion;

  constructor(
    private fb: FormBuilder,
    private onlineYangilikService: OnlineYangiliklarServiceService
  ) { }


  ngOnInit(): void {
    this.OnlineForm = this.fb.group({
      link: ['', Validators.required],
      caption: ['', Validators.required],
      boshSahifaga: [false],
      tur: ['', Validators.required]
    })

    this.loader()
  }

  loader() {

    this.onlineYangilikService.getAll().subscribe(d => {
      this.OnlineYangiliklar = d
    })
  }

  save() {
  let info = this.OnlineForm.getRawValue()

   if (info.tur.toString() == "Instagram") {
    let sub = info.link.split("/");
    let all = ''
    for (let i = 0; i < sub.length-1; i++) {
      all += sub[i] + "/"
    }
    all += "embed"
    info.link = all
   };
   

  this.onlineYangilikService.create(info).subscribe(data => {
    this.loader()
  })
  }

  tahrir(){}

  ochirish(id: number) {
    this.onlineYangilikService.deletById(id).subscribe(d => { this.loader() });
  }

  tozalash() {
    this.accordion.closeAll();
  }


  displayedColumns = ['id', "link", "caption", "boshSahifa", 'tur', 'active']

}
