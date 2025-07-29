$(document).ready(function() {
    $(".role-btn").click(function (e) { 
        e.preventDefault();
        
        $(".role-btn").removeClass("active");
        $(".role-content").removeClass("active");

        $(this).addClass("active");

        var targetContent = $(this).data("content");
        $(".role-content[data-content='" + targetContent + "']").addClass("active");
    });
});
