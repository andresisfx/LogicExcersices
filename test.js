const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const length = 50; // Largo del IIU Id
let accountTag = '';

for (let i = 0; i < length; i++) {
  const randomIndex = Math.floor(Math.random() * characters.length);
  accountTag += characters.charAt(randomIndex);
}

console.log(accountTag);