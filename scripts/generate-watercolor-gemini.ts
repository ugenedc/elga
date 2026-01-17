import { GoogleGenAI } from '@google/genai';
import fs from 'fs';
import path from 'path';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  console.error('❌ GEMINI_API_KEY environment variable is required');
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

const IMAGES_DIR = path.join(process.cwd(), 'public', 'images', 'generated');

// Ensure directory exists
if (!fs.existsSync(IMAGES_DIR)) {
  fs.mkdirSync(IMAGES_DIR, { recursive: true });
}

/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * 
 *   ARTISTIC VISION: "Sacred Waters" Watercolor Collection
 *   Using Imagen 4 Ultra - Absolute Highest Quality Model
 *   
 *   NATURAL COLOR PALETTE (No Yellow Tint):
 *   ───────────────────────────────────────
 *   • Soft teals and cerulean blues for water
 *   • Sage greens and deep forest greens for vegetation  
 *   • Warm terracotta and soft sienna for earth
 *   • Soft grays and stone colors for architecture
 *   • Coral and blush pinks for accents
 *   • Pure whites from paper showing through
 *   • Muted, natural tones - NO yellow or gold
 * 
 * ═══════════════════════════════════════════════════════════════════════════════
 */

const WATERCOLOR_STYLE = `
Create a fine art watercolor painting on textured cold-pressed paper. 
Delicate, ethereal quality with natural pigment bleeding and soft wet-on-wet effects. 
Semi-abstract interpretation where subjects dissolve into color washes at edges.

COLOR PALETTE (IMPORTANT - use these exact colors):
- Water: soft cerulean blue, pale teal, aquamarine
- Vegetation: sage green, forest green, olive
- Earth/figures: warm terracotta, soft sienna, dusty rose
- Architecture: warm stone gray, soft taupe
- Accents: coral pink, blush, soft peach
- DO NOT use yellow, gold, or amber tones anywhere
- Leave white paper visible for luminosity

TECHNIQUE: Loose gestural brushwork. Dreamlike contemplative mood. 
Museum-quality fine art watercolor. Single cohesive artwork.
`;

interface ImagePrompt {
  name: string;
  subject: string;
  description: string;
  aspectRatio: '16:9' | '1:1' | '9:16';
}

