$( document ).ready(function() {

    Load_dataproject();
    Load_datatypeproject();
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
    function Load_datatypeproject() {
        $.ajax({
            type: "POST",
            url: "get_data_type.php",
            data: {},
            dataType: 'json',
            success: function (data) {
                fectType(data);
            }
        });
    }

    function fectType(data){
        $('.custom-select').empty();
        $('.custom-select').append(
            '<option value="เลือกประเภท">เลือกประเภท</option>'
        );
        for(var i=0;i<data.length;i++){
            $('.custom-select').append(
                '<option value="'+data[i].name_TypeProject+'">'+data[i].name_TypeProject+'</option>'
            );
        }
    }

    function fect_dataproject(data){
        $('.tbodyproject').empty();
            for(var i = 0;i<data.length;i++){
                    if(i%2==0){
                        $('.tbodyproject').append(
                            ' <tr>'+
                                    '<td class="text-center">'+
                                        +(i+1)+
                                ' </td>'+
                                ' <td>'+
                                        data[i].name_project+
                                    '</td>'+
                                    '<td class="text-center">'+data[i].type_project+'</td>'+
                                    // '<td class="text-center">'+
                                    //     '<div class="badge badge-success">วิเคราะสำเร็จ</div>'+
                                    // '</td>'+
                                    '<td class="text-center">'+
                                        '<button type="button" class="btn-shadow p-1 btn btn-sm editbuttonSee" data-idpro="'+data[i].id_project+ '">'+
                                            '<i class="text-white pe-7s-search pr-1 pl-1"></i>'+
                                        '</button>'+
                                ' </td>'+
                            ' </tr>'
                        );
                    }else{
                        $('.tbodyproject').append(
                            ' <tr>'+
                                    '<td class="text-center">'+
                                        +(i+1)+
                                ' </td>'+
                                ' <td>'+
                                        data[i].name_project+
                                    '</td>'+
                                    '<td class="text-center">'+data[i].type_project+'</td>'+
                                    // '<td class="text-center">'+
                                    //     '<div class="badge badge-warning">รอการวิเคราะ</div>'+
                                    // '</td>'+
                                    '<td class="text-center">'+
                                        '<button type="button" class="btn-shadow p-1 btn btn-sm editbuttonSee" data-idpro="'+data[i].id_project+ '">'+
                                            '<i class="text-white pe-7s-search pr-1 pl-1"></i>'+
                                        '</button>'+
                                ' </td>'+
                            ' </tr>'
                        );
                    }
                }
        }

    $(document).on("click", ".editPlus", function () {
        $('#exampleModal').modal('show')
    });

    $(document).on("click", "#OKbuttom", function () {
        $('#exampleModal').modal('hide');
        var name_project = $('#name_project').val();
        var head_project = $('#head_project').val();
        var year_project = $('#year_project').val();
        var pass_project = $('#pass_project').val();
        var problem_project = $('#problem_project').val();
        var object_project = $('#object_project').val();
        var result_project = $('#result_project').val();
        var result_use_project = $('#result_use_project').val();
        var conclude_project = $('#conclude_project').val();
        var type_project = $('#type_project').val();

        console.log(head_project);
        $.ajax({
            type: "POST",
            url: "insert_dataproject.php",
            data: { name_project:name_project,
                head_project:head_project,
                year_project:year_project,
                pass_project:pass_project,
                problem_project:problem_project,
                object_project:object_project,
                result_project:result_project,
                result_use_project:result_use_project,
                conclude_project:conclude_project,
                type_project:type_project
            },
            dataType: 'json',
            success: function (data) {
                console.log(data);
            }
        });

        Swal.fire({
            position: 'center',
            type: 'success',
            title: 'เรียบร้อย',
            showConfirmButton: false,
            timer: 1500
        })
        location.reload();
    });

     //กดแก้ไขข้อมูลกิจการ
     $(document).on("click", ".editbuttonSee", function () {
        var id_project = $(this).data("idpro");
        Select_id_dataproject(id_project);
        console.log(id_project);
        $('#exampleModalEdit').modal('show');
    });
    function Select_id_dataproject(id_project) {
        $.ajax({
            type: "POST",
            url: "get_id_project.php",
            data: { id_project: id_project },
            dataType: 'json',
            success: function (data) {
                $('#name_project_edit').val(data.name_project);
                $('#head_project_edit').val(data.head_project);
                $('#year_project_edit').val(data.year_project);
                $('#pass_project_edit').val(data.pass_project);
                $('#problem_project_edit').val(data.problem_project);
                $('#object_project_edit').val(data.object_project);
                $('#result_project_edit').val(data.result_project);
                $('#result_use_project_edit').val(data.result_use_project);
                $('#conclude_project_edit').val(data.conclude_project);
                $('#type_project_edit').val(data.type_project);
                $('#idpro').val(data.id_project);
            }
        });
    }
    $(document).on("click", ".editSave", function () {
        var id_project = $('#idpro').val();
        var name_project = $('#name_project_edit').val();
        var head_project = $('#head_project_edit').val();
        var year_project = $('#year_project_edit').val();
        var pass_project = $('#pass_project_edit').val();
        var problem_project = $('#problem_project_edit').val();
        var object_project = $('#object_project_edit').val();
        var result_project = $('#result_project_edit').val();
        var result_use_project = $('#result_use_project_edit').val();
        var conclude_project = $('#conclude_project_edit').val();
        var type_project = $('#type_project_edit').val();

        $.ajax({
            type: "POST",
            url: "update_data_project.php",
            data: { name_project:name_project,
                head_project:head_project,
                year_project:year_project,
                pass_project:pass_project,
                problem_project:problem_project,
                object_project:object_project,
                result_project:result_project,
                result_use_project:result_use_project,
                conclude_project:conclude_project,
                type_project:type_project,
                id_project:id_project
            },
            dataType: 'json',
            success: function (data) {
                console.log(data);
            }
        });

        $('#exampleModalEdit').modal('hide');
        console.log(id_project);
        Swal.fire({
            position: 'center',
            type: 'success',
            title: 'เรียบร้อย',
            showConfirmButton: false,
            timer: 1500
        })
        location.reload();
    });


    // อัพรูป //
    $('#chooseFile').bind('change', function () {
        var filename = $("#chooseFile").val();
        console.log(filename);
        if (/^\s*$/.test(filename)) {
          $(".file-upload").removeClass('active');
          $("#noFile").text("No file chosen..."); 
        }
        else {
          $(".file-upload").addClass('active');
          $("#noFile").text(filename.replace("C:\\fakepath\\", "")); 
        }
      });

});