const fs = require('fs');
const { Transform } = require('stream');

class CsvTransformStream extends Transform {
    _transform(chunk, encoding, callback) {
        const lines = chunk
            .toString()
            .split('\n')
            .map((line) => line.toUpperCase());

        for (const line of lines) {
            this.push(line + '\n');
        }

        callback();
    }
}

const readableStream = fs.createReadStream('input.csv', { encoding: 'utf8' });
const writableStream = fs.createWriteStream('output.csv');

const csvTransformStream = new CsvTransformStream();

readableStream
    .pipe(csvTransformStream)
    .pipe(writableStream)
    .on('finish', () => {
        console.log('File processing complete. Output written to output.csv');
    })
    .on('error', (err) => {
        console.error('Error occurred:', err);
    });

readableStream.on('data', (chunk) => {
    console.log('Reading chunk:', chunk);
});

readableStream.on('end', () => {
    console.log('No more data to read from input.csv');
});

readableStream.on('error', (err) => {
    console.error('Error occurred while reading:', err);
});

writableStream.on('finish', () => {
    console.log('Finished writing to output.csv');
});

writableStream.on('error', (err) => {
    console.error('Error occurred while writing:', err);
});

csvTransformStream.on('data', (chunk) => {
    console.log('Transformed chunk:', chunk.toString());
});

csvTransformStream.on('error', (err) => {
    console.error('Error occurred in transform stream:', err);
});
