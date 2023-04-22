/* ? Filters/Search parameters======================*/
  export interface QueryParams {
    page: number,
    size: number,
    reverse: boolean,
    sort: string,

    totalPages?: number,
    totalElements?: number,
  }
  export interface PaginatorInput {
    offset: number,
    pageNumber: number,
    pageSize: number,
    paged: boolean,
  }
  export interface SortInput {
    empty: boolean,
    sorted: boolean,
    unsorted: boolean,
  }
/* ? Filters/Search parameters======================*/


/* ? Books-Courses interfaces=======================*/
  export interface AddBooksCoursesInterface {
    description: string,
    title: string,
    typeId: number,
    image?: {
      id: number,
      name: string
    },
    // TODO types
    authors?: any,
  }
  export interface InputDataBooksCourses {
    content: BooksCoursesContent[],
    empty: boolean,
    first: boolean,
    last: boolean,
    number: number,
    numberOfElements: number,

    totalElements: number,
    totalPages: number,
    size: number,
    pageable: PaginatorInput,
    sort: SortInput,
  }
  export interface BooksCoursesContent {
    authors: AuthorsContent[],
    createdDate: string,
    description: string,
    duration: number,
    id: number,
    image?: {
      id: number,
      name: string
    },
    popularity: number
    title: string,
    typeId: number,
    rate: number,
    likes: number,
    dislikes: number,
    userRating: number,
  }
/* ? Books-Courses interfaces========================*/

/* ? Authors interfaces==============================*/
  export interface AddAuthorInterface {
    name: string,
    description: string,
    typeId: number,
    image?: {
      id: number,
      name: string
    },
  }
  export interface InputDataAuthor {}
  export interface AuthorsContent {
    description: string,
    id: number,
    name: string,
    photo: string,
  }
/* ? Authors interfaces==============================*/
