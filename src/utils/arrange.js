const arrange = (list = [[]]) =>
  list.reduce(
    (preList, list) =>
      preList.flatMap((prev) => list.map((v) => prev.concat(v))),
    [[]]
  );

export default arrange;
