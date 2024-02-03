function Random() {
    let x = Math.random()*100;
  return <div style={{'background-color':'pink'}}> random number: {Math.round(x)}</div>;
}


export default Random;
