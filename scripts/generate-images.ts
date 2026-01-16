import OpenAI from 'openai';
import fs from 'fs';
import path from 'path';
import https from 'https';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const IMAGES_DIR = path.join(process.cwd(), 'public', 'images', 'generated');

// Ensure directory exists
if (!fs.existsSync(IMAGES_DIR)) {
  fs.mkdirSync(IMAGES_DIR, { recursive: true });
}

interface ImagePrompt {
  name: string;
  prompt: string;
  size: '1024x1024' | '1536x1024' | '1024x1536';
}

const imagePrompts: ImagePrompt[] = [
  // Hero Images
  {
    name: 'hero-bali-coast',
    prompt: `A breathtaking panoramic view of a pristine Balinese coastline at golden hour. Crystal clear turquoise waters gently lap against clean white sand beach. In the background, lush green tropical vegetation and traditional Balinese architecture silhouettes. The scene radiates peace, restoration, and natural beauty. Cinematic photography style, warm golden lighting, no pollution visible. Sacred temple spire visible in the distance. Ultra high quality, 8K resolution aesthetic.`,
    size: '1536x1024'
  },
  {
    name: 'hero-rice-terraces',
    prompt: `Stunning aerial view of Balinese rice terraces at sunrise. Emerald green terraced fields cascade down hillsides, perfectly maintained with traditional subak irrigation. Morning mist rises gently between the terraces. A few Balinese farmers in traditional attire work in the distance. The scene embodies harmony between humans and nature, sustainable agriculture, and timeless beauty. Warm golden light, cinematic photography, ultra high quality.`,
    size: '1536x1024'
  },
  // Environmental Contrast
  {
    name: 'restored-river',
    prompt: `A crystal clear Balinese river flowing through a lush jungle. The water is pristine and transparent, revealing smooth stones on the riverbed. Tropical flowers and ferns line the banks. Sunlight filters through the dense canopy creating dappled light patterns on the water. A traditional Balinese stone bridge is visible. The scene represents environmental restoration and natural purity. Ultra high quality photography.`,
    size: '1536x1024'
  },
  // Community
  {
    name: 'community-gathering',
    prompt: `A vibrant Balinese community gathering in a traditional village setting. Diverse group of Balinese people of various ages in traditional and modern attire, working together outdoors. The setting is a clean, beautiful village square with traditional architecture. People are engaged in collaborative work with a spirit of togetherness. Warm, natural lighting, authentic and dignified portrayal. Documentary photography style.`,
    size: '1536x1024'
  },
  {
    name: 'banjar-meeting',
    prompt: `A traditional Balinese Banjar community meeting in an open-air pavilion (bale banjar). Respectful gathering of Balinese community members seated in traditional style. Beautiful carved stone and wood architecture with traditional Balinese decorations. Natural lighting, warm and inviting atmosphere. The scene conveys community cooperation, cultural tradition, and local governance. Authentic documentary style.`,
    size: '1536x1024'
  },
  // Processing & Operations
  {
    name: 'processing-facility',
    prompt: `A modern, clean waste processing facility in a tropical setting. The building features sustainable architecture with natural ventilation, solar panels, and green landscaping. Workers in professional attire operate efficient sorting systems. The facility is orderly, bright, and represents world-class environmental technology. Tropical plants and Balinese design elements integrate with modern industrial functionality. Professional photography.`,
    size: '1536x1024'
  },
  {
    name: 'collection-team',
    prompt: `A professional Balinese waste collection team at work in a clean village setting. Team members wear smart, branded uniforms and operate a modern collection vehicle. They interact respectfully with community members. The scene shows professionalism, local employment, and community service. Traditional Balinese architecture visible in background. Morning light, documentary photography style.`,
    size: '1536x1024'
  },
  // Circular Economy
  {
    name: 'composting-garden',
    prompt: `Beautiful organic composting and garden area in Bali. Rich, dark compost being used in a traditional Balinese garden with tropical plants, vegetables, and flowers. A Balinese farmer tends to the healthy plants. The scene shows the circular economy in action - waste becoming resource. Lush greenery, warm sunlight, traditional Balinese garden structures. Natural photography.`,
    size: '1024x1024'
  },
  // Temple & Sacred Spaces
  {
    name: 'temple-offerings',
    prompt: `Close-up of beautiful traditional Balinese offerings (canang sari) made from natural materials. Intricate arrangements of flowers, rice, and leaves on clean woven palm baskets. The offerings rest on carved stone at a temple entrance. Soft morning light, sacred atmosphere. The image represents Balinese spirituality and the use of natural, biodegradable materials. Artistic macro photography.`,
    size: '1024x1024'
  },
  {
    name: 'sacred-water-temple',
    prompt: `The famous Tirta Empul water temple in Bali with crystal clear sacred spring water. The temple pools are pristine and pure, surrounded by traditional carved stone architecture. Devotees in traditional white attire participate in purification ritual. The scene embodies Parahyangan - harmony with the spiritual. Mystical atmosphere with soft lighting and gentle water flow. Reverent documentary photography.`,
    size: '1536x1024'
  },
  // Partnership
  {
    name: 'partnership-handshake',
    prompt: `Abstract artistic representation of partnership and collaboration. Two hands reaching toward each other - one adorned with traditional Balinese jewelry and patterns, the other representing modern professionalism. Golden light emanates from where they meet. The background features subtle Balinese sacred geometry patterns blending with clean modern design. Symbolic, artistic, and dignified. High contrast, dramatic lighting.`,
    size: '1024x1024'
  },
  // Impact
  {
    name: 'clean-beach-sunset',
    prompt: `A perfectly clean Balinese beach at sunset with dramatic sky colors - deep oranges, purples, and golds. Silhouettes of traditional jukung fishing boats rest on the pristine sand. The ocean reflects the sky colors in its calm surface. No plastic, no pollution - just pure natural beauty restored. The scene represents hope, restoration, and Bali's natural magnificence. Cinematic photography.`,
    size: '1536x1024'
  },
  {
    name: 'children-nature',
    prompt: `Joyful Balinese children playing in a clean natural environment - perhaps by a river or in a garden. The children wear casual clothing and express genuine happiness. The setting is beautiful - clean water, lush vegetation, traditional village elements visible. The image represents intergenerational wellbeing and a healthy future for Bali's children. Natural light, candid documentary style.`,
    size: '1536x1024'
  },
  // Patterns and Textures
  {
    name: 'temple-carving-pattern',
    prompt: `Detailed close-up of traditional Balinese temple stone carving. Intricate geometric and floral patterns typical of sacred Balinese architecture. The carved stone shows beautiful patina and moss in crevices. Dramatic side lighting emphasizes the depth and artistry of the carving. Can be used as texture or pattern background. High detail, artistic macro photography.`,
    size: '1024x1024'
  },
  {
    name: 'woven-offering-texture',
    prompt: `Overhead view of traditional Balinese woven palm leaf patterns used in offerings and ceremonies. Beautiful geometric interlocking patterns in natural green palm with occasional flowers. The weaving shows incredible craftsmanship and sacred geometry. Clean, organized composition suitable for background texture. Soft natural lighting, high detail photography.`,
    size: '1024x1024'
  }
];

