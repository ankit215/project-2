let humans = ['a' ,'b' ,'c' ,'d'];
let names = ['ankit' , 'bob' , 'chris' , 'donald'];

for (let human of humans){
  let nameIdx = Math.floor(Math.random() * names.length);
  console.log(`${names[nameIdx]} the ${human}`);
}