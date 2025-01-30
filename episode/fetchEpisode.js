// Using dynamic import for graphql-request
(async () => {
    const { request, gql } = await import('graphql-request');
    const fs = require('fs');
  
    const endpoint = 'https://rickandmortyapi.com/graphql';
  
    // Function to fetch and save data for a specific episode
    const fetchEpisodeData = async (episodeId) => {
      const query = gql`
        query {
          episode(id: ${episodeId}) {
            id
            name
            air_date
            episode
          }
        }
      `;
  
      try {
        const data = await request(endpoint, query);
        const fileName = `episode-page-${episodeId}-output.json`;
        fs.writeFileSync(fileName, JSON.stringify(data, null, 2));
        console.log(`Output saved to ${fileName}`);
      } catch (error) {
        console.error(`Error fetching data for episode ${episodeId}:`, error);
      }
    };
  
    // Fetch data for specific episodes (change the episode IDs as needed)
    await fetchEpisodeData(1);
    await fetchEpisodeData(2);
    await fetchEpisodeData(3);
    await fetchEpisodeData(4);
  })();
  