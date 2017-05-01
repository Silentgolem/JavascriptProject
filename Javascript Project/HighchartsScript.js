/// <reference path="path\jquery-3.2.0.js" />
$(document).ready(function () {
    var data = [
                {
                    "name": "East Antrim",
                    "path": "M802,-698,810,-682,825,-685,837,-683,841,-629,829,-632,819,-614L844,-614L868,-638L877,-638L882,-641,900,-646,918,-668,919,-695,898,-728,889,-724,888,-713,909,-689,906,-685,879,-710L879,-746L864,-756,838,-801,819,-821,832,-855,817,-866,814,-858,805,-855,778,-818,795,-794L801,-794L795,-770,796,-740,816,-732,823,-718,804,-719,793,-715z",
                    "data": "DUP David Hilditch<br/>Alliance Stewart Dickson<br/>UUP Roy Beggs<br/>DUP Gordon Lyons<br/>UUP John Stewart"
                },
                {
                    "name": "East Belfast",
                    "path": "M871,-572,853,-542L840,-542L829,-571,846,-586z",
                    "data": "Alliance Naomi Long<br/>Alliance Chris Lyttle<br/>UUP Andy Allen<br/>DUP Joanne Bunting<br/>DUP Robin Newton"
                },
                {
                    "name": "East Derry",
                    "path": "M627,-982,590,-978,560,-969,549,-950,485,-968,478,-975,473,-969,458,-921,448,-914L448,-906L437,-891,409,-893,392,-875,409,-843,418,-848,413,-825,418,-822,419,-804,440,-788,430,-740,463,-741,475,-729,493,-753,504,-744,519,-759,536,-774,528,-780,546,-797,563,-789,576,-804,620,-806,611,-827,602,-842,611,-867,597,-896,611,-905,614,-935L630,-935z",
                    "data": "Independent Claire Sugden<br/>DUP Maurice Bradley<br/>DUP George Robinson<br/>Sinn Fein Caoimhe Archibald<br/>SDLP John Dallat"
                },
                {
                    "name": "Fermanagh And South Tyrone",
                    "path": "M187,-619L187,-619L171,-616,151,-610,138,-607,124,-586,114,-589,96,-590,66,-601,48,-587,51,-577,37,-568,27,-572,3,-556,0,-541,15,-518,28,-506,37,-485,46,-482,64,-453,90,-436,99,-405,97,-390,117,-376,135,-387,165,-369,214,-313,219,-321,229,-315,260,-340,266,-337,275,-304,299,-301,293,-321,304,-337,305,-312,322,-310,325,-346,341,-367,365,-372,347,-417,352,-424,353,-433,385,-453,409,-484,439,-472,470,-417,488,-432,504,-468,533,-459,537,-488,555,-497L584,-497L576,-523,542,-541,536,-533,518,-550L509,-550L496,-538,479,-542,458,-533,418,-548,413,-533,395,-536,391,-526,340,-508,332,-514,326,-505,292,-506,284,-517L271,-517L265,-509,232,-502,223,-515,201,-527,228,-580,243,-584,229,-595,199,-602z",
                    "data": "DUP Arlene Foster<br/>Sinn Fein Michele Gildernew<br/>Sinn Fein Jemma Dolan<br/>UUP Rosemary Barton<br/>Sinn Fein Sean Lynch"
                },
                {
                    "name": "Foyle",
                    "path": "M398,-893,385,-900,379,-902,365,-888,347,-893,332,-894,328,-891,317,-882,310,-878,299,-851,293,-833,326,-804,340,-816,355,-803,344,-792,373,-788,376,-768,421,-734,430,-740L430,-740L433,-758,440,-788,419,-804,418,-822,413,-825,418,-848,409,-843,392,-875,409,-893z",
                    "data": "Sinn Fein Elisha McCallion<br/>Sinn Fein Raymond McCartney<br/>SDLP Colum Eastwood<br/>SDLP Mark Durkan<br/>DUP Gary Middleton"
                },
                {
                    "name": "Lagan Valley",
                    "path": "M843,-481L831,-481L811,-430L801,-430L784,-424,781,-405,766,-399,740,-409,735,-424,719,-415,699,-423,693,-430,704,-444L704,-454L714,-463L714,-477L702,-496,705,-515,689,-524,695,-529,692,-557L675,-557L696,-574,711,-566,743,-577,765,-589,780,-577,771,-557,784,-539,792,-545L796,-545L804,-527,825,-524z",
                    "data": "DUP Paul Givan<br/>UUP Robbie Butler<br/>Alliance Trevor Lunn<br/>DUP Edwin Poots<br/>SDLP Pat Catney"
                },
                {
                    "name": "Mid Ulster",
                    "path": "M418,-548,458,-533,479,-542,496,-538,509,-550L518,-550L536,-533,542,-541,576,-523,585,-545,578,-551,582,-583,612,-587,621,-611,615,-625,609,-640,617,-686,635,-680,636,-707,641,-718,620,-806,576,-804,563,-789,546,-797,528,-780,536,-774,504,-744,493,-753,475,-729,461,-725,457,-709,449,-691,452,-686,442,-683,431,-673,437,-665,439,-637,448,-634,439,-629,448,-593,436,-574,440,-556z",
                    "data": "Sinn Fein Michelle O'Neill<br/>DUP Keith Buchannan<br/>Sinn Fein Linda Dillon<br/>Sinn Fein Ian Milne<br/>SDLP Patsy McGlone"
                },
                {
                    "name": "Newry And Armagh",
                    "path": "M584,-497,623,-439L635,-439L647,-444,648,-427,657,-415,651,-361,660,-291,680,-267,662,-262,651,-274,642,-258,627,-241,615,-252,572,-240,566,-250,548,-241,537,-255,545,-268,536,-283L536,-300L554,-318,531,-339,516,-336,494,-351,484,-367L484,-373L466,-399,470,-417,488,-432,504,-468,533,-459,537,-488,555,-497z",
                    "data": "DUP William Irwin<br/>Sinn Fein Cathal Boylan<br/>SDLP Cathal McNulty<br/>Sinn Fein Megan Fearon<br/>Sinn Fein Connor Murphy"
                },
                {
                    "name": "North Antrim",
                    "path": "M787,-960,808,-935L808,-894L801,-885,799,-867,817,-866,814,-858,805,-855,778,-818,795,-794L801,-794L795,-770,796,-740,816,-732,823,-718,804,-719,793,-715,799,-706,802,-698,741,-710,723,-701L711,-701L693,-700,681,-709,672,-697,636,-707,641,-718,620,-806,602,-842,611,-867,597,-896,611,-905,614,-935L630,-935L627,-982,654,-999,668,-985,707,-987,735,-962L751,-962L769,-978z",
                    "data": "Sinn Fein Phillip McGuigan<br/>UUP Robin Swann<br/>TUV Jim Allister<br/>DUP Paul Frew<br/>DUP Mervyn Storey"
                },
                {
                    "name": "North Belfast",
                    "path": "M834,-598C839,-588,835,-583,846,-586L829,-571,813,-569,795,-586,805,-604C817,-593,814,-601,819,-614,850,-615,836,-615,834,-598z",
                    "data": "DUP Paula Bradley<br/>DUP William Humphrey<br/>SDLP Nicola Mallon<br/>Sinn Fein Gerry Kelly<br/>Sinn Fein Caral Ni Chuilin"
                },
                {
                    "name": "North Down",
                    "path": "M970,-593,967,-556,961,-560,955,-556,943,-578,885,-577,882,-580,871,-572,846,-586,859,-599,888,-619,912,-608L943,-608L948,-611,955,-604z",
                    "data": "DUP Alex Easton<br/>UUP Alan Chambers<br/>Alliance Stephen Farry<br/>DUP Gordon Dunne<br/>Green Party Steven Agnew"
                },
                {
                    "name": "South Antrim",
                    "path": "M636,-707,635,-680,632,-670,642,-664,681,-655L681,-661L696,-664,705,-646,689,-635,683,-617,684,-586,698,-583,696,-574,711,-566,722,-571,743,-577,750,-583,765,-589,780,-577,789,-578,795,-586,805,-604,813,-598,819,-614,829,-632,841,-629,837,-683,810,-682,802,-698,741,-710,723,-701,693,-700,681,-709,672,-697z",
                    "data": "Sinn Fein Declan Kearney<br/>UUP Stephen Aiken<br/>Alliance David Ford<br/>DUP Paul Girvan<br/>DUP Pam Cameron"
                },
                {
                    "name": "South Belfast",
                    "path": "M840,-542,825,-524,804,-527,796,-545,813,-569,829,-571z",
                    "data": "Sinn Fein Mairtin O'Muilleoir<br/>SDLP Claire Hanna<br/>Alliance Paula Bradshaw<br/>DUP Christopher Stalford<br/>Green Party Claire Bailey"
                },
                {
                    "name": "South Down",
                    "path": "M843,-481,868,-472,879,-436,886,-432,894,-447,912,-423,948,-396,957,-352,924,-313,912,-322,895,-295,820,-321,796,-316,777,-306,760,-256,680,-267,660,-291,651,-361,683,-367,689,-400,699,-405L699,-423L719,-415,735,-424,740,-409,766,-399,781,-405,784,-424,811,-430,831,-481z",
                    "data": "Sinn Fein Sinead Ennis<br/>Sinn Fein Chris Hazard<br/>SDLP Sinead Bradley<br/>DUP Jim Wells<br/>SDLP Colin McGrath"
                },
                {
                    "name": "Strangford",
                    "path": "M912,-423L912,-423L933,-468,924,-477,928,-493,909,-527,916,-548,940,-530,954,-500,964,-497,960,-457,952,-454,951,-432,961,-423L961,-403L973,-394,982,-417,991,-426,993,-451,999,-459L999,-475L1000,-488,993,-499,990,-524L990,-532L978,-560,967,-556,961,-560,955,-556,943,-578L937,-578L927,-577L885,-577L882,-580,871,-572,858,-551,853,-542L840,-542L825,-524,843,-481,868,-472,879,-436,886,-432,894,-447z",
                    "data": "Alliance Kellie Armstrong<br/>DUP Simon Hamilton<br/>DUP Michelle McIlveen<br/>UUP Mike Nesbitt<br/>DUP Peter Weir"
                },
                {
                    "name": "Upper Bann",
                    "path": "M585,-545,611,-527,615,-535,650,-536,654,-523,674,-529,675,-557L692,-557L695,-529,689,-524,705,-515,702,-496,714,-477L714,-463L704,-454L704,-444L693,-430,699,-423L699,-405L689,-400,683,-367,651,-361,657,-415,648,-427,647,-444,623,-439,584,-497,576,-523z",
                    "data": "DUP Carla Lockhart<br/>DUP Jonathan Buckley<br/>UUP Doug Beattie<br/>Sinn Fein John O'Dowd<br/>SDLP Dolores Kelly"
                },
                {
                    "name": "West Belfast",
                    "path": "M813,-569L813,-569L796,-545,784,-539,771,-557,780,-577,789,-578,795,-586z",
                    "data": "Sinn Fein Oraithi Flynn<br/>PBP Gerry Carroll<br/>Sinn Fein Alex MAskey<br/>Sinn Fein Fra McCann<br/>Sinn Fein Pat Sheehan"
                },
                {
                    "name": "West Tyrone",
                    "path": "M293,-833,281,-810,289,-794,275,-779,272,-755,243,-732,240,-700L234,-700L222,-710,165,-691,139,-712,102,-688,106,-665,162,-631,177,-640,187,-619,199,-602,229,-595,243,-584,228,-580,222,-568,201,-527,223,-515L223,-515L232,-502L232,-502L265,-509,271,-517L284,-517L292,-506,311,-503,326,-505,332,-514,340,-508,371,-520,391,-526,395,-536,413,-533,418,-548,431,-551,440,-556,436,-574,448,-593,439,-629,448,-634,439,-637L439,-637L437,-665,431,-673,442,-683,452,-686,449,-691,457,-709,461,-725,475,-729,463,-741,430,-740,421,-734,376,-768,373,-788,344,-792,355,-803,340,-816,326,-804z",
                    "data": "DUP Thomas Buchannan<br/>Sinn Fein Micheala Boyle<br/>Sinn Fein Barry McElduff<br/>SDLP Daniel McCrossan<br/>Sinn Fein Declan McAleer"
                }
    ];
    var chartData = [{
        "party": "Sinn Fein",
        "seats": 0
    }, {
        "party": "SDLP",
        "seats": 0
    }, {
        "party": "Alliance",
        "seats": 0
    }, {
        "party": "Green Party",
        "seats": 0
    }, {
        "party": "PBP",
        "seats": 0
    }, {
        "party": "Independent",
        "seats": 0
    }, {
        "party": "Other",
        "seats": 0
    }, {
        "party": "TUV",
        "seats": 0
    }, {
        "party": "UUP",
        "seats": 0
    }, {
        "party": "DUP",
        "seats": 0
    }];

    $('#data').html(getData());
    generateMap();
    generateChart();
    function generateMap() {
        $('#container').highcharts('Map', {
            title: { text: "Northern Ireland Assembly Election 2017" },
            series: [
            {
                "name": "Election Results",
                "type": "map",
                "data": data
            }
            ],
            legend: {
                enabled: false
            },
            tooltip: {
                headerFormat: '',
                pointFormat: '<span style="font-size:14px"><b>{series.name} - {point.name}</b></span><br/><span style="font-size:12px">{point.data}</span>',
                positioner: function () {
                    return { x: 0, y: 390 };
                }
            }
        });
    }
    function generateChart() {
        chartData = [{
            "party": "Sinn Fein",
            "colour": "#2f7c06",
            "seats": 0
        }, {
            "party": "SDLP",
            "colour": "#58ff00",
            "seats": 0
        }, {
            "party": "Alliance",
            "colour": "#f2ff00",
            "seats": 0
        }, {
            "party": "Green Party",
            "colour": "#00ff80",
            "seats": 0
        }, {
            "party": "PBP",
            "colour": "#670c8e",
            "seats": 0
        }, {
            "party": "Independent",
            "colour": "#e3e4e5",
            "seats": 0
        }, {
            "party": "Other",
            "colour": "#efc956",
            "seats": 0
        }, {
            "party": "TUV",
            "colour": "#5399e0",
            "seats": 0
        }, {
            "party": "UUP",
            "colour": "#a64dff",
            "seats": 0
        }, {
            "party": "DUP",
            "colour": "#dd1822",
            "seats": 0
        }];
        getChartData();
        var sum = 0;
        for (var x in chartData) {
            sum += chartData[x].seats;
        }
        chartData.push({
            "seats": sum,
            "alpha": 0
        });

        var chart = AmCharts.makeChart("chartdiv", {
            "type": "pie",
            "startAngle": 0,
            "radius": "90%",
            "innerRadius": "50%",
            "dataProvider": chartData,
            "valueField": "seats",
            "titleField": "party",
            "alphaField": "alpha",
            "labelsEnabled": false,
            "pullOutRadius": 0,
            "fontSize": 14,
            "colorField": "colour",
            "pieY": "95%"

        });
    }
    function getData() {
        var input;
        var output = "<table border='1px' contenteditable='true'>";
        for (var i = 0; i < data.length; i++) {
            output += "<tr><th contenteditable='false'>" + data[i].name + "</th>";
            input = data[i].data.split("<br/>");
            for (var j = 0; j < input.length; j++) {
                output += "<th>" + input[j] + "</th>";
            }
            output += "</tr>";
        }
        output += "</table>";
        return output;
    }

    function getChartData() {
        for (var i = 0; i < data.length; i++) {
            var temp = data[i].data.split("<br/>");
            for (var j = 0; j < temp.length; j++) {
                if (temp[j].includes("Sinn Fein")) {
                    chartData[0].seats++;
                }
                else if (temp[j].includes("SDLP")) {
                    chartData[1].seats++;
                }
                else if (temp[j].includes("Alliance")) {
                    chartData[2].seats++;
                }
                else if (temp[j].includes("Green Party")) {
                    chartData[3].seats++;
                }
                else if (temp[j].includes("PBP")) {
                    chartData[4].seats++;
                }
                else if (temp[j].includes("Independent")) {
                    chartData[5].seats++;
                }
                else if (temp[j].includes("TUV")) {
                    chartData[7].seats++;
                }
                else if (temp[j].includes("UUP")) {
                    chartData[8].seats++;
                }
                else if (temp[j].includes("DUP")) {
                    chartData[9].seats++;
                }
                else if (temp[j] !== "") {
                    chartData[6].seats++;
                }
            }
        }
    }
    $('.expand').click(function () {
        $('#contentexpanded').slideToggle('slow');
    });

    $('#save').click(function () {
        var temp = $("#data").html().split("<tr>");
        temp.splice(0, 1);
        for (var i = 0; i < temp.length; i++) {
            var name = "";
            var output = "";
            var tempitems = temp[i].split("<th>");
            name = tempitems[0].substring(tempitems[0].indexOf(">") + 1, tempitems[0].length - 5);
            tempitems.splice(0, 1);
            for (var j = 0; j < tempitems.length; j++) {
                tempitems[j] = tempitems[j].replace("</th>", "<br/>");
                tempitems[j] = tempitems[j].replace("</tr>", "");
                tempitems[j] = tempitems[j].replace("</tbody>", "");
                tempitems[j] = tempitems[j].replace("</table>", "");
                output += tempitems[j];
            }
            temp[i] = output;
            for (var k = 0; k < data.length; k++) {
                if (data[k].name === name) {
                    data[k].data = temp[i];
                }
            }
        }
        $('#contentexpanded').slideToggle('slow');
        $("#container").remove();
        $("body").append("<div id='container'></div>");
        $("#chartdiv").remove();
        $("body").append("<div id='chartdiv'></div>");
        generateMap();
        generateChart();
    });
});