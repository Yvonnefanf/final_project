    
    // let data = [];
    // {% for data in human["activityData"] %}
        
    // {% endfor %}

    window.onload = function () {
        var barData = {
            datasets : [
                {
                        data : [{% for data in human["activityData"] %} {{data}},{% endfor %}],
                }
            ]
        }
        console.log(barData);
    }

//     console.log("tracedData", data);
//     // construct data
//     const readyToRenderData = data.map(item => {
//       if (item.name === 'weiwei') {
//         return [item.left, item.bottom];
//       }
//     });

//     // construct yvshenmde
//     const readyToRenderDataTwo = data.map(item => {
//       if (item.name === 'yvshenmde') {
//         return [item.left, item.bottom];
//       }
//     });

//     console.log('readyToRenderData', readyToRenderData);

//     var myChart = echarts.init(document.getElementById('renderChart'));

//     var option = {
//         xAxis: {},
//         yAxis: {},
//         dataZoom: [
//             {
//                 type: 'slider',
//                 xAxisIndex: 0,
//                 filterMode: 'empty'
//             },
//             {
//                 type: 'slider',
//                 yAxisIndex: 0,
//                 filterMode: 'empty'
//             },
//             {
//                 type: 'inside',
//                 xAxisIndex: 0,
//                 filterMode: 'empty'
//             },
//             {
//                 type: 'inside',
//                 yAxisIndex: 0,
//                 filterMode: 'empty'
//             }
//         ],
//         series: [{
//             symbolSize: 20,
//             data: readyToRenderData,
//             type: 'scatter'
//         }, {
//           symbolSize: 20,
//           data: readyToRenderDataTwo,
//           type: 'scatter'
//         }]
//     };
  
//    myChart.setOption(option);