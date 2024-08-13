// Importing Modules/Packages
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Outlet } from 'react-router-dom';

let gqlServerURI = 'http://localhost:5000/api/GraphQL';

if (location.hostname != 'localhost') {
  gqlServerURI = '/api/GraphQL';
}

// Creating ApolloClient for sending, and Receiving GraphQL Queries/Mutations
const client = new ApolloClient({
  uri: gqlServerURI,
  cache: new InMemoryCache()
});

export default function App() {
  // Returning Components/JSX
  return (
    <ApolloProvider client={client}>
      <Outlet />
    </ApolloProvider>
  )
}