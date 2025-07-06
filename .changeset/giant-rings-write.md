---
"react-native-gesture-image-viewer": minor
---

feat: improve zoom gestures with focal point and boundary constraints

#### ✨ Features
- **Gesture Viewer**: Enhanced zoom gestures with focal point support
  - Pinch zoom now centers on the focal point between two fingers
  - Double-tap zoom centers on the tapped location
  - Added boundary constraints to prevent images from moving outside screen bounds

#### 🔧 Improvements
- **Performance**: Removed unnecessary `worklet` declarations and optimized gesture handling
