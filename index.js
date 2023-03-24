console.clear();
const birth = [];
BIRTH = 0;
DEATH = 0;
document.getElementById('button').onclick = function () {
  clearInterval(world);
};
var world = setInterval(() => {
  console.log('==================================================');
  // console.log('TIME : ' + new Date().getSeconds());
  if (birth.length < 10) {
    birthTime = Math.floor(Math.random() * 5) + 1;
    if (birthTime == 2 || birthTime == 5) {
      BIRTH++;
      //#### CLEAR CONSOLE
      if (BIRTH % 10 === 0) {
        console.clear();
      }
      //#### CLEAR CONSOLE

      birth.push({
        ID: BIRTH,
        LIFE: Math.floor(Math.random() * 100) + 0,
      });
    }
  } else {
    // clearInterval(world);
  }
  birth.map((x, index, a2) => {
    x.LIFE = x.LIFE > 0 ? x.LIFE - 1 : x.LIFE;
    if (x.LIFE == 0) {
      a2.splice(index, 1);
      DEATH++;
    }
    return x;
  });
  console.log(birth[0]);
  console.log(birth[1]);
  console.log(birth[2]);
  console.log(birth[3]);
  console.log(birth[4]);
  console.log(birth[5]);
  console.log(`TOTAL_BIRTH : ${BIRTH}
  TOTAL_DEATH : ${DEATH}`);
  // if(BIRTH==(BIRTH))
  console.log('==================================================');
}, 1000);
