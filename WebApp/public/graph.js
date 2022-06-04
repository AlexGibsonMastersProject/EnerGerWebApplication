let heatingChart = document.getElementById("heating").getContext('2d');
let electricityChart = document.getElementById("electricity").getContext('2d');

let heatlineChart = new Chart(heatingChart, 
    {type:'line', 
    data:{
        labels:['00:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00','13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
        datasets:[{
            label: 'Heat Energy Produced',
            data: [cs0, cs1, cs2, cs3, cs4, cs5, cs6, cs7, cs8, cs9, cs10, cs11, cs12, cs13, cs14, cs15, cs16, cs17, cs18, cs19, cs20, cs21, cs22, cs23],
            tension: 0.4,
            backgroundColor: 'rgba(225, 160, 160, 1)',
            borderColor: 'rgba(225, 160, 160, 1)',
            borderWidth: '3',
        },
            {label: 'Heat Energy Predicted',
            data: [100, 100, 105, 110, 115, 125, 140, 155, 170, 185, 190, 190, 185, 180, 175, 175, 178, 180, 185, 190, 200, 200, 150, 100],
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
        labels:['00:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00','13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
        datasets:[{
            label: 'Electricity Produced',
            data: [wt0, wt1, wt2, wt3, wt4, wt5, wt6, wt7, wt8, wt9, wt10, wt11, wt12, wt13, wt14, wt15, wt16, wt17, wt18, wt19, wt20, wt21, wt22, wt23],
            tension: 0.4,
            backgroundColor: 'rgba(179, 199, 238, 1)',
            borderColor: 'rgba(179, 199, 238, 1)',
            borderWidth: '3',
        },
        {label: 'Electricity Predicted',
            data: [5, 5, 5, 10, 10, 10, 15, 20, 30, 45, 65, 90, 110, 120, 125, 125, 120, 100, 80, 55, 40, 25, 15, 5],
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