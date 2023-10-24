let titleContent = document.querySelector('#title')
let descriptionContent = document.querySelector('#Parágrafo')

console.log(titleContent);
console.log(descriptionContent);

function onSobreMim() {
    titleContent.innerHTML = 'Sobre mim'
    descriptionContent.innerHTML = 'Me chamo Caliel Zen Vaz Velozo, tenho 23 anos de idade, estou cursando análise e desenvolvimento de sistemas, trabalho na empresa Fort Atacadista como conferente no momento, sou natural de Manaus/AM atualmente morando em Balneário Camboriú/SC. Objetivo profissional se tornar um bom Programador'
}

function onFormacao() {
    titleContent.innerHTML = 'Formação'
    descriptionContent.innerHTML = 'Ensino Médio completo e atualmente Cursando Análise e desenvolvimento de sistemas'
}

function onProfissão() {
    titleContent.innerHTML = 'Carreira Profissional'
    descriptionContent.innerHTML = `
     Jovem aprendiz de Produção - ITAM (Industria de transformadores Amazonas)
    <br>
     Conferente - Fort Atacadista
    `
}

function onRedesSociais() {
    titleContent.innerHTML = 'Redes sociais'
    descriptionContent.innerHTML = `
    <ul>
    <li>
    <a href="https://www.linkedin.com/in/caliel-zen-vaz-velozo-7876b2227/" class="socials">Linkedin</a>
    </li>
    <li>
    <a href="https://www.instagram.com/caliel_vaz/" class="socials">Instagram</a>
    </li>
    <li>
    <a href="https://wa.me/qr/7QHZN5C5N3RMK1" class="socials">WhatsApp</a>
    </li>
    <li>
    <a href="https://github.com/Caliel-Vaz" class="socials">GitHub</a>
    </li>
</ul>
    `
}