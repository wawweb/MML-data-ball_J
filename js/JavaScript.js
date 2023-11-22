(() => {
    let nums9 = $("main .bonusPoint .bonusPoint__nums li.nums__9")

    var current = parseFloat(nums9.css("backgroundPositionY"));

    let active = false;

    let add = () => {

        current += 10;

        nums9.animate({
            backgroundPositionY: "+=13%"
        }, 1000, function () {
            nums9.animate({
                backgroundPositionY: "-=3%"
            }, 1000)
        });

        if (current == 90) {
            active = false;
        }
    }

    let reduce = () => {

        current -= 10;

        nums9.animate({
            backgroundPositionY: "-=13%"
        }, 1000, function () {
            nums9.animate({
                backgroundPositionY: "+=3%"
            }, 1000)
        });

        if (current == 0) {
            active = true;
        }
    }

    setInterval(() => {
        setTimeout(() => {
            if (current <= 90 && active == false) {
                reduce();
            }
            else if (current >= 0 && active == true) {
                add();
            }
        }, 1000);
    }, 2000);
    
})();