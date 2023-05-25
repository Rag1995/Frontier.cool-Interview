// 首頁資料的顯示模式
export enum Mode {
  CARD = 'card',
  LIST = 'list',
}

// 使用者資料
export interface User {
  favor?: boolean // 是否為我的最愛，但是不會存在 API 中
  gender: string
  name: {
    title: string
    first: string
    last: string
  }
  location: {
    street: {
      number: number
      name: string
    }
    city: string
    state: string
    country: string
    postcode: string | number
    coordinates: {
      latitude: string
      longitude: string
    }
    timezone: {
      offset: string
      description: string
    }
  }
  email: string
  login: {
    uuid: string
    username: string
    password: string
    salt: string
    md5: string
    sha1: string
    sha256: string
  }
  dob: {
    date: string
    age: number
  }
  registered: {
    date: string
    age: number
  }
  phone: string
  cell: string
  id: {
    name: string
    value: string
  }
  picture: {
    large: string
    medium: string
    thumbnail: string
  }
  nat: string
}

// API 回傳的資料格式
export interface ApiResponseInfo {
  seed: string
  results: number
  page: number
  version: string
}
export interface ApiResponse<T> {
  info: ApiResponseInfo
  results: T
}
