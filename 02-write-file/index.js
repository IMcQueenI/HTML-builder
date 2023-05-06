const fs = require('fs');
const path = require('path');
const {stdin, stdout} = process;

const mqPath = path.join(__dirname, 'data.txt');
const mqOut = fs.createWriteStream(mqPath);

stdout.write('Hello, i am McQueen, write me something! \n');

stdin.on('data', data => {
	if (data.toString().trim() === 'exit') {
		process.exit();
	} else {
		mqOut.write(data);
	};
});

process.on('SIGINT', () => process.exit());
process.on('exit', () => stdout.write('Bye, dear friend!'));