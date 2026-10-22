# Umm Rakan Premium Services

Bilingual (English / Arabic) static website for Umm Rakan Premium Services, Oman.
Every call to action opens WhatsApp on **+968 9655 2936**.

## Pages
- `index.html` Home with video cover
- `services.html` Six services in detail
- `projects.html` Photo gallery with lightbox
- `about.html` About, process and FAQ
- `contact.html` Quote form that opens WhatsApp with the message ready

## Change the cover video
Replace `video/hero.mp4` with the client's own footage and keep the file name.
- MP4 (H.264), 1280x720 or 1920x1080, 10 to 30 seconds, under 8 MB. It plays muted, looping and without sound.
- Replace `img/hero-poster.jpg` with a frame from the new video. It shows while the video loads.
- The current `hero.mp4` is a placeholder slideshow made from project photos.

## Change the WhatsApp number
Edit `PHONE` and `DISPLAY` at the top of `js/main.js`, then update the number shown in the HTML pages (search for `+968 9655 2936`).

## Edit text and translations
All English and Arabic text lives in `js/main.js` (`T.en` and `T.ar`). Please have a native Arabic speaker review the Arabic copy.

## Deploy
Plain static files, no build step. Two options:
1. **GitHub Pages**: Settings > Pages > Source: *GitHub Actions*. The workflow in `.github/workflows/pages.yml` publishes on every push to `main`.
2. Upload the whole folder to any web host.

## Photos
The photos in `img/` come from the client's own project images. Images that carried an old phone number watermark were left out.
