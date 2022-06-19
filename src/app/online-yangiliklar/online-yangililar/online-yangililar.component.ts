import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
    info.link = info.link.toString() + "embed"
   };
   

  this.onlineYangilikService.create(info).subscribe(data => {
    this.loader()
  })
  }

  tahrir(){}

  ochirish(id: number) {
    this.onlineYangilikService.deletById(id).subscribe(d => { this.loader() });
  }

}
