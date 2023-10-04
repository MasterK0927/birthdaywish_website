$(document).ready(function () {
    //happy birthday!

    var lang = "cy";

    var rhys = {
        name: "Rhys",
        birthday: {
            date: 5,
            month: 11,
            year: 1986
        }
    }

    var months = {
        "en": ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        "cy": ['Ionawr', 'Chwefror', 'Mawrth', 'Ebrill', 'Mai', 'Mehefin', 'Gorffennaf', 'Awst', 'Medi', 'Hydref', 'Tachwedd', 'Rhagfyr']
    }

    var message = {
        "en": "Happy Birthday!",
        "cy": "Pen blwydd Hapus!"
    }

    var d = new Date();

    var date = d.getDate();
    $('#date').text(date);

    var month = d.getMonth();
    $('#month').text(months[lang][month]);

    var year = d.getFullYear();
    $('#year').text(year);
    //if birthday
    if (date === rhys.birthday.date && month === rhys.birthday.month) {

        $('#message').text(message[lang]).show();
    }
    //if old
    if (year === rhys.birthday.year + 30) {

        $('#message-30').show().addClass('animated bounceInUp');
    }

    $('#message-30').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', animateIcons);

    function animateIcons() {
        $('#emoji').show().children('i').addClass('animated flipInX');

    }

});