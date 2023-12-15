let perguntaArea = prompt('Qual área você deseja seguir? Digite "1" para Front-End e "2" para Back-End')

if(perguntaArea == '1'){
   var reactOrVue = prompt('Você deseja aprender React ou Vue?')
} else {
   var cOrJava = prompt('Você deseja aprender C# ou Java?')
}

const perguntaEspecialidade = prompt('Digite 1 se você pretende se desenvolver na área ou digite 2 se você pretende se desenvolver para FullStack')

if(perguntaEspecialidade == '1' && perguntaArea == '1'){
     alert(`Continue estudando ${reactOrVue}`)
} else if (perguntaEspecialidade == '1' && perguntaArea == '2'){
  alert(`Você precisa estudar outras linguagens além de ${reactOrVue}`)
}else if (perguntaEspecialidade == '2' && perguntaArea == '1'){
  alert(`Continue estudando ${cOrJava}`)
}else if (perguntaEspecialidade == '2' && perguntaArea == '2'){
  alert(`Você precisa estudar mais que ${cOrJava}`)
}

if(perguntaEspecialidade == '2'){
  let perguntaFinal = prompt('Quais tecnologias você deseja aprender? Deixe o espaço em branco e aperte OK para encerrar ')
} else {
  alert('Obrigado por compartilhar suas expectativas!')
}

let perguntaFinal = prompt('Quais tecnologias você deseja aprender? Deixe o espaço em branco e aperte OK para encerrar ')

while(perguntaFinal !== ''){
  let novaTecnologia =  prompt('Qual outra tecnologia você gostaria de aprender? Deixe o espaço em branco e aperte OK para encerrar')
 alert(`${novaTecnologia} é muito interessante!`)
 perguntaFinal = prompt('Deseja aprender mais alguma tecnologia? Caso não, deixe o espaço em branco e clique em "OK"')
}
if(perguntaFinal == ''){
  alert('Muito legal suas curiosidades!')
}
