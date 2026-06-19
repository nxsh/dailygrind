# Daily Grind - Port Isaac

Website for Daily Grind coffee shop, Port Isaac, Cornwall.

**Live:** https://dailygrindportisaac.co.uk

## Tech

- React + Vite + TypeScript
- Hosted on Cloudflare Pages
- Domain via Cloudflare Registrar

## TODO

### Get indexed by Google (Google Search Console)

This is how the site gets found in Google search results.

1. Go to https://search.google.com/search-console
2. Click "Add property"
3. Choose "URL prefix" and enter: `https://dailygrindportisaac.co.uk`
4. For verification, choose "DNS record" method
   - It will give you a TXT record to add (something like `google-site-verification=xxxxxxxxxxxx`)
   - Go to Cloudflare dashboard -> dailygrindportisaac.co.uk -> DNS
   - Add a new record: Type = TXT, Name = @, Content = (paste the google verification string)
   - Go back to Search Console and click Verify
5. Once verified, go to "Sitemaps" in the left menu
6. Enter: `https://dailygrindportisaac.co.uk/sitemap.xml` and click Submit
7. Google will start crawling and indexing the site within a few days

**Note:** If you need help with this, ask Ryan (or his Claude instance) to add the DNS TXT record - the Cloudflare API token has DNS edit permissions.

### Set up Google Business Profile

This is what makes the business show up on Google Maps and in "coffee shop near me" searches. Much more important than the website for local discovery.

1. Go to https://business.google.com
2. Click "Add your business to Google"
3. Search for "Daily Grind Port Isaac" - it might already exist as an unclaimed listing
4. If it exists, click "Claim this business" and follow verification (usually a postcard to the shop address, or a phone call)
5. If it doesn't exist, create it:
   - Business name: Daily Grind
   - Category: Coffee shop
   - Address: 14 New Road, Port Isaac, PL29 3SB
   - Phone: (add the shop phone number)
   - Website: https://dailygrindportisaac.co.uk
   - Hours: fill in opening times
6. Add photos (use the same ones from the website gallery)
7. Once verified, the business will appear on Google Maps and in local search results

**This must be done by the business owner** as Google sends verification to the business address. It cannot be done remotely.

### Optional: Add a booking/ordering system

Options discussed:
- WhatsApp button (simplest - just links to wa.me with a pre-filled message)
- Simple contact form that emails the shop
- Full booking system with time slots
