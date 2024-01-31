
function oraa(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  
  function startTime() {
    let ORA = new Date();
    let ora = ORA.getHours();
    let minuta = ORA.getMinutes();
    let sekonda = ORA.getSeconds();
   
    minuta = oraa(minuta);
    sekonda = oraa(sekonda);
    document.getElementById('ora').innerHTML = ora + ":" + minuta + ":" + sekonda;
    t = setTimeout(function() {
      startTime()
    }, 500);
  }
  startTime();
