# AI/ML Engineer Portfolio - Design Style Guide

## Design Philosophy

### Visual Language
**Neo-Cybernetic Futurism**: The design embodies the intersection of human intelligence and artificial intelligence, creating a visual experience that feels like accessing the command center of an advanced AI entity. Every element should communicate mastery, precision, and cutting-edge expertise.

### Color Palette
**Primary Colors:**
- **Deep Cosmic Blue** (#0B1426) - Primary background, represents the depth of AI knowledge
- **Cyber Violet** (#6366F1) - Primary accent, signifies neural network connections
- **Electric Turquoise** (#14B8A6) - Secondary accent, represents data flow and energy
- **Sharp White** (#FFFFFF) - Text and highlights, ensures maximum contrast and clarity

**Supporting Colors:**
- **Neural Gray** (#1F2937) - Secondary backgrounds and panels
- **Data Silver** (#9CA3AF) - Secondary text and subtle elements
- **Void Black** (#000000) - Deep shadows and contrast areas

### Typography
**Primary Font**: "Inter" - Clean, modern sans-serif for maximum readability
**Display Font**: "JetBrains Mono" - Monospace for code elements and technical details
**Accent Font**: "Orbitron" - Futuristic display font for headings and special elements

**Hierarchy:**
- H1: 4rem, bold, letter-spacing: -0.02em
- H2: 2.5rem, semibold, letter-spacing: -0.01em
- H3: 1.875rem, medium
- Body: 1rem, regular, line-height: 1.6
- Code: 0.875rem, JetBrains Mono

## Visual Effects

### Core Libraries Implementation
1. **Anime.js** - Smooth micro-animations and UI transitions
2. **Matter.js** - Physics-based particle systems and neural node interactions
3. **p5.js** - Creative coding for neural network visualizations and data flows
4. **ECharts.js** - Interactive performance dashboards with custom cyber-styling
5. **Shader-park** - Advanced background effects and holographic textures
6. **PIXI.js** - High-performance visual effects and particle systems
7. **Splide.js** - Smooth project showcase carousels

### Animation Principles
- **Neural Pulse**: Gentle breathing animation on interactive elements (2s ease-in-out)
- **Data Flow**: Continuous particle streams along connection paths
- **Holographic Reveal**: Elements fade in with upward motion and glow effects
- **Quantum Hover**: 3D tilt transformation with neon edge lighting
- **Matrix Type**: Character-by-character text reveal with cursor trail

### Background Effects
**Primary**: Animated neural mesh with flowing data connections
- Nodes pulse with varying intensities based on user interaction
- Particle streams flow along connection pathways
- Subtle parallax movement on scroll

**Secondary**: Holographic grid pattern with depth layers
- Fading grid lines in cosmic blue
- Floating geometric shapes with soft glows
- Depth-based opacity changes

### Interactive Elements

#### Neural Network Nodes
- **Default**: Soft blue glow with subtle pulse
- **Hover**: Intensified glow, scale increase to 1.1x
- **Active**: Electric turquoise explosion, connecting lines illuminate

#### Project Cards
- **Default**: Dark panel with subtle border
- **Hover**: Lift effect (translateY: -8px), cyber-violet border glow
- **Active**: Holographic frame appears, content reveals

#### Buttons
- **Default**: Cyber-violet background, white text
- **Hover**: Electric turquoise accent, 3D tilt effect
- **Active**: Scale down (0.95x), inner shadow

### Header Effects
**Navigation Bar**: 
- Glassmorphism effect with backdrop blur
- Subtle neon border bottom
- Smooth color transitions on scroll

**Hero Section**:
- Neural mesh background with animated connections
- Floating particle systems
- Gradient text effects on main headline
- Subtle parallax on scroll

### Scroll Motion
- **Trigger**: Elements animate when top edge reaches 60% viewport
- **Timing**: 200ms ease-out transition
- **Movement**: Maximum 20px vertical translation
- **Stagger**: 100ms delay between grouped elements
- **Opacity**: 0.1 to 1.0 transition

### Hover Effects
**3D Tilt**: 
- Rotation: X-axis 5deg, Y-axis -5deg
- Scale: 1.05x
- Shadow: Soft glow in element's accent color

**Neural Glow**:
- Box-shadow: 0 0 30px rgba(99, 102, 241, 0.5)
- Transition: 300ms ease-in-out

**Holographic Reveal**:
- Border: 2px solid electric turquoise
- Background: Linear gradient overlay
- Content opacity: 0 to 1 transition

## Layout Principles

### Grid System
- **Desktop**: 12-column grid with 24px gutters
- **Tablet**: 8-column grid with 20px gutters  
- **Mobile**: 4-column grid with 16px gutters

### Spacing Scale
- **xs**: 4px
- **sm**: 8px
- **md**: 16px
- **lg**: 24px
- **xl**: 32px
- **2xl**: 48px
- **3xl**: 64px

### Component Hierarchy
1. **Navigation**: Fixed top, glassmorphism, z-index: 1000
2. **Hero**: Full viewport, neural background, centered content
3. **Content Sections**: Max-width 1200px, centered, 80px padding
4. **Cards**: Grid layout, consistent 24px gaps
5. **Footer**: Minimal, dark background, centered text

## Responsive Design
- **Desktop**: 1200px+ (Primary focus)
- **Tablet**: 768px - 1199px (Adaptive layouts)
- **Mobile**: 320px - 767px (Simplified interactions)

## Accessibility
- **Contrast Ratio**: Minimum 4.5:1 for all text
- **Focus States**: Visible outline with electric turquoise
- **Motion**: Respect prefers-reduced-motion
- **Color**: Never rely solely on color for information

## Technical Implementation
- **CSS Custom Properties**: For consistent color application
- **CSS Grid & Flexbox**: For layout systems
- **Transform3d**: For hardware-accelerated animations
- **Will-change**: For optimized animation performance
- **Intersection Observer**: For scroll-triggered animations