			 var ctx = document.getElementById("grafik-kategori").getContext('2d');
        var myChart = new Chart(ctx, {
       "type": "bar",
    "data": {
        "labels": [
            "Public Speaking",
            "Programming",
            "Analytic",
            "Organization"
        ],
        "datasets": [{
            "label": "Self Ability",
            "data": [75, 75, 80, 81],
            "fill": false,

            "backgroundColor": [
                "rgba(255, 99, 132, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 205, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)"
            ],
            "borderColor": [
                "rgb(255, 99, 132)",
                "rgb(255, 159, 64)",
                "rgb(255, 205, 86)",
                "rgb(75, 192, 192)"
            ],
            "borderWidth": 1
        }]
    },
    "options": {
    	"legend":{
    		"labels":{
    			boxWidth:0,
    			fontSize:20,
    			fontColor:"white"



    		}
    	},
        "scales": {
            "yAxes": [{
                "ticks": {
                    "beginAtZero": true
                }
            }]
        }
    }

});