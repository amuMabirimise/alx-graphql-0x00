import { request, gql } from 'graphql-request';
import fs from 'fs';

const endpoint = 'https://rickandmortyapi.com/graphql';


const fetchData = async (page) => {
  const query = gql`
    query {
      characters(page: ${page}) {
        results {
          id
          name
          status
          image
        }
      }
    }
  `;

  try {
    const data = await request(endpoint, query);
    const fileName = `characters-page-${page}-output.json`;
    fs.writeFileSync(fileName, JSON.stringify(data, null, 2));
    console.log(`Output saved to ${fileName}`);
  } catch (error) {
    console.error(`Error fetching data for page ${page}:`, error);
  }
};


fetchData(1);
fetchData(2);
fetchData(3);
fetchData(4);
