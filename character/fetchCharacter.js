import { request, gql } from 'graphql-request';
import fs from 'fs';

const endpoint = 'https://rickandmortyapi.com/graphql';

const characterId = 4;

const query = gql`
  query {
    character(id: ${characterId}) {
      id
      name
      status
      species
      type
      gender
    }
  }
`;

request(endpoint, query)
  .then((data) => {
    console.log(data);
    fs.writeFileSync(`character-id-${characterId}-output.json`, JSON.stringify(data, null, 2));
    console.log(`Output saved to character-id-${characterId}-output.json`);
  })
  .catch((error) => console.error(error));
