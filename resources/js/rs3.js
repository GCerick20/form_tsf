function loadImage(url) {
  return new Promise((resolve) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "blob";
    xhr.onload = function (e) {
      const reader = new FileReader();
      reader.onload = function (event) {
        const res = event.target.result;
        resolve(res);
      };
      const file = this.response;
      reader.readAsDataURL(file);
    };
    xhr.send();
  });
}

window.addEventListener("load", async () => {
  const form = document.getElementById("form-rs3");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let ncomp = document.getElementById("ncomp").value;
    let ncome = document.getElementById("ncome").value;
    let usci = document.getElementById("usci").value;
    let direc = document.getElementById("direc").value;
    let cdd = document.getElementById("cdd").value;
    let country = document.getElementById("country").value;
    let mail = document.getElementById("mail").value;
    let phone = document.getElementById("phone").value;
    let contact = document.getElementById("contact").value;
    let nombre = document.getElementById("nombre").value;
    let dir = document.getElementById("dir").value;
    let gmail = document.getElementById("gmail").value;
    let cell = document.getElementById("cell").value;
    let span = document.getElementById("span").value;
    // let eng = document.getElementById("eng").value;
    let eng = "";
    let span2 = document.getElementById("span2").value;
    // let eng2 = document.getElementById("eng2").value;
    let eng2 = "";

    generatePDF(
      ncomp,
      ncome,
      usci,
      direc,
      cdd,
      country,
      mail,
      phone,
      contact,
      nombre,
      dir,
      gmail,
      cell,
      span,
      eng,
      span2,
      eng2
    );
  });


});

async function generatePDF(
  ncomp,
  ncome,
  usci,
  direc,
  cdd,
  country,
  mail,
  phone,
  contact,
  nombre,
  dir,
  gmail,
  cell,
  span,
  eng,
  span2,
  eng2
) {
  const image = await loadImage("./resources/img/rs3.png");

  const pdf = new jsPDF("p", "pt", "letter");
  pdf.addImage(image, "PNG", 0, 0, 565, 792);

  pdf.setFontSize(10);
  pdf.text(ncomp, 154, 137);
  pdf.text(ncome, 154, 157);
  pdf.text(usci, 154, 176);
  pdf.text(direc, 154, 196);
  pdf.text(cdd, 154, 214);
  pdf.text(country, 400, 215);
  pdf.text(mail, 154, 235);
  pdf.text(phone, 154, 255);
  pdf.text(contact, 154, 273);
  pdf.text(nombre, 154, 326);
  pdf.text(dir, 154, 347);
  pdf.text(gmail, 154, 368);
  pdf.text(cell, 154, 390);
  pdf.text(span, 55, 472);
  pdf.text(eng, 55, 525);
  pdf.text(span2, 55, 606);
  pdf.text(eng2, 55, 658);

  pdf.setFontSize();

  pdf.save("REGSIS-003.pdf");
}
