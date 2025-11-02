function fibonacciSeries(num) {
    const series = [0, 1];
    for (let i = 2; i < num; i++) {
      series.push(series[i - 1] + series[i - 2]);
    }
    return series.slice(0, num);
  }
  
  describe('Read file and print Fibonacci series', () => {
    it('reads data.txt and prints Fibonacci', () => {
      // ✅ Read your file using cy.readFile
      cy.readFile('my-app/data.txt').then(content => {
        // Remove whitespace and convert to number
        const n = parseInt(content.trim(), 10);
  
        // Generate Fibonacci
        const fibSeries = fibonacciSeries(n);
  
        // Print to Cypress command log
        cy.log(`Input number: ${n}`);
        cy.log(`Fibonacci series: ${fibSeries.join(', ')}`);
  
        // You can also assert something if you want
        expect(fibSeries[0]).to.eq(0);
        expect(fibSeries[1]).to.eq(1);
      });
    });
  });