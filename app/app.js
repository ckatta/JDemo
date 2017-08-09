'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.view1',
    'myApp.view2',
    'myApp.version'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.when('/Dashboard', {
        templateUrl: 'partials/home.html',
        controller: 'StakeHolderMappingCtrl'
    });

    $routeProvider.when('/StakeHolderMapping', {
        templateUrl: 'partials/StakeHolderMapping.html',
        controller: 'StakeHolderMappingCtrl'
    });

    $routeProvider.when('/CrucialQuestions', {
        templateUrl: 'partials/CrucialQuestions.html',
        controller: 'StakeHolderMappingCtrl'
    });

    $routeProvider.when('/SupplyChainMapping', {
        templateUrl: 'partials/SupplyChainMapping.html',
        controller: 'StakeHolderMappingCtrl'
    });

    $routeProvider.when('/GrievanceMechanism', {
        templateUrl: 'partials/GrievanceMechanism.html',
        controller: 'StakeHolderMappingCtrl'
    });

    $routeProvider.when('/REMUNERATIONPRACTICE', {
        templateUrl: 'partials/REMUNERATIONPRACTICE.html',
        controller: 'StakeHolderMappingCtrl'
    });

    $routeProvider.when('/YOUNGWORKERSDATA', {
        templateUrl: 'partials/YOUNGWORKERSDATA.html',
        controller: 'StakeHolderMappingCtrl'
    });

    $routeProvider.when('/SMALLHOLDERPERFORMANCEEVALUATION', {
        templateUrl: 'partials/SMALLHOLDERPERFORMANCEEVALUATION.html',
        controller: 'StakeHolderMappingCtrl'
    });
    $routeProvider.otherwise({redirectTo: '/Dashboard'});
}])
    .controller('StakeHolderMappingCtrl', [function ($scope) {

        var chartData = {
            "title":"Audit Details Month wise",
            "type": "bar",  // Specify your chart type here.
            "series": [  // Insert your series data here.
                {"values": [10, 8, 11, 9, 12, 16]},
                {"values": [2, 4, 6, 4, 4, 6]},
                {"values": [8, 4, 5, 5, 8, 10]},
                {"values": [25, 28, 34, 19, 26, 41]}
            ]
        };
        zingchart.render({ // Render Method[3]
            id: 'chartDiv',
            data: chartData,
            height: 400,
            width: 600
        });

        var chartData2 = {
            "type": "bar",  // Specify your chart type here.
            "series": [  // Insert your series data here.
                {"values": [1284, 329, 214, 80, 15, 1]},
                {"values": [500, 200, 200, 80, 10, 1]},
                {"values": [250, 179, 185, 73, 4, 1]}
            ]
        };
        zingchart.render({ // Render Method[3]
            id: 'chartDiv2',
            data: chartData2,
            height: 400,
            width: 600
        });


        var myConfig1 = {
            "type": "pie",
            "title": {
                "text": "Importing Companies"
            },
            "series": [
                {"values": [250]},
                {"values": [250]}
            ]
        };

        zingchart.render({
            id: 'myChart1',
            data: myConfig1,
            height: 200,
            width: "100%"
        });

        var myConfig2 = {
            "type": "pie",
            "title": {
                "text": "Brands"
            },
            "series": [
                {"values": [179]},
                {"values": [21]}
            ]
        };

        zingchart.render({
            id: 'myChart2',
            data: myConfig2,
            height: 200,
            width: "100%"
        });

        var myConfig3 = {
            "type": "pie",
            "title": {
                "text": "Retailers"
            },
            "series": [
                {"values": [185]},
                {"values": [15]}
            ]
        };

        zingchart.render({
            id: 'myChart3',
            data: myConfig3,
            height: 200,
            width: "100%"
        });

        var myConfig4 = {
            "type": "pie",
            "title": {
                "text": "Holding"
            },
            "series": [
                {"values": [73]},
                {"values": [7]}
            ]
        };

        zingchart.render({
            id: 'myChart4',
            data: myConfig4,
            height: 200,
            width: "100%"
        });

        var myConfig5 = {
            "type": "pie",
            "title": {
                "text": "Association"
            },
            "series": [
                {"values": [6]},
                {"values": [4]}
            ]
        };

        zingchart.render({
            id: 'myChart5',
            data: myConfig5,
            height: 200,
            width: "100%"
        });

        var myConfig6 = {
            "type": "pie",
            "title": {
                "text": "Supermarket"
            },
            "series": [
                {"values": [1]},
                {"values": [0]}
            ]
        };

        zingchart.render({
            id: 'myChart6',
            data: myConfig6,
            height: 200,
            width: "100%"
        });


        var myConfig7 =
            {
                "type":"hbar",
                "title":{
                    "text":"Top & Bottom 5 products this month",
                    "text-align":"center",
                    "font-family":"arial",
                    "font-color":"#5b5b5b",
                    "font-size":"18px",
                    "padding":"25px",
                    "background-color":"none",
                    "adjustLayout":true
                },
                "plotarea":{
                    "adjustLayout":true,
                    "margin":'dynamic'
                },
                "plot":{
                    "valueBox":{
                        "fontColor":"#000"
                    },
                    "animation": {
                        "effect": 2,
                        "method": 3,
                        "speed": 800,
                        "delay": 550
                    },
                    "stacked":true
                },
                "scale-x":{
                    "offset-end":"55%",
                    "offset-x":"50%",
                    "alpha":1,
                    "tick":{
                        "alpha":0
                    },
                    "label":{
                        "text":"Bottom 5 products by sales",
                        "font-size": 14
                    }
                },
                "scale-x-2":{
                    "offset-start":"55%",
                    "alpha":0,
                    "tick":{
                        "alpha":0
                    },
                    "label":{
                        "text":"Top 5 products by sales",
                        "font-size": 14
                    },
                },
                "scale-y":{ },
                "scale-y-2":{ },
                "series":[
                    {
                        "values":[-5,-4,-6,-7,-1],
                        "decimals":2,
                        "stack":1,
                        "scales":"scale-x,scale-y",
                        'data-custom-token': ['Videocon 1.5 Ton Star Split', 'Samsung Galaxy s6 Edge','Voltas 155CY 1.2 Ton 5 Star Air SPlit Conditioner','Google Nexus', 'Gitanjali 100 Gm 24Kt 995 Bis Hallmarked Purity Plain Gold Bar'],
                        "valueBox":{
                            "text":'%data-custom-token',
                            "placement":'bottom'
                        },
                        "background-color":"#fd625e"
                    },
                    {
                        "values":[0,0,0,0,0],
                        "decimals":2,
                        "stack":1,
                        "scales":"scale-x,scale-y",
                        'data-custom-token':[-5,-4,-6,-7,-1],
                        "valueBox":{
                            "text":'%data-custom-token',
                            "placement":'bottom',
                        },
                        "background-color":"#fd625e"
                    },
                    {
                        "values":[0,0,0,0,0],
                        "decimals":2,
                        "stack":2,
                        'data-custom-token':[5,4,6,7,1],
                        "scales":"scale-x-2,scale-y",
                        "valueBox":{
                            "text":'%data-custom-token',
                            "placement":'bottom-in'
                        },
                        "background-color":"#68d7c6"

                    },
                    {
                        "values":[5,4,6,7,1],
                        "decimals":2,
                        "stack":2,
                        "scales":"scale-x-2,scale-y",
                        'data-custom-token':['Insect And Mosquito Killer with NIght Lamp','Lenovo K3 Note 16GB', 'LED Projection Clock', 'Nokia 225 (black)', 'Nokia 225'],
                        "valueBox":{
                            "text":'%data-custom-token',
                            "placement":'bottom-out'
                        },
                        "background-color":"#68d7c6"
                    },
                ]
            };

        zingchart.render({
            id : 'myChart7',
            data : myConfig7,
            height: '100%',
            width: '100%'
        });

        var myConfig8 ={
            type: "area",
            stacked: true,
            title:{
                text: "Monthly Audit Closes",
                fontColor: "#424242",
                adjustLayout: true,
                marginTop: 15
            },
            subtitle:{
                text: "In Numbers",
                fontColor: "#616161",
                adjustLayout: true,
                marginTop: 45
            },
            plot:{
                aspect: "spline",
                alphaArea: 0.6
            },
            plotarea:{
                margin: "dynamic"
            },
            tooltip:{visible:false},
            scaleY:{
                short:true,
                shortUnit:'x',
                lineColor: "#AAA5A5",
                tick:{
                    lineColor: "#AAA5A5"
                },
                item:{
                    fontColor: "#616161",
                    paddingRight: 5
                },
                guide:{
                    lineStyle: "dotted",
                    lineColor: "#AAA5A5"
                },
                label:{
                    text: "Quantity",
                    fontColor: "#616161"
                }
            },
            scaleX:{
                lineColor: "#AAA5A5",
                labels:["Jan","Feb","Mar","Apr","May","Jun"],
                tick:{
                    lineColor: "#AAA5A5"
                },
                item:{
                    fontColor: "#616161",
                    paddingTop: 5
                },
                label:{
                    text: "2017",
                    fontColor: "#616161"
                }
            },
            crosshairX:{
                lineColor: "#AAA5A5",
                plotLabel:{
                    backgroundColor:"#EBEBEC",
                    borderColor: "#AAA5A5",
                    borderWidth: 2,
                    borderRadius: 2,
                    thousandsSeparator:',',
                    fontColor:'#616161'
                },
                scaleLabel:{
                    backgroundColor: "#EBEBEC",
                    borderColor: "#AAA5A5",
                    fontColor: "#424242"
                }
            },
            series : [
                {
                    values : [10, 8, 11, 9, 12, 16],
                    text: "Number of Audits Conducted",
                    backgroundColor: "#4CAF50",
                    lineColor: "#4CAF50",
                    marker:{
                        backgroundColor: "#4CAF50",
                        borderColor: "#4CAF50"

                    }
                },
                {
                    values : [2, 4, 6, 4, 4, 6],
                    text: "Open",
                    backgroundColor: "#E53935",
                    lineColor: "#E53935",
                    marker:{
                        backgroundColor: "#E53935",
                        borderColor: "#E53935"

                    }
                },
                {
                    values : [8, 4, 5, 5, 8, 10],
                    text: "Close",
                    backgroundColor: "#00BCD4",
                    lineColor: "#00BCD4",
                    marker:{
                        backgroundColor: "#00BCD4",
                        borderColor: "#00BCD4"

                    }
                }
            ]
        };

        zingchart.render({
            id : 'myChart8',
            data : myConfig8,
            height: '500',
            width: '725'
        });

        var myConfig9 ={
            type: "area",
            stacked: true,
            title:{
                text: "Area Audits",
                fontColor: "#424242",
                adjustLayout: true,
                marginTop: 15
            },
            subtitle:{
                text: "In Numbers",
                fontColor: "#616161",
                adjustLayout: true,
                marginTop: 45
            },
            plot:{
                aspect: "spline",
                alphaArea: 0.6
            },
            plotarea:{
                margin: "dynamic"
            },
            tooltip:{visible:false},
            scaleY:{
                short:true,
                shortUnit:'x',
                lineColor: "#AAA5A5",
                tick:{
                    lineColor: "#AAA5A5"
                },
                item:{
                    fontColor: "#616161",
                    paddingRight: 5
                },
                guide:{
                    lineStyle: "dotted",
                    lineColor: "#AAA5A5"
                },
                label:{
                    text: "Quantity",
                    fontColor: "#616161"
                }
            },
            scaleX:{
                lineColor: "#AAA5A5",
                labels:["Importing Companies","Brands","Retailers","Holding","Association","Supermarket"],
                tick:{
                    lineColor: "#AAA5A5"
                },
                item:{
                    fontColor: "#616161",
                    paddingTop: 5
                },
                label:{
                    text: "Area",
                    fontColor: "#616161"
                }
            },
            crosshairX:{
                lineColor: "#AAA5A5",
                plotLabel:{
                    backgroundColor:"#EBEBEC",
                    borderColor: "#AAA5A5",
                    borderWidth: 2,
                    borderRadius: 2,
                    thousandsSeparator:',',
                    fontColor:'#616161'
                },
                scaleLabel:{
                    backgroundColor: "#EBEBEC",
                    borderColor: "#AAA5A5",
                    fontColor: "#424242"
                }
            },
            series : [
                {
                    values : [1284, 329, 214, 80, 15, 1],
                    text: "FTA Certified Producers",
                    backgroundColor: "#4CAF50",
                    lineColor: "#4CAF50",
                    marker:{
                        backgroundColor: "#4CAF50",
                        borderColor: "#4CAF50"

                    }
                },
                {
                    values : [500, 200, 200, 80, 10, 1],
                    text: "Audits Faced",
                    backgroundColor: "#E53935",
                    lineColor: "#E53935",
                    marker:{
                        backgroundColor: "#E53935",
                        borderColor: "#E53935"

                    }
                },
                {
                    values : [250, 179, 185, 73, 4, 1],
                    text: "Audits Passed",
                    backgroundColor: "#00BCD4",
                    lineColor: "#00BCD4",
                    marker:{
                        backgroundColor: "#00BCD4",
                        borderColor: "#00BCD4"

                    }
                }
            ]
        };

        zingchart.render({
            id : 'myChart9',
            data : myConfig9,
            height: '500',
            width: '725'
        });

        var ele1 = document.getElementById("chartDiv");
        var ele2 = document.getElementById("chartDiv2");
        var ele3 = document.getElementById("myChart1");
        var ele4 = document.getElementById("myChart2");
        var ele5 = document.getElementById("myChart3");
        var ele6 = document.getElementById("myChart4");
        var ele7 = document.getElementById("myChart5");
        var ele8 = document.getElementById("myChart6");
        var ele9 = document.getElementById("myChart7");
        var ele10 = document.getElementById("myChart9");
        var ele11 = document.getElementById("myChart8");
        ele1.style.display = '';
        ele2.style.display = 'none';
        ele3.style.display = 'none';
        ele4.style.display = 'none';
        ele5.style.display = 'none';
        ele6.style.display = 'none';
        ele7.style.display = 'none';
        ele8.style.display = 'none';
        ele10.style.display = 'none';
// ele9.style.display = '';
        ele11.style.display = '';


    }]);
