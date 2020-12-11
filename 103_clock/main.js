// auto calling function
(function() {
    var updateDate = function() {
        var date = new Date();

        var day = date.getDay();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();

        document.getElementById("month").innerHTML=month;
        document.getElementById("day").innerHTML=day;
        document.getElementById("year").innerHTML=year;
    }

    updateDate();

    var updateClock = function() {
        var time = new Date();

        var hour = time.getHours();
        var min = time.getMinutes();
        var sec = time.getSeconds();

        if (sec < 10) {
            sec = `0${sec}`
        };

        document.getElementById("hour").innerHTML = hour;
        document.getElementById("min").innerHTML = min;
        document.getElementById("sec").innerHTML = sec;
    }

    updateClock();

    var interval = setInterval(updateDate, 10000)
    var interval2 = setInterval(updateClock, 900)
})();