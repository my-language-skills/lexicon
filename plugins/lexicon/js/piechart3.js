<!DOCTYPE HTML>
<html>
<head>
  <script type="text/javascript">
  window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer",
    {
      theme: "theme2",
      title:{
        text: "Gaming Consoles Sold in 2012"
      },
      legend:{
        verticalAlign: "bottom",
        horizontalAlign: "center"
      },
      data: [
      {       
       type: "pie",
       showInLegend: true,
       dataPoints: [
       {  y: 4181563, legendText:"PS 3", indexLabel: "PlayStation 3" },
       {  y: 2175498, legendText:"Wii", indexLabel: "Wii" },
       {  y: 3125844, legendText:"360", indexLabel: "Xbox 360" },
       {  y: 1176121, legendText:"DS" , indexLabel: "Nintendo DS"},
       {  y: 1727161, legendText:"PSP", indexLabel: "PSP" },
       {  y: 4303364, legendText:"3DS" , indexLabel: "Nintendo 3DS"},
       {  y: 1717786, legendText:"Vita" , indexLabel: "PS Vita"}
       ]
     }
     ]
   });

    chart.render();
  }
  </script>
  <script type="text/javascript" src="/assets/script/canvasjs.min.js"></script>
  <body>
    <div id="chartContainer" style="height: 300px; width: 100%;">
    </div>
 </body>
 </html>