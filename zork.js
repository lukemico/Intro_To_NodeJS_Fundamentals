
// ~/Documents/projects/NodeJS $ node
// Welcome to Node.js v12.1.0.
// Type ".help" for more information.

fs.readFile('zork.txt', function (err, data) {
... console.log(data);
... })
undefined
> undefined
> fs.readFile('zork.txt', function (err, data){
... console.log(data);
... })
undefined
> <Buffer 7b 20 41 63 63 65 70 74 52 61 6e 67 65 73 3a 20 27 62 79 74 65 73 27 2c 0a 20 20 4c 61 73 74 4d 6f 64 69 66 69 65 64 3a 20 32 30 31 37 2d 30 33 2d 32 ... 328 more bytes>
fs.readFile('zork.txt', function(err, data){
... console.log(data.toString());
... })
undefined
{ AcceptRanges: 'bytes',
  LastModified: 2017-03-29T00:14:08.000Z,
  ContentLength: 46932816,
  ETag: '"624062b6df66799b753bbbf2285d02a8"',
  VersionId: 'null',
  ContentType: 'audio/mp3',
  Metadata: {},
  Body: <Buffer ff fb 94 64 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 58 69 6e 67 00 00 00
0f 00 01 4a 33 02 cc ... > }
fs.readFile('zork.txt', 'utf8', function(err, data){
... console.log(data);
... })
undefined
{ AcceptRanges: 'bytes',
  LastModified: 2017-03-29T00:14:08.000Z,
  ContentLength: 46932816,
  ETag: '"624062b6df66799b753bbbf2285d02a8"',
  VersionId: 'null',
  ContentType: 'audio/mp3',
  Metadata: {},
  Body: <Buffer ff fb 94 64 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 58 69 6e 67 00 00 00
0f 00 01 4a 33 02 cc ... > }
str = '\u0048\u0065\u006c\u006f \u0057\u006f\u0072\u006c\u0064\u0021';
'Helo World!'
str = '\u0048\u0065\u006c\u006c\u006f \u0057\u006f\u0072\u006c\u0064\u0021';
'Hello World!'
str.length
12
Buffer.bytelength('str, 'utf8')
Thrown:
Buffer.bytelength('str, 'utf8')
                  ^^^^^^^

SyntaxError: missing ) after argument list
Buffer.bytelength(str, 'utf8')
Thrown:
TypeError: Buffer.bytelength is not a function
Buffer.byteLength(str, 'utf8')
12
str = '\u00bd + \u00be = \u00be';
'½ + ¾ = ¾'
str.length
9
Buffer.byteLength(str, 'utf8')
12
buf = new Buffer(5)
<Buffer 00 00 00 00 00>
(node:2244) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
buf.write('hello world')
5
buf.toString()
'hello'
buf.write('hello', 2)
3
buf.toString()
'hehel'
buf.write('xxxx', 2, 1)
1
buf.toString()
'hexel'
buf.write('yyyy', 2, 1, 'utf8')
1
buf.toString()
'heyel'


buf1 = new Buffer('1234')
<Buffer 31 32 33 34>
(node:3229) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
buf2 = new Buffer('0123')
<Buffer 30 31 32 33>
buf3 = new Buffer('1234')
<Buffer 31 32 33 34>
buf1.compare(buf2)
1
buf1.compare(buf3)
0
buf1.equals(buf2)
false
buf1.equals(buf3)
true
var arr = [buf1, buf2]
undefined
arr.sort(Buffer.compare)
[ <Buffer 30 31 32 33>, <Buffer 31 32 33 34> ]
buf.toJSON()
Thrown:
ReferenceError: buf is not defined
buf = new Buffer(5)
<Buffer 00 00 00 00 00>
buf.write('hello world')
5
buf.toJSON()
{ type: 'Buffer', data: [ 104, 101, 108, 108, 111 ] }
buf1 = new Buffer('Hello World!')
<Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64 21>
buf2 = buf1.slice(0, 3)
<Buffer 48 65 6c>
buf2.toString()
'Hel'
buf2.write('xxx')
3
buf2.toString()
'xxx'
buf1.toString()
'xxxlo World!'