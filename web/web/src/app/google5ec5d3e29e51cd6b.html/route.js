export async function GET() {
  return new Response(
    `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Google Site Verification</title>
</head>
<body>
  google-site-verification: google5ec5d3e29e51cd6b.html
</body>
</html>`,
    {
      status: 200,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
      },
    },
  );
}
