import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'
import {environment} from "../../../../../environments/environment"
import {FormControl, FormGroup, Validators} from "@angular/forms"
import {MaterialEnum} from "../../../../models/enum/material.enum"

@Component({
  selector: 'app-personal-add-authors',
  templateUrl: './personal-add-authors.component.html',
  styleUrls: ['./personal-add-authors.component.scss']
})
export class PersonalAddAuthorsComponent implements OnInit {

  public env = environment
  public addAuthorForm!: FormGroup
  private file!: File

  @Input() savingAuthorFile?: { id: number, name: string }
  // TODO types
  @Output() authorDataEmit = new EventEmitter<any>();
  @Output() authorFile = new EventEmitter<{ event: FormData, tag: MaterialEnum }>();

  constructor() {
  }

  ngOnInit(): void {
    this.formBuild()
  }

  private formBuild(): void {
    this.addAuthorForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      type_id: new FormControl(MaterialEnum.author),
    })
  }

  public setPhoto(event: Event): void {
    const input = event.target as HTMLInputElement
    if (input.files && input.files.length > 0) {
      this.file = input.files[0]
    }

    let newPhotoFormData = new FormData()
    newPhotoFormData.append('file', this.file)
    this.authorFile.emit({event: newPhotoFormData, tag: MaterialEnum.author})
  }

  public onSubmit() {
    // TODO types
    let newAuthor: any = {
      description: this.addAuthorForm.value.description,
      name: this.addAuthorForm.value.name,
      typeId: this.addAuthorForm.value.type_id,
    }
    if (this.savingAuthorFile) {
      newAuthor = {
        ...newAuthor,
        image: {id: this.savingAuthorFile.id, name: this.savingAuthorFile.name}
      }
    }
    this.authorDataEmit.emit(newAuthor)
  }

}
