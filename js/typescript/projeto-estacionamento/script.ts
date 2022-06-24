// Corrigir erros da função de histórico

interface Veiculo {
    nome: string;
    placa: string;
    entrada: Date | string;
}

interface VeiculoRemovido{
    nome: string;
    placa: string;
    entrada: Date | string;
    saida: Date | string;
    tempo: Date | string;
}

(function (){
    const $ = (query: string): HTMLInputElement | null => document.querySelector(query);

    function calcTempo(mil: number){
        const hora = Math.floor(mil / 3600000);
        const min = Math.floor((mil % 3600000) / 60000);
        const sec = Math.floor((mil % 60000) / 1000);
        

        return `${hora}:${min}:${sec}`;
    }

    function patio() {
        function ler() : Veiculo[]{
            return localStorage.patio ? JSON.parse(localStorage.patio) : [];
        }

        function salvar(veiculos: Veiculo[]){
            localStorage.setItem("patio", JSON.stringify(veiculos));
        }

        function adicionar(veiculo: Veiculo, salva?: boolean){
            const row = document.createElement("tr");

            const placeholder = document.getElementsByTagName("input");
            const placeholderArray = Array.from(placeholder);

            placeholderArray.map((item) => {item.value =``});


            row.innerHTML = `
            <td>${veiculo.nome}</td>
            <td class="placa">${veiculo.placa}</td>
            <td>${veiculo.entrada}</td>
            <td>
            <button class="delete" data-placa="${veiculo.placa}">X</button>
            </td>`;

            row.querySelector(".delete")?.addEventListener("click", function(){
                remover(this.dataset.placa as string);
            })

            $("#patio")?.appendChild(row);

            if(salva) salvar([...ler(), veiculo]);


        };
        
        
        function remover(placa: string){
            const {entrada, nome} = ler().find(veiculo => veiculo.placa === placa);

            const tempo = calcTempo(new Date().getTime() - new Date(entrada).getTime());

            if(!confirm(`O veículo ${nome} permanceu por ${tempo}. Deseja encerrar?`)) return;

            patioHistorico().moverHistorico(placa);
            salvar(ler().filter(veiculo => veiculo.placa !== placa));

            render();
            patioHistorico().renderHistorico();
        }
        
        function render(){
            $("#patio")!.innerHTML = "";
            const patio = ler();

            if (patio.length) {
                patio.forEach((veiculo) => adicionar(veiculo));
            }
        }

        return {ler, adicionar, remover, salvar, render};
    }

    function patioHistorico(){
        function lerHistorico() : VeiculoRemovido[]{
            console.log(localStorage.patioHistorico ? JSON.parse(localStorage.patioHistorico) : [])
            return localStorage.patioHistorico ? JSON.parse(localStorage.patioHistorico) : [];
        }

        function salvarHistorico(veiculosRemovidos: VeiculoRemovido[]){
            localStorage.setItem("historico-patio", JSON.stringify(veiculosRemovidos));
        }

        function renderHistorico(){
            $("#historico-patio").innerHTML = "";
            const historico = lerHistorico();

            if (historico.length) {
                historico.forEach((veiculo) => adicionarHistorico(veiculo, true));
            }
        }

        function moverHistorico(placa: string){
            const {nome, entrada} = patio().ler().find(veiculo => veiculo.placa === placa);
            const saida = new Date().toISOString();
            const tempo = calcTempo(new Date().getTime() - new Date(entrada).getTime());

            const veiculoRemovido: VeiculoRemovido = {
                nome: nome,
                placa: placa,
                entrada: entrada,
                saida: saida,
                tempo: tempo,
            }

            adicionarHistorico(veiculoRemovido);
            salvarHistorico([...lerHistorico(), veiculoRemovido]);
            renderHistorico();

        }

        function adicionarHistorico(veiculoRemovido : VeiculoRemovido, salva?: boolean){
            const row = document.createElement("tr");

            const {nome, entrada, placa, saida, tempo} = veiculoRemovido;


            row.innerHTML = `
            <td>${nome}</td>
            <td class="placa">${placa}</td>
            <td>${entrada}</td>
            <td>${saida}</td>
            <td>${tempo}</td>`;

            $("#historico-patio")?.appendChild(row);

        }

        return {lerHistorico, salvarHistorico, adicionarHistorico, renderHistorico, moverHistorico};
    }

    patio().render();
    patioHistorico().renderHistorico();


    $("#cadastrar")?.addEventListener('click', () =>{
        const nome = $('#recebe-nome')?.value;
        const placa = $('#recebe-placa')?.value;
        const placaArray = Array.from(document.getElementsByClassName("placa"))

        if(!nome || !placa){
            return alert("Os campos nome e placa são obrigatórios");
        }
        if (placaArray.filter((item) => item.innerHTML == placa).length != 0){
            return alert("Veiculo já existente");
        }

        patio().adicionar({nome, placa, entrada: new Date().toISOString()}, true)
    })

})();