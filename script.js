//!Using promise and fetch
// const res = fetch("https://restcountries.com/v3.1/all")
// res
//   .then((data)=>data.json())
//   .then((data1)) => {
//     console.log(data1);
//   }
//!async-await
async function foo(){
 try {
    const data = await fetch("https://restcountries.com/v3.1/all");
 const res = await data.json();
 console.log(res);
 } catch (error) {
    console.log(error);
 }
}
foo();