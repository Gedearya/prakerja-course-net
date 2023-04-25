// Tugas Uji Keterampilan Prakerja
function hitungVokalSempurna(kalimat) {
  kalimat = kalimat.toLowerCase();
  var jumlah = {
    a: 0,
    i: 0,
    u: 0,
    e: 0,
    o: 0,
  };

  for (var i = 0; i < kalimat.length; i++) {
    var huruf = kalimat.charAt(i);
    if (huruf === "a" || huruf === "A") {
      jumlah.a++;
    } else if (huruf === "i" || huruf === "I") {
      jumlah.i++;
    } else if (huruf === "u" || huruf === "U") {
      jumlah.u++;
    } else if (huruf === "e" || huruf === "E") {
      jumlah.e++;
    } else if (huruf === "o" || huruf === "O") {
      jumlah.o++;
    }
  }

  var total = jumlah.a + jumlah.i + jumlah.u + jumlah.e + jumlah.o;

  return {
    a: jumlah.a,
    i: jumlah.i,
    u: jumlah.u,
    e: jumlah.e,
    o: jumlah.o,
    total: total,
  };
}

var kalimat = process.argv.slice(2).join(" ");

console.log("Kalimat: " + kalimat);
console.log("Jumlah huruf vokal");
console.log("------------------");
var hasil = hitungVokalSempurna(kalimat);
console.log("A: " + hasil.a);
console.log("I: " + hasil.i);
console.log("U: " + hasil.u);
console.log("E: " + hasil.e);
console.log("O: " + hasil.o);
console.log("Total: " + hasil.total);
