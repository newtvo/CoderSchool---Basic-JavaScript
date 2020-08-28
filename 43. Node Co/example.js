//====================
//vd trong video
var fs=require('fs');
var co=require('co');
//vd dùng co đọc 3 file lần lượt theo thứ tự 123, xong 1 xong mới đọc 2 xong mới đọc 3
// Dùng Promise.all ko đảm bảo thứ tự
function readFilePromise(path){
	return new Promise(function(resolve,reject){
		fs.readFile(path,{encoding:'utf-8'},function(err,data){
			if(err)
				reject(err);
			else
				resolve(data);
		});
	});
}
co(function*(){
	var song1=yield readFilePromise('./song.txt');
	var song2=yield readFilePromise('./song2.txt');
	var song3=yield readFilePromise('./song3.txt');
	console.log(song1,song2,song3);
});
//hoặc
co(function*(){ //co trả về 1 promise
	var song1=yield readFilePromise('./song.txt');
	var song2=yield readFilePromise('./song2.txt');
	var song3=yield readFilePromise('./song3.txt');
	return [song1,song2,song3];
	//HOẶC
	/**
	var values= yield [
		readFilePromise('./song.txt');
		readFilePromise('./song2.txt');
		readFilePromise('./song3.txt');
	];
	return values;
	*/
}).then(function(values){
	console.log(values);
}).catch(function(err){
	console.log(err);
});

//-----wrap trả về 1 hàm và hàm đó trả về 1 promise
var readFiles=co.wrap(function*(files){
	//[string] -> [promise]
	var values = yield files.map(function(file){
		return readFilePromise(file);
	});
	return values;
});

readFiles(['song.txt','song2.txt','song3.txt'])
	.then(function(values){
		console.log(values);
	});