$( document ).ready(function() {
    Load_dataproject();
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


    function fect_dataproject(data){
        for(var i = 0;i<data.length;i++){
          $('.tbodyproject').append(
            '<div class="col-md-4 mt-5">'+
                '<div class="accordion" id="accordionExample">'+
                    '<div class="uk-card uk-card-default uk-card-body">'+
                        '<a href="">'+
                          '<div class="uk-card-badge uk-label">เปิดเอกสาร</div>'+
                        '</a>'+
                        '<h3 class="uk-card-title">'+data[i].name_project+'</h3>'+
                        '<p data-toggle="collapse" data-target="#collapse'+i+'" aria-expanded="true" aria-controls="collapse'+i+'"' +
                          'id="heading'+i+'">'+
                          'คลิกเพื่อดูรายละเอียด'+
                        '</p>'+
                        '<div id="collapse'+i+'" class="collapse" aria-labelledby="heading'+i+'" data-parent="#accordionExample">'+
                            '<p>'+data[i].problem_project+'</p>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
              '</div>'
            );
            
      }      
      
}

});