import { mean, median, mode } from './StatFunctions'

// Destructure the props passed to the Table component
const Table = ({ class1, class2, class3, text }) => {
  if (class1 || class2 || class3) {
    return (
      <table>
        <thead>
          <tr>
            <th>Measures</th>
            <th>Class 1</th>
            <th>Class 2</th>
            <th>Class 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>{text} Mean</strong>
            </td>
            <td>{mean(class1).toFixed(3)}</td>
            <td>{mean(class2).toFixed(3)}</td>
            <td>{mean(class3).toFixed(3)}</td>
          </tr>

          <tr>
            <td>
              <strong>{text} Median</strong>
            </td>
            <td>{median(class1).toFixed(3)}</td>
            <td>{median(class2).toFixed(3)}</td>
            <td>{median(class3).toFixed(3)}</td>
          </tr>
          <tr>
            <td>
              <strong>{text} Mode</strong>
            </td>
            <td>{mode(class1)}</td>
            <td>{mode(class2)}</td>
            <td>{mode(class3)}</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Table
