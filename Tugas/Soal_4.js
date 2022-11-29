/**
 * --- SOAL EMPAT
 * Bilangan prima adalah bilangan asli lebih dari 1 yang bukan hasil kali dari dua bilangan asli yang lebih kecil.
 * Dengan kata lain, n > 1 merupakan bilangan prima apabila bilangan tersbut hanya bisa dibagi oleh 1 dan bilangan itu sendiri.
 * 
 * Contoh, 5 merupakan bilangan prima, karena tidak bisa dibagi oleh 2, 3, dan 4.
 * 
 * TUGAS
 * Buat logika yang memungkinkan fungsi di bawah ini dapat 
 * mengembalikan bilangan prima dalam sebuah array (interval 2 sampai dengan n)
 * 
 * Test Case:
 * n = 10
 * return value = [2, 3, 5, 7]
 */

 module.exports = function submission(n) {
    // Write your code here
    let prima = [], result = [];
    for (let i=2; i<=n; i++) {
        if (!prima[i]) {
            result.push(i);
            for (let j=i; j<=n; j+=i) {
                prima[j] = true;
            }
        }
    }
    return result;
}

const submission = require('./Soal_4.js');
console.log(submission(10));