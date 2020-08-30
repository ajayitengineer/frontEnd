export interface List {
  id: number,
  first_name: string,
  last_name: string,
  email: string,
  pocket_money: number,
  age: number,
  city: string,
  state: string,
  zip_code: number,
  country: string
}
export interface StudentListApi {
 payload: StudentListModify[],
 message: string
}

export interface StudentListModify{
  id: number,
  first_name: string,
  last_name: string,
  email: string,
  pocket_money: number,
  age: number,
  city: string,
  state: string,
  zip_code: number,
  country: string,
  isSelect:boolean
}
