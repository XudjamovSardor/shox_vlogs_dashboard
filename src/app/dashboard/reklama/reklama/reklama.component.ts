import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { FaylService } from 'src/app/shared/service/fayl.service';
import { ReklamaService } from 'src/app/shared/service/reklama.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-reklama',
  templateUrl: './reklama.component.html',
  styleUrls: ['./reklama.component.scss']
})
export class ReklamaComponent implements OnInit, AfterViewInit {
  reklama: any[] = [];
  reklamaForm!: FormGroup;
  tahrirRejim = false;
  isLoading = false;
  isLoadingResult = true;
  isLoadingReached = false;
  displayedColumns = ['id', 'rasm', "vaqt", 'amal'];

  selectedFile: File | undefined;
  fayl: any;

  @ViewChild(MatAccordion) accordion!: MatAccordion;

  constructor(
    private reklamaSerive: ReklamaService,
    private fileService: FaylService,
    private fb: FormBuilder,
  ) { }

  ngAfterViewInit(): void {
  }




  ngOnInit(): void {
    this.reklamaForm = this.fb.group({
      id: [],
      image: ['']
    });
    this.loadAll()

  }

  loadAll() {

    this.isLoadingResult = true;
    this.isLoadingReached = true;
    this.reklama = [];
    this.reklamaSerive.getAll().subscribe(data => {
      this.reklama = data.content;      
      this.isLoadingResult = false;
      this.isLoadingReached = true;
    },
      error => {
        this.isLoadingResult = false;
        this.isLoadingReached = false;
      });

  }
  ochirish(id: number) {
    this.reklamaSerive.deleteById(id).subscribe(data => {
      this.loadAll();
    })
  }

  save() {
    this.isLoading = true;
    let bino = this.reklamaForm.getRawValue();

    if (this.selectedFile) {
      this.fileService.upload(this.selectedFile).subscribe((data: any) => {
        bino.image = {
          id: data.id
        }
        this.save2(bino);
      });

    } else {
      this.save2(bino);
    }
  }
  save2(bino: any) {
    if (!this.tahrirRejim) {
      this.reklamaSerive.create(bino).subscribe(data => {
        this.loadAll();
        this.tozalash();
      }, error => {
        this.isLoading = false;
      })
    } else {
      this.reklamaSerive.update(bino).subscribe(data => {
        this.loadAll();
        this.tozalash();

      }, error => {
        this.isLoading = false;
      })
    }
  }
  tozalash() {
    this.reklamaForm.reset();
    this.selectedFile = undefined;
    this.tahrirRejim = false;
    this.isLoading = false;    
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
  getUrl(fayl: any) {
    if (fayl && fayl.id) {
      return environment.api + "/api/fail/download/" + fayl.id;
    }
    return "assets/no_photo.png"
  }


  tozalash1(){
    this.accordion.closeAll();
  }


}
