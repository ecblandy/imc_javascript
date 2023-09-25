document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('buttonCalcular').addEventListener('click', () => {
        let altura = document.getElementById('altura').value
        let peso = document.getElementById('peso').value
        altura = Number(altura)
        peso = Number(peso)

        let IMC = peso / (altura * altura)
        IMC = IMC.toFixed(1)

        const elementosAtivos = document.querySelectorAll('.is--active');
        elementosAtivos.forEach(elemento => {
            elemento.classList.remove('is--active');
        });

        if(IMC <= 16.9){
            const muitoAbaixoPeso = document.querySelectorAll('.muitoAbaixoPeso')
           muitoAbaixoPeso.forEach(elemento => {
            elemento.classList.add('is--active')
           })
        } else if (IMC <= 18.4){
            const abaixoPeso = document.querySelectorAll('.abaixoPeso')
            abaixoPeso.forEach(elemento => {
             elemento.classList.add('is--active')
            })
        } else if (IMC <= 24.9){
            const pesoNormal = document.querySelectorAll('.pesoNormal')
            pesoNormal.forEach(elemento => {
             elemento.classList.add('is--active')
            })
        } else if (IMC <= 29.9){
            const acimaPeso = document.querySelectorAll('.acimaPeso')
            acimaPeso.forEach(elemento => {
             elemento.classList.add('is--active')
            })
        }
        else if (IMC <= 34.9){
            const obesidadeGrau1 = document.querySelectorAll('.obesidadeGrau1')
            obesidadeGrau1.forEach(elemento => {
             elemento.classList.add('is--active')
            })
        } else if (IMC <= 40){
            const obesidadeGrau2 = document.querySelectorAll('.obesidadeGrau2')
            obesidadeGrau2.forEach(elemento => {
             elemento.classList.add('is--active')
            })
        } else if (IMC > 40){
            const obesidadeGrau3 = document.querySelectorAll('.obesidadeGrau3')
            obesidadeGrau3.forEach(elemento => {
             elemento.classList.add('is--active')
            })
        }
        
        document.getElementById('respostaIMC').value = IMC
        document.getElementById('altura').value = '';
        document.getElementById('peso').value = '';
    })
})