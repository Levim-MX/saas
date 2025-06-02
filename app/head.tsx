// app/head.tsx
export default function Head() {
  return (
    <>
      {/* رابط الأيقونة في مجلّد public */}
      <link rel="icon" href="/favicon.ico" />
      {/* إذا كان لديك PNG بدلاً من ICO:
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" /> */}
    </>
  );
}
