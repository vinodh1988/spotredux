
export function randomAction(){
    console.log("Action Called");
   let messages=["God is great","World is Great","React is good","No one should starve",
"Heal the world","Javascript is tricky"];
         let msg=  messages[Math.floor(Math.random()*6)];
         return {
             type: "MESSAGE_ACTION",
             data: msg
         }

}