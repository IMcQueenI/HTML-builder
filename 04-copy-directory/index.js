const fs = require('fs');
const path = require('path');

let mqPath = path.join(__dirname, 'files');
let mqPathCopy = path.join(__dirname, 'files-copy');

fs.mkdir(mqPathCopy, { recursive: true }, (err) => {
	if (err) {
		console.log('Some mistake with file');
	};
});

fs.readdir(mqPathCopy, (err, files) => {
	if (err) {
		console.log('Some mistake with read file');
	};
	for (let i = 0; i < files.length; i++) {
		let copy = path.join(mqPathCopy, files[i]);
		fs.unlink(copy, (err) => {
			if (err) {
				console.log('Some mistake with file deletion');
			};
		});
	};
});

fs.readdir(mqPath, (err, files) => {
	if (err) {
		console.log('Some mistake with read file');
	};
	for (let i = 0; i < files.length; i++) {
		let original = path.join(mqPath, files[i]);
		let copy = path.join(mqPathCopy, files[i]);
		fs.copyFile(original, copy, (err) => {
			if (err) {
				console.log('Some mistake with copying');
			};
		});
	};
});