const imagePrompts: ImagePrompt[] = [
  // HERO IMAGES (16:9 for wide hero banners)
  {
    name: 'hero-bali-coast',
    subject: 'Balinese coastline at dawn',
    aspectRatio: '16:9',
    description: `Serene Balinese coastline at soft dawn light. Gentle turquoise and teal waters washing onto cream shore. Distant temple silhouette in soft sienna. Sky in pale blush pink fading to soft blue. Loose horizontal brushstrokes for water. Large white paper areas in sky. Peaceful, pure, sacred. Natural watercolor palette - NO yellow tones.`
  },
  {
    name: 'hero-rice-terraces',
    subject: 'Rice terraces at sunrise',
    aspectRatio: '16:9',
    description: `Cascading rice terraces in layers of soft sage and emerald greens. Morning mist as soft white and pale gray washes between terrace levels. Water reflections in pale teal. Tiny farmer figure in terracotta. Composition flows downward like water. Edges dissolve into color fields. Natural greens dominate - no yellow.`
  },

  // ENVIRONMENTAL (16:9 for section images)
  {
    name: 'restored-river',
    subject: 'Crystal clear river through jungle',
    aspectRatio: '16:9',
    description: `Clear river flowing through lush tropical jungle. Water in soft teals and pale cerulean. Jungle vegetation in deep forest greens and sage on banks. Dappled light as soft white spots. River stones as warm gray and sienna shapes. Ferns as single confident brushstrokes. Flowing organic composition. Fresh, clean, natural - no yellow cast.`
  },
  {
    name: 'clean-beach-sunset',
    subject: 'Pristine beach at dusk with fishing boats',
    aspectRatio: '16:9',
    description: `Dramatic sky in soft coral, dusty rose, and deep purple-gray washes. Traditional jukung fishing boat silhouettes in dark sienna with outriggers. Wet sand reflects sky in soft horizontal strokes. Ocean as deep teal band. Sun area is white paper glowing through. Romantic, hopeful. Coral and rose tones - NOT yellow.`
  },

  // COMMUNITY (16:9)
  {
    name: 'community-gathering',
    subject: 'Balinese community gathering',
    aspectRatio: '16:9',
    description: `Abstracted group of figures in terracotta, soft sienna, dusty coral. Figures merge symbolizing unity, painted loosely. Traditional architecture in background as warm stone gray shapes. Tropical vegetation as sage and forest green washes. Warm natural light, community spirit. Earth tones, no yellow.`
  },
  {
    name: 'banjar-meeting',
    subject: 'Traditional Banjar community meeting',
    aspectRatio: '16:9',
    description: `Open-air pavilion in sienna, umber, soft brown wood tones. Seated figures as soft terracotta and cream shapes. Carved details suggested with single dark strokes. Dappled light creating soft patterns. Dignified traditional atmosphere. Warm browns and earth tones, stone grays. No yellow.`
  },
  {
    name: 'children-nature',
    subject: 'Children playing in nature',
    aspectRatio: '16:9',
    description: `Joyful dynamic scene with small figures in movement. Children as warm coral, cream, soft terracotta shapes. Surrounding nature in fresh sage and teal greens. Splashes of water as white paper areas. Quick gestural brushstrokes capturing energy and joy. Greens and soft pinks - no yellow.`
  },

  // OPERATIONS (16:9)
  {
    name: 'processing-facility',
    subject: 'Sustainable facility in tropical setting',
    aspectRatio: '16:9',
    description: `Clean modern architecture in soft whites and pale grays with green roof. Solar panels as subtle geometric patterns. Tropical landscaping in sage and teal. Small worker figures as terracotta shapes. Mountains in distant background as soft blue-gray washes. Modern meets nature - clean, hopeful, sustainable.`
  },
  {
    name: 'collection-team',
    subject: 'Professional waste collection team',
    aspectRatio: '16:9',
    description: `Two or three dignified figures in matching forest green uniforms. Vehicle as geometric shape in deep teal-green. Traditional village as terracotta and warm stone shapes in background. Morning light as soft cream highlights. Professionalism, dignity, community service.`
  },

  // SQUARE IMAGES (1:1 for cards and textures)
  {
    name: 'composting-garden',
    subject: 'Organic garden with flourishing plants',
    aspectRatio: '1:1',
    description: `Rich earth at bottom in warm umber and sienna. Plants rising upward in verdant sage and emerald greens. Flowers as small dots of coral, blush pink, soft peach. Gardener figure in terracotta among plants. Vertical composition - soil to growth transformation. Abundant, lush, life-giving.`
  },
  {
    name: 'temple-offerings',
    subject: 'Traditional Balinese canang sari offerings',
    aspectRatio: '1:1',
    description: `Intimate view of woven palm leaf offerings in soft sage greens. Flowers as soft bursts of coral, magenta, cream, blush. Rice grains as tiny dots of cream and white. Incense smoke as ethereal pale gray wisps. Sacred stone beneath in warm gray and soft sienna. Reverent, spiritual. Natural colors.`
  },
  {
    name: 'sacred-water-temple',
    subject: 'Tirta Empul sacred water temple',
    aspectRatio: '16:9',
    description: `Crystal clear sacred pool in pale teals and soft cerulean. Ancient carved stone in warm gray and soft sienna. Figures in white ceremonial dress as pale cream shapes in water. Flowing water through loose horizontal strokes. Mystical spiritual atmosphere with misty soft edges. Blues and greens dominate, warm stone accents.`
  },
  {
    name: 'partnership-handshake',
    subject: 'Abstract partnership symbolism',
    aspectRatio: '1:1',
    description: `Two abstract organic forms reaching toward each other. One form in terracotta and soft sienna. Other form in cool teal and sage gray. Where they meet, colors blend beautifully. Subtle geometric patterns in background. Soft light from connection point. Most abstract piece - floating, ethereal, lots of white space.`
  },
  {
    name: 'temple-carving-pattern',
    subject: 'Balinese temple stone carving patterns',
    aspectRatio: '1:1',
    description: `Close-up abstract of sacred carved stone patterns. Geometric and floral motifs in warm stone grays and soft sienna. Shadows through layered washes. Some areas detailed, others dissolving into pure color. Ancient weathered quality. Contemplative and timeless.`
  },
  {
    name: 'woven-offering-texture',
    subject: 'Traditional palm leaf weaving patterns',
    aspectRatio: '1:1',
    description: `Overhead view of interlocking woven palm patterns. Natural greens - sage, olive, forest. Occasional small flowers as soft coral and cream accents. Precision of craft through careful linework. Edges dissolve into soft washes. Fresh, clean, harmonious.`
  }
];

