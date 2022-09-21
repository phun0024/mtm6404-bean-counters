// rows
// create the rows for the table
// each will contain data for a single bean counter
// using the map method to create the HTML for each bean counter
// @param: counters (array)
// @return: html string

/*
{
    index: 1,
    name: 'Dawson',
    bean: 'Lima Beans',
    count: 759
  }
*/
function rows (counters) {
    return counters.map(counter => `
    <tr>
        <th scope="row">${counter.index}</th>
        <td>${counter.name}</td>
        <td>${counter.bean}</td>
        <td>${counter.count}</td>
    </tr>
    `).join('')
}

// search
// will filter the counters that match the search query
// it will the filter method the filter the counters array
// @param: counters (array), query (string)
// @return: array of counters
function search (counters, query) {
    return counters.filter(counter =>
        counter.name.toLowerCase().includes(query.toLowerCase()) ||
        counter.bean.toLowerCase().includes(query.toLowerCase()))
}

// total
// calculates the total number of counted beans
// it will use the reduce method to calculate
// @param: counters (array)
// @return: number
function total (counters) {
    return counters.reduce((total, counter) => (
        total + counter.count
    ), 0) 
}

// counter
// will sort the bean counters by a property (index, name, bean, count)
// will use the sort method
// @param: counters (array), property (string)
// @return array of counters
function order (counters, property) {
    return counters.sort((a, b) => {
        if (a[property] < b[property]) {
            return -1
        } else if (a[property] > b[property]) {
            return 1
        } else {
            return 0
        }
    })
}