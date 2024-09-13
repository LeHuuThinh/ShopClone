var getNode = document.querySelector('.btn')

function viec1(){
    console.log('Ây daaa !')
}
function viec2(){
    console.log(Date())
}

getNode.addEventListener('click', viec1)
getNode.addEventListener('click', viec2)

getNode.removeEventListener('click', viec2)



