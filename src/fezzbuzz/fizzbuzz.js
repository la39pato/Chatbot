export default function fizzbuzz(n) {
    if (n === 0) {
        return "";
    }

    if (n === 1) {
        return "1";
    }

    if (n % 3 === 0 && n % 5 === 0){
        return fizzbuzz(n-1) + " FizzBuzz";
    }

    if (n % 3 === 0) {
        return fizzbuzz(n-1) + " Fizz";
    }

    if (n % 5 === 0) {
        return fizzbuzz(n-1) + " Buzz";
    }

    return fizzbuzz(n-1) + " " + n;
}
