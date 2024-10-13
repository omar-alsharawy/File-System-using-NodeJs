
const fs = require('fs')

// 1  open
// fs.open("file1.txt", "w" ,function (err) {    
//     if (err) {
//         console.error('Error reading file:', err);
//         return; // إنهاء الدالة إذا كان هناك خطأ
//                 }
// } ) 


//  2  appendFile
//  fs.appendFile("file1.html", "hello world backend" ,function (err) {    
//      if (err) {
//     console.error('Error reading file:', err);
//     return; // إنهاء الدالة إذا كان هناك خطأ
//             }
//  } )  // hello worled <== file1.txt كده هيكتب ف    

// fs.appendFile("file1.txt", "hello world backend" ,function (err) {    
//     if (err) {
//     console.error('Error reading file:', err);
//     return; // إنهاء الدالة إذا كان هناك خطأ
//             }
// } ) // hello worled <== ويكتب فيه file2.txt كده هيكريت   


// 3  readFile
// fs.readFile("file1.txt", function (err, data) {
//     if (err) {
//         console.error('Error reading file:', err);
//         return; // إنهاء الدالة إذا كان هناك خطأ
//     }
//     //ع يطبع الكلام اللى موجود ف الفايل toString() هيكسا ف هنكتب  buffer المفروض يطلع  
//     console.log('File content is:', data.toString());
// });


// 4 unlink
// fs.unlink("file1.txt", function (err) {
//     if (err) {
//         console.error('Error reading file:', err);
//         return; // إنهاء الدالة إذا كان هناك خطأ
//     }
// });


// 5  rename
// fs.rename("file1.txt", " file2.text", function (err) {
//     if (err) {
//         console.error('Error reading file:', err);
//         return; // إنهاء الدالة إذا كان هناك خطأ
//     }
// });



// للتأكد ان الملف موجود ف المسار ام لا 
// if (fs.existsSync("E://D//Camp 24//back//2//2//3//file2.text")) {
//     fs.unlink("E://D//Camp 24//back//2//2//3//file2.text", function (err) {
//         if (err) {
//             console.error('Error deleting file:', err);
//         } else {
//             console.log('File deleted successfully');
//         }
//     });
// } else {
//     console.log('File does not exist');
// }
