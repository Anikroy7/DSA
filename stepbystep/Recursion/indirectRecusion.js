let totalApple= 0

const buyApple = (money) => {
  if (money >= 0) {
    console.log("I have", money, 'taka', 'totalApple','and', totalApple);
    byMore(money) 
  }else{
    console.log('I have not enough money for buy apple');
  }
};

const byMore =(money)=>{
    money= money-10
    totalApple++
    buyApple(money)
}


console.log(byMore(100));