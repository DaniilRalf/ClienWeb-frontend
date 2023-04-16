import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {environment} from "../../../../../environments/environment";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AddBooksCoursesInterface} from "../../../../models/types/materials.interface";
import {MaterialEnum} from "../../../../models/enum/material.enum";

@Component({
  selector: 'app-personal-add-courses',
  templateUrl: './personal-add-courses.component.html',
  styleUrls: ['./personal-add-courses.component.scss']
})
export class PersonalAddCoursesComponent implements OnInit {

  public env = environment
  public addCourseForm!: FormGroup
  private file!: File

  @Input() savingCourseFile?: {id: number, name: string}
  @Output() courseDataEmit = new EventEmitter<AddBooksCoursesInterface>();
  @Output() courseFile = new EventEmitter<{ event: FormData, tag: MaterialEnum }>();

  constructor() { }

  ngOnInit(): void {
    this.formBuild()
  }

  private formBuild(): void {
    this.addCourseForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      type_id: new FormControl(MaterialEnum.courses),
    })
  }

  public setPhoto(event: Event): void {
    const input = event.target as HTMLInputElement
    if (input.files && input.files.length > 0) {
      this.file = input.files[0]
    }

    let newPhotoFormData = new FormData()
    newPhotoFormData.append('file', this.file)
    this.courseFile.emit({event: newPhotoFormData, tag: MaterialEnum.courses})
  }

  public onSubmit() {
    let newCourse: AddBooksCoursesInterface = {
      description: this.addCourseForm.value.description,
      title: this.addCourseForm.value.title,
      typeId: this.addCourseForm.value.type_id,
    }
    if (this.savingCourseFile) {
      newCourse = {
        ...newCourse,
        image: {id: this.savingCourseFile.id, name: this.savingCourseFile.name}
      }
    }
    this.courseDataEmit.emit(newCourse)
  }


}
