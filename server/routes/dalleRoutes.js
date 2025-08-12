import express from 'express';
import axios from 'axios';
import * as dotenv from 'dotenv';
import FormData from 'form-data';
dotenv.config();

const router = express.Router();

router.route('/generate').post(async (req, res) => {
  const { prompt } = req.body;

  try {
    const form = new FormData();
    form.append('prompt', prompt);
    form.append('output_format', 'jpeg');

    const response = await axios.post(
      'https://api.stability.ai/v2beta/stable-image/generate/sd3',
      form,
      {
        headers: {
          ...form.getHeaders(),
          Authorization: `Bearer ${process.env.STABILITY_API_KEY}`,
          Accept: 'application/json',
        },
      }
    );

    const image = response.data.image;
    res.status(200).json({ photo: image });
  } catch (error) {
    console.error('Error generating image:', error?.response?.data || error.message);
    res.status(500).json({ error: error?.response?.data || error.message });
    
  }
});

export default router;
