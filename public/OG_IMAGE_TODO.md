# Open Graph Image TODO

## Current Status
- Created `og-image.svg` as a placeholder
- Metadata references `/og-image.jpg`

## Action Required
Convert the SVG to JPG format with these specifications:
- **Size**: 1200 x 630 pixels
- **Format**: JPG (optimized, < 1MB)
- **Quality**: 85-90%

## Options to Create JPG:

### Option 1: Use an online converter
1. Upload `og-image.svg` to https://svgtojpg.com or similar
2. Download as 1200x630 JPG
3. Replace `og-image.jpg` in this directory

### Option 2: Use design tools
- Figma: Export as JPG 1200x630
- Canva: Create custom size 1200x630, export as JPG
- Photoshop: Export as JPG with quality 85-90%

### Option 3: Command line (if ImageMagick installed)
```bash
convert og-image.svg -resize 1200x630 -quality 90 og-image.jpg
```

## Design Recommendations
- Use Layn brand colors (#6366f1, #4f46e5)
- Include logo/brand name prominently
- Add tagline: "Turn Empty Spaces into Easy Income"
- Ensure text is readable when scaled down
- Test preview in Facebook Debugger and Twitter Card Validator

## Testing
After creating the JPG:
1. Facebook Debugger: https://developers.facebook.com/tools/debug/
2. Twitter Card Validator: https://cards-dev.twitter.com/validator
3. LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/
