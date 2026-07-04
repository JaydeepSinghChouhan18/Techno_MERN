async function getJoke() {
  const response = await fetch("https://official-joke-api.appspot.com/random_joke");
  const data = await response.json();
  console.log(data.setup, "-", data.punchline); 
}
 
async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const data = await res.json();
  console.log("Name:" , data.name ," " , "Username:" , " " , data.username); 

    const postAPI = await fetch("https://jsonplaceholder.typicode.com/postss/1");
    const data2 = await postAPI.json();
    console.log(data2.id);

    const commentAPI = await fetch("https://jsonplaceholder.typicode.com/comments/1");
    const data3 = await  commentAPI.json();
    console.log(data3.email);
}  





