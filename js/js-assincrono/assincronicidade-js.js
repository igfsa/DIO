/* 
Assincronicidade em JS

Por padrão, o JS roda suas tarefas de forma sincrona, ou sej,a realiza uma tarefa client side, depois parte para outra server side...
O JS assíncrono, permite rodar duas tarefas ao mesmo tempo

Promises
Objeto de processamento assincrono 

Analogia com ingresso de cinema, quando é comprado, é uma promessa, não é certeza que irá acontecer, e pode existir um imprevisto que impossibilite
Ou seja, quando um valor promise é chamado, inicialmente seu valor é desconhecido. Pode ser então resolvido ou rejeitado 

Promise(executor: (resolve: (value: any) => void, reject: (reason?: any) => void) => void): Promise<any>
*/

async function resolvePromessa(){
//Async é usado para indicar que a função é assíncrona
    const promessa = new Promise((resolve, reject) => {
//        throw 'erro';     //forçnado erro para testar o catch
        window.setTimeout(() => {
            resolve('Resolvida!');
        }, 2000);
    });
    const resolvida = await promessa
    // await é uma palvra reservada para lidar com promessas. As linhas vinculadas a ela rodam apenas após a promessa ocorrer ou falhar
        .then((result) => result + `Rodando then`)
        .catch((err) => console.log(err + `Tratando (exibindo) erro`));
    return resolvida;
}

await resolvePromessa();
/*
Ao rodar as linhas acima no browser, após 2 segundos a função é resolvida
Mas como uma promisse retorna outra promisse, não é possível chama-la ou imprimi-la, pois ela ainda não foi resolvida
Para exibir o resultado, é necessário usar await antes de chama-lá
*/

