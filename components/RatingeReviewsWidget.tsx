"use client";

export default function RatingeReviewsWidget() {
  const srcDoc = `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      html, body { margin: 0; padding: 0; background: #F0F5FA; }
      #wrap { max-width: 1000px; margin: 0 auto; background: #F0F5FA; }
      * { --widget-bg: #F0F5FA !important; }
      [class*="widget"], [class*="container"], [class*="wrapper"], [class*="card-container"], [class*="review-container"] {
        background: #F0F5FA !important;
        box-shadow: none !important;
        border: none !important;
      }
    </style>
  </head>
  <body>
    <div id="wrap">
      <script
        defer
        src="https://dbwx2z9xa7qt9.cloudfront.net/bundle.js?cachebust=1749278434272"
        theme="light"
        footer="true"
        widget-type="carousel"
        token="6839fc5bba5748cf0918f081"
        apiurl="https://server.onlinereviews.tech/api/v0.0.9"
        stats="false"
        addReview="true"
        profile-pic="true"
        review-name="true"
        positive-stars="false"
        wl="true"
        wlndig="https://go.ratinge.com/hostao"
        lang="us"
      ></script>
    </div>
  </body>
</html>`;

  return (
    <iframe
      title="Hostao Reviews"
      srcDoc={srcDoc}
      className="w-full border-0"
      style={{ minHeight: 400 }}
      loading="lazy"
    />
  );
}
