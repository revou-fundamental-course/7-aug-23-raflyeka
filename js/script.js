function areaHitung() {
  let alas = parseFloat(document.getElementById("alas").value);
  let tinggi = parseFloat(document.getElementById("tinggi").value);
  if (isNaN(alas) || isNaN(tinggi)) {
    return;
  }
  let hasil = 0.5 * alas * tinggi;

  document.getElementById(
    "result"
  ).innerHTML = `Dengan alas senilai ${alas}cm dan tinggi ${tinggi}cm maka luas segitiga adalah ${hasil}cm2`;
}

function areaReset() {
  document.getElementById("alas").value = "";
  document.getElementById("tinggi").value = "";
  document.getElementById("result").innerHTML = "";
}

function ayoHitung() {
  let sisiSatu = parseFloat(document.getElementById("sisiSatu").value);
  let sisiDua = parseFloat(document.getElementById("sisiDua").value);
  let sisiTiga = parseFloat(document.getElementById("sisiTiga").value);
  if (isNaN(sisiSatu) || isNaN(sisiDua) || isNaN(sisiTiga)) {
    return;
  }
  let hasilBaru = sisiSatu + sisiDua + sisiTiga;

  document.getElementById(
    "finnaly"
  ).innerHTML = `Dengan sisi 1: ${sisiSatu}cm, sisi 2: ${sisiDua}cm, dan sisi 3: ${sisiTiga}cm maka keliling segitiga adalah ${hasilBaru}`;
}

function ayoReset() {
  document.getElementById("sisiSatu").value = "";
  document.getElementById("sisiDua").value = "";
  document.getElementById("sisiTiga").value = "";
  document.getElementById("finnaly").innerHTML = "";
}
