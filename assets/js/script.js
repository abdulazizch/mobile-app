$('div.datepicker').datepicker({
    keyboardNavigation: false,
    autoclose: true,
});
$(".prev").html("<img class='w-100' src='./assets/images/icons/chevron-left.svg' alt=''>")
$(".next").html("<img class='w-100' src='./assets/images/icons/chevron-right.svg' alt=''>")

$(".btn-date-filter").click(function(){
    $(".filter-popup-con").addClass("show");
    setTimeout(() => {
        $(".filter-popup").addClass("show");
    }, 1);
})

$(".filter-popup-close-btn").click(function(){
    $(".filter-popup").removeClass("show");
    setTimeout(() => {
        $(".filter-popup-con").removeClass("show");
    }, 100);
})