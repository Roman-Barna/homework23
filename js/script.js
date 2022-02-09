document.addEventListener('DOMContentLoaded', function () {
    var elems1 = document.querySelectorAll('.parallax');
    var instances1 = M.Parallax.init(elems1, {});


    var elems2 = document.querySelectorAll('.sidenav');
    var instances2 = M.Sidenav.init(elems2, {});



    var elems3 = document.querySelectorAll('.dropdown-trigger');
    var instances3 = M.Dropdown.init(elems3, {});
});