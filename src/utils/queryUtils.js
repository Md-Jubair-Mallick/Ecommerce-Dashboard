export const formatSortParams = (sortBy) => {
    const [field, order] = sortBy.split('_');
    return { _sort: field, _order: order };
  };
  