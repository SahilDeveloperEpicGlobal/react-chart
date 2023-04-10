const extractCountry = (arrayData) => {
  const Country = [];
  const Data = [];

  const rowCount = arrayData.Meta[0].DimensionValues.length;
  for (let i = 0; i < rowCount; i++) {
    Country.push(arrayData.Meta[0].DimensionValues[i]);
  }
  const row1 = arrayData.Data.length;

  for (let i = 0; i < row1; i++) {
    const _data = arrayData.Data[i][2][0];
    _data ? Data.push(_data) : Data.push(0);
  }

  const graphData = [
    {
      country: "",
      payload: [],
    },
    {
      country: "",
      payload: [],
    },
  ];

  arrayData.Data.map(([a, b, c]) => {
    if (a === 0) {
      graphData[0]?.payload.push({
        count: b,
        value: c[0],
      });
      Object.assign(graphData[0], {
        country: "USA",
      });
    }
    if (a === 1) {
      graphData[1]?.payload.push({
        count: b,
        value: c[0],
      });
      Object.assign(graphData[1], {
        country: "DEU",
      });
    }
  });

  return { graphData, Country };
};

export default extractCountry;

// if (a === 0) {
//   // console.log("USA", a);
//   x.payload.push({
//     value: b,
//     graph: c[0],
//   });
// }
// if (a === 1) {
//   console.log("NOT USA", a);
// }
// const x = c.map(([key, obj]) => {
//   console.log()
// });

// return console.log([a, b]);
// console.log(c);
