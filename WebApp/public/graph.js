let heatingChart = document.getElementById("heating").getContext('2d');
let electricityChart = document.getElementById("electricity").getContext('2d');

let heatlineChart = new Chart(heatingChart, 
    {type:'line', 
    data:{
        labels:['12:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00'],
        datasets:[{
            label: 'Heat Energy Used',
            data: [10, 13, 15, 29, 49, 60, 70, 87, 99, 89, 89, 67],
            tension: 0.4,
            backgroundColor: 'rgba(225, 160, 160, 1)',
            borderColor: 'rgba(225, 160, 160, 1)',
            borderWidth: '3',
        },
            {label: 'Heat Energy Predicted',
            data: [5, 7, 7, 15, 18, 30, 40, 45, 50, 50, 30, 10],
            tension: 0.4,
            backgroundColor: 'rgba(151, 151, 151, 1)',
            borderColor: 'rgba(151, 151, 151, 1)',
            borderWidth: '3',
            }
        ]
    }, 
    options: {
        scales: {
            x: {
              grid: {
                display: false
              }
            },
            y: {
              grid: {
                display: false
              }
            }
          }
    }
}

)

let electricitylineChart = new Chart(electricityChart, 
    {type:'line', 
    data:{
        labels:['12:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00'],
        datasets:[{
            label: 'Electricity Used',
            data: [0, 14, 30, 50, 60, 90, 100, 120, 139, 167, 169, 179],
            tension: 0.4,
            backgroundColor: 'rgba(179, 199, 238, 1)',
            borderColor: 'rgba(179, 199, 238, 1)',
            borderWidth: '3',
        },
        {label: 'Electricity Predicted',
            data: [5, 7, 7, 15, 18, 30, 40, 45, 50, 50, 30, 10],
            tension: 0.4,
            backgroundColor: 'rgba(151, 151, 151, 1)',
            borderColor: 'rgba(151, 151, 151, 1)',
            borderWidth: '3',
            }
        ]
    }, 
    options: {
        scales: {
            x: {
              grid: {
                display: false
              }
            },
            y: {
              grid: {
                display: false
              }
            }
          }
    }
})