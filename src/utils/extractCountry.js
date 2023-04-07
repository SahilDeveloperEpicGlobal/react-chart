const extractCountry = (arrayData) => {
  const Country = [];
  const rowCount = arrayData.Meta[0].DimensionValues.length;
  for (let i = 0; i < rowCount; i++) {
    Country.push(arrayData.Meta[0].DimensionValues[i]);
  }
  return Country;
};

export default extractCountry;
