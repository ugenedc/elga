import OpenAI from 'openai';
import fs from 'fs';
import path from 'path';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const IMAGES_DIR = path.join(process.cwd(), 'public', 'images', 'generated');

// Ensure directory exists
if (!fs.existsSync(IMAGES_DIR)) {
  fs.mkdirSync(IMAGES_DIR, { recursive: true });
}

/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * 
 *   ARTISTIC VISION: "Sacred Waters" Watercolor Collection
 * 
 *   A unified series of semi-abstract watercolor paintings that capture the 
 *   spiritual essence of Bali's relationship with nature and community.
 * 
 *   STYLE PILLARS:
 *   ─────────────
 *   • Soft, ethereal watercolor with natural pigment bleeding and wet-on-wet effects
 *   • Palette: Warm ochres, burnt sienna, sage greens, deep teals, soft golds, 
 *     cream whites, and touches of coral
 *   • Semi-abstract: Recognizable subjects dissolve at edges into pure color fields
 *   • White paper breathing through - not every inch is painted
 *   • Loose, gestural brushwork suggesting rather than defining
 *   • Organic shapes and flowing water-like movements
 *   • Spiritual, contemplative mood with golden hour warmth
 *   • Each piece feels like a meditation on its subject
 * 
 *   TECHNICAL CONSISTENCY:
 *   ─────────────────────
 *   • All images use similar base prompt structure for style unity
 *   • Soft focus, dreamlike quality
 *   • No harsh lines or photorealistic elements
 *   • Colors bleed and merge naturally at boundaries
 * 
 * ═══════════════════════════════════════════════════════════════════════════════
 */

const WATERCOLOR_STYLE_BASE = `
Subtle and ethereal fine art watercolor painting style. Delicate pigments bleeding softly on textured cold-pressed paper. 
Semi-abstract interpretation with recognizable subjects that dissolve into pure color washes at edges. 
Wet-on-wet technique with organic color bleeding. Areas of bare cream paper visible creating breathing space.
Soft, loose brushwork that suggests rather than defines. Dreamlike, contemplative, and spiritual mood.
Color palette: warm ochres, burnt sienna, sage greens, deep teals, soft antique gold, coral accents.
Fine art quality, museum-worthy watercolor painting. Single unified artwork, no collage or multiple frames.
Artistic and poetic interpretation, not photorealistic. Gentle gradients and soft edges throughout.
`;

interface ImagePrompt {
  name: string;
  subject: string;
  essence: string;
  size: '1024x1024' | '1536x1024' | '1024x1536';
}

