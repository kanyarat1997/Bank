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
        $('.tbodyproject').empty();
        for(var i = 0;i<data.length;i++){     
          $('.tbodyproject').append(
            '<div class=" col-md-4 uk-card uk-card-default uk-card-body"data-aos="zoom-in" data-aos-delay="200">'+
            '<a herf="">'+
            '<div class="uk-card-badge uk-label">เปิดเอกสาร</div>'+
            '</a>'+
            '<h3 class="uk-card-title">'+
            data[0].name_project+
            '</h3>'+
            '<details>'+
            '<summary>คลิกเพื่อดูรายละเอียด</summary>'+
            data[0].result_project+
            '</details>'+
            '</div>'

            );      
      }      
      
}

});