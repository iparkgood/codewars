function nbYear(p0, percent, aug, p) {
    let years = 0;

    while(p0 < p) {
        p0 = p0 + p0 * percent * 0.01 + aug;
        years++;
    }
    return years;
}

console.log(nbYear(1500, 5, 100, 5000)); 
console.log(nbYear(1500000, 2.5, 10000, 2000000));
console.log(nbYear(1500000, 0.25, 1000, 2000000)); 

/*
At the end of the first year there will be: 
1000 + 1000 * 0.02 + 50 => 1070 inhabitants

At the end of the 2nd year there will be: 
1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

At the end of the 3rd year there will be:
1141 + 1141 * 0.02 + 50 => 1213

It will need 3 entire years.
*/