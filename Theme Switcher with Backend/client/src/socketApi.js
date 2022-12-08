import io from "socket.io-client"

let socket;

export const init = () => {
    console.log("sunucuya bağlanılıyor");
   socket = io("localhost:3001" , {
    transports: ["websocket"]
   }) ;

   socket.on("connect" , () => {
    console.log("sunucuya bağlandı")
   })
}

export const send = (color) => {
    socket.emit("newColor" , color);
}

export const subscribe = (cb) => {
    socket.on("receive" , (color) => {
        console.log(color);
        cb(color);
    })
}