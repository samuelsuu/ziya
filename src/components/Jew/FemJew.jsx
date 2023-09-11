import React from 'react';

const amazonProductLinks = [
    "//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=ozioma6-20&language=en_US&marketplace=amazon&region=US&placement=B08S3H67B7&asins=B08S3H67B7&linkId=1b8e59313fb708d6c15ee01213040445&show_border=true&link_opens_in_new_window=true",
  "//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=ozioma6-20&language=en_US&marketplace=amazon&region=US&placement=B09371XPT5&asins=B09371XPT5&linkId=79b732f7480ad6af0586130f1c8300cb&show_border=true&link_opens_in_new_window=true",
  // Add more Amazon product links here
];

function FemJew() {
  return (
    <div>
    {amazonProductLinks.map((link, index) => (
      <div key={index}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          View Product Details
        </a>
      </div>
    ))}
  </div>
  );
}

export default FemJew;
