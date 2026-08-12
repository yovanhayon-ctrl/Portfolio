# Folder Gambar

Berisi foto profil, gambar pratinjau, dan thumbnail project yang dipakai di `index.html`.

## Berkas yang dipakai di halaman

| Berkas                 | Dimensi   | Dipakai di                                    |
| ---------------------- | --------- | --------------------------------------------- |
| `Yoseph Kewena.jpeg`   | 1200×1600 | Foto profil di hero dan section About         |
| `bengkel.jpg`          | 900×456   | Thumbnail project Web Bengkel Mobil           |
| `SneakHub.jpg`         | 900×406   | Thumbnail project SneakHub                    |
| `rmsaungtiga.jpg`      | 900×488   | Thumbnail project Website Rumah Makan         |
| `og-preview.jpg`       | 1200×630  | Pratinjau saat tautan dibagikan (Open Graph)  |

## Berkas yang tidak dipakai di halaman

| Berkas       | Keterangan                                   |
| ------------ | -------------------------------------------- |
| `hero.jpg`   | Dipakai di README utama, dan sebagai sumber `og-preview.jpg` |
| `me.jpg`     | Tidak dirujuk di mana pun                    |
| `Yoseph.jpg` | Tidak dirujuk di mana pun                    |

## Kalau mengganti gambar

Perkecil dulu sebelum dimasukkan. Foto langsung dari kamera biasanya berukuran
3000 piksel lebih, padahal thumbnail project hanya tampil sekitar 400 piksel —
selisihnya membuat halaman jauh lebih berat tanpa manfaat yang terlihat.

Ukuran yang memadai:

- **Thumbnail project** — lebar 900 px
- **Foto profil** — sisi terpanjang 1600 px
- **Kualitas JPEG** — 80–85, sudah cukup dan hemat

Setelah mengganti, sesuaikan juga atribut `width` dan `height` pada tag `<img>`
di `index.html`. Atribut itu memberi tahu browser rasio gambar sejak awal supaya
tata letak tidak melompat saat gambar selesai dimuat.

Nama berkas bersifat case-sensitive di GitHub Pages. `Foto.JPG` dan `foto.jpg`
dianggap dua berkas berbeda di sana, meski di Windows keduanya sama.
