const axios = require('axios')
//promises
//********************************
//iss just another built in class
//
// const event = new Promise((resolve ,reject) => {
// 	let name='abc';
// 	if (name==='ab') { name = 'dev' 
// 	resolve(name);
// 	}
// 	else{
//
// 		reject('failed')
//
//
// 	}
//
// }).then((name)=>{
// 	console.log(name)
// }).catch((err)=>{
//
// 	console.log(err)
// })
//

// const axios = require('axios');
// const event = new Promise((resolve, reject) => {
//
// 	const data = axios.get("https://cat-fact.herokuapp.com/facts");
// 	resolve(data)
// }).then((data) => {
// 	console.log(data)
// })
//
// ******************************************************
// async await
// ******************************************************
//  const fetchData = async() =>{
//
//  	const data = axios.get("https://cat-fact.herokuapp.com/facts");
// }
//if i cout the data now, it will retun pending promise
//i.e an async funcion return a promise
//that promise must be resolved
//  const fetchData = async() =>{
//
//  	const data =  axios.get("https://cat-fact.herokuapp.com/facts");
// 	await data
// 	console.log(data)
// }
// fetchData()
//

// let data
// (data = axios.get("https://cat-fact.herokuapp.com/facts")).then((data) => {
// 	console.log(data);
// })
//
//any thing that reutrn a promise can be resolve using .then(()=>{})
//
//
