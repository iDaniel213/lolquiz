for(let obj of kerdesek){
    //console.log('Kerdes:',obj.question)
    document.querySelector('.quiz').innerHTML+=`<li>${obj.question}</li>`
    //console.log(obj.answers)
    let id=obj.id
    for(let v in obj.answers){
        //console.log(v,obj.answers[v],id)
        let ok= v==obj.correctAnswer? 1 : 0
        document.querySelector('.quiz').innerHTML+=`<input type="radio" value="${v}" name="${id}" data-ok="${ok}"/>${obj.answers[v]}<br>`
        
    }
    
    

}

function ellenor(){
    let szamlalo =0
    for(let obj of kerdesek){
        //console.log(obj.id)
        let kerdesObj=document.getElementsByName(obj.id)
        for(let obj of kerdesObj){
            console.log('obj:',obj)
            if(obj.checked)
                if(obj.dataset.ok==1){
                    obj.style.accentColor="green"
                    szamlalo++
                    console.log(obj.name,"img")
                    document.getElementById(obj.name).classList.remove('d-none')
                }else
                    obj.style.accentColor="red"
        }
        console.log('********************')
        if(szamlalo == kerdesek.length){
            alert(`A ${kerdesek.length}-ből ${szamlalo} találtál el!`)
        }else{
            alert(`A ${kerdesek.length}-ből ${szamlalo} találtál el!`)
        }
    }
}