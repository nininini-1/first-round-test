const convert = (list = []) => {
  const res = [];
  const map = list.reduce((res, v) => ((res[v.id] = v), res), {});
  for (const item of list) {
    if (!item.parent) {
      res.push(item);
      continue;
    }
    if (item.parent in map) {
      const p = map[item.parent];
      p.children = p.children || [];
      p.children.push(item);
    }
  }
  return res;
};

export default convert;
