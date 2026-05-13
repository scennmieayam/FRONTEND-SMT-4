import clientPromise from '../../../lib/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  const { id } = req.query;
  const client = await clientPromise;
  const db = client.db(process.env.DB_NAME);

  switch (req.method) {
    case 'GET':
      const product = await db.collection('products').findOne({ _id: new ObjectId(id) });
      if (!product) return res.status(404).json({ message: 'Product not found' });
      res.status(200).json(product);
      break;
    case 'DELETE':
      const result = await db.collection('products').deleteOne({ _id: new ObjectId(id) });
      res.status(200).json(result);
      break;
    default:
      res.setHeader('Allow', ['GET', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
