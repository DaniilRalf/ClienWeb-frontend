import {Injectable} from '@angular/core'
import {BooksCoursesContent} from "../../../models/types/materials.interface"


@Injectable()
export class MaterialsService {

  constructor() {
  }

  public onReaction(material: BooksCoursesContent, event: 'like' | 'dislike') {
    const eventData = {itemId: material.id, value: 0} as { itemId: number, value: 1 | 0 | -1 }
    if (event === 'like') {
      if (!material.userRating) {
        eventData['value'] = 1
        ++material.likes
        material.userRating = 1
        return {eventData, material}
      }
      if (material.userRating === -1) {
        eventData['value'] = 1
        ++material.likes
        --material.dislikes
        material.userRating = 1
        return {eventData, material}
      }
      if (material.userRating === 1) {
        eventData['value'] = 0
        --material.likes
        material.userRating = 0
        return {eventData, material}
      }
    }
    if (event === 'dislike') {
      if (!material.userRating) {
        eventData['value'] = -1
        ++material.dislikes
        material.userRating = -1
        return {eventData, material}
      }
      if (material.userRating === 1) {
        eventData['value'] = -1
        ++material.dislikes
        --material.likes
        material.userRating = -1
        return {eventData, material}
      }
      if (material.userRating === -1) {
        eventData['value'] = 0
        --material.dislikes
        material.userRating = 0
        return {eventData, material}
      }
    }
    return {eventData, material}
  }
}
