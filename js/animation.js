$(document).ready(function(){
    $(document).on("click", ".loginbutton", function () {
        $('#exampleModal').modal('show');
    });
    $(document).on("click", "#OKbuttom", function () {
        $('#exampleModal').modal('hide');
        Swal.fire({
            position: 'center',
            type: 'success',
            title: 'เรียบร้อย',
            showConfirmButton: false,
            timer: 1500
        })
    });

    $(".popup").click(function () {
        var $this = $(this);
        var $iframe = $("<iframe>").attr("src", $this.data("link")).css({"width": 400, "height": 300});
        var $title = $("<h1>").text($this.data("title"));
        $("#video-view").html($title).append($iframe);
        $iframe.wrap("<div class='class-video'>");
    });

});