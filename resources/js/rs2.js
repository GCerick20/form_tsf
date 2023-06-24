function loadImage(url) {
    return new Promise(resolve =>{
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = "blob";
        xhr.onload = function (e){
            const reader = new FileReader();
            reader.onload = function(event) {
                const res = event.target.result;
                resolve(res);
            }
            const file = this.response;
            reader.readAsDataURL(file);
        }
        xhr.send();
    });
}


window.addEventListener('load', async () => {

  
    const form = document.querySelector('#form');
    form.addEventListener('submit', (e) =>{
        e.preventDefault();

        let solt = document.getElementById('solt').value;
        let pnuevo = document.getElementById('pnuevo').value;
        let act = document.getElementById('act').value;
        let tcontr = document.getElementById('tcontr').value;
        let clase = document.getElementById('clase').value;
        let conta = document.getElementById('conta').value;
        let ident = document.getElementById('ident').value;
        let num = document.getElementById('num').value;
        let social = document.getElementById('social').value;
        let comercial = document.getElementById('comercial').value;
        let direccion = document.getElementById('direccion').value;
        let num1 = document.getElementById('num1').value;
        let num2 = document.getElementById('num2').value;
        let correo = document.getElementById('correo').value;
        let tproovedor = document.getElementById('tproovedor').value;
        let compra = document.getElementById('compra').value;
        let anticipo = document.getElementById('anticipo').value;
        let zona = document.getElementById('zona').value;
        let sitio = document.getElementById('sitio').value;
        let hect = document.getElementById('hect').value;
        let pisc = document.getElementById('pisc').value;
        let mins = document.getElementById('mins').value;
        let tramite = document.getElementById('tramite').value;
        let tpago = document.getElementById('tpago').value;
        let banco = document.getElementById('banco').value;
        let tcuenta = document.getElementById('tcuenta').value;
        let ncuenta = document.getElementById('ncuenta').value;
        let epago = document.getElementById('epago').value;
        let fpago = document.getElementById('fpago').value;
        let dcredito = document.getElementById('dcredito').value;


        generatePDF(solt, pnuevo, act, tcontr, clase, conta, ident, num, social, comercial, direccion, num1, num2, correo, tproovedor, compra, anticipo, zona,
            sitio, hect, pisc, mins, tramite, tpago, banco, tcuenta, ncuenta, epago, fpago, dcredito);
   
    })

}); 

async function generatePDF(solt, pnuevo, act, tcontr, clase, conta, ident, num, social, comercial, direccion, num1, num2, correo, tproovedor, compra, anticipo, zona,
                        sitio, hect, pisc, mins, tramite, tpago, banco, tcuenta, ncuenta, epago, fpago, dcredito){
    const image = await loadImage("rs2.png");
   
        const pdf = new jsPDF('p', 'pt', 'A4');
        pdf.addImage(image, 'PNG', 0, 0, 600, 850);

        const date = new Date();
        pdf.text(date.getUTCDate().toString(), 160, 152);
        pdf.text((date.getUTCMonth() + 1).toString(), 210, 152);
        pdf.text(date.getUTCFullYear().toString(), 240, 152);
    
       
        pdf.setFontSize(12);
        pdf.text(solt, 400, 150);
        pdf.text(pnuevo, 160, 178);
        pdf.text(act, 400, 178);
        pdf.text(tcontr, 160, 205);
        pdf.text(clase, 400, 207);

        pdf.text(conta, 215, 235);
        pdf.text(ident, 165, 263);
        pdf.text(num, 400, 263);
        pdf.text(social, 160, 289);

        pdf.text(comercial, 160, 316);
        pdf.text(direccion, 160, 341);
        pdf.text(num1, 160, 369);
        pdf.text(num2, 417, 369);
        pdf.text(correo, 160, 397);
        pdf.text(tproovedor, 160, 425);


        pdf.text(compra, 217, 480);
        pdf.text(anticipo, 370, 480);
        pdf.text(zona, 180, 548);
        pdf.text(sitio, 415, 548);
        pdf.text(hect, 180, 573);
        pdf.text(pisc, 415, 573);
        pdf.text(mins, 180, 597);
        pdf.text(tramite, 415, 597);
        pdf.text(tpago, 160, 665);
        pdf.text(banco, 380, 665);
        pdf.text(tcuenta, 160, 698);
        pdf.text(ncuenta, 380, 698);
        pdf.text(epago, 160, 728);
        pdf.text(fpago, 160, 757);
        pdf.text(dcredito, 415, 757);

        
        pdf.setFillColor(0,0,0);
        


pdf.save("REGSIS002.pdf");

}
