$(document).ready(function() { 
    setTimeout(function() {
      SVG($('#draw').get(0))
          .size(50, 205)
          .path()
          .attr({ 
          fill: 'none',
          stroke: 'white', 
          'stroke-width': 2,
        })
          .M(20, 100)
          .l(0, 75)
          .l(-20, 0)
          .l(25, 30)
          .l(25, -30)
          .l(-20, 0)
          .l(0, -75)
          .l(-10, 0)
          .drawAnimated({
            easing: "<>"
        });
      var parallaxInstance = new Parallax($('#c1').get(0), {
        hoverOnly: true,
        scalarY: 20,
      });
      }, 1000);
      
      let balls = [
        {
            text: "HTML",
            size: 100,
            textColor: "white",
            bgColor: "#F06529",
            posX: 10,
            posY: 10,
        },
        {
            text: "CSS",
            size: 50,
            textColor: "black",
            bgColor: "white",
            posX: 20,
            posY: 20,
        },
        {
            text: "PHP",
            size: 80,
            textColor: "white",
            bgColor: "#4f5b93",
            posX: 30,
            posY: 30,
        },
        {
            text: "JS",
            size: 65,
            textColor: "black",
            bgColor: "#f7df1e",
            posX: 40,
            posY: 40,
        },
        {
            text: "Java",
            size: 70,
            textColor: "white",
            bgColor: "#FFA518",
            posX: 50,
            posY: 50,
        },
        {
            text: "NodeJS",
            size: 50,
            textColor: "white",
            bgColor: "#215732",
            posX: 60,
            posY: 60,
        },
        {
            text: "SQL",
            size: 60,
            textColor: "white",
            bgColor: "#00758f",
            posX: 70,
            posY: 70,
        },
        {
            text: "Android",
            size: 60,
            textColor: "white",
            bgColor: "#a4c639",
            posX: 80,
            posY: 80,
        }
      ];
      
      $.each(balls, function(index, ball) {
        var html = ballCreator(ball);
        $('#balls').append(html);
      }); 
      
      new Parallax($('#balls').get(0), {
        hoverOnly: true,
      });
      $('.parallax').paroller();
    });
    
    const ballCreator = (ball) => {
      var propor = Math.min($("#balls").width(), $("#balls").height())
      if (! ball.depth) {
        ball.depth = Math.random() * Math.floor(2);
      }

      ball.size = ball.size * propor / 350;
      ball.posX = ball.posX * $("#balls").width() / 100;
      ball.posY = ball.posY * $("#balls").height() / 100;
      return '<div class="ball-container" data-depth="' + ball.depth + '"><div class="ball" style="width: ' + ball.size + 'px; height: ' + ball.size + 'px; top: ' + ball.posY + 'px; left: ' + ball.posX + 'px; background-color: '+ ball.bgColor +'; color: '+ ball.textColor +'"><p style="display: table-cell; vertical-align: middle;">'+ball.text+'</p></div></div>';
    }