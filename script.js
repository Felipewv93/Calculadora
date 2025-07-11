function calcularMediaAPs() {
    const APs = document.getElementById('form_aps')
    APs.addEventListener('submit', function(e) {
        e.preventDefault();
        let nap1 = document.getElementById('ap1')
        let n1 = parseFloat(nap1.value)
        let nap2 = document.getElementById('ap2')
        let n2 = parseFloat(nap2.value)
        if (isNaN(n1) || n1 < 0 || n1 > 10 || isNan(n2) || n2 < 0 || n2 > 10 {
            alert('Por favor, insira uma nota válida.')
            return
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
        let notas_pai = []
        let npai1 = document.getElementById('pai1')
        if (isNaN(npai1) || npai < 0 || npai1 > 50) {
            alert('Por favor, insira uma nota válida.')
            return
        }
        let p1 = parseFloat(npai1.value) / 5
        notas_pai.push(p1)
        let npai2 = document.getElementById('pai2')
        if (isNaN(npai2) || npai2 < 0 || npai2 > 100) {
            alert('Por favor, insira uma nota válida.')
            return
        }
        let p2 = parseFloat(npai2.value) / 10
        notas_pai.push(p2)
        let npai3 = document.getElementById('pai3')
        if (isNaN(npai3) || npa3 < 0 || npai3 > 100) {
            alert('Por favor, insira uma nota válida.')
            return
        }
        let p3 = parseFloat(npai3.value) / 10
        notas_pai.push(p3)
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
        let m_ap = document.getElementById('maps')
        if (isNan(m_ap) || m_ap < 0 || m_ap > 10) {
            alert('Por favor, insira uma nota válida.)
            return
        }
        let pond_ap = parseFloat(m_ap.value) * 0.3
        let m_pai = document.getElementById('mpai')
        if (isNan(m_pai) || m_pai < 0 || m_pai > 10) {
            alert('Por favor, insira uma nota válida.)
            return
        }
        let pond_pai = parseFloat(m_pai.value) * 0.3
        let qf = (6 - (pond_ap + pond_pai)) / 0.4
        let np = document.getElementById('np_res')
        np.innerHTML = `Você precisa de <strong>${qf.toFixed(2)}</strong> na prova final.`
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
