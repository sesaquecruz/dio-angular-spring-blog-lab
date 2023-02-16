export interface PostRequest {
  author: string,
  title: string,
  text: string
}

export interface PostResponse {
  id: string,
  date: string,
  author: string,
  title: string,
  text: string
}
