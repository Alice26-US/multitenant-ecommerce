import configPromise from '@payload-config'
import { getPayload } from 'payload'

export default async function Home() {
try {
const payload = await getPayload({
        config: configPromise,
      })
       const data = await payload.find({
        collection: 'users',
        limit: 100,
     })
  
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
   </div>
  );
} catch (error) {
  console.error("Error fetching users:", error);
  return (
  <div>
    <p>Error loading <data value="users"></data></p>
  </div>
  );
}
}