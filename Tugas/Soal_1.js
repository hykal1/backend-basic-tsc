/**
 * --- SOAL SATU
 * Buatlah variabel nama, nim, dan jurusan kemudian masukkan ke variabel array secara berurut
 */

module.exports = function variable() {
    // Write your code here
    const nama = 'Muhammad Hykal Nurhakim';
    const NIM = 2110511024;
    const jurusan = 'S1 Informatika';

    const array = [nama, NIM, jurusan];
    return array;
}

const variable = require('./Soal_1.js');
console.log(variable());