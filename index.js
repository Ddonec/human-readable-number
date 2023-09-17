function toReadable(n) {
    const numbers1 = [
        "none-n1",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
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
    const numbers2 = [
        "none-n2",
        "none2-n2",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (n < 20) {
        result = numbers1[n];
    }
    if ((n < 100, n >= 20)) {
        function firstDigit(n) {
            while (n > 10) {
                n /= 10;
            }
            return Math.floor(n);
        }
        let fn = firstDigit(n);
        if (n % 10 == 0) {
            result = numbers2[fn];
        } else {
            let ln = n % 10;

            result = numbers2[fn] + " " + numbers1[ln];
        }
    }
    if ((n < 1000, n > 99)) {
        let m = Math.trunc(n / 10);
        let mn = m % 10;
        let lasttwo = n % 100;

        function firstDigit(n) {
            while (n > 99) {
                n /= 100;
            }
            return Math.floor(n);
        }
        let fn = firstDigit(n);

        let ln = n % 10;
        // console.log(fn)
        // console.log(mn)
        // console.log(ln)
        // console.log(lasttwo)
        if (lasttwo < 20 && n % 100 != 0) {
            result = numbers1[fn] + " hundred " + numbers1[lasttwo];
        } else if (n % 100 == 0) {
            result = numbers1[fn] + " hundred";
        } else if (n % 100 != 0 && n % 10 == 0) {
            result = numbers1[fn] + " hundred " + numbers2[mn];
        } else {
            result =
                numbers1[fn] + " hundred " + numbers2[mn] + " " + numbers1[ln];
        }
    }
    // console.log(n)

    return(result);
}

