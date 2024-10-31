import type { NextApiRequest, NextApiResponse } from 'next';
import cloudinary from '../../lib/cloudinary';

interface CloudinaryImage {
  url: string;
  public_id: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { nextCursor } = req.query; // Récupère nextCursor depuis les paramètres de la requête

    const search = cloudinary.search
      .expression(`folder:${process.env.CLOUDINARY_FOLDER}`)
      .sort_by('public_id', 'desc')
      .max_results(30);

    // Ajoute next_cursor uniquement si nextCursor existe et n'est pas null
    if (nextCursor && nextCursor !== "null") {
      search.next_cursor(nextCursor as string);
    }

    const response = await search.execute();

    const images: CloudinaryImage[] = response.resources.map((resource: any) => ({
      url: resource.secure_url,
      public_id: resource.public_id,
    }));

    res.status(200).json({
      images,
      nextCursor: response.next_cursor || null, // Renvoie le nextCursor pour la page suivante
    });
  } catch (error) {
    console.error("Erreur lors de la récupération des images :", error);
    res.status(500).json({ error: "Erreur lors de la récupération des images" });
  }
}