const imagePrompts: ImagePrompt[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // HERO IMAGES - Grand, expansive, inviting
  // ═══════════════════════════════════════════════════════════════════════════
  {
    name: 'hero-bali-coast',
    subject: 'Balinese coastline at golden hour with temple silhouette',
    essence: `
      A sweeping horizontal composition of a serene Balinese coast. 
      Turquoise and teal waters wash into soft cream shoreline. 
      A distant temple spire rises in silhouette, painted in burnt sienna.
      The sky is a soft gradient from warm gold to pale coral to cream.
      Water ripples suggested with loose horizontal brushstrokes.
      The scene conveys peace, purity, and sacred connection to the ocean.
      Large areas of unpainted paper in the sky and beach create luminosity.
    `,
    size: '1536x1024'
  },
  {
    name: 'hero-rice-terraces',
    subject: 'Cascading rice terraces at sunrise with morning mist',
    essence: `
      Layered horizontal bands of emerald and sage green terraces.
      Morning mist rises as soft white and pale gold washes between layers.
      Tiny suggestion of a farmer figure in warm ochre, almost abstracted.
      Water in terrace pools reflects soft gold of sunrise.
      The composition cascades from top to bottom like flowing water.
      Captures the harmony of human cultivation with natural landscape.
      Terraces become more abstract and dissolved toward the edges.
    `,
    size: '1536x1024'
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ENVIRONMENTAL - Restoration, purity, natural beauty
  // ═══════════════════════════════════════════════════════════════════════════
  {
    name: 'restored-river',
    subject: 'Crystal clear river flowing through jungle',
    essence: `
      Central vertical flow of clear water in pale teals and soft blues.
      Lush vegetation on banks rendered in loose sage greens and deep teals.
      Dappled light suggested by golden spots scattered throughout.
      River stones shown as soft ochre and warm gray shapes beneath water.
      Ferns and tropical leaves painted with single confident brushstrokes.
      The movement of water conveyed through flowing, meandering brushwork.
      Represents renewal, cleansing, and nature's resilience.
    `,
    size: '1536x1024'
  },
  {
    name: 'clean-beach-sunset',
    subject: 'Pristine beach at sunset with traditional fishing boats',
    essence: `
      Dramatic sky in coral, soft orange, and deep purple-gray washes.
      Silhouettes of jukung boats as simple dark shapes with characteristic outriggers.
      The wet sand reflects sky colors in horizontal strokes.
      Ocean as a deep teal band with gentle wave suggestions.
      The sun itself is unpainted paper glowing through the watercolor.
      Evokes hope, beauty, and the reward of restoration efforts.
      Very loose and impressionistic in the sky, slightly more defined boats.
    `,
    size: '1536x1024'
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // COMMUNITY - Connection, cooperation, cultural pride
  // ═══════════════════════════════════════════════════════════════════════════
  {
    name: 'community-gathering',
    subject: 'Balinese community working together in village setting',
    essence: `
      Abstracted group of figures in warm earth tones - ochres, burnt sienna, soft reds.
      Figures are suggested rather than detailed, merging into each other symbolizing unity.
      Traditional architecture in background as geometric shapes in warm gray and terracotta.
      A sense of circular arrangement suggesting community gathering.
      Tropical vegetation as loose green washes framing the scene.
      Warm golden light suffusing the entire composition.
      The painting radiates togetherness, cooperation, and cultural strength.
    `,
    size: '1536x1024'
  },
  {
    name: 'banjar-meeting',
    subject: 'Traditional Banjar community meeting in open pavilion',
    essence: `
      Open-air pavilion structure in warm wood tones and deep shadows.
      Seated figures arranged in traditional formation, painted as soft shapes.
      Carved details of architecture suggested with single dark strokes.
      Warm light filtering through creating golden pools of color.
      The ceremonial dignity of the gathering conveyed through balanced composition.
      Earth tones dominate: ochre, burnt umber, warm gray, antique gold.
      Represents tradition, local governance, and community wisdom.
    `,
    size: '1536x1024'
  },
  {
    name: 'children-nature',
    subject: 'Children playing in clean natural environment',
    essence: `
      Joyful, dynamic composition with small figures in movement.
      Children rendered as warm-colored shapes - coral, ochre, cream.
      Surrounding nature in soft sage and emerald greens.
      Splashes of water or light around them as white paper.
      The energy of play captured in gestural, quick brushstrokes.
      A sense of innocence and hope for the future.
      Warm afternoon light creating a golden, protective atmosphere.
      The most joyful and energetic piece in the collection.
    `,
    size: '1536x1024'
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // OPERATIONS - Professionalism, local employment, dignity of work
  // ═══════════════════════════════════════════════════════════════════════════
  {
    name: 'processing-facility',
    subject: 'Modern sustainable facility integrated with tropical landscape',
    essence: `
      Clean architectural forms in soft grays and whites with green roof elements.
      Solar panels suggested as geometric patterns catching light.
      Tropical landscaping as loose green and teal washes surrounding.
      Small figures of workers as warm-colored shapes showing scale.
      The facility blends with rather than dominates the landscape.
      A sense of order and efficiency through balanced composition.
      Mountains or hills in the distant background as soft blue washes.
      Represents innovation, sustainability, and environmental harmony.
    `,
    size: '1536x1024'
  },
  {
    name: 'collection-team',
    subject: 'Professional collection team at work in village',
    essence: `
      Two or three figures in matching colors suggesting uniforms.
      Their forms are dignified and purposeful in posture.
      A vehicle suggested as a geometric shape in forest green.
      Traditional village architecture as background elements in warm terracotta.
      Morning light creating soft shadows and golden highlights.
      The scene conveys professionalism, service, and local pride.
      Community member figure in doorway suggesting positive interaction.
      Colors: forest green, warm ochre, cream, soft coral.
    `,
    size: '1536x1024'
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CIRCULAR ECONOMY - Regeneration, growth, natural cycles
  // ═══════════════════════════════════════════════════════════════════════════
  {
    name: 'composting-garden',
    subject: 'Organic garden with compost and flourishing plants',
    essence: `
      Rich, deep earth tones at bottom - burnt umber, dark ochre.
      Plants and vegetables rising upward in verdant greens and soft teals.
      Flowers as small dots and splashes of coral and gold.
      The transformation from soil to growth shown vertically.
      A gardener figure suggested as a warm shape among the plants.
      Traditional Balinese garden structure element in background.
      The painting celebrates the cycle of waste to resource to life.
      Abundant, lush feeling with organic flowing shapes.
    `,
    size: '1024x1024'
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SACRED & SPIRITUAL - Reverence, tradition, harmony
  // ═══════════════════════════════════════════════════════════════════════════
  {
    name: 'temple-offerings',
    subject: 'Traditional Balinese canang sari offerings',
    essence: `
      Intimate, centered composition of woven palm leaf offerings.
      Intricate patterns of the weaving suggested with fine linework.
      Flowers as soft bursts of coral, magenta, gold, and white.
      Rice grains as tiny dots of cream and gold.
      Incense smoke rising as ethereal gray wisps.
      Sacred stone or altar beneath in warm gray tones.
      Soft natural light creating reverent atmosphere.
      The most detailed piece but still maintaining watercolor looseness.
      Represents spirituality, tradition, and natural materials.
    `,
    size: '1024x1024'
  },
  {
    name: 'sacred-water-temple',
    subject: 'Tirta Empul water temple with sacred springs',
    essence: `
      Crystal clear pool in pale teals and soft blues dominating center.
      Ancient carved stone architecture as warm gray and ochre shapes.
      Figures in white ceremonial dress as pale shapes in water.
      The movement of flowing water through loose horizontal strokes.
      Spiritual atmosphere through misty, soft edges everywhere.
      Tropical greenery as backdrop in deep teals and sage.
      Light seems to emanate from the water itself.
      Conveys purification, sacredness, and harmony with the divine.
    `,
    size: '1536x1024'
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PARTNERSHIP & ABSTRACTION - Symbolism, connection
  // ═══════════════════════════════════════════════════════════════════════════
  {
    name: 'partnership-handshake',
    subject: 'Abstract representation of partnership and collaboration',
    essence: `
      Two abstract forms reaching toward each other from opposite sides.
      One form in traditional Balinese earth tones - burnt sienna, gold.
      The other in contemporary colors - deep teal, sage gray.
      Where they meet, colors blend and merge beautifully.
      Sacred geometric patterns subtly suggested in the background.
      Golden light emanating from the point of connection.
      The most abstract piece in the collection.
      Represents cross-cultural partnership and mutual respect.
      Floating, ethereal composition with lots of white space.
    `,
    size: '1024x1024'
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // TEXTURES & PATTERNS - Background and decorative elements
  // ═══════════════════════════════════════════════════════════════════════════
  {
    name: 'temple-carving-pattern',
    subject: 'Traditional Balinese temple stone carving patterns',
    essence: `
      Close-up abstract interpretation of sacred carved stone patterns.
      Geometric and floral motifs in warm grays and ochres.
      Shadows and depth created through layered washes.
      Some areas highly detailed, others dissolving into pure color.
      The ancient, weathered quality conveyed through color variation.
      Works as a subtle background texture while being art itself.
      Represents the depth of Balinese artistic heritage.
      Contemplative and timeless in feeling.
    `,
    size: '1024x1024'
  },
  {
    name: 'woven-offering-texture',
    subject: 'Traditional palm leaf weaving patterns',
    essence: `
      Overhead view of interlocking woven palm patterns.
      Natural greens in various tones creating geometric design.
      Occasional small flowers as soft color accents throughout.
      The precision of craft shown through careful linework.
      But edges and corners dissolve into soft washes.
      Works as decorative pattern element.
      Represents craftsmanship, tradition, and natural materials.
      Fresh, clean, and harmonious in overall feeling.
    `,
    size: '1024x1024'
  }
];

function buildPrompt(image: ImagePrompt): string {
  return `${image.essence.trim()}

${WATERCOLOR_STYLE_BASE.trim()}

Subject: ${image.subject}`;
}

async function generateImage(imagePrompt: ImagePrompt): Promise<void> {
  const filepath = path.join(IMAGES_DIR, `${imagePrompt.name}.png`);
  
  // Skip if already exists (remove this check to regenerate all)
  // if (fs.existsSync(filepath)) {
  //   console.log(`⏭️  Skipping ${imagePrompt.name} (already exists)`);
  //   return;
  // }

  console.log(`\n🎨 Generating: ${imagePrompt.name}...`);
  console.log(`   Subject: ${imagePrompt.subject}`);
  
  const fullPrompt = buildPrompt(imagePrompt);
  
  try {
    const response = await openai.images.generate({
      model: "gpt-image-1",
      prompt: fullPrompt,
      n: 1,
      size: imagePrompt.size,
      quality: "high"
    });

    const imageData = response.data?.[0];
    
    if (imageData?.b64_json) {
      const buffer = Buffer.from(imageData.b64_json, 'base64');
      fs.writeFileSync(filepath, buffer);
      console.log(`   ✅ Saved: ${filepath}`);
    } else if (imageData?.url) {
      // Download from URL
      const https = await import('https');
      const file = fs.createWriteStream(filepath);
      await new Promise<void>((resolve, reject) => {
        https.get(imageData.url!, (response) => {
          response.pipe(file);
          file.on('finish', () => {
            file.close();
            console.log(`   ✅ Saved: ${filepath}`);
            resolve();
          });
        }).on('error', reject);
      });
    } else {
      console.error(`   ❌ No image data returned`);
    }
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
║                                                                            ║
║   Generating ${imagePrompts.length} unique watercolor paintings for the Elga website      ║
║                                                                            ║
║   Style: Semi-abstract fine art watercolors                                ║
║   Theme: Bali's spiritual connection to nature & community                 ║
║   Palette: Warm ochres, sage greens, deep teals, antique gold              ║
║                                                                            ║
╚════════════════════════════════════════════════════════════════════════════╝
`);
  
  if (!process.env.OPENAI_API_KEY) {
    console.error('❌ OPENAI_API_KEY environment variable is required');
    console.log('\nSet it with: export OPENAI_API_KEY="your-key-here"');
    process.exit(1);
  }

  console.log(`📁 Output directory: ${IMAGES_DIR}`);
  console.log(`🖼️  Images to generate: ${imagePrompts.length}`);
  
  const startTime = Date.now();

  for (let i = 0; i < imagePrompts.length; i++) {
    const prompt = imagePrompts[i];
    console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
    console.log(`Progress: ${i + 1}/${imagePrompts.length}`);
    
    await generateImage(prompt);
    
    // Small delay between requests to be respectful to API
    if (i < imagePrompts.length - 1) {
      console.log(`   ⏳ Waiting before next generation...`);
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }

  const elapsed = Math.round((Date.now() - startTime) / 1000);
  
  console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✨ Generation complete!

   Total time: ${Math.floor(elapsed / 60)}m ${elapsed % 60}s
   Output: ${IMAGES_DIR}

   The "Sacred Waters" collection is ready for your website.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`);
}

main().catch(console.error);
