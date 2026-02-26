export default function fizzbuzz(n) {
    if (n === 0) {
        return "";
    }
    if (n === 1) {
        return "1";
    }
    if (n % 3 === 0) {
        return fizzbuzz(n-1) + " Fizz";
    }
    
    return fizzbuzz(n-1) + " " + n;
}
