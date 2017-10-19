var myTeam = [{ name:'Lebron',
                atk:98,
                threept:89,
                def:98,
                percent:.50
            },
              {name:'Kevin',
              atk:99,
              threept:95,
              def:92,
              percent:.46
            },
              {name:'Harden',
              atk:95,
              threept:94,
              def:80,
              percent:.43
            },
              {name:'Westbrook',
              atk:94,
              threept:85,
              def:90,
              percent:.40
            },
              {name:'Curry',
              atk:98,
              threept:99,
              def:88,
              percent:.45
            }
          ];

var myTeamStats1 = [myTeam[0].name,0];
var myTeamStats2 = [myTeam[1].name,0];
var myTeamStats3 = [myTeam[2].name,0];
var myTeamStats4 = [myTeam[3].name,0];
var myTeamStats5 = [myTeam[4].name,0];

var oppoTeam = [{ name:'Lebron',
                  atk:98,
                  threept:89,
                  def:98,
                  percent:.50
              },
                {name:'Kevin',
                atk:99,
                threept:95,
                def:92,
                percent:.46
              },
                {name:'Harden',
                atk:95,
                threept:94,
                def:80,
                percent:.43
              },
                {name:'Westbrook',
                atk:94,
                threept:85,
                def:90,
                percent:.40
              },
                {name:'Curry',
                atk:98,
                threept:99,
                def:88,
                percent:.45
              }
            ];

var oppoTeamStats1 = [oppoTeam[0].name,0];
var oppoTeamStats2 = [oppoTeam[1].name,0];
var oppoTeamStats3 = [oppoTeam[2].name,0];
var oppoTeamStats4 = [oppoTeam[3].name,0];
var oppoTeamStats5 = [oppoTeam[4].name,0];

var atkv1 = (myTeam[0].atk * myTeam[0].percent)/100
var atkv2 = (myTeam[1].atk * myTeam[1].percent)/100
var atkv3 = (myTeam[2].atk * myTeam[2].percent)/100
var atkv4 = (myTeam[3].atk * myTeam[3].percent)/100
var atkv5 = (myTeam[4].atk * myTeam[4].percent)/100

var thv1 = (myTeam[0].threept * myTeam[0].percent)/100
var thv2 = (myTeam[1].threept * myTeam[1].percent)/100
var thv3 = (myTeam[2].threept * myTeam[2].percent)/100
var thv4 = (myTeam[3].threept * myTeam[3].percent)/100
var thv5 = (myTeam[4].threept * myTeam[4].percent)/100

var atkv6 = (oppoTeam[0].atk * oppoTeam[0].percent)/100
var atkv7 = (oppoTeam[1].atk * oppoTeam[1].percent)/100
var atkv8 = (oppoTeam[2].atk * oppoTeam[2].percent)/100
var atkv9 = (oppoTeam[3].atk * oppoTeam[3].percent)/100
var atkv10 = (oppoTeam[4].atk * oppoTeam[4].percent)/100

var thv6 = (oppoTeam[0].threept * oppoTeam[0].percent)/100
var thv7 = (oppoTeam[1].threept * oppoTeam[1].percent)/100
var thv8 = (oppoTeam[2].threept * oppoTeam[2].percent)/100
var thv9 = (oppoTeam[3].threept * oppoTeam[3].percent)/100
var thv10 = (oppoTeam[4].threept * oppoTeam[4].percent)/100



$(document).ready(function() {

  countdown(1);

  $('.mtButton').on('click', function(){
    $('.oppoteambox').css('visibility','hidden')
    $('.myteambox').css('visibility','visible')
  });

  $('.otButton').on('click', function(){
    $('.myteambox').css('visibility','hidden')
    $('.oppoteambox').css('visibility','visible')
  });
});

