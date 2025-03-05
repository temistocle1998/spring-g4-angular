import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { ItemService } from 'src/app/public/item.service';
import { PromiseError } from 'src/app/shared/classes/promise-error';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-publish-page',
  templateUrl: './publish-page.component.html',
  styleUrls: ['./publish-page.component.css']
})
export class PublishPageComponent implements OnInit {
  itemStoreForm: FormGroup
  error: any;

  public constructor(public fb: FormBuilder, public itemSrv: ItemService) {}

  ngOnInit(): void {
    this.itemStoreForm = this.fb.group({
      title: ['', Validators.required],
      category: ['', Validators.required],
      date:['', Validators.required],
      description: ['', Validators.required],
      location: ['', Validators.required],
      item_additional_details: this.fb.group({
        detail_key: [''],
        detail_value: [''],
      })
    })
  }

  save() {
    this.itemSrv.save(this.itemStoreForm.value)
      .then((data: any) => {
        Swal.fire('Compte crée', 'Votre compte a été crée avec succès', 'success')
      }).catch((err: PromiseError) => {
        if (err.validationError) {
          this.error = err.data;
        }
        Swal.fire('Erreur', err.data.data.error, 'error')

      })
  }
}
