# Artist reference images

Drop one image per artist into this folder, named exactly as below (the page tries
`.jpg`, then `.jpeg`, `.png`, `.webp` — any one of those extensions works, so pick
whichever format the image is already in). If no matching file is found, the
guide shows a "No image yet" placeholder instead of breaking.

Pick an image that's actually free to use — public-domain reproductions of the
artist's own work (e.g. from Wikimedia Commons for artists who died before ~1955),
or a photo/artwork you have the rights to. A handful of artists on this list are
still living or recently deceased (Banksy, Damien Hirst, Tracey Emin, Jeff Koons,
Christo and Jeanne-Claude, Emily Kame Kngwarreye's estate, etc.) — their work is
still under copyright, so use a licensed image or your own photo of a piece
inspired by their style rather than a straight copy of an original.

- images/artists/alberto-giacometti.jpg   (Alberto Giacometti)
- images/artists/alexander-calder.jpg   (Alexander Calder)
- images/artists/andy-goldsworthy.jpg   (Andy Goldsworthy)
- images/artists/andy-warhol.jpg   (Andy Warhol)
- images/artists/auguste-rodin.jpg   (Auguste Rodin)
- images/artists/banksy.jpg   (Banksy)
- images/artists/barbara-hepworth.jpg   (Barbara Hepworth)
- images/artists/beatrix-potter.jpg   (Beatrix Potter)
- images/artists/caravaggio.jpg   (Caravaggio)
- images/artists/christo-and-jeanne-claude.jpg   (Christo and Jeanne-Claude)
- images/artists/clarice-cliff.jpg   (Clarice Cliff)
- images/artists/claude-monet.jpg   (Claude Monet)
- images/artists/damien-hirst.jpg   (Damien Hirst)
- images/artists/edouard-manet.jpg   (Édouard Manet)
- images/artists/emily-kame-kngwarreye.jpg   (Emily Kame Kngwarreye)
- images/artists/frida-kahlo.jpg   (Frida Kahlo)
- images/artists/georges-seurat.jpg   (Georges Seurat)
- images/artists/gustav-klimt.jpg   (Gustav Klimt)
- images/artists/henri-matisse.jpg   (Henri Matisse)
- images/artists/henry-moore.jpg   (Henry Moore)
- images/artists/jackson-pollock.jpg   (Jackson Pollock)
- images/artists/jean-michel-basquiat.jpg   (Jean-Michel Basquiat)
- images/artists/jeff-koons.jpg   (Jeff Koons)
- images/artists/joan-miro.jpg   (Joan Miró)
- images/artists/keith-haring.jpg   (Keith Haring)
- images/artists/l-s-lowry.jpg   (L.S. Lowry)
- images/artists/mark-rothko.jpg   (Mark Rothko)
- images/artists/maud-lewis.jpg   (Maud Lewis)
- images/artists/pablo-picasso.jpg   (Pablo Picasso)
- images/artists/rembrandt-van-rijn.jpg   (Rembrandt van Rijn)
- images/artists/roy-lichtenstein.jpg   (Roy Lichtenstein)
- images/artists/salvador-dali.jpg   (Salvador Dalí)
- images/artists/tracey-emin.jpg   (Tracey Emin)
- images/artists/vincent-van-gogh.jpg   (Vincent van Gogh)
- images/artists/william-morris.jpg   (William Morris)

If you add a new artist, add them to the `ARTISTS` array in `js/site-data.js`
(each entry has a `slug` field — that's the expected filename here) and add a
matching `artists/<slug>.html` page (copy an existing one and change the
`data-slug` attribute and `<title>`).
