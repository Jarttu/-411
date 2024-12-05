document.getElementById('tarkista').addEventListener('click', function(event) {
    event.preventDefault()
    const kayttajaid = document.getElementById('kayttaja').value;
    const salasana = document.getElementById('salis').value;
    const nimi = document.getElementById('nimi').value;
    const osoite = document.getElementById('osote').value;
    const postinumero = document.getElementById('pnumero').value;
    const gmail = document.getElementById('sposti').value;
    const maa = document.getElementById('maat').value;
    
    const mies = document.getElementById('mies').checked;
    const nainen = document.getElementById('nainen').checked;

    const kieli1 = document.getElementById('suomik').checked;
    const kieli2 = document.getElementById('englantik').checked;
    const kieli3 = document.getElementById('muuk').checked;
    
    let virheet = []
    
    if (kayttajaid.length < 6){
     virheet.push("Virhe: Käyttäjäid:n on oltava vähintään 6 merkkiä pitkä")
    }
    if (salasana.length < 6){
        virheet.push("Virhe: Salasanan on oltava vähintään 6 merkkiä pitkä")
        
    }
    else{

        let onkoisokirjain = /[A-Z]/.test(salasana);
        let onkonumero = /[0-9]/.test(salasana);
        let onkoerikoismerkki = /[!@£$€&%#]/.test(salasana);

        if (! onkoisokirjain){
            virheet.push("Virhe: Salasanassa on oltava ainakin yksi iso kirjain")
        }
        if(! onkonumero){
            virheet.push("Virhe: Salasanassa on oltava vähintään yksi numero")
        }
        if(! onkoerikoismerkki){
            virheet.push("Virhe: salasanassa on oltava vähintään yksi seuraavista erikoismerkeistä '!@£$€&%#'")
        }

    }

    if (postinumero.length !== 5 || isNaN(postinumero)){
        virheet.push("Virhe: Postinumeron täytyy olla 5 merkkiä pitkä ja numero")
    }

    if( !( gmail.endsWith("@gmail.com") || gmail.endsWith("@hotmail.com") || gmail.endsWith("@outlook.com") )|| gmail.indexOf('@') < 1){
        virheet.push("Virhe: Sähköpostin on oltava muodossa 'esimerkki@(gmail, hotmail, outlook).com'")
    }

    if(nimi === ""){
        virheet.push("Virhe: Nimi ei voi olla tyhjä")
    }
    if(osoite === ""){
        virheet.push("Virhe: Osoite ei voi olla tyhjä")
    }
    if(maa === "vmaa"){
        virheet.push("Virhe: Valitse maa")
    }

    if(!mies && !nainen){
        virheet.push("Virhe: Valitse sukupuoli")
    }

    if(!kieli1 && !kieli2 && !kieli3){
        virheet.push("Virhe: Valitse kieli")
    }

    if(virheet.length >0){
        const tulostus = document.getElementById('tulostus')
        tulostus.textContent = "\n" + virheet.join("\n")
    }
    else{
        const tulostus = document.getElementById('tulostus')
        tulostus.textContent =  "Kaikki tiedot voidaan lähettää"
    }
})