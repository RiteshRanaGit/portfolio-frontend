# Assets Folder Structure

This folder contains all static assets for the portfolio application.

## Structure:
- **images/** - Portfolio images, profile pictures, project screenshots
- **icons/** - SVG icons and small graphics
- **fonts/** - Custom fonts (if needed)

## Usage Example:

```javascript
// Import images in your components
import profilePic from '../assets/images/profile.jpg';
import projectImg from '../assets/images/project1.png';

// Use in styled-components
const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

// In your component
<ProfileImage src={profilePic} alt="Profile" />
```

## Adding Images:
1. Add your images to the appropriate subfolder
2. Import them in your components
3. Use them as needed

## Supported Formats:
- Images: .jpg, .jpeg, .png, .gif, .svg, .webp
- Icons: .svg (preferred), .png
```