function buildPrompt(image: ImagePrompt): string {
  return `${WATERCOLOR_STYLE}

${image.description.trim()}

Generate a beautiful watercolor painting of: ${image.subject}`;
}

async function generateImage(imagePrompt: ImagePrompt): Promise<void> {
  const filepath = path.join(IMAGES_DIR, `${imagePrompt.name}.png`);
  
  console.log(`\n🎨 Generating: ${imagePrompt.name}...`);
  console.log(`   Subject: ${imagePrompt.subject}`);
  
  const fullPrompt = buildPrompt(imagePrompt);
  
  try {
    // Use Imagen 4 Ultra - absolute highest quality model
    const response = await ai.models.generateImages({
      model: 'imagen-4.0-ultra-generate-001',
      prompt: fullPrompt,
      config: {
        numberOfImages: 1,
        aspectRatio: imagePrompt.aspectRatio,
        outputMimeType: 'image/png',
      },
    });

    // Extract image from response
    if (response.generatedImages && response.generatedImages.length > 0) {
      const imageData = response.generatedImages[0];
      if (imageData.image?.imageBytes) {
        const buffer = Buffer.from(imageData.image.imageBytes, 'base64');
        fs.writeFileSync(filepath, buffer);
        console.log(`   ✅ Saved: ${filepath}`);
        return;
      }
    }
    console.error(`   ❌ No image in response`);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`   ❌ Error: ${error.message}`);
    } else {
      console.error(`   ❌ Error:`, error);
    }
  }
}

async function main() {
  console.log(`
╔════════════════════════════════════════════════════════════════════════════╗
║                                                                            ║
║   🌺  ELGA "Sacred Waters" Watercolor Collection                           ║
║   Using Imagen 4 Ultra - Absolute Highest Quality                          ║
║                                                                            ║
║   Generating ${imagePrompts.length} watercolor paintings with NATURAL colors              ║
║   No yellow tint - soft teals, sage greens, terracotta, coral              ║
║                                                                            ║
╚════════════════════════════════════════════════════════════════════════════╝
`);

  console.log(`📁 Output directory: ${IMAGES_DIR}`);
  console.log(`🖼️  Images to generate: ${imagePrompts.length}`);
  
  const startTime = Date.now();

  for (let i = 0; i < imagePrompts.length; i++) {
    const prompt = imagePrompts[i];
    console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
    console.log(`Progress: ${i + 1}/${imagePrompts.length}`);
    
    await generateImage(prompt);
    
    // Small delay between requests
    if (i < imagePrompts.length - 1) {
      console.log(`   ⏳ Waiting before next generation...`);
      await new Promise(resolve => setTimeout(resolve, 3000));
    }
  }

  const elapsed = Math.round((Date.now() - startTime) / 1000);
  
  console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✨ Generation complete!

   Total time: ${Math.floor(elapsed / 60)}m ${elapsed % 60}s
   Output: ${IMAGES_DIR}

   Natural watercolor collection ready!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`);
}

main().catch(console.error);
