var fromDp = $('div.datepicker.from-date').datepicker({
    keyboardNavigation: false,
})
var toDp = $('div.datepicker.to-date').datepicker({
    keyboardNavigation: false,
})
fromDp.on("changeDate", function(e){
    // console.log("changed")
    // console.log(e.format('MM d, yyyy'))
    $(".from-date-input").val(e.format('MM d, yyyy'));
    hideDatePicker()
});
toDp.on("changeDate", function(e){
    // console.log("changed")
    // console.log(e.format('MM d, yyyy'))
    $(".to-date-input").val(e.format('MM d, yyyy'));
    hideDatePicker()
});

$(".prev").html("<img class='w-100' src='./assets/images/icons/chevron-left.svg' alt=''>")
$(".next").html("<img class='w-100' src='./assets/images/icons/chevron-right.svg' alt=''>")

$(".btn-date-filter").click(function(){
    $(".filter-popup-con").addClass("show");
    setTimeout(() => {
        $(".filter-popup").addClass("show");
        $(".filter-options").show();
    }, 1);
})

$(".filter-popup-close-btn").click(function(){
    $(".filter-popup").removeClass("show");
    $(".custom-range-filter").removeClass("show");
    setTimeout(() => {
        $(".filter-popup-con").removeClass("show");
    }, 130);
})

$(".custom-range-link").click(function(e){
    e.preventDefault();
    $(".custom-range-filter").addClass("show");
    $(".filter-options").hide();

})
$(".from-date-input").click(function(e){
    e.preventDefault();
    $(".from-date-pannel").addClass("show");
    $(".custom-range-filter").removeClass("show");

})

$(".to-date-input").click(function(e){
    e.preventDefault();
    $(".to-date-pannel").addClass("show");
    $(".custom-range-filter").removeClass("show");

})

$(".btn-date-cancel").click(function(e){
    hideDatePicker()
})

function hideDatePicker(){
    $(".from-date-pannel").removeClass("show");
    $(".to-date-pannel").removeClass("show");
    $(".custom-range-filter").addClass("show");
}