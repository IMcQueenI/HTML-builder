const fs = require('fs');
const path = require('path');
const mqPath = path.join(__dirname, 'secret-folder');

function mqSpecs (file) {
	fs.stat(path.join(mqPath, file.name), (error, scale) => {
		if (!error) {
			const fileSpecs = path.parse(file.name);
			console.log(`${fileSpecs.name} - ${fileSpecs.ext.slice(1)} - ${scale.size / 1024} kb`);
		} else {
			console.log(error);
		};
	});
};

fs.readdir(mqPath, {withFileTypes: true}, (error, files) => {
	if (error) {
		console.log(error);
	} else {
		files.forEach(file => {
			if (file.isFile()) {
				mqSpecs(file);
			};
		});
	};
});