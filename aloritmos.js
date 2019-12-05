
(async function() {
    var hora =new Date;
    var horaE = hora.getHours();
    var minut = hora.getMinutes();
console.log(horaE);

    var timer = setInterval(function(){
        if(6<horaE<20){
        console.log('si esta dentro de la hora');
    
    const bitacora = new planta;
    //definir los datos que se necesitan de api IBM

    bitacora.save();
    console.log(bitacora);
        }       
    },900000)
  })();

  <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0/dist/Chart.min.js"></script>
<div class="jumbotron">
<canvas id="line-chart" width="800" height="450"></canvas></div>



<script>
    new Chart(document.getElementById("line-chart"), {
  type: 'line',
  data: {
    labels: [1,2,3,4,5,6,7,8,9,10,11,12,13],
    datasets: [{ 
        data: [40,45,44,39,42,45,44,45,47,50],
        label: "HUMEDAD",
        borderColor: "#3e95cd",
        fill: false
      }, { 
        data: [22,24,23,20,27,28,29,22,23,27,26],
        label: "TEMPERATURA",
        borderColor: "#8e5ea2",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'World population per region (in millions)'
    }
  }
});

</script>