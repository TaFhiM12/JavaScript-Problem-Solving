const PingPong = () => {
    let pingpong = [];
    for(let i = 1; i <= 20; i++){
        if(i % 3 === 0){
            pingpong.push('Ping');
        }
        else if(i % 5 === 0){
            pingpong.push('Pong');
        }
        else{
            pingpong.push(i);
        }
    }
    return pingpong;
}

console.log(PingPong());