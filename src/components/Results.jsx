import { calculateInvestmentResults, formatter } from '../util/investment';
function Results({ input }) {
  const resultsData = calculateInvestmentResults(input);
  return (
    <div className="flex-center">
      <h2>Results</h2>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Interest</th>
            <th>Value at end of year</th>
            <th>Annual investment</th>
          </tr>
        </thead>
        <tbody>
          {resultsData.map((result) => (
            <tr key={result.year}>
              <td>{result.year}</td>
              <td>{formatter.format(result.interest)}</td>
              <td>{formatter.format(result.valueEndOfYear)}</td>
              <td>{formatter.format(result.annualInvestment)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Results;