function countdown(minutes) {
    var seconds = 60;
    var mins = minutes;
    var myScore = 0;
    var oppoScore =0;
    var ball = 0;

    function tick() {
        var counter = $(".timer");
        var current_minutes = mins-1
        seconds--;
        counter.html('');
        counter.prepend('<h1>'+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+'</h1>');
        if( seconds > 0 ) {
          setTimeout(tick, 1000);
          $('.score').html('');
          var ran = Math.round(Math.random() *10);


          if (ball == 0) {
            if (ran == 0 || ran == 1) {
              if (Math.round(Math.random() *10) > 5) {
                if ((Math.round(Math.random() *10) * thv1) >=2.5) {
                  myTeamStats1[1]+=3;
                  myScore+=3;
                  $('.plays').prepend('<h6 class ="myteamline">'+myTeam[0].name+' made the three point shot! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
                else {
                    $('.plays').prepend('<h6 class ="myteamline">'+myTeam[0].name+' missed! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
              }
              else {
                if ((Math.round(Math.random() *10) * atkv1) >= 2.5) {
                myTeamStats1[1]+=2;
                myScore+=2;
                $('.plays').prepend('<h6 class ="myteamline">'+myTeam[0].name+' made the shot! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
                else {
                    $('.plays').prepend('<h6 class ="myteamline">'+myTeam[0].name+' missed! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
              }
            }
            else if (ran == 2 || ran == 3) {
              if (Math.round(Math.random() *10) > 5) {
                if ((Math.round(Math.random() *10) * thv2) >=2.5) {
                  myTeamStats2[1]+=3;
                  myScore+=3;
                  $('.plays').prepend('<h6 class ="myteamline">'+myTeam[1].name+' made the three point shot! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
                else {
                    $('.plays').prepend('<h6 class ="myteamline">'+myTeam[1].name+' missed! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
              }
              else {
                if ((Math.round(Math.random() *10) * atkv2) >= 2.5) {
                myTeamStats2[1]+=2;
                myScore+=2;
                $('.plays').prepend('<h6 class ="myteamline">'+myTeam[1].name+' made the shot! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
                else {
                    $('.plays').prepend('<h6 class ="myteamline">'+myTeam[1].name+' missed! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
              }
            }

            else if (ran == 4 || ran == 5) {
              if (Math.round(Math.random() *10) > 5) {
                if ((Math.round(Math.random() *10) * thv3) >=2.5) {
                  myTeamStats3[1]+=3;
                  myScore+=3;
                  $('.plays').prepend('<h6 class ="myteamline">'+myTeam[2].name+' made the three point shot! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
                else {
                    $('.plays').prepend('<h6 class ="myteamline">'+myTeam[2].name+' missed! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
              }
              else {
                if ((Math.round(Math.random() *10) * atkv3) >= 2.5) {
                myTeamStats3[1]+=2;
                myScore+=2;
                $('.plays').prepend('<h6 class ="myteamline">'+myTeam[2].name+' made the shot! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
                else {
                    $('.plays').prepend('<h6 class ="myteamline">'+myTeam[2].name+' missed! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
              }
            }

            else if (ran == 6 || ran == 7) {
              if (Math.round(Math.random() *10) > 5) {
                if ((Math.round(Math.random() *10) * thv4) >=2.5) {
                  myTeamStats4[1]+=3;
                  myScore+=3;
                  $('.plays').prepend('<h6 class ="myteamline">'+myTeam[3].name+' made the three point shot! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
                else {
                    $('.plays').prepend('<h6 class ="myteamline">'+myTeam[3].name+' missed! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
              }
              else {
                if ((Math.round(Math.random() *10) * atkv4) >= 2.5) {
                myTeamStats4[1]+=2;
                myScore+=2;
                $('.plays').prepend('<h6 class ="myteamline">'+myTeam[3].name+' made the shot! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
                else {
                    $('.plays').prepend('<h6 class ="myteamline">'+myTeam[3].name+' missed! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
              }
            }

            else if (ran == 8 || ran == 9) {
              if (Math.round(Math.random() *10) > 5) {
                if ((Math.round(Math.random() *10) * thv5) >=2.5) {
                  myTeamStats5[1]+=3;
                  myScore+=3;
                  $('.plays').prepend('<h6 class ="myteamline">'+myTeam[4].name+' made the three point shot! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
                else {
                    $('.plays').prepend('<h6 class ="myteamline">'+myTeam[4].name+' missed! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
              }
              else {
                if ((Math.round(Math.random() *10) * atkv5) >= 2.5) {
                myTeamStats5[1]+=2;
                myScore+=2;
                $('.plays').prepend('<h6 class ="myteamline">'+myTeam[4].name+' made the shot! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
                else {
                    $('.plays').prepend('<h6 class ="myteamline">'+myTeam[4].name+' missed! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
              }
            }

            else {
              $('.plays').prepend('<h6 class ="myteamline"> myteam turnover! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
            }
            $('.stats1').html('');
            $('.stats1').prepend('<h3>'+ myTeamStats1[0] + ' : ' + myTeamStats1[1] +'</h3>');
            $('.stats1').prepend('<h3>'+ myTeamStats2[0] + ' : ' + myTeamStats2[1] +'</h3>');
            $('.stats1').prepend('<h3>'+ myTeamStats3[0] + ' : ' + myTeamStats3[1] +'</h3>');
            $('.stats1').prepend('<h3>'+ myTeamStats4[0] + ' : ' + myTeamStats4[1] +'</h3>');
            $('.stats1').prepend('<h3>'+ myTeamStats5[0] + ' : ' + myTeamStats5[1] +'</h3>');
            $('.score').prepend("<span class = 'boxScore'>"+myScore+'</span>' + ' : ' + "<span class = 'boxScore'>"+oppoScore+'</span>');

            ball = 1;
          }
          else {
            if (ran == 0 || ran == 1) {
              if (Math.round(Math.random() *10) > 5) {
                if ((Math.round(Math.random() *10) * thv6) >=2.5) {
                  oppoTeamStats1[1]+=3;
                  oppoScore+=3;
                  $('.plays').prepend('<h6 class ="oppoteamline">'+oppoTeam[0].name+' made the three point shot! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
                else {
                    $('.plays').prepend('<h6 class ="oppoteamline">'+oppoTeam[0].name+' missed! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
              }
              else {
                if ((Math.round(Math.random() *10) * atkv6) >= 2.5) {
                oppoTeamStats1[1]+=2;
                oppoScore+=2;
                $('.plays').prepend('<h6 class ="oppoteamline">'+oppoTeam[0].name+' made the shot! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
                else {
                    $('.plays').prepend('<h6 class ="oppoteamline">'+oppoTeam[0].name+' missed! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
              }
            }
            else if (ran == 2 || ran == 3) {
              if (Math.round(Math.random() *10) > 5) {
                if ((Math.round(Math.random() *10) * thv7) >=2.5) {
                  oppoTeamStats2[1]+=3;
                  oppoScore+=3;
                  $('.plays').prepend('<h6 class ="oppoteamline">'+oppoTeam[1].name+' made the three point shot! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
                else {
                    $('.plays').prepend('<h6 class ="oppoteamline">'+oppoTeam[1].name+' missed! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
              }
              else {
                if ((Math.round(Math.random() *10) * atkv7) >= 2.5) {
                oppoTeamStats2[1]+=2;
                oppoScore+=2;
                $('.plays').prepend('<h6 class ="oppoteamline">'+oppoTeam[1].name+' made the shot! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
                else {
                    $('.plays').prepend('<h6 class ="oppoteamline">'+oppoTeam[1].name+' missed! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
              }
            }
            else if (ran == 4 || ran == 5) {
              if (Math.round(Math.random() *10) > 5) {
                if ((Math.round(Math.random() *10) * thv8) >=2.5) {
                  oppoTeamStats3[1]+=3;
                  oppoScore+=3;
                  $('.plays').prepend('<h6 class ="oppoteamline">'+oppoTeam[2].name+' made the three point shot! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
                else {
                    $('.plays').prepend('<h6 class ="oppoteamline">'+oppoTeam[2].name+' missed! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
              }
              else {
                if ((Math.round(Math.random() *10) * atkv8) >= 2.5) {
                oppoTeamStats3[1]+=2;
                oppoScore+=2;
                $('.plays').prepend('<h6 class ="oppoteamline">'+oppoTeam[2].name+' made the shot! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
                else {
                    $('.plays').prepend('<h6 class ="oppoteamline">'+oppoTeam[2].name+' missed! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
              }
            }
            else if (ran == 6 || ran == 7) {
              if (Math.round(Math.random() *10) > 5) {
                if ((Math.round(Math.random() *10) * thv9) >=2.5) {
                  oppoTeamStats4[1]+=3;
                  oppoScore+=3;
                  $('.plays').prepend('<h6 class ="oppoteamline">'+oppoTeam[3].name+' made the three point shot! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
                else {
                    $('.plays').prepend('<h6 class ="oppoteamline">'+oppoTeam[3].name+' missed! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
              }
              else {
                if ((Math.round(Math.random() *10) * atkv9) >= 2.5) {
                oppoTeamStats4[1]+=2;
                oppoScore+=2;
                $('.plays').prepend('<h6 class ="oppoteamline">'+oppoTeam[3].name+' made the shot! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
                else {
                    $('.plays').prepend('<h6 class ="oppoteamline">'+oppoTeam[3].name+' missed! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
              }
            }
            else if (ran == 8 || ran == 9) {
              if (Math.round(Math.random() *10) > 5) {
                if ((Math.round(Math.random() *10) * thv10) >=2.5) {
                  oppoTeamStats5[1]+=3;
                  oppoScore+=3;
                  $('.plays').prepend('<h6 class ="oppoteamline">'+oppoTeam[4].name+' made the three point shot! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
                else {
                    $('.plays').prepend('<h6 class ="oppoteamline">'+oppoTeam[4].name+' missed! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
              }
              else {
                if ((Math.round(Math.random() *10) * atkv10) >= 2.5) {
                oppoTeamStats5[1]+=2;
                oppoScore+=2;
                $('.plays').prepend('<h6 class ="oppoteamline">'+oppoTeam[4].name+' made the shot! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
                else {
                    $('.plays').prepend('<h6 class ="oppoteamline">'+oppoTeam[4].name+' missed! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
              }
            }
            else {
              $('.plays').prepend('<h6 class ="oppoteamline"> oppoteam turnover! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
            }
            $('.stats2').html('');
            $('.stats2').prepend('<h3>'+ oppoTeamStats1[0] + ' : ' + oppoTeamStats1[1] +'</h3>');
            $('.stats2').prepend('<h3>'+ oppoTeamStats2[0] + ' : ' + oppoTeamStats2[1] +'</h3>');
            $('.stats2').prepend('<h3>'+ oppoTeamStats3[0] + ' : ' + oppoTeamStats3[1] +'</h3>');
            $('.stats2').prepend('<h3>'+ oppoTeamStats4[0] + ' : ' + oppoTeamStats4[1] +'</h3>');
            $('.stats2').prepend('<h3>'+ oppoTeamStats5[0] + ' : ' + oppoTeamStats5[1] +'</h3>');
            $('.score').prepend("<span class = 'boxScore'>"+myScore+'</span>' + ' : ' + "<span class = 'boxScore'>"+oppoScore+'</span>');
            ball =0;
          }
        }


        else {
            if(mins > 1){
                countdown(mins-1);
            }
        }
    }
    tick();
}
