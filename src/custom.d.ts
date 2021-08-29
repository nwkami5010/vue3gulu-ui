//Message
interface MessageOptions {
  message: string,
  type?: string,
  canClose?: boolean,
  close?: () => void,
  displayTime?: number
  top?:number
}
//Loading
interface LoadingOptions {
  text: string,
  background?: string
}
