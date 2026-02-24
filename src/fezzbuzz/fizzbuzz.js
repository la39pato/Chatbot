export default function fizzbuzz(n) {
    if (n === 0) {
        return "";
    }
    if (n === 1) {
        return "1";
    }
    
    return fizzbuzz(n-1) + " " + n;
}
