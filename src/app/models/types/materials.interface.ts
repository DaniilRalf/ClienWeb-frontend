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


/* ? Books interfaces================================*/
  export interface AddBooksInterface {
    description: string,
    title: string,
    typeId: number,
    // TODO types
    image?: any,
    authors?: any,
  }
  export interface InputDataBooks {
    content: BooksContent[],
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
  export interface BooksContent {
    authors: AuthorsContent[],
    createdDate: string,
    description: string,
    duration: number,
    id: number,
    image: string,
    popularity: number
    rate: number,
    title: string,
    typeId: number,
  }
/* ? Books interfaces================================*/

/* ? Authors interfaces==============================*/
  export interface AddAuthorInterface {}
  export interface InputDataAuthor {}
  export interface AuthorsContent {
    description: string,
    id: number,
    name: string,
    photo: string,
  }
/* ? Authors interfaces==============================*/
