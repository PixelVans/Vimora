
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: '4lyrs821',    
  dataset: 'production',
  apiVersion: '2023-07-10',       
  useCdn: true,
});

