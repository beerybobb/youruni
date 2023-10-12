// this is a very basic way to parse a CSV file and only really applies to this example.
// in the real world we'd need a much safer solution

export const parseCsv = async (csv: string) => {
  const response = await fetch(csv);
  const text = await response.text();
  
  const formattedResults = [];
  if (text) {
    // first lets split each line into a seperate item
    const textToLines = text.split("\n");
    for await (const line of textToLines) {
      // now lets split each line into its own array
      const row = line.split(",");
      // this first line of this file is the definition of each positions type.
      // for this example, lets just discard the row
      if (row[0] === "UNITID") {
        continue;
      }

      // now we can push each row into a formatted object and return it
      const uniObject = {
        id: row[0],
        name: row[1],
        city: row[2],
        state: row[3],
        link: row[4],
      };
      formattedResults.push(uniObject);
    }
    return formattedResults;
  }

  console.error("There was an error parsing the csv");
  return null;
};
