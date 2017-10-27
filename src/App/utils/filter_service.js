class FilterService {
  filter = (values, filter, filterByKeys) => {
    let filterEmpty = filter.trim() === '';
    if (filterEmpty) {
      return values;
    } else {
      let filteredValues = values.filter(v => {
        let valid = false;
        filterByKeys.forEach(k => {
          let lowerKey = v[k].toLowerCase();
          let lowerFilter = filter.toLowerCase();
          if (lowerKey.indexOf(lowerFilter) !== -1) {
            valid = true;
          }
        });
        return valid;
      });
      return filteredValues;
    }
  };
}

const filterService = new FilterService();
export default filterService;
