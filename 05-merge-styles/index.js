const fs = require('fs');
const path = require('path');

const styleFolder = path.join(__dirname, 'styles');
const bundleFile = path.join(__dirname, 'project-dist/bundle.css');
const writeStream = fs.createWriteStream(bundleFile);

fs.readdir(styleFolder, { withFileTypes: true }, function(err, files) {
	if (err) {
		console.log('Some mistake with reading files');
	};
	files.forEach(function(file) {
		let extension = path.parse(file.name).ext;
		if (file.isFile() === true && (extension === '.css')) {
			let stream = fs.createReadStream(path.join(styleFolder, file.name), 'utf-8');
			stream.on('data', data => writeStream.write(data));
		};
	});
});