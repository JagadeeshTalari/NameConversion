
let btn = document.querySelector("#convert-btn");




btn.addEventListener('click', () => {
    let inputText = document.querySelector("#text").value;
    document.querySelector("#camel-case").innerHTML = camelCase();
    document.querySelector("#pascal-case").innerHTML = pascalCase();
    document.querySelector("#snake-case").innerHTML = snakeCase();
    document.querySelector("#screaming-snake-case").innerHTML = screamingSnakeCase();
    document.querySelector("#kebab-case").innerHTML = kebabCase();
    document.querySelector("#screaming-kebab-case").innerHTML = screamingKebabCase();


    function camelCase(){
        let nameArray = inputText.toLowerCase();
        nameArray = nameArray.split(" ")
        for (let i=1; i<nameArray.length; i++){
          nameArray[i] = (nameArray[i])[0].toUpperCase() + (nameArray[i]).slice(1,);

        }
        return nameArray.toString().replaceAll(",","");
    }

    function pascalCase(){
        let nameArray = inputText.toLowerCase();
        nameArray = nameArray.split(" ")
        for (let i=0; i<nameArray.length; i++){
          nameArray[i] = (nameArray[i])[0].toUpperCase() + (nameArray[i]).slice(1,);

        }
        return nameArray.toString().replaceAll(",","");
    }

    function snakeCase(){
        let nameArray = inputText.toLowerCase();
       
        return nameArray.toString().replaceAll(" ","_");
    }

    function screamingSnakeCase(){
        let nameArray = inputText.toUpperCase();
       
        return nameArray.toString().replaceAll(" ","_");
    }
    
    function kebabCase(){
        let nameArray = inputText.toLowerCase();
       
        return nameArray.toString().replaceAll(" ","-");
    }

    function screamingKebabCase(){
        let nameArray = inputText.toUpperCase();
       
        return nameArray.toString().replaceAll(" ","-");
    }
    
    

})