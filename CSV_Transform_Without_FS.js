const { Readable, Writable, Transform } = require('stream');

const csvData = `
name,age,city
John,30,New York
Alice,25,Los Angeles
Bob,35,Chicago
Cathy,28,Houston
David,42,Miami
Eva,31,Dallas
Frank,29,Seattle
Grace,27,San Francisco
Henry,39,Boston
Ivy,22,Denver
Jack,45,Atlanta
Kathy,36,Philadelphia
Leo,40,Phoenix
Mona,33,San Diego
Nina,26,Orlando
Oscar,38,Detroit
Paul,32,LAS VEGAS
Quinn,41,Austin
Rita,24,Portland
Sam,37,Sacramento
Tina,30,New Orleans
Ursula,34,St. Louis
Victor,29,Nashville
Wendy,44,Virginia Beach
Xander,21,Tampa
Yara,46,San Jose
Zane,48,Indianapolis
`;

const readableStream = new Readable({
    read() {
        this.push(csvData.trim().split('\n').join('\n'));
        this.push(null);
    },
});

const transformStream = new Transform({
    transform(chunk, encoding, callback) {
        const transformedChunk = chunk.toString().toUpperCase();
        this.push(transformedChunk);
        callback();
    },
});

const writableStream = new Writable({
    write(chunk, encoding, callback) {
        process.stdout.write(chunk.toString() + '\n');
        callback();
    },
});

readableStream.pipe(transformStream).pipe(writableStream);
