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
            size: 80,
            textColor: "white",
            bgColor: "#F06529",
            posX: 10,
            posY: 10,
        },
        {
            text: "CSS",
            size: 50,
            textColor: "white",
            bgColor: "#264de4",
            posX: 15,
            posY: 40,
        },
        {
            text: "PHP",
            size: 80,
            textColor: "white",
            bgColor: "#4f5b93",
            posX: 70,
            posY: 20,
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
            posX: 80,
            posY: 80,
        },
        {
            text: "NodeJS",
            size: 50,
            textColor: "white",
            bgColor: "#215732",
            posX: 10,
            posY: 80,
        },
        {
            text: "SQL",
            size: 60,
            textColor: "white",
            bgColor: "#00758f",
            posX: 60,
            posY: 60,
        },
        {
            text: "Android",
            size: 60,
            textColor: "white",
            bgColor: "#a4c639",
            posX: 50,
            posY: 75,
        },
        {
            text: "Laravel",
            size: 60,
            textColor: "white",
            bgColor: "#ff4b26",
            posX: 28,
            posY: 70,
        },
        {
            text: "Linux",
            size: 70,
            textColor: "#fdfdfb",
            bgColor: "black",
            posX: 38,
            posY: 5,
        },
    ];
      
    $.each(balls, function(index, ball) {
        var html = ballCreator(ball);
        $('#balls').append(html);
    }); 
      
    new Parallax($('#balls').get(0));
    $('.parallax').paroller();  

    // $(window).resize(function() {
    //     $('#ball').empty();
    //     $.each(balls, function(index, ball) {
    //         var html = ballCreator(ball);
    //         $('#balls').append(html);
    //     }); 
    // });

});
    
const ballCreator = (ball) => {
    var propor = Math.min($("#balls").width(), $("#balls").height())
    if (! ball.depth) {
        ball.depth = (0.4 + Math.random() * 2);
    }

    ball.size = ball.size * propor / 250;
    ball.posX = ball.posX * $("#balls").width() / 100;
    ball.posY = -10 + ball.posY * $("#balls").height() / 100;
    return '<div class="ball-container" data-depth="' + ball.depth + '"><div class="ball" style="width: ' + ball.size + 'px; height: ' + ball.size + 'px; top: ' + ball.posY + 'px; left: ' + ball.posX + 'px; background-color: '+ ball.bgColor +'; color: '+ ball.textColor +'"><p style="display: table-cell; vertical-align: middle;">'+ball.text+'</p></div></div>';
}