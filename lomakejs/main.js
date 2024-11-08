document.getElementById('tarkista').addEventListener('click', function(event) {
event.preventDefault()
const kayttajaid = document.getElementById('kayttaja').value;
const salasana = document.getElementById('salis').value;
const nimi = document.getElementById('nimi').value;
const osoite = document.getElementById('osote').value;
const postinumero = document.getElementById('pnumero').value;
const gmail = document.getElementById('sposti').value;

let virheet = []

if (kayttajaid.length < 6){
 virheet.push('Virhe: Käyttäjäid ei ole 6 kirjainta pitkä')
}

if ()
}
