$(document).ready(function () {

    Load_dataproject();
    //Load_imges();
    function Load_dataproject() {
        $.ajax({
            type: "POST",
            url: "get_all_activies.php",
            data: {},
            async: false,
            dataType: 'json',
            success: function (data) {
                console.log(data);
                fect_dataproject(data);
                dataproject = data;
            }
        });
    }

    function fect_dataproject(data) {
        for (var i = 0; i < data.length; i++) {
            if (data[i].type_activities == 'การประชุม') {
                $('.content1').append(
                    '<div class="row">' +
                    '<div class="col-md-12 mx-auto text-center">' +
                    '<h2 class="mb-5" id="nameproject">' + data[i].name_activities + '</h2>' +
                    '<p class="">' + data[i].Content_activities + '</p>' +
                    '</div>' +
                    ' </div>' +
                    '<hr></hr>'
                );
            }
            else if (data[i].type_activities == 'การลงพื้นที่') {
                $('.content2').append(
                    '<div class="row">' +
                    '<div class="col-md-12 mx-auto text-center">' +
                    '<h2 class="mb-5" id="nameproject">' + data[i].name_activities + '</h2>' +
                    '<p class="">' + data[i].Content_activities + '</p>' +
                    '</div>' +
                    ' </div>' +
                    // imge
                    '<div class="row">'+
                    '<div class="col-md-12 mx-auto text-center mb-5 >'+
                       ' <div class="container">'+
                            '<div id="myCarousel" class="carousel slide" data-ride="carousel">'+
                                '<ol class="carousel-indicators">'+
                                    '<li data-target="#myCarousel" data-slide-to="0" class="active"></li>'+
                                    '<li data-target="#myCarousel" data-slide-to="1"></li>'+
                                    '<li data-target="#myCarousel" data-slide-to="2"></li>'+
                                '</ol>'+
                                '<div class="carousel-inner">'+
    
                                    '<div class="item active">'+
                                        '<img src="images/EX/1/1.jpg" alt="Los Angeles" style="width:100%;">'+
                                    '</div>'+
    
                                   ' <div class="item">'+
                                        '<img src="images/EX/1/2.jpg" alt="Chicago" style="width:100%;">'+
                                   '</div>'+
    
                                    '<div class="item">'+
                                        '<img src="images/EX/1/3.jpg" alt="New York" style="width:100%;">'+
                                    '</div>'+
    
                                '</div>'+
    
                                '<a class="left carousel-control" href="#myCarousel" data-slide="prev">'+
                                    '<span class="glyphicon glyphicon-chevron-left"></span>'+
                                    '<span class="sr-only">Previous</span>'+
                                '</a>'+
                                '<a class="right carousel-control" href="#myCarousel" data-slide="next">'+
                                    '<span class="glyphicon glyphicon-chevron-right"></span>'+
                                    '<span class="sr-only">Next</span>'+
                               '</a>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                    // 
                    '<hr></hr>'
                );
            }
            else if (data[i].type_activities == 'การอบรม') {
                $('.content3').append(
                    '<div class="row">' +
                    '<div class="col-md-12 mx-auto text-center">' +
                    '<h2 class="mb-5" id="nameproject">' + data[i].name_activities + '</h2>' +
                    '<p class="">' + data[i].Content_activities + '</p>' +
                    '</div>' +
                    ' </div>' +
                        // imge
                        '<div class="row">'+
                        '<div class="col-md-12 mx-auto text-center mb-5 >'+
                            ' <div class="container">'+
                                '<div id="myCarousel" class="carousel slide" data-ride="carousel">'+
                                    '<ol class="carousel-indicators">'+
                                        '<li data-target="#myCarousel" data-slide-to="0" class="active"></li>'+
                                        '<li data-target="#myCarousel" data-slide-to="1"></li>'+
                                        '<li data-target="#myCarousel" data-slide-to="2"></li>'+
                                        '<li data-target="#myCarousel" data-slide-to="3"></li>'+
                                    '</ol>'+
                                    '<div class="carousel-inner">'+
        
                                        '<div class="item active">'+
                                            '<img src="images/EX/3/1.jpg" alt="Los Angeles" style="width:100%;">'+
                                        '</div>'+
        
                                        ' <div class="item">'+
                                            '<img src="images/EX/3/2.jpg" alt="Chicago" style="width:100%;">'+
                                        '</div>'+
        
                                        '<div class="item">'+
                                            '<img src="images/EX/3/3.jpg" alt="New York" style="width:100%;">'+
                                        '</div>'+
                                        '<div class="item">'+
                                            '<img src="images/EX/3/4.jpg" alt="New York" style="width:100%;">'+
                                        '</div>'+
        
                                    '</div>'+
        
                                    '<a class="left carousel-control" href="#myCarousel" data-slide="prev">'+
                                        '<span class="glyphicon glyphicon-chevron-left"></span>'+
                                        '<span class="sr-only">Previous</span>'+
                                    '</a>'+
                                    '<a class="right carousel-control" href="#myCarousel" data-slide="next">'+
                                        '<span class="glyphicon glyphicon-chevron-right"></span>'+
                                        '<span class="sr-only">Next</span>'+
                                    '</a>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                                        // 
                    '<hr></hr>'
                );
            }
            else if (data[i].type_activities == 'การสัมมนา') {
                $('.content4').append(
                    '<div class="row">' +
                    '<div class="col-md-12 mx-auto text-center">' +
                    '<h2 class="mb-5" id="nameproject">' + data[i].name_activities + '</h2>' +
                    '<p class="">' + data[i].Content_activities + '</p>' +
                    '</div>' +
                    ' </div>' +
                    '<hr></hr>'
                );
            }
        }
    }

   
    function  Load_imges(){
        for(var i=0;i<8;i++){
            $('.carousel-inner').append(
                '<div class="item active">'+
                    '<img src="images/EX/1/'+(i+1)+'.jpg" alt="Los Angeles" style="width:100%;">'+
                '</div>'
            );
        }
    }



});