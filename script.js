function calcularMediaAPs() {
    const APs = document.getElementById('form_aps')
    APs.addEventListener('submit', function(e) {
        e.preventDefault();
        let erros = []
        let nap1 = document.getElementById('ap1')
        let n1 = parseFloat(nap1.value)
        if (isNaN(n1) || n1 < 0 || n1 > 10) {
            erros.push('AP1')
        }
        let nap2 = document.getElementById('ap2')
        let n2 = parseFloat(nap2.value)
        if (isNaN(n2) || n2 < 0 || n2 > 10) {
            erros.push('AP2')
        }
        if (erros.length > 0) {
            alert(`Por favor, insira notas válidas para: ${erros.join(', ')}.`);
            return;
        }
        let med_ap = (n1 + n2) / 2
        let ap_pond = med_ap * 0.3
        let aps_res = document.getElementById('ap_res')
        aps_res.innerHTML = `A média das APs é: <strong>${med_ap.toFixed(2)}</strong><br>
        A média ponderada das APs é: <strong>${ap_pond.toFixed(3)}</strong>`
        aps_res.style.display = 'block';
    });
}

function calcularMediaPAI() {
    const PAI = document.getElementById('form_pai')
    PAI.addEventListener('submit', function(e) {
        e.preventDefault();
        let erros = []
        let notas_pai = []
        let npai1 = document.getElementById('pai1')
        let p1 = parseFloat(npai1.value)
        if (isNaN(p1) || p1 < 0 || p1 > 50) {
            erros.push('PAI 1')
        }
        let npai2 = document.getElementById('pai2')
        let p2 = parseFloat(npai2.value)
        if (isNaN(p2) || p2 < 0 || p2 > 100) {
            erros.push('PAI 2')
        }
        let npai3 = document.getElementById('pai3')
        let p3 = parseFloat(npai3.value)
         if (isNaN(p3) || p3 < 0 || p3 > 100) {
            erros.push('PAI 3')
        }
        if (erros.length > 0) {
            alert(`Por favor, insira notas válidas para: ${erros.join(', ')}.`);
            return;
        }
        notas_pai.push(p1 / 5)
        notas_pai.push(p2 / 10)
        notas_pai.push(p3 / 10)
        notas_pai.sort((a, b) => a - b)
        notas_pai.shift()
        let med_pai = notas_pai.reduce((soma, nota) => soma + nota, 0) / 2
        let pai_pond = med_pai * 0.3
        let p_res = document.getElementById('pai_res')
        p_res.innerHTML = `A média da PAI é: <strong>${med_pai.toFixed(2)}</strong><br>
        A média ponderada da PAI é: <strong>${pai_pond.toFixed(3)}</strong>`
        p_res.style.display = 'block';
    });
}

function quantoFalta() {
    const PN = document.getElementById('form_np')
    PN.addEventListener('submit', function(e) {
        e.preventDefault();
        let erros = []
        let m_ap = document.getElementById('maps')
        let map = parseFloat(m_ap.value)
        if (isNaN(map) || map < 0 || map > 10) {
            erros.push('Média das APs')
        }
        let m_pai = document.getElementById('mpai')
        let pai = parseFloat(m_pai.value)
        if (isNaN(pai) || pai < 0 || pai > 10) {
            erros.push('Média da PAI')
        }
        if (erros.length > 0) {
            alert(`Por favor, insira notas válidas para: ${erros.join(', ')}.`);
            return;
        }
        let pond_ap = map * 0.3
        let pond_pai = pai * 0.3
        let qf = (6 - (pond_ap + pond_pai)) / 0.4
        let np = document.getElementById('np_res')
        if (qf <= 0) {
            np.innerHTML = 'Parabéns, você já está aprovado!'
        } else if (qf > 10) {
            np.innerHTML = 'Sinto muito, não é mais possível atingir nota para ser aprovado.'
        } else {
            np.innerHTML = `Você precisa de <strong>${qf.toFixed(2)}</strong> na prova final.`
        }
        np.style.display = 'block'
    });
}

function limparAP() {
    document.getElementById('ap_res').innerHTML = ''
    document.getElementById('ap_res').style.display = 'none'
}

function limparPAI() {
    document.getElementById('pai_res').innerHTML = ''
    document.getElementById('pai_res').style.display = 'none'
}

function limparNP() {
    document.getElementById('np_res').innerHTML = ''
    document.getElementById('np_res').style.display = 'none'
}

function Reset() {
    document.getElementById('form_aps').reset()
    document.getElementById('form_pai').reset()
    document.getElementById('form_np').reset()

    document.getElementById('ap_res').innerHTML = ''
    document.getElementById('ap_res').style.display = 'none'
    document.getElementById('pai_res').innerHTML = ''
    document.getElementById('pai_res').style.display = 'none'
    document.getElementById('np_res').innerHTML = ''
    document.getElementById('np_res').style.display = 'none'
}
