class FilterService {
  filter = (values, filter, filterByKeys) => {
    let filterEmpty = filter.trim() === '';
    if (filterEmpty) {
      return values;
    } else {
      let filteredValues = values.filter(v => {
        let valid = false;
        filterByKeys.forEach(k => {
          let lowerFilter = filter.toLowerCase();
          if (k.indexOf('.') !== -1) {
            let accsr = k.split('.');
            let lowerKey = accsr.reduce((a, b) => {
              return a[b];
            }, v);
            if (lowerKey && lowerKey.indexOf(lowerFilter) !== -1) {
              valid = true;
            }
          } else {
            let lowerKey = v[k].toLowerCase();
            if (lowerKey.indexOf(lowerFilter) !== -1) {
              valid = true;
            }
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
