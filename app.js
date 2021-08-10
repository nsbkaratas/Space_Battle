//var play= document.querySelector("#play")

startTheGame =()=>{
    var start = prompt('Hello! Do you want to play?', 'Yes/No');
    if(start==="yes"){
        alert("Let's begin!")
    }
    begin()
}


//creating the user's ship
const user={
    hull:20,
    firepower:5,
    accuracy:.7
}
console.log(user)

// class for alien ships
class aliens {    
    constructor(){        
        this.hull = Math.floor(Math.random() * 4) + 3;
        this.firepower = Math.floor(Math.random() * 3) + 2;
        this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
    }         
}
// alien ships' array
var instances=[]
// generating alienships and pushing them into the instances array
for (var i=0; i<6; i++){
    var alien=new aliens()  
    instances.push(alien)  
}
//console.log(instances)

//Shooting an alien


begin=()=>{
    while(instances.length>0){
        var shipLeft=instances.pop();
        if(Math.random()<shipLeft.accuracy){
            console.log("Player got hit: "+ shipLeft.hull)

            instances[i].hull-=user.firepower

        }
        
    }
}

shoot=()=>{
    var i=0
    instances[i].hull-=user.firepower
}
shoot(3)
//console.log(instances[3])




// attack=()=>{
//     for(var i=0; i<6; i++){
//         instances[i]
//     }
// }


// var didHit = Math.random ()
// console.log(didHit)

// if (myShip.accuracy > didHit ){
//        myShip.hit(ship1)
//        console.log('You have been hit!');
//      }
// else {
//      console.log("missed")
//     }
// console.log(ship1)