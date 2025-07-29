---
"react-native-gesture-image-viewer": minor
---

feat: add event system with useGestureViewerEvent hook

- Add zoomChange and rotationChange event support
- Add comprehensive TypeScript support with proper event data typing
- Update README with usage examples and API documentation

Example usage:

```tsx
import { GestureViewer, useGestureViewerEvent } from 'react-native-gesture-image-viewer';

function App() {
  // Listen to zoom changes on the default instance (ID: 'default')
  useGestureViewerEvent('zoomChange', (data) => {
    console.log(`Zoom changed from ${data.previousScale} to ${data.scale}`);
  });

  // Listen to rotation changes on the default instance (ID: 'default')
  useGestureViewerEvent('rotationChange', (data) => {
    console.log(`Rotation changed from ${data.previousRotation}° to ${data.rotation}°`);
  });

  // Listen to events on a specific instance
  useGestureViewerEvent('gallery', 'zoomChange', (data) => {
    console.log(`Gallery zoom: ${data.scale}x`);
  });

  return (
    <GestureViewer
      data={images}
      renderItem={renderImage}
    />
  );
}
```
