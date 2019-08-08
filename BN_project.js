var dataproject;
$( document ).ready(function() {
    Load_dataproject();
    Load_dataproject1();
    Load_ProjectBody();
    function Load_dataproject() {
        $.ajax({
            type: "POST",
            url: "get_all_project.php",
            data: {},
            async: false,
            dataType: 'json',
            success: function (data) {
                fect_dataproject(data);
                //console.log(data);
                dataproject = data;
            }
        });
    }

    function Load_dataproject1() {
        $.ajax({
            type: "POST",
            url: "get_all_TypeProject.php",
            data: {},
            async: false,
            dataType: 'json',
            success: function (data) {
                Load_datatypeProject(data);
                Load_ProjectBody(data);
            }
        });
    }

    function fect_dataproject(data){
        for(var i = 0;i<data.length;i++){
          $('.tbodyproject').append(
            '<div class="col-md-4 mt-2">'+
                '<div class="accordion" id="accordionExample">'+
                    '<div class="uk-card uk-card-default uk-card-body">'+
                        '<h3 class="uk-card-title">'+data[i].name_project+'</h3>'+
                        '<a target="_blank" rel="noopener noreferrer" href="page_project.html">คลิกเพื่อดูรายละเอียด</a>'+
                    '</div>'+
                '</div>'+
              '</div>'
            );
        } 
    }

    function Load_datatypeProject(data) {
        for(var i=0; i < data.length;i++){
            $('.typeProjectBody').append(
                '<div class="col-md-3 mx-auto text-center mb-3 mt-3 section-heading section-headingedit" data-aos="zoom-in" data-aos-delay="400">'+
                  '<a href="#page'+(i+1)+'">'+
                      '<img class="imgeicon" src="'+data[i].pic_TypeProject+'">'+
                 ' </a>'+
                 ' <h4 class="mb-3 mt-3">'+data[i].name_TypeProject+'</h4>'+
                '</div>'
            );
        }
    }
    function Load_ProjectBody(data){
            for(var i=0;i < data.length;i++){
                $('.ProjectBody').append(
                    '<div class="row" id="page'+(i+1)+'">'+
                    '<div class="col-md-6 mx-auto text-center mt-4 section-heading">'+
                        '<h2 class="mb-5">'+data[i].name_TypeProject+'</h2>'+
                    '</div>'+
                    '</div>'+
                    '<div class="row tbodyproject'+(i+1)+'" data-aos="fade-up" data-aos-duration="1000">'+
                        
                    '</div>'+
                    '<div class="mt-5">'+
                    ' <hr>'+
                    '</div>'
                );
            }
            var dataTypeproject = data;

            for(var i=0;i<dataTypeproject.length;i++){
                for(var j=0 ;j<dataproject.length; j++){
                    if(dataTypeproject[i].name_TypeProject === dataproject[j].type_project){
                        $('.tbodyproject'+(i+1)).append(
                            '<div class="col-md-4 mt-3">'+
                                '<div class="accordion" id="accordionExample">'+
                                    '<div class="uk-card uk-card-default uk-card-body">'+
                                        '<h3 class="uk-card-title">'+dataproject[j].name_project+'</h3>'+
                                            '<a href="page_project.php?nameproject='+dataproject[j].name_project+'" class="TESTER" >คลิกเพื่อดูรายละเอียด</a>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'
                        );
                    }
                }
            }

            for(var i=0;i<dataproject.length;i++){
                for(var j=0 ;j<dataproject.length; j++){
                    if(dataproject[i].type_project === dataproject[j].type_project){
                        console.log(dataproject[j].type_project);
                    }
                }
            }
            

    }

});