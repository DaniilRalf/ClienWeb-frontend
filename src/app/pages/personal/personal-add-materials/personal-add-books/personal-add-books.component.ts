import {Component, EventEmitter, OnInit, Output} from '@angular/core'
import {FormControl, FormGroup, Validators} from "@angular/forms"
import {AddBooksInterface} from "../../../../models/types/materials.interface"

@Component({
  selector: 'app-personal-add-books',
  templateUrl: './personal-add-books.component.html',
  styleUrls: ['./personal-add-books.component.scss']
})
export class PersonalAddBooksComponent implements OnInit {

  public addBookForm!: FormGroup

  private file!: File

  @Output() bookDataEmit = new EventEmitter<AddBooksInterface>();

  constructor() { }

  ngOnInit(): void {
    this.formBuild()
  }

  private formBuild(): void {
    this.addBookForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      type_id: new FormControl(1),
    })
  }

  public setPhoto(event: Event): void {
    const input = event.target as HTMLInputElement
    if (input.files && input.files.length > 0) {
      this.file = input.files[0]
    }
  }

  public onSubmit() {
    const newBook: AddBooksInterface = {
      description: this.addBookForm.value.description,
      title: this.addBookForm.value.title,
      typeId: this.addBookForm.value.type_id,
    }

    this.bookDataEmit.emit(newBook)
  }


}
