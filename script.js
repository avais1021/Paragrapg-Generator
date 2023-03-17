const paragraph = [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel augue ligula.Nunc ac diam bibendum, pellentesque massa sit amet, volutpat nunc. Ut libero massa, rhoncus non leo sed, ullamcorper lobortis augue. Vivamus tristique porttitor mauris, nec malesuada nibh venenatis nec. Morbi fermentum in nulla ac hendrerit. Donec dapibus est purus, sed viverra lorem congue eget. Pellentesque eget enim ac ligula malesuada molestie in vel erat. Praesent dictum metus vitae libero facilisis mollis.`
    ,
    `Duis facilisis ac dolor vitae pretium. Pellentesque massa urna, euismod ut dictum non, egestas a augue. Curabitur bibendum tincidunt neque in eleifend. Phasellus venenatis posuere mattis. Nunc at magna nisl. Maecenas a dui sodales, tristique dui sollicitudin, molestie elit. Suspendisse bibendum bibendum ex vel consectetur. Duis suscipit nunc nec ultrices dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla blandit mi vitae sollicitudin ornare.`
    ,
    `Nullam malesuada ligula non magna tristique tempus. Nullam tortor nisl, ultricies sagittis porttitor ut, fermentum sed metus. Ut faucibus quam a mauris suscipit ultricies. Nam pellentesque ultricies nunc. Suspendisse potenti. Cras mollis dignissim tellus vel convallis. In odio metus, luctus ut enim vel, lacinia sodales neque. Suspendisse non nulla vel lacus luctus sodales sed vitae mi. Sed vitae cursus justo. Nulla ut diam ante. Donec imperdiet nunc ut justo pulvinar, et ullamcorper nisl vehicula. Curabitur eu turpis molestie, tristique tellus a, vestibulum erat. Phasellus mi ligula, consectetur nec vestibulum quis, accumsan vel lorem.`
    ,
    `Sed aliquet eros et nunc tincidunt eleifend. Etiam id libero nunc. Vivamus non metus neque. Cras nec elit ornare, porta arcu vel, ultrices neque. Cras et blandit ipsum. Ut et maximus sem. Nam pellentesque mauris at suscipit imperdiet. Sed erat ligula, blandit maximus ex ut, gravida mattis metus. Maecenas egestas ligula in sem auctor ullamcorper.`
    ,
    `Fusce metus lectus, ullamcorper ac tristique id, suscipit ut neque. Maecenas non eleifend augue, a consequat velit. Nunc in est augue. Nulla sed nibh et libero porta convallis a nec nisi. Integer ullamcorper magna quis tortor interdum, nec sodales orci varius. Nulla et gravida nibh, in ultricies ligula. Donec sodales posuere libero, sit amet laoreet est tempor in. Morbi lobortis dapibus efficitur. Donec feugiat magna ac arcu egestas bibendum. Donec nec neque est. Integer et lacus ante. Quisque ultricies accumsan tortor vel congue. Vivamus imperdiet ligula quis sagittis consectetur. Mauris facilisis porta tellus, in porttitor arcu mollis ut. Mauris dignissim sagittis cursus. Integer convallis erat ex, nec convallis ipsum finibus eget.`
    ,
    `Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi vitae massa condimentum, tincidunt turpis at, porta tellus. Aliquam erat volutpat. Mauris cursus mollis augue eu pellentesque. Integer rutrum molestie lorem. Vestibulum eget tristique risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras consectetur massa ut velit sagittis, in condimentum libero egestas.`
    ,
    `Mauris nec lorem condimentum, feugiat nisl a, mattis ex. Integer ac sem maximus, pretium augue at, euismod nibh. In eget neque et massa pharetra varius non at metus. In vehicula dignissim elit at porta. Pellentesque nec nulla et augue vestibulum faucibus id aliquam est. Mauris turpis dui, tempus eget sollicitudin ac, sagittis vitae nunc. Aliquam erat volutpat. Maecenas dignissim odio enim, non sagittis lacus mollis vel. Donec rutrum ligula eu auctor elementum. Nunc risus erat, tempus eget diam ut, pulvinar scelerisque augue. Nam mauris magna, posuere non felis non, faucibus auctor ligula.`
    ,
    `Pellentesque neque neque, interdum eu tempus pharetra, auctor et tortor. Curabitur varius hendrerit purus, quis venenatis dolor porta non. Maecenas convallis nulla in felis ultricies, at ornare ipsum condimentum. Ut in volutpat risus, eu gravida urna. Proin vulputate nisi in neque vulputate, non feugiat quam accumsan. Nulla blandit tortor eu urna luctus, vitae pulvinar massa maximus. Sed faucibus eget lacus eget efficitur. Aenean lobortis vel odio non fermentum. Nullam sit amet mattis felis, lacinia tempor risus. Proin laoreet velit id quam scelerisque condimentum.`
    ,
    `Fusce vulputate urna sed bibendum ornare. In eleifend ornare ligula, vitae viverra nulla auctor at. Cras vitae sem quis urna feugiat pellentesque. Pellentesque et diam ut erat tempor gravida vitae nec tellus. Morbi dapibus vitae risus sit amet venenatis. In et eleifend sapien. Donec efficitur, orci sit amet fermentum ultricies, velit tellus placerat ex, ut placerat arcu nisl quis urna. Vivamus non maximus libero, nec egestas ex. Ut imperdiet enim feugiat semper interdum. Donec tristique sapien a ipsum commodo blandit. Duis metus quam, placerat in elit sed, laoreet gravida urna. Vestibulum ut ornare odio, ut sollicitudin ligula. Cras et tortor non purus hendrerit porttitor. Donec feugiat rutrum interdum. Proin nisi urna, lacinia ut scelerisque vel, commodo ut nunc.`
    ,
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel augue ligula. Nunc ac diam bibendum,
    pellentesque massa sit amet, volutpat nunc. Ut libero massa, rhoncus non leo sed, ullamcorper lobortis
    augue. Vivamus tristique porttitor mauris, nec malesuada nibh venenatis nec. Morbi fermentum in nulla ac
    hendrerit. Donec dapibus est purus, sed viverra lorem congue eget. Pellentesque eget enim ac ligula
    malesuada molestie in vel erat. Praesent dictum metus vitae libero facilisis mollis.`
    ,
    

];

// console.log(paragraph[0])

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }


const items = document.querySelector('#items');
const dataContainer = document.querySelector('#data');

// dataContainer.innerHTML= paragraph[0];

const generatePara = () => {
    console.log(items.value)
    if(isNaN(items.value) || items.value < 0 ){
        const randompara = Math.floor(Math.random() * paragraph.length);
        console.log(randompara);

        dataContainer.innerHTML = `<p> ${paragraph[randompara]} </p>`;
    }else if(items.value > 15){
        dataContainer.innerHTML = `<h1 class='incorrect'>incorrect value maximum limit is 15</h1>`
    } else{
        const localText = shuffle(paragraph);
        const data = localText.slice(0 , items.value)
        // const data = paragraph.slice(0 , items.value)
        console.log(data)

        const paras = data.map((d , a) => {
            return(
                `<span>${a+1})</span><p> ${d}</p>`
            )
        })
        console.log(paras);

        dataContainer.innerHTML = paras.join(' ');

        //  paragraph.map((item)=>{
        //     console.log(item)
        //     const pTag = '';
        //     return(
        //      pTag = `<p>${item}</p>` 
        //     )
        //     dataContainer.innerHTML= pTag;
        
        // })
    }
}

