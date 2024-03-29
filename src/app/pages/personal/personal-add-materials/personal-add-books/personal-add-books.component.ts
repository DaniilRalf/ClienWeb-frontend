import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormControl, FormGroup, Validators } from "@angular/forms"
import { AddBooksCoursesInterface } from "../../../../models/types/materials.interface"
import { environment } from "../../../../../environments/environment"

@Component({
  selector: 'app-personal-add-books',
  templateUrl: './personal-add-books.component.html',
  styleUrls: ['./personal-add-books.component.scss']
})
export class PersonalAddBooksComponent implements OnInit {

  public env = environment
  public addBookForm!: FormGroup
  private file!: File

  @Input() savingBookFile?: {id: number, name: string}
  @Output() bookDataEmit = new EventEmitter<AddBooksCoursesInterface>();
  @Output() bookFile = new EventEmitter<FormData>();

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

    let newPhotoFormData = new FormData()
    newPhotoFormData.append('file', this.file)
    this.bookFile.emit(newPhotoFormData)
  }

  public onSubmit() {
    let newBook: AddBooksCoursesInterface = {
      description: this.addBookForm.value.description,
      title: this.addBookForm.value.title,
      typeId: this.addBookForm.value.type_id,
    }
    if (this.savingBookFile) {
      newBook = {
        ...newBook,
        image: {id: this.savingBookFile.id, name: this.savingBookFile.name}
      }
    }
    this.bookDataEmit.emit(newBook)
  }


}
