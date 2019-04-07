console.time('start')
const fs = require('fs');
const fileName = 'random.txt';
const randomText = `What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500 s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960 s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        \n `
const count = 1300000 ;

function calcUsedMemory (){
	const used = process.memoryUsage().heapUsed / (1024 * 1024);
	console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
}

// let ws = fs.createWriteStream(fileName);

/*
Writing to a file asynchronously w/o streaming
*/

// let data;
// for (let i = 0; i < count; i++) {
// 	data += randomText ;
// }

// console.log('Writing data to file', data.length)

// fs.writeFile('random.txt', data, (err) => {
//     if (err) throw err;
// 	calcUsedMemory()
// 	console.timeEnd('start')
// });


/* 
Use streams to write to a file 
*/

// for (let i = 0; i < count; i++) {
// 	ws.write(randomText)
// }
// calcUsedMemory();
// console.timeEnd('start')

// console.log('Done')


/*
Read from a file and write to another
*/

let ws1 = fs.createWriteStream('copied.txt')
let rs = fs.createReadStream(fileName)

rs.pipe(ws1)
