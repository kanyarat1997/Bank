$( document ).ready(function() {
    Load_dataproject();
    Load_dataproject1();
    function Load_dataproject() {
        $.ajax({
            type: "POST",
            url: "get_all_project.php",
            data: {},
            dataType: 'json',
            success: function (data) {
                fect_dataproject(data);
            }
        });
    }

    function Load_dataproject1() {
        $.ajax({
            type: "POST",
            url: "get_all_TypeProject.php",
            data: {},
            dataType: 'json',
            success: function (data) {
                Load_datatypeProject(data);
            }
        });
    }


    function fect_dataproject(data){
        for(var i = 0;i<data.length;i++){
            var problem_project = "";
            if(data[i].problem_project === null){
                problem_project = "ไม่พบข้อมูล";
            }else{
                problem_project = data[i].problem_project;
            }
          $('.tbodyproject1').append(
            '<div class="col-md-4 mt-2">'+
                '<div class="accordion" id="accordionExample">'+
                    '<div class="uk-card uk-card-default uk-card-body">'+
                        // '<a href="#">'+
                        //   '<div class="uk-card-badge uk-label operdataproject">เปิดเอกสาร</div>'+
                        // '</a>'+
                        '<h3 class="uk-card-title">'+data[i].name_project+'</h3>'+
                        '<a target="_blank" rel="noopener noreferrer" href="page_project.html">คลิกเพื่อดูรายละเอียด</a>'+
                        // '<p data-toggle="collapse" data-target="#collapse'+i+'" aria-expanded="true" aria-controls="collapse'+i+'"' +
                        //   'id="heading'+i+'">'+
                        //   'คลิกเพื่อดูรายละเอียด'+
                        // '</p>'+
                        // '<div id="collapse'+i+'" class="collapse" aria-labelledby="heading'+i+'" data-parent="#accordionExample">'+
                        //     '<p>'+problem_project+'</p>'+
                        // '</div>'+
                    '</div>'+
                '</div>'+
              '</div>'
            );
            $('.tbodyproject2').append(
                '<div class="col-md-4 mt-2">'+
                    '<div class="accordion" id="accordionExample">'+
                        '<div class="uk-card uk-card-default uk-card-body">'+
                            // '<a href="#">'+
                            //   '<div class="uk-card-badge uk-label operdataproject">เปิดเอกสาร</div>'+
                            // '</a>'+
                            '<h3 class="uk-card-title">'+data[i].name_project+'</h3>'+
                            '<a target="_blank" rel="noopener noreferrer" href="page_project.html">คลิกเพื่อดูรายละเอียด</a>'+
                            // '<p data-toggle="collapse" data-target="#collapse'+i+'" aria-expanded="true" aria-controls="collapse'+i+'"' +
                            //   'id="heading'+i+'">'+
                            //   'คลิกเพื่อดูรายละเอียด'+
                            // '</p>'+
                            // '<div id="collapse'+i+'" class="collapse" aria-labelledby="heading'+i+'" data-parent="#accordionExample">'+
                            //     '<p>'+problem_project+'</p>'+
                            // '</div>'+
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
                  '<a href="#page1">'+
                      '<img class="imgeicon" src="images/icon/leaf.png">'+
                 ' </a>'+
                 ' <h4 class="mb-3 mt-3">'+data[i].name_TypeProject+'</h4>'+
                '</div>'
            );
        }
        
    }


});