async function downloadImage(url: string, filepath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {}); // Delete the file on error
      reject(err);
    });
  });
}

async function generateImage(imagePrompt: ImagePrompt): Promise<void> {
  const filepath = path.join(IMAGES_DIR, `${imagePrompt.name}.png`);
  
  // Skip if already exists
  if (fs.existsSync(filepath)) {
    console.log(`⏭️  Skipping ${imagePrompt.name} (already exists)`);
    return;
  }

  console.log(`🎨 Generating: ${imagePrompt.name}...`);
  
  try {
    const response = await openai.images.generate({
      model: "gpt-image-1",
      prompt: imagePrompt.prompt,
      n: 1,
      size: imagePrompt.size,
      quality: "high"
    });

    const imageUrl = response.data[0]?.url || response.data[0]?.b64_json;
    
    if (imageUrl) {
      if (imageUrl.startsWith('http')) {
        await downloadImage(imageUrl, filepath);
      } else {
        // Base64 encoded
        const buffer = Buffer.from(imageUrl, 'base64');
        fs.writeFileSync(filepath, buffer);
      }
      console.log(`✅ Generated: ${imagePrompt.name}`);
    } else {
      console.error(`❌ No image URL returned for ${imagePrompt.name}`);
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`❌ Error generating ${imagePrompt.name}:`, error.message);
    } else {
      console.error(`❌ Error generating ${imagePrompt.name}:`, error);
    }
  }
}

async function main() {
  console.log('🌺 Elga Image Generation Script');
  console.log('================================\n');
  console.log(`📁 Output directory: ${IMAGES_DIR}\n`);
  
  if (!process.env.OPENAI_API_KEY) {
    console.error('❌ OPENAI_API_KEY environment variable is required');
    process.exit(1);
  }

  console.log(`🖼️  Generating ${imagePrompts.length} images...\n`);

  for (const prompt of imagePrompts) {
    await generateImage(prompt);
    // Small delay between requests
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  console.log('\n✨ Image generation complete!');
}

main().catch(console.error);
