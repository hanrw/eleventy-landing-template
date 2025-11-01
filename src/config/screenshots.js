// Screenshot gallery configuration
// Place your screenshot images in: public/screenshots/iphone/ and public/screenshots/ipad/
// Recommended sizes:
// - iPhone: 260px width, 9:16 aspect ratio (e.g., 260x462px)
// - iPad: 360px width, 4:3 aspect ratio (e.g., 360x480px)

export const screenshots = {
  count: 5,  // Total number of screenshots
  basePath: '/screenshots',  // Base path (public/ contents are copied to root)
  formats: ['avif', 'webp', 'png'],  // Supported formats in order of preference
  iphone: [
    "/screenshots/iphone/1.png",
    "/screenshots/iphone/2.png",
    "/screenshots/iphone/3.png",
    "/screenshots/iphone/4.png",
    "/screenshots/iphone/5.png"
  ],
  ipad: [
    "/screenshots/ipad/1.png",
    "/screenshots/ipad/2.png",
    "/screenshots/ipad/3.png"
  ]
};
