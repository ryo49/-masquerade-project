export async function GET() {
  return new Response(
    `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Google Site Verification</title>
</head>
<body>
  google-site-verification: googleTTrbdMB5RHdJyAKEmCSfPpNqK4YE-VKfifDhj-S0UWE.html
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
