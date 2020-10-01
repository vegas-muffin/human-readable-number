module.exports = function toReadable(number) {
    let edinicy = [
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    let desyatki = [
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    let desyatki2 = [
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    let sotni = "hundred";
    let chislo = "" + number;
    let e = number % 10;
    let ee;
    let dd;
    let ss;

    if (chislo == 0) {
        return "zero";
    } else if (chislo.length == 1) {
        for (let i = 0; i < desyatki2.length; i++) {
            if (i + 1 == e) {
                ee = edinicy[i];
            }
        }
        return ee;
    }

    if (chislo.length == 2) {
        let e = number % 10;
        let d = Math.trunc(number / 10);
        console.log("d=" + d);
        if (e == 0 && d > 1) {
            for (i = 0; i < desyatki2.length; i++) {
                if (i + 1 == d) {
                    dd = desyatki2[i];
                    return dd;
                }
            }
        } else if (d == 1) {
            for (i = 0; i < desyatki.length; i++) {
                if (i + 1 == e) {
                    dd = desyatki[i];
                } else if (i + 1 == d) {
                    dd = desyatki2[i];
                }
            }
            return dd;
        } else if (d > 1 && e > 0) {
            for (i = 0; i < desyatki.length; i++) {
                if (i + 1 == d) {
                    dd = desyatki2[i];
                }
            }

            for (let j = 0; j < edinicy.length; j++) {
                if (j + 1 == e) {
                    ee = edinicy[j];
                }
            }
            return dd + " " + ee;
        }
    }

    if (chislo.length == 3) {
        let e = number % 10;
        let d = Math.trunc((number / 10) % 10);
        let s = Math.trunc(number / 100);
        if (d == 0 && e > 0) {
            for (let i = 0; i < desyatki2.length; i++) {
                if (i + 1 == s) {
                    ss = edinicy[i] + " " + sotni;
                }
            }
            for (let j = 0; j < edinicy.length; j++) {
                if (j + 1 == e) {
                    ee = edinicy[j];
                }
            }
            return ss + " " + ee;
        }
        if (d == 1) {
            for (let i = 0; i < desyatki2.length; i++) {
                if (i + 1 == s) {
                    ss = edinicy[i] + " " + sotni;
                }
            }
            for (let j = 0; j < edinicy.length; j++) {
                if (j + 1 == e) {
                    dd = desyatki[j];
                } else if (j + 1 == d) {
                    dd = desyatki2[j];
                }
            }
            return ss + " " + dd;
        } else if (d > 1 && e > 0) {
            for (let i = 0; i < desyatki2.length; i++) {
                if (i + 1 == s) {
                    ss = edinicy[i] + " " + sotni;
                }
            }
            for (i = 0; i < desyatki.length; i++) {
                if (i + 1 == d) {
                    dd = desyatki2[i];
                }
            }

            for (let j = 0; j < edinicy.length; j++) {
                if (j + 1 == e) {
                    ee = edinicy[j];
                }
            }
            return ss + " " + dd + " " + ee;
        } else if (d > 1 && e == 0) {
            for (let i = 0; i < desyatki2.length; i++) {
                if (i + 1 == s) {
                    ss = edinicy[i] + " " + sotni;
                }
            }
            for (i = 0; i < desyatki.length; i++) {
                if (i + 1 == d) {
                    dd = desyatki2[i];
                }
            }
            return ss + " " + dd;
        } else if (d == 0 && e == 0) {
            for (let i = 0; i < desyatki2.length; i++) {
                if (i + 1 == s) {
                    ss = edinicy[i] + " " + sotni;
                }
            }
            return ss;
        }
    }
};
