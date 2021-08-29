import Message from "./Message.vue";
import {createApp, h} from "vue";
import set = Reflect.set;
interface MessageOptions {
  message: string,
  type?: string,
  canClose?: boolean,
  close?: () => void,
  displayTime?: number,
  top?:number,
}
export const openMessage = (options: MessageOptions) => {
  const {message,type,canClose,displayTime=3,top =10 } =options;
  const div = document.createElement('div');
  document.body.appendChild(div);
  const close = () => {
    // @ts-ignore
    app.unmount(app);
    div.remove();
  };

  const app = createApp({
    render() {
      return h(Message,{
        message,
        type,
        canClose,
        close,
        top
      });
    }
  });
  setTimeout(() =>{
    if(displayTime){
      close();
    }
  },displayTime!* 1000);
  app.mount(div);
  console.dir(app._context);
  return app;
}
