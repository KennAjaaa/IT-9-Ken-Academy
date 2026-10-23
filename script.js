/* ============================================================
   OCEANGLASS ACADEMY — INTERAKSI & DATA TUTORIAL
   HTML, CSS, dan JavaScript sengaja dipisahkan menjadi file berbeda.
   Data tutorial di bawah dapat dicari, difilter, disimpan, dan ditandai selesai.
   ============================================================ */
"use strict";

const CATEGORIES = [
  { id: "coding", emoji: "⌘", name: "Coding & Web", art: "art-code" },
  { id: "design", emoji: "✧", name: "Desain & Kreativitas", art: "art-design" },
  { id: "tech", emoji: "◉", name: "Teknologi & Komputer", art: "art-tech" },
  { id: "study", emoji: "▤", name: "Belajar & Produktivitas", art: "art-study" },
  { id: "life", emoji: "♡", name: "Kehidupan Sehari-hari", art: "art-life" },
  { id: "creative", emoji: "✿", name: "Kreativitas & Media", art: "art-creative" },
  { id: "business", emoji: "↗", name: "Bisnis & Karier", art: "art-business" },
  { id: "game", emoji: "♧", name: "Gaming & Komunitas", art: "art-game" },
  { id: "safety", emoji: "盾", name: "Keamanan Digital", art: "art-safety" },
  { id: "digital", emoji: "◎", name: "Tools Digital", art: "art-digital" }
];

const TUTORIALS = 
[
  {
    "id": 1,
    "category": "coding",
    "categoryName": "Coding & Web",
    "emoji": "⌘",
    "art": "art-code",
    "title": "Panduan langkah demi langkah: Struktur HTML yang rapi",
    "topic": "Struktur HTML yang rapi",
    "format": "panduan",
    "summary": "Pelajari struktur html yang rapi dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 12,
    "mood": "focus",
    "symbol": "✧",
    "steps": [
      [
        "Siapkan ruang kerja",
        "Buka folder proyek untuk struktur html yang rapi. Gunakan nama file yang jelas dan pastikan semua bahan yang dibutuhkan tersedia."
      ],
      [
        "Pahami tujuan",
        "Tulis hasil akhir yang ingin dicapai dari struktur html yang rapi. Pecah hasil tersebut menjadi bagian kecil yang bisa diuji satu per satu."
      ],
      [
        "Bangun versi sederhana",
        "Buat versi paling dasar terlebih dahulu. Fokus pada struktur dan fungsi inti sebelum menambahkan dekorasi atau fitur tambahan."
      ],
      [
        "Uji perilaku",
        "Coba alur utama dengan beberapa kondisi berbeda. Periksa console browser dan pastikan tidak ada error yang mengganggu."
      ],
      [
        "Rapikan dan aksesibilitas",
        "Periksa penamaan, jarak visual, label kontrol, serta perilaku keyboard. Pastikan tampilan tetap nyaman pada layar kecil."
      ],
      [
        "Simpan hasil",
        "Catat hal yang berhasil dan satu hal yang ingin diperbaiki. Simpan perubahan dengan nama yang mudah dikenali."
      ]
    ],
    "takeaways": [
      "Tujuan struktur html yang rapi perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan struktur html yang rapi pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "coding",
      "panduan",
      "beginner",
      "struktur"
    ]
  },
  {
    "id": 2,
    "category": "coding",
    "categoryName": "Coding & Web",
    "emoji": "⌘",
    "art": "art-code",
    "title": "Proyek mini: Membuat navigasi responsif",
    "topic": "Membuat navigasi responsif",
    "format": "proyek",
    "summary": "Proyek mini yang membantumu mempraktikkan membuat navigasi responsif dari perencanaan sampai evaluasi.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 28,
    "mood": "calm",
    "symbol": "↗",
    "steps": [
      [
        "Ruang lingkup proyek",
        "Tentukan hasil mini dari membuat navigasi responsif yang bisa selesai dalam satu sesi. Batasi fitur agar proyek tetap realistis."
      ],
      [
        "Pahami tujuan",
        "Tulis hasil akhir yang ingin dicapai dari membuat navigasi responsif. Pecah hasil tersebut menjadi bagian kecil yang bisa diuji satu per satu."
      ],
      [
        "Bangun versi sederhana",
        "Buat versi paling dasar terlebih dahulu. Fokus pada struktur dan fungsi inti sebelum menambahkan dekorasi atau fitur tambahan."
      ],
      [
        "Uji perilaku",
        "Coba alur utama dengan beberapa kondisi berbeda. Periksa console browser dan pastikan tidak ada error yang mengganggu."
      ],
      [
        "Rapikan dan aksesibilitas",
        "Periksa penamaan, jarak visual, label kontrol, serta perilaku keyboard. Pastikan tampilan tetap nyaman pada layar kecil."
      ],
      [
        "Simpan hasil",
        "Catat hal yang berhasil dan satu hal yang ingin diperbaiki. Simpan perubahan dengan nama yang mudah dikenali."
      ]
    ],
    "takeaways": [
      "Tujuan membuat navigasi responsif perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat navigasi responsif pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "coding",
      "proyek",
      "advanced",
      "membuat"
    ]
  },
  {
    "id": 3,
    "category": "coding",
    "categoryName": "Coding & Web",
    "emoji": "⌘",
    "art": "art-code",
    "title": "Checklist penerapan: Memahami selector CSS",
    "topic": "Memahami selector CSS",
    "format": "checklist",
    "summary": "Daftar periksa untuk menerapkan memahami selector css tanpa melewatkan hal penting.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 25,
    "mood": "calm",
    "symbol": "◈",
    "steps": [
      [
        "Periksa kesiapan",
        "Pastikan tujuan memahami selector css jelas dan semua bahan penting tersedia."
      ],
      [
        "Pahami tujuan",
        "Tulis hasil akhir yang ingin dicapai dari memahami selector css. Pecah hasil tersebut menjadi bagian kecil yang bisa diuji satu per satu."
      ],
      [
        "Bangun versi sederhana",
        "Buat versi paling dasar terlebih dahulu. Fokus pada struktur dan fungsi inti sebelum menambahkan dekorasi atau fitur tambahan."
      ],
      [
        "Uji perilaku",
        "Coba alur utama dengan beberapa kondisi berbeda. Periksa console browser dan pastikan tidak ada error yang mengganggu."
      ],
      [
        "Rapikan dan aksesibilitas",
        "Periksa penamaan, jarak visual, label kontrol, serta perilaku keyboard. Pastikan tampilan tetap nyaman pada layar kecil."
      ],
      [
        "Simpan hasil",
        "Catat hal yang berhasil dan satu hal yang ingin diperbaiki. Simpan perubahan dengan nama yang mudah dikenali."
      ]
    ],
    "takeaways": [
      "Tujuan memahami selector css perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan memahami selector css pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "coding",
      "checklist",
      "advanced",
      "memahami"
    ]
  },
  {
    "id": 4,
    "category": "coding",
    "categoryName": "Coding & Web",
    "emoji": "⌘",
    "art": "art-code",
    "title": "Panduan langkah demi langkah: Menggunakan CSS Grid",
    "topic": "Menggunakan CSS Grid",
    "format": "panduan",
    "summary": "Pelajari menggunakan css grid dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 18,
    "mood": "creative",
    "symbol": "✦",
    "steps": [
      [
        "Siapkan ruang kerja",
        "Buka folder proyek untuk menggunakan css grid. Gunakan nama file yang jelas dan pastikan semua bahan yang dibutuhkan tersedia."
      ],
      [
        "Pahami tujuan",
        "Tulis hasil akhir yang ingin dicapai dari menggunakan css grid. Pecah hasil tersebut menjadi bagian kecil yang bisa diuji satu per satu."
      ],
      [
        "Bangun versi sederhana",
        "Buat versi paling dasar terlebih dahulu. Fokus pada struktur dan fungsi inti sebelum menambahkan dekorasi atau fitur tambahan."
      ],
      [
        "Uji perilaku",
        "Coba alur utama dengan beberapa kondisi berbeda. Periksa console browser dan pastikan tidak ada error yang mengganggu."
      ],
      [
        "Rapikan dan aksesibilitas",
        "Periksa penamaan, jarak visual, label kontrol, serta perilaku keyboard. Pastikan tampilan tetap nyaman pada layar kecil."
      ],
      [
        "Simpan hasil",
        "Catat hal yang berhasil dan satu hal yang ingin diperbaiki. Simpan perubahan dengan nama yang mudah dikenali."
      ]
    ],
    "takeaways": [
      "Tujuan menggunakan css grid perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan menggunakan css grid pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "coding",
      "panduan",
      "medium",
      "menggunakan"
    ]
  },
  {
    "id": 5,
    "category": "coding",
    "categoryName": "Coding & Web",
    "emoji": "⌘",
    "art": "art-code",
    "title": "Panduan langkah demi langkah: Validasi form sederhana",
    "topic": "Validasi form sederhana",
    "format": "panduan",
    "summary": "Pelajari validasi form sederhana dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 12,
    "mood": "focus",
    "symbol": "◈",
    "steps": [
      [
        "Siapkan ruang kerja",
        "Buka folder proyek untuk validasi form sederhana. Gunakan nama file yang jelas dan pastikan semua bahan yang dibutuhkan tersedia."
      ],
      [
        "Pahami tujuan",
        "Tulis hasil akhir yang ingin dicapai dari validasi form sederhana. Pecah hasil tersebut menjadi bagian kecil yang bisa diuji satu per satu."
      ],
      [
        "Bangun versi sederhana",
        "Buat versi paling dasar terlebih dahulu. Fokus pada struktur dan fungsi inti sebelum menambahkan dekorasi atau fitur tambahan."
      ],
      [
        "Uji perilaku",
        "Coba alur utama dengan beberapa kondisi berbeda. Periksa console browser dan pastikan tidak ada error yang mengganggu."
      ],
      [
        "Rapikan dan aksesibilitas",
        "Periksa penamaan, jarak visual, label kontrol, serta perilaku keyboard. Pastikan tampilan tetap nyaman pada layar kecil."
      ],
      [
        "Simpan hasil",
        "Catat hal yang berhasil dan satu hal yang ingin diperbaiki. Simpan perubahan dengan nama yang mudah dikenali."
      ]
    ],
    "takeaways": [
      "Tujuan validasi form sederhana perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan validasi form sederhana pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "coding",
      "panduan",
      "beginner",
      "validasi"
    ]
  },
  {
    "id": 6,
    "category": "coding",
    "categoryName": "Coding & Web",
    "emoji": "⌘",
    "art": "art-code",
    "title": "Proyek mini: Validasi form sederhana",
    "topic": "Validasi form sederhana",
    "format": "proyek",
    "summary": "Proyek mini yang membantumu mempraktikkan validasi form sederhana dari perencanaan sampai evaluasi.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 21,
    "mood": "creative",
    "symbol": "⌘",
    "steps": [
      [
        "Ruang lingkup proyek",
        "Tentukan hasil mini dari validasi form sederhana yang bisa selesai dalam satu sesi. Batasi fitur agar proyek tetap realistis."
      ],
      [
        "Pahami tujuan",
        "Tulis hasil akhir yang ingin dicapai dari validasi form sederhana. Pecah hasil tersebut menjadi bagian kecil yang bisa diuji satu per satu."
      ],
      [
        "Bangun versi sederhana",
        "Buat versi paling dasar terlebih dahulu. Fokus pada struktur dan fungsi inti sebelum menambahkan dekorasi atau fitur tambahan."
      ],
      [
        "Uji perilaku",
        "Coba alur utama dengan beberapa kondisi berbeda. Periksa console browser dan pastikan tidak ada error yang mengganggu."
      ],
      [
        "Rapikan dan aksesibilitas",
        "Periksa penamaan, jarak visual, label kontrol, serta perilaku keyboard. Pastikan tampilan tetap nyaman pada layar kecil."
      ],
      [
        "Simpan hasil",
        "Catat hal yang berhasil dan satu hal yang ingin diperbaiki. Simpan perubahan dengan nama yang mudah dikenali."
      ]
    ],
    "takeaways": [
      "Tujuan validasi form sederhana perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan validasi form sederhana pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "coding",
      "proyek",
      "medium",
      "validasi"
    ]
  },
  {
    "id": 7,
    "category": "coding",
    "categoryName": "Coding & Web",
    "emoji": "⌘",
    "art": "art-code",
    "title": "Panduan langkah demi langkah: Manipulasi DOM",
    "topic": "Manipulasi DOM",
    "format": "panduan",
    "summary": "Pelajari manipulasi dom dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 25,
    "mood": "calm",
    "symbol": "〰",
    "steps": [
      [
        "Siapkan ruang kerja",
        "Buka folder proyek untuk manipulasi dom. Gunakan nama file yang jelas dan pastikan semua bahan yang dibutuhkan tersedia."
      ],
      [
        "Pahami tujuan",
        "Tulis hasil akhir yang ingin dicapai dari manipulasi dom. Pecah hasil tersebut menjadi bagian kecil yang bisa diuji satu per satu."
      ],
      [
        "Bangun versi sederhana",
        "Buat versi paling dasar terlebih dahulu. Fokus pada struktur dan fungsi inti sebelum menambahkan dekorasi atau fitur tambahan."
      ],
      [
        "Uji perilaku",
        "Coba alur utama dengan beberapa kondisi berbeda. Periksa console browser dan pastikan tidak ada error yang mengganggu."
      ],
      [
        "Rapikan dan aksesibilitas",
        "Periksa penamaan, jarak visual, label kontrol, serta perilaku keyboard. Pastikan tampilan tetap nyaman pada layar kecil."
      ],
      [
        "Simpan hasil",
        "Catat hal yang berhasil dan satu hal yang ingin diperbaiki. Simpan perubahan dengan nama yang mudah dikenali."
      ]
    ],
    "takeaways": [
      "Tujuan manipulasi dom perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan manipulasi dom pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "coding",
      "panduan",
      "advanced",
      "manipulasi"
    ]
  },
  {
    "id": 8,
    "category": "coding",
    "categoryName": "Coding & Web",
    "emoji": "⌘",
    "art": "art-code",
    "title": "Workflow praktis: Membuat modal dialog",
    "topic": "Membuat modal dialog",
    "format": "workflow",
    "summary": "Bangun alur kerja membuat modal dialog yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 21,
    "mood": "creative",
    "symbol": "⌘",
    "steps": [
      [
        "Siapkan ruang kerja",
        "Buka folder proyek untuk membuat modal dialog. Gunakan nama file yang jelas dan pastikan semua bahan yang dibutuhkan tersedia."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah membuat modal dialog dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Bangun versi sederhana",
        "Buat versi paling dasar terlebih dahulu. Fokus pada struktur dan fungsi inti sebelum menambahkan dekorasi atau fitur tambahan."
      ],
      [
        "Uji perilaku",
        "Coba alur utama dengan beberapa kondisi berbeda. Periksa console browser dan pastikan tidak ada error yang mengganggu."
      ],
      [
        "Rapikan dan aksesibilitas",
        "Periksa penamaan, jarak visual, label kontrol, serta perilaku keyboard. Pastikan tampilan tetap nyaman pada layar kecil."
      ],
      [
        "Simpan hasil",
        "Catat hal yang berhasil dan satu hal yang ingin diperbaiki. Simpan perubahan dengan nama yang mudah dikenali."
      ]
    ],
    "takeaways": [
      "Tujuan membuat modal dialog perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat modal dialog pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "coding",
      "workflow",
      "medium",
      "membuat"
    ]
  },
  {
    "id": 9,
    "category": "coding",
    "categoryName": "Coding & Web",
    "emoji": "⌘",
    "art": "art-code",
    "title": "Panduan langkah demi langkah: Menyimpan preferensi lokal",
    "topic": "Menyimpan preferensi lokal",
    "format": "panduan",
    "summary": "Pelajari menyimpan preferensi lokal dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 25,
    "mood": "calm",
    "symbol": "↗",
    "steps": [
      [
        "Siapkan ruang kerja",
        "Buka folder proyek untuk menyimpan preferensi lokal. Gunakan nama file yang jelas dan pastikan semua bahan yang dibutuhkan tersedia."
      ],
      [
        "Pahami tujuan",
        "Tulis hasil akhir yang ingin dicapai dari menyimpan preferensi lokal. Pecah hasil tersebut menjadi bagian kecil yang bisa diuji satu per satu."
      ],
      [
        "Bangun versi sederhana",
        "Buat versi paling dasar terlebih dahulu. Fokus pada struktur dan fungsi inti sebelum menambahkan dekorasi atau fitur tambahan."
      ],
      [
        "Uji perilaku",
        "Coba alur utama dengan beberapa kondisi berbeda. Periksa console browser dan pastikan tidak ada error yang mengganggu."
      ],
      [
        "Rapikan dan aksesibilitas",
        "Periksa penamaan, jarak visual, label kontrol, serta perilaku keyboard. Pastikan tampilan tetap nyaman pada layar kecil."
      ],
      [
        "Simpan hasil",
        "Catat hal yang berhasil dan satu hal yang ingin diperbaiki. Simpan perubahan dengan nama yang mudah dikenali."
      ]
    ],
    "takeaways": [
      "Tujuan menyimpan preferensi lokal perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan menyimpan preferensi lokal pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "coding",
      "panduan",
      "advanced",
      "menyimpan"
    ]
  },
  {
    "id": 10,
    "category": "coding",
    "categoryName": "Coding & Web",
    "emoji": "⌘",
    "art": "art-code",
    "title": "Workflow praktis: Mencari bug di console",
    "topic": "Mencari bug di console",
    "format": "workflow",
    "summary": "Bangun alur kerja mencari bug di console yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 21,
    "mood": "creative",
    "symbol": "✧",
    "steps": [
      [
        "Siapkan ruang kerja",
        "Buka folder proyek untuk mencari bug di console. Gunakan nama file yang jelas dan pastikan semua bahan yang dibutuhkan tersedia."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah mencari bug di console dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Bangun versi sederhana",
        "Buat versi paling dasar terlebih dahulu. Fokus pada struktur dan fungsi inti sebelum menambahkan dekorasi atau fitur tambahan."
      ],
      [
        "Uji perilaku",
        "Coba alur utama dengan beberapa kondisi berbeda. Periksa console browser dan pastikan tidak ada error yang mengganggu."
      ],
      [
        "Rapikan dan aksesibilitas",
        "Periksa penamaan, jarak visual, label kontrol, serta perilaku keyboard. Pastikan tampilan tetap nyaman pada layar kecil."
      ],
      [
        "Simpan hasil",
        "Catat hal yang berhasil dan satu hal yang ingin diperbaiki. Simpan perubahan dengan nama yang mudah dikenali."
      ]
    ],
    "takeaways": [
      "Tujuan mencari bug di console perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mencari bug di console pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "coding",
      "workflow",
      "medium",
      "mencari"
    ]
  },
  {
    "id": 11,
    "category": "coding",
    "categoryName": "Coding & Web",
    "emoji": "⌘",
    "art": "art-code",
    "title": "Latihan mandiri: Menggunakan array dan object",
    "topic": "Menggunakan array dan object",
    "format": "latihan",
    "summary": "Latihan terarah untuk menerapkan menggunakan array dan object sambil mengecek pemahamanmu sendiri.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 18,
    "mood": "focus",
    "symbol": "↗",
    "steps": [
      [
        "Tantangan mini",
        "Coba lakukan menggunakan array dan object dalam skala kecil selama 10–15 menit. Tuliskan hasil yang ingin kamu capai sebelum mulai."
      ],
      [
        "Pahami tujuan",
        "Tulis hasil akhir yang ingin dicapai dari menggunakan array dan object. Pecah hasil tersebut menjadi bagian kecil yang bisa diuji satu per satu."
      ],
      [
        "Bangun versi sederhana",
        "Buat versi paling dasar terlebih dahulu. Fokus pada struktur dan fungsi inti sebelum menambahkan dekorasi atau fitur tambahan."
      ],
      [
        "Uji perilaku",
        "Coba alur utama dengan beberapa kondisi berbeda. Periksa console browser dan pastikan tidak ada error yang mengganggu."
      ],
      [
        "Rapikan dan aksesibilitas",
        "Periksa penamaan, jarak visual, label kontrol, serta perilaku keyboard. Pastikan tampilan tetap nyaman pada layar kecil."
      ],
      [
        "Simpan hasil",
        "Catat hal yang berhasil dan satu hal yang ingin diperbaiki. Simpan perubahan dengan nama yang mudah dikenali."
      ]
    ],
    "takeaways": [
      "Tujuan menggunakan array dan object perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan menggunakan array dan object pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "coding",
      "latihan",
      "beginner",
      "menggunakan"
    ]
  },
  {
    "id": 12,
    "category": "coding",
    "categoryName": "Coding & Web",
    "emoji": "⌘",
    "art": "art-code",
    "title": "Panduan langkah demi langkah: Membangun accordion",
    "topic": "Membangun accordion",
    "format": "panduan",
    "summary": "Pelajari membangun accordion dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 12,
    "mood": "focus",
    "symbol": "◈",
    "steps": [
      [
        "Siapkan ruang kerja",
        "Buka folder proyek untuk membangun accordion. Gunakan nama file yang jelas dan pastikan semua bahan yang dibutuhkan tersedia."
      ],
      [
        "Pahami tujuan",
        "Tulis hasil akhir yang ingin dicapai dari membangun accordion. Pecah hasil tersebut menjadi bagian kecil yang bisa diuji satu per satu."
      ],
      [
        "Bangun versi sederhana",
        "Buat versi paling dasar terlebih dahulu. Fokus pada struktur dan fungsi inti sebelum menambahkan dekorasi atau fitur tambahan."
      ],
      [
        "Uji perilaku",
        "Coba alur utama dengan beberapa kondisi berbeda. Periksa console browser dan pastikan tidak ada error yang mengganggu."
      ],
      [
        "Rapikan dan aksesibilitas",
        "Periksa penamaan, jarak visual, label kontrol, serta perilaku keyboard. Pastikan tampilan tetap nyaman pada layar kecil."
      ],
      [
        "Simpan hasil",
        "Catat hal yang berhasil dan satu hal yang ingin diperbaiki. Simpan perubahan dengan nama yang mudah dikenali."
      ]
    ],
    "takeaways": [
      "Tujuan membangun accordion perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membangun accordion pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "coding",
      "panduan",
      "beginner",
      "membangun"
    ]
  },
  {
    "id": 13,
    "category": "coding",
    "categoryName": "Coding & Web",
    "emoji": "⌘",
    "art": "art-code",
    "title": "Proyek mini: Membuat tombol tema gelap",
    "topic": "Membuat tombol tema gelap",
    "format": "proyek",
    "summary": "Proyek mini yang membantumu mempraktikkan membuat tombol tema gelap dari perencanaan sampai evaluasi.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 28,
    "mood": "calm",
    "symbol": "✦",
    "steps": [
      [
        "Ruang lingkup proyek",
        "Tentukan hasil mini dari membuat tombol tema gelap yang bisa selesai dalam satu sesi. Batasi fitur agar proyek tetap realistis."
      ],
      [
        "Pahami tujuan",
        "Tulis hasil akhir yang ingin dicapai dari membuat tombol tema gelap. Pecah hasil tersebut menjadi bagian kecil yang bisa diuji satu per satu."
      ],
      [
        "Bangun versi sederhana",
        "Buat versi paling dasar terlebih dahulu. Fokus pada struktur dan fungsi inti sebelum menambahkan dekorasi atau fitur tambahan."
      ],
      [
        "Uji perilaku",
        "Coba alur utama dengan beberapa kondisi berbeda. Periksa console browser dan pastikan tidak ada error yang mengganggu."
      ],
      [
        "Rapikan dan aksesibilitas",
        "Periksa penamaan, jarak visual, label kontrol, serta perilaku keyboard. Pastikan tampilan tetap nyaman pada layar kecil."
      ],
      [
        "Simpan hasil",
        "Catat hal yang berhasil dan satu hal yang ingin diperbaiki. Simpan perubahan dengan nama yang mudah dikenali."
      ]
    ],
    "takeaways": [
      "Tujuan membuat tombol tema gelap perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat tombol tema gelap pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "coding",
      "proyek",
      "advanced",
      "membuat"
    ]
  },
  {
    "id": 14,
    "category": "coding",
    "categoryName": "Coding & Web",
    "emoji": "⌘",
    "art": "art-code",
    "title": "Panduan langkah demi langkah: Membuat kartu dinamis",
    "topic": "Membuat kartu dinamis",
    "format": "panduan",
    "summary": "Pelajari membuat kartu dinamis dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 12,
    "mood": "focus",
    "symbol": "◈",
    "steps": [
      [
        "Siapkan ruang kerja",
        "Buka folder proyek untuk membuat kartu dinamis. Gunakan nama file yang jelas dan pastikan semua bahan yang dibutuhkan tersedia."
      ],
      [
        "Pahami tujuan",
        "Tulis hasil akhir yang ingin dicapai dari membuat kartu dinamis. Pecah hasil tersebut menjadi bagian kecil yang bisa diuji satu per satu."
      ],
      [
        "Bangun versi sederhana",
        "Buat versi paling dasar terlebih dahulu. Fokus pada struktur dan fungsi inti sebelum menambahkan dekorasi atau fitur tambahan."
      ],
      [
        "Uji perilaku",
        "Coba alur utama dengan beberapa kondisi berbeda. Periksa console browser dan pastikan tidak ada error yang mengganggu."
      ],
      [
        "Rapikan dan aksesibilitas",
        "Periksa penamaan, jarak visual, label kontrol, serta perilaku keyboard. Pastikan tampilan tetap nyaman pada layar kecil."
      ],
      [
        "Simpan hasil",
        "Catat hal yang berhasil dan satu hal yang ingin diperbaiki. Simpan perubahan dengan nama yang mudah dikenali."
      ]
    ],
    "takeaways": [
      "Tujuan membuat kartu dinamis perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat kartu dinamis pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "coding",
      "panduan",
      "beginner",
      "membuat"
    ]
  },
  {
    "id": 15,
    "category": "coding",
    "categoryName": "Coding & Web",
    "emoji": "⌘",
    "art": "art-code",
    "title": "Panduan langkah demi langkah: Merapikan proyek VS Code",
    "topic": "Merapikan proyek VS Code",
    "format": "panduan",
    "summary": "Pelajari merapikan proyek vs code dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 18,
    "mood": "creative",
    "symbol": "◎",
    "steps": [
      [
        "Siapkan ruang kerja",
        "Buka folder proyek untuk merapikan proyek vs code. Gunakan nama file yang jelas dan pastikan semua bahan yang dibutuhkan tersedia."
      ],
      [
        "Pahami tujuan",
        "Tulis hasil akhir yang ingin dicapai dari merapikan proyek vs code. Pecah hasil tersebut menjadi bagian kecil yang bisa diuji satu per satu."
      ],
      [
        "Bangun versi sederhana",
        "Buat versi paling dasar terlebih dahulu. Fokus pada struktur dan fungsi inti sebelum menambahkan dekorasi atau fitur tambahan."
      ],
      [
        "Uji perilaku",
        "Coba alur utama dengan beberapa kondisi berbeda. Periksa console browser dan pastikan tidak ada error yang mengganggu."
      ],
      [
        "Rapikan dan aksesibilitas",
        "Periksa penamaan, jarak visual, label kontrol, serta perilaku keyboard. Pastikan tampilan tetap nyaman pada layar kecil."
      ],
      [
        "Simpan hasil",
        "Catat hal yang berhasil dan satu hal yang ingin diperbaiki. Simpan perubahan dengan nama yang mudah dikenali."
      ]
    ],
    "takeaways": [
      "Tujuan merapikan proyek vs code perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan merapikan proyek vs code pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "coding",
      "panduan",
      "medium",
      "merapikan"
    ]
  },
  {
    "id": 16,
    "category": "coding",
    "categoryName": "Coding & Web",
    "emoji": "⌘",
    "art": "art-code",
    "title": "Workflow praktis: Membuat komponen kartu",
    "topic": "Membuat komponen kartu",
    "format": "workflow",
    "summary": "Bangun alur kerja membuat komponen kartu yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 15,
    "mood": "focus",
    "symbol": "〰",
    "steps": [
      [
        "Siapkan ruang kerja",
        "Buka folder proyek untuk membuat komponen kartu. Gunakan nama file yang jelas dan pastikan semua bahan yang dibutuhkan tersedia."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah membuat komponen kartu dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Bangun versi sederhana",
        "Buat versi paling dasar terlebih dahulu. Fokus pada struktur dan fungsi inti sebelum menambahkan dekorasi atau fitur tambahan."
      ],
      [
        "Uji perilaku",
        "Coba alur utama dengan beberapa kondisi berbeda. Periksa console browser dan pastikan tidak ada error yang mengganggu."
      ],
      [
        "Rapikan dan aksesibilitas",
        "Periksa penamaan, jarak visual, label kontrol, serta perilaku keyboard. Pastikan tampilan tetap nyaman pada layar kecil."
      ],
      [
        "Simpan hasil",
        "Catat hal yang berhasil dan satu hal yang ingin diperbaiki. Simpan perubahan dengan nama yang mudah dikenali."
      ]
    ],
    "takeaways": [
      "Tujuan membuat komponen kartu perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat komponen kartu pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "coding",
      "workflow",
      "beginner",
      "membuat"
    ]
  },
  {
    "id": 17,
    "category": "coding",
    "categoryName": "Coding & Web",
    "emoji": "⌘",
    "art": "art-code",
    "title": "Proyek mini: Membuat halaman profil",
    "topic": "Membuat halaman profil",
    "format": "proyek",
    "summary": "Proyek mini yang membantumu mempraktikkan membuat halaman profil dari perencanaan sampai evaluasi.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 21,
    "mood": "creative",
    "symbol": "✧",
    "steps": [
      [
        "Ruang lingkup proyek",
        "Tentukan hasil mini dari membuat halaman profil yang bisa selesai dalam satu sesi. Batasi fitur agar proyek tetap realistis."
      ],
      [
        "Pahami tujuan",
        "Tulis hasil akhir yang ingin dicapai dari membuat halaman profil. Pecah hasil tersebut menjadi bagian kecil yang bisa diuji satu per satu."
      ],
      [
        "Bangun versi sederhana",
        "Buat versi paling dasar terlebih dahulu. Fokus pada struktur dan fungsi inti sebelum menambahkan dekorasi atau fitur tambahan."
      ],
      [
        "Uji perilaku",
        "Coba alur utama dengan beberapa kondisi berbeda. Periksa console browser dan pastikan tidak ada error yang mengganggu."
      ],
      [
        "Rapikan dan aksesibilitas",
        "Periksa penamaan, jarak visual, label kontrol, serta perilaku keyboard. Pastikan tampilan tetap nyaman pada layar kecil."
      ],
      [
        "Simpan hasil",
        "Catat hal yang berhasil dan satu hal yang ingin diperbaiki. Simpan perubahan dengan nama yang mudah dikenali."
      ]
    ],
    "takeaways": [
      "Tujuan membuat halaman profil perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat halaman profil pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "coding",
      "proyek",
      "medium",
      "membuat"
    ]
  },
  {
    "id": 18,
    "category": "coding",
    "categoryName": "Coding & Web",
    "emoji": "⌘",
    "art": "art-code",
    "title": "Panduan langkah demi langkah: Membuat progress bar",
    "topic": "Membuat progress bar",
    "format": "panduan",
    "summary": "Pelajari membuat progress bar dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 25,
    "mood": "calm",
    "symbol": "↗",
    "steps": [
      [
        "Siapkan ruang kerja",
        "Buka folder proyek untuk membuat progress bar. Gunakan nama file yang jelas dan pastikan semua bahan yang dibutuhkan tersedia."
      ],
      [
        "Pahami tujuan",
        "Tulis hasil akhir yang ingin dicapai dari membuat progress bar. Pecah hasil tersebut menjadi bagian kecil yang bisa diuji satu per satu."
      ],
      [
        "Bangun versi sederhana",
        "Buat versi paling dasar terlebih dahulu. Fokus pada struktur dan fungsi inti sebelum menambahkan dekorasi atau fitur tambahan."
      ],
      [
        "Uji perilaku",
        "Coba alur utama dengan beberapa kondisi berbeda. Periksa console browser dan pastikan tidak ada error yang mengganggu."
      ],
      [
        "Rapikan dan aksesibilitas",
        "Periksa penamaan, jarak visual, label kontrol, serta perilaku keyboard. Pastikan tampilan tetap nyaman pada layar kecil."
      ],
      [
        "Simpan hasil",
        "Catat hal yang berhasil dan satu hal yang ingin diperbaiki. Simpan perubahan dengan nama yang mudah dikenali."
      ]
    ],
    "takeaways": [
      "Tujuan membuat progress bar perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat progress bar pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "coding",
      "panduan",
      "advanced",
      "membuat"
    ]
  },
  {
    "id": 19,
    "category": "coding",
    "categoryName": "Coding & Web",
    "emoji": "⌘",
    "art": "art-code",
    "title": "Workflow praktis: Membuat toast notification",
    "topic": "Membuat toast notification",
    "format": "workflow",
    "summary": "Bangun alur kerja membuat toast notification yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 21,
    "mood": "creative",
    "symbol": "✧",
    "steps": [
      [
        "Siapkan ruang kerja",
        "Buka folder proyek untuk membuat toast notification. Gunakan nama file yang jelas dan pastikan semua bahan yang dibutuhkan tersedia."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah membuat toast notification dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Bangun versi sederhana",
        "Buat versi paling dasar terlebih dahulu. Fokus pada struktur dan fungsi inti sebelum menambahkan dekorasi atau fitur tambahan."
      ],
      [
        "Uji perilaku",
        "Coba alur utama dengan beberapa kondisi berbeda. Periksa console browser dan pastikan tidak ada error yang mengganggu."
      ],
      [
        "Rapikan dan aksesibilitas",
        "Periksa penamaan, jarak visual, label kontrol, serta perilaku keyboard. Pastikan tampilan tetap nyaman pada layar kecil."
      ],
      [
        "Simpan hasil",
        "Catat hal yang berhasil dan satu hal yang ingin diperbaiki. Simpan perubahan dengan nama yang mudah dikenali."
      ]
    ],
    "takeaways": [
      "Tujuan membuat toast notification perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat toast notification pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "coding",
      "workflow",
      "medium",
      "membuat"
    ]
  },
  {
    "id": 20,
    "category": "coding",
    "categoryName": "Coding & Web",
    "emoji": "⌘",
    "art": "art-code",
    "title": "Panduan langkah demi langkah: Membuat halaman login demo",
    "topic": "Membuat halaman login demo",
    "format": "panduan",
    "summary": "Pelajari membuat halaman login demo dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 25,
    "mood": "calm",
    "symbol": "✦",
    "steps": [
      [
        "Siapkan ruang kerja",
        "Buka folder proyek untuk membuat halaman login demo. Gunakan nama file yang jelas dan pastikan semua bahan yang dibutuhkan tersedia."
      ],
      [
        "Pahami tujuan",
        "Tulis hasil akhir yang ingin dicapai dari membuat halaman login demo. Pecah hasil tersebut menjadi bagian kecil yang bisa diuji satu per satu."
      ],
      [
        "Bangun versi sederhana",
        "Buat versi paling dasar terlebih dahulu. Fokus pada struktur dan fungsi inti sebelum menambahkan dekorasi atau fitur tambahan."
      ],
      [
        "Uji perilaku",
        "Coba alur utama dengan beberapa kondisi berbeda. Periksa console browser dan pastikan tidak ada error yang mengganggu."
      ],
      [
        "Rapikan dan aksesibilitas",
        "Periksa penamaan, jarak visual, label kontrol, serta perilaku keyboard. Pastikan tampilan tetap nyaman pada layar kecil."
      ],
      [
        "Simpan hasil",
        "Catat hal yang berhasil dan satu hal yang ingin diperbaiki. Simpan perubahan dengan nama yang mudah dikenali."
      ]
    ],
    "takeaways": [
      "Tujuan membuat halaman login demo perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat halaman login demo pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "coding",
      "panduan",
      "advanced",
      "membuat"
    ]
  },
  {
    "id": 21,
    "category": "coding",
    "categoryName": "Coding & Web",
    "emoji": "⌘",
    "art": "art-code",
    "title": "Workflow praktis: Membuat timer fokus",
    "topic": "Membuat timer fokus",
    "format": "workflow",
    "summary": "Bangun alur kerja membuat timer fokus yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 21,
    "mood": "creative",
    "symbol": "◈",
    "steps": [
      [
        "Siapkan ruang kerja",
        "Buka folder proyek untuk membuat timer fokus. Gunakan nama file yang jelas dan pastikan semua bahan yang dibutuhkan tersedia."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah membuat timer fokus dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Bangun versi sederhana",
        "Buat versi paling dasar terlebih dahulu. Fokus pada struktur dan fungsi inti sebelum menambahkan dekorasi atau fitur tambahan."
      ],
      [
        "Uji perilaku",
        "Coba alur utama dengan beberapa kondisi berbeda. Periksa console browser dan pastikan tidak ada error yang mengganggu."
      ],
      [
        "Rapikan dan aksesibilitas",
        "Periksa penamaan, jarak visual, label kontrol, serta perilaku keyboard. Pastikan tampilan tetap nyaman pada layar kecil."
      ],
      [
        "Simpan hasil",
        "Catat hal yang berhasil dan satu hal yang ingin diperbaiki. Simpan perubahan dengan nama yang mudah dikenali."
      ]
    ],
    "takeaways": [
      "Tujuan membuat timer fokus perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat timer fokus pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "coding",
      "workflow",
      "medium",
      "membuat"
    ]
  },
  {
    "id": 22,
    "category": "coding",
    "categoryName": "Coding & Web",
    "emoji": "⌘",
    "art": "art-code",
    "title": "Latihan mandiri: Membuat kalkulator dasar",
    "topic": "Membuat kalkulator dasar",
    "format": "latihan",
    "summary": "Latihan terarah untuk menerapkan membuat kalkulator dasar sambil mengecek pemahamanmu sendiri.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 18,
    "mood": "focus",
    "symbol": "✦",
    "steps": [
      [
        "Tantangan mini",
        "Coba lakukan membuat kalkulator dasar dalam skala kecil selama 10–15 menit. Tuliskan hasil yang ingin kamu capai sebelum mulai."
      ],
      [
        "Pahami tujuan",
        "Tulis hasil akhir yang ingin dicapai dari membuat kalkulator dasar. Pecah hasil tersebut menjadi bagian kecil yang bisa diuji satu per satu."
      ],
      [
        "Bangun versi sederhana",
        "Buat versi paling dasar terlebih dahulu. Fokus pada struktur dan fungsi inti sebelum menambahkan dekorasi atau fitur tambahan."
      ],
      [
        "Uji perilaku",
        "Coba alur utama dengan beberapa kondisi berbeda. Periksa console browser dan pastikan tidak ada error yang mengganggu."
      ],
      [
        "Rapikan dan aksesibilitas",
        "Periksa penamaan, jarak visual, label kontrol, serta perilaku keyboard. Pastikan tampilan tetap nyaman pada layar kecil."
      ],
      [
        "Simpan hasil",
        "Catat hal yang berhasil dan satu hal yang ingin diperbaiki. Simpan perubahan dengan nama yang mudah dikenali."
      ]
    ],
    "takeaways": [
      "Tujuan membuat kalkulator dasar perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat kalkulator dasar pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "coding",
      "latihan",
      "beginner",
      "membuat"
    ]
  },
  {
    "id": 23,
    "category": "coding",
    "categoryName": "Coding & Web",
    "emoji": "⌘",
    "art": "art-code",
    "title": "Panduan langkah demi langkah: Membuat tooltip aksesibel",
    "topic": "Membuat tooltip aksesibel",
    "format": "panduan",
    "summary": "Pelajari membuat tooltip aksesibel dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 12,
    "mood": "focus",
    "symbol": "▤",
    "steps": [
      [
        "Siapkan ruang kerja",
        "Buka folder proyek untuk membuat tooltip aksesibel. Gunakan nama file yang jelas dan pastikan semua bahan yang dibutuhkan tersedia."
      ],
      [
        "Pahami tujuan",
        "Tulis hasil akhir yang ingin dicapai dari membuat tooltip aksesibel. Pecah hasil tersebut menjadi bagian kecil yang bisa diuji satu per satu."
      ],
      [
        "Bangun versi sederhana",
        "Buat versi paling dasar terlebih dahulu. Fokus pada struktur dan fungsi inti sebelum menambahkan dekorasi atau fitur tambahan."
      ],
      [
        "Uji perilaku",
        "Coba alur utama dengan beberapa kondisi berbeda. Periksa console browser dan pastikan tidak ada error yang mengganggu."
      ],
      [
        "Rapikan dan aksesibilitas",
        "Periksa penamaan, jarak visual, label kontrol, serta perilaku keyboard. Pastikan tampilan tetap nyaman pada layar kecil."
      ],
      [
        "Simpan hasil",
        "Catat hal yang berhasil dan satu hal yang ingin diperbaiki. Simpan perubahan dengan nama yang mudah dikenali."
      ]
    ],
    "takeaways": [
      "Tujuan membuat tooltip aksesibel perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat tooltip aksesibel pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "coding",
      "panduan",
      "beginner",
      "membuat"
    ]
  },
  {
    "id": 24,
    "category": "coding",
    "categoryName": "Coding & Web",
    "emoji": "⌘",
    "art": "art-code",
    "title": "Proyek mini: Mengatur variabel CSS",
    "topic": "Mengatur variabel CSS",
    "format": "proyek",
    "summary": "Proyek mini yang membantumu mempraktikkan mengatur variabel css dari perencanaan sampai evaluasi.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 28,
    "mood": "calm",
    "symbol": "◎",
    "steps": [
      [
        "Ruang lingkup proyek",
        "Tentukan hasil mini dari mengatur variabel css yang bisa selesai dalam satu sesi. Batasi fitur agar proyek tetap realistis."
      ],
      [
        "Pahami tujuan",
        "Tulis hasil akhir yang ingin dicapai dari mengatur variabel css. Pecah hasil tersebut menjadi bagian kecil yang bisa diuji satu per satu."
      ],
      [
        "Bangun versi sederhana",
        "Buat versi paling dasar terlebih dahulu. Fokus pada struktur dan fungsi inti sebelum menambahkan dekorasi atau fitur tambahan."
      ],
      [
        "Uji perilaku",
        "Coba alur utama dengan beberapa kondisi berbeda. Periksa console browser dan pastikan tidak ada error yang mengganggu."
      ],
      [
        "Rapikan dan aksesibilitas",
        "Periksa penamaan, jarak visual, label kontrol, serta perilaku keyboard. Pastikan tampilan tetap nyaman pada layar kecil."
      ],
      [
        "Simpan hasil",
        "Catat hal yang berhasil dan satu hal yang ingin diperbaiki. Simpan perubahan dengan nama yang mudah dikenali."
      ]
    ],
    "takeaways": [
      "Tujuan mengatur variabel css perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mengatur variabel css pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "coding",
      "proyek",
      "advanced",
      "mengatur"
    ]
  },
  {
    "id": 25,
    "category": "coding",
    "categoryName": "Coding & Web",
    "emoji": "⌘",
    "art": "art-code",
    "title": "Panduan langkah demi langkah: Membuat halaman 404",
    "topic": "Membuat halaman 404",
    "format": "panduan",
    "summary": "Pelajari membuat halaman 404 dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 12,
    "mood": "focus",
    "symbol": "▤",
    "steps": [
      [
        "Siapkan ruang kerja",
        "Buka folder proyek untuk membuat halaman 404. Gunakan nama file yang jelas dan pastikan semua bahan yang dibutuhkan tersedia."
      ],
      [
        "Pahami tujuan",
        "Tulis hasil akhir yang ingin dicapai dari membuat halaman 404. Pecah hasil tersebut menjadi bagian kecil yang bisa diuji satu per satu."
      ],
      [
        "Bangun versi sederhana",
        "Buat versi paling dasar terlebih dahulu. Fokus pada struktur dan fungsi inti sebelum menambahkan dekorasi atau fitur tambahan."
      ],
      [
        "Uji perilaku",
        "Coba alur utama dengan beberapa kondisi berbeda. Periksa console browser dan pastikan tidak ada error yang mengganggu."
      ],
      [
        "Rapikan dan aksesibilitas",
        "Periksa penamaan, jarak visual, label kontrol, serta perilaku keyboard. Pastikan tampilan tetap nyaman pada layar kecil."
      ],
      [
        "Simpan hasil",
        "Catat hal yang berhasil dan satu hal yang ingin diperbaiki. Simpan perubahan dengan nama yang mudah dikenali."
      ]
    ],
    "takeaways": [
      "Tujuan membuat halaman 404 perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat halaman 404 pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "coding",
      "panduan",
      "beginner",
      "membuat"
    ]
  },
  {
    "id": 26,
    "category": "coding",
    "categoryName": "Coding & Web",
    "emoji": "⌘",
    "art": "art-code",
    "title": "Latihan mandiri: Membuat halaman 404",
    "topic": "Membuat halaman 404",
    "format": "latihan",
    "summary": "Latihan terarah untuk menerapkan membuat halaman 404 sambil mengecek pemahamanmu sendiri.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 31,
    "mood": "calm",
    "symbol": "✧",
    "steps": [
      [
        "Tantangan mini",
        "Coba lakukan membuat halaman 404 dalam skala kecil selama 10–15 menit. Tuliskan hasil yang ingin kamu capai sebelum mulai."
      ],
      [
        "Pahami tujuan",
        "Tulis hasil akhir yang ingin dicapai dari membuat halaman 404. Pecah hasil tersebut menjadi bagian kecil yang bisa diuji satu per satu."
      ],
      [
        "Bangun versi sederhana",
        "Buat versi paling dasar terlebih dahulu. Fokus pada struktur dan fungsi inti sebelum menambahkan dekorasi atau fitur tambahan."
      ],
      [
        "Uji perilaku",
        "Coba alur utama dengan beberapa kondisi berbeda. Periksa console browser dan pastikan tidak ada error yang mengganggu."
      ],
      [
        "Rapikan dan aksesibilitas",
        "Periksa penamaan, jarak visual, label kontrol, serta perilaku keyboard. Pastikan tampilan tetap nyaman pada layar kecil."
      ],
      [
        "Simpan hasil",
        "Catat hal yang berhasil dan satu hal yang ingin diperbaiki. Simpan perubahan dengan nama yang mudah dikenali."
      ]
    ],
    "takeaways": [
      "Tujuan membuat halaman 404 perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat halaman 404 pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "coding",
      "latihan",
      "advanced",
      "membuat"
    ]
  },
  {
    "id": 27,
    "category": "coding",
    "categoryName": "Coding & Web",
    "emoji": "⌘",
    "art": "art-code",
    "title": "Workflow praktis: Mengoptimalkan gambar web",
    "topic": "Mengoptimalkan gambar web",
    "format": "workflow",
    "summary": "Bangun alur kerja mengoptimalkan gambar web yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 15,
    "mood": "focus",
    "symbol": "↗",
    "steps": [
      [
        "Siapkan ruang kerja",
        "Buka folder proyek untuk mengoptimalkan gambar web. Gunakan nama file yang jelas dan pastikan semua bahan yang dibutuhkan tersedia."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah mengoptimalkan gambar web dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Bangun versi sederhana",
        "Buat versi paling dasar terlebih dahulu. Fokus pada struktur dan fungsi inti sebelum menambahkan dekorasi atau fitur tambahan."
      ],
      [
        "Uji perilaku",
        "Coba alur utama dengan beberapa kondisi berbeda. Periksa console browser dan pastikan tidak ada error yang mengganggu."
      ],
      [
        "Rapikan dan aksesibilitas",
        "Periksa penamaan, jarak visual, label kontrol, serta perilaku keyboard. Pastikan tampilan tetap nyaman pada layar kecil."
      ],
      [
        "Simpan hasil",
        "Catat hal yang berhasil dan satu hal yang ingin diperbaiki. Simpan perubahan dengan nama yang mudah dikenali."
      ]
    ],
    "takeaways": [
      "Tujuan mengoptimalkan gambar web perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mengoptimalkan gambar web pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "coding",
      "workflow",
      "beginner",
      "mengoptimalkan"
    ]
  },
  {
    "id": 28,
    "category": "coding",
    "categoryName": "Coding & Web",
    "emoji": "⌘",
    "art": "art-code",
    "title": "Panduan langkah demi langkah: Membuat tabel responsif",
    "topic": "Membuat tabel responsif",
    "format": "panduan",
    "summary": "Pelajari membuat tabel responsif dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 18,
    "mood": "creative",
    "symbol": "✧",
    "steps": [
      [
        "Siapkan ruang kerja",
        "Buka folder proyek untuk membuat tabel responsif. Gunakan nama file yang jelas dan pastikan semua bahan yang dibutuhkan tersedia."
      ],
      [
        "Pahami tujuan",
        "Tulis hasil akhir yang ingin dicapai dari membuat tabel responsif. Pecah hasil tersebut menjadi bagian kecil yang bisa diuji satu per satu."
      ],
      [
        "Bangun versi sederhana",
        "Buat versi paling dasar terlebih dahulu. Fokus pada struktur dan fungsi inti sebelum menambahkan dekorasi atau fitur tambahan."
      ],
      [
        "Uji perilaku",
        "Coba alur utama dengan beberapa kondisi berbeda. Periksa console browser dan pastikan tidak ada error yang mengganggu."
      ],
      [
        "Rapikan dan aksesibilitas",
        "Periksa penamaan, jarak visual, label kontrol, serta perilaku keyboard. Pastikan tampilan tetap nyaman pada layar kecil."
      ],
      [
        "Simpan hasil",
        "Catat hal yang berhasil dan satu hal yang ingin diperbaiki. Simpan perubahan dengan nama yang mudah dikenali."
      ]
    ],
    "takeaways": [
      "Tujuan membuat tabel responsif perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat tabel responsif pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "coding",
      "panduan",
      "medium",
      "membuat"
    ]
  },
  {
    "id": 29,
    "category": "coding",
    "categoryName": "Coding & Web",
    "emoji": "⌘",
    "art": "art-code",
    "title": "Panduan langkah demi langkah: Membuat menu mobile",
    "topic": "Membuat menu mobile",
    "format": "panduan",
    "summary": "Pelajari membuat menu mobile dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 25,
    "mood": "calm",
    "symbol": "✦",
    "steps": [
      [
        "Siapkan ruang kerja",
        "Buka folder proyek untuk membuat menu mobile. Gunakan nama file yang jelas dan pastikan semua bahan yang dibutuhkan tersedia."
      ],
      [
        "Pahami tujuan",
        "Tulis hasil akhir yang ingin dicapai dari membuat menu mobile. Pecah hasil tersebut menjadi bagian kecil yang bisa diuji satu per satu."
      ],
      [
        "Bangun versi sederhana",
        "Buat versi paling dasar terlebih dahulu. Fokus pada struktur dan fungsi inti sebelum menambahkan dekorasi atau fitur tambahan."
      ],
      [
        "Uji perilaku",
        "Coba alur utama dengan beberapa kondisi berbeda. Periksa console browser dan pastikan tidak ada error yang mengganggu."
      ],
      [
        "Rapikan dan aksesibilitas",
        "Periksa penamaan, jarak visual, label kontrol, serta perilaku keyboard. Pastikan tampilan tetap nyaman pada layar kecil."
      ],
      [
        "Simpan hasil",
        "Catat hal yang berhasil dan satu hal yang ingin diperbaiki. Simpan perubahan dengan nama yang mudah dikenali."
      ]
    ],
    "takeaways": [
      "Tujuan membuat menu mobile perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat menu mobile pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "coding",
      "panduan",
      "advanced",
      "membuat"
    ]
  },
  {
    "id": 30,
    "category": "coding",
    "categoryName": "Coding & Web",
    "emoji": "⌘",
    "art": "art-code",
    "title": "Workflow praktis: Membuat halaman landing",
    "topic": "Membuat halaman landing",
    "format": "workflow",
    "summary": "Bangun alur kerja membuat halaman landing yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 21,
    "mood": "creative",
    "symbol": "◈",
    "steps": [
      [
        "Siapkan ruang kerja",
        "Buka folder proyek untuk membuat halaman landing. Gunakan nama file yang jelas dan pastikan semua bahan yang dibutuhkan tersedia."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah membuat halaman landing dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Bangun versi sederhana",
        "Buat versi paling dasar terlebih dahulu. Fokus pada struktur dan fungsi inti sebelum menambahkan dekorasi atau fitur tambahan."
      ],
      [
        "Uji perilaku",
        "Coba alur utama dengan beberapa kondisi berbeda. Periksa console browser dan pastikan tidak ada error yang mengganggu."
      ],
      [
        "Rapikan dan aksesibilitas",
        "Periksa penamaan, jarak visual, label kontrol, serta perilaku keyboard. Pastikan tampilan tetap nyaman pada layar kecil."
      ],
      [
        "Simpan hasil",
        "Catat hal yang berhasil dan satu hal yang ingin diperbaiki. Simpan perubahan dengan nama yang mudah dikenali."
      ]
    ],
    "takeaways": [
      "Tujuan membuat halaman landing perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat halaman landing pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "coding",
      "workflow",
      "medium",
      "membuat"
    ]
  },
  {
    "id": 31,
    "category": "design",
    "categoryName": "Desain & Kreativitas",
    "emoji": "✧",
    "art": "art-design",
    "title": "Panduan langkah demi langkah: Menentukan palet warna",
    "topic": "Menentukan palet warna",
    "format": "panduan",
    "summary": "Pelajari menentukan palet warna dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 18,
    "mood": "creative",
    "symbol": "⌘",
    "steps": [
      [
        "Kumpulkan referensi",
        "Cari 2–3 contoh yang relevan dengan menentukan palet warna. Catat bagian yang terasa jelas, nyaman, atau membingungkan."
      ],
      [
        "Tentukan fokus",
        "Tentukan satu pesan utama dan satu tindakan yang paling penting. Hindari membuat semua elemen tampil sama menonjol."
      ],
      [
        "Buat sketsa awal",
        "Susun bentuk kasar terlebih dahulu. Perhatikan hierarki, jarak, alignment, kontras, dan ruang kosong."
      ],
      [
        "Terapkan sistem visual",
        "Pilih palet terbatas, skala tipografi, radius, dan jarak yang konsisten agar menentukan palet warna terasa menyatu."
      ],
      [
        "Uji keterbacaan",
        "Lihat desain dari jarak normal dan ukuran layar berbeda. Pastikan teks mudah dibaca dan elemen penting mudah ditemukan."
      ],
      [
        "Iterasi kecil",
        "Minta umpan balik yang spesifik, lalu ubah satu atau dua hal yang paling berdampak. Bandingkan hasil sebelum dan sesudah."
      ]
    ],
    "takeaways": [
      "Tujuan menentukan palet warna perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan menentukan palet warna pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "design",
      "panduan",
      "medium",
      "menentukan"
    ]
  },
  {
    "id": 32,
    "category": "design",
    "categoryName": "Desain & Kreativitas",
    "emoji": "✧",
    "art": "art-design",
    "title": "Workflow praktis: Menyusun hierarki visual",
    "topic": "Menyusun hierarki visual",
    "format": "workflow",
    "summary": "Bangun alur kerja menyusun hierarki visual yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 15,
    "mood": "focus",
    "symbol": "〰",
    "steps": [
      [
        "Kumpulkan referensi",
        "Cari 2–3 contoh yang relevan dengan menyusun hierarki visual. Catat bagian yang terasa jelas, nyaman, atau membingungkan."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah menyusun hierarki visual dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Buat sketsa awal",
        "Susun bentuk kasar terlebih dahulu. Perhatikan hierarki, jarak, alignment, kontras, dan ruang kosong."
      ],
      [
        "Terapkan sistem visual",
        "Pilih palet terbatas, skala tipografi, radius, dan jarak yang konsisten agar menyusun hierarki visual terasa menyatu."
      ],
      [
        "Uji keterbacaan",
        "Lihat desain dari jarak normal dan ukuran layar berbeda. Pastikan teks mudah dibaca dan elemen penting mudah ditemukan."
      ],
      [
        "Iterasi kecil",
        "Minta umpan balik yang spesifik, lalu ubah satu atau dua hal yang paling berdampak. Bandingkan hasil sebelum dan sesudah."
      ]
    ],
    "takeaways": [
      "Tujuan menyusun hierarki visual perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan menyusun hierarki visual pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "design",
      "workflow",
      "beginner",
      "menyusun"
    ]
  },
  {
    "id": 33,
    "category": "design",
    "categoryName": "Desain & Kreativitas",
    "emoji": "✧",
    "art": "art-design",
    "title": "Panduan langkah demi langkah: Memilih pasangan font",
    "topic": "Memilih pasangan font",
    "format": "panduan",
    "summary": "Pelajari memilih pasangan font dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 18,
    "mood": "creative",
    "symbol": "✧",
    "steps": [
      [
        "Kumpulkan referensi",
        "Cari 2–3 contoh yang relevan dengan memilih pasangan font. Catat bagian yang terasa jelas, nyaman, atau membingungkan."
      ],
      [
        "Tentukan fokus",
        "Tentukan satu pesan utama dan satu tindakan yang paling penting. Hindari membuat semua elemen tampil sama menonjol."
      ],
      [
        "Buat sketsa awal",
        "Susun bentuk kasar terlebih dahulu. Perhatikan hierarki, jarak, alignment, kontras, dan ruang kosong."
      ],
      [
        "Terapkan sistem visual",
        "Pilih palet terbatas, skala tipografi, radius, dan jarak yang konsisten agar memilih pasangan font terasa menyatu."
      ],
      [
        "Uji keterbacaan",
        "Lihat desain dari jarak normal dan ukuran layar berbeda. Pastikan teks mudah dibaca dan elemen penting mudah ditemukan."
      ],
      [
        "Iterasi kecil",
        "Minta umpan balik yang spesifik, lalu ubah satu atau dua hal yang paling berdampak. Bandingkan hasil sebelum dan sesudah."
      ]
    ],
    "takeaways": [
      "Tujuan memilih pasangan font perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan memilih pasangan font pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "design",
      "panduan",
      "medium",
      "memilih"
    ]
  },
  {
    "id": 34,
    "category": "design",
    "categoryName": "Desain & Kreativitas",
    "emoji": "✧",
    "art": "art-design",
    "title": "Workflow praktis: Mendesain kartu UI",
    "topic": "Mendesain kartu UI",
    "format": "workflow",
    "summary": "Bangun alur kerja mendesain kartu ui yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 15,
    "mood": "focus",
    "symbol": "↗",
    "steps": [
      [
        "Kumpulkan referensi",
        "Cari 2–3 contoh yang relevan dengan mendesain kartu ui. Catat bagian yang terasa jelas, nyaman, atau membingungkan."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah mendesain kartu ui dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Buat sketsa awal",
        "Susun bentuk kasar terlebih dahulu. Perhatikan hierarki, jarak, alignment, kontras, dan ruang kosong."
      ],
      [
        "Terapkan sistem visual",
        "Pilih palet terbatas, skala tipografi, radius, dan jarak yang konsisten agar mendesain kartu ui terasa menyatu."
      ],
      [
        "Uji keterbacaan",
        "Lihat desain dari jarak normal dan ukuran layar berbeda. Pastikan teks mudah dibaca dan elemen penting mudah ditemukan."
      ],
      [
        "Iterasi kecil",
        "Minta umpan balik yang spesifik, lalu ubah satu atau dua hal yang paling berdampak. Bandingkan hasil sebelum dan sesudah."
      ]
    ],
    "takeaways": [
      "Tujuan mendesain kartu ui perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mendesain kartu ui pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "design",
      "workflow",
      "beginner",
      "mendesain"
    ]
  },
  {
    "id": 35,
    "category": "design",
    "categoryName": "Desain & Kreativitas",
    "emoji": "✧",
    "art": "art-design",
    "title": "Latihan mandiri: Membuat wireframe cepat",
    "topic": "Membuat wireframe cepat",
    "format": "latihan",
    "summary": "Latihan terarah untuk menerapkan membuat wireframe cepat sambil mengecek pemahamanmu sendiri.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 31,
    "mood": "calm",
    "symbol": "✧",
    "steps": [
      [
        "Tantangan mini",
        "Coba lakukan membuat wireframe cepat dalam skala kecil selama 10–15 menit. Tuliskan hasil yang ingin kamu capai sebelum mulai."
      ],
      [
        "Tentukan fokus",
        "Tentukan satu pesan utama dan satu tindakan yang paling penting. Hindari membuat semua elemen tampil sama menonjol."
      ],
      [
        "Buat sketsa awal",
        "Susun bentuk kasar terlebih dahulu. Perhatikan hierarki, jarak, alignment, kontras, dan ruang kosong."
      ],
      [
        "Terapkan sistem visual",
        "Pilih palet terbatas, skala tipografi, radius, dan jarak yang konsisten agar membuat wireframe cepat terasa menyatu."
      ],
      [
        "Uji keterbacaan",
        "Lihat desain dari jarak normal dan ukuran layar berbeda. Pastikan teks mudah dibaca dan elemen penting mudah ditemukan."
      ],
      [
        "Iterasi kecil",
        "Minta umpan balik yang spesifik, lalu ubah satu atau dua hal yang paling berdampak. Bandingkan hasil sebelum dan sesudah."
      ]
    ],
    "takeaways": [
      "Tujuan membuat wireframe cepat perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat wireframe cepat pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "design",
      "latihan",
      "advanced",
      "membuat"
    ]
  },
  {
    "id": 36,
    "category": "design",
    "categoryName": "Desain & Kreativitas",
    "emoji": "✧",
    "art": "art-design",
    "title": "Workflow praktis: Mengenal ruang kosong",
    "topic": "Mengenal ruang kosong",
    "format": "workflow",
    "summary": "Bangun alur kerja mengenal ruang kosong yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 28,
    "mood": "calm",
    "symbol": "◎",
    "steps": [
      [
        "Kumpulkan referensi",
        "Cari 2–3 contoh yang relevan dengan mengenal ruang kosong. Catat bagian yang terasa jelas, nyaman, atau membingungkan."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah mengenal ruang kosong dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Buat sketsa awal",
        "Susun bentuk kasar terlebih dahulu. Perhatikan hierarki, jarak, alignment, kontras, dan ruang kosong."
      ],
      [
        "Terapkan sistem visual",
        "Pilih palet terbatas, skala tipografi, radius, dan jarak yang konsisten agar mengenal ruang kosong terasa menyatu."
      ],
      [
        "Uji keterbacaan",
        "Lihat desain dari jarak normal dan ukuran layar berbeda. Pastikan teks mudah dibaca dan elemen penting mudah ditemukan."
      ],
      [
        "Iterasi kecil",
        "Minta umpan balik yang spesifik, lalu ubah satu atau dua hal yang paling berdampak. Bandingkan hasil sebelum dan sesudah."
      ]
    ],
    "takeaways": [
      "Tujuan mengenal ruang kosong perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mengenal ruang kosong pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "design",
      "workflow",
      "advanced",
      "mengenal"
    ]
  },
  {
    "id": 37,
    "category": "design",
    "categoryName": "Desain & Kreativitas",
    "emoji": "✧",
    "art": "art-design",
    "title": "Workflow praktis: Membuat ikon konsisten",
    "topic": "Membuat ikon konsisten",
    "format": "workflow",
    "summary": "Bangun alur kerja membuat ikon konsisten yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 21,
    "mood": "creative",
    "symbol": "▤",
    "steps": [
      [
        "Kumpulkan referensi",
        "Cari 2–3 contoh yang relevan dengan membuat ikon konsisten. Catat bagian yang terasa jelas, nyaman, atau membingungkan."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah membuat ikon konsisten dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Buat sketsa awal",
        "Susun bentuk kasar terlebih dahulu. Perhatikan hierarki, jarak, alignment, kontras, dan ruang kosong."
      ],
      [
        "Terapkan sistem visual",
        "Pilih palet terbatas, skala tipografi, radius, dan jarak yang konsisten agar membuat ikon konsisten terasa menyatu."
      ],
      [
        "Uji keterbacaan",
        "Lihat desain dari jarak normal dan ukuran layar berbeda. Pastikan teks mudah dibaca dan elemen penting mudah ditemukan."
      ],
      [
        "Iterasi kecil",
        "Minta umpan balik yang spesifik, lalu ubah satu atau dua hal yang paling berdampak. Bandingkan hasil sebelum dan sesudah."
      ]
    ],
    "takeaways": [
      "Tujuan membuat ikon konsisten perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat ikon konsisten pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "design",
      "workflow",
      "medium",
      "membuat"
    ]
  },
  {
    "id": 38,
    "category": "design",
    "categoryName": "Desain & Kreativitas",
    "emoji": "✧",
    "art": "art-design",
    "title": "Checklist penerapan: Mendesain tombol interaktif",
    "topic": "Mendesain tombol interaktif",
    "format": "checklist",
    "summary": "Daftar periksa untuk menerapkan mendesain tombol interaktif tanpa melewatkan hal penting.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 18,
    "mood": "creative",
    "symbol": "◎",
    "steps": [
      [
        "Periksa kesiapan",
        "Pastikan tujuan mendesain tombol interaktif jelas dan semua bahan penting tersedia."
      ],
      [
        "Tentukan fokus",
        "Tentukan satu pesan utama dan satu tindakan yang paling penting. Hindari membuat semua elemen tampil sama menonjol."
      ],
      [
        "Buat sketsa awal",
        "Susun bentuk kasar terlebih dahulu. Perhatikan hierarki, jarak, alignment, kontras, dan ruang kosong."
      ],
      [
        "Terapkan sistem visual",
        "Pilih palet terbatas, skala tipografi, radius, dan jarak yang konsisten agar mendesain tombol interaktif terasa menyatu."
      ],
      [
        "Uji keterbacaan",
        "Lihat desain dari jarak normal dan ukuran layar berbeda. Pastikan teks mudah dibaca dan elemen penting mudah ditemukan."
      ],
      [
        "Iterasi kecil",
        "Minta umpan balik yang spesifik, lalu ubah satu atau dua hal yang paling berdampak. Bandingkan hasil sebelum dan sesudah."
      ]
    ],
    "takeaways": [
      "Tujuan mendesain tombol interaktif perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mendesain tombol interaktif pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "design",
      "checklist",
      "medium",
      "mendesain"
    ]
  },
  {
    "id": 39,
    "category": "design",
    "categoryName": "Desain & Kreativitas",
    "emoji": "✧",
    "art": "art-design",
    "title": "Latihan mandiri: Membuat prototipe klik",
    "topic": "Membuat prototipe klik",
    "format": "latihan",
    "summary": "Latihan terarah untuk menerapkan membuat prototipe klik sambil mengecek pemahamanmu sendiri.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 24,
    "mood": "creative",
    "symbol": "〰",
    "steps": [
      [
        "Tantangan mini",
        "Coba lakukan membuat prototipe klik dalam skala kecil selama 10–15 menit. Tuliskan hasil yang ingin kamu capai sebelum mulai."
      ],
      [
        "Tentukan fokus",
        "Tentukan satu pesan utama dan satu tindakan yang paling penting. Hindari membuat semua elemen tampil sama menonjol."
      ],
      [
        "Buat sketsa awal",
        "Susun bentuk kasar terlebih dahulu. Perhatikan hierarki, jarak, alignment, kontras, dan ruang kosong."
      ],
      [
        "Terapkan sistem visual",
        "Pilih palet terbatas, skala tipografi, radius, dan jarak yang konsisten agar membuat prototipe klik terasa menyatu."
      ],
      [
        "Uji keterbacaan",
        "Lihat desain dari jarak normal dan ukuran layar berbeda. Pastikan teks mudah dibaca dan elemen penting mudah ditemukan."
      ],
      [
        "Iterasi kecil",
        "Minta umpan balik yang spesifik, lalu ubah satu atau dua hal yang paling berdampak. Bandingkan hasil sebelum dan sesudah."
      ]
    ],
    "takeaways": [
      "Tujuan membuat prototipe klik perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat prototipe klik pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "design",
      "latihan",
      "medium",
      "membuat"
    ]
  },
  {
    "id": 40,
    "category": "design",
    "categoryName": "Desain & Kreativitas",
    "emoji": "✧",
    "art": "art-design",
    "title": "Workflow praktis: Menerapkan prinsip kontras",
    "topic": "Menerapkan prinsip kontras",
    "format": "workflow",
    "summary": "Bangun alur kerja menerapkan prinsip kontras yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 28,
    "mood": "calm",
    "symbol": "⌘",
    "steps": [
      [
        "Kumpulkan referensi",
        "Cari 2–3 contoh yang relevan dengan menerapkan prinsip kontras. Catat bagian yang terasa jelas, nyaman, atau membingungkan."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah menerapkan prinsip kontras dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Buat sketsa awal",
        "Susun bentuk kasar terlebih dahulu. Perhatikan hierarki, jarak, alignment, kontras, dan ruang kosong."
      ],
      [
        "Terapkan sistem visual",
        "Pilih palet terbatas, skala tipografi, radius, dan jarak yang konsisten agar menerapkan prinsip kontras terasa menyatu."
      ],
      [
        "Uji keterbacaan",
        "Lihat desain dari jarak normal dan ukuran layar berbeda. Pastikan teks mudah dibaca dan elemen penting mudah ditemukan."
      ],
      [
        "Iterasi kecil",
        "Minta umpan balik yang spesifik, lalu ubah satu atau dua hal yang paling berdampak. Bandingkan hasil sebelum dan sesudah."
      ]
    ],
    "takeaways": [
      "Tujuan menerapkan prinsip kontras perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan menerapkan prinsip kontras pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "design",
      "workflow",
      "advanced",
      "menerapkan"
    ]
  },
  {
    "id": 41,
    "category": "design",
    "categoryName": "Desain & Kreativitas",
    "emoji": "✧",
    "art": "art-design",
    "title": "Panduan langkah demi langkah: Mendesain halaman onboarding",
    "topic": "Mendesain halaman onboarding",
    "format": "panduan",
    "summary": "Pelajari mendesain halaman onboarding dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 12,
    "mood": "focus",
    "symbol": "〰",
    "steps": [
      [
        "Kumpulkan referensi",
        "Cari 2–3 contoh yang relevan dengan mendesain halaman onboarding. Catat bagian yang terasa jelas, nyaman, atau membingungkan."
      ],
      [
        "Tentukan fokus",
        "Tentukan satu pesan utama dan satu tindakan yang paling penting. Hindari membuat semua elemen tampil sama menonjol."
      ],
      [
        "Buat sketsa awal",
        "Susun bentuk kasar terlebih dahulu. Perhatikan hierarki, jarak, alignment, kontras, dan ruang kosong."
      ],
      [
        "Terapkan sistem visual",
        "Pilih palet terbatas, skala tipografi, radius, dan jarak yang konsisten agar mendesain halaman onboarding terasa menyatu."
      ],
      [
        "Uji keterbacaan",
        "Lihat desain dari jarak normal dan ukuran layar berbeda. Pastikan teks mudah dibaca dan elemen penting mudah ditemukan."
      ],
      [
        "Iterasi kecil",
        "Minta umpan balik yang spesifik, lalu ubah satu atau dua hal yang paling berdampak. Bandingkan hasil sebelum dan sesudah."
      ]
    ],
    "takeaways": [
      "Tujuan mendesain halaman onboarding perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mendesain halaman onboarding pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "design",
      "panduan",
      "beginner",
      "mendesain"
    ]
  },
  {
    "id": 42,
    "category": "design",
    "categoryName": "Desain & Kreativitas",
    "emoji": "✧",
    "art": "art-design",
    "title": "Panduan langkah demi langkah: Membuat komponen reusable",
    "topic": "Membuat komponen reusable",
    "format": "panduan",
    "summary": "Pelajari membuat komponen reusable dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 18,
    "mood": "creative",
    "symbol": "✧",
    "steps": [
      [
        "Kumpulkan referensi",
        "Cari 2–3 contoh yang relevan dengan membuat komponen reusable. Catat bagian yang terasa jelas, nyaman, atau membingungkan."
      ],
      [
        "Tentukan fokus",
        "Tentukan satu pesan utama dan satu tindakan yang paling penting. Hindari membuat semua elemen tampil sama menonjol."
      ],
      [
        "Buat sketsa awal",
        "Susun bentuk kasar terlebih dahulu. Perhatikan hierarki, jarak, alignment, kontras, dan ruang kosong."
      ],
      [
        "Terapkan sistem visual",
        "Pilih palet terbatas, skala tipografi, radius, dan jarak yang konsisten agar membuat komponen reusable terasa menyatu."
      ],
      [
        "Uji keterbacaan",
        "Lihat desain dari jarak normal dan ukuran layar berbeda. Pastikan teks mudah dibaca dan elemen penting mudah ditemukan."
      ],
      [
        "Iterasi kecil",
        "Minta umpan balik yang spesifik, lalu ubah satu atau dua hal yang paling berdampak. Bandingkan hasil sebelum dan sesudah."
      ]
    ],
    "takeaways": [
      "Tujuan membuat komponen reusable perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat komponen reusable pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "design",
      "panduan",
      "medium",
      "membuat"
    ]
  },
  {
    "id": 43,
    "category": "design",
    "categoryName": "Desain & Kreativitas",
    "emoji": "✧",
    "art": "art-design",
    "title": "Workflow praktis: Menyusun grid editorial",
    "topic": "Menyusun grid editorial",
    "format": "workflow",
    "summary": "Bangun alur kerja menyusun grid editorial yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 15,
    "mood": "focus",
    "symbol": "↗",
    "steps": [
      [
        "Kumpulkan referensi",
        "Cari 2–3 contoh yang relevan dengan menyusun grid editorial. Catat bagian yang terasa jelas, nyaman, atau membingungkan."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah menyusun grid editorial dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Buat sketsa awal",
        "Susun bentuk kasar terlebih dahulu. Perhatikan hierarki, jarak, alignment, kontras, dan ruang kosong."
      ],
      [
        "Terapkan sistem visual",
        "Pilih palet terbatas, skala tipografi, radius, dan jarak yang konsisten agar menyusun grid editorial terasa menyatu."
      ],
      [
        "Uji keterbacaan",
        "Lihat desain dari jarak normal dan ukuran layar berbeda. Pastikan teks mudah dibaca dan elemen penting mudah ditemukan."
      ],
      [
        "Iterasi kecil",
        "Minta umpan balik yang spesifik, lalu ubah satu atau dua hal yang paling berdampak. Bandingkan hasil sebelum dan sesudah."
      ]
    ],
    "takeaways": [
      "Tujuan menyusun grid editorial perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan menyusun grid editorial pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "design",
      "workflow",
      "beginner",
      "menyusun"
    ]
  },
  {
    "id": 44,
    "category": "design",
    "categoryName": "Desain & Kreativitas",
    "emoji": "✧",
    "art": "art-design",
    "title": "Workflow praktis: Mengevaluasi desain sendiri",
    "topic": "Mengevaluasi desain sendiri",
    "format": "workflow",
    "summary": "Bangun alur kerja mengevaluasi desain sendiri yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 28,
    "mood": "calm",
    "symbol": "✧",
    "steps": [
      [
        "Kumpulkan referensi",
        "Cari 2–3 contoh yang relevan dengan mengevaluasi desain sendiri. Catat bagian yang terasa jelas, nyaman, atau membingungkan."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah mengevaluasi desain sendiri dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Buat sketsa awal",
        "Susun bentuk kasar terlebih dahulu. Perhatikan hierarki, jarak, alignment, kontras, dan ruang kosong."
      ],
      [
        "Terapkan sistem visual",
        "Pilih palet terbatas, skala tipografi, radius, dan jarak yang konsisten agar mengevaluasi desain sendiri terasa menyatu."
      ],
      [
        "Uji keterbacaan",
        "Lihat desain dari jarak normal dan ukuran layar berbeda. Pastikan teks mudah dibaca dan elemen penting mudah ditemukan."
      ],
      [
        "Iterasi kecil",
        "Minta umpan balik yang spesifik, lalu ubah satu atau dua hal yang paling berdampak. Bandingkan hasil sebelum dan sesudah."
      ]
    ],
    "takeaways": [
      "Tujuan mengevaluasi desain sendiri perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mengevaluasi desain sendiri pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "design",
      "workflow",
      "advanced",
      "mengevaluasi"
    ]
  },
  {
    "id": 45,
    "category": "design",
    "categoryName": "Desain & Kreativitas",
    "emoji": "✧",
    "art": "art-design",
    "title": "Workflow praktis: Membuat style guide",
    "topic": "Membuat style guide",
    "format": "workflow",
    "summary": "Bangun alur kerja membuat style guide yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 15,
    "mood": "focus",
    "symbol": "✦",
    "steps": [
      [
        "Kumpulkan referensi",
        "Cari 2–3 contoh yang relevan dengan membuat style guide. Catat bagian yang terasa jelas, nyaman, atau membingungkan."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah membuat style guide dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Buat sketsa awal",
        "Susun bentuk kasar terlebih dahulu. Perhatikan hierarki, jarak, alignment, kontras, dan ruang kosong."
      ],
      [
        "Terapkan sistem visual",
        "Pilih palet terbatas, skala tipografi, radius, dan jarak yang konsisten agar membuat style guide terasa menyatu."
      ],
      [
        "Uji keterbacaan",
        "Lihat desain dari jarak normal dan ukuran layar berbeda. Pastikan teks mudah dibaca dan elemen penting mudah ditemukan."
      ],
      [
        "Iterasi kecil",
        "Minta umpan balik yang spesifik, lalu ubah satu atau dua hal yang paling berdampak. Bandingkan hasil sebelum dan sesudah."
      ]
    ],
    "takeaways": [
      "Tujuan membuat style guide perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat style guide pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "design",
      "workflow",
      "beginner",
      "membuat"
    ]
  },
  {
    "id": 46,
    "category": "design",
    "categoryName": "Desain & Kreativitas",
    "emoji": "✧",
    "art": "art-design",
    "title": "Workflow praktis: Membuat efek kaca UI",
    "topic": "Membuat efek kaca UI",
    "format": "workflow",
    "summary": "Bangun alur kerja membuat efek kaca ui yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 21,
    "mood": "creative",
    "symbol": "▤",
    "steps": [
      [
        "Kumpulkan referensi",
        "Cari 2–3 contoh yang relevan dengan membuat efek kaca ui. Catat bagian yang terasa jelas, nyaman, atau membingungkan."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah membuat efek kaca ui dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Buat sketsa awal",
        "Susun bentuk kasar terlebih dahulu. Perhatikan hierarki, jarak, alignment, kontras, dan ruang kosong."
      ],
      [
        "Terapkan sistem visual",
        "Pilih palet terbatas, skala tipografi, radius, dan jarak yang konsisten agar membuat efek kaca ui terasa menyatu."
      ],
      [
        "Uji keterbacaan",
        "Lihat desain dari jarak normal dan ukuran layar berbeda. Pastikan teks mudah dibaca dan elemen penting mudah ditemukan."
      ],
      [
        "Iterasi kecil",
        "Minta umpan balik yang spesifik, lalu ubah satu atau dua hal yang paling berdampak. Bandingkan hasil sebelum dan sesudah."
      ]
    ],
    "takeaways": [
      "Tujuan membuat efek kaca ui perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat efek kaca ui pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "design",
      "workflow",
      "medium",
      "membuat"
    ]
  },
  {
    "id": 47,
    "category": "design",
    "categoryName": "Desain & Kreativitas",
    "emoji": "✧",
    "art": "art-design",
    "title": "Workflow praktis: Memilih radius komponen",
    "topic": "Memilih radius komponen",
    "format": "workflow",
    "summary": "Bangun alur kerja memilih radius komponen yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 28,
    "mood": "calm",
    "symbol": "⌘",
    "steps": [
      [
        "Kumpulkan referensi",
        "Cari 2–3 contoh yang relevan dengan memilih radius komponen. Catat bagian yang terasa jelas, nyaman, atau membingungkan."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah memilih radius komponen dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Buat sketsa awal",
        "Susun bentuk kasar terlebih dahulu. Perhatikan hierarki, jarak, alignment, kontras, dan ruang kosong."
      ],
      [
        "Terapkan sistem visual",
        "Pilih palet terbatas, skala tipografi, radius, dan jarak yang konsisten agar memilih radius komponen terasa menyatu."
      ],
      [
        "Uji keterbacaan",
        "Lihat desain dari jarak normal dan ukuran layar berbeda. Pastikan teks mudah dibaca dan elemen penting mudah ditemukan."
      ],
      [
        "Iterasi kecil",
        "Minta umpan balik yang spesifik, lalu ubah satu atau dua hal yang paling berdampak. Bandingkan hasil sebelum dan sesudah."
      ]
    ],
    "takeaways": [
      "Tujuan memilih radius komponen perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan memilih radius komponen pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "design",
      "workflow",
      "advanced",
      "memilih"
    ]
  },
  {
    "id": 48,
    "category": "design",
    "categoryName": "Desain & Kreativitas",
    "emoji": "✧",
    "art": "art-design",
    "title": "Workflow praktis: Membuat cover proyek",
    "topic": "Membuat cover proyek",
    "format": "workflow",
    "summary": "Bangun alur kerja membuat cover proyek yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 21,
    "mood": "creative",
    "symbol": "〰",
    "steps": [
      [
        "Kumpulkan referensi",
        "Cari 2–3 contoh yang relevan dengan membuat cover proyek. Catat bagian yang terasa jelas, nyaman, atau membingungkan."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah membuat cover proyek dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Buat sketsa awal",
        "Susun bentuk kasar terlebih dahulu. Perhatikan hierarki, jarak, alignment, kontras, dan ruang kosong."
      ],
      [
        "Terapkan sistem visual",
        "Pilih palet terbatas, skala tipografi, radius, dan jarak yang konsisten agar membuat cover proyek terasa menyatu."
      ],
      [
        "Uji keterbacaan",
        "Lihat desain dari jarak normal dan ukuran layar berbeda. Pastikan teks mudah dibaca dan elemen penting mudah ditemukan."
      ],
      [
        "Iterasi kecil",
        "Minta umpan balik yang spesifik, lalu ubah satu atau dua hal yang paling berdampak. Bandingkan hasil sebelum dan sesudah."
      ]
    ],
    "takeaways": [
      "Tujuan membuat cover proyek perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat cover proyek pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "design",
      "workflow",
      "medium",
      "membuat"
    ]
  },
  {
    "id": 49,
    "category": "design",
    "categoryName": "Desain & Kreativitas",
    "emoji": "✧",
    "art": "art-design",
    "title": "Checklist penerapan: Mengatur alignment",
    "topic": "Mengatur alignment",
    "format": "checklist",
    "summary": "Daftar periksa untuk menerapkan mengatur alignment tanpa melewatkan hal penting.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 18,
    "mood": "creative",
    "symbol": "⌘",
    "steps": [
      [
        "Periksa kesiapan",
        "Pastikan tujuan mengatur alignment jelas dan semua bahan penting tersedia."
      ],
      [
        "Tentukan fokus",
        "Tentukan satu pesan utama dan satu tindakan yang paling penting. Hindari membuat semua elemen tampil sama menonjol."
      ],
      [
        "Buat sketsa awal",
        "Susun bentuk kasar terlebih dahulu. Perhatikan hierarki, jarak, alignment, kontras, dan ruang kosong."
      ],
      [
        "Terapkan sistem visual",
        "Pilih palet terbatas, skala tipografi, radius, dan jarak yang konsisten agar mengatur alignment terasa menyatu."
      ],
      [
        "Uji keterbacaan",
        "Lihat desain dari jarak normal dan ukuran layar berbeda. Pastikan teks mudah dibaca dan elemen penting mudah ditemukan."
      ],
      [
        "Iterasi kecil",
        "Minta umpan balik yang spesifik, lalu ubah satu atau dua hal yang paling berdampak. Bandingkan hasil sebelum dan sesudah."
      ]
    ],
    "takeaways": [
      "Tujuan mengatur alignment perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mengatur alignment pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "design",
      "checklist",
      "medium",
      "mengatur"
    ]
  },
  {
    "id": 50,
    "category": "design",
    "categoryName": "Desain & Kreativitas",
    "emoji": "✧",
    "art": "art-design",
    "title": "Latihan mandiri: Mendesain kartu profil",
    "topic": "Mendesain kartu profil",
    "format": "latihan",
    "summary": "Latihan terarah untuk menerapkan mendesain kartu profil sambil mengecek pemahamanmu sendiri.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 24,
    "mood": "creative",
    "symbol": "↗",
    "steps": [
      [
        "Tantangan mini",
        "Coba lakukan mendesain kartu profil dalam skala kecil selama 10–15 menit. Tuliskan hasil yang ingin kamu capai sebelum mulai."
      ],
      [
        "Tentukan fokus",
        "Tentukan satu pesan utama dan satu tindakan yang paling penting. Hindari membuat semua elemen tampil sama menonjol."
      ],
      [
        "Buat sketsa awal",
        "Susun bentuk kasar terlebih dahulu. Perhatikan hierarki, jarak, alignment, kontras, dan ruang kosong."
      ],
      [
        "Terapkan sistem visual",
        "Pilih palet terbatas, skala tipografi, radius, dan jarak yang konsisten agar mendesain kartu profil terasa menyatu."
      ],
      [
        "Uji keterbacaan",
        "Lihat desain dari jarak normal dan ukuran layar berbeda. Pastikan teks mudah dibaca dan elemen penting mudah ditemukan."
      ],
      [
        "Iterasi kecil",
        "Minta umpan balik yang spesifik, lalu ubah satu atau dua hal yang paling berdampak. Bandingkan hasil sebelum dan sesudah."
      ]
    ],
    "takeaways": [
      "Tujuan mendesain kartu profil perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mendesain kartu profil pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "design",
      "latihan",
      "medium",
      "mendesain"
    ]
  },
  {
    "id": 51,
    "category": "design",
    "categoryName": "Desain & Kreativitas",
    "emoji": "✧",
    "art": "art-design",
    "title": "Workflow praktis: Merancang notifikasi",
    "topic": "Merancang notifikasi",
    "format": "workflow",
    "summary": "Bangun alur kerja merancang notifikasi yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 28,
    "mood": "calm",
    "symbol": "✧",
    "steps": [
      [
        "Kumpulkan referensi",
        "Cari 2–3 contoh yang relevan dengan merancang notifikasi. Catat bagian yang terasa jelas, nyaman, atau membingungkan."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah merancang notifikasi dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Buat sketsa awal",
        "Susun bentuk kasar terlebih dahulu. Perhatikan hierarki, jarak, alignment, kontras, dan ruang kosong."
      ],
      [
        "Terapkan sistem visual",
        "Pilih palet terbatas, skala tipografi, radius, dan jarak yang konsisten agar merancang notifikasi terasa menyatu."
      ],
      [
        "Uji keterbacaan",
        "Lihat desain dari jarak normal dan ukuran layar berbeda. Pastikan teks mudah dibaca dan elemen penting mudah ditemukan."
      ],
      [
        "Iterasi kecil",
        "Minta umpan balik yang spesifik, lalu ubah satu atau dua hal yang paling berdampak. Bandingkan hasil sebelum dan sesudah."
      ]
    ],
    "takeaways": [
      "Tujuan merancang notifikasi perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan merancang notifikasi pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "design",
      "workflow",
      "advanced",
      "merancang"
    ]
  },
  {
    "id": 52,
    "category": "design",
    "categoryName": "Desain & Kreativitas",
    "emoji": "✧",
    "art": "art-design",
    "title": "Panduan langkah demi langkah: Membuat ikon dengan bentuk",
    "topic": "Membuat ikon dengan bentuk",
    "format": "panduan",
    "summary": "Pelajari membuat ikon dengan bentuk dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 12,
    "mood": "focus",
    "symbol": "↗",
    "steps": [
      [
        "Kumpulkan referensi",
        "Cari 2–3 contoh yang relevan dengan membuat ikon dengan bentuk. Catat bagian yang terasa jelas, nyaman, atau membingungkan."
      ],
      [
        "Tentukan fokus",
        "Tentukan satu pesan utama dan satu tindakan yang paling penting. Hindari membuat semua elemen tampil sama menonjol."
      ],
      [
        "Buat sketsa awal",
        "Susun bentuk kasar terlebih dahulu. Perhatikan hierarki, jarak, alignment, kontras, dan ruang kosong."
      ],
      [
        "Terapkan sistem visual",
        "Pilih palet terbatas, skala tipografi, radius, dan jarak yang konsisten agar membuat ikon dengan bentuk terasa menyatu."
      ],
      [
        "Uji keterbacaan",
        "Lihat desain dari jarak normal dan ukuran layar berbeda. Pastikan teks mudah dibaca dan elemen penting mudah ditemukan."
      ],
      [
        "Iterasi kecil",
        "Minta umpan balik yang spesifik, lalu ubah satu atau dua hal yang paling berdampak. Bandingkan hasil sebelum dan sesudah."
      ]
    ],
    "takeaways": [
      "Tujuan membuat ikon dengan bentuk perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat ikon dengan bentuk pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "design",
      "panduan",
      "beginner",
      "membuat"
    ]
  },
  {
    "id": 53,
    "category": "design",
    "categoryName": "Desain & Kreativitas",
    "emoji": "✧",
    "art": "art-design",
    "title": "Panduan langkah demi langkah: Membangun variasi tombol",
    "topic": "Membangun variasi tombol",
    "format": "panduan",
    "summary": "Pelajari membangun variasi tombol dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 18,
    "mood": "creative",
    "symbol": "◈",
    "steps": [
      [
        "Kumpulkan referensi",
        "Cari 2–3 contoh yang relevan dengan membangun variasi tombol. Catat bagian yang terasa jelas, nyaman, atau membingungkan."
      ],
      [
        "Tentukan fokus",
        "Tentukan satu pesan utama dan satu tindakan yang paling penting. Hindari membuat semua elemen tampil sama menonjol."
      ],
      [
        "Buat sketsa awal",
        "Susun bentuk kasar terlebih dahulu. Perhatikan hierarki, jarak, alignment, kontras, dan ruang kosong."
      ],
      [
        "Terapkan sistem visual",
        "Pilih palet terbatas, skala tipografi, radius, dan jarak yang konsisten agar membangun variasi tombol terasa menyatu."
      ],
      [
        "Uji keterbacaan",
        "Lihat desain dari jarak normal dan ukuran layar berbeda. Pastikan teks mudah dibaca dan elemen penting mudah ditemukan."
      ],
      [
        "Iterasi kecil",
        "Minta umpan balik yang spesifik, lalu ubah satu atau dua hal yang paling berdampak. Bandingkan hasil sebelum dan sesudah."
      ]
    ],
    "takeaways": [
      "Tujuan membangun variasi tombol perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membangun variasi tombol pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "design",
      "panduan",
      "medium",
      "membangun"
    ]
  },
  {
    "id": 54,
    "category": "design",
    "categoryName": "Desain & Kreativitas",
    "emoji": "✧",
    "art": "art-design",
    "title": "Workflow praktis: Memilih warna aksen",
    "topic": "Memilih warna aksen",
    "format": "workflow",
    "summary": "Bangun alur kerja memilih warna aksen yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 15,
    "mood": "focus",
    "symbol": "✦",
    "steps": [
      [
        "Kumpulkan referensi",
        "Cari 2–3 contoh yang relevan dengan memilih warna aksen. Catat bagian yang terasa jelas, nyaman, atau membingungkan."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah memilih warna aksen dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Buat sketsa awal",
        "Susun bentuk kasar terlebih dahulu. Perhatikan hierarki, jarak, alignment, kontras, dan ruang kosong."
      ],
      [
        "Terapkan sistem visual",
        "Pilih palet terbatas, skala tipografi, radius, dan jarak yang konsisten agar memilih warna aksen terasa menyatu."
      ],
      [
        "Uji keterbacaan",
        "Lihat desain dari jarak normal dan ukuran layar berbeda. Pastikan teks mudah dibaca dan elemen penting mudah ditemukan."
      ],
      [
        "Iterasi kecil",
        "Minta umpan balik yang spesifik, lalu ubah satu atau dua hal yang paling berdampak. Bandingkan hasil sebelum dan sesudah."
      ]
    ],
    "takeaways": [
      "Tujuan memilih warna aksen perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan memilih warna aksen pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "design",
      "workflow",
      "beginner",
      "memilih"
    ]
  },
  {
    "id": 55,
    "category": "design",
    "categoryName": "Desain & Kreativitas",
    "emoji": "✧",
    "art": "art-design",
    "title": "Workflow praktis: Membuat poster digital",
    "topic": "Membuat poster digital",
    "format": "workflow",
    "summary": "Bangun alur kerja membuat poster digital yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 28,
    "mood": "calm",
    "symbol": "◈",
    "steps": [
      [
        "Kumpulkan referensi",
        "Cari 2–3 contoh yang relevan dengan membuat poster digital. Catat bagian yang terasa jelas, nyaman, atau membingungkan."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah membuat poster digital dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Buat sketsa awal",
        "Susun bentuk kasar terlebih dahulu. Perhatikan hierarki, jarak, alignment, kontras, dan ruang kosong."
      ],
      [
        "Terapkan sistem visual",
        "Pilih palet terbatas, skala tipografi, radius, dan jarak yang konsisten agar membuat poster digital terasa menyatu."
      ],
      [
        "Uji keterbacaan",
        "Lihat desain dari jarak normal dan ukuran layar berbeda. Pastikan teks mudah dibaca dan elemen penting mudah ditemukan."
      ],
      [
        "Iterasi kecil",
        "Minta umpan balik yang spesifik, lalu ubah satu atau dua hal yang paling berdampak. Bandingkan hasil sebelum dan sesudah."
      ]
    ],
    "takeaways": [
      "Tujuan membuat poster digital perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat poster digital pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "design",
      "workflow",
      "advanced",
      "membuat"
    ]
  },
  {
    "id": 56,
    "category": "design",
    "categoryName": "Desain & Kreativitas",
    "emoji": "✧",
    "art": "art-design",
    "title": "Panduan langkah demi langkah: Mendesain halaman portofolio",
    "topic": "Mendesain halaman portofolio",
    "format": "panduan",
    "summary": "Pelajari mendesain halaman portofolio dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 25,
    "mood": "calm",
    "symbol": "⌘",
    "steps": [
      [
        "Kumpulkan referensi",
        "Cari 2–3 contoh yang relevan dengan mendesain halaman portofolio. Catat bagian yang terasa jelas, nyaman, atau membingungkan."
      ],
      [
        "Tentukan fokus",
        "Tentukan satu pesan utama dan satu tindakan yang paling penting. Hindari membuat semua elemen tampil sama menonjol."
      ],
      [
        "Buat sketsa awal",
        "Susun bentuk kasar terlebih dahulu. Perhatikan hierarki, jarak, alignment, kontras, dan ruang kosong."
      ],
      [
        "Terapkan sistem visual",
        "Pilih palet terbatas, skala tipografi, radius, dan jarak yang konsisten agar mendesain halaman portofolio terasa menyatu."
      ],
      [
        "Uji keterbacaan",
        "Lihat desain dari jarak normal dan ukuran layar berbeda. Pastikan teks mudah dibaca dan elemen penting mudah ditemukan."
      ],
      [
        "Iterasi kecil",
        "Minta umpan balik yang spesifik, lalu ubah satu atau dua hal yang paling berdampak. Bandingkan hasil sebelum dan sesudah."
      ]
    ],
    "takeaways": [
      "Tujuan mendesain halaman portofolio perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mendesain halaman portofolio pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "design",
      "panduan",
      "advanced",
      "mendesain"
    ]
  },
  {
    "id": 57,
    "category": "design",
    "categoryName": "Desain & Kreativitas",
    "emoji": "✧",
    "art": "art-design",
    "title": "Workflow praktis: Membuat tampilan mobile",
    "topic": "Membuat tampilan mobile",
    "format": "workflow",
    "summary": "Bangun alur kerja membuat tampilan mobile yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 21,
    "mood": "creative",
    "symbol": "〰",
    "steps": [
      [
        "Kumpulkan referensi",
        "Cari 2–3 contoh yang relevan dengan membuat tampilan mobile. Catat bagian yang terasa jelas, nyaman, atau membingungkan."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah membuat tampilan mobile dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Buat sketsa awal",
        "Susun bentuk kasar terlebih dahulu. Perhatikan hierarki, jarak, alignment, kontras, dan ruang kosong."
      ],
      [
        "Terapkan sistem visual",
        "Pilih palet terbatas, skala tipografi, radius, dan jarak yang konsisten agar membuat tampilan mobile terasa menyatu."
      ],
      [
        "Uji keterbacaan",
        "Lihat desain dari jarak normal dan ukuran layar berbeda. Pastikan teks mudah dibaca dan elemen penting mudah ditemukan."
      ],
      [
        "Iterasi kecil",
        "Minta umpan balik yang spesifik, lalu ubah satu atau dua hal yang paling berdampak. Bandingkan hasil sebelum dan sesudah."
      ]
    ],
    "takeaways": [
      "Tujuan membuat tampilan mobile perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat tampilan mobile pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "design",
      "workflow",
      "medium",
      "membuat"
    ]
  },
  {
    "id": 58,
    "category": "design",
    "categoryName": "Desain & Kreativitas",
    "emoji": "✧",
    "art": "art-design",
    "title": "Panduan langkah demi langkah: Membuat diagram sederhana",
    "topic": "Membuat diagram sederhana",
    "format": "panduan",
    "summary": "Pelajari membuat diagram sederhana dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 25,
    "mood": "calm",
    "symbol": "⌘",
    "steps": [
      [
        "Kumpulkan referensi",
        "Cari 2–3 contoh yang relevan dengan membuat diagram sederhana. Catat bagian yang terasa jelas, nyaman, atau membingungkan."
      ],
      [
        "Tentukan fokus",
        "Tentukan satu pesan utama dan satu tindakan yang paling penting. Hindari membuat semua elemen tampil sama menonjol."
      ],
      [
        "Buat sketsa awal",
        "Susun bentuk kasar terlebih dahulu. Perhatikan hierarki, jarak, alignment, kontras, dan ruang kosong."
      ],
      [
        "Terapkan sistem visual",
        "Pilih palet terbatas, skala tipografi, radius, dan jarak yang konsisten agar membuat diagram sederhana terasa menyatu."
      ],
      [
        "Uji keterbacaan",
        "Lihat desain dari jarak normal dan ukuran layar berbeda. Pastikan teks mudah dibaca dan elemen penting mudah ditemukan."
      ],
      [
        "Iterasi kecil",
        "Minta umpan balik yang spesifik, lalu ubah satu atau dua hal yang paling berdampak. Bandingkan hasil sebelum dan sesudah."
      ]
    ],
    "takeaways": [
      "Tujuan membuat diagram sederhana perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat diagram sederhana pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "design",
      "panduan",
      "advanced",
      "membuat"
    ]
  },
  {
    "id": 59,
    "category": "design",
    "categoryName": "Desain & Kreativitas",
    "emoji": "✧",
    "art": "art-design",
    "title": "Workflow praktis: Menyusun komposisi asimetris",
    "topic": "Menyusun komposisi asimetris",
    "format": "workflow",
    "summary": "Bangun alur kerja menyusun komposisi asimetris yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 21,
    "mood": "creative",
    "symbol": "↗",
    "steps": [
      [
        "Kumpulkan referensi",
        "Cari 2–3 contoh yang relevan dengan menyusun komposisi asimetris. Catat bagian yang terasa jelas, nyaman, atau membingungkan."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah menyusun komposisi asimetris dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Buat sketsa awal",
        "Susun bentuk kasar terlebih dahulu. Perhatikan hierarki, jarak, alignment, kontras, dan ruang kosong."
      ],
      [
        "Terapkan sistem visual",
        "Pilih palet terbatas, skala tipografi, radius, dan jarak yang konsisten agar menyusun komposisi asimetris terasa menyatu."
      ],
      [
        "Uji keterbacaan",
        "Lihat desain dari jarak normal dan ukuran layar berbeda. Pastikan teks mudah dibaca dan elemen penting mudah ditemukan."
      ],
      [
        "Iterasi kecil",
        "Minta umpan balik yang spesifik, lalu ubah satu atau dua hal yang paling berdampak. Bandingkan hasil sebelum dan sesudah."
      ]
    ],
    "takeaways": [
      "Tujuan menyusun komposisi asimetris perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan menyusun komposisi asimetris pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "design",
      "workflow",
      "medium",
      "menyusun"
    ]
  },
  {
    "id": 60,
    "category": "design",
    "categoryName": "Desain & Kreativitas",
    "emoji": "✧",
    "art": "art-design",
    "title": "Checklist penerapan: Mendesain halaman tutorial",
    "topic": "Mendesain halaman tutorial",
    "format": "checklist",
    "summary": "Daftar periksa untuk menerapkan mendesain halaman tutorial tanpa melewatkan hal penting.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 18,
    "mood": "creative",
    "symbol": "✧",
    "steps": [
      [
        "Periksa kesiapan",
        "Pastikan tujuan mendesain halaman tutorial jelas dan semua bahan penting tersedia."
      ],
      [
        "Tentukan fokus",
        "Tentukan satu pesan utama dan satu tindakan yang paling penting. Hindari membuat semua elemen tampil sama menonjol."
      ],
      [
        "Buat sketsa awal",
        "Susun bentuk kasar terlebih dahulu. Perhatikan hierarki, jarak, alignment, kontras, dan ruang kosong."
      ],
      [
        "Terapkan sistem visual",
        "Pilih palet terbatas, skala tipografi, radius, dan jarak yang konsisten agar mendesain halaman tutorial terasa menyatu."
      ],
      [
        "Uji keterbacaan",
        "Lihat desain dari jarak normal dan ukuran layar berbeda. Pastikan teks mudah dibaca dan elemen penting mudah ditemukan."
      ],
      [
        "Iterasi kecil",
        "Minta umpan balik yang spesifik, lalu ubah satu atau dua hal yang paling berdampak. Bandingkan hasil sebelum dan sesudah."
      ]
    ],
    "takeaways": [
      "Tujuan mendesain halaman tutorial perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mendesain halaman tutorial pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "design",
      "checklist",
      "medium",
      "mendesain"
    ]
  },
  {
    "id": 61,
    "category": "tech",
    "categoryName": "Teknologi & Komputer",
    "emoji": "◉",
    "art": "art-tech",
    "title": "Panduan langkah demi langkah: Mengenali komponen komputer",
    "topic": "Mengenali komponen komputer",
    "format": "panduan",
    "summary": "Pelajari mengenali komponen komputer dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 25,
    "mood": "calm",
    "symbol": "◎",
    "steps": [
      [
        "Kenali kebutuhan",
        "Tentukan perangkat atau fitur yang terlibat dalam mengenali komponen komputer. Catat kondisi awal sebelum melakukan perubahan."
      ],
      [
        "Periksa pengaturan",
        "Buka menu pengaturan yang sesuai dan baca keterangan setiap opsi. Hindari mengubah pengaturan yang belum dipahami."
      ],
      [
        "Lakukan satu perubahan",
        "Ubah satu hal terlebih dahulu, lalu periksa hasilnya. Cara ini memudahkanmu mengetahui penyebab jika ada masalah."
      ],
      [
        "Verifikasi hasil",
        "Jalankan pemeriksaan sederhana untuk memastikan fitur bekerja. Bandingkan hasil dengan kondisi sebelum perubahan."
      ],
      [
        "Utamakan keamanan",
        "Gunakan sumber tepercaya, periksa izin yang diminta, dan hindari membagikan data pribadi saat mencoba langkah ini."
      ],
      [
        "Dokumentasikan",
        "Catat menu yang digunakan, hasil yang terlihat, dan cara mengembalikan pengaturan jika diperlukan."
      ]
    ],
    "takeaways": [
      "Tujuan mengenali komponen komputer perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mengenali komponen komputer pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "tech",
      "panduan",
      "advanced",
      "mengenali"
    ]
  },
  {
    "id": 62,
    "category": "tech",
    "categoryName": "Teknologi & Komputer",
    "emoji": "◉",
    "art": "art-tech",
    "title": "Workflow praktis: Mengatur folder kerja",
    "topic": "Mengatur folder kerja",
    "format": "workflow",
    "summary": "Bangun alur kerja mengatur folder kerja yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 21,
    "mood": "creative",
    "symbol": "▤",
    "steps": [
      [
        "Kenali kebutuhan",
        "Tentukan perangkat atau fitur yang terlibat dalam mengatur folder kerja. Catat kondisi awal sebelum melakukan perubahan."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah mengatur folder kerja dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Lakukan satu perubahan",
        "Ubah satu hal terlebih dahulu, lalu periksa hasilnya. Cara ini memudahkanmu mengetahui penyebab jika ada masalah."
      ],
      [
        "Verifikasi hasil",
        "Jalankan pemeriksaan sederhana untuk memastikan fitur bekerja. Bandingkan hasil dengan kondisi sebelum perubahan."
      ],
      [
        "Utamakan keamanan",
        "Gunakan sumber tepercaya, periksa izin yang diminta, dan hindari membagikan data pribadi saat mencoba langkah ini."
      ],
      [
        "Dokumentasikan",
        "Catat menu yang digunakan, hasil yang terlihat, dan cara mengembalikan pengaturan jika diperlukan."
      ]
    ],
    "takeaways": [
      "Tujuan mengatur folder kerja perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mengatur folder kerja pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "tech",
      "workflow",
      "medium",
      "mengatur"
    ]
  },
  {
    "id": 63,
    "category": "tech",
    "categoryName": "Teknologi & Komputer",
    "emoji": "◉",
    "art": "art-tech",
    "title": "Workflow praktis: Memahami file extension",
    "topic": "Memahami file extension",
    "format": "workflow",
    "summary": "Bangun alur kerja memahami file extension yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 28,
    "mood": "calm",
    "symbol": "⌘",
    "steps": [
      [
        "Kenali kebutuhan",
        "Tentukan perangkat atau fitur yang terlibat dalam memahami file extension. Catat kondisi awal sebelum melakukan perubahan."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah memahami file extension dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Lakukan satu perubahan",
        "Ubah satu hal terlebih dahulu, lalu periksa hasilnya. Cara ini memudahkanmu mengetahui penyebab jika ada masalah."
      ],
      [
        "Verifikasi hasil",
        "Jalankan pemeriksaan sederhana untuk memastikan fitur bekerja. Bandingkan hasil dengan kondisi sebelum perubahan."
      ],
      [
        "Utamakan keamanan",
        "Gunakan sumber tepercaya, periksa izin yang diminta, dan hindari membagikan data pribadi saat mencoba langkah ini."
      ],
      [
        "Dokumentasikan",
        "Catat menu yang digunakan, hasil yang terlihat, dan cara mengembalikan pengaturan jika diperlukan."
      ]
    ],
    "takeaways": [
      "Tujuan memahami file extension perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan memahami file extension pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "tech",
      "workflow",
      "advanced",
      "memahami"
    ]
  },
  {
    "id": 64,
    "category": "tech",
    "categoryName": "Teknologi & Komputer",
    "emoji": "◉",
    "art": "art-tech",
    "title": "Panduan langkah demi langkah: Memeriksa ruang penyimpanan",
    "topic": "Memeriksa ruang penyimpanan",
    "format": "panduan",
    "summary": "Pelajari memeriksa ruang penyimpanan dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 12,
    "mood": "focus",
    "symbol": "〰",
    "steps": [
      [
        "Kenali kebutuhan",
        "Tentukan perangkat atau fitur yang terlibat dalam memeriksa ruang penyimpanan. Catat kondisi awal sebelum melakukan perubahan."
      ],
      [
        "Periksa pengaturan",
        "Buka menu pengaturan yang sesuai dan baca keterangan setiap opsi. Hindari mengubah pengaturan yang belum dipahami."
      ],
      [
        "Lakukan satu perubahan",
        "Ubah satu hal terlebih dahulu, lalu periksa hasilnya. Cara ini memudahkanmu mengetahui penyebab jika ada masalah."
      ],
      [
        "Verifikasi hasil",
        "Jalankan pemeriksaan sederhana untuk memastikan fitur bekerja. Bandingkan hasil dengan kondisi sebelum perubahan."
      ],
      [
        "Utamakan keamanan",
        "Gunakan sumber tepercaya, periksa izin yang diminta, dan hindari membagikan data pribadi saat mencoba langkah ini."
      ],
      [
        "Dokumentasikan",
        "Catat menu yang digunakan, hasil yang terlihat, dan cara mengembalikan pengaturan jika diperlukan."
      ]
    ],
    "takeaways": [
      "Tujuan memeriksa ruang penyimpanan perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan memeriksa ruang penyimpanan pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "tech",
      "panduan",
      "beginner",
      "memeriksa"
    ]
  },
  {
    "id": 65,
    "category": "tech",
    "categoryName": "Teknologi & Komputer",
    "emoji": "◉",
    "art": "art-tech",
    "title": "Proyek mini: Mengelola aplikasi startup",
    "topic": "Mengelola aplikasi startup",
    "format": "proyek",
    "summary": "Proyek mini yang membantumu mempraktikkan mengelola aplikasi startup dari perencanaan sampai evaluasi.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 28,
    "mood": "calm",
    "symbol": "⌘",
    "steps": [
      [
        "Ruang lingkup proyek",
        "Tentukan hasil mini dari mengelola aplikasi startup yang bisa selesai dalam satu sesi. Batasi fitur agar proyek tetap realistis."
      ],
      [
        "Periksa pengaturan",
        "Buka menu pengaturan yang sesuai dan baca keterangan setiap opsi. Hindari mengubah pengaturan yang belum dipahami."
      ],
      [
        "Lakukan satu perubahan",
        "Ubah satu hal terlebih dahulu, lalu periksa hasilnya. Cara ini memudahkanmu mengetahui penyebab jika ada masalah."
      ],
      [
        "Verifikasi hasil",
        "Jalankan pemeriksaan sederhana untuk memastikan fitur bekerja. Bandingkan hasil dengan kondisi sebelum perubahan."
      ],
      [
        "Utamakan keamanan",
        "Gunakan sumber tepercaya, periksa izin yang diminta, dan hindari membagikan data pribadi saat mencoba langkah ini."
      ],
      [
        "Dokumentasikan",
        "Catat menu yang digunakan, hasil yang terlihat, dan cara mengembalikan pengaturan jika diperlukan."
      ]
    ],
    "takeaways": [
      "Tujuan mengelola aplikasi startup perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mengelola aplikasi startup pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "tech",
      "proyek",
      "advanced",
      "mengelola"
    ]
  },
  {
    "id": 66,
    "category": "tech",
    "categoryName": "Teknologi & Komputer",
    "emoji": "◉",
    "art": "art-tech",
    "title": "Workflow praktis: Memahami RAM dan storage",
    "topic": "Memahami RAM dan storage",
    "format": "workflow",
    "summary": "Bangun alur kerja memahami ram dan storage yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 15,
    "mood": "focus",
    "symbol": "✦",
    "steps": [
      [
        "Kenali kebutuhan",
        "Tentukan perangkat atau fitur yang terlibat dalam memahami ram dan storage. Catat kondisi awal sebelum melakukan perubahan."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah memahami ram dan storage dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Lakukan satu perubahan",
        "Ubah satu hal terlebih dahulu, lalu periksa hasilnya. Cara ini memudahkanmu mengetahui penyebab jika ada masalah."
      ],
      [
        "Verifikasi hasil",
        "Jalankan pemeriksaan sederhana untuk memastikan fitur bekerja. Bandingkan hasil dengan kondisi sebelum perubahan."
      ],
      [
        "Utamakan keamanan",
        "Gunakan sumber tepercaya, periksa izin yang diminta, dan hindari membagikan data pribadi saat mencoba langkah ini."
      ],
      [
        "Dokumentasikan",
        "Catat menu yang digunakan, hasil yang terlihat, dan cara mengembalikan pengaturan jika diperlukan."
      ]
    ],
    "takeaways": [
      "Tujuan memahami ram dan storage perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan memahami ram dan storage pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "tech",
      "workflow",
      "beginner",
      "memahami"
    ]
  },
  {
    "id": 67,
    "category": "tech",
    "categoryName": "Teknologi & Komputer",
    "emoji": "◉",
    "art": "art-tech",
    "title": "Latihan mandiri: Mengenal sistem operasi",
    "topic": "Mengenal sistem operasi",
    "format": "latihan",
    "summary": "Latihan terarah untuk menerapkan mengenal sistem operasi sambil mengecek pemahamanmu sendiri.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 31,
    "mood": "calm",
    "symbol": "◈",
    "steps": [
      [
        "Tantangan mini",
        "Coba lakukan mengenal sistem operasi dalam skala kecil selama 10–15 menit. Tuliskan hasil yang ingin kamu capai sebelum mulai."
      ],
      [
        "Periksa pengaturan",
        "Buka menu pengaturan yang sesuai dan baca keterangan setiap opsi. Hindari mengubah pengaturan yang belum dipahami."
      ],
      [
        "Lakukan satu perubahan",
        "Ubah satu hal terlebih dahulu, lalu periksa hasilnya. Cara ini memudahkanmu mengetahui penyebab jika ada masalah."
      ],
      [
        "Verifikasi hasil",
        "Jalankan pemeriksaan sederhana untuk memastikan fitur bekerja. Bandingkan hasil dengan kondisi sebelum perubahan."
      ],
      [
        "Utamakan keamanan",
        "Gunakan sumber tepercaya, periksa izin yang diminta, dan hindari membagikan data pribadi saat mencoba langkah ini."
      ],
      [
        "Dokumentasikan",
        "Catat menu yang digunakan, hasil yang terlihat, dan cara mengembalikan pengaturan jika diperlukan."
      ]
    ],
    "takeaways": [
      "Tujuan mengenal sistem operasi perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mengenal sistem operasi pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "tech",
      "latihan",
      "advanced",
      "mengenal"
    ]
  },
  {
    "id": 68,
    "category": "tech",
    "categoryName": "Teknologi & Komputer",
    "emoji": "◉",
    "art": "art-tech",
    "title": "Workflow praktis: Memperbarui aplikasi",
    "topic": "Memperbarui aplikasi",
    "format": "workflow",
    "summary": "Bangun alur kerja memperbarui aplikasi yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 15,
    "mood": "focus",
    "symbol": "✦",
    "steps": [
      [
        "Kenali kebutuhan",
        "Tentukan perangkat atau fitur yang terlibat dalam memperbarui aplikasi. Catat kondisi awal sebelum melakukan perubahan."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah memperbarui aplikasi dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Lakukan satu perubahan",
        "Ubah satu hal terlebih dahulu, lalu periksa hasilnya. Cara ini memudahkanmu mengetahui penyebab jika ada masalah."
      ],
      [
        "Verifikasi hasil",
        "Jalankan pemeriksaan sederhana untuk memastikan fitur bekerja. Bandingkan hasil dengan kondisi sebelum perubahan."
      ],
      [
        "Utamakan keamanan",
        "Gunakan sumber tepercaya, periksa izin yang diminta, dan hindari membagikan data pribadi saat mencoba langkah ini."
      ],
      [
        "Dokumentasikan",
        "Catat menu yang digunakan, hasil yang terlihat, dan cara mengembalikan pengaturan jika diperlukan."
      ]
    ],
    "takeaways": [
      "Tujuan memperbarui aplikasi perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan memperbarui aplikasi pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "tech",
      "workflow",
      "beginner",
      "memperbarui"
    ]
  },
  {
    "id": 69,
    "category": "tech",
    "categoryName": "Teknologi & Komputer",
    "emoji": "◉",
    "art": "art-tech",
    "title": "Proyek mini: Membuat arsip ZIP",
    "topic": "Membuat arsip ZIP",
    "format": "proyek",
    "summary": "Proyek mini yang membantumu mempraktikkan membuat arsip zip dari perencanaan sampai evaluasi.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 21,
    "mood": "creative",
    "symbol": "▤",
    "steps": [
      [
        "Ruang lingkup proyek",
        "Tentukan hasil mini dari membuat arsip zip yang bisa selesai dalam satu sesi. Batasi fitur agar proyek tetap realistis."
      ],
      [
        "Periksa pengaturan",
        "Buka menu pengaturan yang sesuai dan baca keterangan setiap opsi. Hindari mengubah pengaturan yang belum dipahami."
      ],
      [
        "Lakukan satu perubahan",
        "Ubah satu hal terlebih dahulu, lalu periksa hasilnya. Cara ini memudahkanmu mengetahui penyebab jika ada masalah."
      ],
      [
        "Verifikasi hasil",
        "Jalankan pemeriksaan sederhana untuk memastikan fitur bekerja. Bandingkan hasil dengan kondisi sebelum perubahan."
      ],
      [
        "Utamakan keamanan",
        "Gunakan sumber tepercaya, periksa izin yang diminta, dan hindari membagikan data pribadi saat mencoba langkah ini."
      ],
      [
        "Dokumentasikan",
        "Catat menu yang digunakan, hasil yang terlihat, dan cara mengembalikan pengaturan jika diperlukan."
      ]
    ],
    "takeaways": [
      "Tujuan membuat arsip zip perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat arsip zip pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "tech",
      "proyek",
      "medium",
      "membuat"
    ]
  },
  {
    "id": 70,
    "category": "tech",
    "categoryName": "Teknologi & Komputer",
    "emoji": "◉",
    "art": "art-tech",
    "title": "Panduan langkah demi langkah: Membaca spesifikasi perangkat",
    "topic": "Membaca spesifikasi perangkat",
    "format": "panduan",
    "summary": "Pelajari membaca spesifikasi perangkat dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 25,
    "mood": "calm",
    "symbol": "◎",
    "steps": [
      [
        "Kenali kebutuhan",
        "Tentukan perangkat atau fitur yang terlibat dalam membaca spesifikasi perangkat. Catat kondisi awal sebelum melakukan perubahan."
      ],
      [
        "Periksa pengaturan",
        "Buka menu pengaturan yang sesuai dan baca keterangan setiap opsi. Hindari mengubah pengaturan yang belum dipahami."
      ],
      [
        "Lakukan satu perubahan",
        "Ubah satu hal terlebih dahulu, lalu periksa hasilnya. Cara ini memudahkanmu mengetahui penyebab jika ada masalah."
      ],
      [
        "Verifikasi hasil",
        "Jalankan pemeriksaan sederhana untuk memastikan fitur bekerja. Bandingkan hasil dengan kondisi sebelum perubahan."
      ],
      [
        "Utamakan keamanan",
        "Gunakan sumber tepercaya, periksa izin yang diminta, dan hindari membagikan data pribadi saat mencoba langkah ini."
      ],
      [
        "Dokumentasikan",
        "Catat menu yang digunakan, hasil yang terlihat, dan cara mengembalikan pengaturan jika diperlukan."
      ]
    ],
    "takeaways": [
      "Tujuan membaca spesifikasi perangkat perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membaca spesifikasi perangkat pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "tech",
      "panduan",
      "advanced",
      "membaca"
    ]
  },
  {
    "id": 71,
    "category": "tech",
    "categoryName": "Teknologi & Komputer",
    "emoji": "◉",
    "art": "art-tech",
    "title": "Workflow praktis: Menghubungkan monitor eksternal",
    "topic": "Menghubungkan monitor eksternal",
    "format": "workflow",
    "summary": "Bangun alur kerja menghubungkan monitor eksternal yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 21,
    "mood": "creative",
    "symbol": "▤",
    "steps": [
      [
        "Kenali kebutuhan",
        "Tentukan perangkat atau fitur yang terlibat dalam menghubungkan monitor eksternal. Catat kondisi awal sebelum melakukan perubahan."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah menghubungkan monitor eksternal dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Lakukan satu perubahan",
        "Ubah satu hal terlebih dahulu, lalu periksa hasilnya. Cara ini memudahkanmu mengetahui penyebab jika ada masalah."
      ],
      [
        "Verifikasi hasil",
        "Jalankan pemeriksaan sederhana untuk memastikan fitur bekerja. Bandingkan hasil dengan kondisi sebelum perubahan."
      ],
      [
        "Utamakan keamanan",
        "Gunakan sumber tepercaya, periksa izin yang diminta, dan hindari membagikan data pribadi saat mencoba langkah ini."
      ],
      [
        "Dokumentasikan",
        "Catat menu yang digunakan, hasil yang terlihat, dan cara mengembalikan pengaturan jika diperlukan."
      ]
    ],
    "takeaways": [
      "Tujuan menghubungkan monitor eksternal perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan menghubungkan monitor eksternal pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "tech",
      "workflow",
      "medium",
      "menghubungkan"
    ]
  },
  {
    "id": 72,
    "category": "tech",
    "categoryName": "Teknologi & Komputer",
    "emoji": "◉",
    "art": "art-tech",
    "title": "Panduan langkah demi langkah: Membersihkan file sementara",
    "topic": "Membersihkan file sementara",
    "format": "panduan",
    "summary": "Pelajari membersihkan file sementara dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 25,
    "mood": "calm",
    "symbol": "⌘",
    "steps": [
      [
        "Kenali kebutuhan",
        "Tentukan perangkat atau fitur yang terlibat dalam membersihkan file sementara. Catat kondisi awal sebelum melakukan perubahan."
      ],
      [
        "Periksa pengaturan",
        "Buka menu pengaturan yang sesuai dan baca keterangan setiap opsi. Hindari mengubah pengaturan yang belum dipahami."
      ],
      [
        "Lakukan satu perubahan",
        "Ubah satu hal terlebih dahulu, lalu periksa hasilnya. Cara ini memudahkanmu mengetahui penyebab jika ada masalah."
      ],
      [
        "Verifikasi hasil",
        "Jalankan pemeriksaan sederhana untuk memastikan fitur bekerja. Bandingkan hasil dengan kondisi sebelum perubahan."
      ],
      [
        "Utamakan keamanan",
        "Gunakan sumber tepercaya, periksa izin yang diminta, dan hindari membagikan data pribadi saat mencoba langkah ini."
      ],
      [
        "Dokumentasikan",
        "Catat menu yang digunakan, hasil yang terlihat, dan cara mengembalikan pengaturan jika diperlukan."
      ]
    ],
    "takeaways": [
      "Tujuan membersihkan file sementara perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membersihkan file sementara pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "tech",
      "panduan",
      "advanced",
      "membersihkan"
    ]
  },
  {
    "id": 73,
    "category": "tech",
    "categoryName": "Teknologi & Komputer",
    "emoji": "◉",
    "art": "art-tech",
    "title": "Workflow praktis: Memahami jaringan Wi-Fi",
    "topic": "Memahami jaringan Wi-Fi",
    "format": "workflow",
    "summary": "Bangun alur kerja memahami jaringan wi-fi yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 21,
    "mood": "creative",
    "symbol": "〰",
    "steps": [
      [
        "Kenali kebutuhan",
        "Tentukan perangkat atau fitur yang terlibat dalam memahami jaringan wi-fi. Catat kondisi awal sebelum melakukan perubahan."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah memahami jaringan wi-fi dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Lakukan satu perubahan",
        "Ubah satu hal terlebih dahulu, lalu periksa hasilnya. Cara ini memudahkanmu mengetahui penyebab jika ada masalah."
      ],
      [
        "Verifikasi hasil",
        "Jalankan pemeriksaan sederhana untuk memastikan fitur bekerja. Bandingkan hasil dengan kondisi sebelum perubahan."
      ],
      [
        "Utamakan keamanan",
        "Gunakan sumber tepercaya, periksa izin yang diminta, dan hindari membagikan data pribadi saat mencoba langkah ini."
      ],
      [
        "Dokumentasikan",
        "Catat menu yang digunakan, hasil yang terlihat, dan cara mengembalikan pengaturan jika diperlukan."
      ]
    ],
    "takeaways": [
      "Tujuan memahami jaringan wi-fi perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan memahami jaringan wi-fi pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "tech",
      "workflow",
      "medium",
      "memahami"
    ]
  },
  {
    "id": 74,
    "category": "tech",
    "categoryName": "Teknologi & Komputer",
    "emoji": "◉",
    "art": "art-tech",
    "title": "Latihan mandiri: Memeriksa koneksi internet",
    "topic": "Memeriksa koneksi internet",
    "format": "latihan",
    "summary": "Latihan terarah untuk menerapkan memeriksa koneksi internet sambil mengecek pemahamanmu sendiri.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 18,
    "mood": "focus",
    "symbol": "⌘",
    "steps": [
      [
        "Tantangan mini",
        "Coba lakukan memeriksa koneksi internet dalam skala kecil selama 10–15 menit. Tuliskan hasil yang ingin kamu capai sebelum mulai."
      ],
      [
        "Periksa pengaturan",
        "Buka menu pengaturan yang sesuai dan baca keterangan setiap opsi. Hindari mengubah pengaturan yang belum dipahami."
      ],
      [
        "Lakukan satu perubahan",
        "Ubah satu hal terlebih dahulu, lalu periksa hasilnya. Cara ini memudahkanmu mengetahui penyebab jika ada masalah."
      ],
      [
        "Verifikasi hasil",
        "Jalankan pemeriksaan sederhana untuk memastikan fitur bekerja. Bandingkan hasil dengan kondisi sebelum perubahan."
      ],
      [
        "Utamakan keamanan",
        "Gunakan sumber tepercaya, periksa izin yang diminta, dan hindari membagikan data pribadi saat mencoba langkah ini."
      ],
      [
        "Dokumentasikan",
        "Catat menu yang digunakan, hasil yang terlihat, dan cara mengembalikan pengaturan jika diperlukan."
      ]
    ],
    "takeaways": [
      "Tujuan memeriksa koneksi internet perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan memeriksa koneksi internet pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "tech",
      "latihan",
      "beginner",
      "memeriksa"
    ]
  },
  {
    "id": 75,
    "category": "tech",
    "categoryName": "Teknologi & Komputer",
    "emoji": "◉",
    "art": "art-tech",
    "title": "Panduan langkah demi langkah: Mengelola akun perangkat",
    "topic": "Mengelola akun perangkat",
    "format": "panduan",
    "summary": "Pelajari mengelola akun perangkat dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 12,
    "mood": "focus",
    "symbol": "↗",
    "steps": [
      [
        "Kenali kebutuhan",
        "Tentukan perangkat atau fitur yang terlibat dalam mengelola akun perangkat. Catat kondisi awal sebelum melakukan perubahan."
      ],
      [
        "Periksa pengaturan",
        "Buka menu pengaturan yang sesuai dan baca keterangan setiap opsi. Hindari mengubah pengaturan yang belum dipahami."
      ],
      [
        "Lakukan satu perubahan",
        "Ubah satu hal terlebih dahulu, lalu periksa hasilnya. Cara ini memudahkanmu mengetahui penyebab jika ada masalah."
      ],
      [
        "Verifikasi hasil",
        "Jalankan pemeriksaan sederhana untuk memastikan fitur bekerja. Bandingkan hasil dengan kondisi sebelum perubahan."
      ],
      [
        "Utamakan keamanan",
        "Gunakan sumber tepercaya, periksa izin yang diminta, dan hindari membagikan data pribadi saat mencoba langkah ini."
      ],
      [
        "Dokumentasikan",
        "Catat menu yang digunakan, hasil yang terlihat, dan cara mengembalikan pengaturan jika diperlukan."
      ]
    ],
    "takeaways": [
      "Tujuan mengelola akun perangkat perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mengelola akun perangkat pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "tech",
      "panduan",
      "beginner",
      "mengelola"
    ]
  },
  {
    "id": 76,
    "category": "tech",
    "categoryName": "Teknologi & Komputer",
    "emoji": "◉",
    "art": "art-tech",
    "title": "Workflow praktis: Mengenal CPU dan GPU",
    "topic": "Mengenal CPU dan GPU",
    "format": "workflow",
    "summary": "Bangun alur kerja mengenal cpu dan gpu yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 28,
    "mood": "calm",
    "symbol": "◈",
    "steps": [
      [
        "Kenali kebutuhan",
        "Tentukan perangkat atau fitur yang terlibat dalam mengenal cpu dan gpu. Catat kondisi awal sebelum melakukan perubahan."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah mengenal cpu dan gpu dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Lakukan satu perubahan",
        "Ubah satu hal terlebih dahulu, lalu periksa hasilnya. Cara ini memudahkanmu mengetahui penyebab jika ada masalah."
      ],
      [
        "Verifikasi hasil",
        "Jalankan pemeriksaan sederhana untuk memastikan fitur bekerja. Bandingkan hasil dengan kondisi sebelum perubahan."
      ],
      [
        "Utamakan keamanan",
        "Gunakan sumber tepercaya, periksa izin yang diminta, dan hindari membagikan data pribadi saat mencoba langkah ini."
      ],
      [
        "Dokumentasikan",
        "Catat menu yang digunakan, hasil yang terlihat, dan cara mengembalikan pengaturan jika diperlukan."
      ]
    ],
    "takeaways": [
      "Tujuan mengenal cpu dan gpu perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mengenal cpu dan gpu pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "tech",
      "workflow",
      "advanced",
      "mengenal"
    ]
  },
  {
    "id": 77,
    "category": "tech",
    "categoryName": "Teknologi & Komputer",
    "emoji": "◉",
    "art": "art-tech",
    "title": "Workflow praktis: Memahami format gambar",
    "topic": "Memahami format gambar",
    "format": "workflow",
    "summary": "Bangun alur kerja memahami format gambar yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 15,
    "mood": "focus",
    "symbol": "◎",
    "steps": [
      [
        "Kenali kebutuhan",
        "Tentukan perangkat atau fitur yang terlibat dalam memahami format gambar. Catat kondisi awal sebelum melakukan perubahan."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah memahami format gambar dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Lakukan satu perubahan",
        "Ubah satu hal terlebih dahulu, lalu periksa hasilnya. Cara ini memudahkanmu mengetahui penyebab jika ada masalah."
      ],
      [
        "Verifikasi hasil",
        "Jalankan pemeriksaan sederhana untuk memastikan fitur bekerja. Bandingkan hasil dengan kondisi sebelum perubahan."
      ],
      [
        "Utamakan keamanan",
        "Gunakan sumber tepercaya, periksa izin yang diminta, dan hindari membagikan data pribadi saat mencoba langkah ini."
      ],
      [
        "Dokumentasikan",
        "Catat menu yang digunakan, hasil yang terlihat, dan cara mengembalikan pengaturan jika diperlukan."
      ]
    ],
    "takeaways": [
      "Tujuan memahami format gambar perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan memahami format gambar pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "tech",
      "workflow",
      "beginner",
      "memahami"
    ]
  },
  {
    "id": 78,
    "category": "tech",
    "categoryName": "Teknologi & Komputer",
    "emoji": "◉",
    "art": "art-tech",
    "title": "Latihan mandiri: Memahami format audio",
    "topic": "Memahami format audio",
    "format": "latihan",
    "summary": "Latihan terarah untuk menerapkan memahami format audio sambil mengecek pemahamanmu sendiri.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 31,
    "mood": "calm",
    "symbol": "▤",
    "steps": [
      [
        "Tantangan mini",
        "Coba lakukan memahami format audio dalam skala kecil selama 10–15 menit. Tuliskan hasil yang ingin kamu capai sebelum mulai."
      ],
      [
        "Periksa pengaturan",
        "Buka menu pengaturan yang sesuai dan baca keterangan setiap opsi. Hindari mengubah pengaturan yang belum dipahami."
      ],
      [
        "Lakukan satu perubahan",
        "Ubah satu hal terlebih dahulu, lalu periksa hasilnya. Cara ini memudahkanmu mengetahui penyebab jika ada masalah."
      ],
      [
        "Verifikasi hasil",
        "Jalankan pemeriksaan sederhana untuk memastikan fitur bekerja. Bandingkan hasil dengan kondisi sebelum perubahan."
      ],
      [
        "Utamakan keamanan",
        "Gunakan sumber tepercaya, periksa izin yang diminta, dan hindari membagikan data pribadi saat mencoba langkah ini."
      ],
      [
        "Dokumentasikan",
        "Catat menu yang digunakan, hasil yang terlihat, dan cara mengembalikan pengaturan jika diperlukan."
      ]
    ],
    "takeaways": [
      "Tujuan memahami format audio perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan memahami format audio pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "tech",
      "latihan",
      "advanced",
      "memahami"
    ]
  },
  {
    "id": 79,
    "category": "tech",
    "categoryName": "Teknologi & Komputer",
    "emoji": "◉",
    "art": "art-tech",
    "title": "Workflow praktis: Mengatur backup foto",
    "topic": "Mengatur backup foto",
    "format": "workflow",
    "summary": "Bangun alur kerja mengatur backup foto yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 15,
    "mood": "focus",
    "symbol": "◎",
    "steps": [
      [
        "Kenali kebutuhan",
        "Tentukan perangkat atau fitur yang terlibat dalam mengatur backup foto. Catat kondisi awal sebelum melakukan perubahan."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah mengatur backup foto dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Lakukan satu perubahan",
        "Ubah satu hal terlebih dahulu, lalu periksa hasilnya. Cara ini memudahkanmu mengetahui penyebab jika ada masalah."
      ],
      [
        "Verifikasi hasil",
        "Jalankan pemeriksaan sederhana untuk memastikan fitur bekerja. Bandingkan hasil dengan kondisi sebelum perubahan."
      ],
      [
        "Utamakan keamanan",
        "Gunakan sumber tepercaya, periksa izin yang diminta, dan hindari membagikan data pribadi saat mencoba langkah ini."
      ],
      [
        "Dokumentasikan",
        "Catat menu yang digunakan, hasil yang terlihat, dan cara mengembalikan pengaturan jika diperlukan."
      ]
    ],
    "takeaways": [
      "Tujuan mengatur backup foto perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mengatur backup foto pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "tech",
      "workflow",
      "beginner",
      "mengatur"
    ]
  },
  {
    "id": 80,
    "category": "tech",
    "categoryName": "Teknologi & Komputer",
    "emoji": "◉",
    "art": "art-tech",
    "title": "Proyek mini: Membuat folder proyek",
    "topic": "Membuat folder proyek",
    "format": "proyek",
    "summary": "Proyek mini yang membantumu mempraktikkan membuat folder proyek dari perencanaan sampai evaluasi.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 21,
    "mood": "creative",
    "symbol": "〰",
    "steps": [
      [
        "Ruang lingkup proyek",
        "Tentukan hasil mini dari membuat folder proyek yang bisa selesai dalam satu sesi. Batasi fitur agar proyek tetap realistis."
      ],
      [
        "Periksa pengaturan",
        "Buka menu pengaturan yang sesuai dan baca keterangan setiap opsi. Hindari mengubah pengaturan yang belum dipahami."
      ],
      [
        "Lakukan satu perubahan",
        "Ubah satu hal terlebih dahulu, lalu periksa hasilnya. Cara ini memudahkanmu mengetahui penyebab jika ada masalah."
      ],
      [
        "Verifikasi hasil",
        "Jalankan pemeriksaan sederhana untuk memastikan fitur bekerja. Bandingkan hasil dengan kondisi sebelum perubahan."
      ],
      [
        "Utamakan keamanan",
        "Gunakan sumber tepercaya, periksa izin yang diminta, dan hindari membagikan data pribadi saat mencoba langkah ini."
      ],
      [
        "Dokumentasikan",
        "Catat menu yang digunakan, hasil yang terlihat, dan cara mengembalikan pengaturan jika diperlukan."
      ]
    ],
    "takeaways": [
      "Tujuan membuat folder proyek perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat folder proyek pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "tech",
      "proyek",
      "medium",
      "membuat"
    ]
  },
  {
    "id": 81,
    "category": "tech",
    "categoryName": "Teknologi & Komputer",
    "emoji": "◉",
    "art": "art-tech",
    "title": "Panduan langkah demi langkah: Mengenal virtual memory",
    "topic": "Mengenal virtual memory",
    "format": "panduan",
    "summary": "Pelajari mengenal virtual memory dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 25,
    "mood": "calm",
    "symbol": "⌘",
    "steps": [
      [
        "Kenali kebutuhan",
        "Tentukan perangkat atau fitur yang terlibat dalam mengenal virtual memory. Catat kondisi awal sebelum melakukan perubahan."
      ],
      [
        "Periksa pengaturan",
        "Buka menu pengaturan yang sesuai dan baca keterangan setiap opsi. Hindari mengubah pengaturan yang belum dipahami."
      ],
      [
        "Lakukan satu perubahan",
        "Ubah satu hal terlebih dahulu, lalu periksa hasilnya. Cara ini memudahkanmu mengetahui penyebab jika ada masalah."
      ],
      [
        "Verifikasi hasil",
        "Jalankan pemeriksaan sederhana untuk memastikan fitur bekerja. Bandingkan hasil dengan kondisi sebelum perubahan."
      ],
      [
        "Utamakan keamanan",
        "Gunakan sumber tepercaya, periksa izin yang diminta, dan hindari membagikan data pribadi saat mencoba langkah ini."
      ],
      [
        "Dokumentasikan",
        "Catat menu yang digunakan, hasil yang terlihat, dan cara mengembalikan pengaturan jika diperlukan."
      ]
    ],
    "takeaways": [
      "Tujuan mengenal virtual memory perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mengenal virtual memory pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "tech",
      "panduan",
      "advanced",
      "mengenal"
    ]
  },
  {
    "id": 82,
    "category": "tech",
    "categoryName": "Teknologi & Komputer",
    "emoji": "◉",
    "art": "art-tech",
    "title": "Workflow praktis: Memahami proses aplikasi",
    "topic": "Memahami proses aplikasi",
    "format": "workflow",
    "summary": "Bangun alur kerja memahami proses aplikasi yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 21,
    "mood": "creative",
    "symbol": "〰",
    "steps": [
      [
        "Kenali kebutuhan",
        "Tentukan perangkat atau fitur yang terlibat dalam memahami proses aplikasi. Catat kondisi awal sebelum melakukan perubahan."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah memahami proses aplikasi dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Lakukan satu perubahan",
        "Ubah satu hal terlebih dahulu, lalu periksa hasilnya. Cara ini memudahkanmu mengetahui penyebab jika ada masalah."
      ],
      [
        "Verifikasi hasil",
        "Jalankan pemeriksaan sederhana untuk memastikan fitur bekerja. Bandingkan hasil dengan kondisi sebelum perubahan."
      ],
      [
        "Utamakan keamanan",
        "Gunakan sumber tepercaya, periksa izin yang diminta, dan hindari membagikan data pribadi saat mencoba langkah ini."
      ],
      [
        "Dokumentasikan",
        "Catat menu yang digunakan, hasil yang terlihat, dan cara mengembalikan pengaturan jika diperlukan."
      ]
    ],
    "takeaways": [
      "Tujuan memahami proses aplikasi perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan memahami proses aplikasi pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "tech",
      "workflow",
      "medium",
      "memahami"
    ]
  },
  {
    "id": 83,
    "category": "tech",
    "categoryName": "Teknologi & Komputer",
    "emoji": "◉",
    "art": "art-tech",
    "title": "Panduan langkah demi langkah: Mengenal file system",
    "topic": "Mengenal file system",
    "format": "panduan",
    "summary": "Pelajari mengenal file system dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 25,
    "mood": "calm",
    "symbol": "✧",
    "steps": [
      [
        "Kenali kebutuhan",
        "Tentukan perangkat atau fitur yang terlibat dalam mengenal file system. Catat kondisi awal sebelum melakukan perubahan."
      ],
      [
        "Periksa pengaturan",
        "Buka menu pengaturan yang sesuai dan baca keterangan setiap opsi. Hindari mengubah pengaturan yang belum dipahami."
      ],
      [
        "Lakukan satu perubahan",
        "Ubah satu hal terlebih dahulu, lalu periksa hasilnya. Cara ini memudahkanmu mengetahui penyebab jika ada masalah."
      ],
      [
        "Verifikasi hasil",
        "Jalankan pemeriksaan sederhana untuk memastikan fitur bekerja. Bandingkan hasil dengan kondisi sebelum perubahan."
      ],
      [
        "Utamakan keamanan",
        "Gunakan sumber tepercaya, periksa izin yang diminta, dan hindari membagikan data pribadi saat mencoba langkah ini."
      ],
      [
        "Dokumentasikan",
        "Catat menu yang digunakan, hasil yang terlihat, dan cara mengembalikan pengaturan jika diperlukan."
      ]
    ],
    "takeaways": [
      "Tujuan mengenal file system perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mengenal file system pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "tech",
      "panduan",
      "advanced",
      "mengenal"
    ]
  },
  {
    "id": 84,
    "category": "tech",
    "categoryName": "Teknologi & Komputer",
    "emoji": "◉",
    "art": "art-tech",
    "title": "Workflow praktis: Membuat media instalasi secara aman",
    "topic": "Membuat media instalasi secara aman",
    "format": "workflow",
    "summary": "Bangun alur kerja membuat media instalasi secara aman yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 21,
    "mood": "creative",
    "symbol": "↗",
    "steps": [
      [
        "Kenali kebutuhan",
        "Tentukan perangkat atau fitur yang terlibat dalam membuat media instalasi secara aman. Catat kondisi awal sebelum melakukan perubahan."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah membuat media instalasi secara aman dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Lakukan satu perubahan",
        "Ubah satu hal terlebih dahulu, lalu periksa hasilnya. Cara ini memudahkanmu mengetahui penyebab jika ada masalah."
      ],
      [
        "Verifikasi hasil",
        "Jalankan pemeriksaan sederhana untuk memastikan fitur bekerja. Bandingkan hasil dengan kondisi sebelum perubahan."
      ],
      [
        "Utamakan keamanan",
        "Gunakan sumber tepercaya, periksa izin yang diminta, dan hindari membagikan data pribadi saat mencoba langkah ini."
      ],
      [
        "Dokumentasikan",
        "Catat menu yang digunakan, hasil yang terlihat, dan cara mengembalikan pengaturan jika diperlukan."
      ]
    ],
    "takeaways": [
      "Tujuan membuat media instalasi secara aman perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat media instalasi secara aman pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "tech",
      "workflow",
      "medium",
      "membuat"
    ]
  },
  {
    "id": 85,
    "category": "tech",
    "categoryName": "Teknologi & Komputer",
    "emoji": "◉",
    "art": "art-tech",
    "title": "Latihan mandiri: Mengenal browser developer tools",
    "topic": "Mengenal browser developer tools",
    "format": "latihan",
    "summary": "Latihan terarah untuk menerapkan mengenal browser developer tools sambil mengecek pemahamanmu sendiri.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 18,
    "mood": "focus",
    "symbol": "✧",
    "steps": [
      [
        "Tantangan mini",
        "Coba lakukan mengenal browser developer tools dalam skala kecil selama 10–15 menit. Tuliskan hasil yang ingin kamu capai sebelum mulai."
      ],
      [
        "Periksa pengaturan",
        "Buka menu pengaturan yang sesuai dan baca keterangan setiap opsi. Hindari mengubah pengaturan yang belum dipahami."
      ],
      [
        "Lakukan satu perubahan",
        "Ubah satu hal terlebih dahulu, lalu periksa hasilnya. Cara ini memudahkanmu mengetahui penyebab jika ada masalah."
      ],
      [
        "Verifikasi hasil",
        "Jalankan pemeriksaan sederhana untuk memastikan fitur bekerja. Bandingkan hasil dengan kondisi sebelum perubahan."
      ],
      [
        "Utamakan keamanan",
        "Gunakan sumber tepercaya, periksa izin yang diminta, dan hindari membagikan data pribadi saat mencoba langkah ini."
      ],
      [
        "Dokumentasikan",
        "Catat menu yang digunakan, hasil yang terlihat, dan cara mengembalikan pengaturan jika diperlukan."
      ]
    ],
    "takeaways": [
      "Tujuan mengenal browser developer tools perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mengenal browser developer tools pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "tech",
      "latihan",
      "beginner",
      "mengenal"
    ]
  },
  {
    "id": 86,
    "category": "tech",
    "categoryName": "Teknologi & Komputer",
    "emoji": "◉",
    "art": "art-tech",
    "title": "Workflow praktis: Mengelola ekstensi browser",
    "topic": "Mengelola ekstensi browser",
    "format": "workflow",
    "summary": "Bangun alur kerja mengelola ekstensi browser yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 15,
    "mood": "focus",
    "symbol": "◎",
    "steps": [
      [
        "Kenali kebutuhan",
        "Tentukan perangkat atau fitur yang terlibat dalam mengelola ekstensi browser. Catat kondisi awal sebelum melakukan perubahan."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah mengelola ekstensi browser dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Lakukan satu perubahan",
        "Ubah satu hal terlebih dahulu, lalu periksa hasilnya. Cara ini memudahkanmu mengetahui penyebab jika ada masalah."
      ],
      [
        "Verifikasi hasil",
        "Jalankan pemeriksaan sederhana untuk memastikan fitur bekerja. Bandingkan hasil dengan kondisi sebelum perubahan."
      ],
      [
        "Utamakan keamanan",
        "Gunakan sumber tepercaya, periksa izin yang diminta, dan hindari membagikan data pribadi saat mencoba langkah ini."
      ],
      [
        "Dokumentasikan",
        "Catat menu yang digunakan, hasil yang terlihat, dan cara mengembalikan pengaturan jika diperlukan."
      ]
    ],
    "takeaways": [
      "Tujuan mengelola ekstensi browser perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mengelola ekstensi browser pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "tech",
      "workflow",
      "beginner",
      "mengelola"
    ]
  },
  {
    "id": 87,
    "category": "tech",
    "categoryName": "Teknologi & Komputer",
    "emoji": "◉",
    "art": "art-tech",
    "title": "Workflow praktis: Mengecek kesehatan disk",
    "topic": "Mengecek kesehatan disk",
    "format": "workflow",
    "summary": "Bangun alur kerja mengecek kesehatan disk yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 28,
    "mood": "calm",
    "symbol": "▤",
    "steps": [
      [
        "Kenali kebutuhan",
        "Tentukan perangkat atau fitur yang terlibat dalam mengecek kesehatan disk. Catat kondisi awal sebelum melakukan perubahan."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah mengecek kesehatan disk dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Lakukan satu perubahan",
        "Ubah satu hal terlebih dahulu, lalu periksa hasilnya. Cara ini memudahkanmu mengetahui penyebab jika ada masalah."
      ],
      [
        "Verifikasi hasil",
        "Jalankan pemeriksaan sederhana untuk memastikan fitur bekerja. Bandingkan hasil dengan kondisi sebelum perubahan."
      ],
      [
        "Utamakan keamanan",
        "Gunakan sumber tepercaya, periksa izin yang diminta, dan hindari membagikan data pribadi saat mencoba langkah ini."
      ],
      [
        "Dokumentasikan",
        "Catat menu yang digunakan, hasil yang terlihat, dan cara mengembalikan pengaturan jika diperlukan."
      ]
    ],
    "takeaways": [
      "Tujuan mengecek kesehatan disk perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mengecek kesehatan disk pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "tech",
      "workflow",
      "advanced",
      "mengecek"
    ]
  },
  {
    "id": 88,
    "category": "tech",
    "categoryName": "Teknologi & Komputer",
    "emoji": "◉",
    "art": "art-tech",
    "title": "Checklist penerapan: Memahami update keamanan",
    "topic": "Memahami update keamanan",
    "format": "checklist",
    "summary": "Daftar periksa untuk menerapkan memahami update keamanan tanpa melewatkan hal penting.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 25,
    "mood": "calm",
    "symbol": "◎",
    "steps": [
      [
        "Periksa kesiapan",
        "Pastikan tujuan memahami update keamanan jelas dan semua bahan penting tersedia."
      ],
      [
        "Periksa pengaturan",
        "Buka menu pengaturan yang sesuai dan baca keterangan setiap opsi. Hindari mengubah pengaturan yang belum dipahami."
      ],
      [
        "Lakukan satu perubahan",
        "Ubah satu hal terlebih dahulu, lalu periksa hasilnya. Cara ini memudahkanmu mengetahui penyebab jika ada masalah."
      ],
      [
        "Verifikasi hasil",
        "Jalankan pemeriksaan sederhana untuk memastikan fitur bekerja. Bandingkan hasil dengan kondisi sebelum perubahan."
      ],
      [
        "Utamakan keamanan",
        "Gunakan sumber tepercaya, periksa izin yang diminta, dan hindari membagikan data pribadi saat mencoba langkah ini."
      ],
      [
        "Dokumentasikan",
        "Catat menu yang digunakan, hasil yang terlihat, dan cara mengembalikan pengaturan jika diperlukan."
      ]
    ],
    "takeaways": [
      "Tujuan memahami update keamanan perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan memahami update keamanan pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "tech",
      "checklist",
      "advanced",
      "memahami"
    ]
  },
  {
    "id": 89,
    "category": "tech",
    "categoryName": "Teknologi & Komputer",
    "emoji": "◉",
    "art": "art-tech",
    "title": "Latihan mandiri: Mengelola perangkat USB",
    "topic": "Mengelola perangkat USB",
    "format": "latihan",
    "summary": "Latihan terarah untuk menerapkan mengelola perangkat usb sambil mengecek pemahamanmu sendiri.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 31,
    "mood": "calm",
    "symbol": "〰",
    "steps": [
      [
        "Tantangan mini",
        "Coba lakukan mengelola perangkat usb dalam skala kecil selama 10–15 menit. Tuliskan hasil yang ingin kamu capai sebelum mulai."
      ],
      [
        "Periksa pengaturan",
        "Buka menu pengaturan yang sesuai dan baca keterangan setiap opsi. Hindari mengubah pengaturan yang belum dipahami."
      ],
      [
        "Lakukan satu perubahan",
        "Ubah satu hal terlebih dahulu, lalu periksa hasilnya. Cara ini memudahkanmu mengetahui penyebab jika ada masalah."
      ],
      [
        "Verifikasi hasil",
        "Jalankan pemeriksaan sederhana untuk memastikan fitur bekerja. Bandingkan hasil dengan kondisi sebelum perubahan."
      ],
      [
        "Utamakan keamanan",
        "Gunakan sumber tepercaya, periksa izin yang diminta, dan hindari membagikan data pribadi saat mencoba langkah ini."
      ],
      [
        "Dokumentasikan",
        "Catat menu yang digunakan, hasil yang terlihat, dan cara mengembalikan pengaturan jika diperlukan."
      ]
    ],
    "takeaways": [
      "Tujuan mengelola perangkat usb perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mengelola perangkat usb pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "tech",
      "latihan",
      "advanced",
      "mengelola"
    ]
  },
  {
    "id": 90,
    "category": "tech",
    "categoryName": "Teknologi & Komputer",
    "emoji": "◉",
    "art": "art-tech",
    "title": "Workflow praktis: Membuat checklist perawatan",
    "topic": "Membuat checklist perawatan",
    "format": "workflow",
    "summary": "Bangun alur kerja membuat checklist perawatan yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 15,
    "mood": "focus",
    "symbol": "⌘",
    "steps": [
      [
        "Kenali kebutuhan",
        "Tentukan perangkat atau fitur yang terlibat dalam membuat checklist perawatan. Catat kondisi awal sebelum melakukan perubahan."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah membuat checklist perawatan dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Lakukan satu perubahan",
        "Ubah satu hal terlebih dahulu, lalu periksa hasilnya. Cara ini memudahkanmu mengetahui penyebab jika ada masalah."
      ],
      [
        "Verifikasi hasil",
        "Jalankan pemeriksaan sederhana untuk memastikan fitur bekerja. Bandingkan hasil dengan kondisi sebelum perubahan."
      ],
      [
        "Utamakan keamanan",
        "Gunakan sumber tepercaya, periksa izin yang diminta, dan hindari membagikan data pribadi saat mencoba langkah ini."
      ],
      [
        "Dokumentasikan",
        "Catat menu yang digunakan, hasil yang terlihat, dan cara mengembalikan pengaturan jika diperlukan."
      ]
    ],
    "takeaways": [
      "Tujuan membuat checklist perawatan perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat checklist perawatan pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "tech",
      "workflow",
      "beginner",
      "membuat"
    ]
  },
  {
    "id": 91,
    "category": "study",
    "categoryName": "Belajar & Produktivitas",
    "emoji": "▤",
    "art": "art-study",
    "title": "Panduan langkah demi langkah: Membuat jadwal belajar realistis",
    "topic": "Membuat jadwal belajar realistis",
    "format": "panduan",
    "summary": "Pelajari membuat jadwal belajar realistis dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 12,
    "mood": "focus",
    "symbol": "✦",
    "steps": [
      [
        "Tentukan tujuan kecil",
        "Tulis apa yang ingin kamu pahami dari membuat jadwal belajar realistis dalam satu kalimat yang bisa diperiksa."
      ],
      [
        "Siapkan bahan",
        "Kumpulkan catatan, buku, atau sumber tepercaya. Jauhkan gangguan yang tidak diperlukan selama sesi belajar."
      ],
      [
        "Belajar secara aktif",
        "Baca bagian singkat, tutup sumbernya, lalu jelaskan kembali dengan kata-katamu sendiri."
      ],
      [
        "Uji pemahaman",
        "Buat satu pertanyaan atau contoh dari membuat jadwal belajar realistis. Periksa jawaban dan tandai bagian yang masih membingungkan."
      ],
      [
        "Istirahat terencana",
        "Berikan jeda singkat setelah fokus. Kembali dengan target kecil berikutnya, bukan mencoba menyelesaikan semuanya sekaligus."
      ],
      [
        "Tinjau ulang",
        "Tulis ringkasan tiga poin dan tentukan kapan akan mengulangnya. Perbaiki rencana berdasarkan bagian yang paling sulit."
      ]
    ],
    "takeaways": [
      "Tujuan membuat jadwal belajar realistis perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat jadwal belajar realistis pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "study",
      "panduan",
      "beginner",
      "membuat"
    ]
  },
  {
    "id": 92,
    "category": "study",
    "categoryName": "Belajar & Produktivitas",
    "emoji": "▤",
    "art": "art-study",
    "title": "Panduan langkah demi langkah: Membuat catatan Cornell",
    "topic": "Membuat catatan Cornell",
    "format": "panduan",
    "summary": "Pelajari membuat catatan cornell dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 25,
    "mood": "calm",
    "symbol": "◈",
    "steps": [
      [
        "Tentukan tujuan kecil",
        "Tulis apa yang ingin kamu pahami dari membuat catatan cornell dalam satu kalimat yang bisa diperiksa."
      ],
      [
        "Siapkan bahan",
        "Kumpulkan catatan, buku, atau sumber tepercaya. Jauhkan gangguan yang tidak diperlukan selama sesi belajar."
      ],
      [
        "Belajar secara aktif",
        "Baca bagian singkat, tutup sumbernya, lalu jelaskan kembali dengan kata-katamu sendiri."
      ],
      [
        "Uji pemahaman",
        "Buat satu pertanyaan atau contoh dari membuat catatan cornell. Periksa jawaban dan tandai bagian yang masih membingungkan."
      ],
      [
        "Istirahat terencana",
        "Berikan jeda singkat setelah fokus. Kembali dengan target kecil berikutnya, bukan mencoba menyelesaikan semuanya sekaligus."
      ],
      [
        "Tinjau ulang",
        "Tulis ringkasan tiga poin dan tentukan kapan akan mengulangnya. Perbaiki rencana berdasarkan bagian yang paling sulit."
      ]
    ],
    "takeaways": [
      "Tujuan membuat catatan cornell perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat catatan cornell pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "study",
      "panduan",
      "advanced",
      "membuat"
    ]
  },
  {
    "id": 93,
    "category": "study",
    "categoryName": "Belajar & Produktivitas",
    "emoji": "▤",
    "art": "art-study",
    "title": "Panduan langkah demi langkah: Menyusun target mingguan",
    "topic": "Menyusun target mingguan",
    "format": "panduan",
    "summary": "Pelajari menyusun target mingguan dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 12,
    "mood": "focus",
    "symbol": "◎",
    "steps": [
      [
        "Tentukan tujuan kecil",
        "Tulis apa yang ingin kamu pahami dari menyusun target mingguan dalam satu kalimat yang bisa diperiksa."
      ],
      [
        "Siapkan bahan",
        "Kumpulkan catatan, buku, atau sumber tepercaya. Jauhkan gangguan yang tidak diperlukan selama sesi belajar."
      ],
      [
        "Belajar secara aktif",
        "Baca bagian singkat, tutup sumbernya, lalu jelaskan kembali dengan kata-katamu sendiri."
      ],
      [
        "Uji pemahaman",
        "Buat satu pertanyaan atau contoh dari menyusun target mingguan. Periksa jawaban dan tandai bagian yang masih membingungkan."
      ],
      [
        "Istirahat terencana",
        "Berikan jeda singkat setelah fokus. Kembali dengan target kecil berikutnya, bukan mencoba menyelesaikan semuanya sekaligus."
      ],
      [
        "Tinjau ulang",
        "Tulis ringkasan tiga poin dan tentukan kapan akan mengulangnya. Perbaiki rencana berdasarkan bagian yang paling sulit."
      ]
    ],
    "takeaways": [
      "Tujuan menyusun target mingguan perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan menyusun target mingguan pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "study",
      "panduan",
      "beginner",
      "menyusun"
    ]
  },
  {
    "id": 94,
    "category": "study",
    "categoryName": "Belajar & Produktivitas",
    "emoji": "▤",
    "art": "art-study",
    "title": "Workflow praktis: Membuat flashcard efektif",
    "topic": "Membuat flashcard efektif",
    "format": "workflow",
    "summary": "Bangun alur kerja membuat flashcard efektif yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 28,
    "mood": "calm",
    "symbol": "▤",
    "steps": [
      [
        "Tentukan tujuan kecil",
        "Tulis apa yang ingin kamu pahami dari membuat flashcard efektif dalam satu kalimat yang bisa diperiksa."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah membuat flashcard efektif dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Belajar secara aktif",
        "Baca bagian singkat, tutup sumbernya, lalu jelaskan kembali dengan kata-katamu sendiri."
      ],
      [
        "Uji pemahaman",
        "Buat satu pertanyaan atau contoh dari membuat flashcard efektif. Periksa jawaban dan tandai bagian yang masih membingungkan."
      ],
      [
        "Istirahat terencana",
        "Berikan jeda singkat setelah fokus. Kembali dengan target kecil berikutnya, bukan mencoba menyelesaikan semuanya sekaligus."
      ],
      [
        "Tinjau ulang",
        "Tulis ringkasan tiga poin dan tentukan kapan akan mengulangnya. Perbaiki rencana berdasarkan bagian yang paling sulit."
      ]
    ],
    "takeaways": [
      "Tujuan membuat flashcard efektif perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat flashcard efektif pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "study",
      "workflow",
      "advanced",
      "membuat"
    ]
  },
  {
    "id": 95,
    "category": "study",
    "categoryName": "Belajar & Produktivitas",
    "emoji": "▤",
    "art": "art-study",
    "title": "Panduan langkah demi langkah: Menerapkan spaced repetition",
    "topic": "Menerapkan spaced repetition",
    "format": "panduan",
    "summary": "Pelajari menerapkan spaced repetition dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 12,
    "mood": "focus",
    "symbol": "◎",
    "steps": [
      [
        "Tentukan tujuan kecil",
        "Tulis apa yang ingin kamu pahami dari menerapkan spaced repetition dalam satu kalimat yang bisa diperiksa."
      ],
      [
        "Siapkan bahan",
        "Kumpulkan catatan, buku, atau sumber tepercaya. Jauhkan gangguan yang tidak diperlukan selama sesi belajar."
      ],
      [
        "Belajar secara aktif",
        "Baca bagian singkat, tutup sumbernya, lalu jelaskan kembali dengan kata-katamu sendiri."
      ],
      [
        "Uji pemahaman",
        "Buat satu pertanyaan atau contoh dari menerapkan spaced repetition. Periksa jawaban dan tandai bagian yang masih membingungkan."
      ],
      [
        "Istirahat terencana",
        "Berikan jeda singkat setelah fokus. Kembali dengan target kecil berikutnya, bukan mencoba menyelesaikan semuanya sekaligus."
      ],
      [
        "Tinjau ulang",
        "Tulis ringkasan tiga poin dan tentukan kapan akan mengulangnya. Perbaiki rencana berdasarkan bagian yang paling sulit."
      ]
    ],
    "takeaways": [
      "Tujuan menerapkan spaced repetition perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan menerapkan spaced repetition pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "study",
      "panduan",
      "beginner",
      "menerapkan"
    ]
  },
  {
    "id": 96,
    "category": "study",
    "categoryName": "Belajar & Produktivitas",
    "emoji": "▤",
    "art": "art-study",
    "title": "Panduan langkah demi langkah: Membuat ringkasan materi",
    "topic": "Membuat ringkasan materi",
    "format": "panduan",
    "summary": "Pelajari membuat ringkasan materi dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 18,
    "mood": "creative",
    "symbol": "↗",
    "steps": [
      [
        "Tentukan tujuan kecil",
        "Tulis apa yang ingin kamu pahami dari membuat ringkasan materi dalam satu kalimat yang bisa diperiksa."
      ],
      [
        "Siapkan bahan",
        "Kumpulkan catatan, buku, atau sumber tepercaya. Jauhkan gangguan yang tidak diperlukan selama sesi belajar."
      ],
      [
        "Belajar secara aktif",
        "Baca bagian singkat, tutup sumbernya, lalu jelaskan kembali dengan kata-katamu sendiri."
      ],
      [
        "Uji pemahaman",
        "Buat satu pertanyaan atau contoh dari membuat ringkasan materi. Periksa jawaban dan tandai bagian yang masih membingungkan."
      ],
      [
        "Istirahat terencana",
        "Berikan jeda singkat setelah fokus. Kembali dengan target kecil berikutnya, bukan mencoba menyelesaikan semuanya sekaligus."
      ],
      [
        "Tinjau ulang",
        "Tulis ringkasan tiga poin dan tentukan kapan akan mengulangnya. Perbaiki rencana berdasarkan bagian yang paling sulit."
      ]
    ],
    "takeaways": [
      "Tujuan membuat ringkasan materi perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat ringkasan materi pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "study",
      "panduan",
      "medium",
      "membuat"
    ]
  },
  {
    "id": 97,
    "category": "study",
    "categoryName": "Belajar & Produktivitas",
    "emoji": "▤",
    "art": "art-study",
    "title": "Workflow praktis: Memecah tugas besar",
    "topic": "Memecah tugas besar",
    "format": "workflow",
    "summary": "Bangun alur kerja memecah tugas besar yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 15,
    "mood": "focus",
    "symbol": "✧",
    "steps": [
      [
        "Tentukan tujuan kecil",
        "Tulis apa yang ingin kamu pahami dari memecah tugas besar dalam satu kalimat yang bisa diperiksa."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah memecah tugas besar dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Belajar secara aktif",
        "Baca bagian singkat, tutup sumbernya, lalu jelaskan kembali dengan kata-katamu sendiri."
      ],
      [
        "Uji pemahaman",
        "Buat satu pertanyaan atau contoh dari memecah tugas besar. Periksa jawaban dan tandai bagian yang masih membingungkan."
      ],
      [
        "Istirahat terencana",
        "Berikan jeda singkat setelah fokus. Kembali dengan target kecil berikutnya, bukan mencoba menyelesaikan semuanya sekaligus."
      ],
      [
        "Tinjau ulang",
        "Tulis ringkasan tiga poin dan tentukan kapan akan mengulangnya. Perbaiki rencana berdasarkan bagian yang paling sulit."
      ]
    ],
    "takeaways": [
      "Tujuan memecah tugas besar perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan memecah tugas besar pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "study",
      "workflow",
      "beginner",
      "memecah"
    ]
  },
  {
    "id": 98,
    "category": "study",
    "categoryName": "Belajar & Produktivitas",
    "emoji": "▤",
    "art": "art-study",
    "title": "Latihan mandiri: Mengurangi distraksi belajar",
    "topic": "Mengurangi distraksi belajar",
    "format": "latihan",
    "summary": "Latihan terarah untuk menerapkan mengurangi distraksi belajar sambil mengecek pemahamanmu sendiri.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 31,
    "mood": "calm",
    "symbol": "↗",
    "steps": [
      [
        "Tantangan mini",
        "Coba lakukan mengurangi distraksi belajar dalam skala kecil selama 10–15 menit. Tuliskan hasil yang ingin kamu capai sebelum mulai."
      ],
      [
        "Siapkan bahan",
        "Kumpulkan catatan, buku, atau sumber tepercaya. Jauhkan gangguan yang tidak diperlukan selama sesi belajar."
      ],
      [
        "Belajar secara aktif",
        "Baca bagian singkat, tutup sumbernya, lalu jelaskan kembali dengan kata-katamu sendiri."
      ],
      [
        "Uji pemahaman",
        "Buat satu pertanyaan atau contoh dari mengurangi distraksi belajar. Periksa jawaban dan tandai bagian yang masih membingungkan."
      ],
      [
        "Istirahat terencana",
        "Berikan jeda singkat setelah fokus. Kembali dengan target kecil berikutnya, bukan mencoba menyelesaikan semuanya sekaligus."
      ],
      [
        "Tinjau ulang",
        "Tulis ringkasan tiga poin dan tentukan kapan akan mengulangnya. Perbaiki rencana berdasarkan bagian yang paling sulit."
      ]
    ],
    "takeaways": [
      "Tujuan mengurangi distraksi belajar perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mengurangi distraksi belajar pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "study",
      "latihan",
      "advanced",
      "mengurangi"
    ]
  },
  {
    "id": 99,
    "category": "study",
    "categoryName": "Belajar & Produktivitas",
    "emoji": "▤",
    "art": "art-study",
    "title": "Panduan langkah demi langkah: Menyiapkan sesi ujian",
    "topic": "Menyiapkan sesi ujian",
    "format": "panduan",
    "summary": "Pelajari menyiapkan sesi ujian dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 25,
    "mood": "calm",
    "symbol": "◈",
    "steps": [
      [
        "Tentukan tujuan kecil",
        "Tulis apa yang ingin kamu pahami dari menyiapkan sesi ujian dalam satu kalimat yang bisa diperiksa."
      ],
      [
        "Siapkan bahan",
        "Kumpulkan catatan, buku, atau sumber tepercaya. Jauhkan gangguan yang tidak diperlukan selama sesi belajar."
      ],
      [
        "Belajar secara aktif",
        "Baca bagian singkat, tutup sumbernya, lalu jelaskan kembali dengan kata-katamu sendiri."
      ],
      [
        "Uji pemahaman",
        "Buat satu pertanyaan atau contoh dari menyiapkan sesi ujian. Periksa jawaban dan tandai bagian yang masih membingungkan."
      ],
      [
        "Istirahat terencana",
        "Berikan jeda singkat setelah fokus. Kembali dengan target kecil berikutnya, bukan mencoba menyelesaikan semuanya sekaligus."
      ],
      [
        "Tinjau ulang",
        "Tulis ringkasan tiga poin dan tentukan kapan akan mengulangnya. Perbaiki rencana berdasarkan bagian yang paling sulit."
      ]
    ],
    "takeaways": [
      "Tujuan menyiapkan sesi ujian perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan menyiapkan sesi ujian pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "study",
      "panduan",
      "advanced",
      "menyiapkan"
    ]
  },
  {
    "id": 100,
    "category": "study",
    "categoryName": "Belajar & Produktivitas",
    "emoji": "▤",
    "art": "art-study",
    "title": "Proyek mini: Mengevaluasi hasil belajar",
    "topic": "Mengevaluasi hasil belajar",
    "format": "proyek",
    "summary": "Proyek mini yang membantumu mempraktikkan mengevaluasi hasil belajar dari perencanaan sampai evaluasi.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 21,
    "mood": "creative",
    "symbol": "✦",
    "steps": [
      [
        "Ruang lingkup proyek",
        "Tentukan hasil mini dari mengevaluasi hasil belajar yang bisa selesai dalam satu sesi. Batasi fitur agar proyek tetap realistis."
      ],
      [
        "Siapkan bahan",
        "Kumpulkan catatan, buku, atau sumber tepercaya. Jauhkan gangguan yang tidak diperlukan selama sesi belajar."
      ],
      [
        "Belajar secara aktif",
        "Baca bagian singkat, tutup sumbernya, lalu jelaskan kembali dengan kata-katamu sendiri."
      ],
      [
        "Uji pemahaman",
        "Buat satu pertanyaan atau contoh dari mengevaluasi hasil belajar. Periksa jawaban dan tandai bagian yang masih membingungkan."
      ],
      [
        "Istirahat terencana",
        "Berikan jeda singkat setelah fokus. Kembali dengan target kecil berikutnya, bukan mencoba menyelesaikan semuanya sekaligus."
      ],
      [
        "Tinjau ulang",
        "Tulis ringkasan tiga poin dan tentukan kapan akan mengulangnya. Perbaiki rencana berdasarkan bagian yang paling sulit."
      ]
    ],
    "takeaways": [
      "Tujuan mengevaluasi hasil belajar perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mengevaluasi hasil belajar pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "study",
      "proyek",
      "medium",
      "mengevaluasi"
    ]
  },
  {
    "id": 101,
    "category": "study",
    "categoryName": "Belajar & Produktivitas",
    "emoji": "▤",
    "art": "art-study",
    "title": "Panduan langkah demi langkah: Mengatur meja belajar",
    "topic": "Mengatur meja belajar",
    "format": "panduan",
    "summary": "Pelajari mengatur meja belajar dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 25,
    "mood": "calm",
    "symbol": "◈",
    "steps": [
      [
        "Tentukan tujuan kecil",
        "Tulis apa yang ingin kamu pahami dari mengatur meja belajar dalam satu kalimat yang bisa diperiksa."
      ],
      [
        "Siapkan bahan",
        "Kumpulkan catatan, buku, atau sumber tepercaya. Jauhkan gangguan yang tidak diperlukan selama sesi belajar."
      ],
      [
        "Belajar secara aktif",
        "Baca bagian singkat, tutup sumbernya, lalu jelaskan kembali dengan kata-katamu sendiri."
      ],
      [
        "Uji pemahaman",
        "Buat satu pertanyaan atau contoh dari mengatur meja belajar. Periksa jawaban dan tandai bagian yang masih membingungkan."
      ],
      [
        "Istirahat terencana",
        "Berikan jeda singkat setelah fokus. Kembali dengan target kecil berikutnya, bukan mencoba menyelesaikan semuanya sekaligus."
      ],
      [
        "Tinjau ulang",
        "Tulis ringkasan tiga poin dan tentukan kapan akan mengulangnya. Perbaiki rencana berdasarkan bagian yang paling sulit."
      ]
    ],
    "takeaways": [
      "Tujuan mengatur meja belajar perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mengatur meja belajar pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "study",
      "panduan",
      "advanced",
      "mengatur"
    ]
  },
  {
    "id": 102,
    "category": "study",
    "categoryName": "Belajar & Produktivitas",
    "emoji": "▤",
    "art": "art-study",
    "title": "Panduan langkah demi langkah: Mencatat pertanyaan penting",
    "topic": "Mencatat pertanyaan penting",
    "format": "panduan",
    "summary": "Pelajari mencatat pertanyaan penting dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 12,
    "mood": "focus",
    "symbol": "◎",
    "steps": [
      [
        "Tentukan tujuan kecil",
        "Tulis apa yang ingin kamu pahami dari mencatat pertanyaan penting dalam satu kalimat yang bisa diperiksa."
      ],
      [
        "Siapkan bahan",
        "Kumpulkan catatan, buku, atau sumber tepercaya. Jauhkan gangguan yang tidak diperlukan selama sesi belajar."
      ],
      [
        "Belajar secara aktif",
        "Baca bagian singkat, tutup sumbernya, lalu jelaskan kembali dengan kata-katamu sendiri."
      ],
      [
        "Uji pemahaman",
        "Buat satu pertanyaan atau contoh dari mencatat pertanyaan penting. Periksa jawaban dan tandai bagian yang masih membingungkan."
      ],
      [
        "Istirahat terencana",
        "Berikan jeda singkat setelah fokus. Kembali dengan target kecil berikutnya, bukan mencoba menyelesaikan semuanya sekaligus."
      ],
      [
        "Tinjau ulang",
        "Tulis ringkasan tiga poin dan tentukan kapan akan mengulangnya. Perbaiki rencana berdasarkan bagian yang paling sulit."
      ]
    ],
    "takeaways": [
      "Tujuan mencatat pertanyaan penting perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mencatat pertanyaan penting pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "study",
      "panduan",
      "beginner",
      "mencatat"
    ]
  },
  {
    "id": 103,
    "category": "study",
    "categoryName": "Belajar & Produktivitas",
    "emoji": "▤",
    "art": "art-study",
    "title": "Panduan langkah demi langkah: Membuat checklist tugas",
    "topic": "Membuat checklist tugas",
    "format": "panduan",
    "summary": "Pelajari membuat checklist tugas dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 25,
    "mood": "calm",
    "symbol": "▤",
    "steps": [
      [
        "Tentukan tujuan kecil",
        "Tulis apa yang ingin kamu pahami dari membuat checklist tugas dalam satu kalimat yang bisa diperiksa."
      ],
      [
        "Siapkan bahan",
        "Kumpulkan catatan, buku, atau sumber tepercaya. Jauhkan gangguan yang tidak diperlukan selama sesi belajar."
      ],
      [
        "Belajar secara aktif",
        "Baca bagian singkat, tutup sumbernya, lalu jelaskan kembali dengan kata-katamu sendiri."
      ],
      [
        "Uji pemahaman",
        "Buat satu pertanyaan atau contoh dari membuat checklist tugas. Periksa jawaban dan tandai bagian yang masih membingungkan."
      ],
      [
        "Istirahat terencana",
        "Berikan jeda singkat setelah fokus. Kembali dengan target kecil berikutnya, bukan mencoba menyelesaikan semuanya sekaligus."
      ],
      [
        "Tinjau ulang",
        "Tulis ringkasan tiga poin dan tentukan kapan akan mengulangnya. Perbaiki rencana berdasarkan bagian yang paling sulit."
      ]
    ],
    "takeaways": [
      "Tujuan membuat checklist tugas perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat checklist tugas pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "study",
      "panduan",
      "advanced",
      "membuat"
    ]
  },
  {
    "id": 104,
    "category": "study",
    "categoryName": "Belajar & Produktivitas",
    "emoji": "▤",
    "art": "art-study",
    "title": "Workflow praktis: Mengatur waktu istirahat",
    "topic": "Mengatur waktu istirahat",
    "format": "workflow",
    "summary": "Bangun alur kerja mengatur waktu istirahat yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 21,
    "mood": "creative",
    "symbol": "◎",
    "steps": [
      [
        "Tentukan tujuan kecil",
        "Tulis apa yang ingin kamu pahami dari mengatur waktu istirahat dalam satu kalimat yang bisa diperiksa."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah mengatur waktu istirahat dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Belajar secara aktif",
        "Baca bagian singkat, tutup sumbernya, lalu jelaskan kembali dengan kata-katamu sendiri."
      ],
      [
        "Uji pemahaman",
        "Buat satu pertanyaan atau contoh dari mengatur waktu istirahat. Periksa jawaban dan tandai bagian yang masih membingungkan."
      ],
      [
        "Istirahat terencana",
        "Berikan jeda singkat setelah fokus. Kembali dengan target kecil berikutnya, bukan mencoba menyelesaikan semuanya sekaligus."
      ],
      [
        "Tinjau ulang",
        "Tulis ringkasan tiga poin dan tentukan kapan akan mengulangnya. Perbaiki rencana berdasarkan bagian yang paling sulit."
      ]
    ],
    "takeaways": [
      "Tujuan mengatur waktu istirahat perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mengatur waktu istirahat pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "study",
      "workflow",
      "medium",
      "mengatur"
    ]
  },
  {
    "id": 105,
    "category": "study",
    "categoryName": "Belajar & Produktivitas",
    "emoji": "▤",
    "art": "art-study",
    "title": "Workflow praktis: Membuat rencana proyek sekolah",
    "topic": "Membuat rencana proyek sekolah",
    "format": "workflow",
    "summary": "Bangun alur kerja membuat rencana proyek sekolah yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 28,
    "mood": "calm",
    "symbol": "〰",
    "steps": [
      [
        "Tentukan tujuan kecil",
        "Tulis apa yang ingin kamu pahami dari membuat rencana proyek sekolah dalam satu kalimat yang bisa diperiksa."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah membuat rencana proyek sekolah dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Belajar secara aktif",
        "Baca bagian singkat, tutup sumbernya, lalu jelaskan kembali dengan kata-katamu sendiri."
      ],
      [
        "Uji pemahaman",
        "Buat satu pertanyaan atau contoh dari membuat rencana proyek sekolah. Periksa jawaban dan tandai bagian yang masih membingungkan."
      ],
      [
        "Istirahat terencana",
        "Berikan jeda singkat setelah fokus. Kembali dengan target kecil berikutnya, bukan mencoba menyelesaikan semuanya sekaligus."
      ],
      [
        "Tinjau ulang",
        "Tulis ringkasan tiga poin dan tentukan kapan akan mengulangnya. Perbaiki rencana berdasarkan bagian yang paling sulit."
      ]
    ],
    "takeaways": [
      "Tujuan membuat rencana proyek sekolah perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat rencana proyek sekolah pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "study",
      "workflow",
      "advanced",
      "membuat"
    ]
  },
  {
    "id": 106,
    "category": "study",
    "categoryName": "Belajar & Produktivitas",
    "emoji": "▤",
    "art": "art-study",
    "title": "Workflow praktis: Membaca teks secara aktif",
    "topic": "Membaca teks secara aktif",
    "format": "workflow",
    "summary": "Bangun alur kerja membaca teks secara aktif yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 15,
    "mood": "focus",
    "symbol": "✧",
    "steps": [
      [
        "Tentukan tujuan kecil",
        "Tulis apa yang ingin kamu pahami dari membaca teks secara aktif dalam satu kalimat yang bisa diperiksa."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah membaca teks secara aktif dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Belajar secara aktif",
        "Baca bagian singkat, tutup sumbernya, lalu jelaskan kembali dengan kata-katamu sendiri."
      ],
      [
        "Uji pemahaman",
        "Buat satu pertanyaan atau contoh dari membaca teks secara aktif. Periksa jawaban dan tandai bagian yang masih membingungkan."
      ],
      [
        "Istirahat terencana",
        "Berikan jeda singkat setelah fokus. Kembali dengan target kecil berikutnya, bukan mencoba menyelesaikan semuanya sekaligus."
      ],
      [
        "Tinjau ulang",
        "Tulis ringkasan tiga poin dan tentukan kapan akan mengulangnya. Perbaiki rencana berdasarkan bagian yang paling sulit."
      ]
    ],
    "takeaways": [
      "Tujuan membaca teks secara aktif perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membaca teks secara aktif pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "study",
      "workflow",
      "beginner",
      "membaca"
    ]
  },
  {
    "id": 107,
    "category": "study",
    "categoryName": "Belajar & Produktivitas",
    "emoji": "▤",
    "art": "art-study",
    "title": "Panduan langkah demi langkah: Mengelola tugas kelompok",
    "topic": "Mengelola tugas kelompok",
    "format": "panduan",
    "summary": "Pelajari mengelola tugas kelompok dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 18,
    "mood": "creative",
    "symbol": "✦",
    "steps": [
      [
        "Tentukan tujuan kecil",
        "Tulis apa yang ingin kamu pahami dari mengelola tugas kelompok dalam satu kalimat yang bisa diperiksa."
      ],
      [
        "Siapkan bahan",
        "Kumpulkan catatan, buku, atau sumber tepercaya. Jauhkan gangguan yang tidak diperlukan selama sesi belajar."
      ],
      [
        "Belajar secara aktif",
        "Baca bagian singkat, tutup sumbernya, lalu jelaskan kembali dengan kata-katamu sendiri."
      ],
      [
        "Uji pemahaman",
        "Buat satu pertanyaan atau contoh dari mengelola tugas kelompok. Periksa jawaban dan tandai bagian yang masih membingungkan."
      ],
      [
        "Istirahat terencana",
        "Berikan jeda singkat setelah fokus. Kembali dengan target kecil berikutnya, bukan mencoba menyelesaikan semuanya sekaligus."
      ],
      [
        "Tinjau ulang",
        "Tulis ringkasan tiga poin dan tentukan kapan akan mengulangnya. Perbaiki rencana berdasarkan bagian yang paling sulit."
      ]
    ],
    "takeaways": [
      "Tujuan mengelola tugas kelompok perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mengelola tugas kelompok pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "study",
      "panduan",
      "medium",
      "mengelola"
    ]
  },
  {
    "id": 108,
    "category": "study",
    "categoryName": "Belajar & Produktivitas",
    "emoji": "▤",
    "art": "art-study",
    "title": "Workflow praktis: Membagi peran tim",
    "topic": "Membagi peran tim",
    "format": "workflow",
    "summary": "Bangun alur kerja membagi peran tim yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 15,
    "mood": "focus",
    "symbol": "◈",
    "steps": [
      [
        "Tentukan tujuan kecil",
        "Tulis apa yang ingin kamu pahami dari membagi peran tim dalam satu kalimat yang bisa diperiksa."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah membagi peran tim dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Belajar secara aktif",
        "Baca bagian singkat, tutup sumbernya, lalu jelaskan kembali dengan kata-katamu sendiri."
      ],
      [
        "Uji pemahaman",
        "Buat satu pertanyaan atau contoh dari membagi peran tim. Periksa jawaban dan tandai bagian yang masih membingungkan."
      ],
      [
        "Istirahat terencana",
        "Berikan jeda singkat setelah fokus. Kembali dengan target kecil berikutnya, bukan mencoba menyelesaikan semuanya sekaligus."
      ],
      [
        "Tinjau ulang",
        "Tulis ringkasan tiga poin dan tentukan kapan akan mengulangnya. Perbaiki rencana berdasarkan bagian yang paling sulit."
      ]
    ],
    "takeaways": [
      "Tujuan membagi peran tim perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membagi peran tim pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "study",
      "workflow",
      "beginner",
      "membagi"
    ]
  },
  {
    "id": 109,
    "category": "study",
    "categoryName": "Belajar & Produktivitas",
    "emoji": "▤",
    "art": "art-study",
    "title": "Latihan mandiri: Menyusun presentasi singkat",
    "topic": "Menyusun presentasi singkat",
    "format": "latihan",
    "summary": "Latihan terarah untuk menerapkan menyusun presentasi singkat sambil mengecek pemahamanmu sendiri.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 31,
    "mood": "calm",
    "symbol": "✦",
    "steps": [
      [
        "Tantangan mini",
        "Coba lakukan menyusun presentasi singkat dalam skala kecil selama 10–15 menit. Tuliskan hasil yang ingin kamu capai sebelum mulai."
      ],
      [
        "Siapkan bahan",
        "Kumpulkan catatan, buku, atau sumber tepercaya. Jauhkan gangguan yang tidak diperlukan selama sesi belajar."
      ],
      [
        "Belajar secara aktif",
        "Baca bagian singkat, tutup sumbernya, lalu jelaskan kembali dengan kata-katamu sendiri."
      ],
      [
        "Uji pemahaman",
        "Buat satu pertanyaan atau contoh dari menyusun presentasi singkat. Periksa jawaban dan tandai bagian yang masih membingungkan."
      ],
      [
        "Istirahat terencana",
        "Berikan jeda singkat setelah fokus. Kembali dengan target kecil berikutnya, bukan mencoba menyelesaikan semuanya sekaligus."
      ],
      [
        "Tinjau ulang",
        "Tulis ringkasan tiga poin dan tentukan kapan akan mengulangnya. Perbaiki rencana berdasarkan bagian yang paling sulit."
      ]
    ],
    "takeaways": [
      "Tujuan menyusun presentasi singkat perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan menyusun presentasi singkat pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "study",
      "latihan",
      "advanced",
      "menyusun"
    ]
  },
  {
    "id": 110,
    "category": "study",
    "categoryName": "Belajar & Produktivitas",
    "emoji": "▤",
    "art": "art-study",
    "title": "Panduan langkah demi langkah: Membuat catatan digital",
    "topic": "Membuat catatan digital",
    "format": "panduan",
    "summary": "Pelajari membuat catatan digital dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 25,
    "mood": "calm",
    "symbol": "▤",
    "steps": [
      [
        "Tentukan tujuan kecil",
        "Tulis apa yang ingin kamu pahami dari membuat catatan digital dalam satu kalimat yang bisa diperiksa."
      ],
      [
        "Siapkan bahan",
        "Kumpulkan catatan, buku, atau sumber tepercaya. Jauhkan gangguan yang tidak diperlukan selama sesi belajar."
      ],
      [
        "Belajar secara aktif",
        "Baca bagian singkat, tutup sumbernya, lalu jelaskan kembali dengan kata-katamu sendiri."
      ],
      [
        "Uji pemahaman",
        "Buat satu pertanyaan atau contoh dari membuat catatan digital. Periksa jawaban dan tandai bagian yang masih membingungkan."
      ],
      [
        "Istirahat terencana",
        "Berikan jeda singkat setelah fokus. Kembali dengan target kecil berikutnya, bukan mencoba menyelesaikan semuanya sekaligus."
      ],
      [
        "Tinjau ulang",
        "Tulis ringkasan tiga poin dan tentukan kapan akan mengulangnya. Perbaiki rencana berdasarkan bagian yang paling sulit."
      ]
    ],
    "takeaways": [
      "Tujuan membuat catatan digital perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat catatan digital pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "study",
      "panduan",
      "advanced",
      "membuat"
    ]
  },
  {
    "id": 111,
    "category": "study",
    "categoryName": "Belajar & Produktivitas",
    "emoji": "▤",
    "art": "art-study",
    "title": "Proyek mini: Mengarsipkan dokumen sekolah",
    "topic": "Mengarsipkan dokumen sekolah",
    "format": "proyek",
    "summary": "Proyek mini yang membantumu mempraktikkan mengarsipkan dokumen sekolah dari perencanaan sampai evaluasi.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 21,
    "mood": "creative",
    "symbol": "◎",
    "steps": [
      [
        "Ruang lingkup proyek",
        "Tentukan hasil mini dari mengarsipkan dokumen sekolah yang bisa selesai dalam satu sesi. Batasi fitur agar proyek tetap realistis."
      ],
      [
        "Siapkan bahan",
        "Kumpulkan catatan, buku, atau sumber tepercaya. Jauhkan gangguan yang tidak diperlukan selama sesi belajar."
      ],
      [
        "Belajar secara aktif",
        "Baca bagian singkat, tutup sumbernya, lalu jelaskan kembali dengan kata-katamu sendiri."
      ],
      [
        "Uji pemahaman",
        "Buat satu pertanyaan atau contoh dari mengarsipkan dokumen sekolah. Periksa jawaban dan tandai bagian yang masih membingungkan."
      ],
      [
        "Istirahat terencana",
        "Berikan jeda singkat setelah fokus. Kembali dengan target kecil berikutnya, bukan mencoba menyelesaikan semuanya sekaligus."
      ],
      [
        "Tinjau ulang",
        "Tulis ringkasan tiga poin dan tentukan kapan akan mengulangnya. Perbaiki rencana berdasarkan bagian yang paling sulit."
      ]
    ],
    "takeaways": [
      "Tujuan mengarsipkan dokumen sekolah perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mengarsipkan dokumen sekolah pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "study",
      "proyek",
      "medium",
      "mengarsipkan"
    ]
  },
  {
    "id": 112,
    "category": "study",
    "categoryName": "Belajar & Produktivitas",
    "emoji": "▤",
    "art": "art-study",
    "title": "Panduan langkah demi langkah: Membuat daftar prioritas",
    "topic": "Membuat daftar prioritas",
    "format": "panduan",
    "summary": "Pelajari membuat daftar prioritas dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 25,
    "mood": "calm",
    "symbol": "▤",
    "steps": [
      [
        "Tentukan tujuan kecil",
        "Tulis apa yang ingin kamu pahami dari membuat daftar prioritas dalam satu kalimat yang bisa diperiksa."
      ],
      [
        "Siapkan bahan",
        "Kumpulkan catatan, buku, atau sumber tepercaya. Jauhkan gangguan yang tidak diperlukan selama sesi belajar."
      ],
      [
        "Belajar secara aktif",
        "Baca bagian singkat, tutup sumbernya, lalu jelaskan kembali dengan kata-katamu sendiri."
      ],
      [
        "Uji pemahaman",
        "Buat satu pertanyaan atau contoh dari membuat daftar prioritas. Periksa jawaban dan tandai bagian yang masih membingungkan."
      ],
      [
        "Istirahat terencana",
        "Berikan jeda singkat setelah fokus. Kembali dengan target kecil berikutnya, bukan mencoba menyelesaikan semuanya sekaligus."
      ],
      [
        "Tinjau ulang",
        "Tulis ringkasan tiga poin dan tentukan kapan akan mengulangnya. Perbaiki rencana berdasarkan bagian yang paling sulit."
      ]
    ],
    "takeaways": [
      "Tujuan membuat daftar prioritas perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat daftar prioritas pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "study",
      "panduan",
      "advanced",
      "membuat"
    ]
  },
  {
    "id": 113,
    "category": "study",
    "categoryName": "Belajar & Produktivitas",
    "emoji": "▤",
    "art": "art-study",
    "title": "Panduan langkah demi langkah: Menghindari multitasking",
    "topic": "Menghindari multitasking",
    "format": "panduan",
    "summary": "Pelajari menghindari multitasking dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 12,
    "mood": "focus",
    "symbol": "⌘",
    "steps": [
      [
        "Tentukan tujuan kecil",
        "Tulis apa yang ingin kamu pahami dari menghindari multitasking dalam satu kalimat yang bisa diperiksa."
      ],
      [
        "Siapkan bahan",
        "Kumpulkan catatan, buku, atau sumber tepercaya. Jauhkan gangguan yang tidak diperlukan selama sesi belajar."
      ],
      [
        "Belajar secara aktif",
        "Baca bagian singkat, tutup sumbernya, lalu jelaskan kembali dengan kata-katamu sendiri."
      ],
      [
        "Uji pemahaman",
        "Buat satu pertanyaan atau contoh dari menghindari multitasking. Periksa jawaban dan tandai bagian yang masih membingungkan."
      ],
      [
        "Istirahat terencana",
        "Berikan jeda singkat setelah fokus. Kembali dengan target kecil berikutnya, bukan mencoba menyelesaikan semuanya sekaligus."
      ],
      [
        "Tinjau ulang",
        "Tulis ringkasan tiga poin dan tentukan kapan akan mengulangnya. Perbaiki rencana berdasarkan bagian yang paling sulit."
      ]
    ],
    "takeaways": [
      "Tujuan menghindari multitasking perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan menghindari multitasking pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "study",
      "panduan",
      "beginner",
      "menghindari"
    ]
  },
  {
    "id": 114,
    "category": "study",
    "categoryName": "Belajar & Produktivitas",
    "emoji": "▤",
    "art": "art-study",
    "title": "Panduan langkah demi langkah: Mengecek pemahaman sendiri",
    "topic": "Mengecek pemahaman sendiri",
    "format": "panduan",
    "summary": "Pelajari mengecek pemahaman sendiri dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 25,
    "mood": "calm",
    "symbol": "〰",
    "steps": [
      [
        "Tentukan tujuan kecil",
        "Tulis apa yang ingin kamu pahami dari mengecek pemahaman sendiri dalam satu kalimat yang bisa diperiksa."
      ],
      [
        "Siapkan bahan",
        "Kumpulkan catatan, buku, atau sumber tepercaya. Jauhkan gangguan yang tidak diperlukan selama sesi belajar."
      ],
      [
        "Belajar secara aktif",
        "Baca bagian singkat, tutup sumbernya, lalu jelaskan kembali dengan kata-katamu sendiri."
      ],
      [
        "Uji pemahaman",
        "Buat satu pertanyaan atau contoh dari mengecek pemahaman sendiri. Periksa jawaban dan tandai bagian yang masih membingungkan."
      ],
      [
        "Istirahat terencana",
        "Berikan jeda singkat setelah fokus. Kembali dengan target kecil berikutnya, bukan mencoba menyelesaikan semuanya sekaligus."
      ],
      [
        "Tinjau ulang",
        "Tulis ringkasan tiga poin dan tentukan kapan akan mengulangnya. Perbaiki rencana berdasarkan bagian yang paling sulit."
      ]
    ],
    "takeaways": [
      "Tujuan mengecek pemahaman sendiri perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mengecek pemahaman sendiri pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "study",
      "panduan",
      "advanced",
      "mengecek"
    ]
  },
  {
    "id": 115,
    "category": "study",
    "categoryName": "Belajar & Produktivitas",
    "emoji": "▤",
    "art": "art-study",
    "title": "Workflow praktis: Mempersiapkan diskusi",
    "topic": "Mempersiapkan diskusi",
    "format": "workflow",
    "summary": "Bangun alur kerja mempersiapkan diskusi yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 21,
    "mood": "creative",
    "symbol": "⌘",
    "steps": [
      [
        "Tentukan tujuan kecil",
        "Tulis apa yang ingin kamu pahami dari mempersiapkan diskusi dalam satu kalimat yang bisa diperiksa."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah mempersiapkan diskusi dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Belajar secara aktif",
        "Baca bagian singkat, tutup sumbernya, lalu jelaskan kembali dengan kata-katamu sendiri."
      ],
      [
        "Uji pemahaman",
        "Buat satu pertanyaan atau contoh dari mempersiapkan diskusi. Periksa jawaban dan tandai bagian yang masih membingungkan."
      ],
      [
        "Istirahat terencana",
        "Berikan jeda singkat setelah fokus. Kembali dengan target kecil berikutnya, bukan mencoba menyelesaikan semuanya sekaligus."
      ],
      [
        "Tinjau ulang",
        "Tulis ringkasan tiga poin dan tentukan kapan akan mengulangnya. Perbaiki rencana berdasarkan bagian yang paling sulit."
      ]
    ],
    "takeaways": [
      "Tujuan mempersiapkan diskusi perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mempersiapkan diskusi pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "study",
      "workflow",
      "medium",
      "mempersiapkan"
    ]
  },
  {
    "id": 116,
    "category": "study",
    "categoryName": "Belajar & Produktivitas",
    "emoji": "▤",
    "art": "art-study",
    "title": "Panduan langkah demi langkah: Membuat jurnal belajar",
    "topic": "Membuat jurnal belajar",
    "format": "panduan",
    "summary": "Pelajari membuat jurnal belajar dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 18,
    "mood": "creative",
    "symbol": "✦",
    "steps": [
      [
        "Tentukan tujuan kecil",
        "Tulis apa yang ingin kamu pahami dari membuat jurnal belajar dalam satu kalimat yang bisa diperiksa."
      ],
      [
        "Siapkan bahan",
        "Kumpulkan catatan, buku, atau sumber tepercaya. Jauhkan gangguan yang tidak diperlukan selama sesi belajar."
      ],
      [
        "Belajar secara aktif",
        "Baca bagian singkat, tutup sumbernya, lalu jelaskan kembali dengan kata-katamu sendiri."
      ],
      [
        "Uji pemahaman",
        "Buat satu pertanyaan atau contoh dari membuat jurnal belajar. Periksa jawaban dan tandai bagian yang masih membingungkan."
      ],
      [
        "Istirahat terencana",
        "Berikan jeda singkat setelah fokus. Kembali dengan target kecil berikutnya, bukan mencoba menyelesaikan semuanya sekaligus."
      ],
      [
        "Tinjau ulang",
        "Tulis ringkasan tiga poin dan tentukan kapan akan mengulangnya. Perbaiki rencana berdasarkan bagian yang paling sulit."
      ]
    ],
    "takeaways": [
      "Tujuan membuat jurnal belajar perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat jurnal belajar pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "study",
      "panduan",
      "medium",
      "membuat"
    ]
  },
  {
    "id": 117,
    "category": "study",
    "categoryName": "Belajar & Produktivitas",
    "emoji": "▤",
    "art": "art-study",
    "title": "Workflow praktis: Mengelola deadline",
    "topic": "Mengelola deadline",
    "format": "workflow",
    "summary": "Bangun alur kerja mengelola deadline yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 15,
    "mood": "focus",
    "symbol": "◈",
    "steps": [
      [
        "Tentukan tujuan kecil",
        "Tulis apa yang ingin kamu pahami dari mengelola deadline dalam satu kalimat yang bisa diperiksa."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah mengelola deadline dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Belajar secara aktif",
        "Baca bagian singkat, tutup sumbernya, lalu jelaskan kembali dengan kata-katamu sendiri."
      ],
      [
        "Uji pemahaman",
        "Buat satu pertanyaan atau contoh dari mengelola deadline. Periksa jawaban dan tandai bagian yang masih membingungkan."
      ],
      [
        "Istirahat terencana",
        "Berikan jeda singkat setelah fokus. Kembali dengan target kecil berikutnya, bukan mencoba menyelesaikan semuanya sekaligus."
      ],
      [
        "Tinjau ulang",
        "Tulis ringkasan tiga poin dan tentukan kapan akan mengulangnya. Perbaiki rencana berdasarkan bagian yang paling sulit."
      ]
    ],
    "takeaways": [
      "Tujuan mengelola deadline perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mengelola deadline pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "study",
      "workflow",
      "beginner",
      "mengelola"
    ]
  },
  {
    "id": 118,
    "category": "study",
    "categoryName": "Belajar & Produktivitas",
    "emoji": "▤",
    "art": "art-study",
    "title": "Workflow praktis: Membaca grafik dan tabel",
    "topic": "Membaca grafik dan tabel",
    "format": "workflow",
    "summary": "Bangun alur kerja membaca grafik dan tabel yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 28,
    "mood": "calm",
    "symbol": "✦",
    "steps": [
      [
        "Tentukan tujuan kecil",
        "Tulis apa yang ingin kamu pahami dari membaca grafik dan tabel dalam satu kalimat yang bisa diperiksa."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah membaca grafik dan tabel dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Belajar secara aktif",
        "Baca bagian singkat, tutup sumbernya, lalu jelaskan kembali dengan kata-katamu sendiri."
      ],
      [
        "Uji pemahaman",
        "Buat satu pertanyaan atau contoh dari membaca grafik dan tabel. Periksa jawaban dan tandai bagian yang masih membingungkan."
      ],
      [
        "Istirahat terencana",
        "Berikan jeda singkat setelah fokus. Kembali dengan target kecil berikutnya, bukan mencoba menyelesaikan semuanya sekaligus."
      ],
      [
        "Tinjau ulang",
        "Tulis ringkasan tiga poin dan tentukan kapan akan mengulangnya. Perbaiki rencana berdasarkan bagian yang paling sulit."
      ]
    ],
    "takeaways": [
      "Tujuan membaca grafik dan tabel perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membaca grafik dan tabel pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "study",
      "workflow",
      "advanced",
      "membaca"
    ]
  },
  {
    "id": 119,
    "category": "study",
    "categoryName": "Belajar & Produktivitas",
    "emoji": "▤",
    "art": "art-study",
    "title": "Workflow praktis: Menyusun laporan sederhana",
    "topic": "Menyusun laporan sederhana",
    "format": "workflow",
    "summary": "Bangun alur kerja menyusun laporan sederhana yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 15,
    "mood": "focus",
    "symbol": "▤",
    "steps": [
      [
        "Tentukan tujuan kecil",
        "Tulis apa yang ingin kamu pahami dari menyusun laporan sederhana dalam satu kalimat yang bisa diperiksa."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah menyusun laporan sederhana dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Belajar secara aktif",
        "Baca bagian singkat, tutup sumbernya, lalu jelaskan kembali dengan kata-katamu sendiri."
      ],
      [
        "Uji pemahaman",
        "Buat satu pertanyaan atau contoh dari menyusun laporan sederhana. Periksa jawaban dan tandai bagian yang masih membingungkan."
      ],
      [
        "Istirahat terencana",
        "Berikan jeda singkat setelah fokus. Kembali dengan target kecil berikutnya, bukan mencoba menyelesaikan semuanya sekaligus."
      ],
      [
        "Tinjau ulang",
        "Tulis ringkasan tiga poin dan tentukan kapan akan mengulangnya. Perbaiki rencana berdasarkan bagian yang paling sulit."
      ]
    ],
    "takeaways": [
      "Tujuan menyusun laporan sederhana perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan menyusun laporan sederhana pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "study",
      "workflow",
      "beginner",
      "menyusun"
    ]
  },
  {
    "id": 120,
    "category": "study",
    "categoryName": "Belajar & Produktivitas",
    "emoji": "▤",
    "art": "art-study",
    "title": "Latihan mandiri: Membuat rutinitas pagi",
    "topic": "Membuat rutinitas pagi",
    "format": "latihan",
    "summary": "Latihan terarah untuk menerapkan membuat rutinitas pagi sambil mengecek pemahamanmu sendiri.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 31,
    "mood": "calm",
    "symbol": "◎",
    "steps": [
      [
        "Tantangan mini",
        "Coba lakukan membuat rutinitas pagi dalam skala kecil selama 10–15 menit. Tuliskan hasil yang ingin kamu capai sebelum mulai."
      ],
      [
        "Siapkan bahan",
        "Kumpulkan catatan, buku, atau sumber tepercaya. Jauhkan gangguan yang tidak diperlukan selama sesi belajar."
      ],
      [
        "Belajar secara aktif",
        "Baca bagian singkat, tutup sumbernya, lalu jelaskan kembali dengan kata-katamu sendiri."
      ],
      [
        "Uji pemahaman",
        "Buat satu pertanyaan atau contoh dari membuat rutinitas pagi. Periksa jawaban dan tandai bagian yang masih membingungkan."
      ],
      [
        "Istirahat terencana",
        "Berikan jeda singkat setelah fokus. Kembali dengan target kecil berikutnya, bukan mencoba menyelesaikan semuanya sekaligus."
      ],
      [
        "Tinjau ulang",
        "Tulis ringkasan tiga poin dan tentukan kapan akan mengulangnya. Perbaiki rencana berdasarkan bagian yang paling sulit."
      ]
    ],
    "takeaways": [
      "Tujuan membuat rutinitas pagi perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat rutinitas pagi pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "study",
      "latihan",
      "advanced",
      "membuat"
    ]
  },
  {
    "id": 121,
    "category": "life",
    "categoryName": "Kehidupan Sehari-hari",
    "emoji": "♡",
    "art": "art-life",
    "title": "Panduan langkah demi langkah: Menyusun anggaran sederhana",
    "topic": "Menyusun anggaran sederhana",
    "format": "panduan",
    "summary": "Pelajari menyusun anggaran sederhana dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 18,
    "mood": "creative",
    "symbol": "↗",
    "steps": [
      [
        "Lihat kondisi sekarang",
        "Catat kebiasaan atau kebutuhan yang berhubungan dengan menyusun anggaran sederhana tanpa menghakimi diri sendiri."
      ],
      [
        "Pilih satu prioritas",
        "Tentukan perubahan paling sederhana yang akan membantu. Hindari membuat terlalu banyak aturan sekaligus."
      ],
      [
        "Siapkan langkah praktis",
        "Siapkan alat, daftar, atau pengingat yang diperlukan agar langkah ini mudah dilakukan dalam keseharian."
      ],
      [
        "Coba dalam skala kecil",
        "Terapkan rencana untuk satu hari atau satu situasi terlebih dahulu. Perhatikan apa yang terasa mudah dan apa yang menghambat."
      ],
      [
        "Sesuaikan",
        "Jika langkah terlalu rumit, sederhanakan. Pilih cara yang realistis dan aman untuk keadaanmu."
      ],
      [
        "Evaluasi singkat",
        "Catat hasilnya dan pilih satu penyesuaian untuk percobaan berikutnya. Konsistensi kecil lebih berguna daripada rencana yang tidak terpakai."
      ]
    ],
    "takeaways": [
      "Tujuan menyusun anggaran sederhana perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan menyusun anggaran sederhana pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "life",
      "panduan",
      "medium",
      "menyusun"
    ]
  },
  {
    "id": 122,
    "category": "life",
    "categoryName": "Kehidupan Sehari-hari",
    "emoji": "♡",
    "art": "art-life",
    "title": "Workflow praktis: Membuat daftar belanja",
    "topic": "Membuat daftar belanja",
    "format": "workflow",
    "summary": "Bangun alur kerja membuat daftar belanja yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 15,
    "mood": "focus",
    "symbol": "✧",
    "steps": [
      [
        "Lihat kondisi sekarang",
        "Catat kebiasaan atau kebutuhan yang berhubungan dengan membuat daftar belanja tanpa menghakimi diri sendiri."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah membuat daftar belanja dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Siapkan langkah praktis",
        "Siapkan alat, daftar, atau pengingat yang diperlukan agar langkah ini mudah dilakukan dalam keseharian."
      ],
      [
        "Coba dalam skala kecil",
        "Terapkan rencana untuk satu hari atau satu situasi terlebih dahulu. Perhatikan apa yang terasa mudah dan apa yang menghambat."
      ],
      [
        "Sesuaikan",
        "Jika langkah terlalu rumit, sederhanakan. Pilih cara yang realistis dan aman untuk keadaanmu."
      ],
      [
        "Evaluasi singkat",
        "Catat hasilnya dan pilih satu penyesuaian untuk percobaan berikutnya. Konsistensi kecil lebih berguna daripada rencana yang tidak terpakai."
      ]
    ],
    "takeaways": [
      "Tujuan membuat daftar belanja perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat daftar belanja pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "life",
      "workflow",
      "beginner",
      "membuat"
    ]
  },
  {
    "id": 123,
    "category": "life",
    "categoryName": "Kehidupan Sehari-hari",
    "emoji": "♡",
    "art": "art-life",
    "title": "Workflow praktis: Mengatur ruang kerja",
    "topic": "Mengatur ruang kerja",
    "format": "workflow",
    "summary": "Bangun alur kerja mengatur ruang kerja yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 21,
    "mood": "creative",
    "symbol": "✦",
    "steps": [
      [
        "Lihat kondisi sekarang",
        "Catat kebiasaan atau kebutuhan yang berhubungan dengan mengatur ruang kerja tanpa menghakimi diri sendiri."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah mengatur ruang kerja dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Siapkan langkah praktis",
        "Siapkan alat, daftar, atau pengingat yang diperlukan agar langkah ini mudah dilakukan dalam keseharian."
      ],
      [
        "Coba dalam skala kecil",
        "Terapkan rencana untuk satu hari atau satu situasi terlebih dahulu. Perhatikan apa yang terasa mudah dan apa yang menghambat."
      ],
      [
        "Sesuaikan",
        "Jika langkah terlalu rumit, sederhanakan. Pilih cara yang realistis dan aman untuk keadaanmu."
      ],
      [
        "Evaluasi singkat",
        "Catat hasilnya dan pilih satu penyesuaian untuk percobaan berikutnya. Konsistensi kecil lebih berguna daripada rencana yang tidak terpakai."
      ]
    ],
    "takeaways": [
      "Tujuan mengatur ruang kerja perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mengatur ruang kerja pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "life",
      "workflow",
      "medium",
      "mengatur"
    ]
  },
  {
    "id": 124,
    "category": "life",
    "categoryName": "Kehidupan Sehari-hari",
    "emoji": "♡",
    "art": "art-life",
    "title": "Workflow praktis: Membuat rutinitas pagi",
    "topic": "Membuat rutinitas pagi",
    "format": "workflow",
    "summary": "Bangun alur kerja membuat rutinitas pagi yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 15,
    "mood": "focus",
    "symbol": "◈",
    "steps": [
      [
        "Lihat kondisi sekarang",
        "Catat kebiasaan atau kebutuhan yang berhubungan dengan membuat rutinitas pagi tanpa menghakimi diri sendiri."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah membuat rutinitas pagi dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Siapkan langkah praktis",
        "Siapkan alat, daftar, atau pengingat yang diperlukan agar langkah ini mudah dilakukan dalam keseharian."
      ],
      [
        "Coba dalam skala kecil",
        "Terapkan rencana untuk satu hari atau satu situasi terlebih dahulu. Perhatikan apa yang terasa mudah dan apa yang menghambat."
      ],
      [
        "Sesuaikan",
        "Jika langkah terlalu rumit, sederhanakan. Pilih cara yang realistis dan aman untuk keadaanmu."
      ],
      [
        "Evaluasi singkat",
        "Catat hasilnya dan pilih satu penyesuaian untuk percobaan berikutnya. Konsistensi kecil lebih berguna daripada rencana yang tidak terpakai."
      ]
    ],
    "takeaways": [
      "Tujuan membuat rutinitas pagi perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat rutinitas pagi pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "life",
      "workflow",
      "beginner",
      "membuat"
    ]
  },
  {
    "id": 125,
    "category": "life",
    "categoryName": "Kehidupan Sehari-hari",
    "emoji": "♡",
    "art": "art-life",
    "title": "Checklist penerapan: Merencanakan perjalanan",
    "topic": "Merencanakan perjalanan",
    "format": "checklist",
    "summary": "Daftar periksa untuk menerapkan merencanakan perjalanan tanpa melewatkan hal penting.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 12,
    "mood": "focus",
    "symbol": "✦",
    "steps": [
      [
        "Periksa kesiapan",
        "Pastikan tujuan merencanakan perjalanan jelas dan semua bahan penting tersedia."
      ],
      [
        "Pilih satu prioritas",
        "Tentukan perubahan paling sederhana yang akan membantu. Hindari membuat terlalu banyak aturan sekaligus."
      ],
      [
        "Siapkan langkah praktis",
        "Siapkan alat, daftar, atau pengingat yang diperlukan agar langkah ini mudah dilakukan dalam keseharian."
      ],
      [
        "Coba dalam skala kecil",
        "Terapkan rencana untuk satu hari atau satu situasi terlebih dahulu. Perhatikan apa yang terasa mudah dan apa yang menghambat."
      ],
      [
        "Sesuaikan",
        "Jika langkah terlalu rumit, sederhanakan. Pilih cara yang realistis dan aman untuk keadaanmu."
      ],
      [
        "Evaluasi singkat",
        "Catat hasilnya dan pilih satu penyesuaian untuk percobaan berikutnya. Konsistensi kecil lebih berguna daripada rencana yang tidak terpakai."
      ]
    ],
    "takeaways": [
      "Tujuan merencanakan perjalanan perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan merencanakan perjalanan pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "life",
      "checklist",
      "beginner",
      "merencanakan"
    ]
  },
  {
    "id": 126,
    "category": "life",
    "categoryName": "Kehidupan Sehari-hari",
    "emoji": "♡",
    "art": "art-life",
    "title": "Workflow praktis: Membuat checklist barang",
    "topic": "Membuat checklist barang",
    "format": "workflow",
    "summary": "Bangun alur kerja membuat checklist barang yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 28,
    "mood": "calm",
    "symbol": "〰",
    "steps": [
      [
        "Lihat kondisi sekarang",
        "Catat kebiasaan atau kebutuhan yang berhubungan dengan membuat checklist barang tanpa menghakimi diri sendiri."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah membuat checklist barang dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Siapkan langkah praktis",
        "Siapkan alat, daftar, atau pengingat yang diperlukan agar langkah ini mudah dilakukan dalam keseharian."
      ],
      [
        "Coba dalam skala kecil",
        "Terapkan rencana untuk satu hari atau satu situasi terlebih dahulu. Perhatikan apa yang terasa mudah dan apa yang menghambat."
      ],
      [
        "Sesuaikan",
        "Jika langkah terlalu rumit, sederhanakan. Pilih cara yang realistis dan aman untuk keadaanmu."
      ],
      [
        "Evaluasi singkat",
        "Catat hasilnya dan pilih satu penyesuaian untuk percobaan berikutnya. Konsistensi kecil lebih berguna daripada rencana yang tidak terpakai."
      ]
    ],
    "takeaways": [
      "Tujuan membuat checklist barang perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat checklist barang pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "life",
      "workflow",
      "advanced",
      "membuat"
    ]
  },
  {
    "id": 127,
    "category": "life",
    "categoryName": "Kehidupan Sehari-hari",
    "emoji": "♡",
    "art": "art-life",
    "title": "Panduan langkah demi langkah: Menyimpan dokumen digital",
    "topic": "Menyimpan dokumen digital",
    "format": "panduan",
    "summary": "Pelajari menyimpan dokumen digital dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 12,
    "mood": "focus",
    "symbol": "⌘",
    "steps": [
      [
        "Lihat kondisi sekarang",
        "Catat kebiasaan atau kebutuhan yang berhubungan dengan menyimpan dokumen digital tanpa menghakimi diri sendiri."
      ],
      [
        "Pilih satu prioritas",
        "Tentukan perubahan paling sederhana yang akan membantu. Hindari membuat terlalu banyak aturan sekaligus."
      ],
      [
        "Siapkan langkah praktis",
        "Siapkan alat, daftar, atau pengingat yang diperlukan agar langkah ini mudah dilakukan dalam keseharian."
      ],
      [
        "Coba dalam skala kecil",
        "Terapkan rencana untuk satu hari atau satu situasi terlebih dahulu. Perhatikan apa yang terasa mudah dan apa yang menghambat."
      ],
      [
        "Sesuaikan",
        "Jika langkah terlalu rumit, sederhanakan. Pilih cara yang realistis dan aman untuk keadaanmu."
      ],
      [
        "Evaluasi singkat",
        "Catat hasilnya dan pilih satu penyesuaian untuk percobaan berikutnya. Konsistensi kecil lebih berguna daripada rencana yang tidak terpakai."
      ]
    ],
    "takeaways": [
      "Tujuan menyimpan dokumen digital perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan menyimpan dokumen digital pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "life",
      "panduan",
      "beginner",
      "menyimpan"
    ]
  },
  {
    "id": 128,
    "category": "life",
    "categoryName": "Kehidupan Sehari-hari",
    "emoji": "♡",
    "art": "art-life",
    "title": "Proyek mini: Membuat menu mingguan",
    "topic": "Membuat menu mingguan",
    "format": "proyek",
    "summary": "Proyek mini yang membantumu mempraktikkan membuat menu mingguan dari perencanaan sampai evaluasi.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 28,
    "mood": "calm",
    "symbol": "〰",
    "steps": [
      [
        "Ruang lingkup proyek",
        "Tentukan hasil mini dari membuat menu mingguan yang bisa selesai dalam satu sesi. Batasi fitur agar proyek tetap realistis."
      ],
      [
        "Pilih satu prioritas",
        "Tentukan perubahan paling sederhana yang akan membantu. Hindari membuat terlalu banyak aturan sekaligus."
      ],
      [
        "Siapkan langkah praktis",
        "Siapkan alat, daftar, atau pengingat yang diperlukan agar langkah ini mudah dilakukan dalam keseharian."
      ],
      [
        "Coba dalam skala kecil",
        "Terapkan rencana untuk satu hari atau satu situasi terlebih dahulu. Perhatikan apa yang terasa mudah dan apa yang menghambat."
      ],
      [
        "Sesuaikan",
        "Jika langkah terlalu rumit, sederhanakan. Pilih cara yang realistis dan aman untuk keadaanmu."
      ],
      [
        "Evaluasi singkat",
        "Catat hasilnya dan pilih satu penyesuaian untuk percobaan berikutnya. Konsistensi kecil lebih berguna daripada rencana yang tidak terpakai."
      ]
    ],
    "takeaways": [
      "Tujuan membuat menu mingguan perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat menu mingguan pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "life",
      "proyek",
      "advanced",
      "membuat"
    ]
  },
  {
    "id": 129,
    "category": "life",
    "categoryName": "Kehidupan Sehari-hari",
    "emoji": "♡",
    "art": "art-life",
    "title": "Checklist penerapan: Merawat barang elektronik",
    "topic": "Merawat barang elektronik",
    "format": "checklist",
    "summary": "Daftar periksa untuk menerapkan merawat barang elektronik tanpa melewatkan hal penting.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 25,
    "mood": "calm",
    "symbol": "✧",
    "steps": [
      [
        "Periksa kesiapan",
        "Pastikan tujuan merawat barang elektronik jelas dan semua bahan penting tersedia."
      ],
      [
        "Pilih satu prioritas",
        "Tentukan perubahan paling sederhana yang akan membantu. Hindari membuat terlalu banyak aturan sekaligus."
      ],
      [
        "Siapkan langkah praktis",
        "Siapkan alat, daftar, atau pengingat yang diperlukan agar langkah ini mudah dilakukan dalam keseharian."
      ],
      [
        "Coba dalam skala kecil",
        "Terapkan rencana untuk satu hari atau satu situasi terlebih dahulu. Perhatikan apa yang terasa mudah dan apa yang menghambat."
      ],
      [
        "Sesuaikan",
        "Jika langkah terlalu rumit, sederhanakan. Pilih cara yang realistis dan aman untuk keadaanmu."
      ],
      [
        "Evaluasi singkat",
        "Catat hasilnya dan pilih satu penyesuaian untuk percobaan berikutnya. Konsistensi kecil lebih berguna daripada rencana yang tidak terpakai."
      ]
    ],
    "takeaways": [
      "Tujuan merawat barang elektronik perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan merawat barang elektronik pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "life",
      "checklist",
      "advanced",
      "merawat"
    ]
  },
  {
    "id": 130,
    "category": "life",
    "categoryName": "Kehidupan Sehari-hari",
    "emoji": "♡",
    "art": "art-life",
    "title": "Panduan langkah demi langkah: Menjaga kebiasaan tidur sehat",
    "topic": "Menjaga kebiasaan tidur sehat",
    "format": "panduan",
    "summary": "Pelajari menjaga kebiasaan tidur sehat dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 18,
    "mood": "creative",
    "symbol": "↗",
    "steps": [
      [
        "Lihat kondisi sekarang",
        "Catat kebiasaan atau kebutuhan yang berhubungan dengan menjaga kebiasaan tidur sehat tanpa menghakimi diri sendiri."
      ],
      [
        "Pilih satu prioritas",
        "Tentukan perubahan paling sederhana yang akan membantu. Hindari membuat terlalu banyak aturan sekaligus."
      ],
      [
        "Siapkan langkah praktis",
        "Siapkan alat, daftar, atau pengingat yang diperlukan agar langkah ini mudah dilakukan dalam keseharian."
      ],
      [
        "Coba dalam skala kecil",
        "Terapkan rencana untuk satu hari atau satu situasi terlebih dahulu. Perhatikan apa yang terasa mudah dan apa yang menghambat."
      ],
      [
        "Sesuaikan",
        "Jika langkah terlalu rumit, sederhanakan. Pilih cara yang realistis dan aman untuk keadaanmu."
      ],
      [
        "Evaluasi singkat",
        "Catat hasilnya dan pilih satu penyesuaian untuk percobaan berikutnya. Konsistensi kecil lebih berguna daripada rencana yang tidak terpakai."
      ]
    ],
    "takeaways": [
      "Tujuan menjaga kebiasaan tidur sehat perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan menjaga kebiasaan tidur sehat pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "life",
      "panduan",
      "medium",
      "menjaga"
    ]
  },
  {
    "id": 131,
    "category": "life",
    "categoryName": "Kehidupan Sehari-hari",
    "emoji": "♡",
    "art": "art-life",
    "title": "Panduan langkah demi langkah: Mengatur waktu layar",
    "topic": "Mengatur waktu layar",
    "format": "panduan",
    "summary": "Pelajari mengatur waktu layar dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 12,
    "mood": "focus",
    "symbol": "✧",
    "steps": [
      [
        "Lihat kondisi sekarang",
        "Catat kebiasaan atau kebutuhan yang berhubungan dengan mengatur waktu layar tanpa menghakimi diri sendiri."
      ],
      [
        "Pilih satu prioritas",
        "Tentukan perubahan paling sederhana yang akan membantu. Hindari membuat terlalu banyak aturan sekaligus."
      ],
      [
        "Siapkan langkah praktis",
        "Siapkan alat, daftar, atau pengingat yang diperlukan agar langkah ini mudah dilakukan dalam keseharian."
      ],
      [
        "Coba dalam skala kecil",
        "Terapkan rencana untuk satu hari atau satu situasi terlebih dahulu. Perhatikan apa yang terasa mudah dan apa yang menghambat."
      ],
      [
        "Sesuaikan",
        "Jika langkah terlalu rumit, sederhanakan. Pilih cara yang realistis dan aman untuk keadaanmu."
      ],
      [
        "Evaluasi singkat",
        "Catat hasilnya dan pilih satu penyesuaian untuk percobaan berikutnya. Konsistensi kecil lebih berguna daripada rencana yang tidak terpakai."
      ]
    ],
    "takeaways": [
      "Tujuan mengatur waktu layar perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mengatur waktu layar pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "life",
      "panduan",
      "beginner",
      "mengatur"
    ]
  },
  {
    "id": 132,
    "category": "life",
    "categoryName": "Kehidupan Sehari-hari",
    "emoji": "♡",
    "art": "art-life",
    "title": "Panduan langkah demi langkah: Membuat jurnal syukur",
    "topic": "Membuat jurnal syukur",
    "format": "panduan",
    "summary": "Pelajari membuat jurnal syukur dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 18,
    "mood": "creative",
    "symbol": "✦",
    "steps": [
      [
        "Lihat kondisi sekarang",
        "Catat kebiasaan atau kebutuhan yang berhubungan dengan membuat jurnal syukur tanpa menghakimi diri sendiri."
      ],
      [
        "Pilih satu prioritas",
        "Tentukan perubahan paling sederhana yang akan membantu. Hindari membuat terlalu banyak aturan sekaligus."
      ],
      [
        "Siapkan langkah praktis",
        "Siapkan alat, daftar, atau pengingat yang diperlukan agar langkah ini mudah dilakukan dalam keseharian."
      ],
      [
        "Coba dalam skala kecil",
        "Terapkan rencana untuk satu hari atau satu situasi terlebih dahulu. Perhatikan apa yang terasa mudah dan apa yang menghambat."
      ],
      [
        "Sesuaikan",
        "Jika langkah terlalu rumit, sederhanakan. Pilih cara yang realistis dan aman untuk keadaanmu."
      ],
      [
        "Evaluasi singkat",
        "Catat hasilnya dan pilih satu penyesuaian untuk percobaan berikutnya. Konsistensi kecil lebih berguna daripada rencana yang tidak terpakai."
      ]
    ],
    "takeaways": [
      "Tujuan membuat jurnal syukur perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat jurnal syukur pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "life",
      "panduan",
      "medium",
      "membuat"
    ]
  },
  {
    "id": 133,
    "category": "life",
    "categoryName": "Kehidupan Sehari-hari",
    "emoji": "♡",
    "art": "art-life",
    "title": "Workflow praktis: Menyiapkan tas sekolah",
    "topic": "Menyiapkan tas sekolah",
    "format": "workflow",
    "summary": "Bangun alur kerja menyiapkan tas sekolah yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 15,
    "mood": "focus",
    "symbol": "◈",
    "steps": [
      [
        "Lihat kondisi sekarang",
        "Catat kebiasaan atau kebutuhan yang berhubungan dengan menyiapkan tas sekolah tanpa menghakimi diri sendiri."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah menyiapkan tas sekolah dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Siapkan langkah praktis",
        "Siapkan alat, daftar, atau pengingat yang diperlukan agar langkah ini mudah dilakukan dalam keseharian."
      ],
      [
        "Coba dalam skala kecil",
        "Terapkan rencana untuk satu hari atau satu situasi terlebih dahulu. Perhatikan apa yang terasa mudah dan apa yang menghambat."
      ],
      [
        "Sesuaikan",
        "Jika langkah terlalu rumit, sederhanakan. Pilih cara yang realistis dan aman untuk keadaanmu."
      ],
      [
        "Evaluasi singkat",
        "Catat hasilnya dan pilih satu penyesuaian untuk percobaan berikutnya. Konsistensi kecil lebih berguna daripada rencana yang tidak terpakai."
      ]
    ],
    "takeaways": [
      "Tujuan menyiapkan tas sekolah perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan menyiapkan tas sekolah pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "life",
      "workflow",
      "beginner",
      "menyiapkan"
    ]
  },
  {
    "id": 134,
    "category": "life",
    "categoryName": "Kehidupan Sehari-hari",
    "emoji": "♡",
    "art": "art-life",
    "title": "Panduan langkah demi langkah: Mengelola koleksi foto",
    "topic": "Mengelola koleksi foto",
    "format": "panduan",
    "summary": "Pelajari mengelola koleksi foto dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 18,
    "mood": "creative",
    "symbol": "✦",
    "steps": [
      [
        "Lihat kondisi sekarang",
        "Catat kebiasaan atau kebutuhan yang berhubungan dengan mengelola koleksi foto tanpa menghakimi diri sendiri."
      ],
      [
        "Pilih satu prioritas",
        "Tentukan perubahan paling sederhana yang akan membantu. Hindari membuat terlalu banyak aturan sekaligus."
      ],
      [
        "Siapkan langkah praktis",
        "Siapkan alat, daftar, atau pengingat yang diperlukan agar langkah ini mudah dilakukan dalam keseharian."
      ],
      [
        "Coba dalam skala kecil",
        "Terapkan rencana untuk satu hari atau satu situasi terlebih dahulu. Perhatikan apa yang terasa mudah dan apa yang menghambat."
      ],
      [
        "Sesuaikan",
        "Jika langkah terlalu rumit, sederhanakan. Pilih cara yang realistis dan aman untuk keadaanmu."
      ],
      [
        "Evaluasi singkat",
        "Catat hasilnya dan pilih satu penyesuaian untuk percobaan berikutnya. Konsistensi kecil lebih berguna daripada rencana yang tidak terpakai."
      ]
    ],
    "takeaways": [
      "Tujuan mengelola koleksi foto perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mengelola koleksi foto pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "life",
      "panduan",
      "medium",
      "mengelola"
    ]
  },
  {
    "id": 135,
    "category": "life",
    "categoryName": "Kehidupan Sehari-hari",
    "emoji": "♡",
    "art": "art-life",
    "title": "Workflow praktis: Membuat sistem penyimpanan",
    "topic": "Membuat sistem penyimpanan",
    "format": "workflow",
    "summary": "Bangun alur kerja membuat sistem penyimpanan yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 15,
    "mood": "focus",
    "symbol": "▤",
    "steps": [
      [
        "Lihat kondisi sekarang",
        "Catat kebiasaan atau kebutuhan yang berhubungan dengan membuat sistem penyimpanan tanpa menghakimi diri sendiri."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah membuat sistem penyimpanan dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Siapkan langkah praktis",
        "Siapkan alat, daftar, atau pengingat yang diperlukan agar langkah ini mudah dilakukan dalam keseharian."
      ],
      [
        "Coba dalam skala kecil",
        "Terapkan rencana untuk satu hari atau satu situasi terlebih dahulu. Perhatikan apa yang terasa mudah dan apa yang menghambat."
      ],
      [
        "Sesuaikan",
        "Jika langkah terlalu rumit, sederhanakan. Pilih cara yang realistis dan aman untuk keadaanmu."
      ],
      [
        "Evaluasi singkat",
        "Catat hasilnya dan pilih satu penyesuaian untuk percobaan berikutnya. Konsistensi kecil lebih berguna daripada rencana yang tidak terpakai."
      ]
    ],
    "takeaways": [
      "Tujuan membuat sistem penyimpanan perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat sistem penyimpanan pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "life",
      "workflow",
      "beginner",
      "membuat"
    ]
  },
  {
    "id": 136,
    "category": "life",
    "categoryName": "Kehidupan Sehari-hari",
    "emoji": "♡",
    "art": "art-life",
    "title": "Workflow praktis: Membuat rencana menabung",
    "topic": "Membuat rencana menabung",
    "format": "workflow",
    "summary": "Bangun alur kerja membuat rencana menabung yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 21,
    "mood": "creative",
    "symbol": "⌘",
    "steps": [
      [
        "Lihat kondisi sekarang",
        "Catat kebiasaan atau kebutuhan yang berhubungan dengan membuat rencana menabung tanpa menghakimi diri sendiri."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah membuat rencana menabung dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Siapkan langkah praktis",
        "Siapkan alat, daftar, atau pengingat yang diperlukan agar langkah ini mudah dilakukan dalam keseharian."
      ],
      [
        "Coba dalam skala kecil",
        "Terapkan rencana untuk satu hari atau satu situasi terlebih dahulu. Perhatikan apa yang terasa mudah dan apa yang menghambat."
      ],
      [
        "Sesuaikan",
        "Jika langkah terlalu rumit, sederhanakan. Pilih cara yang realistis dan aman untuk keadaanmu."
      ],
      [
        "Evaluasi singkat",
        "Catat hasilnya dan pilih satu penyesuaian untuk percobaan berikutnya. Konsistensi kecil lebih berguna daripada rencana yang tidak terpakai."
      ]
    ],
    "takeaways": [
      "Tujuan membuat rencana menabung perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat rencana menabung pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "life",
      "workflow",
      "medium",
      "membuat"
    ]
  },
  {
    "id": 137,
    "category": "life",
    "categoryName": "Kehidupan Sehari-hari",
    "emoji": "♡",
    "art": "art-life",
    "title": "Workflow praktis: Membaca label produk",
    "topic": "Membaca label produk",
    "format": "workflow",
    "summary": "Bangun alur kerja membaca label produk yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 28,
    "mood": "calm",
    "symbol": "↗",
    "steps": [
      [
        "Lihat kondisi sekarang",
        "Catat kebiasaan atau kebutuhan yang berhubungan dengan membaca label produk tanpa menghakimi diri sendiri."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah membaca label produk dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Siapkan langkah praktis",
        "Siapkan alat, daftar, atau pengingat yang diperlukan agar langkah ini mudah dilakukan dalam keseharian."
      ],
      [
        "Coba dalam skala kecil",
        "Terapkan rencana untuk satu hari atau satu situasi terlebih dahulu. Perhatikan apa yang terasa mudah dan apa yang menghambat."
      ],
      [
        "Sesuaikan",
        "Jika langkah terlalu rumit, sederhanakan. Pilih cara yang realistis dan aman untuk keadaanmu."
      ],
      [
        "Evaluasi singkat",
        "Catat hasilnya dan pilih satu penyesuaian untuk percobaan berikutnya. Konsistensi kecil lebih berguna daripada rencana yang tidak terpakai."
      ]
    ],
    "takeaways": [
      "Tujuan membaca label produk perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membaca label produk pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "life",
      "workflow",
      "advanced",
      "membaca"
    ]
  },
  {
    "id": 138,
    "category": "life",
    "categoryName": "Kehidupan Sehari-hari",
    "emoji": "♡",
    "art": "art-life",
    "title": "Panduan langkah demi langkah: Mengatur ruang penyimpanan",
    "topic": "Mengatur ruang penyimpanan",
    "format": "panduan",
    "summary": "Pelajari mengatur ruang penyimpanan dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 12,
    "mood": "focus",
    "symbol": "✧",
    "steps": [
      [
        "Lihat kondisi sekarang",
        "Catat kebiasaan atau kebutuhan yang berhubungan dengan mengatur ruang penyimpanan tanpa menghakimi diri sendiri."
      ],
      [
        "Pilih satu prioritas",
        "Tentukan perubahan paling sederhana yang akan membantu. Hindari membuat terlalu banyak aturan sekaligus."
      ],
      [
        "Siapkan langkah praktis",
        "Siapkan alat, daftar, atau pengingat yang diperlukan agar langkah ini mudah dilakukan dalam keseharian."
      ],
      [
        "Coba dalam skala kecil",
        "Terapkan rencana untuk satu hari atau satu situasi terlebih dahulu. Perhatikan apa yang terasa mudah dan apa yang menghambat."
      ],
      [
        "Sesuaikan",
        "Jika langkah terlalu rumit, sederhanakan. Pilih cara yang realistis dan aman untuk keadaanmu."
      ],
      [
        "Evaluasi singkat",
        "Catat hasilnya dan pilih satu penyesuaian untuk percobaan berikutnya. Konsistensi kecil lebih berguna daripada rencana yang tidak terpakai."
      ]
    ],
    "takeaways": [
      "Tujuan mengatur ruang penyimpanan perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mengatur ruang penyimpanan pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "life",
      "panduan",
      "beginner",
      "mengatur"
    ]
  },
  {
    "id": 139,
    "category": "life",
    "categoryName": "Kehidupan Sehari-hari",
    "emoji": "♡",
    "art": "art-life",
    "title": "Proyek mini: Menyiapkan acara kecil",
    "topic": "Menyiapkan acara kecil",
    "format": "proyek",
    "summary": "Proyek mini yang membantumu mempraktikkan menyiapkan acara kecil dari perencanaan sampai evaluasi.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 28,
    "mood": "calm",
    "symbol": "↗",
    "steps": [
      [
        "Ruang lingkup proyek",
        "Tentukan hasil mini dari menyiapkan acara kecil yang bisa selesai dalam satu sesi. Batasi fitur agar proyek tetap realistis."
      ],
      [
        "Pilih satu prioritas",
        "Tentukan perubahan paling sederhana yang akan membantu. Hindari membuat terlalu banyak aturan sekaligus."
      ],
      [
        "Siapkan langkah praktis",
        "Siapkan alat, daftar, atau pengingat yang diperlukan agar langkah ini mudah dilakukan dalam keseharian."
      ],
      [
        "Coba dalam skala kecil",
        "Terapkan rencana untuk satu hari atau satu situasi terlebih dahulu. Perhatikan apa yang terasa mudah dan apa yang menghambat."
      ],
      [
        "Sesuaikan",
        "Jika langkah terlalu rumit, sederhanakan. Pilih cara yang realistis dan aman untuk keadaanmu."
      ],
      [
        "Evaluasi singkat",
        "Catat hasilnya dan pilih satu penyesuaian untuk percobaan berikutnya. Konsistensi kecil lebih berguna daripada rencana yang tidak terpakai."
      ]
    ],
    "takeaways": [
      "Tujuan menyiapkan acara kecil perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan menyiapkan acara kecil pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "life",
      "proyek",
      "advanced",
      "menyiapkan"
    ]
  },
  {
    "id": 140,
    "category": "life",
    "categoryName": "Kehidupan Sehari-hari",
    "emoji": "♡",
    "art": "art-life",
    "title": "Checklist penerapan: Membuat rencana hadiah",
    "topic": "Membuat rencana hadiah",
    "format": "checklist",
    "summary": "Daftar periksa untuk menerapkan membuat rencana hadiah tanpa melewatkan hal penting.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 25,
    "mood": "calm",
    "symbol": "◈",
    "steps": [
      [
        "Periksa kesiapan",
        "Pastikan tujuan membuat rencana hadiah jelas dan semua bahan penting tersedia."
      ],
      [
        "Pilih satu prioritas",
        "Tentukan perubahan paling sederhana yang akan membantu. Hindari membuat terlalu banyak aturan sekaligus."
      ],
      [
        "Siapkan langkah praktis",
        "Siapkan alat, daftar, atau pengingat yang diperlukan agar langkah ini mudah dilakukan dalam keseharian."
      ],
      [
        "Coba dalam skala kecil",
        "Terapkan rencana untuk satu hari atau satu situasi terlebih dahulu. Perhatikan apa yang terasa mudah dan apa yang menghambat."
      ],
      [
        "Sesuaikan",
        "Jika langkah terlalu rumit, sederhanakan. Pilih cara yang realistis dan aman untuk keadaanmu."
      ],
      [
        "Evaluasi singkat",
        "Catat hasilnya dan pilih satu penyesuaian untuk percobaan berikutnya. Konsistensi kecil lebih berguna daripada rencana yang tidak terpakai."
      ]
    ],
    "takeaways": [
      "Tujuan membuat rencana hadiah perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat rencana hadiah pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "life",
      "checklist",
      "advanced",
      "membuat"
    ]
  },
  {
    "id": 141,
    "category": "life",
    "categoryName": "Kehidupan Sehari-hari",
    "emoji": "♡",
    "art": "art-life",
    "title": "Panduan langkah demi langkah: Membuat checklist kebersihan",
    "topic": "Membuat checklist kebersihan",
    "format": "panduan",
    "summary": "Pelajari membuat checklist kebersihan dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 18,
    "mood": "creative",
    "symbol": "✦",
    "steps": [
      [
        "Lihat kondisi sekarang",
        "Catat kebiasaan atau kebutuhan yang berhubungan dengan membuat checklist kebersihan tanpa menghakimi diri sendiri."
      ],
      [
        "Pilih satu prioritas",
        "Tentukan perubahan paling sederhana yang akan membantu. Hindari membuat terlalu banyak aturan sekaligus."
      ],
      [
        "Siapkan langkah praktis",
        "Siapkan alat, daftar, atau pengingat yang diperlukan agar langkah ini mudah dilakukan dalam keseharian."
      ],
      [
        "Coba dalam skala kecil",
        "Terapkan rencana untuk satu hari atau satu situasi terlebih dahulu. Perhatikan apa yang terasa mudah dan apa yang menghambat."
      ],
      [
        "Sesuaikan",
        "Jika langkah terlalu rumit, sederhanakan. Pilih cara yang realistis dan aman untuk keadaanmu."
      ],
      [
        "Evaluasi singkat",
        "Catat hasilnya dan pilih satu penyesuaian untuk percobaan berikutnya. Konsistensi kecil lebih berguna daripada rencana yang tidak terpakai."
      ]
    ],
    "takeaways": [
      "Tujuan membuat checklist kebersihan perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat checklist kebersihan pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "life",
      "panduan",
      "medium",
      "membuat"
    ]
  },
  {
    "id": 142,
    "category": "life",
    "categoryName": "Kehidupan Sehari-hari",
    "emoji": "♡",
    "art": "art-life",
    "title": "Panduan langkah demi langkah: Membuat jadwal olahraga ringan",
    "topic": "Membuat jadwal olahraga ringan",
    "format": "panduan",
    "summary": "Pelajari membuat jadwal olahraga ringan dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 12,
    "mood": "focus",
    "symbol": "◈",
    "steps": [
      [
        "Lihat kondisi sekarang",
        "Catat kebiasaan atau kebutuhan yang berhubungan dengan membuat jadwal olahraga ringan tanpa menghakimi diri sendiri."
      ],
      [
        "Pilih satu prioritas",
        "Tentukan perubahan paling sederhana yang akan membantu. Hindari membuat terlalu banyak aturan sekaligus."
      ],
      [
        "Siapkan langkah praktis",
        "Siapkan alat, daftar, atau pengingat yang diperlukan agar langkah ini mudah dilakukan dalam keseharian."
      ],
      [
        "Coba dalam skala kecil",
        "Terapkan rencana untuk satu hari atau satu situasi terlebih dahulu. Perhatikan apa yang terasa mudah dan apa yang menghambat."
      ],
      [
        "Sesuaikan",
        "Jika langkah terlalu rumit, sederhanakan. Pilih cara yang realistis dan aman untuk keadaanmu."
      ],
      [
        "Evaluasi singkat",
        "Catat hasilnya dan pilih satu penyesuaian untuk percobaan berikutnya. Konsistensi kecil lebih berguna daripada rencana yang tidak terpakai."
      ]
    ],
    "takeaways": [
      "Tujuan membuat jadwal olahraga ringan perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat jadwal olahraga ringan pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "life",
      "panduan",
      "beginner",
      "membuat"
    ]
  },
  {
    "id": 143,
    "category": "life",
    "categoryName": "Kehidupan Sehari-hari",
    "emoji": "♡",
    "art": "art-life",
    "title": "Panduan langkah demi langkah: Menyusun perlengkapan bepergian",
    "topic": "Menyusun perlengkapan bepergian",
    "format": "panduan",
    "summary": "Pelajari menyusun perlengkapan bepergian dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 18,
    "mood": "creative",
    "symbol": "◎",
    "steps": [
      [
        "Lihat kondisi sekarang",
        "Catat kebiasaan atau kebutuhan yang berhubungan dengan menyusun perlengkapan bepergian tanpa menghakimi diri sendiri."
      ],
      [
        "Pilih satu prioritas",
        "Tentukan perubahan paling sederhana yang akan membantu. Hindari membuat terlalu banyak aturan sekaligus."
      ],
      [
        "Siapkan langkah praktis",
        "Siapkan alat, daftar, atau pengingat yang diperlukan agar langkah ini mudah dilakukan dalam keseharian."
      ],
      [
        "Coba dalam skala kecil",
        "Terapkan rencana untuk satu hari atau satu situasi terlebih dahulu. Perhatikan apa yang terasa mudah dan apa yang menghambat."
      ],
      [
        "Sesuaikan",
        "Jika langkah terlalu rumit, sederhanakan. Pilih cara yang realistis dan aman untuk keadaanmu."
      ],
      [
        "Evaluasi singkat",
        "Catat hasilnya dan pilih satu penyesuaian untuk percobaan berikutnya. Konsistensi kecil lebih berguna daripada rencana yang tidak terpakai."
      ]
    ],
    "takeaways": [
      "Tujuan menyusun perlengkapan bepergian perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan menyusun perlengkapan bepergian pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "life",
      "panduan",
      "medium",
      "menyusun"
    ]
  },
  {
    "id": 144,
    "category": "life",
    "categoryName": "Kehidupan Sehari-hari",
    "emoji": "♡",
    "art": "art-life",
    "title": "Workflow praktis: Mengatur koleksi buku",
    "topic": "Mengatur koleksi buku",
    "format": "workflow",
    "summary": "Bangun alur kerja mengatur koleksi buku yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 15,
    "mood": "focus",
    "symbol": "▤",
    "steps": [
      [
        "Lihat kondisi sekarang",
        "Catat kebiasaan atau kebutuhan yang berhubungan dengan mengatur koleksi buku tanpa menghakimi diri sendiri."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah mengatur koleksi buku dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Siapkan langkah praktis",
        "Siapkan alat, daftar, atau pengingat yang diperlukan agar langkah ini mudah dilakukan dalam keseharian."
      ],
      [
        "Coba dalam skala kecil",
        "Terapkan rencana untuk satu hari atau satu situasi terlebih dahulu. Perhatikan apa yang terasa mudah dan apa yang menghambat."
      ],
      [
        "Sesuaikan",
        "Jika langkah terlalu rumit, sederhanakan. Pilih cara yang realistis dan aman untuk keadaanmu."
      ],
      [
        "Evaluasi singkat",
        "Catat hasilnya dan pilih satu penyesuaian untuk percobaan berikutnya. Konsistensi kecil lebih berguna daripada rencana yang tidak terpakai."
      ]
    ],
    "takeaways": [
      "Tujuan mengatur koleksi buku perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mengatur koleksi buku pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "life",
      "workflow",
      "beginner",
      "mengatur"
    ]
  },
  {
    "id": 145,
    "category": "life",
    "categoryName": "Kehidupan Sehari-hari",
    "emoji": "♡",
    "art": "art-life",
    "title": "Panduan langkah demi langkah: Merencanakan kegiatan bersama",
    "topic": "Merencanakan kegiatan bersama",
    "format": "panduan",
    "summary": "Pelajari merencanakan kegiatan bersama dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 18,
    "mood": "creative",
    "symbol": "◎",
    "steps": [
      [
        "Lihat kondisi sekarang",
        "Catat kebiasaan atau kebutuhan yang berhubungan dengan merencanakan kegiatan bersama tanpa menghakimi diri sendiri."
      ],
      [
        "Pilih satu prioritas",
        "Tentukan perubahan paling sederhana yang akan membantu. Hindari membuat terlalu banyak aturan sekaligus."
      ],
      [
        "Siapkan langkah praktis",
        "Siapkan alat, daftar, atau pengingat yang diperlukan agar langkah ini mudah dilakukan dalam keseharian."
      ],
      [
        "Coba dalam skala kecil",
        "Terapkan rencana untuk satu hari atau satu situasi terlebih dahulu. Perhatikan apa yang terasa mudah dan apa yang menghambat."
      ],
      [
        "Sesuaikan",
        "Jika langkah terlalu rumit, sederhanakan. Pilih cara yang realistis dan aman untuk keadaanmu."
      ],
      [
        "Evaluasi singkat",
        "Catat hasilnya dan pilih satu penyesuaian untuk percobaan berikutnya. Konsistensi kecil lebih berguna daripada rencana yang tidak terpakai."
      ]
    ],
    "takeaways": [
      "Tujuan merencanakan kegiatan bersama perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan merencanakan kegiatan bersama pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "life",
      "panduan",
      "medium",
      "merencanakan"
    ]
  },
  {
    "id": 146,
    "category": "life",
    "categoryName": "Kehidupan Sehari-hari",
    "emoji": "♡",
    "art": "art-life",
    "title": "Panduan langkah demi langkah: Menyimpan resep favorit",
    "topic": "Menyimpan resep favorit",
    "format": "panduan",
    "summary": "Pelajari menyimpan resep favorit dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 25,
    "mood": "calm",
    "symbol": "↗",
    "steps": [
      [
        "Lihat kondisi sekarang",
        "Catat kebiasaan atau kebutuhan yang berhubungan dengan menyimpan resep favorit tanpa menghakimi diri sendiri."
      ],
      [
        "Pilih satu prioritas",
        "Tentukan perubahan paling sederhana yang akan membantu. Hindari membuat terlalu banyak aturan sekaligus."
      ],
      [
        "Siapkan langkah praktis",
        "Siapkan alat, daftar, atau pengingat yang diperlukan agar langkah ini mudah dilakukan dalam keseharian."
      ],
      [
        "Coba dalam skala kecil",
        "Terapkan rencana untuk satu hari atau satu situasi terlebih dahulu. Perhatikan apa yang terasa mudah dan apa yang menghambat."
      ],
      [
        "Sesuaikan",
        "Jika langkah terlalu rumit, sederhanakan. Pilih cara yang realistis dan aman untuk keadaanmu."
      ],
      [
        "Evaluasi singkat",
        "Catat hasilnya dan pilih satu penyesuaian untuk percobaan berikutnya. Konsistensi kecil lebih berguna daripada rencana yang tidak terpakai."
      ]
    ],
    "takeaways": [
      "Tujuan menyimpan resep favorit perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan menyimpan resep favorit pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "life",
      "panduan",
      "advanced",
      "menyimpan"
    ]
  },
  {
    "id": 147,
    "category": "life",
    "categoryName": "Kehidupan Sehari-hari",
    "emoji": "♡",
    "art": "art-life",
    "title": "Workflow praktis: Membuat rencana belajar mandiri",
    "topic": "Membuat rencana belajar mandiri",
    "format": "workflow",
    "summary": "Bangun alur kerja membuat rencana belajar mandiri yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 21,
    "mood": "creative",
    "symbol": "✧",
    "steps": [
      [
        "Lihat kondisi sekarang",
        "Catat kebiasaan atau kebutuhan yang berhubungan dengan membuat rencana belajar mandiri tanpa menghakimi diri sendiri."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah membuat rencana belajar mandiri dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Siapkan langkah praktis",
        "Siapkan alat, daftar, atau pengingat yang diperlukan agar langkah ini mudah dilakukan dalam keseharian."
      ],
      [
        "Coba dalam skala kecil",
        "Terapkan rencana untuk satu hari atau satu situasi terlebih dahulu. Perhatikan apa yang terasa mudah dan apa yang menghambat."
      ],
      [
        "Sesuaikan",
        "Jika langkah terlalu rumit, sederhanakan. Pilih cara yang realistis dan aman untuk keadaanmu."
      ],
      [
        "Evaluasi singkat",
        "Catat hasilnya dan pilih satu penyesuaian untuk percobaan berikutnya. Konsistensi kecil lebih berguna daripada rencana yang tidak terpakai."
      ]
    ],
    "takeaways": [
      "Tujuan membuat rencana belajar mandiri perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat rencana belajar mandiri pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "life",
      "workflow",
      "medium",
      "membuat"
    ]
  },
  {
    "id": 148,
    "category": "life",
    "categoryName": "Kehidupan Sehari-hari",
    "emoji": "♡",
    "art": "art-life",
    "title": "Latihan mandiri: Menata desktop komputer",
    "topic": "Menata desktop komputer",
    "format": "latihan",
    "summary": "Latihan terarah untuk menerapkan menata desktop komputer sambil mengecek pemahamanmu sendiri.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 18,
    "mood": "focus",
    "symbol": "↗",
    "steps": [
      [
        "Tantangan mini",
        "Coba lakukan menata desktop komputer dalam skala kecil selama 10–15 menit. Tuliskan hasil yang ingin kamu capai sebelum mulai."
      ],
      [
        "Pilih satu prioritas",
        "Tentukan perubahan paling sederhana yang akan membantu. Hindari membuat terlalu banyak aturan sekaligus."
      ],
      [
        "Siapkan langkah praktis",
        "Siapkan alat, daftar, atau pengingat yang diperlukan agar langkah ini mudah dilakukan dalam keseharian."
      ],
      [
        "Coba dalam skala kecil",
        "Terapkan rencana untuk satu hari atau satu situasi terlebih dahulu. Perhatikan apa yang terasa mudah dan apa yang menghambat."
      ],
      [
        "Sesuaikan",
        "Jika langkah terlalu rumit, sederhanakan. Pilih cara yang realistis dan aman untuk keadaanmu."
      ],
      [
        "Evaluasi singkat",
        "Catat hasilnya dan pilih satu penyesuaian untuk percobaan berikutnya. Konsistensi kecil lebih berguna daripada rencana yang tidak terpakai."
      ]
    ],
    "takeaways": [
      "Tujuan menata desktop komputer perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan menata desktop komputer pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "life",
      "latihan",
      "beginner",
      "menata"
    ]
  },
  {
    "id": 149,
    "category": "life",
    "categoryName": "Kehidupan Sehari-hari",
    "emoji": "♡",
    "art": "art-life",
    "title": "Panduan langkah demi langkah: Membuat rencana mingguan",
    "topic": "Membuat rencana mingguan",
    "format": "panduan",
    "summary": "Pelajari membuat rencana mingguan dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 12,
    "mood": "focus",
    "symbol": "◈",
    "steps": [
      [
        "Lihat kondisi sekarang",
        "Catat kebiasaan atau kebutuhan yang berhubungan dengan membuat rencana mingguan tanpa menghakimi diri sendiri."
      ],
      [
        "Pilih satu prioritas",
        "Tentukan perubahan paling sederhana yang akan membantu. Hindari membuat terlalu banyak aturan sekaligus."
      ],
      [
        "Siapkan langkah praktis",
        "Siapkan alat, daftar, atau pengingat yang diperlukan agar langkah ini mudah dilakukan dalam keseharian."
      ],
      [
        "Coba dalam skala kecil",
        "Terapkan rencana untuk satu hari atau satu situasi terlebih dahulu. Perhatikan apa yang terasa mudah dan apa yang menghambat."
      ],
      [
        "Sesuaikan",
        "Jika langkah terlalu rumit, sederhanakan. Pilih cara yang realistis dan aman untuk keadaanmu."
      ],
      [
        "Evaluasi singkat",
        "Catat hasilnya dan pilih satu penyesuaian untuk percobaan berikutnya. Konsistensi kecil lebih berguna daripada rencana yang tidak terpakai."
      ]
    ],
    "takeaways": [
      "Tujuan membuat rencana mingguan perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat rencana mingguan pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "life",
      "panduan",
      "beginner",
      "membuat"
    ]
  },
  {
    "id": 150,
    "category": "life",
    "categoryName": "Kehidupan Sehari-hari",
    "emoji": "♡",
    "art": "art-life",
    "title": "Proyek mini: Menyusun arsip digital",
    "topic": "Menyusun arsip digital",
    "format": "proyek",
    "summary": "Proyek mini yang membantumu mempraktikkan menyusun arsip digital dari perencanaan sampai evaluasi.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 28,
    "mood": "calm",
    "symbol": "✦",
    "steps": [
      [
        "Ruang lingkup proyek",
        "Tentukan hasil mini dari menyusun arsip digital yang bisa selesai dalam satu sesi. Batasi fitur agar proyek tetap realistis."
      ],
      [
        "Pilih satu prioritas",
        "Tentukan perubahan paling sederhana yang akan membantu. Hindari membuat terlalu banyak aturan sekaligus."
      ],
      [
        "Siapkan langkah praktis",
        "Siapkan alat, daftar, atau pengingat yang diperlukan agar langkah ini mudah dilakukan dalam keseharian."
      ],
      [
        "Coba dalam skala kecil",
        "Terapkan rencana untuk satu hari atau satu situasi terlebih dahulu. Perhatikan apa yang terasa mudah dan apa yang menghambat."
      ],
      [
        "Sesuaikan",
        "Jika langkah terlalu rumit, sederhanakan. Pilih cara yang realistis dan aman untuk keadaanmu."
      ],
      [
        "Evaluasi singkat",
        "Catat hasilnya dan pilih satu penyesuaian untuk percobaan berikutnya. Konsistensi kecil lebih berguna daripada rencana yang tidak terpakai."
      ]
    ],
    "takeaways": [
      "Tujuan menyusun arsip digital perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan menyusun arsip digital pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "life",
      "proyek",
      "advanced",
      "menyusun"
    ]
  },
  {
    "id": 151,
    "category": "creative",
    "categoryName": "Kreativitas & Media",
    "emoji": "✿",
    "art": "art-creative",
    "title": "Panduan langkah demi langkah: Menyusun ide konten",
    "topic": "Menyusun ide konten",
    "format": "panduan",
    "summary": "Pelajari menyusun ide konten dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 25,
    "mood": "calm",
    "symbol": "〰",
    "steps": [
      [
        "Kumpulkan ide",
        "Tulis beberapa ide untuk menyusun ide konten tanpa langsung menilai semuanya. Pilih satu arah yang paling sesuai dengan tujuan."
      ],
      [
        "Buat rancangan",
        "Susun urutan, komposisi, atau naskah kasar. Tentukan pesan utama dan siapa yang akan melihat hasilnya."
      ],
      [
        "Produksi versi awal",
        "Buat draf sederhana terlebih dahulu. Gunakan aset yang kamu punya hak untuk gunakan dan simpan bahan sumbernya."
      ],
      [
        "Periksa ritme dan detail",
        "Perhatikan keterbacaan, tempo, konsistensi, serta detail yang mengalihkan perhatian dari pesan utama."
      ],
      [
        "Minta masukan",
        "Tunjukkan hasil pada orang yang sesuai dan minta satu masukan konkret. Jangan mengubah semua hal hanya berdasarkan satu pendapat."
      ],
      [
        "Ekspor dan arsipkan",
        "Simpan versi final dengan nama file jelas, ukuran yang sesuai, dan folder aset yang teratur agar mudah diperbarui."
      ]
    ],
    "takeaways": [
      "Tujuan menyusun ide konten perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan menyusun ide konten pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "creative",
      "panduan",
      "advanced",
      "menyusun"
    ]
  },
  {
    "id": 152,
    "category": "creative",
    "categoryName": "Kreativitas & Media",
    "emoji": "✿",
    "art": "art-creative",
    "title": "Proyek mini: Menulis caption yang jelas",
    "topic": "Menulis caption yang jelas",
    "format": "proyek",
    "summary": "Proyek mini yang membantumu mempraktikkan menulis caption yang jelas dari perencanaan sampai evaluasi.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 21,
    "mood": "creative",
    "symbol": "⌘",
    "steps": [
      [
        "Ruang lingkup proyek",
        "Tentukan hasil mini dari menulis caption yang jelas yang bisa selesai dalam satu sesi. Batasi fitur agar proyek tetap realistis."
      ],
      [
        "Buat rancangan",
        "Susun urutan, komposisi, atau naskah kasar. Tentukan pesan utama dan siapa yang akan melihat hasilnya."
      ],
      [
        "Produksi versi awal",
        "Buat draf sederhana terlebih dahulu. Gunakan aset yang kamu punya hak untuk gunakan dan simpan bahan sumbernya."
      ],
      [
        "Periksa ritme dan detail",
        "Perhatikan keterbacaan, tempo, konsistensi, serta detail yang mengalihkan perhatian dari pesan utama."
      ],
      [
        "Minta masukan",
        "Tunjukkan hasil pada orang yang sesuai dan minta satu masukan konkret. Jangan mengubah semua hal hanya berdasarkan satu pendapat."
      ],
      [
        "Ekspor dan arsipkan",
        "Simpan versi final dengan nama file jelas, ukuran yang sesuai, dan folder aset yang teratur agar mudah diperbarui."
      ]
    ],
    "takeaways": [
      "Tujuan menulis caption yang jelas perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan menulis caption yang jelas pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "creative",
      "proyek",
      "medium",
      "menulis"
    ]
  },
  {
    "id": 153,
    "category": "creative",
    "categoryName": "Kreativitas & Media",
    "emoji": "✿",
    "art": "art-creative",
    "title": "Checklist penerapan: Membuat storyboard pendek",
    "topic": "Membuat storyboard pendek",
    "format": "checklist",
    "summary": "Daftar periksa untuk menerapkan membuat storyboard pendek tanpa melewatkan hal penting.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 18,
    "mood": "creative",
    "symbol": "↗",
    "steps": [
      [
        "Periksa kesiapan",
        "Pastikan tujuan membuat storyboard pendek jelas dan semua bahan penting tersedia."
      ],
      [
        "Buat rancangan",
        "Susun urutan, komposisi, atau naskah kasar. Tentukan pesan utama dan siapa yang akan melihat hasilnya."
      ],
      [
        "Produksi versi awal",
        "Buat draf sederhana terlebih dahulu. Gunakan aset yang kamu punya hak untuk gunakan dan simpan bahan sumbernya."
      ],
      [
        "Periksa ritme dan detail",
        "Perhatikan keterbacaan, tempo, konsistensi, serta detail yang mengalihkan perhatian dari pesan utama."
      ],
      [
        "Minta masukan",
        "Tunjukkan hasil pada orang yang sesuai dan minta satu masukan konkret. Jangan mengubah semua hal hanya berdasarkan satu pendapat."
      ],
      [
        "Ekspor dan arsipkan",
        "Simpan versi final dengan nama file jelas, ukuran yang sesuai, dan folder aset yang teratur agar mudah diperbarui."
      ]
    ],
    "takeaways": [
      "Tujuan membuat storyboard pendek perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat storyboard pendek pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "creative",
      "checklist",
      "medium",
      "membuat"
    ]
  },
  {
    "id": 154,
    "category": "creative",
    "categoryName": "Kreativitas & Media",
    "emoji": "✿",
    "art": "art-creative",
    "title": "Panduan langkah demi langkah: Menyusun video pendek",
    "topic": "Menyusun video pendek",
    "format": "panduan",
    "summary": "Pelajari menyusun video pendek dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 12,
    "mood": "focus",
    "symbol": "✧",
    "steps": [
      [
        "Kumpulkan ide",
        "Tulis beberapa ide untuk menyusun video pendek tanpa langsung menilai semuanya. Pilih satu arah yang paling sesuai dengan tujuan."
      ],
      [
        "Buat rancangan",
        "Susun urutan, komposisi, atau naskah kasar. Tentukan pesan utama dan siapa yang akan melihat hasilnya."
      ],
      [
        "Produksi versi awal",
        "Buat draf sederhana terlebih dahulu. Gunakan aset yang kamu punya hak untuk gunakan dan simpan bahan sumbernya."
      ],
      [
        "Periksa ritme dan detail",
        "Perhatikan keterbacaan, tempo, konsistensi, serta detail yang mengalihkan perhatian dari pesan utama."
      ],
      [
        "Minta masukan",
        "Tunjukkan hasil pada orang yang sesuai dan minta satu masukan konkret. Jangan mengubah semua hal hanya berdasarkan satu pendapat."
      ],
      [
        "Ekspor dan arsipkan",
        "Simpan versi final dengan nama file jelas, ukuran yang sesuai, dan folder aset yang teratur agar mudah diperbarui."
      ]
    ],
    "takeaways": [
      "Tujuan menyusun video pendek perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan menyusun video pendek pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "creative",
      "panduan",
      "beginner",
      "menyusun"
    ]
  },
  {
    "id": 155,
    "category": "creative",
    "categoryName": "Kreativitas & Media",
    "emoji": "✿",
    "art": "art-creative",
    "title": "Panduan langkah demi langkah: Merekam audio lebih bersih",
    "topic": "Merekam audio lebih bersih",
    "format": "panduan",
    "summary": "Pelajari merekam audio lebih bersih dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 25,
    "mood": "calm",
    "symbol": "↗",
    "steps": [
      [
        "Kumpulkan ide",
        "Tulis beberapa ide untuk merekam audio lebih bersih tanpa langsung menilai semuanya. Pilih satu arah yang paling sesuai dengan tujuan."
      ],
      [
        "Buat rancangan",
        "Susun urutan, komposisi, atau naskah kasar. Tentukan pesan utama dan siapa yang akan melihat hasilnya."
      ],
      [
        "Produksi versi awal",
        "Buat draf sederhana terlebih dahulu. Gunakan aset yang kamu punya hak untuk gunakan dan simpan bahan sumbernya."
      ],
      [
        "Periksa ritme dan detail",
        "Perhatikan keterbacaan, tempo, konsistensi, serta detail yang mengalihkan perhatian dari pesan utama."
      ],
      [
        "Minta masukan",
        "Tunjukkan hasil pada orang yang sesuai dan minta satu masukan konkret. Jangan mengubah semua hal hanya berdasarkan satu pendapat."
      ],
      [
        "Ekspor dan arsipkan",
        "Simpan versi final dengan nama file jelas, ukuran yang sesuai, dan folder aset yang teratur agar mudah diperbarui."
      ]
    ],
    "takeaways": [
      "Tujuan merekam audio lebih bersih perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan merekam audio lebih bersih pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "creative",
      "panduan",
      "advanced",
      "merekam"
    ]
  },
  {
    "id": 156,
    "category": "creative",
    "categoryName": "Kreativitas & Media",
    "emoji": "✿",
    "art": "art-creative",
    "title": "Proyek mini: Merekam audio lebih bersih",
    "topic": "Merekam audio lebih bersih",
    "format": "proyek",
    "summary": "Proyek mini yang membantumu mempraktikkan merekam audio lebih bersih dari perencanaan sampai evaluasi.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 15,
    "mood": "focus",
    "symbol": "▤",
    "steps": [
      [
        "Ruang lingkup proyek",
        "Tentukan hasil mini dari merekam audio lebih bersih yang bisa selesai dalam satu sesi. Batasi fitur agar proyek tetap realistis."
      ],
      [
        "Buat rancangan",
        "Susun urutan, komposisi, atau naskah kasar. Tentukan pesan utama dan siapa yang akan melihat hasilnya."
      ],
      [
        "Produksi versi awal",
        "Buat draf sederhana terlebih dahulu. Gunakan aset yang kamu punya hak untuk gunakan dan simpan bahan sumbernya."
      ],
      [
        "Periksa ritme dan detail",
        "Perhatikan keterbacaan, tempo, konsistensi, serta detail yang mengalihkan perhatian dari pesan utama."
      ],
      [
        "Minta masukan",
        "Tunjukkan hasil pada orang yang sesuai dan minta satu masukan konkret. Jangan mengubah semua hal hanya berdasarkan satu pendapat."
      ],
      [
        "Ekspor dan arsipkan",
        "Simpan versi final dengan nama file jelas, ukuran yang sesuai, dan folder aset yang teratur agar mudah diperbarui."
      ]
    ],
    "takeaways": [
      "Tujuan merekam audio lebih bersih perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan merekam audio lebih bersih pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "creative",
      "proyek",
      "beginner",
      "merekam"
    ]
  },
  {
    "id": 157,
    "category": "creative",
    "categoryName": "Kreativitas & Media",
    "emoji": "✿",
    "art": "art-creative",
    "title": "Panduan langkah demi langkah: Menulis naskah singkat",
    "topic": "Menulis naskah singkat",
    "format": "panduan",
    "summary": "Pelajari menulis naskah singkat dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 18,
    "mood": "creative",
    "symbol": "◎",
    "steps": [
      [
        "Kumpulkan ide",
        "Tulis beberapa ide untuk menulis naskah singkat tanpa langsung menilai semuanya. Pilih satu arah yang paling sesuai dengan tujuan."
      ],
      [
        "Buat rancangan",
        "Susun urutan, komposisi, atau naskah kasar. Tentukan pesan utama dan siapa yang akan melihat hasilnya."
      ],
      [
        "Produksi versi awal",
        "Buat draf sederhana terlebih dahulu. Gunakan aset yang kamu punya hak untuk gunakan dan simpan bahan sumbernya."
      ],
      [
        "Periksa ritme dan detail",
        "Perhatikan keterbacaan, tempo, konsistensi, serta detail yang mengalihkan perhatian dari pesan utama."
      ],
      [
        "Minta masukan",
        "Tunjukkan hasil pada orang yang sesuai dan minta satu masukan konkret. Jangan mengubah semua hal hanya berdasarkan satu pendapat."
      ],
      [
        "Ekspor dan arsipkan",
        "Simpan versi final dengan nama file jelas, ukuran yang sesuai, dan folder aset yang teratur agar mudah diperbarui."
      ]
    ],
    "takeaways": [
      "Tujuan menulis naskah singkat perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan menulis naskah singkat pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "creative",
      "panduan",
      "medium",
      "menulis"
    ]
  },
  {
    "id": 158,
    "category": "creative",
    "categoryName": "Kreativitas & Media",
    "emoji": "✿",
    "art": "art-creative",
    "title": "Workflow praktis: Membuat kalender konten",
    "topic": "Membuat kalender konten",
    "format": "workflow",
    "summary": "Bangun alur kerja membuat kalender konten yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 15,
    "mood": "focus",
    "symbol": "▤",
    "steps": [
      [
        "Kumpulkan ide",
        "Tulis beberapa ide untuk membuat kalender konten tanpa langsung menilai semuanya. Pilih satu arah yang paling sesuai dengan tujuan."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah membuat kalender konten dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Produksi versi awal",
        "Buat draf sederhana terlebih dahulu. Gunakan aset yang kamu punya hak untuk gunakan dan simpan bahan sumbernya."
      ],
      [
        "Periksa ritme dan detail",
        "Perhatikan keterbacaan, tempo, konsistensi, serta detail yang mengalihkan perhatian dari pesan utama."
      ],
      [
        "Minta masukan",
        "Tunjukkan hasil pada orang yang sesuai dan minta satu masukan konkret. Jangan mengubah semua hal hanya berdasarkan satu pendapat."
      ],
      [
        "Ekspor dan arsipkan",
        "Simpan versi final dengan nama file jelas, ukuran yang sesuai, dan folder aset yang teratur agar mudah diperbarui."
      ]
    ],
    "takeaways": [
      "Tujuan membuat kalender konten perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat kalender konten pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "creative",
      "workflow",
      "beginner",
      "membuat"
    ]
  },
  {
    "id": 159,
    "category": "creative",
    "categoryName": "Kreativitas & Media",
    "emoji": "✿",
    "art": "art-creative",
    "title": "Panduan langkah demi langkah: Mengatur pencahayaan dasar",
    "topic": "Mengatur pencahayaan dasar",
    "format": "panduan",
    "summary": "Pelajari mengatur pencahayaan dasar dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 18,
    "mood": "creative",
    "symbol": "⌘",
    "steps": [
      [
        "Kumpulkan ide",
        "Tulis beberapa ide untuk mengatur pencahayaan dasar tanpa langsung menilai semuanya. Pilih satu arah yang paling sesuai dengan tujuan."
      ],
      [
        "Buat rancangan",
        "Susun urutan, komposisi, atau naskah kasar. Tentukan pesan utama dan siapa yang akan melihat hasilnya."
      ],
      [
        "Produksi versi awal",
        "Buat draf sederhana terlebih dahulu. Gunakan aset yang kamu punya hak untuk gunakan dan simpan bahan sumbernya."
      ],
      [
        "Periksa ritme dan detail",
        "Perhatikan keterbacaan, tempo, konsistensi, serta detail yang mengalihkan perhatian dari pesan utama."
      ],
      [
        "Minta masukan",
        "Tunjukkan hasil pada orang yang sesuai dan minta satu masukan konkret. Jangan mengubah semua hal hanya berdasarkan satu pendapat."
      ],
      [
        "Ekspor dan arsipkan",
        "Simpan versi final dengan nama file jelas, ukuran yang sesuai, dan folder aset yang teratur agar mudah diperbarui."
      ]
    ],
    "takeaways": [
      "Tujuan mengatur pencahayaan dasar perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mengatur pencahayaan dasar pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "creative",
      "panduan",
      "medium",
      "mengatur"
    ]
  },
  {
    "id": 160,
    "category": "creative",
    "categoryName": "Kreativitas & Media",
    "emoji": "✿",
    "art": "art-creative",
    "title": "Workflow praktis: Membuat animasi sederhana",
    "topic": "Membuat animasi sederhana",
    "format": "workflow",
    "summary": "Bangun alur kerja membuat animasi sederhana yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 15,
    "mood": "focus",
    "symbol": "〰",
    "steps": [
      [
        "Kumpulkan ide",
        "Tulis beberapa ide untuk membuat animasi sederhana tanpa langsung menilai semuanya. Pilih satu arah yang paling sesuai dengan tujuan."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah membuat animasi sederhana dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Produksi versi awal",
        "Buat draf sederhana terlebih dahulu. Gunakan aset yang kamu punya hak untuk gunakan dan simpan bahan sumbernya."
      ],
      [
        "Periksa ritme dan detail",
        "Perhatikan keterbacaan, tempo, konsistensi, serta detail yang mengalihkan perhatian dari pesan utama."
      ],
      [
        "Minta masukan",
        "Tunjukkan hasil pada orang yang sesuai dan minta satu masukan konkret. Jangan mengubah semua hal hanya berdasarkan satu pendapat."
      ],
      [
        "Ekspor dan arsipkan",
        "Simpan versi final dengan nama file jelas, ukuran yang sesuai, dan folder aset yang teratur agar mudah diperbarui."
      ]
    ],
    "takeaways": [
      "Tujuan membuat animasi sederhana perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat animasi sederhana pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "creative",
      "workflow",
      "beginner",
      "membuat"
    ]
  },
  {
    "id": 161,
    "category": "creative",
    "categoryName": "Kreativitas & Media",
    "emoji": "✿",
    "art": "art-creative",
    "title": "Latihan mandiri: Menyusun portofolio kreatif",
    "topic": "Menyusun portofolio kreatif",
    "format": "latihan",
    "summary": "Latihan terarah untuk menerapkan menyusun portofolio kreatif sambil mengecek pemahamanmu sendiri.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 31,
    "mood": "calm",
    "symbol": "⌘",
    "steps": [
      [
        "Tantangan mini",
        "Coba lakukan menyusun portofolio kreatif dalam skala kecil selama 10–15 menit. Tuliskan hasil yang ingin kamu capai sebelum mulai."
      ],
      [
        "Buat rancangan",
        "Susun urutan, komposisi, atau naskah kasar. Tentukan pesan utama dan siapa yang akan melihat hasilnya."
      ],
      [
        "Produksi versi awal",
        "Buat draf sederhana terlebih dahulu. Gunakan aset yang kamu punya hak untuk gunakan dan simpan bahan sumbernya."
      ],
      [
        "Periksa ritme dan detail",
        "Perhatikan keterbacaan, tempo, konsistensi, serta detail yang mengalihkan perhatian dari pesan utama."
      ],
      [
        "Minta masukan",
        "Tunjukkan hasil pada orang yang sesuai dan minta satu masukan konkret. Jangan mengubah semua hal hanya berdasarkan satu pendapat."
      ],
      [
        "Ekspor dan arsipkan",
        "Simpan versi final dengan nama file jelas, ukuran yang sesuai, dan folder aset yang teratur agar mudah diperbarui."
      ]
    ],
    "takeaways": [
      "Tujuan menyusun portofolio kreatif perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan menyusun portofolio kreatif pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "creative",
      "latihan",
      "advanced",
      "menyusun"
    ]
  },
  {
    "id": 162,
    "category": "creative",
    "categoryName": "Kreativitas & Media",
    "emoji": "✿",
    "art": "art-creative",
    "title": "Panduan langkah demi langkah: Membuat ilustrasi vektor dasar",
    "topic": "Membuat ilustrasi vektor dasar",
    "format": "panduan",
    "summary": "Pelajari membuat ilustrasi vektor dasar dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 25,
    "mood": "calm",
    "symbol": "↗",
    "steps": [
      [
        "Kumpulkan ide",
        "Tulis beberapa ide untuk membuat ilustrasi vektor dasar tanpa langsung menilai semuanya. Pilih satu arah yang paling sesuai dengan tujuan."
      ],
      [
        "Buat rancangan",
        "Susun urutan, komposisi, atau naskah kasar. Tentukan pesan utama dan siapa yang akan melihat hasilnya."
      ],
      [
        "Produksi versi awal",
        "Buat draf sederhana terlebih dahulu. Gunakan aset yang kamu punya hak untuk gunakan dan simpan bahan sumbernya."
      ],
      [
        "Periksa ritme dan detail",
        "Perhatikan keterbacaan, tempo, konsistensi, serta detail yang mengalihkan perhatian dari pesan utama."
      ],
      [
        "Minta masukan",
        "Tunjukkan hasil pada orang yang sesuai dan minta satu masukan konkret. Jangan mengubah semua hal hanya berdasarkan satu pendapat."
      ],
      [
        "Ekspor dan arsipkan",
        "Simpan versi final dengan nama file jelas, ukuran yang sesuai, dan folder aset yang teratur agar mudah diperbarui."
      ]
    ],
    "takeaways": [
      "Tujuan membuat ilustrasi vektor dasar perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat ilustrasi vektor dasar pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "creative",
      "panduan",
      "advanced",
      "membuat"
    ]
  },
  {
    "id": 163,
    "category": "creative",
    "categoryName": "Kreativitas & Media",
    "emoji": "✿",
    "art": "art-creative",
    "title": "Proyek mini: Memilih musik yang legal",
    "topic": "Memilih musik yang legal",
    "format": "proyek",
    "summary": "Proyek mini yang membantumu mempraktikkan memilih musik yang legal dari perencanaan sampai evaluasi.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 21,
    "mood": "creative",
    "symbol": "✧",
    "steps": [
      [
        "Ruang lingkup proyek",
        "Tentukan hasil mini dari memilih musik yang legal yang bisa selesai dalam satu sesi. Batasi fitur agar proyek tetap realistis."
      ],
      [
        "Buat rancangan",
        "Susun urutan, komposisi, atau naskah kasar. Tentukan pesan utama dan siapa yang akan melihat hasilnya."
      ],
      [
        "Produksi versi awal",
        "Buat draf sederhana terlebih dahulu. Gunakan aset yang kamu punya hak untuk gunakan dan simpan bahan sumbernya."
      ],
      [
        "Periksa ritme dan detail",
        "Perhatikan keterbacaan, tempo, konsistensi, serta detail yang mengalihkan perhatian dari pesan utama."
      ],
      [
        "Minta masukan",
        "Tunjukkan hasil pada orang yang sesuai dan minta satu masukan konkret. Jangan mengubah semua hal hanya berdasarkan satu pendapat."
      ],
      [
        "Ekspor dan arsipkan",
        "Simpan versi final dengan nama file jelas, ukuran yang sesuai, dan folder aset yang teratur agar mudah diperbarui."
      ]
    ],
    "takeaways": [
      "Tujuan memilih musik yang legal perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan memilih musik yang legal pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "creative",
      "proyek",
      "medium",
      "memilih"
    ]
  },
  {
    "id": 164,
    "category": "creative",
    "categoryName": "Kreativitas & Media",
    "emoji": "✿",
    "art": "art-creative",
    "title": "Panduan langkah demi langkah: Membuat template posting",
    "topic": "Membuat template posting",
    "format": "panduan",
    "summary": "Pelajari membuat template posting dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 25,
    "mood": "calm",
    "symbol": "↗",
    "steps": [
      [
        "Kumpulkan ide",
        "Tulis beberapa ide untuk membuat template posting tanpa langsung menilai semuanya. Pilih satu arah yang paling sesuai dengan tujuan."
      ],
      [
        "Buat rancangan",
        "Susun urutan, komposisi, atau naskah kasar. Tentukan pesan utama dan siapa yang akan melihat hasilnya."
      ],
      [
        "Produksi versi awal",
        "Buat draf sederhana terlebih dahulu. Gunakan aset yang kamu punya hak untuk gunakan dan simpan bahan sumbernya."
      ],
      [
        "Periksa ritme dan detail",
        "Perhatikan keterbacaan, tempo, konsistensi, serta detail yang mengalihkan perhatian dari pesan utama."
      ],
      [
        "Minta masukan",
        "Tunjukkan hasil pada orang yang sesuai dan minta satu masukan konkret. Jangan mengubah semua hal hanya berdasarkan satu pendapat."
      ],
      [
        "Ekspor dan arsipkan",
        "Simpan versi final dengan nama file jelas, ukuran yang sesuai, dan folder aset yang teratur agar mudah diperbarui."
      ]
    ],
    "takeaways": [
      "Tujuan membuat template posting perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat template posting pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "creative",
      "panduan",
      "advanced",
      "membuat"
    ]
  },
  {
    "id": 165,
    "category": "creative",
    "categoryName": "Kreativitas & Media",
    "emoji": "✿",
    "art": "art-creative",
    "title": "Panduan langkah demi langkah: Mengevaluasi performa konten",
    "topic": "Mengevaluasi performa konten",
    "format": "panduan",
    "summary": "Pelajari mengevaluasi performa konten dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 12,
    "mood": "focus",
    "symbol": "◈",
    "steps": [
      [
        "Kumpulkan ide",
        "Tulis beberapa ide untuk mengevaluasi performa konten tanpa langsung menilai semuanya. Pilih satu arah yang paling sesuai dengan tujuan."
      ],
      [
        "Buat rancangan",
        "Susun urutan, komposisi, atau naskah kasar. Tentukan pesan utama dan siapa yang akan melihat hasilnya."
      ],
      [
        "Produksi versi awal",
        "Buat draf sederhana terlebih dahulu. Gunakan aset yang kamu punya hak untuk gunakan dan simpan bahan sumbernya."
      ],
      [
        "Periksa ritme dan detail",
        "Perhatikan keterbacaan, tempo, konsistensi, serta detail yang mengalihkan perhatian dari pesan utama."
      ],
      [
        "Minta masukan",
        "Tunjukkan hasil pada orang yang sesuai dan minta satu masukan konkret. Jangan mengubah semua hal hanya berdasarkan satu pendapat."
      ],
      [
        "Ekspor dan arsipkan",
        "Simpan versi final dengan nama file jelas, ukuran yang sesuai, dan folder aset yang teratur agar mudah diperbarui."
      ]
    ],
    "takeaways": [
      "Tujuan mengevaluasi performa konten perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mengevaluasi performa konten pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "creative",
      "panduan",
      "beginner",
      "mengevaluasi"
    ]
  },
  {
    "id": 166,
    "category": "creative",
    "categoryName": "Kreativitas & Media",
    "emoji": "✿",
    "art": "art-creative",
    "title": "Workflow praktis: Membuat poster acara",
    "topic": "Membuat poster acara",
    "format": "workflow",
    "summary": "Bangun alur kerja membuat poster acara yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 28,
    "mood": "calm",
    "symbol": "◎",
    "steps": [
      [
        "Kumpulkan ide",
        "Tulis beberapa ide untuk membuat poster acara tanpa langsung menilai semuanya. Pilih satu arah yang paling sesuai dengan tujuan."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah membuat poster acara dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Produksi versi awal",
        "Buat draf sederhana terlebih dahulu. Gunakan aset yang kamu punya hak untuk gunakan dan simpan bahan sumbernya."
      ],
      [
        "Periksa ritme dan detail",
        "Perhatikan keterbacaan, tempo, konsistensi, serta detail yang mengalihkan perhatian dari pesan utama."
      ],
      [
        "Minta masukan",
        "Tunjukkan hasil pada orang yang sesuai dan minta satu masukan konkret. Jangan mengubah semua hal hanya berdasarkan satu pendapat."
      ],
      [
        "Ekspor dan arsipkan",
        "Simpan versi final dengan nama file jelas, ukuran yang sesuai, dan folder aset yang teratur agar mudah diperbarui."
      ]
    ],
    "takeaways": [
      "Tujuan membuat poster acara perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat poster acara pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "creative",
      "workflow",
      "advanced",
      "membuat"
    ]
  },
  {
    "id": 167,
    "category": "creative",
    "categoryName": "Kreativitas & Media",
    "emoji": "✿",
    "art": "art-creative",
    "title": "Proyek mini: Menyusun cerita visual",
    "topic": "Menyusun cerita visual",
    "format": "proyek",
    "summary": "Proyek mini yang membantumu mempraktikkan menyusun cerita visual dari perencanaan sampai evaluasi.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 15,
    "mood": "focus",
    "symbol": "〰",
    "steps": [
      [
        "Ruang lingkup proyek",
        "Tentukan hasil mini dari menyusun cerita visual yang bisa selesai dalam satu sesi. Batasi fitur agar proyek tetap realistis."
      ],
      [
        "Buat rancangan",
        "Susun urutan, komposisi, atau naskah kasar. Tentukan pesan utama dan siapa yang akan melihat hasilnya."
      ],
      [
        "Produksi versi awal",
        "Buat draf sederhana terlebih dahulu. Gunakan aset yang kamu punya hak untuk gunakan dan simpan bahan sumbernya."
      ],
      [
        "Periksa ritme dan detail",
        "Perhatikan keterbacaan, tempo, konsistensi, serta detail yang mengalihkan perhatian dari pesan utama."
      ],
      [
        "Minta masukan",
        "Tunjukkan hasil pada orang yang sesuai dan minta satu masukan konkret. Jangan mengubah semua hal hanya berdasarkan satu pendapat."
      ],
      [
        "Ekspor dan arsipkan",
        "Simpan versi final dengan nama file jelas, ukuran yang sesuai, dan folder aset yang teratur agar mudah diperbarui."
      ]
    ],
    "takeaways": [
      "Tujuan menyusun cerita visual perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan menyusun cerita visual pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "creative",
      "proyek",
      "beginner",
      "menyusun"
    ]
  },
  {
    "id": 168,
    "category": "creative",
    "categoryName": "Kreativitas & Media",
    "emoji": "✿",
    "art": "art-creative",
    "title": "Panduan langkah demi langkah: Mengatur ritme editing",
    "topic": "Mengatur ritme editing",
    "format": "panduan",
    "summary": "Pelajari mengatur ritme editing dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 18,
    "mood": "creative",
    "symbol": "⌘",
    "steps": [
      [
        "Kumpulkan ide",
        "Tulis beberapa ide untuk mengatur ritme editing tanpa langsung menilai semuanya. Pilih satu arah yang paling sesuai dengan tujuan."
      ],
      [
        "Buat rancangan",
        "Susun urutan, komposisi, atau naskah kasar. Tentukan pesan utama dan siapa yang akan melihat hasilnya."
      ],
      [
        "Produksi versi awal",
        "Buat draf sederhana terlebih dahulu. Gunakan aset yang kamu punya hak untuk gunakan dan simpan bahan sumbernya."
      ],
      [
        "Periksa ritme dan detail",
        "Perhatikan keterbacaan, tempo, konsistensi, serta detail yang mengalihkan perhatian dari pesan utama."
      ],
      [
        "Minta masukan",
        "Tunjukkan hasil pada orang yang sesuai dan minta satu masukan konkret. Jangan mengubah semua hal hanya berdasarkan satu pendapat."
      ],
      [
        "Ekspor dan arsipkan",
        "Simpan versi final dengan nama file jelas, ukuran yang sesuai, dan folder aset yang teratur agar mudah diperbarui."
      ]
    ],
    "takeaways": [
      "Tujuan mengatur ritme editing perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mengatur ritme editing pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "creative",
      "panduan",
      "medium",
      "mengatur"
    ]
  },
  {
    "id": 169,
    "category": "creative",
    "categoryName": "Kreativitas & Media",
    "emoji": "✿",
    "art": "art-creative",
    "title": "Workflow praktis: Membuat intro video",
    "topic": "Membuat intro video",
    "format": "workflow",
    "summary": "Bangun alur kerja membuat intro video yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 15,
    "mood": "focus",
    "symbol": "〰",
    "steps": [
      [
        "Kumpulkan ide",
        "Tulis beberapa ide untuk membuat intro video tanpa langsung menilai semuanya. Pilih satu arah yang paling sesuai dengan tujuan."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah membuat intro video dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Produksi versi awal",
        "Buat draf sederhana terlebih dahulu. Gunakan aset yang kamu punya hak untuk gunakan dan simpan bahan sumbernya."
      ],
      [
        "Periksa ritme dan detail",
        "Perhatikan keterbacaan, tempo, konsistensi, serta detail yang mengalihkan perhatian dari pesan utama."
      ],
      [
        "Minta masukan",
        "Tunjukkan hasil pada orang yang sesuai dan minta satu masukan konkret. Jangan mengubah semua hal hanya berdasarkan satu pendapat."
      ],
      [
        "Ekspor dan arsipkan",
        "Simpan versi final dengan nama file jelas, ukuran yang sesuai, dan folder aset yang teratur agar mudah diperbarui."
      ]
    ],
    "takeaways": [
      "Tujuan membuat intro video perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat intro video pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "creative",
      "workflow",
      "beginner",
      "membuat"
    ]
  },
  {
    "id": 170,
    "category": "creative",
    "categoryName": "Kreativitas & Media",
    "emoji": "✿",
    "art": "art-creative",
    "title": "Panduan langkah demi langkah: Membuat stiker digital",
    "topic": "Membuat stiker digital",
    "format": "panduan",
    "summary": "Pelajari membuat stiker digital dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 18,
    "mood": "creative",
    "symbol": "✧",
    "steps": [
      [
        "Kumpulkan ide",
        "Tulis beberapa ide untuk membuat stiker digital tanpa langsung menilai semuanya. Pilih satu arah yang paling sesuai dengan tujuan."
      ],
      [
        "Buat rancangan",
        "Susun urutan, komposisi, atau naskah kasar. Tentukan pesan utama dan siapa yang akan melihat hasilnya."
      ],
      [
        "Produksi versi awal",
        "Buat draf sederhana terlebih dahulu. Gunakan aset yang kamu punya hak untuk gunakan dan simpan bahan sumbernya."
      ],
      [
        "Periksa ritme dan detail",
        "Perhatikan keterbacaan, tempo, konsistensi, serta detail yang mengalihkan perhatian dari pesan utama."
      ],
      [
        "Minta masukan",
        "Tunjukkan hasil pada orang yang sesuai dan minta satu masukan konkret. Jangan mengubah semua hal hanya berdasarkan satu pendapat."
      ],
      [
        "Ekspor dan arsipkan",
        "Simpan versi final dengan nama file jelas, ukuran yang sesuai, dan folder aset yang teratur agar mudah diperbarui."
      ]
    ],
    "takeaways": [
      "Tujuan membuat stiker digital perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat stiker digital pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "creative",
      "panduan",
      "medium",
      "membuat"
    ]
  },
  {
    "id": 171,
    "category": "creative",
    "categoryName": "Kreativitas & Media",
    "emoji": "✿",
    "art": "art-creative",
    "title": "Workflow praktis: Mengambil foto produk",
    "topic": "Mengambil foto produk",
    "format": "workflow",
    "summary": "Bangun alur kerja mengambil foto produk yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 15,
    "mood": "focus",
    "symbol": "↗",
    "steps": [
      [
        "Kumpulkan ide",
        "Tulis beberapa ide untuk mengambil foto produk tanpa langsung menilai semuanya. Pilih satu arah yang paling sesuai dengan tujuan."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah mengambil foto produk dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Produksi versi awal",
        "Buat draf sederhana terlebih dahulu. Gunakan aset yang kamu punya hak untuk gunakan dan simpan bahan sumbernya."
      ],
      [
        "Periksa ritme dan detail",
        "Perhatikan keterbacaan, tempo, konsistensi, serta detail yang mengalihkan perhatian dari pesan utama."
      ],
      [
        "Minta masukan",
        "Tunjukkan hasil pada orang yang sesuai dan minta satu masukan konkret. Jangan mengubah semua hal hanya berdasarkan satu pendapat."
      ],
      [
        "Ekspor dan arsipkan",
        "Simpan versi final dengan nama file jelas, ukuran yang sesuai, dan folder aset yang teratur agar mudah diperbarui."
      ]
    ],
    "takeaways": [
      "Tujuan mengambil foto produk perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mengambil foto produk pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "creative",
      "workflow",
      "beginner",
      "mengambil"
    ]
  },
  {
    "id": 172,
    "category": "creative",
    "categoryName": "Kreativitas & Media",
    "emoji": "✿",
    "art": "art-creative",
    "title": "Latihan mandiri: Membuat komik panel sederhana",
    "topic": "Membuat komik panel sederhana",
    "format": "latihan",
    "summary": "Latihan terarah untuk menerapkan membuat komik panel sederhana sambil mengecek pemahamanmu sendiri.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 31,
    "mood": "calm",
    "symbol": "✧",
    "steps": [
      [
        "Tantangan mini",
        "Coba lakukan membuat komik panel sederhana dalam skala kecil selama 10–15 menit. Tuliskan hasil yang ingin kamu capai sebelum mulai."
      ],
      [
        "Buat rancangan",
        "Susun urutan, komposisi, atau naskah kasar. Tentukan pesan utama dan siapa yang akan melihat hasilnya."
      ],
      [
        "Produksi versi awal",
        "Buat draf sederhana terlebih dahulu. Gunakan aset yang kamu punya hak untuk gunakan dan simpan bahan sumbernya."
      ],
      [
        "Periksa ritme dan detail",
        "Perhatikan keterbacaan, tempo, konsistensi, serta detail yang mengalihkan perhatian dari pesan utama."
      ],
      [
        "Minta masukan",
        "Tunjukkan hasil pada orang yang sesuai dan minta satu masukan konkret. Jangan mengubah semua hal hanya berdasarkan satu pendapat."
      ],
      [
        "Ekspor dan arsipkan",
        "Simpan versi final dengan nama file jelas, ukuran yang sesuai, dan folder aset yang teratur agar mudah diperbarui."
      ]
    ],
    "takeaways": [
      "Tujuan membuat komik panel sederhana perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat komik panel sederhana pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "creative",
      "latihan",
      "advanced",
      "membuat"
    ]
  },
  {
    "id": 173,
    "category": "creative",
    "categoryName": "Kreativitas & Media",
    "emoji": "✿",
    "art": "art-creative",
    "title": "Panduan langkah demi langkah: Membuat efek teks",
    "topic": "Membuat efek teks",
    "format": "panduan",
    "summary": "Pelajari membuat efek teks dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 25,
    "mood": "calm",
    "symbol": "✦",
    "steps": [
      [
        "Kumpulkan ide",
        "Tulis beberapa ide untuk membuat efek teks tanpa langsung menilai semuanya. Pilih satu arah yang paling sesuai dengan tujuan."
      ],
      [
        "Buat rancangan",
        "Susun urutan, komposisi, atau naskah kasar. Tentukan pesan utama dan siapa yang akan melihat hasilnya."
      ],
      [
        "Produksi versi awal",
        "Buat draf sederhana terlebih dahulu. Gunakan aset yang kamu punya hak untuk gunakan dan simpan bahan sumbernya."
      ],
      [
        "Periksa ritme dan detail",
        "Perhatikan keterbacaan, tempo, konsistensi, serta detail yang mengalihkan perhatian dari pesan utama."
      ],
      [
        "Minta masukan",
        "Tunjukkan hasil pada orang yang sesuai dan minta satu masukan konkret. Jangan mengubah semua hal hanya berdasarkan satu pendapat."
      ],
      [
        "Ekspor dan arsipkan",
        "Simpan versi final dengan nama file jelas, ukuran yang sesuai, dan folder aset yang teratur agar mudah diperbarui."
      ]
    ],
    "takeaways": [
      "Tujuan membuat efek teks perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat efek teks pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "creative",
      "panduan",
      "advanced",
      "membuat"
    ]
  },
  {
    "id": 174,
    "category": "creative",
    "categoryName": "Kreativitas & Media",
    "emoji": "✿",
    "art": "art-creative",
    "title": "Proyek mini: Menyusun palet untuk video",
    "topic": "Menyusun palet untuk video",
    "format": "proyek",
    "summary": "Proyek mini yang membantumu mempraktikkan menyusun palet untuk video dari perencanaan sampai evaluasi.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 21,
    "mood": "creative",
    "symbol": "◈",
    "steps": [
      [
        "Ruang lingkup proyek",
        "Tentukan hasil mini dari menyusun palet untuk video yang bisa selesai dalam satu sesi. Batasi fitur agar proyek tetap realistis."
      ],
      [
        "Buat rancangan",
        "Susun urutan, komposisi, atau naskah kasar. Tentukan pesan utama dan siapa yang akan melihat hasilnya."
      ],
      [
        "Produksi versi awal",
        "Buat draf sederhana terlebih dahulu. Gunakan aset yang kamu punya hak untuk gunakan dan simpan bahan sumbernya."
      ],
      [
        "Periksa ritme dan detail",
        "Perhatikan keterbacaan, tempo, konsistensi, serta detail yang mengalihkan perhatian dari pesan utama."
      ],
      [
        "Minta masukan",
        "Tunjukkan hasil pada orang yang sesuai dan minta satu masukan konkret. Jangan mengubah semua hal hanya berdasarkan satu pendapat."
      ],
      [
        "Ekspor dan arsipkan",
        "Simpan versi final dengan nama file jelas, ukuran yang sesuai, dan folder aset yang teratur agar mudah diperbarui."
      ]
    ],
    "takeaways": [
      "Tujuan menyusun palet untuk video perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan menyusun palet untuk video pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "creative",
      "proyek",
      "medium",
      "menyusun"
    ]
  },
  {
    "id": 175,
    "category": "creative",
    "categoryName": "Kreativitas & Media",
    "emoji": "✿",
    "art": "art-creative",
    "title": "Panduan langkah demi langkah: Membuat rekaman layar",
    "topic": "Membuat rekaman layar",
    "format": "panduan",
    "summary": "Pelajari membuat rekaman layar dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 25,
    "mood": "calm",
    "symbol": "✦",
    "steps": [
      [
        "Kumpulkan ide",
        "Tulis beberapa ide untuk membuat rekaman layar tanpa langsung menilai semuanya. Pilih satu arah yang paling sesuai dengan tujuan."
      ],
      [
        "Buat rancangan",
        "Susun urutan, komposisi, atau naskah kasar. Tentukan pesan utama dan siapa yang akan melihat hasilnya."
      ],
      [
        "Produksi versi awal",
        "Buat draf sederhana terlebih dahulu. Gunakan aset yang kamu punya hak untuk gunakan dan simpan bahan sumbernya."
      ],
      [
        "Periksa ritme dan detail",
        "Perhatikan keterbacaan, tempo, konsistensi, serta detail yang mengalihkan perhatian dari pesan utama."
      ],
      [
        "Minta masukan",
        "Tunjukkan hasil pada orang yang sesuai dan minta satu masukan konkret. Jangan mengubah semua hal hanya berdasarkan satu pendapat."
      ],
      [
        "Ekspor dan arsipkan",
        "Simpan versi final dengan nama file jelas, ukuran yang sesuai, dan folder aset yang teratur agar mudah diperbarui."
      ]
    ],
    "takeaways": [
      "Tujuan membuat rekaman layar perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat rekaman layar pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "creative",
      "panduan",
      "advanced",
      "membuat"
    ]
  },
  {
    "id": 176,
    "category": "creative",
    "categoryName": "Kreativitas & Media",
    "emoji": "✿",
    "art": "art-creative",
    "title": "Latihan mandiri: Membuat rekaman layar",
    "topic": "Membuat rekaman layar",
    "format": "latihan",
    "summary": "Latihan terarah untuk menerapkan membuat rekaman layar sambil mengecek pemahamanmu sendiri.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 24,
    "mood": "creative",
    "symbol": "〰",
    "steps": [
      [
        "Tantangan mini",
        "Coba lakukan membuat rekaman layar dalam skala kecil selama 10–15 menit. Tuliskan hasil yang ingin kamu capai sebelum mulai."
      ],
      [
        "Buat rancangan",
        "Susun urutan, komposisi, atau naskah kasar. Tentukan pesan utama dan siapa yang akan melihat hasilnya."
      ],
      [
        "Produksi versi awal",
        "Buat draf sederhana terlebih dahulu. Gunakan aset yang kamu punya hak untuk gunakan dan simpan bahan sumbernya."
      ],
      [
        "Periksa ritme dan detail",
        "Perhatikan keterbacaan, tempo, konsistensi, serta detail yang mengalihkan perhatian dari pesan utama."
      ],
      [
        "Minta masukan",
        "Tunjukkan hasil pada orang yang sesuai dan minta satu masukan konkret. Jangan mengubah semua hal hanya berdasarkan satu pendapat."
      ],
      [
        "Ekspor dan arsipkan",
        "Simpan versi final dengan nama file jelas, ukuran yang sesuai, dan folder aset yang teratur agar mudah diperbarui."
      ]
    ],
    "takeaways": [
      "Tujuan membuat rekaman layar perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat rekaman layar pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "creative",
      "latihan",
      "medium",
      "membuat"
    ]
  },
  {
    "id": 177,
    "category": "creative",
    "categoryName": "Kreativitas & Media",
    "emoji": "✿",
    "art": "art-creative",
    "title": "Workflow praktis: Menyusun audio narasi",
    "topic": "Menyusun audio narasi",
    "format": "workflow",
    "summary": "Bangun alur kerja menyusun audio narasi yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 28,
    "mood": "calm",
    "symbol": "⌘",
    "steps": [
      [
        "Kumpulkan ide",
        "Tulis beberapa ide untuk menyusun audio narasi tanpa langsung menilai semuanya. Pilih satu arah yang paling sesuai dengan tujuan."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah menyusun audio narasi dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Produksi versi awal",
        "Buat draf sederhana terlebih dahulu. Gunakan aset yang kamu punya hak untuk gunakan dan simpan bahan sumbernya."
      ],
      [
        "Periksa ritme dan detail",
        "Perhatikan keterbacaan, tempo, konsistensi, serta detail yang mengalihkan perhatian dari pesan utama."
      ],
      [
        "Minta masukan",
        "Tunjukkan hasil pada orang yang sesuai dan minta satu masukan konkret. Jangan mengubah semua hal hanya berdasarkan satu pendapat."
      ],
      [
        "Ekspor dan arsipkan",
        "Simpan versi final dengan nama file jelas, ukuran yang sesuai, dan folder aset yang teratur agar mudah diperbarui."
      ]
    ],
    "takeaways": [
      "Tujuan menyusun audio narasi perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan menyusun audio narasi pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "creative",
      "workflow",
      "advanced",
      "menyusun"
    ]
  },
  {
    "id": 178,
    "category": "creative",
    "categoryName": "Kreativitas & Media",
    "emoji": "✿",
    "art": "art-creative",
    "title": "Panduan langkah demi langkah: Mengatur transisi slide",
    "topic": "Mengatur transisi slide",
    "format": "panduan",
    "summary": "Pelajari mengatur transisi slide dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 12,
    "mood": "focus",
    "symbol": "〰",
    "steps": [
      [
        "Kumpulkan ide",
        "Tulis beberapa ide untuk mengatur transisi slide tanpa langsung menilai semuanya. Pilih satu arah yang paling sesuai dengan tujuan."
      ],
      [
        "Buat rancangan",
        "Susun urutan, komposisi, atau naskah kasar. Tentukan pesan utama dan siapa yang akan melihat hasilnya."
      ],
      [
        "Produksi versi awal",
        "Buat draf sederhana terlebih dahulu. Gunakan aset yang kamu punya hak untuk gunakan dan simpan bahan sumbernya."
      ],
      [
        "Periksa ritme dan detail",
        "Perhatikan keterbacaan, tempo, konsistensi, serta detail yang mengalihkan perhatian dari pesan utama."
      ],
      [
        "Minta masukan",
        "Tunjukkan hasil pada orang yang sesuai dan minta satu masukan konkret. Jangan mengubah semua hal hanya berdasarkan satu pendapat."
      ],
      [
        "Ekspor dan arsipkan",
        "Simpan versi final dengan nama file jelas, ukuran yang sesuai, dan folder aset yang teratur agar mudah diperbarui."
      ]
    ],
    "takeaways": [
      "Tujuan mengatur transisi slide perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mengatur transisi slide pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "creative",
      "panduan",
      "beginner",
      "mengatur"
    ]
  },
  {
    "id": 179,
    "category": "creative",
    "categoryName": "Kreativitas & Media",
    "emoji": "✿",
    "art": "art-creative",
    "title": "Panduan langkah demi langkah: Membuat aset media sosial",
    "topic": "Membuat aset media sosial",
    "format": "panduan",
    "summary": "Pelajari membuat aset media sosial dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 18,
    "mood": "creative",
    "symbol": "✧",
    "steps": [
      [
        "Kumpulkan ide",
        "Tulis beberapa ide untuk membuat aset media sosial tanpa langsung menilai semuanya. Pilih satu arah yang paling sesuai dengan tujuan."
      ],
      [
        "Buat rancangan",
        "Susun urutan, komposisi, atau naskah kasar. Tentukan pesan utama dan siapa yang akan melihat hasilnya."
      ],
      [
        "Produksi versi awal",
        "Buat draf sederhana terlebih dahulu. Gunakan aset yang kamu punya hak untuk gunakan dan simpan bahan sumbernya."
      ],
      [
        "Periksa ritme dan detail",
        "Perhatikan keterbacaan, tempo, konsistensi, serta detail yang mengalihkan perhatian dari pesan utama."
      ],
      [
        "Minta masukan",
        "Tunjukkan hasil pada orang yang sesuai dan minta satu masukan konkret. Jangan mengubah semua hal hanya berdasarkan satu pendapat."
      ],
      [
        "Ekspor dan arsipkan",
        "Simpan versi final dengan nama file jelas, ukuran yang sesuai, dan folder aset yang teratur agar mudah diperbarui."
      ]
    ],
    "takeaways": [
      "Tujuan membuat aset media sosial perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat aset media sosial pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "creative",
      "panduan",
      "medium",
      "membuat"
    ]
  },
  {
    "id": 180,
    "category": "creative",
    "categoryName": "Kreativitas & Media",
    "emoji": "✿",
    "art": "art-creative",
    "title": "Workflow praktis: Membuat konsep kampanye",
    "topic": "Membuat konsep kampanye",
    "format": "workflow",
    "summary": "Bangun alur kerja membuat konsep kampanye yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 15,
    "mood": "focus",
    "symbol": "↗",
    "steps": [
      [
        "Kumpulkan ide",
        "Tulis beberapa ide untuk membuat konsep kampanye tanpa langsung menilai semuanya. Pilih satu arah yang paling sesuai dengan tujuan."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah membuat konsep kampanye dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Produksi versi awal",
        "Buat draf sederhana terlebih dahulu. Gunakan aset yang kamu punya hak untuk gunakan dan simpan bahan sumbernya."
      ],
      [
        "Periksa ritme dan detail",
        "Perhatikan keterbacaan, tempo, konsistensi, serta detail yang mengalihkan perhatian dari pesan utama."
      ],
      [
        "Minta masukan",
        "Tunjukkan hasil pada orang yang sesuai dan minta satu masukan konkret. Jangan mengubah semua hal hanya berdasarkan satu pendapat."
      ],
      [
        "Ekspor dan arsipkan",
        "Simpan versi final dengan nama file jelas, ukuran yang sesuai, dan folder aset yang teratur agar mudah diperbarui."
      ]
    ],
    "takeaways": [
      "Tujuan membuat konsep kampanye perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat konsep kampanye pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "creative",
      "workflow",
      "beginner",
      "membuat"
    ]
  },
  {
    "id": 181,
    "category": "business",
    "categoryName": "Bisnis & Karier",
    "emoji": "↗",
    "art": "art-business",
    "title": "Panduan langkah demi langkah: Menyusun ide usaha kecil",
    "topic": "Menyusun ide usaha kecil",
    "format": "panduan",
    "summary": "Pelajari menyusun ide usaha kecil dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 12,
    "mood": "focus",
    "symbol": "▤",
    "steps": [
      [
        "Tentukan tujuan",
        "Tulis masalah yang ingin dibantu oleh menyusun ide usaha kecil dan hasil yang diharapkan. Gunakan bahasa sederhana dan terukur."
      ],
      [
        "Kenali pengguna",
        "Pikirkan siapa yang akan memakai hasil ini, apa kebutuhan utamanya, dan apa yang membuat proses mereka lebih mudah."
      ],
      [
        "Buat rencana ringkas",
        "Bagi pekerjaan menjadi tugas kecil, tentukan urutan, dan perkirakan sumber daya yang benar-benar tersedia."
      ],
      [
        "Uji asumsi",
        "Coba ide dalam skala kecil dan kumpulkan umpan balik. Jangan menganggap perkiraan awal sebagai fakta sebelum diuji."
      ],
      [
        "Catat hasil",
        "Gunakan angka atau catatan yang relevan untuk melihat apa yang berjalan baik dan bagian yang perlu diperbaiki."
      ],
      [
        "Tentukan langkah berikut",
        "Pilih satu tindakan paling berdampak untuk iterasi berikutnya. Jaga komunikasi tetap jelas, sopan, dan transparan."
      ]
    ],
    "takeaways": [
      "Tujuan menyusun ide usaha kecil perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan menyusun ide usaha kecil pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "business",
      "panduan",
      "beginner",
      "menyusun"
    ]
  },
  {
    "id": 182,
    "category": "business",
    "categoryName": "Bisnis & Karier",
    "emoji": "↗",
    "art": "art-business",
    "title": "Workflow praktis: Membuat analisis SWOT sederhana",
    "topic": "Membuat analisis SWOT sederhana",
    "format": "workflow",
    "summary": "Bangun alur kerja membuat analisis swot sederhana yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 28,
    "mood": "calm",
    "symbol": "◎",
    "steps": [
      [
        "Tentukan tujuan",
        "Tulis masalah yang ingin dibantu oleh membuat analisis swot sederhana dan hasil yang diharapkan. Gunakan bahasa sederhana dan terukur."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah membuat analisis swot sederhana dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Buat rencana ringkas",
        "Bagi pekerjaan menjadi tugas kecil, tentukan urutan, dan perkirakan sumber daya yang benar-benar tersedia."
      ],
      [
        "Uji asumsi",
        "Coba ide dalam skala kecil dan kumpulkan umpan balik. Jangan menganggap perkiraan awal sebagai fakta sebelum diuji."
      ],
      [
        "Catat hasil",
        "Gunakan angka atau catatan yang relevan untuk melihat apa yang berjalan baik dan bagian yang perlu diperbaiki."
      ],
      [
        "Tentukan langkah berikut",
        "Pilih satu tindakan paling berdampak untuk iterasi berikutnya. Jaga komunikasi tetap jelas, sopan, dan transparan."
      ]
    ],
    "takeaways": [
      "Tujuan membuat analisis swot sederhana perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat analisis swot sederhana pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "business",
      "workflow",
      "advanced",
      "membuat"
    ]
  },
  {
    "id": 183,
    "category": "business",
    "categoryName": "Bisnis & Karier",
    "emoji": "↗",
    "art": "art-business",
    "title": "Panduan langkah demi langkah: Membuat nama brand",
    "topic": "Membuat nama brand",
    "format": "panduan",
    "summary": "Pelajari membuat nama brand dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 12,
    "mood": "focus",
    "symbol": "〰",
    "steps": [
      [
        "Tentukan tujuan",
        "Tulis masalah yang ingin dibantu oleh membuat nama brand dan hasil yang diharapkan. Gunakan bahasa sederhana dan terukur."
      ],
      [
        "Kenali pengguna",
        "Pikirkan siapa yang akan memakai hasil ini, apa kebutuhan utamanya, dan apa yang membuat proses mereka lebih mudah."
      ],
      [
        "Buat rencana ringkas",
        "Bagi pekerjaan menjadi tugas kecil, tentukan urutan, dan perkirakan sumber daya yang benar-benar tersedia."
      ],
      [
        "Uji asumsi",
        "Coba ide dalam skala kecil dan kumpulkan umpan balik. Jangan menganggap perkiraan awal sebagai fakta sebelum diuji."
      ],
      [
        "Catat hasil",
        "Gunakan angka atau catatan yang relevan untuk melihat apa yang berjalan baik dan bagian yang perlu diperbaiki."
      ],
      [
        "Tentukan langkah berikut",
        "Pilih satu tindakan paling berdampak untuk iterasi berikutnya. Jaga komunikasi tetap jelas, sopan, dan transparan."
      ]
    ],
    "takeaways": [
      "Tujuan membuat nama brand perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat nama brand pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "business",
      "panduan",
      "beginner",
      "membuat"
    ]
  },
  {
    "id": 184,
    "category": "business",
    "categoryName": "Bisnis & Karier",
    "emoji": "↗",
    "art": "art-business",
    "title": "Workflow praktis: Menyusun deskripsi produk",
    "topic": "Menyusun deskripsi produk",
    "format": "workflow",
    "summary": "Bangun alur kerja menyusun deskripsi produk yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 28,
    "mood": "calm",
    "symbol": "⌘",
    "steps": [
      [
        "Tentukan tujuan",
        "Tulis masalah yang ingin dibantu oleh menyusun deskripsi produk dan hasil yang diharapkan. Gunakan bahasa sederhana dan terukur."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah menyusun deskripsi produk dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Buat rencana ringkas",
        "Bagi pekerjaan menjadi tugas kecil, tentukan urutan, dan perkirakan sumber daya yang benar-benar tersedia."
      ],
      [
        "Uji asumsi",
        "Coba ide dalam skala kecil dan kumpulkan umpan balik. Jangan menganggap perkiraan awal sebagai fakta sebelum diuji."
      ],
      [
        "Catat hasil",
        "Gunakan angka atau catatan yang relevan untuk melihat apa yang berjalan baik dan bagian yang perlu diperbaiki."
      ],
      [
        "Tentukan langkah berikut",
        "Pilih satu tindakan paling berdampak untuk iterasi berikutnya. Jaga komunikasi tetap jelas, sopan, dan transparan."
      ]
    ],
    "takeaways": [
      "Tujuan menyusun deskripsi produk perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan menyusun deskripsi produk pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "business",
      "workflow",
      "advanced",
      "menyusun"
    ]
  },
  {
    "id": 185,
    "category": "business",
    "categoryName": "Bisnis & Karier",
    "emoji": "↗",
    "art": "art-business",
    "title": "Latihan mandiri: Membuat katalog digital",
    "topic": "Membuat katalog digital",
    "format": "latihan",
    "summary": "Latihan terarah untuk menerapkan membuat katalog digital sambil mengecek pemahamanmu sendiri.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 24,
    "mood": "creative",
    "symbol": "〰",
    "steps": [
      [
        "Tantangan mini",
        "Coba lakukan membuat katalog digital dalam skala kecil selama 10–15 menit. Tuliskan hasil yang ingin kamu capai sebelum mulai."
      ],
      [
        "Kenali pengguna",
        "Pikirkan siapa yang akan memakai hasil ini, apa kebutuhan utamanya, dan apa yang membuat proses mereka lebih mudah."
      ],
      [
        "Buat rencana ringkas",
        "Bagi pekerjaan menjadi tugas kecil, tentukan urutan, dan perkirakan sumber daya yang benar-benar tersedia."
      ],
      [
        "Uji asumsi",
        "Coba ide dalam skala kecil dan kumpulkan umpan balik. Jangan menganggap perkiraan awal sebagai fakta sebelum diuji."
      ],
      [
        "Catat hasil",
        "Gunakan angka atau catatan yang relevan untuk melihat apa yang berjalan baik dan bagian yang perlu diperbaiki."
      ],
      [
        "Tentukan langkah berikut",
        "Pilih satu tindakan paling berdampak untuk iterasi berikutnya. Jaga komunikasi tetap jelas, sopan, dan transparan."
      ]
    ],
    "takeaways": [
      "Tujuan membuat katalog digital perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat katalog digital pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "business",
      "latihan",
      "medium",
      "membuat"
    ]
  },
  {
    "id": 186,
    "category": "business",
    "categoryName": "Bisnis & Karier",
    "emoji": "↗",
    "art": "art-business",
    "title": "Workflow praktis: Menghitung biaya dasar",
    "topic": "Menghitung biaya dasar",
    "format": "workflow",
    "summary": "Bangun alur kerja menghitung biaya dasar yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 21,
    "mood": "creative",
    "symbol": "◈",
    "steps": [
      [
        "Tentukan tujuan",
        "Tulis masalah yang ingin dibantu oleh menghitung biaya dasar dan hasil yang diharapkan. Gunakan bahasa sederhana dan terukur."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah menghitung biaya dasar dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Buat rencana ringkas",
        "Bagi pekerjaan menjadi tugas kecil, tentukan urutan, dan perkirakan sumber daya yang benar-benar tersedia."
      ],
      [
        "Uji asumsi",
        "Coba ide dalam skala kecil dan kumpulkan umpan balik. Jangan menganggap perkiraan awal sebagai fakta sebelum diuji."
      ],
      [
        "Catat hasil",
        "Gunakan angka atau catatan yang relevan untuk melihat apa yang berjalan baik dan bagian yang perlu diperbaiki."
      ],
      [
        "Tentukan langkah berikut",
        "Pilih satu tindakan paling berdampak untuk iterasi berikutnya. Jaga komunikasi tetap jelas, sopan, dan transparan."
      ]
    ],
    "takeaways": [
      "Tujuan menghitung biaya dasar perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan menghitung biaya dasar pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "business",
      "workflow",
      "medium",
      "menghitung"
    ]
  },
  {
    "id": 187,
    "category": "business",
    "categoryName": "Bisnis & Karier",
    "emoji": "↗",
    "art": "art-business",
    "title": "Workflow praktis: Membuat survei sederhana",
    "topic": "Membuat survei sederhana",
    "format": "workflow",
    "summary": "Bangun alur kerja membuat survei sederhana yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 15,
    "mood": "focus",
    "symbol": "✦",
    "steps": [
      [
        "Tentukan tujuan",
        "Tulis masalah yang ingin dibantu oleh membuat survei sederhana dan hasil yang diharapkan. Gunakan bahasa sederhana dan terukur."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah membuat survei sederhana dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Buat rencana ringkas",
        "Bagi pekerjaan menjadi tugas kecil, tentukan urutan, dan perkirakan sumber daya yang benar-benar tersedia."
      ],
      [
        "Uji asumsi",
        "Coba ide dalam skala kecil dan kumpulkan umpan balik. Jangan menganggap perkiraan awal sebagai fakta sebelum diuji."
      ],
      [
        "Catat hasil",
        "Gunakan angka atau catatan yang relevan untuk melihat apa yang berjalan baik dan bagian yang perlu diperbaiki."
      ],
      [
        "Tentukan langkah berikut",
        "Pilih satu tindakan paling berdampak untuk iterasi berikutnya. Jaga komunikasi tetap jelas, sopan, dan transparan."
      ]
    ],
    "takeaways": [
      "Tujuan membuat survei sederhana perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat survei sederhana pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "business",
      "workflow",
      "beginner",
      "membuat"
    ]
  },
  {
    "id": 188,
    "category": "business",
    "categoryName": "Bisnis & Karier",
    "emoji": "↗",
    "art": "art-business",
    "title": "Checklist penerapan: Menyusun proposal proyek",
    "topic": "Menyusun proposal proyek",
    "format": "checklist",
    "summary": "Daftar periksa untuk menerapkan menyusun proposal proyek tanpa melewatkan hal penting.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 12,
    "mood": "focus",
    "symbol": "◈",
    "steps": [
      [
        "Periksa kesiapan",
        "Pastikan tujuan menyusun proposal proyek jelas dan semua bahan penting tersedia."
      ],
      [
        "Kenali pengguna",
        "Pikirkan siapa yang akan memakai hasil ini, apa kebutuhan utamanya, dan apa yang membuat proses mereka lebih mudah."
      ],
      [
        "Buat rencana ringkas",
        "Bagi pekerjaan menjadi tugas kecil, tentukan urutan, dan perkirakan sumber daya yang benar-benar tersedia."
      ],
      [
        "Uji asumsi",
        "Coba ide dalam skala kecil dan kumpulkan umpan balik. Jangan menganggap perkiraan awal sebagai fakta sebelum diuji."
      ],
      [
        "Catat hasil",
        "Gunakan angka atau catatan yang relevan untuk melihat apa yang berjalan baik dan bagian yang perlu diperbaiki."
      ],
      [
        "Tentukan langkah berikut",
        "Pilih satu tindakan paling berdampak untuk iterasi berikutnya. Jaga komunikasi tetap jelas, sopan, dan transparan."
      ]
    ],
    "takeaways": [
      "Tujuan menyusun proposal proyek perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan menyusun proposal proyek pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "business",
      "checklist",
      "beginner",
      "menyusun"
    ]
  },
  {
    "id": 189,
    "category": "business",
    "categoryName": "Bisnis & Karier",
    "emoji": "↗",
    "art": "art-business",
    "title": "Latihan mandiri: Membuat portofolio pemula",
    "topic": "Membuat portofolio pemula",
    "format": "latihan",
    "summary": "Latihan terarah untuk menerapkan membuat portofolio pemula sambil mengecek pemahamanmu sendiri.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 18,
    "mood": "focus",
    "symbol": "◎",
    "steps": [
      [
        "Tantangan mini",
        "Coba lakukan membuat portofolio pemula dalam skala kecil selama 10–15 menit. Tuliskan hasil yang ingin kamu capai sebelum mulai."
      ],
      [
        "Kenali pengguna",
        "Pikirkan siapa yang akan memakai hasil ini, apa kebutuhan utamanya, dan apa yang membuat proses mereka lebih mudah."
      ],
      [
        "Buat rencana ringkas",
        "Bagi pekerjaan menjadi tugas kecil, tentukan urutan, dan perkirakan sumber daya yang benar-benar tersedia."
      ],
      [
        "Uji asumsi",
        "Coba ide dalam skala kecil dan kumpulkan umpan balik. Jangan menganggap perkiraan awal sebagai fakta sebelum diuji."
      ],
      [
        "Catat hasil",
        "Gunakan angka atau catatan yang relevan untuk melihat apa yang berjalan baik dan bagian yang perlu diperbaiki."
      ],
      [
        "Tentukan langkah berikut",
        "Pilih satu tindakan paling berdampak untuk iterasi berikutnya. Jaga komunikasi tetap jelas, sopan, dan transparan."
      ]
    ],
    "takeaways": [
      "Tujuan membuat portofolio pemula perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat portofolio pemula pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "business",
      "latihan",
      "beginner",
      "membuat"
    ]
  },
  {
    "id": 190,
    "category": "business",
    "categoryName": "Bisnis & Karier",
    "emoji": "↗",
    "art": "art-business",
    "title": "Workflow praktis: Menyusun CV yang rapi",
    "topic": "Menyusun CV yang rapi",
    "format": "workflow",
    "summary": "Bangun alur kerja menyusun cv yang rapi yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 21,
    "mood": "creative",
    "symbol": "▤",
    "steps": [
      [
        "Tentukan tujuan",
        "Tulis masalah yang ingin dibantu oleh menyusun cv yang rapi dan hasil yang diharapkan. Gunakan bahasa sederhana dan terukur."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah menyusun cv yang rapi dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Buat rencana ringkas",
        "Bagi pekerjaan menjadi tugas kecil, tentukan urutan, dan perkirakan sumber daya yang benar-benar tersedia."
      ],
      [
        "Uji asumsi",
        "Coba ide dalam skala kecil dan kumpulkan umpan balik. Jangan menganggap perkiraan awal sebagai fakta sebelum diuji."
      ],
      [
        "Catat hasil",
        "Gunakan angka atau catatan yang relevan untuk melihat apa yang berjalan baik dan bagian yang perlu diperbaiki."
      ],
      [
        "Tentukan langkah berikut",
        "Pilih satu tindakan paling berdampak untuk iterasi berikutnya. Jaga komunikasi tetap jelas, sopan, dan transparan."
      ]
    ],
    "takeaways": [
      "Tujuan menyusun cv yang rapi perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan menyusun cv yang rapi pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "business",
      "workflow",
      "medium",
      "menyusun"
    ]
  },
  {
    "id": 191,
    "category": "business",
    "categoryName": "Bisnis & Karier",
    "emoji": "↗",
    "art": "art-business",
    "title": "Panduan langkah demi langkah: Membuat presentasi ide",
    "topic": "Membuat presentasi ide",
    "format": "panduan",
    "summary": "Pelajari membuat presentasi ide dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 25,
    "mood": "calm",
    "symbol": "◎",
    "steps": [
      [
        "Tentukan tujuan",
        "Tulis masalah yang ingin dibantu oleh membuat presentasi ide dan hasil yang diharapkan. Gunakan bahasa sederhana dan terukur."
      ],
      [
        "Kenali pengguna",
        "Pikirkan siapa yang akan memakai hasil ini, apa kebutuhan utamanya, dan apa yang membuat proses mereka lebih mudah."
      ],
      [
        "Buat rencana ringkas",
        "Bagi pekerjaan menjadi tugas kecil, tentukan urutan, dan perkirakan sumber daya yang benar-benar tersedia."
      ],
      [
        "Uji asumsi",
        "Coba ide dalam skala kecil dan kumpulkan umpan balik. Jangan menganggap perkiraan awal sebagai fakta sebelum diuji."
      ],
      [
        "Catat hasil",
        "Gunakan angka atau catatan yang relevan untuk melihat apa yang berjalan baik dan bagian yang perlu diperbaiki."
      ],
      [
        "Tentukan langkah berikut",
        "Pilih satu tindakan paling berdampak untuk iterasi berikutnya. Jaga komunikasi tetap jelas, sopan, dan transparan."
      ]
    ],
    "takeaways": [
      "Tujuan membuat presentasi ide perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat presentasi ide pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "business",
      "panduan",
      "advanced",
      "membuat"
    ]
  },
  {
    "id": 192,
    "category": "business",
    "categoryName": "Bisnis & Karier",
    "emoji": "↗",
    "art": "art-business",
    "title": "Panduan langkah demi langkah: Mengelola tugas tim",
    "topic": "Mengelola tugas tim",
    "format": "panduan",
    "summary": "Pelajari mengelola tugas tim dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 12,
    "mood": "focus",
    "symbol": "〰",
    "steps": [
      [
        "Tentukan tujuan",
        "Tulis masalah yang ingin dibantu oleh mengelola tugas tim dan hasil yang diharapkan. Gunakan bahasa sederhana dan terukur."
      ],
      [
        "Kenali pengguna",
        "Pikirkan siapa yang akan memakai hasil ini, apa kebutuhan utamanya, dan apa yang membuat proses mereka lebih mudah."
      ],
      [
        "Buat rencana ringkas",
        "Bagi pekerjaan menjadi tugas kecil, tentukan urutan, dan perkirakan sumber daya yang benar-benar tersedia."
      ],
      [
        "Uji asumsi",
        "Coba ide dalam skala kecil dan kumpulkan umpan balik. Jangan menganggap perkiraan awal sebagai fakta sebelum diuji."
      ],
      [
        "Catat hasil",
        "Gunakan angka atau catatan yang relevan untuk melihat apa yang berjalan baik dan bagian yang perlu diperbaiki."
      ],
      [
        "Tentukan langkah berikut",
        "Pilih satu tindakan paling berdampak untuk iterasi berikutnya. Jaga komunikasi tetap jelas, sopan, dan transparan."
      ]
    ],
    "takeaways": [
      "Tujuan mengelola tugas tim perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mengelola tugas tim pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "business",
      "panduan",
      "beginner",
      "mengelola"
    ]
  },
  {
    "id": 193,
    "category": "business",
    "categoryName": "Bisnis & Karier",
    "emoji": "↗",
    "art": "art-business",
    "title": "Workflow praktis: Menyusun timeline proyek",
    "topic": "Menyusun timeline proyek",
    "format": "workflow",
    "summary": "Bangun alur kerja menyusun timeline proyek yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 28,
    "mood": "calm",
    "symbol": "⌘",
    "steps": [
      [
        "Tentukan tujuan",
        "Tulis masalah yang ingin dibantu oleh menyusun timeline proyek dan hasil yang diharapkan. Gunakan bahasa sederhana dan terukur."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah menyusun timeline proyek dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Buat rencana ringkas",
        "Bagi pekerjaan menjadi tugas kecil, tentukan urutan, dan perkirakan sumber daya yang benar-benar tersedia."
      ],
      [
        "Uji asumsi",
        "Coba ide dalam skala kecil dan kumpulkan umpan balik. Jangan menganggap perkiraan awal sebagai fakta sebelum diuji."
      ],
      [
        "Catat hasil",
        "Gunakan angka atau catatan yang relevan untuk melihat apa yang berjalan baik dan bagian yang perlu diperbaiki."
      ],
      [
        "Tentukan langkah berikut",
        "Pilih satu tindakan paling berdampak untuk iterasi berikutnya. Jaga komunikasi tetap jelas, sopan, dan transparan."
      ]
    ],
    "takeaways": [
      "Tujuan menyusun timeline proyek perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan menyusun timeline proyek pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "business",
      "workflow",
      "advanced",
      "menyusun"
    ]
  },
  {
    "id": 194,
    "category": "business",
    "categoryName": "Bisnis & Karier",
    "emoji": "↗",
    "art": "art-business",
    "title": "Workflow praktis: Membuat daftar risiko",
    "topic": "Membuat daftar risiko",
    "format": "workflow",
    "summary": "Bangun alur kerja membuat daftar risiko yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 21,
    "mood": "creative",
    "symbol": "〰",
    "steps": [
      [
        "Tentukan tujuan",
        "Tulis masalah yang ingin dibantu oleh membuat daftar risiko dan hasil yang diharapkan. Gunakan bahasa sederhana dan terukur."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah membuat daftar risiko dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Buat rencana ringkas",
        "Bagi pekerjaan menjadi tugas kecil, tentukan urutan, dan perkirakan sumber daya yang benar-benar tersedia."
      ],
      [
        "Uji asumsi",
        "Coba ide dalam skala kecil dan kumpulkan umpan balik. Jangan menganggap perkiraan awal sebagai fakta sebelum diuji."
      ],
      [
        "Catat hasil",
        "Gunakan angka atau catatan yang relevan untuk melihat apa yang berjalan baik dan bagian yang perlu diperbaiki."
      ],
      [
        "Tentukan langkah berikut",
        "Pilih satu tindakan paling berdampak untuk iterasi berikutnya. Jaga komunikasi tetap jelas, sopan, dan transparan."
      ]
    ],
    "takeaways": [
      "Tujuan membuat daftar risiko perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat daftar risiko pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "business",
      "workflow",
      "medium",
      "membuat"
    ]
  },
  {
    "id": 195,
    "category": "business",
    "categoryName": "Bisnis & Karier",
    "emoji": "↗",
    "art": "art-business",
    "title": "Workflow praktis: Mengevaluasi hasil kampanye",
    "topic": "Mengevaluasi hasil kampanye",
    "format": "workflow",
    "summary": "Bangun alur kerja mengevaluasi hasil kampanye yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 28,
    "mood": "calm",
    "symbol": "✧",
    "steps": [
      [
        "Tentukan tujuan",
        "Tulis masalah yang ingin dibantu oleh mengevaluasi hasil kampanye dan hasil yang diharapkan. Gunakan bahasa sederhana dan terukur."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah mengevaluasi hasil kampanye dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Buat rencana ringkas",
        "Bagi pekerjaan menjadi tugas kecil, tentukan urutan, dan perkirakan sumber daya yang benar-benar tersedia."
      ],
      [
        "Uji asumsi",
        "Coba ide dalam skala kecil dan kumpulkan umpan balik. Jangan menganggap perkiraan awal sebagai fakta sebelum diuji."
      ],
      [
        "Catat hasil",
        "Gunakan angka atau catatan yang relevan untuk melihat apa yang berjalan baik dan bagian yang perlu diperbaiki."
      ],
      [
        "Tentukan langkah berikut",
        "Pilih satu tindakan paling berdampak untuk iterasi berikutnya. Jaga komunikasi tetap jelas, sopan, dan transparan."
      ]
    ],
    "takeaways": [
      "Tujuan mengevaluasi hasil kampanye perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mengevaluasi hasil kampanye pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "business",
      "workflow",
      "advanced",
      "mengevaluasi"
    ]
  },
  {
    "id": 196,
    "category": "business",
    "categoryName": "Bisnis & Karier",
    "emoji": "↗",
    "art": "art-business",
    "title": "Workflow praktis: Membuat persona pelanggan",
    "topic": "Membuat persona pelanggan",
    "format": "workflow",
    "summary": "Bangun alur kerja membuat persona pelanggan yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 15,
    "mood": "focus",
    "symbol": "✦",
    "steps": [
      [
        "Tentukan tujuan",
        "Tulis masalah yang ingin dibantu oleh membuat persona pelanggan dan hasil yang diharapkan. Gunakan bahasa sederhana dan terukur."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah membuat persona pelanggan dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Buat rencana ringkas",
        "Bagi pekerjaan menjadi tugas kecil, tentukan urutan, dan perkirakan sumber daya yang benar-benar tersedia."
      ],
      [
        "Uji asumsi",
        "Coba ide dalam skala kecil dan kumpulkan umpan balik. Jangan menganggap perkiraan awal sebagai fakta sebelum diuji."
      ],
      [
        "Catat hasil",
        "Gunakan angka atau catatan yang relevan untuk melihat apa yang berjalan baik dan bagian yang perlu diperbaiki."
      ],
      [
        "Tentukan langkah berikut",
        "Pilih satu tindakan paling berdampak untuk iterasi berikutnya. Jaga komunikasi tetap jelas, sopan, dan transparan."
      ]
    ],
    "takeaways": [
      "Tujuan membuat persona pelanggan perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat persona pelanggan pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "business",
      "workflow",
      "beginner",
      "membuat"
    ]
  },
  {
    "id": 197,
    "category": "business",
    "categoryName": "Bisnis & Karier",
    "emoji": "↗",
    "art": "art-business",
    "title": "Workflow praktis: Menyusun value proposition",
    "topic": "Menyusun value proposition",
    "format": "workflow",
    "summary": "Bangun alur kerja menyusun value proposition yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 21,
    "mood": "creative",
    "symbol": "▤",
    "steps": [
      [
        "Tentukan tujuan",
        "Tulis masalah yang ingin dibantu oleh menyusun value proposition dan hasil yang diharapkan. Gunakan bahasa sederhana dan terukur."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah menyusun value proposition dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Buat rencana ringkas",
        "Bagi pekerjaan menjadi tugas kecil, tentukan urutan, dan perkirakan sumber daya yang benar-benar tersedia."
      ],
      [
        "Uji asumsi",
        "Coba ide dalam skala kecil dan kumpulkan umpan balik. Jangan menganggap perkiraan awal sebagai fakta sebelum diuji."
      ],
      [
        "Catat hasil",
        "Gunakan angka atau catatan yang relevan untuk melihat apa yang berjalan baik dan bagian yang perlu diperbaiki."
      ],
      [
        "Tentukan langkah berikut",
        "Pilih satu tindakan paling berdampak untuk iterasi berikutnya. Jaga komunikasi tetap jelas, sopan, dan transparan."
      ]
    ],
    "takeaways": [
      "Tujuan menyusun value proposition perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan menyusun value proposition pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "business",
      "workflow",
      "medium",
      "menyusun"
    ]
  },
  {
    "id": 198,
    "category": "business",
    "categoryName": "Bisnis & Karier",
    "emoji": "↗",
    "art": "art-business",
    "title": "Workflow praktis: Mengatur inventaris sederhana",
    "topic": "Mengatur inventaris sederhana",
    "format": "workflow",
    "summary": "Bangun alur kerja mengatur inventaris sederhana yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 15,
    "mood": "focus",
    "symbol": "◎",
    "steps": [
      [
        "Tentukan tujuan",
        "Tulis masalah yang ingin dibantu oleh mengatur inventaris sederhana dan hasil yang diharapkan. Gunakan bahasa sederhana dan terukur."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah mengatur inventaris sederhana dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Buat rencana ringkas",
        "Bagi pekerjaan menjadi tugas kecil, tentukan urutan, dan perkirakan sumber daya yang benar-benar tersedia."
      ],
      [
        "Uji asumsi",
        "Coba ide dalam skala kecil dan kumpulkan umpan balik. Jangan menganggap perkiraan awal sebagai fakta sebelum diuji."
      ],
      [
        "Catat hasil",
        "Gunakan angka atau catatan yang relevan untuk melihat apa yang berjalan baik dan bagian yang perlu diperbaiki."
      ],
      [
        "Tentukan langkah berikut",
        "Pilih satu tindakan paling berdampak untuk iterasi berikutnya. Jaga komunikasi tetap jelas, sopan, dan transparan."
      ]
    ],
    "takeaways": [
      "Tujuan mengatur inventaris sederhana perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mengatur inventaris sederhana pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "business",
      "workflow",
      "beginner",
      "mengatur"
    ]
  },
  {
    "id": 199,
    "category": "business",
    "categoryName": "Bisnis & Karier",
    "emoji": "↗",
    "art": "art-business",
    "title": "Checklist penerapan: Menulis deskripsi layanan",
    "topic": "Menulis deskripsi layanan",
    "format": "checklist",
    "summary": "Daftar periksa untuk menerapkan menulis deskripsi layanan tanpa melewatkan hal penting.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 12,
    "mood": "focus",
    "symbol": "▤",
    "steps": [
      [
        "Periksa kesiapan",
        "Pastikan tujuan menulis deskripsi layanan jelas dan semua bahan penting tersedia."
      ],
      [
        "Kenali pengguna",
        "Pikirkan siapa yang akan memakai hasil ini, apa kebutuhan utamanya, dan apa yang membuat proses mereka lebih mudah."
      ],
      [
        "Buat rencana ringkas",
        "Bagi pekerjaan menjadi tugas kecil, tentukan urutan, dan perkirakan sumber daya yang benar-benar tersedia."
      ],
      [
        "Uji asumsi",
        "Coba ide dalam skala kecil dan kumpulkan umpan balik. Jangan menganggap perkiraan awal sebagai fakta sebelum diuji."
      ],
      [
        "Catat hasil",
        "Gunakan angka atau catatan yang relevan untuk melihat apa yang berjalan baik dan bagian yang perlu diperbaiki."
      ],
      [
        "Tentukan langkah berikut",
        "Pilih satu tindakan paling berdampak untuk iterasi berikutnya. Jaga komunikasi tetap jelas, sopan, dan transparan."
      ]
    ],
    "takeaways": [
      "Tujuan menulis deskripsi layanan perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan menulis deskripsi layanan pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "business",
      "checklist",
      "beginner",
      "menulis"
    ]
  },
  {
    "id": 200,
    "category": "business",
    "categoryName": "Bisnis & Karier",
    "emoji": "↗",
    "art": "art-business",
    "title": "Latihan mandiri: Membuat formulir umpan balik",
    "topic": "Membuat formulir umpan balik",
    "format": "latihan",
    "summary": "Latihan terarah untuk menerapkan membuat formulir umpan balik sambil mengecek pemahamanmu sendiri.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 18,
    "mood": "focus",
    "symbol": "⌘",
    "steps": [
      [
        "Tantangan mini",
        "Coba lakukan membuat formulir umpan balik dalam skala kecil selama 10–15 menit. Tuliskan hasil yang ingin kamu capai sebelum mulai."
      ],
      [
        "Kenali pengguna",
        "Pikirkan siapa yang akan memakai hasil ini, apa kebutuhan utamanya, dan apa yang membuat proses mereka lebih mudah."
      ],
      [
        "Buat rencana ringkas",
        "Bagi pekerjaan menjadi tugas kecil, tentukan urutan, dan perkirakan sumber daya yang benar-benar tersedia."
      ],
      [
        "Uji asumsi",
        "Coba ide dalam skala kecil dan kumpulkan umpan balik. Jangan menganggap perkiraan awal sebagai fakta sebelum diuji."
      ],
      [
        "Catat hasil",
        "Gunakan angka atau catatan yang relevan untuk melihat apa yang berjalan baik dan bagian yang perlu diperbaiki."
      ],
      [
        "Tentukan langkah berikut",
        "Pilih satu tindakan paling berdampak untuk iterasi berikutnya. Jaga komunikasi tetap jelas, sopan, dan transparan."
      ]
    ],
    "takeaways": [
      "Tujuan membuat formulir umpan balik perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat formulir umpan balik pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "business",
      "latihan",
      "beginner",
      "membuat"
    ]
  },
  {
    "id": 201,
    "category": "business",
    "categoryName": "Bisnis & Karier",
    "emoji": "↗",
    "art": "art-business",
    "title": "Workflow praktis: Membuat daftar kompetitor",
    "topic": "Membuat daftar kompetitor",
    "format": "workflow",
    "summary": "Bangun alur kerja membuat daftar kompetitor yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 21,
    "mood": "creative",
    "symbol": "〰",
    "steps": [
      [
        "Tentukan tujuan",
        "Tulis masalah yang ingin dibantu oleh membuat daftar kompetitor dan hasil yang diharapkan. Gunakan bahasa sederhana dan terukur."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah membuat daftar kompetitor dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Buat rencana ringkas",
        "Bagi pekerjaan menjadi tugas kecil, tentukan urutan, dan perkirakan sumber daya yang benar-benar tersedia."
      ],
      [
        "Uji asumsi",
        "Coba ide dalam skala kecil dan kumpulkan umpan balik. Jangan menganggap perkiraan awal sebagai fakta sebelum diuji."
      ],
      [
        "Catat hasil",
        "Gunakan angka atau catatan yang relevan untuk melihat apa yang berjalan baik dan bagian yang perlu diperbaiki."
      ],
      [
        "Tentukan langkah berikut",
        "Pilih satu tindakan paling berdampak untuk iterasi berikutnya. Jaga komunikasi tetap jelas, sopan, dan transparan."
      ]
    ],
    "takeaways": [
      "Tujuan membuat daftar kompetitor perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat daftar kompetitor pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "business",
      "workflow",
      "medium",
      "membuat"
    ]
  },
  {
    "id": 202,
    "category": "business",
    "categoryName": "Bisnis & Karier",
    "emoji": "↗",
    "art": "art-business",
    "title": "Panduan langkah demi langkah: Menetapkan target realistis",
    "topic": "Menetapkan target realistis",
    "format": "panduan",
    "summary": "Pelajari menetapkan target realistis dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 25,
    "mood": "calm",
    "symbol": "⌘",
    "steps": [
      [
        "Tentukan tujuan",
        "Tulis masalah yang ingin dibantu oleh menetapkan target realistis dan hasil yang diharapkan. Gunakan bahasa sederhana dan terukur."
      ],
      [
        "Kenali pengguna",
        "Pikirkan siapa yang akan memakai hasil ini, apa kebutuhan utamanya, dan apa yang membuat proses mereka lebih mudah."
      ],
      [
        "Buat rencana ringkas",
        "Bagi pekerjaan menjadi tugas kecil, tentukan urutan, dan perkirakan sumber daya yang benar-benar tersedia."
      ],
      [
        "Uji asumsi",
        "Coba ide dalam skala kecil dan kumpulkan umpan balik. Jangan menganggap perkiraan awal sebagai fakta sebelum diuji."
      ],
      [
        "Catat hasil",
        "Gunakan angka atau catatan yang relevan untuk melihat apa yang berjalan baik dan bagian yang perlu diperbaiki."
      ],
      [
        "Tentukan langkah berikut",
        "Pilih satu tindakan paling berdampak untuk iterasi berikutnya. Jaga komunikasi tetap jelas, sopan, dan transparan."
      ]
    ],
    "takeaways": [
      "Tujuan menetapkan target realistis perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan menetapkan target realistis pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "business",
      "panduan",
      "advanced",
      "menetapkan"
    ]
  },
  {
    "id": 203,
    "category": "business",
    "categoryName": "Bisnis & Karier",
    "emoji": "↗",
    "art": "art-business",
    "title": "Panduan langkah demi langkah: Membuat alur layanan pelanggan",
    "topic": "Membuat alur layanan pelanggan",
    "format": "panduan",
    "summary": "Pelajari membuat alur layanan pelanggan dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 12,
    "mood": "focus",
    "symbol": "↗",
    "steps": [
      [
        "Tentukan tujuan",
        "Tulis masalah yang ingin dibantu oleh membuat alur layanan pelanggan dan hasil yang diharapkan. Gunakan bahasa sederhana dan terukur."
      ],
      [
        "Kenali pengguna",
        "Pikirkan siapa yang akan memakai hasil ini, apa kebutuhan utamanya, dan apa yang membuat proses mereka lebih mudah."
      ],
      [
        "Buat rencana ringkas",
        "Bagi pekerjaan menjadi tugas kecil, tentukan urutan, dan perkirakan sumber daya yang benar-benar tersedia."
      ],
      [
        "Uji asumsi",
        "Coba ide dalam skala kecil dan kumpulkan umpan balik. Jangan menganggap perkiraan awal sebagai fakta sebelum diuji."
      ],
      [
        "Catat hasil",
        "Gunakan angka atau catatan yang relevan untuk melihat apa yang berjalan baik dan bagian yang perlu diperbaiki."
      ],
      [
        "Tentukan langkah berikut",
        "Pilih satu tindakan paling berdampak untuk iterasi berikutnya. Jaga komunikasi tetap jelas, sopan, dan transparan."
      ]
    ],
    "takeaways": [
      "Tujuan membuat alur layanan pelanggan perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat alur layanan pelanggan pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "business",
      "panduan",
      "beginner",
      "membuat"
    ]
  },
  {
    "id": 204,
    "category": "business",
    "categoryName": "Bisnis & Karier",
    "emoji": "↗",
    "art": "art-business",
    "title": "Workflow praktis: Menangani komplain dengan sopan",
    "topic": "Menangani komplain dengan sopan",
    "format": "workflow",
    "summary": "Bangun alur kerja menangani komplain dengan sopan yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 28,
    "mood": "calm",
    "symbol": "✧",
    "steps": [
      [
        "Tentukan tujuan",
        "Tulis masalah yang ingin dibantu oleh menangani komplain dengan sopan dan hasil yang diharapkan. Gunakan bahasa sederhana dan terukur."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah menangani komplain dengan sopan dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Buat rencana ringkas",
        "Bagi pekerjaan menjadi tugas kecil, tentukan urutan, dan perkirakan sumber daya yang benar-benar tersedia."
      ],
      [
        "Uji asumsi",
        "Coba ide dalam skala kecil dan kumpulkan umpan balik. Jangan menganggap perkiraan awal sebagai fakta sebelum diuji."
      ],
      [
        "Catat hasil",
        "Gunakan angka atau catatan yang relevan untuk melihat apa yang berjalan baik dan bagian yang perlu diperbaiki."
      ],
      [
        "Tentukan langkah berikut",
        "Pilih satu tindakan paling berdampak untuk iterasi berikutnya. Jaga komunikasi tetap jelas, sopan, dan transparan."
      ]
    ],
    "takeaways": [
      "Tujuan menangani komplain dengan sopan perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan menangani komplain dengan sopan pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "business",
      "workflow",
      "advanced",
      "menangani"
    ]
  },
  {
    "id": 205,
    "category": "business",
    "categoryName": "Bisnis & Karier",
    "emoji": "↗",
    "art": "art-business",
    "title": "Workflow praktis: Menyusun agenda meeting",
    "topic": "Menyusun agenda meeting",
    "format": "workflow",
    "summary": "Bangun alur kerja menyusun agenda meeting yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 21,
    "mood": "creative",
    "symbol": "↗",
    "steps": [
      [
        "Tentukan tujuan",
        "Tulis masalah yang ingin dibantu oleh menyusun agenda meeting dan hasil yang diharapkan. Gunakan bahasa sederhana dan terukur."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah menyusun agenda meeting dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Buat rencana ringkas",
        "Bagi pekerjaan menjadi tugas kecil, tentukan urutan, dan perkirakan sumber daya yang benar-benar tersedia."
      ],
      [
        "Uji asumsi",
        "Coba ide dalam skala kecil dan kumpulkan umpan balik. Jangan menganggap perkiraan awal sebagai fakta sebelum diuji."
      ],
      [
        "Catat hasil",
        "Gunakan angka atau catatan yang relevan untuk melihat apa yang berjalan baik dan bagian yang perlu diperbaiki."
      ],
      [
        "Tentukan langkah berikut",
        "Pilih satu tindakan paling berdampak untuk iterasi berikutnya. Jaga komunikasi tetap jelas, sopan, dan transparan."
      ]
    ],
    "takeaways": [
      "Tujuan menyusun agenda meeting perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan menyusun agenda meeting pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "business",
      "workflow",
      "medium",
      "menyusun"
    ]
  },
  {
    "id": 206,
    "category": "business",
    "categoryName": "Bisnis & Karier",
    "emoji": "↗",
    "art": "art-business",
    "title": "Panduan langkah demi langkah: Membuat dokumentasi proyek",
    "topic": "Membuat dokumentasi proyek",
    "format": "panduan",
    "summary": "Pelajari membuat dokumentasi proyek dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 18,
    "mood": "creative",
    "symbol": "▤",
    "steps": [
      [
        "Tentukan tujuan",
        "Tulis masalah yang ingin dibantu oleh membuat dokumentasi proyek dan hasil yang diharapkan. Gunakan bahasa sederhana dan terukur."
      ],
      [
        "Kenali pengguna",
        "Pikirkan siapa yang akan memakai hasil ini, apa kebutuhan utamanya, dan apa yang membuat proses mereka lebih mudah."
      ],
      [
        "Buat rencana ringkas",
        "Bagi pekerjaan menjadi tugas kecil, tentukan urutan, dan perkirakan sumber daya yang benar-benar tersedia."
      ],
      [
        "Uji asumsi",
        "Coba ide dalam skala kecil dan kumpulkan umpan balik. Jangan menganggap perkiraan awal sebagai fakta sebelum diuji."
      ],
      [
        "Catat hasil",
        "Gunakan angka atau catatan yang relevan untuk melihat apa yang berjalan baik dan bagian yang perlu diperbaiki."
      ],
      [
        "Tentukan langkah berikut",
        "Pilih satu tindakan paling berdampak untuk iterasi berikutnya. Jaga komunikasi tetap jelas, sopan, dan transparan."
      ]
    ],
    "takeaways": [
      "Tujuan membuat dokumentasi proyek perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat dokumentasi proyek pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "business",
      "panduan",
      "medium",
      "membuat"
    ]
  },
  {
    "id": 207,
    "category": "business",
    "categoryName": "Bisnis & Karier",
    "emoji": "↗",
    "art": "art-business",
    "title": "Workflow praktis: Membuat strategi konten",
    "topic": "Membuat strategi konten",
    "format": "workflow",
    "summary": "Bangun alur kerja membuat strategi konten yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 15,
    "mood": "focus",
    "symbol": "◎",
    "steps": [
      [
        "Tentukan tujuan",
        "Tulis masalah yang ingin dibantu oleh membuat strategi konten dan hasil yang diharapkan. Gunakan bahasa sederhana dan terukur."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah membuat strategi konten dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Buat rencana ringkas",
        "Bagi pekerjaan menjadi tugas kecil, tentukan urutan, dan perkirakan sumber daya yang benar-benar tersedia."
      ],
      [
        "Uji asumsi",
        "Coba ide dalam skala kecil dan kumpulkan umpan balik. Jangan menganggap perkiraan awal sebagai fakta sebelum diuji."
      ],
      [
        "Catat hasil",
        "Gunakan angka atau catatan yang relevan untuk melihat apa yang berjalan baik dan bagian yang perlu diperbaiki."
      ],
      [
        "Tentukan langkah berikut",
        "Pilih satu tindakan paling berdampak untuk iterasi berikutnya. Jaga komunikasi tetap jelas, sopan, dan transparan."
      ]
    ],
    "takeaways": [
      "Tujuan membuat strategi konten perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat strategi konten pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "business",
      "workflow",
      "beginner",
      "membuat"
    ]
  },
  {
    "id": 208,
    "category": "business",
    "categoryName": "Bisnis & Karier",
    "emoji": "↗",
    "art": "art-business",
    "title": "Panduan langkah demi langkah: Menyusun FAQ produk",
    "topic": "Menyusun FAQ produk",
    "format": "panduan",
    "summary": "Pelajari menyusun faq produk dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 18,
    "mood": "creative",
    "symbol": "▤",
    "steps": [
      [
        "Tentukan tujuan",
        "Tulis masalah yang ingin dibantu oleh menyusun faq produk dan hasil yang diharapkan. Gunakan bahasa sederhana dan terukur."
      ],
      [
        "Kenali pengguna",
        "Pikirkan siapa yang akan memakai hasil ini, apa kebutuhan utamanya, dan apa yang membuat proses mereka lebih mudah."
      ],
      [
        "Buat rencana ringkas",
        "Bagi pekerjaan menjadi tugas kecil, tentukan urutan, dan perkirakan sumber daya yang benar-benar tersedia."
      ],
      [
        "Uji asumsi",
        "Coba ide dalam skala kecil dan kumpulkan umpan balik. Jangan menganggap perkiraan awal sebagai fakta sebelum diuji."
      ],
      [
        "Catat hasil",
        "Gunakan angka atau catatan yang relevan untuk melihat apa yang berjalan baik dan bagian yang perlu diperbaiki."
      ],
      [
        "Tentukan langkah berikut",
        "Pilih satu tindakan paling berdampak untuk iterasi berikutnya. Jaga komunikasi tetap jelas, sopan, dan transparan."
      ]
    ],
    "takeaways": [
      "Tujuan menyusun faq produk perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan menyusun faq produk pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "business",
      "panduan",
      "medium",
      "menyusun"
    ]
  },
  {
    "id": 209,
    "category": "business",
    "categoryName": "Bisnis & Karier",
    "emoji": "↗",
    "art": "art-business",
    "title": "Workflow praktis: Membuat laporan mingguan",
    "topic": "Membuat laporan mingguan",
    "format": "workflow",
    "summary": "Bangun alur kerja membuat laporan mingguan yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 15,
    "mood": "focus",
    "symbol": "⌘",
    "steps": [
      [
        "Tentukan tujuan",
        "Tulis masalah yang ingin dibantu oleh membuat laporan mingguan dan hasil yang diharapkan. Gunakan bahasa sederhana dan terukur."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah membuat laporan mingguan dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Buat rencana ringkas",
        "Bagi pekerjaan menjadi tugas kecil, tentukan urutan, dan perkirakan sumber daya yang benar-benar tersedia."
      ],
      [
        "Uji asumsi",
        "Coba ide dalam skala kecil dan kumpulkan umpan balik. Jangan menganggap perkiraan awal sebagai fakta sebelum diuji."
      ],
      [
        "Catat hasil",
        "Gunakan angka atau catatan yang relevan untuk melihat apa yang berjalan baik dan bagian yang perlu diperbaiki."
      ],
      [
        "Tentukan langkah berikut",
        "Pilih satu tindakan paling berdampak untuk iterasi berikutnya. Jaga komunikasi tetap jelas, sopan, dan transparan."
      ]
    ],
    "takeaways": [
      "Tujuan membuat laporan mingguan perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat laporan mingguan pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "business",
      "workflow",
      "beginner",
      "membuat"
    ]
  },
  {
    "id": 210,
    "category": "business",
    "categoryName": "Bisnis & Karier",
    "emoji": "↗",
    "art": "art-business",
    "title": "Checklist penerapan: Membuat rencana peluncuran",
    "topic": "Membuat rencana peluncuran",
    "format": "checklist",
    "summary": "Daftar periksa untuk menerapkan membuat rencana peluncuran tanpa melewatkan hal penting.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 12,
    "mood": "focus",
    "symbol": "〰",
    "steps": [
      [
        "Periksa kesiapan",
        "Pastikan tujuan membuat rencana peluncuran jelas dan semua bahan penting tersedia."
      ],
      [
        "Kenali pengguna",
        "Pikirkan siapa yang akan memakai hasil ini, apa kebutuhan utamanya, dan apa yang membuat proses mereka lebih mudah."
      ],
      [
        "Buat rencana ringkas",
        "Bagi pekerjaan menjadi tugas kecil, tentukan urutan, dan perkirakan sumber daya yang benar-benar tersedia."
      ],
      [
        "Uji asumsi",
        "Coba ide dalam skala kecil dan kumpulkan umpan balik. Jangan menganggap perkiraan awal sebagai fakta sebelum diuji."
      ],
      [
        "Catat hasil",
        "Gunakan angka atau catatan yang relevan untuk melihat apa yang berjalan baik dan bagian yang perlu diperbaiki."
      ],
      [
        "Tentukan langkah berikut",
        "Pilih satu tindakan paling berdampak untuk iterasi berikutnya. Jaga komunikasi tetap jelas, sopan, dan transparan."
      ]
    ],
    "takeaways": [
      "Tujuan membuat rencana peluncuran perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat rencana peluncuran pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "business",
      "checklist",
      "beginner",
      "membuat"
    ]
  },
  {
    "id": 211,
    "category": "game",
    "categoryName": "Gaming & Komunitas",
    "emoji": "♧",
    "art": "art-game",
    "title": "Panduan langkah demi langkah: Mengatur kontrol game",
    "topic": "Mengatur kontrol game",
    "format": "panduan",
    "summary": "Pelajari mengatur kontrol game dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 18,
    "mood": "creative",
    "symbol": "◈",
    "steps": [
      [
        "Tentukan pengalaman",
        "Tulis pengalaman yang ingin dibuat atau diperbaiki melalui mengatur kontrol game. Tentukan siapa pemain atau anggota yang dituju."
      ],
      [
        "Rancang alur",
        "Susun alur dari awal sampai akhir dan tandai titik ketika pemain membutuhkan petunjuk atau umpan balik."
      ],
      [
        "Bangun prototipe",
        "Buat versi sederhana dengan satu mekanik atau fitur inti. Hindari menambah terlalu banyak sistem sebelum alur utama terasa jelas."
      ],
      [
        "Uji dengan skenario",
        "Coba beberapa skenario normal dan tidak terduga. Catat bug, bagian yang membingungkan, dan waktu tunggu yang terasa terlalu lama."
      ],
      [
        "Perbaiki keseimbangan",
        "Ubah satu parameter pada satu waktu, lalu uji lagi. Pertimbangkan keadilan, aksesibilitas, dan kenyamanan komunitas."
      ],
      [
        "Dokumentasikan perubahan",
        "Catat hasil pengujian dan perubahan yang dilakukan. Jika melibatkan komunitas, komunikasikan aturan dengan jelas dan hormat."
      ]
    ],
    "takeaways": [
      "Tujuan mengatur kontrol game perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mengatur kontrol game pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "game",
      "panduan",
      "medium",
      "mengatur"
    ]
  },
  {
    "id": 212,
    "category": "game",
    "categoryName": "Gaming & Komunitas",
    "emoji": "♧",
    "art": "art-game",
    "title": "Workflow praktis: Membuat jadwal latihan",
    "topic": "Membuat jadwal latihan",
    "format": "workflow",
    "summary": "Bangun alur kerja membuat jadwal latihan yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 15,
    "mood": "focus",
    "symbol": "✦",
    "steps": [
      [
        "Tentukan pengalaman",
        "Tulis pengalaman yang ingin dibuat atau diperbaiki melalui membuat jadwal latihan. Tentukan siapa pemain atau anggota yang dituju."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah membuat jadwal latihan dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Bangun prototipe",
        "Buat versi sederhana dengan satu mekanik atau fitur inti. Hindari menambah terlalu banyak sistem sebelum alur utama terasa jelas."
      ],
      [
        "Uji dengan skenario",
        "Coba beberapa skenario normal dan tidak terduga. Catat bug, bagian yang membingungkan, dan waktu tunggu yang terasa terlalu lama."
      ],
      [
        "Perbaiki keseimbangan",
        "Ubah satu parameter pada satu waktu, lalu uji lagi. Pertimbangkan keadilan, aksesibilitas, dan kenyamanan komunitas."
      ],
      [
        "Dokumentasikan perubahan",
        "Catat hasil pengujian dan perubahan yang dilakukan. Jika melibatkan komunitas, komunikasikan aturan dengan jelas dan hormat."
      ]
    ],
    "takeaways": [
      "Tujuan membuat jadwal latihan perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat jadwal latihan pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "game",
      "workflow",
      "beginner",
      "membuat"
    ]
  },
  {
    "id": 213,
    "category": "game",
    "categoryName": "Gaming & Komunitas",
    "emoji": "♧",
    "art": "art-game",
    "title": "Workflow praktis: Menganalisis replay permainan",
    "topic": "Menganalisis replay permainan",
    "format": "workflow",
    "summary": "Bangun alur kerja menganalisis replay permainan yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 21,
    "mood": "creative",
    "symbol": "▤",
    "steps": [
      [
        "Tentukan pengalaman",
        "Tulis pengalaman yang ingin dibuat atau diperbaiki melalui menganalisis replay permainan. Tentukan siapa pemain atau anggota yang dituju."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah menganalisis replay permainan dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Bangun prototipe",
        "Buat versi sederhana dengan satu mekanik atau fitur inti. Hindari menambah terlalu banyak sistem sebelum alur utama terasa jelas."
      ],
      [
        "Uji dengan skenario",
        "Coba beberapa skenario normal dan tidak terduga. Catat bug, bagian yang membingungkan, dan waktu tunggu yang terasa terlalu lama."
      ],
      [
        "Perbaiki keseimbangan",
        "Ubah satu parameter pada satu waktu, lalu uji lagi. Pertimbangkan keadilan, aksesibilitas, dan kenyamanan komunitas."
      ],
      [
        "Dokumentasikan perubahan",
        "Catat hasil pengujian dan perubahan yang dilakukan. Jika melibatkan komunitas, komunikasikan aturan dengan jelas dan hormat."
      ]
    ],
    "takeaways": [
      "Tujuan menganalisis replay permainan perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan menganalisis replay permainan pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "game",
      "workflow",
      "medium",
      "menganalisis"
    ]
  },
  {
    "id": 214,
    "category": "game",
    "categoryName": "Gaming & Komunitas",
    "emoji": "♧",
    "art": "art-game",
    "title": "Panduan langkah demi langkah: Membuat komunitas yang ramah",
    "topic": "Membuat komunitas yang ramah",
    "format": "panduan",
    "summary": "Pelajari membuat komunitas yang ramah dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 25,
    "mood": "calm",
    "symbol": "◎",
    "steps": [
      [
        "Tentukan pengalaman",
        "Tulis pengalaman yang ingin dibuat atau diperbaiki melalui membuat komunitas yang ramah. Tentukan siapa pemain atau anggota yang dituju."
      ],
      [
        "Rancang alur",
        "Susun alur dari awal sampai akhir dan tandai titik ketika pemain membutuhkan petunjuk atau umpan balik."
      ],
      [
        "Bangun prototipe",
        "Buat versi sederhana dengan satu mekanik atau fitur inti. Hindari menambah terlalu banyak sistem sebelum alur utama terasa jelas."
      ],
      [
        "Uji dengan skenario",
        "Coba beberapa skenario normal dan tidak terduga. Catat bug, bagian yang membingungkan, dan waktu tunggu yang terasa terlalu lama."
      ],
      [
        "Perbaiki keseimbangan",
        "Ubah satu parameter pada satu waktu, lalu uji lagi. Pertimbangkan keadilan, aksesibilitas, dan kenyamanan komunitas."
      ],
      [
        "Dokumentasikan perubahan",
        "Catat hasil pengujian dan perubahan yang dilakukan. Jika melibatkan komunitas, komunikasikan aturan dengan jelas dan hormat."
      ]
    ],
    "takeaways": [
      "Tujuan membuat komunitas yang ramah perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat komunitas yang ramah pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "game",
      "panduan",
      "advanced",
      "membuat"
    ]
  },
  {
    "id": 215,
    "category": "game",
    "categoryName": "Gaming & Komunitas",
    "emoji": "♧",
    "art": "art-game",
    "title": "Proyek mini: Menulis aturan server",
    "topic": "Menulis aturan server",
    "format": "proyek",
    "summary": "Proyek mini yang membantumu mempraktikkan menulis aturan server dari perencanaan sampai evaluasi.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 21,
    "mood": "creative",
    "symbol": "▤",
    "steps": [
      [
        "Ruang lingkup proyek",
        "Tentukan hasil mini dari menulis aturan server yang bisa selesai dalam satu sesi. Batasi fitur agar proyek tetap realistis."
      ],
      [
        "Rancang alur",
        "Susun alur dari awal sampai akhir dan tandai titik ketika pemain membutuhkan petunjuk atau umpan balik."
      ],
      [
        "Bangun prototipe",
        "Buat versi sederhana dengan satu mekanik atau fitur inti. Hindari menambah terlalu banyak sistem sebelum alur utama terasa jelas."
      ],
      [
        "Uji dengan skenario",
        "Coba beberapa skenario normal dan tidak terduga. Catat bug, bagian yang membingungkan, dan waktu tunggu yang terasa terlalu lama."
      ],
      [
        "Perbaiki keseimbangan",
        "Ubah satu parameter pada satu waktu, lalu uji lagi. Pertimbangkan keadilan, aksesibilitas, dan kenyamanan komunitas."
      ],
      [
        "Dokumentasikan perubahan",
        "Catat hasil pengujian dan perubahan yang dilakukan. Jika melibatkan komunitas, komunikasikan aturan dengan jelas dan hormat."
      ]
    ],
    "takeaways": [
      "Tujuan menulis aturan server perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan menulis aturan server pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "game",
      "proyek",
      "medium",
      "menulis"
    ]
  },
  {
    "id": 216,
    "category": "game",
    "categoryName": "Gaming & Komunitas",
    "emoji": "♧",
    "art": "art-game",
    "title": "Workflow praktis: Mengelola channel Discord",
    "topic": "Mengelola channel Discord",
    "format": "workflow",
    "summary": "Bangun alur kerja mengelola channel discord yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 28,
    "mood": "calm",
    "symbol": "✧",
    "steps": [
      [
        "Tentukan pengalaman",
        "Tulis pengalaman yang ingin dibuat atau diperbaiki melalui mengelola channel discord. Tentukan siapa pemain atau anggota yang dituju."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah mengelola channel discord dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Bangun prototipe",
        "Buat versi sederhana dengan satu mekanik atau fitur inti. Hindari menambah terlalu banyak sistem sebelum alur utama terasa jelas."
      ],
      [
        "Uji dengan skenario",
        "Coba beberapa skenario normal dan tidak terduga. Catat bug, bagian yang membingungkan, dan waktu tunggu yang terasa terlalu lama."
      ],
      [
        "Perbaiki keseimbangan",
        "Ubah satu parameter pada satu waktu, lalu uji lagi. Pertimbangkan keadilan, aksesibilitas, dan kenyamanan komunitas."
      ],
      [
        "Dokumentasikan perubahan",
        "Catat hasil pengujian dan perubahan yang dilakukan. Jika melibatkan komunitas, komunikasikan aturan dengan jelas dan hormat."
      ]
    ],
    "takeaways": [
      "Tujuan mengelola channel discord perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mengelola channel discord pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "game",
      "workflow",
      "advanced",
      "mengelola"
    ]
  },
  {
    "id": 217,
    "category": "game",
    "categoryName": "Gaming & Komunitas",
    "emoji": "♧",
    "art": "art-game",
    "title": "Latihan mandiri: Menyusun panduan pemula",
    "topic": "Menyusun panduan pemula",
    "format": "latihan",
    "summary": "Latihan terarah untuk menerapkan menyusun panduan pemula sambil mengecek pemahamanmu sendiri.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 24,
    "mood": "creative",
    "symbol": "↗",
    "steps": [
      [
        "Tantangan mini",
        "Coba lakukan menyusun panduan pemula dalam skala kecil selama 10–15 menit. Tuliskan hasil yang ingin kamu capai sebelum mulai."
      ],
      [
        "Rancang alur",
        "Susun alur dari awal sampai akhir dan tandai titik ketika pemain membutuhkan petunjuk atau umpan balik."
      ],
      [
        "Bangun prototipe",
        "Buat versi sederhana dengan satu mekanik atau fitur inti. Hindari menambah terlalu banyak sistem sebelum alur utama terasa jelas."
      ],
      [
        "Uji dengan skenario",
        "Coba beberapa skenario normal dan tidak terduga. Catat bug, bagian yang membingungkan, dan waktu tunggu yang terasa terlalu lama."
      ],
      [
        "Perbaiki keseimbangan",
        "Ubah satu parameter pada satu waktu, lalu uji lagi. Pertimbangkan keadilan, aksesibilitas, dan kenyamanan komunitas."
      ],
      [
        "Dokumentasikan perubahan",
        "Catat hasil pengujian dan perubahan yang dilakukan. Jika melibatkan komunitas, komunikasikan aturan dengan jelas dan hormat."
      ]
    ],
    "takeaways": [
      "Tujuan menyusun panduan pemula perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan menyusun panduan pemula pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "game",
      "latihan",
      "medium",
      "menyusun"
    ]
  },
  {
    "id": 218,
    "category": "game",
    "categoryName": "Gaming & Komunitas",
    "emoji": "♧",
    "art": "art-game",
    "title": "Workflow praktis: Menjaga keamanan akun game",
    "topic": "Menjaga keamanan akun game",
    "format": "workflow",
    "summary": "Bangun alur kerja menjaga keamanan akun game yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 28,
    "mood": "calm",
    "symbol": "✧",
    "steps": [
      [
        "Tentukan pengalaman",
        "Tulis pengalaman yang ingin dibuat atau diperbaiki melalui menjaga keamanan akun game. Tentukan siapa pemain atau anggota yang dituju."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah menjaga keamanan akun game dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Bangun prototipe",
        "Buat versi sederhana dengan satu mekanik atau fitur inti. Hindari menambah terlalu banyak sistem sebelum alur utama terasa jelas."
      ],
      [
        "Uji dengan skenario",
        "Coba beberapa skenario normal dan tidak terduga. Catat bug, bagian yang membingungkan, dan waktu tunggu yang terasa terlalu lama."
      ],
      [
        "Perbaiki keseimbangan",
        "Ubah satu parameter pada satu waktu, lalu uji lagi. Pertimbangkan keadilan, aksesibilitas, dan kenyamanan komunitas."
      ],
      [
        "Dokumentasikan perubahan",
        "Catat hasil pengujian dan perubahan yang dilakukan. Jika melibatkan komunitas, komunikasikan aturan dengan jelas dan hormat."
      ]
    ],
    "takeaways": [
      "Tujuan menjaga keamanan akun game perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan menjaga keamanan akun game pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "game",
      "workflow",
      "advanced",
      "menjaga"
    ]
  },
  {
    "id": 219,
    "category": "game",
    "categoryName": "Gaming & Komunitas",
    "emoji": "♧",
    "art": "art-game",
    "title": "Proyek mini: Membuat ide level game",
    "topic": "Membuat ide level game",
    "format": "proyek",
    "summary": "Proyek mini yang membantumu mempraktikkan membuat ide level game dari perencanaan sampai evaluasi.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 15,
    "mood": "focus",
    "symbol": "✦",
    "steps": [
      [
        "Ruang lingkup proyek",
        "Tentukan hasil mini dari membuat ide level game yang bisa selesai dalam satu sesi. Batasi fitur agar proyek tetap realistis."
      ],
      [
        "Rancang alur",
        "Susun alur dari awal sampai akhir dan tandai titik ketika pemain membutuhkan petunjuk atau umpan balik."
      ],
      [
        "Bangun prototipe",
        "Buat versi sederhana dengan satu mekanik atau fitur inti. Hindari menambah terlalu banyak sistem sebelum alur utama terasa jelas."
      ],
      [
        "Uji dengan skenario",
        "Coba beberapa skenario normal dan tidak terduga. Catat bug, bagian yang membingungkan, dan waktu tunggu yang terasa terlalu lama."
      ],
      [
        "Perbaiki keseimbangan",
        "Ubah satu parameter pada satu waktu, lalu uji lagi. Pertimbangkan keadilan, aksesibilitas, dan kenyamanan komunitas."
      ],
      [
        "Dokumentasikan perubahan",
        "Catat hasil pengujian dan perubahan yang dilakukan. Jika melibatkan komunitas, komunikasikan aturan dengan jelas dan hormat."
      ]
    ],
    "takeaways": [
      "Tujuan membuat ide level game perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat ide level game pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "game",
      "proyek",
      "beginner",
      "membuat"
    ]
  },
  {
    "id": 220,
    "category": "game",
    "categoryName": "Gaming & Komunitas",
    "emoji": "♧",
    "art": "art-game",
    "title": "Panduan langkah demi langkah: Merancang sistem checkpoint",
    "topic": "Merancang sistem checkpoint",
    "format": "panduan",
    "summary": "Pelajari merancang sistem checkpoint dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 18,
    "mood": "creative",
    "symbol": "◈",
    "steps": [
      [
        "Tentukan pengalaman",
        "Tulis pengalaman yang ingin dibuat atau diperbaiki melalui merancang sistem checkpoint. Tentukan siapa pemain atau anggota yang dituju."
      ],
      [
        "Rancang alur",
        "Susun alur dari awal sampai akhir dan tandai titik ketika pemain membutuhkan petunjuk atau umpan balik."
      ],
      [
        "Bangun prototipe",
        "Buat versi sederhana dengan satu mekanik atau fitur inti. Hindari menambah terlalu banyak sistem sebelum alur utama terasa jelas."
      ],
      [
        "Uji dengan skenario",
        "Coba beberapa skenario normal dan tidak terduga. Catat bug, bagian yang membingungkan, dan waktu tunggu yang terasa terlalu lama."
      ],
      [
        "Perbaiki keseimbangan",
        "Ubah satu parameter pada satu waktu, lalu uji lagi. Pertimbangkan keadilan, aksesibilitas, dan kenyamanan komunitas."
      ],
      [
        "Dokumentasikan perubahan",
        "Catat hasil pengujian dan perubahan yang dilakukan. Jika melibatkan komunitas, komunikasikan aturan dengan jelas dan hormat."
      ]
    ],
    "takeaways": [
      "Tujuan merancang sistem checkpoint perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan merancang sistem checkpoint pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "game",
      "panduan",
      "medium",
      "merancang"
    ]
  },
  {
    "id": 221,
    "category": "game",
    "categoryName": "Gaming & Komunitas",
    "emoji": "♧",
    "art": "art-game",
    "title": "Workflow praktis: Membuat daftar bug game",
    "topic": "Membuat daftar bug game",
    "format": "workflow",
    "summary": "Bangun alur kerja membuat daftar bug game yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 15,
    "mood": "focus",
    "symbol": "✦",
    "steps": [
      [
        "Tentukan pengalaman",
        "Tulis pengalaman yang ingin dibuat atau diperbaiki melalui membuat daftar bug game. Tentukan siapa pemain atau anggota yang dituju."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah membuat daftar bug game dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Bangun prototipe",
        "Buat versi sederhana dengan satu mekanik atau fitur inti. Hindari menambah terlalu banyak sistem sebelum alur utama terasa jelas."
      ],
      [
        "Uji dengan skenario",
        "Coba beberapa skenario normal dan tidak terduga. Catat bug, bagian yang membingungkan, dan waktu tunggu yang terasa terlalu lama."
      ],
      [
        "Perbaiki keseimbangan",
        "Ubah satu parameter pada satu waktu, lalu uji lagi. Pertimbangkan keadilan, aksesibilitas, dan kenyamanan komunitas."
      ],
      [
        "Dokumentasikan perubahan",
        "Catat hasil pengujian dan perubahan yang dilakukan. Jika melibatkan komunitas, komunikasikan aturan dengan jelas dan hormat."
      ]
    ],
    "takeaways": [
      "Tujuan membuat daftar bug game perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat daftar bug game pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "game",
      "workflow",
      "beginner",
      "membuat"
    ]
  },
  {
    "id": 222,
    "category": "game",
    "categoryName": "Gaming & Komunitas",
    "emoji": "♧",
    "art": "art-game",
    "title": "Panduan langkah demi langkah: Menulis deskripsi item",
    "topic": "Menulis deskripsi item",
    "format": "panduan",
    "summary": "Pelajari menulis deskripsi item dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 18,
    "mood": "creative",
    "symbol": "▤",
    "steps": [
      [
        "Tentukan pengalaman",
        "Tulis pengalaman yang ingin dibuat atau diperbaiki melalui menulis deskripsi item. Tentukan siapa pemain atau anggota yang dituju."
      ],
      [
        "Rancang alur",
        "Susun alur dari awal sampai akhir dan tandai titik ketika pemain membutuhkan petunjuk atau umpan balik."
      ],
      [
        "Bangun prototipe",
        "Buat versi sederhana dengan satu mekanik atau fitur inti. Hindari menambah terlalu banyak sistem sebelum alur utama terasa jelas."
      ],
      [
        "Uji dengan skenario",
        "Coba beberapa skenario normal dan tidak terduga. Catat bug, bagian yang membingungkan, dan waktu tunggu yang terasa terlalu lama."
      ],
      [
        "Perbaiki keseimbangan",
        "Ubah satu parameter pada satu waktu, lalu uji lagi. Pertimbangkan keadilan, aksesibilitas, dan kenyamanan komunitas."
      ],
      [
        "Dokumentasikan perubahan",
        "Catat hasil pengujian dan perubahan yang dilakukan. Jika melibatkan komunitas, komunikasikan aturan dengan jelas dan hormat."
      ]
    ],
    "takeaways": [
      "Tujuan menulis deskripsi item perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan menulis deskripsi item pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "game",
      "panduan",
      "medium",
      "menulis"
    ]
  },
  {
    "id": 223,
    "category": "game",
    "categoryName": "Gaming & Komunitas",
    "emoji": "♧",
    "art": "art-game",
    "title": "Workflow praktis: Membuat peta level kasar",
    "topic": "Membuat peta level kasar",
    "format": "workflow",
    "summary": "Bangun alur kerja membuat peta level kasar yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 15,
    "mood": "focus",
    "symbol": "◎",
    "steps": [
      [
        "Tentukan pengalaman",
        "Tulis pengalaman yang ingin dibuat atau diperbaiki melalui membuat peta level kasar. Tentukan siapa pemain atau anggota yang dituju."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah membuat peta level kasar dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Bangun prototipe",
        "Buat versi sederhana dengan satu mekanik atau fitur inti. Hindari menambah terlalu banyak sistem sebelum alur utama terasa jelas."
      ],
      [
        "Uji dengan skenario",
        "Coba beberapa skenario normal dan tidak terduga. Catat bug, bagian yang membingungkan, dan waktu tunggu yang terasa terlalu lama."
      ],
      [
        "Perbaiki keseimbangan",
        "Ubah satu parameter pada satu waktu, lalu uji lagi. Pertimbangkan keadilan, aksesibilitas, dan kenyamanan komunitas."
      ],
      [
        "Dokumentasikan perubahan",
        "Catat hasil pengujian dan perubahan yang dilakukan. Jika melibatkan komunitas, komunikasikan aturan dengan jelas dan hormat."
      ]
    ],
    "takeaways": [
      "Tujuan membuat peta level kasar perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat peta level kasar pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "game",
      "workflow",
      "beginner",
      "membuat"
    ]
  },
  {
    "id": 224,
    "category": "game",
    "categoryName": "Gaming & Komunitas",
    "emoji": "♧",
    "art": "art-game",
    "title": "Latihan mandiri: Menyeimbangkan tingkat kesulitan",
    "topic": "Menyeimbangkan tingkat kesulitan",
    "format": "latihan",
    "summary": "Latihan terarah untuk menerapkan menyeimbangkan tingkat kesulitan sambil mengecek pemahamanmu sendiri.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 31,
    "mood": "calm",
    "symbol": "▤",
    "steps": [
      [
        "Tantangan mini",
        "Coba lakukan menyeimbangkan tingkat kesulitan dalam skala kecil selama 10–15 menit. Tuliskan hasil yang ingin kamu capai sebelum mulai."
      ],
      [
        "Rancang alur",
        "Susun alur dari awal sampai akhir dan tandai titik ketika pemain membutuhkan petunjuk atau umpan balik."
      ],
      [
        "Bangun prototipe",
        "Buat versi sederhana dengan satu mekanik atau fitur inti. Hindari menambah terlalu banyak sistem sebelum alur utama terasa jelas."
      ],
      [
        "Uji dengan skenario",
        "Coba beberapa skenario normal dan tidak terduga. Catat bug, bagian yang membingungkan, dan waktu tunggu yang terasa terlalu lama."
      ],
      [
        "Perbaiki keseimbangan",
        "Ubah satu parameter pada satu waktu, lalu uji lagi. Pertimbangkan keadilan, aksesibilitas, dan kenyamanan komunitas."
      ],
      [
        "Dokumentasikan perubahan",
        "Catat hasil pengujian dan perubahan yang dilakukan. Jika melibatkan komunitas, komunikasikan aturan dengan jelas dan hormat."
      ]
    ],
    "takeaways": [
      "Tujuan menyeimbangkan tingkat kesulitan perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan menyeimbangkan tingkat kesulitan pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "game",
      "latihan",
      "advanced",
      "menyeimbangkan"
    ]
  },
  {
    "id": 225,
    "category": "game",
    "categoryName": "Gaming & Komunitas",
    "emoji": "♧",
    "art": "art-game",
    "title": "Panduan langkah demi langkah: Membuat dokumentasi update",
    "topic": "Membuat dokumentasi update",
    "format": "panduan",
    "summary": "Pelajari membuat dokumentasi update dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 25,
    "mood": "calm",
    "symbol": "⌘",
    "steps": [
      [
        "Tentukan pengalaman",
        "Tulis pengalaman yang ingin dibuat atau diperbaiki melalui membuat dokumentasi update. Tentukan siapa pemain atau anggota yang dituju."
      ],
      [
        "Rancang alur",
        "Susun alur dari awal sampai akhir dan tandai titik ketika pemain membutuhkan petunjuk atau umpan balik."
      ],
      [
        "Bangun prototipe",
        "Buat versi sederhana dengan satu mekanik atau fitur inti. Hindari menambah terlalu banyak sistem sebelum alur utama terasa jelas."
      ],
      [
        "Uji dengan skenario",
        "Coba beberapa skenario normal dan tidak terduga. Catat bug, bagian yang membingungkan, dan waktu tunggu yang terasa terlalu lama."
      ],
      [
        "Perbaiki keseimbangan",
        "Ubah satu parameter pada satu waktu, lalu uji lagi. Pertimbangkan keadilan, aksesibilitas, dan kenyamanan komunitas."
      ],
      [
        "Dokumentasikan perubahan",
        "Catat hasil pengujian dan perubahan yang dilakukan. Jika melibatkan komunitas, komunikasikan aturan dengan jelas dan hormat."
      ]
    ],
    "takeaways": [
      "Tujuan membuat dokumentasi update perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat dokumentasi update pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "game",
      "panduan",
      "advanced",
      "membuat"
    ]
  },
  {
    "id": 226,
    "category": "game",
    "categoryName": "Gaming & Komunitas",
    "emoji": "♧",
    "art": "art-game",
    "title": "Workflow praktis: Membuat nama tim",
    "topic": "Membuat nama tim",
    "format": "workflow",
    "summary": "Bangun alur kerja membuat nama tim yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 21,
    "mood": "creative",
    "symbol": "↗",
    "steps": [
      [
        "Tentukan pengalaman",
        "Tulis pengalaman yang ingin dibuat atau diperbaiki melalui membuat nama tim. Tentukan siapa pemain atau anggota yang dituju."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah membuat nama tim dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Bangun prototipe",
        "Buat versi sederhana dengan satu mekanik atau fitur inti. Hindari menambah terlalu banyak sistem sebelum alur utama terasa jelas."
      ],
      [
        "Uji dengan skenario",
        "Coba beberapa skenario normal dan tidak terduga. Catat bug, bagian yang membingungkan, dan waktu tunggu yang terasa terlalu lama."
      ],
      [
        "Perbaiki keseimbangan",
        "Ubah satu parameter pada satu waktu, lalu uji lagi. Pertimbangkan keadilan, aksesibilitas, dan kenyamanan komunitas."
      ],
      [
        "Dokumentasikan perubahan",
        "Catat hasil pengujian dan perubahan yang dilakukan. Jika melibatkan komunitas, komunikasikan aturan dengan jelas dan hormat."
      ]
    ],
    "takeaways": [
      "Tujuan membuat nama tim perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat nama tim pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "game",
      "workflow",
      "medium",
      "membuat"
    ]
  },
  {
    "id": 227,
    "category": "game",
    "categoryName": "Gaming & Komunitas",
    "emoji": "♧",
    "art": "art-game",
    "title": "Workflow praktis: Menyusun turnamen santai",
    "topic": "Menyusun turnamen santai",
    "format": "workflow",
    "summary": "Bangun alur kerja menyusun turnamen santai yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 28,
    "mood": "calm",
    "symbol": "◈",
    "steps": [
      [
        "Tentukan pengalaman",
        "Tulis pengalaman yang ingin dibuat atau diperbaiki melalui menyusun turnamen santai. Tentukan siapa pemain atau anggota yang dituju."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah menyusun turnamen santai dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Bangun prototipe",
        "Buat versi sederhana dengan satu mekanik atau fitur inti. Hindari menambah terlalu banyak sistem sebelum alur utama terasa jelas."
      ],
      [
        "Uji dengan skenario",
        "Coba beberapa skenario normal dan tidak terduga. Catat bug, bagian yang membingungkan, dan waktu tunggu yang terasa terlalu lama."
      ],
      [
        "Perbaiki keseimbangan",
        "Ubah satu parameter pada satu waktu, lalu uji lagi. Pertimbangkan keadilan, aksesibilitas, dan kenyamanan komunitas."
      ],
      [
        "Dokumentasikan perubahan",
        "Catat hasil pengujian dan perubahan yang dilakukan. Jika melibatkan komunitas, komunikasikan aturan dengan jelas dan hormat."
      ]
    ],
    "takeaways": [
      "Tujuan menyusun turnamen santai perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan menyusun turnamen santai pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "game",
      "workflow",
      "advanced",
      "menyusun"
    ]
  },
  {
    "id": 228,
    "category": "game",
    "categoryName": "Gaming & Komunitas",
    "emoji": "♧",
    "art": "art-game",
    "title": "Latihan mandiri: Membuat role komunitas",
    "topic": "Membuat role komunitas",
    "format": "latihan",
    "summary": "Latihan terarah untuk menerapkan membuat role komunitas sambil mengecek pemahamanmu sendiri.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 24,
    "mood": "creative",
    "symbol": "✦",
    "steps": [
      [
        "Tantangan mini",
        "Coba lakukan membuat role komunitas dalam skala kecil selama 10–15 menit. Tuliskan hasil yang ingin kamu capai sebelum mulai."
      ],
      [
        "Rancang alur",
        "Susun alur dari awal sampai akhir dan tandai titik ketika pemain membutuhkan petunjuk atau umpan balik."
      ],
      [
        "Bangun prototipe",
        "Buat versi sederhana dengan satu mekanik atau fitur inti. Hindari menambah terlalu banyak sistem sebelum alur utama terasa jelas."
      ],
      [
        "Uji dengan skenario",
        "Coba beberapa skenario normal dan tidak terduga. Catat bug, bagian yang membingungkan, dan waktu tunggu yang terasa terlalu lama."
      ],
      [
        "Perbaiki keseimbangan",
        "Ubah satu parameter pada satu waktu, lalu uji lagi. Pertimbangkan keadilan, aksesibilitas, dan kenyamanan komunitas."
      ],
      [
        "Dokumentasikan perubahan",
        "Catat hasil pengujian dan perubahan yang dilakukan. Jika melibatkan komunitas, komunikasikan aturan dengan jelas dan hormat."
      ]
    ],
    "takeaways": [
      "Tujuan membuat role komunitas perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat role komunitas pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "game",
      "latihan",
      "medium",
      "membuat"
    ]
  },
  {
    "id": 229,
    "category": "game",
    "categoryName": "Gaming & Komunitas",
    "emoji": "♧",
    "art": "art-game",
    "title": "Workflow praktis: Membuat pesan sambutan",
    "topic": "Membuat pesan sambutan",
    "format": "workflow",
    "summary": "Bangun alur kerja membuat pesan sambutan yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 28,
    "mood": "calm",
    "symbol": "◈",
    "steps": [
      [
        "Tentukan pengalaman",
        "Tulis pengalaman yang ingin dibuat atau diperbaiki melalui membuat pesan sambutan. Tentukan siapa pemain atau anggota yang dituju."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah membuat pesan sambutan dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Bangun prototipe",
        "Buat versi sederhana dengan satu mekanik atau fitur inti. Hindari menambah terlalu banyak sistem sebelum alur utama terasa jelas."
      ],
      [
        "Uji dengan skenario",
        "Coba beberapa skenario normal dan tidak terduga. Catat bug, bagian yang membingungkan, dan waktu tunggu yang terasa terlalu lama."
      ],
      [
        "Perbaiki keseimbangan",
        "Ubah satu parameter pada satu waktu, lalu uji lagi. Pertimbangkan keadilan, aksesibilitas, dan kenyamanan komunitas."
      ],
      [
        "Dokumentasikan perubahan",
        "Catat hasil pengujian dan perubahan yang dilakukan. Jika melibatkan komunitas, komunikasikan aturan dengan jelas dan hormat."
      ]
    ],
    "takeaways": [
      "Tujuan membuat pesan sambutan perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat pesan sambutan pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "game",
      "workflow",
      "advanced",
      "membuat"
    ]
  },
  {
    "id": 230,
    "category": "game",
    "categoryName": "Gaming & Komunitas",
    "emoji": "♧",
    "art": "art-game",
    "title": "Proyek mini: Menyusun FAQ server",
    "topic": "Menyusun FAQ server",
    "format": "proyek",
    "summary": "Proyek mini yang membantumu mempraktikkan menyusun faq server dari perencanaan sampai evaluasi.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 15,
    "mood": "focus",
    "symbol": "◎",
    "steps": [
      [
        "Ruang lingkup proyek",
        "Tentukan hasil mini dari menyusun faq server yang bisa selesai dalam satu sesi. Batasi fitur agar proyek tetap realistis."
      ],
      [
        "Rancang alur",
        "Susun alur dari awal sampai akhir dan tandai titik ketika pemain membutuhkan petunjuk atau umpan balik."
      ],
      [
        "Bangun prototipe",
        "Buat versi sederhana dengan satu mekanik atau fitur inti. Hindari menambah terlalu banyak sistem sebelum alur utama terasa jelas."
      ],
      [
        "Uji dengan skenario",
        "Coba beberapa skenario normal dan tidak terduga. Catat bug, bagian yang membingungkan, dan waktu tunggu yang terasa terlalu lama."
      ],
      [
        "Perbaiki keseimbangan",
        "Ubah satu parameter pada satu waktu, lalu uji lagi. Pertimbangkan keadilan, aksesibilitas, dan kenyamanan komunitas."
      ],
      [
        "Dokumentasikan perubahan",
        "Catat hasil pengujian dan perubahan yang dilakukan. Jika melibatkan komunitas, komunikasikan aturan dengan jelas dan hormat."
      ]
    ],
    "takeaways": [
      "Tujuan menyusun faq server perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan menyusun faq server pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "game",
      "proyek",
      "beginner",
      "menyusun"
    ]
  },
  {
    "id": 231,
    "category": "game",
    "categoryName": "Gaming & Komunitas",
    "emoji": "♧",
    "art": "art-game",
    "title": "Panduan langkah demi langkah: Menyusun jadwal scrim",
    "topic": "Menyusun jadwal scrim",
    "format": "panduan",
    "summary": "Pelajari menyusun jadwal scrim dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 18,
    "mood": "creative",
    "symbol": "▤",
    "steps": [
      [
        "Tentukan pengalaman",
        "Tulis pengalaman yang ingin dibuat atau diperbaiki melalui menyusun jadwal scrim. Tentukan siapa pemain atau anggota yang dituju."
      ],
      [
        "Rancang alur",
        "Susun alur dari awal sampai akhir dan tandai titik ketika pemain membutuhkan petunjuk atau umpan balik."
      ],
      [
        "Bangun prototipe",
        "Buat versi sederhana dengan satu mekanik atau fitur inti. Hindari menambah terlalu banyak sistem sebelum alur utama terasa jelas."
      ],
      [
        "Uji dengan skenario",
        "Coba beberapa skenario normal dan tidak terduga. Catat bug, bagian yang membingungkan, dan waktu tunggu yang terasa terlalu lama."
      ],
      [
        "Perbaiki keseimbangan",
        "Ubah satu parameter pada satu waktu, lalu uji lagi. Pertimbangkan keadilan, aksesibilitas, dan kenyamanan komunitas."
      ],
      [
        "Dokumentasikan perubahan",
        "Catat hasil pengujian dan perubahan yang dilakukan. Jika melibatkan komunitas, komunikasikan aturan dengan jelas dan hormat."
      ]
    ],
    "takeaways": [
      "Tujuan menyusun jadwal scrim perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan menyusun jadwal scrim pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "game",
      "panduan",
      "medium",
      "menyusun"
    ]
  },
  {
    "id": 232,
    "category": "game",
    "categoryName": "Gaming & Komunitas",
    "emoji": "♧",
    "art": "art-game",
    "title": "Workflow praktis: Membuat catatan strategi",
    "topic": "Membuat catatan strategi",
    "format": "workflow",
    "summary": "Bangun alur kerja membuat catatan strategi yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 15,
    "mood": "focus",
    "symbol": "◎",
    "steps": [
      [
        "Tentukan pengalaman",
        "Tulis pengalaman yang ingin dibuat atau diperbaiki melalui membuat catatan strategi. Tentukan siapa pemain atau anggota yang dituju."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah membuat catatan strategi dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Bangun prototipe",
        "Buat versi sederhana dengan satu mekanik atau fitur inti. Hindari menambah terlalu banyak sistem sebelum alur utama terasa jelas."
      ],
      [
        "Uji dengan skenario",
        "Coba beberapa skenario normal dan tidak terduga. Catat bug, bagian yang membingungkan, dan waktu tunggu yang terasa terlalu lama."
      ],
      [
        "Perbaiki keseimbangan",
        "Ubah satu parameter pada satu waktu, lalu uji lagi. Pertimbangkan keadilan, aksesibilitas, dan kenyamanan komunitas."
      ],
      [
        "Dokumentasikan perubahan",
        "Catat hasil pengujian dan perubahan yang dilakukan. Jika melibatkan komunitas, komunikasikan aturan dengan jelas dan hormat."
      ]
    ],
    "takeaways": [
      "Tujuan membuat catatan strategi perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat catatan strategi pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "game",
      "workflow",
      "beginner",
      "membuat"
    ]
  },
  {
    "id": 233,
    "category": "game",
    "categoryName": "Gaming & Komunitas",
    "emoji": "♧",
    "art": "art-game",
    "title": "Panduan langkah demi langkah: Menguji pengalaman pengguna",
    "topic": "Menguji pengalaman pengguna",
    "format": "panduan",
    "summary": "Pelajari menguji pengalaman pengguna dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 18,
    "mood": "creative",
    "symbol": "〰",
    "steps": [
      [
        "Tentukan pengalaman",
        "Tulis pengalaman yang ingin dibuat atau diperbaiki melalui menguji pengalaman pengguna. Tentukan siapa pemain atau anggota yang dituju."
      ],
      [
        "Rancang alur",
        "Susun alur dari awal sampai akhir dan tandai titik ketika pemain membutuhkan petunjuk atau umpan balik."
      ],
      [
        "Bangun prototipe",
        "Buat versi sederhana dengan satu mekanik atau fitur inti. Hindari menambah terlalu banyak sistem sebelum alur utama terasa jelas."
      ],
      [
        "Uji dengan skenario",
        "Coba beberapa skenario normal dan tidak terduga. Catat bug, bagian yang membingungkan, dan waktu tunggu yang terasa terlalu lama."
      ],
      [
        "Perbaiki keseimbangan",
        "Ubah satu parameter pada satu waktu, lalu uji lagi. Pertimbangkan keadilan, aksesibilitas, dan kenyamanan komunitas."
      ],
      [
        "Dokumentasikan perubahan",
        "Catat hasil pengujian dan perubahan yang dilakukan. Jika melibatkan komunitas, komunikasikan aturan dengan jelas dan hormat."
      ]
    ],
    "takeaways": [
      "Tujuan menguji pengalaman pengguna perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan menguji pengalaman pengguna pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "game",
      "panduan",
      "medium",
      "menguji"
    ]
  },
  {
    "id": 234,
    "category": "game",
    "categoryName": "Gaming & Komunitas",
    "emoji": "♧",
    "art": "art-game",
    "title": "Workflow praktis: Membuat tutorial kontrol",
    "topic": "Membuat tutorial kontrol",
    "format": "workflow",
    "summary": "Bangun alur kerja membuat tutorial kontrol yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 15,
    "mood": "focus",
    "symbol": "⌘",
    "steps": [
      [
        "Tentukan pengalaman",
        "Tulis pengalaman yang ingin dibuat atau diperbaiki melalui membuat tutorial kontrol. Tentukan siapa pemain atau anggota yang dituju."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah membuat tutorial kontrol dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Bangun prototipe",
        "Buat versi sederhana dengan satu mekanik atau fitur inti. Hindari menambah terlalu banyak sistem sebelum alur utama terasa jelas."
      ],
      [
        "Uji dengan skenario",
        "Coba beberapa skenario normal dan tidak terduga. Catat bug, bagian yang membingungkan, dan waktu tunggu yang terasa terlalu lama."
      ],
      [
        "Perbaiki keseimbangan",
        "Ubah satu parameter pada satu waktu, lalu uji lagi. Pertimbangkan keadilan, aksesibilitas, dan kenyamanan komunitas."
      ],
      [
        "Dokumentasikan perubahan",
        "Catat hasil pengujian dan perubahan yang dilakukan. Jika melibatkan komunitas, komunikasikan aturan dengan jelas dan hormat."
      ]
    ],
    "takeaways": [
      "Tujuan membuat tutorial kontrol perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat tutorial kontrol pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "game",
      "workflow",
      "beginner",
      "membuat"
    ]
  },
  {
    "id": 235,
    "category": "game",
    "categoryName": "Gaming & Komunitas",
    "emoji": "♧",
    "art": "art-game",
    "title": "Latihan mandiri: Membuat papan peringkat demo",
    "topic": "Membuat papan peringkat demo",
    "format": "latihan",
    "summary": "Latihan terarah untuk menerapkan membuat papan peringkat demo sambil mengecek pemahamanmu sendiri.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 31,
    "mood": "calm",
    "symbol": "〰",
    "steps": [
      [
        "Tantangan mini",
        "Coba lakukan membuat papan peringkat demo dalam skala kecil selama 10–15 menit. Tuliskan hasil yang ingin kamu capai sebelum mulai."
      ],
      [
        "Rancang alur",
        "Susun alur dari awal sampai akhir dan tandai titik ketika pemain membutuhkan petunjuk atau umpan balik."
      ],
      [
        "Bangun prototipe",
        "Buat versi sederhana dengan satu mekanik atau fitur inti. Hindari menambah terlalu banyak sistem sebelum alur utama terasa jelas."
      ],
      [
        "Uji dengan skenario",
        "Coba beberapa skenario normal dan tidak terduga. Catat bug, bagian yang membingungkan, dan waktu tunggu yang terasa terlalu lama."
      ],
      [
        "Perbaiki keseimbangan",
        "Ubah satu parameter pada satu waktu, lalu uji lagi. Pertimbangkan keadilan, aksesibilitas, dan kenyamanan komunitas."
      ],
      [
        "Dokumentasikan perubahan",
        "Catat hasil pengujian dan perubahan yang dilakukan. Jika melibatkan komunitas, komunikasikan aturan dengan jelas dan hormat."
      ]
    ],
    "takeaways": [
      "Tujuan membuat papan peringkat demo perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat papan peringkat demo pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "game",
      "latihan",
      "advanced",
      "membuat"
    ]
  },
  {
    "id": 236,
    "category": "game",
    "categoryName": "Gaming & Komunitas",
    "emoji": "♧",
    "art": "art-game",
    "title": "Workflow praktis: Membuat konsep karakter",
    "topic": "Membuat konsep karakter",
    "format": "workflow",
    "summary": "Bangun alur kerja membuat konsep karakter yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 28,
    "mood": "calm",
    "symbol": "◈",
    "steps": [
      [
        "Tentukan pengalaman",
        "Tulis pengalaman yang ingin dibuat atau diperbaiki melalui membuat konsep karakter. Tentukan siapa pemain atau anggota yang dituju."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah membuat konsep karakter dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Bangun prototipe",
        "Buat versi sederhana dengan satu mekanik atau fitur inti. Hindari menambah terlalu banyak sistem sebelum alur utama terasa jelas."
      ],
      [
        "Uji dengan skenario",
        "Coba beberapa skenario normal dan tidak terduga. Catat bug, bagian yang membingungkan, dan waktu tunggu yang terasa terlalu lama."
      ],
      [
        "Perbaiki keseimbangan",
        "Ubah satu parameter pada satu waktu, lalu uji lagi. Pertimbangkan keadilan, aksesibilitas, dan kenyamanan komunitas."
      ],
      [
        "Dokumentasikan perubahan",
        "Catat hasil pengujian dan perubahan yang dilakukan. Jika melibatkan komunitas, komunikasikan aturan dengan jelas dan hormat."
      ]
    ],
    "takeaways": [
      "Tujuan membuat konsep karakter perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat konsep karakter pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "game",
      "workflow",
      "advanced",
      "membuat"
    ]
  },
  {
    "id": 237,
    "category": "game",
    "categoryName": "Gaming & Komunitas",
    "emoji": "♧",
    "art": "art-game",
    "title": "Workflow praktis: Menyusun alur tutorial game",
    "topic": "Menyusun alur tutorial game",
    "format": "workflow",
    "summary": "Bangun alur kerja menyusun alur tutorial game yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 21,
    "mood": "creative",
    "symbol": "✦",
    "steps": [
      [
        "Tentukan pengalaman",
        "Tulis pengalaman yang ingin dibuat atau diperbaiki melalui menyusun alur tutorial game. Tentukan siapa pemain atau anggota yang dituju."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah menyusun alur tutorial game dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Bangun prototipe",
        "Buat versi sederhana dengan satu mekanik atau fitur inti. Hindari menambah terlalu banyak sistem sebelum alur utama terasa jelas."
      ],
      [
        "Uji dengan skenario",
        "Coba beberapa skenario normal dan tidak terduga. Catat bug, bagian yang membingungkan, dan waktu tunggu yang terasa terlalu lama."
      ],
      [
        "Perbaiki keseimbangan",
        "Ubah satu parameter pada satu waktu, lalu uji lagi. Pertimbangkan keadilan, aksesibilitas, dan kenyamanan komunitas."
      ],
      [
        "Dokumentasikan perubahan",
        "Catat hasil pengujian dan perubahan yang dilakukan. Jika melibatkan komunitas, komunikasikan aturan dengan jelas dan hormat."
      ]
    ],
    "takeaways": [
      "Tujuan menyusun alur tutorial game perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan menyusun alur tutorial game pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "game",
      "workflow",
      "medium",
      "menyusun"
    ]
  },
  {
    "id": 238,
    "category": "game",
    "categoryName": "Gaming & Komunitas",
    "emoji": "♧",
    "art": "art-game",
    "title": "Checklist penerapan: Membuat daftar fitur MVP",
    "topic": "Membuat daftar fitur MVP",
    "format": "checklist",
    "summary": "Daftar periksa untuk menerapkan membuat daftar fitur mvp tanpa melewatkan hal penting.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 18,
    "mood": "creative",
    "symbol": "◈",
    "steps": [
      [
        "Periksa kesiapan",
        "Pastikan tujuan membuat daftar fitur mvp jelas dan semua bahan penting tersedia."
      ],
      [
        "Rancang alur",
        "Susun alur dari awal sampai akhir dan tandai titik ketika pemain membutuhkan petunjuk atau umpan balik."
      ],
      [
        "Bangun prototipe",
        "Buat versi sederhana dengan satu mekanik atau fitur inti. Hindari menambah terlalu banyak sistem sebelum alur utama terasa jelas."
      ],
      [
        "Uji dengan skenario",
        "Coba beberapa skenario normal dan tidak terduga. Catat bug, bagian yang membingungkan, dan waktu tunggu yang terasa terlalu lama."
      ],
      [
        "Perbaiki keseimbangan",
        "Ubah satu parameter pada satu waktu, lalu uji lagi. Pertimbangkan keadilan, aksesibilitas, dan kenyamanan komunitas."
      ],
      [
        "Dokumentasikan perubahan",
        "Catat hasil pengujian dan perubahan yang dilakukan. Jika melibatkan komunitas, komunikasikan aturan dengan jelas dan hormat."
      ]
    ],
    "takeaways": [
      "Tujuan membuat daftar fitur mvp perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat daftar fitur mvp pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "game",
      "checklist",
      "medium",
      "membuat"
    ]
  },
  {
    "id": 239,
    "category": "game",
    "categoryName": "Gaming & Komunitas",
    "emoji": "♧",
    "art": "art-game",
    "title": "Latihan mandiri: Membuat formulir saran",
    "topic": "Membuat formulir saran",
    "format": "latihan",
    "summary": "Latihan terarah untuk menerapkan membuat formulir saran sambil mengecek pemahamanmu sendiri.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 24,
    "mood": "creative",
    "symbol": "◎",
    "steps": [
      [
        "Tantangan mini",
        "Coba lakukan membuat formulir saran dalam skala kecil selama 10–15 menit. Tuliskan hasil yang ingin kamu capai sebelum mulai."
      ],
      [
        "Rancang alur",
        "Susun alur dari awal sampai akhir dan tandai titik ketika pemain membutuhkan petunjuk atau umpan balik."
      ],
      [
        "Bangun prototipe",
        "Buat versi sederhana dengan satu mekanik atau fitur inti. Hindari menambah terlalu banyak sistem sebelum alur utama terasa jelas."
      ],
      [
        "Uji dengan skenario",
        "Coba beberapa skenario normal dan tidak terduga. Catat bug, bagian yang membingungkan, dan waktu tunggu yang terasa terlalu lama."
      ],
      [
        "Perbaiki keseimbangan",
        "Ubah satu parameter pada satu waktu, lalu uji lagi. Pertimbangkan keadilan, aksesibilitas, dan kenyamanan komunitas."
      ],
      [
        "Dokumentasikan perubahan",
        "Catat hasil pengujian dan perubahan yang dilakukan. Jika melibatkan komunitas, komunikasikan aturan dengan jelas dan hormat."
      ]
    ],
    "takeaways": [
      "Tujuan membuat formulir saran perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat formulir saran pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "game",
      "latihan",
      "medium",
      "membuat"
    ]
  },
  {
    "id": 240,
    "category": "game",
    "categoryName": "Gaming & Komunitas",
    "emoji": "♧",
    "art": "art-game",
    "title": "Workflow praktis: Membuat catatan patch",
    "topic": "Membuat catatan patch",
    "format": "workflow",
    "summary": "Bangun alur kerja membuat catatan patch yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 28,
    "mood": "calm",
    "symbol": "▤",
    "steps": [
      [
        "Tentukan pengalaman",
        "Tulis pengalaman yang ingin dibuat atau diperbaiki melalui membuat catatan patch. Tentukan siapa pemain atau anggota yang dituju."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah membuat catatan patch dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Bangun prototipe",
        "Buat versi sederhana dengan satu mekanik atau fitur inti. Hindari menambah terlalu banyak sistem sebelum alur utama terasa jelas."
      ],
      [
        "Uji dengan skenario",
        "Coba beberapa skenario normal dan tidak terduga. Catat bug, bagian yang membingungkan, dan waktu tunggu yang terasa terlalu lama."
      ],
      [
        "Perbaiki keseimbangan",
        "Ubah satu parameter pada satu waktu, lalu uji lagi. Pertimbangkan keadilan, aksesibilitas, dan kenyamanan komunitas."
      ],
      [
        "Dokumentasikan perubahan",
        "Catat hasil pengujian dan perubahan yang dilakukan. Jika melibatkan komunitas, komunikasikan aturan dengan jelas dan hormat."
      ]
    ],
    "takeaways": [
      "Tujuan membuat catatan patch perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat catatan patch pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "game",
      "workflow",
      "advanced",
      "membuat"
    ]
  },
  {
    "id": 241,
    "category": "safety",
    "categoryName": "Keamanan Digital",
    "emoji": "盾",
    "art": "art-safety",
    "title": "Panduan langkah demi langkah: Membuat kata sandi kuat",
    "topic": "Membuat kata sandi kuat",
    "format": "panduan",
    "summary": "Pelajari membuat kata sandi kuat dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 25,
    "mood": "calm",
    "symbol": "✧",
    "steps": [
      [
        "Kenali risiko",
        "Perhatikan risiko yang berkaitan dengan membuat kata sandi kuat. Jangan membagikan data sensitif saat memeriksa pengaturan."
      ],
      [
        "Periksa sumber",
        "Gunakan menu resmi atau dokumentasi tepercaya. Waspadai pesan mendesak yang meminta kode, kata sandi, atau pembayaran."
      ],
      [
        "Pilih perlindungan",
        "Aktifkan fitur keamanan yang sesuai dan gunakan pengaturan privasi paling masuk akal untuk kebutuhanmu."
      ],
      [
        "Verifikasi perubahan",
        "Periksa apakah pengaturan benar-benar tersimpan dan lihat daftar perangkat atau aplikasi yang memiliki akses."
      ],
      [
        "Siapkan pemulihan",
        "Pastikan kamu tahu cara memulihkan akun atau melaporkan masalah melalui saluran resmi."
      ],
      [
        "Biasakan pemeriksaan",
        "Lakukan pemeriksaan berkala dan perbarui pengaturan saat kebutuhan berubah. Jangan pernah membagikan kode verifikasi kepada orang lain."
      ]
    ],
    "takeaways": [
      "Tujuan membuat kata sandi kuat perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat kata sandi kuat pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "safety",
      "panduan",
      "advanced",
      "membuat"
    ]
  },
  {
    "id": 242,
    "category": "safety",
    "categoryName": "Keamanan Digital",
    "emoji": "盾",
    "art": "art-safety",
    "title": "Panduan langkah demi langkah: Mengenali tautan mencurigakan",
    "topic": "Mengenali tautan mencurigakan",
    "format": "panduan",
    "summary": "Pelajari mengenali tautan mencurigakan dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 18,
    "mood": "creative",
    "symbol": "↗",
    "steps": [
      [
        "Kenali risiko",
        "Perhatikan risiko yang berkaitan dengan mengenali tautan mencurigakan. Jangan membagikan data sensitif saat memeriksa pengaturan."
      ],
      [
        "Periksa sumber",
        "Gunakan menu resmi atau dokumentasi tepercaya. Waspadai pesan mendesak yang meminta kode, kata sandi, atau pembayaran."
      ],
      [
        "Pilih perlindungan",
        "Aktifkan fitur keamanan yang sesuai dan gunakan pengaturan privasi paling masuk akal untuk kebutuhanmu."
      ],
      [
        "Verifikasi perubahan",
        "Periksa apakah pengaturan benar-benar tersimpan dan lihat daftar perangkat atau aplikasi yang memiliki akses."
      ],
      [
        "Siapkan pemulihan",
        "Pastikan kamu tahu cara memulihkan akun atau melaporkan masalah melalui saluran resmi."
      ],
      [
        "Biasakan pemeriksaan",
        "Lakukan pemeriksaan berkala dan perbarui pengaturan saat kebutuhan berubah. Jangan pernah membagikan kode verifikasi kepada orang lain."
      ]
    ],
    "takeaways": [
      "Tujuan mengenali tautan mencurigakan perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mengenali tautan mencurigakan pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "safety",
      "panduan",
      "medium",
      "mengenali"
    ]
  },
  {
    "id": 243,
    "category": "safety",
    "categoryName": "Keamanan Digital",
    "emoji": "盾",
    "art": "art-safety",
    "title": "Panduan langkah demi langkah: Memeriksa izin aplikasi",
    "topic": "Memeriksa izin aplikasi",
    "format": "panduan",
    "summary": "Pelajari memeriksa izin aplikasi dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 25,
    "mood": "calm",
    "symbol": "◈",
    "steps": [
      [
        "Kenali risiko",
        "Perhatikan risiko yang berkaitan dengan memeriksa izin aplikasi. Jangan membagikan data sensitif saat memeriksa pengaturan."
      ],
      [
        "Periksa sumber",
        "Gunakan menu resmi atau dokumentasi tepercaya. Waspadai pesan mendesak yang meminta kode, kata sandi, atau pembayaran."
      ],
      [
        "Pilih perlindungan",
        "Aktifkan fitur keamanan yang sesuai dan gunakan pengaturan privasi paling masuk akal untuk kebutuhanmu."
      ],
      [
        "Verifikasi perubahan",
        "Periksa apakah pengaturan benar-benar tersimpan dan lihat daftar perangkat atau aplikasi yang memiliki akses."
      ],
      [
        "Siapkan pemulihan",
        "Pastikan kamu tahu cara memulihkan akun atau melaporkan masalah melalui saluran resmi."
      ],
      [
        "Biasakan pemeriksaan",
        "Lakukan pemeriksaan berkala dan perbarui pengaturan saat kebutuhan berubah. Jangan pernah membagikan kode verifikasi kepada orang lain."
      ]
    ],
    "takeaways": [
      "Tujuan memeriksa izin aplikasi perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan memeriksa izin aplikasi pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "safety",
      "panduan",
      "advanced",
      "memeriksa"
    ]
  },
  {
    "id": 244,
    "category": "safety",
    "categoryName": "Keamanan Digital",
    "emoji": "盾",
    "art": "art-safety",
    "title": "Workflow praktis: Mengatur privasi media sosial",
    "topic": "Mengatur privasi media sosial",
    "format": "workflow",
    "summary": "Bangun alur kerja mengatur privasi media sosial yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 21,
    "mood": "creative",
    "symbol": "✦",
    "steps": [
      [
        "Kenali risiko",
        "Perhatikan risiko yang berkaitan dengan mengatur privasi media sosial. Jangan membagikan data sensitif saat memeriksa pengaturan."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah mengatur privasi media sosial dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Pilih perlindungan",
        "Aktifkan fitur keamanan yang sesuai dan gunakan pengaturan privasi paling masuk akal untuk kebutuhanmu."
      ],
      [
        "Verifikasi perubahan",
        "Periksa apakah pengaturan benar-benar tersimpan dan lihat daftar perangkat atau aplikasi yang memiliki akses."
      ],
      [
        "Siapkan pemulihan",
        "Pastikan kamu tahu cara memulihkan akun atau melaporkan masalah melalui saluran resmi."
      ],
      [
        "Biasakan pemeriksaan",
        "Lakukan pemeriksaan berkala dan perbarui pengaturan saat kebutuhan berubah. Jangan pernah membagikan kode verifikasi kepada orang lain."
      ]
    ],
    "takeaways": [
      "Tujuan mengatur privasi media sosial perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mengatur privasi media sosial pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "safety",
      "workflow",
      "medium",
      "mengatur"
    ]
  },
  {
    "id": 245,
    "category": "safety",
    "categoryName": "Keamanan Digital",
    "emoji": "盾",
    "art": "art-safety",
    "title": "Panduan langkah demi langkah: Mengenali penipuan online",
    "topic": "Mengenali penipuan online",
    "format": "panduan",
    "summary": "Pelajari mengenali penipuan online dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 25,
    "mood": "calm",
    "symbol": "◈",
    "steps": [
      [
        "Kenali risiko",
        "Perhatikan risiko yang berkaitan dengan mengenali penipuan online. Jangan membagikan data sensitif saat memeriksa pengaturan."
      ],
      [
        "Periksa sumber",
        "Gunakan menu resmi atau dokumentasi tepercaya. Waspadai pesan mendesak yang meminta kode, kata sandi, atau pembayaran."
      ],
      [
        "Pilih perlindungan",
        "Aktifkan fitur keamanan yang sesuai dan gunakan pengaturan privasi paling masuk akal untuk kebutuhanmu."
      ],
      [
        "Verifikasi perubahan",
        "Periksa apakah pengaturan benar-benar tersimpan dan lihat daftar perangkat atau aplikasi yang memiliki akses."
      ],
      [
        "Siapkan pemulihan",
        "Pastikan kamu tahu cara memulihkan akun atau melaporkan masalah melalui saluran resmi."
      ],
      [
        "Biasakan pemeriksaan",
        "Lakukan pemeriksaan berkala dan perbarui pengaturan saat kebutuhan berubah. Jangan pernah membagikan kode verifikasi kepada orang lain."
      ]
    ],
    "takeaways": [
      "Tujuan mengenali penipuan online perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mengenali penipuan online pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "safety",
      "panduan",
      "advanced",
      "mengenali"
    ]
  },
  {
    "id": 246,
    "category": "safety",
    "categoryName": "Keamanan Digital",
    "emoji": "盾",
    "art": "art-safety",
    "title": "Panduan langkah demi langkah: Mengamankan Wi-Fi rumah",
    "topic": "Mengamankan Wi-Fi rumah",
    "format": "panduan",
    "summary": "Pelajari mengamankan wi-fi rumah dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 12,
    "mood": "focus",
    "symbol": "⌘",
    "steps": [
      [
        "Kenali risiko",
        "Perhatikan risiko yang berkaitan dengan mengamankan wi-fi rumah. Jangan membagikan data sensitif saat memeriksa pengaturan."
      ],
      [
        "Periksa sumber",
        "Gunakan menu resmi atau dokumentasi tepercaya. Waspadai pesan mendesak yang meminta kode, kata sandi, atau pembayaran."
      ],
      [
        "Pilih perlindungan",
        "Aktifkan fitur keamanan yang sesuai dan gunakan pengaturan privasi paling masuk akal untuk kebutuhanmu."
      ],
      [
        "Verifikasi perubahan",
        "Periksa apakah pengaturan benar-benar tersimpan dan lihat daftar perangkat atau aplikasi yang memiliki akses."
      ],
      [
        "Siapkan pemulihan",
        "Pastikan kamu tahu cara memulihkan akun atau melaporkan masalah melalui saluran resmi."
      ],
      [
        "Biasakan pemeriksaan",
        "Lakukan pemeriksaan berkala dan perbarui pengaturan saat kebutuhan berubah. Jangan pernah membagikan kode verifikasi kepada orang lain."
      ]
    ],
    "takeaways": [
      "Tujuan mengamankan wi-fi rumah perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mengamankan wi-fi rumah pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "safety",
      "panduan",
      "beginner",
      "mengamankan"
    ]
  },
  {
    "id": 247,
    "category": "safety",
    "categoryName": "Keamanan Digital",
    "emoji": "盾",
    "art": "art-safety",
    "title": "Workflow praktis: Memeriksa sesi login",
    "topic": "Memeriksa sesi login",
    "format": "workflow",
    "summary": "Bangun alur kerja memeriksa sesi login yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 28,
    "mood": "calm",
    "symbol": "〰",
    "steps": [
      [
        "Kenali risiko",
        "Perhatikan risiko yang berkaitan dengan memeriksa sesi login. Jangan membagikan data sensitif saat memeriksa pengaturan."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah memeriksa sesi login dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Pilih perlindungan",
        "Aktifkan fitur keamanan yang sesuai dan gunakan pengaturan privasi paling masuk akal untuk kebutuhanmu."
      ],
      [
        "Verifikasi perubahan",
        "Periksa apakah pengaturan benar-benar tersimpan dan lihat daftar perangkat atau aplikasi yang memiliki akses."
      ],
      [
        "Siapkan pemulihan",
        "Pastikan kamu tahu cara memulihkan akun atau melaporkan masalah melalui saluran resmi."
      ],
      [
        "Biasakan pemeriksaan",
        "Lakukan pemeriksaan berkala dan perbarui pengaturan saat kebutuhan berubah. Jangan pernah membagikan kode verifikasi kepada orang lain."
      ]
    ],
    "takeaways": [
      "Tujuan memeriksa sesi login perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan memeriksa sesi login pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "safety",
      "workflow",
      "advanced",
      "memeriksa"
    ]
  },
  {
    "id": 248,
    "category": "safety",
    "categoryName": "Keamanan Digital",
    "emoji": "盾",
    "art": "art-safety",
    "title": "Latihan mandiri: Mengelola izin lokasi",
    "topic": "Mengelola izin lokasi",
    "format": "latihan",
    "summary": "Latihan terarah untuk menerapkan mengelola izin lokasi sambil mengecek pemahamanmu sendiri.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 24,
    "mood": "creative",
    "symbol": "⌘",
    "steps": [
      [
        "Tantangan mini",
        "Coba lakukan mengelola izin lokasi dalam skala kecil selama 10–15 menit. Tuliskan hasil yang ingin kamu capai sebelum mulai."
      ],
      [
        "Periksa sumber",
        "Gunakan menu resmi atau dokumentasi tepercaya. Waspadai pesan mendesak yang meminta kode, kata sandi, atau pembayaran."
      ],
      [
        "Pilih perlindungan",
        "Aktifkan fitur keamanan yang sesuai dan gunakan pengaturan privasi paling masuk akal untuk kebutuhanmu."
      ],
      [
        "Verifikasi perubahan",
        "Periksa apakah pengaturan benar-benar tersimpan dan lihat daftar perangkat atau aplikasi yang memiliki akses."
      ],
      [
        "Siapkan pemulihan",
        "Pastikan kamu tahu cara memulihkan akun atau melaporkan masalah melalui saluran resmi."
      ],
      [
        "Biasakan pemeriksaan",
        "Lakukan pemeriksaan berkala dan perbarui pengaturan saat kebutuhan berubah. Jangan pernah membagikan kode verifikasi kepada orang lain."
      ]
    ],
    "takeaways": [
      "Tujuan mengelola izin lokasi perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mengelola izin lokasi pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "safety",
      "latihan",
      "medium",
      "mengelola"
    ]
  },
  {
    "id": 249,
    "category": "safety",
    "categoryName": "Keamanan Digital",
    "emoji": "盾",
    "art": "art-safety",
    "title": "Panduan langkah demi langkah: Membuat kebiasaan update",
    "topic": "Membuat kebiasaan update",
    "format": "panduan",
    "summary": "Pelajari membuat kebiasaan update dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 18,
    "mood": "creative",
    "symbol": "↗",
    "steps": [
      [
        "Kenali risiko",
        "Perhatikan risiko yang berkaitan dengan membuat kebiasaan update. Jangan membagikan data sensitif saat memeriksa pengaturan."
      ],
      [
        "Periksa sumber",
        "Gunakan menu resmi atau dokumentasi tepercaya. Waspadai pesan mendesak yang meminta kode, kata sandi, atau pembayaran."
      ],
      [
        "Pilih perlindungan",
        "Aktifkan fitur keamanan yang sesuai dan gunakan pengaturan privasi paling masuk akal untuk kebutuhanmu."
      ],
      [
        "Verifikasi perubahan",
        "Periksa apakah pengaturan benar-benar tersimpan dan lihat daftar perangkat atau aplikasi yang memiliki akses."
      ],
      [
        "Siapkan pemulihan",
        "Pastikan kamu tahu cara memulihkan akun atau melaporkan masalah melalui saluran resmi."
      ],
      [
        "Biasakan pemeriksaan",
        "Lakukan pemeriksaan berkala dan perbarui pengaturan saat kebutuhan berubah. Jangan pernah membagikan kode verifikasi kepada orang lain."
      ]
    ],
    "takeaways": [
      "Tujuan membuat kebiasaan update perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat kebiasaan update pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "safety",
      "panduan",
      "medium",
      "membuat"
    ]
  },
  {
    "id": 250,
    "category": "safety",
    "categoryName": "Keamanan Digital",
    "emoji": "盾",
    "art": "art-safety",
    "title": "Proyek mini: Melindungi data pribadi",
    "topic": "Melindungi data pribadi",
    "format": "proyek",
    "summary": "Proyek mini yang membantumu mempraktikkan melindungi data pribadi dari perencanaan sampai evaluasi.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 15,
    "mood": "focus",
    "symbol": "✧",
    "steps": [
      [
        "Ruang lingkup proyek",
        "Tentukan hasil mini dari melindungi data pribadi yang bisa selesai dalam satu sesi. Batasi fitur agar proyek tetap realistis."
      ],
      [
        "Periksa sumber",
        "Gunakan menu resmi atau dokumentasi tepercaya. Waspadai pesan mendesak yang meminta kode, kata sandi, atau pembayaran."
      ],
      [
        "Pilih perlindungan",
        "Aktifkan fitur keamanan yang sesuai dan gunakan pengaturan privasi paling masuk akal untuk kebutuhanmu."
      ],
      [
        "Verifikasi perubahan",
        "Periksa apakah pengaturan benar-benar tersimpan dan lihat daftar perangkat atau aplikasi yang memiliki akses."
      ],
      [
        "Siapkan pemulihan",
        "Pastikan kamu tahu cara memulihkan akun atau melaporkan masalah melalui saluran resmi."
      ],
      [
        "Biasakan pemeriksaan",
        "Lakukan pemeriksaan berkala dan perbarui pengaturan saat kebutuhan berubah. Jangan pernah membagikan kode verifikasi kepada orang lain."
      ]
    ],
    "takeaways": [
      "Tujuan melindungi data pribadi perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan melindungi data pribadi pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "safety",
      "proyek",
      "beginner",
      "melindungi"
    ]
  },
  {
    "id": 251,
    "category": "safety",
    "categoryName": "Keamanan Digital",
    "emoji": "盾",
    "art": "art-safety",
    "title": "Panduan langkah demi langkah: Menghapus akses aplikasi lama",
    "topic": "Menghapus akses aplikasi lama",
    "format": "panduan",
    "summary": "Pelajari menghapus akses aplikasi lama dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 18,
    "mood": "creative",
    "symbol": "↗",
    "steps": [
      [
        "Kenali risiko",
        "Perhatikan risiko yang berkaitan dengan menghapus akses aplikasi lama. Jangan membagikan data sensitif saat memeriksa pengaturan."
      ],
      [
        "Periksa sumber",
        "Gunakan menu resmi atau dokumentasi tepercaya. Waspadai pesan mendesak yang meminta kode, kata sandi, atau pembayaran."
      ],
      [
        "Pilih perlindungan",
        "Aktifkan fitur keamanan yang sesuai dan gunakan pengaturan privasi paling masuk akal untuk kebutuhanmu."
      ],
      [
        "Verifikasi perubahan",
        "Periksa apakah pengaturan benar-benar tersimpan dan lihat daftar perangkat atau aplikasi yang memiliki akses."
      ],
      [
        "Siapkan pemulihan",
        "Pastikan kamu tahu cara memulihkan akun atau melaporkan masalah melalui saluran resmi."
      ],
      [
        "Biasakan pemeriksaan",
        "Lakukan pemeriksaan berkala dan perbarui pengaturan saat kebutuhan berubah. Jangan pernah membagikan kode verifikasi kepada orang lain."
      ]
    ],
    "takeaways": [
      "Tujuan menghapus akses aplikasi lama perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan menghapus akses aplikasi lama pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "safety",
      "panduan",
      "medium",
      "menghapus"
    ]
  },
  {
    "id": 252,
    "category": "safety",
    "categoryName": "Keamanan Digital",
    "emoji": "盾",
    "art": "art-safety",
    "title": "Panduan langkah demi langkah: Mengenali file mencurigakan",
    "topic": "Mengenali file mencurigakan",
    "format": "panduan",
    "summary": "Pelajari mengenali file mencurigakan dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 25,
    "mood": "calm",
    "symbol": "◈",
    "steps": [
      [
        "Kenali risiko",
        "Perhatikan risiko yang berkaitan dengan mengenali file mencurigakan. Jangan membagikan data sensitif saat memeriksa pengaturan."
      ],
      [
        "Periksa sumber",
        "Gunakan menu resmi atau dokumentasi tepercaya. Waspadai pesan mendesak yang meminta kode, kata sandi, atau pembayaran."
      ],
      [
        "Pilih perlindungan",
        "Aktifkan fitur keamanan yang sesuai dan gunakan pengaturan privasi paling masuk akal untuk kebutuhanmu."
      ],
      [
        "Verifikasi perubahan",
        "Periksa apakah pengaturan benar-benar tersimpan dan lihat daftar perangkat atau aplikasi yang memiliki akses."
      ],
      [
        "Siapkan pemulihan",
        "Pastikan kamu tahu cara memulihkan akun atau melaporkan masalah melalui saluran resmi."
      ],
      [
        "Biasakan pemeriksaan",
        "Lakukan pemeriksaan berkala dan perbarui pengaturan saat kebutuhan berubah. Jangan pernah membagikan kode verifikasi kepada orang lain."
      ]
    ],
    "takeaways": [
      "Tujuan mengenali file mencurigakan perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mengenali file mencurigakan pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "safety",
      "panduan",
      "advanced",
      "mengenali"
    ]
  },
  {
    "id": 253,
    "category": "safety",
    "categoryName": "Keamanan Digital",
    "emoji": "盾",
    "art": "art-safety",
    "title": "Panduan langkah demi langkah: Melaporkan akun palsu",
    "topic": "Melaporkan akun palsu",
    "format": "panduan",
    "summary": "Pelajari melaporkan akun palsu dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 18,
    "mood": "creative",
    "symbol": "✦",
    "steps": [
      [
        "Kenali risiko",
        "Perhatikan risiko yang berkaitan dengan melaporkan akun palsu. Jangan membagikan data sensitif saat memeriksa pengaturan."
      ],
      [
        "Periksa sumber",
        "Gunakan menu resmi atau dokumentasi tepercaya. Waspadai pesan mendesak yang meminta kode, kata sandi, atau pembayaran."
      ],
      [
        "Pilih perlindungan",
        "Aktifkan fitur keamanan yang sesuai dan gunakan pengaturan privasi paling masuk akal untuk kebutuhanmu."
      ],
      [
        "Verifikasi perubahan",
        "Periksa apakah pengaturan benar-benar tersimpan dan lihat daftar perangkat atau aplikasi yang memiliki akses."
      ],
      [
        "Siapkan pemulihan",
        "Pastikan kamu tahu cara memulihkan akun atau melaporkan masalah melalui saluran resmi."
      ],
      [
        "Biasakan pemeriksaan",
        "Lakukan pemeriksaan berkala dan perbarui pengaturan saat kebutuhan berubah. Jangan pernah membagikan kode verifikasi kepada orang lain."
      ]
    ],
    "takeaways": [
      "Tujuan melaporkan akun palsu perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan melaporkan akun palsu pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "safety",
      "panduan",
      "medium",
      "melaporkan"
    ]
  },
  {
    "id": 254,
    "category": "safety",
    "categoryName": "Keamanan Digital",
    "emoji": "盾",
    "art": "art-safety",
    "title": "Workflow praktis: Berkomunikasi aman di internet",
    "topic": "Berkomunikasi aman di internet",
    "format": "workflow",
    "summary": "Bangun alur kerja berkomunikasi aman di internet yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 15,
    "mood": "focus",
    "symbol": "◈",
    "steps": [
      [
        "Kenali risiko",
        "Perhatikan risiko yang berkaitan dengan berkomunikasi aman di internet. Jangan membagikan data sensitif saat memeriksa pengaturan."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah berkomunikasi aman di internet dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Pilih perlindungan",
        "Aktifkan fitur keamanan yang sesuai dan gunakan pengaturan privasi paling masuk akal untuk kebutuhanmu."
      ],
      [
        "Verifikasi perubahan",
        "Periksa apakah pengaturan benar-benar tersimpan dan lihat daftar perangkat atau aplikasi yang memiliki akses."
      ],
      [
        "Siapkan pemulihan",
        "Pastikan kamu tahu cara memulihkan akun atau melaporkan masalah melalui saluran resmi."
      ],
      [
        "Biasakan pemeriksaan",
        "Lakukan pemeriksaan berkala dan perbarui pengaturan saat kebutuhan berubah. Jangan pernah membagikan kode verifikasi kepada orang lain."
      ]
    ],
    "takeaways": [
      "Tujuan berkomunikasi aman di internet perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan berkomunikasi aman di internet pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "safety",
      "workflow",
      "beginner",
      "berkomunikasi"
    ]
  },
  {
    "id": 255,
    "category": "safety",
    "categoryName": "Keamanan Digital",
    "emoji": "盾",
    "art": "art-safety",
    "title": "Workflow praktis: Memeriksa sumber informasi",
    "topic": "Memeriksa sumber informasi",
    "format": "workflow",
    "summary": "Bangun alur kerja memeriksa sumber informasi yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 21,
    "mood": "creative",
    "symbol": "◎",
    "steps": [
      [
        "Kenali risiko",
        "Perhatikan risiko yang berkaitan dengan memeriksa sumber informasi. Jangan membagikan data sensitif saat memeriksa pengaturan."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah memeriksa sumber informasi dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Pilih perlindungan",
        "Aktifkan fitur keamanan yang sesuai dan gunakan pengaturan privasi paling masuk akal untuk kebutuhanmu."
      ],
      [
        "Verifikasi perubahan",
        "Periksa apakah pengaturan benar-benar tersimpan dan lihat daftar perangkat atau aplikasi yang memiliki akses."
      ],
      [
        "Siapkan pemulihan",
        "Pastikan kamu tahu cara memulihkan akun atau melaporkan masalah melalui saluran resmi."
      ],
      [
        "Biasakan pemeriksaan",
        "Lakukan pemeriksaan berkala dan perbarui pengaturan saat kebutuhan berubah. Jangan pernah membagikan kode verifikasi kepada orang lain."
      ]
    ],
    "takeaways": [
      "Tujuan memeriksa sumber informasi perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan memeriksa sumber informasi pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "safety",
      "workflow",
      "medium",
      "memeriksa"
    ]
  },
  {
    "id": 256,
    "category": "safety",
    "categoryName": "Keamanan Digital",
    "emoji": "盾",
    "art": "art-safety",
    "title": "Workflow praktis: Membuat passphrase mudah diingat",
    "topic": "Membuat passphrase mudah diingat",
    "format": "workflow",
    "summary": "Bangun alur kerja membuat passphrase mudah diingat yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 28,
    "mood": "calm",
    "symbol": "〰",
    "steps": [
      [
        "Kenali risiko",
        "Perhatikan risiko yang berkaitan dengan membuat passphrase mudah diingat. Jangan membagikan data sensitif saat memeriksa pengaturan."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah membuat passphrase mudah diingat dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Pilih perlindungan",
        "Aktifkan fitur keamanan yang sesuai dan gunakan pengaturan privasi paling masuk akal untuk kebutuhanmu."
      ],
      [
        "Verifikasi perubahan",
        "Periksa apakah pengaturan benar-benar tersimpan dan lihat daftar perangkat atau aplikasi yang memiliki akses."
      ],
      [
        "Siapkan pemulihan",
        "Pastikan kamu tahu cara memulihkan akun atau melaporkan masalah melalui saluran resmi."
      ],
      [
        "Biasakan pemeriksaan",
        "Lakukan pemeriksaan berkala dan perbarui pengaturan saat kebutuhan berubah. Jangan pernah membagikan kode verifikasi kepada orang lain."
      ]
    ],
    "takeaways": [
      "Tujuan membuat passphrase mudah diingat perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat passphrase mudah diingat pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "safety",
      "workflow",
      "advanced",
      "membuat"
    ]
  },
  {
    "id": 257,
    "category": "safety",
    "categoryName": "Keamanan Digital",
    "emoji": "盾",
    "art": "art-safety",
    "title": "Panduan langkah demi langkah: Mengecek perangkat yang login",
    "topic": "Mengecek perangkat yang login",
    "format": "panduan",
    "summary": "Pelajari mengecek perangkat yang login dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 12,
    "mood": "focus",
    "symbol": "✧",
    "steps": [
      [
        "Kenali risiko",
        "Perhatikan risiko yang berkaitan dengan mengecek perangkat yang login. Jangan membagikan data sensitif saat memeriksa pengaturan."
      ],
      [
        "Periksa sumber",
        "Gunakan menu resmi atau dokumentasi tepercaya. Waspadai pesan mendesak yang meminta kode, kata sandi, atau pembayaran."
      ],
      [
        "Pilih perlindungan",
        "Aktifkan fitur keamanan yang sesuai dan gunakan pengaturan privasi paling masuk akal untuk kebutuhanmu."
      ],
      [
        "Verifikasi perubahan",
        "Periksa apakah pengaturan benar-benar tersimpan dan lihat daftar perangkat atau aplikasi yang memiliki akses."
      ],
      [
        "Siapkan pemulihan",
        "Pastikan kamu tahu cara memulihkan akun atau melaporkan masalah melalui saluran resmi."
      ],
      [
        "Biasakan pemeriksaan",
        "Lakukan pemeriksaan berkala dan perbarui pengaturan saat kebutuhan berubah. Jangan pernah membagikan kode verifikasi kepada orang lain."
      ]
    ],
    "takeaways": [
      "Tujuan mengecek perangkat yang login perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mengecek perangkat yang login pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "safety",
      "panduan",
      "beginner",
      "mengecek"
    ]
  },
  {
    "id": 258,
    "category": "safety",
    "categoryName": "Keamanan Digital",
    "emoji": "盾",
    "art": "art-safety",
    "title": "Workflow praktis: Mengenali social engineering",
    "topic": "Mengenali social engineering",
    "format": "workflow",
    "summary": "Bangun alur kerja mengenali social engineering yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 28,
    "mood": "calm",
    "symbol": "↗",
    "steps": [
      [
        "Kenali risiko",
        "Perhatikan risiko yang berkaitan dengan mengenali social engineering. Jangan membagikan data sensitif saat memeriksa pengaturan."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah mengenali social engineering dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Pilih perlindungan",
        "Aktifkan fitur keamanan yang sesuai dan gunakan pengaturan privasi paling masuk akal untuk kebutuhanmu."
      ],
      [
        "Verifikasi perubahan",
        "Periksa apakah pengaturan benar-benar tersimpan dan lihat daftar perangkat atau aplikasi yang memiliki akses."
      ],
      [
        "Siapkan pemulihan",
        "Pastikan kamu tahu cara memulihkan akun atau melaporkan masalah melalui saluran resmi."
      ],
      [
        "Biasakan pemeriksaan",
        "Lakukan pemeriksaan berkala dan perbarui pengaturan saat kebutuhan berubah. Jangan pernah membagikan kode verifikasi kepada orang lain."
      ]
    ],
    "takeaways": [
      "Tujuan mengenali social engineering perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mengenali social engineering pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "safety",
      "workflow",
      "advanced",
      "mengenali"
    ]
  },
  {
    "id": 259,
    "category": "safety",
    "categoryName": "Keamanan Digital",
    "emoji": "盾",
    "art": "art-safety",
    "title": "Latihan mandiri: Mengatur visibilitas profil",
    "topic": "Mengatur visibilitas profil",
    "format": "latihan",
    "summary": "Latihan terarah untuk menerapkan mengatur visibilitas profil sambil mengecek pemahamanmu sendiri.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 24,
    "mood": "creative",
    "symbol": "✧",
    "steps": [
      [
        "Tantangan mini",
        "Coba lakukan mengatur visibilitas profil dalam skala kecil selama 10–15 menit. Tuliskan hasil yang ingin kamu capai sebelum mulai."
      ],
      [
        "Periksa sumber",
        "Gunakan menu resmi atau dokumentasi tepercaya. Waspadai pesan mendesak yang meminta kode, kata sandi, atau pembayaran."
      ],
      [
        "Pilih perlindungan",
        "Aktifkan fitur keamanan yang sesuai dan gunakan pengaturan privasi paling masuk akal untuk kebutuhanmu."
      ],
      [
        "Verifikasi perubahan",
        "Periksa apakah pengaturan benar-benar tersimpan dan lihat daftar perangkat atau aplikasi yang memiliki akses."
      ],
      [
        "Siapkan pemulihan",
        "Pastikan kamu tahu cara memulihkan akun atau melaporkan masalah melalui saluran resmi."
      ],
      [
        "Biasakan pemeriksaan",
        "Lakukan pemeriksaan berkala dan perbarui pengaturan saat kebutuhan berubah. Jangan pernah membagikan kode verifikasi kepada orang lain."
      ]
    ],
    "takeaways": [
      "Tujuan mengatur visibilitas profil perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mengatur visibilitas profil pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "safety",
      "latihan",
      "medium",
      "mengatur"
    ]
  },
  {
    "id": 260,
    "category": "safety",
    "categoryName": "Keamanan Digital",
    "emoji": "盾",
    "art": "art-safety",
    "title": "Panduan langkah demi langkah: Memeriksa keamanan unduhan",
    "topic": "Memeriksa keamanan unduhan",
    "format": "panduan",
    "summary": "Pelajari memeriksa keamanan unduhan dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 18,
    "mood": "creative",
    "symbol": "✦",
    "steps": [
      [
        "Kenali risiko",
        "Perhatikan risiko yang berkaitan dengan memeriksa keamanan unduhan. Jangan membagikan data sensitif saat memeriksa pengaturan."
      ],
      [
        "Periksa sumber",
        "Gunakan menu resmi atau dokumentasi tepercaya. Waspadai pesan mendesak yang meminta kode, kata sandi, atau pembayaran."
      ],
      [
        "Pilih perlindungan",
        "Aktifkan fitur keamanan yang sesuai dan gunakan pengaturan privasi paling masuk akal untuk kebutuhanmu."
      ],
      [
        "Verifikasi perubahan",
        "Periksa apakah pengaturan benar-benar tersimpan dan lihat daftar perangkat atau aplikasi yang memiliki akses."
      ],
      [
        "Siapkan pemulihan",
        "Pastikan kamu tahu cara memulihkan akun atau melaporkan masalah melalui saluran resmi."
      ],
      [
        "Biasakan pemeriksaan",
        "Lakukan pemeriksaan berkala dan perbarui pengaturan saat kebutuhan berubah. Jangan pernah membagikan kode verifikasi kepada orang lain."
      ]
    ],
    "takeaways": [
      "Tujuan memeriksa keamanan unduhan perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan memeriksa keamanan unduhan pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "safety",
      "panduan",
      "medium",
      "memeriksa"
    ]
  },
  {
    "id": 261,
    "category": "safety",
    "categoryName": "Keamanan Digital",
    "emoji": "盾",
    "art": "art-safety",
    "title": "Proyek mini: Membatasi informasi publik",
    "topic": "Membatasi informasi publik",
    "format": "proyek",
    "summary": "Proyek mini yang membantumu mempraktikkan membatasi informasi publik dari perencanaan sampai evaluasi.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 15,
    "mood": "focus",
    "symbol": "◈",
    "steps": [
      [
        "Ruang lingkup proyek",
        "Tentukan hasil mini dari membatasi informasi publik yang bisa selesai dalam satu sesi. Batasi fitur agar proyek tetap realistis."
      ],
      [
        "Periksa sumber",
        "Gunakan menu resmi atau dokumentasi tepercaya. Waspadai pesan mendesak yang meminta kode, kata sandi, atau pembayaran."
      ],
      [
        "Pilih perlindungan",
        "Aktifkan fitur keamanan yang sesuai dan gunakan pengaturan privasi paling masuk akal untuk kebutuhanmu."
      ],
      [
        "Verifikasi perubahan",
        "Periksa apakah pengaturan benar-benar tersimpan dan lihat daftar perangkat atau aplikasi yang memiliki akses."
      ],
      [
        "Siapkan pemulihan",
        "Pastikan kamu tahu cara memulihkan akun atau melaporkan masalah melalui saluran resmi."
      ],
      [
        "Biasakan pemeriksaan",
        "Lakukan pemeriksaan berkala dan perbarui pengaturan saat kebutuhan berubah. Jangan pernah membagikan kode verifikasi kepada orang lain."
      ]
    ],
    "takeaways": [
      "Tujuan membatasi informasi publik perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membatasi informasi publik pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "safety",
      "proyek",
      "beginner",
      "membatasi"
    ]
  },
  {
    "id": 262,
    "category": "safety",
    "categoryName": "Keamanan Digital",
    "emoji": "盾",
    "art": "art-safety",
    "title": "Panduan langkah demi langkah: Mengenali pesan manipulatif",
    "topic": "Mengenali pesan manipulatif",
    "format": "panduan",
    "summary": "Pelajari mengenali pesan manipulatif dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 18,
    "mood": "creative",
    "symbol": "✦",
    "steps": [
      [
        "Kenali risiko",
        "Perhatikan risiko yang berkaitan dengan mengenali pesan manipulatif. Jangan membagikan data sensitif saat memeriksa pengaturan."
      ],
      [
        "Periksa sumber",
        "Gunakan menu resmi atau dokumentasi tepercaya. Waspadai pesan mendesak yang meminta kode, kata sandi, atau pembayaran."
      ],
      [
        "Pilih perlindungan",
        "Aktifkan fitur keamanan yang sesuai dan gunakan pengaturan privasi paling masuk akal untuk kebutuhanmu."
      ],
      [
        "Verifikasi perubahan",
        "Periksa apakah pengaturan benar-benar tersimpan dan lihat daftar perangkat atau aplikasi yang memiliki akses."
      ],
      [
        "Siapkan pemulihan",
        "Pastikan kamu tahu cara memulihkan akun atau melaporkan masalah melalui saluran resmi."
      ],
      [
        "Biasakan pemeriksaan",
        "Lakukan pemeriksaan berkala dan perbarui pengaturan saat kebutuhan berubah. Jangan pernah membagikan kode verifikasi kepada orang lain."
      ]
    ],
    "takeaways": [
      "Tujuan mengenali pesan manipulatif perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mengenali pesan manipulatif pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "safety",
      "panduan",
      "medium",
      "mengenali"
    ]
  },
  {
    "id": 263,
    "category": "safety",
    "categoryName": "Keamanan Digital",
    "emoji": "盾",
    "art": "art-safety",
    "title": "Panduan langkah demi langkah: Mengatur izin kamera",
    "topic": "Mengatur izin kamera",
    "format": "panduan",
    "summary": "Pelajari mengatur izin kamera dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 25,
    "mood": "calm",
    "symbol": "▤",
    "steps": [
      [
        "Kenali risiko",
        "Perhatikan risiko yang berkaitan dengan mengatur izin kamera. Jangan membagikan data sensitif saat memeriksa pengaturan."
      ],
      [
        "Periksa sumber",
        "Gunakan menu resmi atau dokumentasi tepercaya. Waspadai pesan mendesak yang meminta kode, kata sandi, atau pembayaran."
      ],
      [
        "Pilih perlindungan",
        "Aktifkan fitur keamanan yang sesuai dan gunakan pengaturan privasi paling masuk akal untuk kebutuhanmu."
      ],
      [
        "Verifikasi perubahan",
        "Periksa apakah pengaturan benar-benar tersimpan dan lihat daftar perangkat atau aplikasi yang memiliki akses."
      ],
      [
        "Siapkan pemulihan",
        "Pastikan kamu tahu cara memulihkan akun atau melaporkan masalah melalui saluran resmi."
      ],
      [
        "Biasakan pemeriksaan",
        "Lakukan pemeriksaan berkala dan perbarui pengaturan saat kebutuhan berubah. Jangan pernah membagikan kode verifikasi kepada orang lain."
      ]
    ],
    "takeaways": [
      "Tujuan mengatur izin kamera perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mengatur izin kamera pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "safety",
      "panduan",
      "advanced",
      "mengatur"
    ]
  },
  {
    "id": 264,
    "category": "safety",
    "categoryName": "Keamanan Digital",
    "emoji": "盾",
    "art": "art-safety",
    "title": "Panduan langkah demi langkah: Membuat kebiasaan logout",
    "topic": "Membuat kebiasaan logout",
    "format": "panduan",
    "summary": "Pelajari membuat kebiasaan logout dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 18,
    "mood": "creative",
    "symbol": "◎",
    "steps": [
      [
        "Kenali risiko",
        "Perhatikan risiko yang berkaitan dengan membuat kebiasaan logout. Jangan membagikan data sensitif saat memeriksa pengaturan."
      ],
      [
        "Periksa sumber",
        "Gunakan menu resmi atau dokumentasi tepercaya. Waspadai pesan mendesak yang meminta kode, kata sandi, atau pembayaran."
      ],
      [
        "Pilih perlindungan",
        "Aktifkan fitur keamanan yang sesuai dan gunakan pengaturan privasi paling masuk akal untuk kebutuhanmu."
      ],
      [
        "Verifikasi perubahan",
        "Periksa apakah pengaturan benar-benar tersimpan dan lihat daftar perangkat atau aplikasi yang memiliki akses."
      ],
      [
        "Siapkan pemulihan",
        "Pastikan kamu tahu cara memulihkan akun atau melaporkan masalah melalui saluran resmi."
      ],
      [
        "Biasakan pemeriksaan",
        "Lakukan pemeriksaan berkala dan perbarui pengaturan saat kebutuhan berubah. Jangan pernah membagikan kode verifikasi kepada orang lain."
      ]
    ],
    "takeaways": [
      "Tujuan membuat kebiasaan logout perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat kebiasaan logout pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "safety",
      "panduan",
      "medium",
      "membuat"
    ]
  },
  {
    "id": 265,
    "category": "safety",
    "categoryName": "Keamanan Digital",
    "emoji": "盾",
    "art": "art-safety",
    "title": "Workflow praktis: Memeriksa alamat situs",
    "topic": "Memeriksa alamat situs",
    "format": "workflow",
    "summary": "Bangun alur kerja memeriksa alamat situs yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 15,
    "mood": "focus",
    "symbol": "▤",
    "steps": [
      [
        "Kenali risiko",
        "Perhatikan risiko yang berkaitan dengan memeriksa alamat situs. Jangan membagikan data sensitif saat memeriksa pengaturan."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah memeriksa alamat situs dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Pilih perlindungan",
        "Aktifkan fitur keamanan yang sesuai dan gunakan pengaturan privasi paling masuk akal untuk kebutuhanmu."
      ],
      [
        "Verifikasi perubahan",
        "Periksa apakah pengaturan benar-benar tersimpan dan lihat daftar perangkat atau aplikasi yang memiliki akses."
      ],
      [
        "Siapkan pemulihan",
        "Pastikan kamu tahu cara memulihkan akun atau melaporkan masalah melalui saluran resmi."
      ],
      [
        "Biasakan pemeriksaan",
        "Lakukan pemeriksaan berkala dan perbarui pengaturan saat kebutuhan berubah. Jangan pernah membagikan kode verifikasi kepada orang lain."
      ]
    ],
    "takeaways": [
      "Tujuan memeriksa alamat situs perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan memeriksa alamat situs pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "safety",
      "workflow",
      "beginner",
      "memeriksa"
    ]
  },
  {
    "id": 266,
    "category": "safety",
    "categoryName": "Keamanan Digital",
    "emoji": "盾",
    "art": "art-safety",
    "title": "Panduan langkah demi langkah: Mengelola password manager",
    "topic": "Mengelola password manager",
    "format": "panduan",
    "summary": "Pelajari mengelola password manager dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 12,
    "mood": "focus",
    "symbol": "✧",
    "steps": [
      [
        "Kenali risiko",
        "Perhatikan risiko yang berkaitan dengan mengelola password manager. Jangan membagikan data sensitif saat memeriksa pengaturan."
      ],
      [
        "Periksa sumber",
        "Gunakan menu resmi atau dokumentasi tepercaya. Waspadai pesan mendesak yang meminta kode, kata sandi, atau pembayaran."
      ],
      [
        "Pilih perlindungan",
        "Aktifkan fitur keamanan yang sesuai dan gunakan pengaturan privasi paling masuk akal untuk kebutuhanmu."
      ],
      [
        "Verifikasi perubahan",
        "Periksa apakah pengaturan benar-benar tersimpan dan lihat daftar perangkat atau aplikasi yang memiliki akses."
      ],
      [
        "Siapkan pemulihan",
        "Pastikan kamu tahu cara memulihkan akun atau melaporkan masalah melalui saluran resmi."
      ],
      [
        "Biasakan pemeriksaan",
        "Lakukan pemeriksaan berkala dan perbarui pengaturan saat kebutuhan berubah. Jangan pernah membagikan kode verifikasi kepada orang lain."
      ]
    ],
    "takeaways": [
      "Tujuan mengelola password manager perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mengelola password manager pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "safety",
      "panduan",
      "beginner",
      "mengelola"
    ]
  },
  {
    "id": 267,
    "category": "safety",
    "categoryName": "Keamanan Digital",
    "emoji": "盾",
    "art": "art-safety",
    "title": "Workflow praktis: Menghindari jaringan publik berisiko",
    "topic": "Menghindari jaringan publik berisiko",
    "format": "workflow",
    "summary": "Bangun alur kerja menghindari jaringan publik berisiko yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 28,
    "mood": "calm",
    "symbol": "↗",
    "steps": [
      [
        "Kenali risiko",
        "Perhatikan risiko yang berkaitan dengan menghindari jaringan publik berisiko. Jangan membagikan data sensitif saat memeriksa pengaturan."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah menghindari jaringan publik berisiko dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Pilih perlindungan",
        "Aktifkan fitur keamanan yang sesuai dan gunakan pengaturan privasi paling masuk akal untuk kebutuhanmu."
      ],
      [
        "Verifikasi perubahan",
        "Periksa apakah pengaturan benar-benar tersimpan dan lihat daftar perangkat atau aplikasi yang memiliki akses."
      ],
      [
        "Siapkan pemulihan",
        "Pastikan kamu tahu cara memulihkan akun atau melaporkan masalah melalui saluran resmi."
      ],
      [
        "Biasakan pemeriksaan",
        "Lakukan pemeriksaan berkala dan perbarui pengaturan saat kebutuhan berubah. Jangan pernah membagikan kode verifikasi kepada orang lain."
      ]
    ],
    "takeaways": [
      "Tujuan menghindari jaringan publik berisiko perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan menghindari jaringan publik berisiko pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "safety",
      "workflow",
      "advanced",
      "menghindari"
    ]
  },
  {
    "id": 268,
    "category": "safety",
    "categoryName": "Keamanan Digital",
    "emoji": "盾",
    "art": "art-safety",
    "title": "Workflow praktis: Mengenali berita palsu",
    "topic": "Mengenali berita palsu",
    "format": "workflow",
    "summary": "Bangun alur kerja mengenali berita palsu yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 21,
    "mood": "creative",
    "symbol": "✧",
    "steps": [
      [
        "Kenali risiko",
        "Perhatikan risiko yang berkaitan dengan mengenali berita palsu. Jangan membagikan data sensitif saat memeriksa pengaturan."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah mengenali berita palsu dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Pilih perlindungan",
        "Aktifkan fitur keamanan yang sesuai dan gunakan pengaturan privasi paling masuk akal untuk kebutuhanmu."
      ],
      [
        "Verifikasi perubahan",
        "Periksa apakah pengaturan benar-benar tersimpan dan lihat daftar perangkat atau aplikasi yang memiliki akses."
      ],
      [
        "Siapkan pemulihan",
        "Pastikan kamu tahu cara memulihkan akun atau melaporkan masalah melalui saluran resmi."
      ],
      [
        "Biasakan pemeriksaan",
        "Lakukan pemeriksaan berkala dan perbarui pengaturan saat kebutuhan berubah. Jangan pernah membagikan kode verifikasi kepada orang lain."
      ]
    ],
    "takeaways": [
      "Tujuan mengenali berita palsu perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mengenali berita palsu pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "safety",
      "workflow",
      "medium",
      "mengenali"
    ]
  },
  {
    "id": 269,
    "category": "safety",
    "categoryName": "Keamanan Digital",
    "emoji": "盾",
    "art": "art-safety",
    "title": "Workflow praktis: Mengatur komentar media sosial",
    "topic": "Mengatur komentar media sosial",
    "format": "workflow",
    "summary": "Bangun alur kerja mengatur komentar media sosial yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 28,
    "mood": "calm",
    "symbol": "✦",
    "steps": [
      [
        "Kenali risiko",
        "Perhatikan risiko yang berkaitan dengan mengatur komentar media sosial. Jangan membagikan data sensitif saat memeriksa pengaturan."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah mengatur komentar media sosial dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Pilih perlindungan",
        "Aktifkan fitur keamanan yang sesuai dan gunakan pengaturan privasi paling masuk akal untuk kebutuhanmu."
      ],
      [
        "Verifikasi perubahan",
        "Periksa apakah pengaturan benar-benar tersimpan dan lihat daftar perangkat atau aplikasi yang memiliki akses."
      ],
      [
        "Siapkan pemulihan",
        "Pastikan kamu tahu cara memulihkan akun atau melaporkan masalah melalui saluran resmi."
      ],
      [
        "Biasakan pemeriksaan",
        "Lakukan pemeriksaan berkala dan perbarui pengaturan saat kebutuhan berubah. Jangan pernah membagikan kode verifikasi kepada orang lain."
      ]
    ],
    "takeaways": [
      "Tujuan mengatur komentar media sosial perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mengatur komentar media sosial pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "safety",
      "workflow",
      "advanced",
      "mengatur"
    ]
  },
  {
    "id": 270,
    "category": "safety",
    "categoryName": "Keamanan Digital",
    "emoji": "盾",
    "art": "art-safety",
    "title": "Latihan mandiri: Membuat checklist keamanan",
    "topic": "Membuat checklist keamanan",
    "format": "latihan",
    "summary": "Latihan terarah untuk menerapkan membuat checklist keamanan sambil mengecek pemahamanmu sendiri.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 24,
    "mood": "creative",
    "symbol": "◈",
    "steps": [
      [
        "Tantangan mini",
        "Coba lakukan membuat checklist keamanan dalam skala kecil selama 10–15 menit. Tuliskan hasil yang ingin kamu capai sebelum mulai."
      ],
      [
        "Periksa sumber",
        "Gunakan menu resmi atau dokumentasi tepercaya. Waspadai pesan mendesak yang meminta kode, kata sandi, atau pembayaran."
      ],
      [
        "Pilih perlindungan",
        "Aktifkan fitur keamanan yang sesuai dan gunakan pengaturan privasi paling masuk akal untuk kebutuhanmu."
      ],
      [
        "Verifikasi perubahan",
        "Periksa apakah pengaturan benar-benar tersimpan dan lihat daftar perangkat atau aplikasi yang memiliki akses."
      ],
      [
        "Siapkan pemulihan",
        "Pastikan kamu tahu cara memulihkan akun atau melaporkan masalah melalui saluran resmi."
      ],
      [
        "Biasakan pemeriksaan",
        "Lakukan pemeriksaan berkala dan perbarui pengaturan saat kebutuhan berubah. Jangan pernah membagikan kode verifikasi kepada orang lain."
      ]
    ],
    "takeaways": [
      "Tujuan membuat checklist keamanan perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat checklist keamanan pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "safety",
      "latihan",
      "medium",
      "membuat"
    ]
  },
  {
    "id": 271,
    "category": "digital",
    "categoryName": "Tools Digital",
    "emoji": "◎",
    "art": "art-digital",
    "title": "Panduan langkah demi langkah: Membuat dokumen kolaboratif",
    "topic": "Membuat dokumen kolaboratif",
    "format": "panduan",
    "summary": "Pelajari membuat dokumen kolaboratif dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 12,
    "mood": "focus",
    "symbol": "⌘",
    "steps": [
      [
        "Buat bahan kerja",
        "Buka aplikasi yang sesuai untuk membuat dokumen kolaboratif dan buat salinan kerja agar dokumen asli tetap aman."
      ],
      [
        "Susun struktur",
        "Gunakan judul, nama kolom, folder, atau bagian yang konsisten. Struktur yang jelas memudahkan pencarian dan kolaborasi."
      ],
      [
        "Gunakan fitur inti",
        "Kerjakan satu alur utama terlebih dahulu. Periksa apakah fitur yang dipakai menghasilkan output sesuai tujuan."
      ],
      [
        "Periksa akses dan format",
        "Pastikan orang yang membutuhkan akses dapat membuka file dan formatnya cocok untuk dibagikan."
      ],
      [
        "Uji dari sudut pandang lain",
        "Buka hasil dalam tampilan berbeda atau minta rekan memeriksa apakah instruksi dan informasi mudah dipahami."
      ],
      [
        "Rapikan dan arsipkan",
        "Beri nama file yang jelas, simpan di folder yang tepat, dan catat versi akhir agar tidak tertukar dengan draf lama."
      ]
    ],
    "takeaways": [
      "Tujuan membuat dokumen kolaboratif perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat dokumen kolaboratif pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "digital",
      "panduan",
      "beginner",
      "membuat"
    ]
  },
  {
    "id": 272,
    "category": "digital",
    "categoryName": "Tools Digital",
    "emoji": "◎",
    "art": "art-digital",
    "title": "Workflow praktis: Menyusun spreadsheet dasar",
    "topic": "Menyusun spreadsheet dasar",
    "format": "workflow",
    "summary": "Bangun alur kerja menyusun spreadsheet dasar yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 28,
    "mood": "calm",
    "symbol": "〰",
    "steps": [
      [
        "Buat bahan kerja",
        "Buka aplikasi yang sesuai untuk menyusun spreadsheet dasar dan buat salinan kerja agar dokumen asli tetap aman."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah menyusun spreadsheet dasar dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Gunakan fitur inti",
        "Kerjakan satu alur utama terlebih dahulu. Periksa apakah fitur yang dipakai menghasilkan output sesuai tujuan."
      ],
      [
        "Periksa akses dan format",
        "Pastikan orang yang membutuhkan akses dapat membuka file dan formatnya cocok untuk dibagikan."
      ],
      [
        "Uji dari sudut pandang lain",
        "Buka hasil dalam tampilan berbeda atau minta rekan memeriksa apakah instruksi dan informasi mudah dipahami."
      ],
      [
        "Rapikan dan arsipkan",
        "Beri nama file yang jelas, simpan di folder yang tepat, dan catat versi akhir agar tidak tertukar dengan draf lama."
      ]
    ],
    "takeaways": [
      "Tujuan menyusun spreadsheet dasar perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan menyusun spreadsheet dasar pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "digital",
      "workflow",
      "advanced",
      "menyusun"
    ]
  },
  {
    "id": 273,
    "category": "digital",
    "categoryName": "Tools Digital",
    "emoji": "◎",
    "art": "art-digital",
    "title": "Workflow praktis: Menggunakan filter tabel",
    "topic": "Menggunakan filter tabel",
    "format": "workflow",
    "summary": "Bangun alur kerja menggunakan filter tabel yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 15,
    "mood": "focus",
    "symbol": "✧",
    "steps": [
      [
        "Buat bahan kerja",
        "Buka aplikasi yang sesuai untuk menggunakan filter tabel dan buat salinan kerja agar dokumen asli tetap aman."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah menggunakan filter tabel dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Gunakan fitur inti",
        "Kerjakan satu alur utama terlebih dahulu. Periksa apakah fitur yang dipakai menghasilkan output sesuai tujuan."
      ],
      [
        "Periksa akses dan format",
        "Pastikan orang yang membutuhkan akses dapat membuka file dan formatnya cocok untuk dibagikan."
      ],
      [
        "Uji dari sudut pandang lain",
        "Buka hasil dalam tampilan berbeda atau minta rekan memeriksa apakah instruksi dan informasi mudah dipahami."
      ],
      [
        "Rapikan dan arsipkan",
        "Beri nama file yang jelas, simpan di folder yang tepat, dan catat versi akhir agar tidak tertukar dengan draf lama."
      ]
    ],
    "takeaways": [
      "Tujuan menggunakan filter tabel perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan menggunakan filter tabel pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "digital",
      "workflow",
      "beginner",
      "menggunakan"
    ]
  },
  {
    "id": 274,
    "category": "digital",
    "categoryName": "Tools Digital",
    "emoji": "◎",
    "art": "art-digital",
    "title": "Workflow praktis: Mengatur folder cloud",
    "topic": "Mengatur folder cloud",
    "format": "workflow",
    "summary": "Bangun alur kerja mengatur folder cloud yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 28,
    "mood": "calm",
    "symbol": "↗",
    "steps": [
      [
        "Buat bahan kerja",
        "Buka aplikasi yang sesuai untuk mengatur folder cloud dan buat salinan kerja agar dokumen asli tetap aman."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah mengatur folder cloud dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Gunakan fitur inti",
        "Kerjakan satu alur utama terlebih dahulu. Periksa apakah fitur yang dipakai menghasilkan output sesuai tujuan."
      ],
      [
        "Periksa akses dan format",
        "Pastikan orang yang membutuhkan akses dapat membuka file dan formatnya cocok untuk dibagikan."
      ],
      [
        "Uji dari sudut pandang lain",
        "Buka hasil dalam tampilan berbeda atau minta rekan memeriksa apakah instruksi dan informasi mudah dipahami."
      ],
      [
        "Rapikan dan arsipkan",
        "Beri nama file yang jelas, simpan di folder yang tepat, dan catat versi akhir agar tidak tertukar dengan draf lama."
      ]
    ],
    "takeaways": [
      "Tujuan mengatur folder cloud perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mengatur folder cloud pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "digital",
      "workflow",
      "advanced",
      "mengatur"
    ]
  },
  {
    "id": 275,
    "category": "digital",
    "categoryName": "Tools Digital",
    "emoji": "◎",
    "art": "art-digital",
    "title": "Checklist penerapan: Membuat formulir online",
    "topic": "Membuat formulir online",
    "format": "checklist",
    "summary": "Daftar periksa untuk menerapkan membuat formulir online tanpa melewatkan hal penting.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 25,
    "mood": "calm",
    "symbol": "✧",
    "steps": [
      [
        "Periksa kesiapan",
        "Pastikan tujuan membuat formulir online jelas dan semua bahan penting tersedia."
      ],
      [
        "Susun struktur",
        "Gunakan judul, nama kolom, folder, atau bagian yang konsisten. Struktur yang jelas memudahkan pencarian dan kolaborasi."
      ],
      [
        "Gunakan fitur inti",
        "Kerjakan satu alur utama terlebih dahulu. Periksa apakah fitur yang dipakai menghasilkan output sesuai tujuan."
      ],
      [
        "Periksa akses dan format",
        "Pastikan orang yang membutuhkan akses dapat membuka file dan formatnya cocok untuk dibagikan."
      ],
      [
        "Uji dari sudut pandang lain",
        "Buka hasil dalam tampilan berbeda atau minta rekan memeriksa apakah instruksi dan informasi mudah dipahami."
      ],
      [
        "Rapikan dan arsipkan",
        "Beri nama file yang jelas, simpan di folder yang tepat, dan catat versi akhir agar tidak tertukar dengan draf lama."
      ]
    ],
    "takeaways": [
      "Tujuan membuat formulir online perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat formulir online pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "digital",
      "checklist",
      "advanced",
      "membuat"
    ]
  },
  {
    "id": 276,
    "category": "digital",
    "categoryName": "Tools Digital",
    "emoji": "◎",
    "art": "art-digital",
    "title": "Workflow praktis: Membuat kalender bersama",
    "topic": "Membuat kalender bersama",
    "format": "workflow",
    "summary": "Bangun alur kerja membuat kalender bersama yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 21,
    "mood": "creative",
    "symbol": "◎",
    "steps": [
      [
        "Buat bahan kerja",
        "Buka aplikasi yang sesuai untuk membuat kalender bersama dan buat salinan kerja agar dokumen asli tetap aman."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah membuat kalender bersama dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Gunakan fitur inti",
        "Kerjakan satu alur utama terlebih dahulu. Periksa apakah fitur yang dipakai menghasilkan output sesuai tujuan."
      ],
      [
        "Periksa akses dan format",
        "Pastikan orang yang membutuhkan akses dapat membuka file dan formatnya cocok untuk dibagikan."
      ],
      [
        "Uji dari sudut pandang lain",
        "Buka hasil dalam tampilan berbeda atau minta rekan memeriksa apakah instruksi dan informasi mudah dipahami."
      ],
      [
        "Rapikan dan arsipkan",
        "Beri nama file yang jelas, simpan di folder yang tepat, dan catat versi akhir agar tidak tertukar dengan draf lama."
      ]
    ],
    "takeaways": [
      "Tujuan membuat kalender bersama perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat kalender bersama pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "digital",
      "workflow",
      "medium",
      "membuat"
    ]
  },
  {
    "id": 277,
    "category": "digital",
    "categoryName": "Tools Digital",
    "emoji": "◎",
    "art": "art-digital",
    "title": "Panduan langkah demi langkah: Menyusun template dokumen",
    "topic": "Menyusun template dokumen",
    "format": "panduan",
    "summary": "Pelajari menyusun template dokumen dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 25,
    "mood": "calm",
    "symbol": "▤",
    "steps": [
      [
        "Buat bahan kerja",
        "Buka aplikasi yang sesuai untuk menyusun template dokumen dan buat salinan kerja agar dokumen asli tetap aman."
      ],
      [
        "Susun struktur",
        "Gunakan judul, nama kolom, folder, atau bagian yang konsisten. Struktur yang jelas memudahkan pencarian dan kolaborasi."
      ],
      [
        "Gunakan fitur inti",
        "Kerjakan satu alur utama terlebih dahulu. Periksa apakah fitur yang dipakai menghasilkan output sesuai tujuan."
      ],
      [
        "Periksa akses dan format",
        "Pastikan orang yang membutuhkan akses dapat membuka file dan formatnya cocok untuk dibagikan."
      ],
      [
        "Uji dari sudut pandang lain",
        "Buka hasil dalam tampilan berbeda atau minta rekan memeriksa apakah instruksi dan informasi mudah dipahami."
      ],
      [
        "Rapikan dan arsipkan",
        "Beri nama file yang jelas, simpan di folder yang tepat, dan catat versi akhir agar tidak tertukar dengan draf lama."
      ]
    ],
    "takeaways": [
      "Tujuan menyusun template dokumen perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan menyusun template dokumen pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "digital",
      "panduan",
      "advanced",
      "menyusun"
    ]
  },
  {
    "id": 278,
    "category": "digital",
    "categoryName": "Tools Digital",
    "emoji": "◎",
    "art": "art-digital",
    "title": "Proyek mini: Mengubah dokumen ke PDF",
    "topic": "Mengubah dokumen ke PDF",
    "format": "proyek",
    "summary": "Proyek mini yang membantumu mempraktikkan mengubah dokumen ke pdf dari perencanaan sampai evaluasi.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 21,
    "mood": "creative",
    "symbol": "◎",
    "steps": [
      [
        "Ruang lingkup proyek",
        "Tentukan hasil mini dari mengubah dokumen ke pdf yang bisa selesai dalam satu sesi. Batasi fitur agar proyek tetap realistis."
      ],
      [
        "Susun struktur",
        "Gunakan judul, nama kolom, folder, atau bagian yang konsisten. Struktur yang jelas memudahkan pencarian dan kolaborasi."
      ],
      [
        "Gunakan fitur inti",
        "Kerjakan satu alur utama terlebih dahulu. Periksa apakah fitur yang dipakai menghasilkan output sesuai tujuan."
      ],
      [
        "Periksa akses dan format",
        "Pastikan orang yang membutuhkan akses dapat membuka file dan formatnya cocok untuk dibagikan."
      ],
      [
        "Uji dari sudut pandang lain",
        "Buka hasil dalam tampilan berbeda atau minta rekan memeriksa apakah instruksi dan informasi mudah dipahami."
      ],
      [
        "Rapikan dan arsipkan",
        "Beri nama file yang jelas, simpan di folder yang tepat, dan catat versi akhir agar tidak tertukar dengan draf lama."
      ]
    ],
    "takeaways": [
      "Tujuan mengubah dokumen ke pdf perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mengubah dokumen ke pdf pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "digital",
      "proyek",
      "medium",
      "mengubah"
    ]
  },
  {
    "id": 279,
    "category": "digital",
    "categoryName": "Tools Digital",
    "emoji": "◎",
    "art": "art-digital",
    "title": "Checklist penerapan: Membuat diagram alur",
    "topic": "Membuat diagram alur",
    "format": "checklist",
    "summary": "Daftar periksa untuk menerapkan membuat diagram alur tanpa melewatkan hal penting.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 18,
    "mood": "creative",
    "symbol": "〰",
    "steps": [
      [
        "Periksa kesiapan",
        "Pastikan tujuan membuat diagram alur jelas dan semua bahan penting tersedia."
      ],
      [
        "Susun struktur",
        "Gunakan judul, nama kolom, folder, atau bagian yang konsisten. Struktur yang jelas memudahkan pencarian dan kolaborasi."
      ],
      [
        "Gunakan fitur inti",
        "Kerjakan satu alur utama terlebih dahulu. Periksa apakah fitur yang dipakai menghasilkan output sesuai tujuan."
      ],
      [
        "Periksa akses dan format",
        "Pastikan orang yang membutuhkan akses dapat membuka file dan formatnya cocok untuk dibagikan."
      ],
      [
        "Uji dari sudut pandang lain",
        "Buka hasil dalam tampilan berbeda atau minta rekan memeriksa apakah instruksi dan informasi mudah dipahami."
      ],
      [
        "Rapikan dan arsipkan",
        "Beri nama file yang jelas, simpan di folder yang tepat, dan catat versi akhir agar tidak tertukar dengan draf lama."
      ]
    ],
    "takeaways": [
      "Tujuan membuat diagram alur perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat diagram alur pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "digital",
      "checklist",
      "medium",
      "membuat"
    ]
  },
  {
    "id": 280,
    "category": "digital",
    "categoryName": "Tools Digital",
    "emoji": "◎",
    "art": "art-digital",
    "title": "Panduan langkah demi langkah: Menggunakan shortcut aplikasi",
    "topic": "Menggunakan shortcut aplikasi",
    "format": "panduan",
    "summary": "Pelajari menggunakan shortcut aplikasi dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 12,
    "mood": "focus",
    "symbol": "⌘",
    "steps": [
      [
        "Buat bahan kerja",
        "Buka aplikasi yang sesuai untuk menggunakan shortcut aplikasi dan buat salinan kerja agar dokumen asli tetap aman."
      ],
      [
        "Susun struktur",
        "Gunakan judul, nama kolom, folder, atau bagian yang konsisten. Struktur yang jelas memudahkan pencarian dan kolaborasi."
      ],
      [
        "Gunakan fitur inti",
        "Kerjakan satu alur utama terlebih dahulu. Periksa apakah fitur yang dipakai menghasilkan output sesuai tujuan."
      ],
      [
        "Periksa akses dan format",
        "Pastikan orang yang membutuhkan akses dapat membuka file dan formatnya cocok untuk dibagikan."
      ],
      [
        "Uji dari sudut pandang lain",
        "Buka hasil dalam tampilan berbeda atau minta rekan memeriksa apakah instruksi dan informasi mudah dipahami."
      ],
      [
        "Rapikan dan arsipkan",
        "Beri nama file yang jelas, simpan di folder yang tepat, dan catat versi akhir agar tidak tertukar dengan draf lama."
      ]
    ],
    "takeaways": [
      "Tujuan menggunakan shortcut aplikasi perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan menggunakan shortcut aplikasi pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "digital",
      "panduan",
      "beginner",
      "menggunakan"
    ]
  },
  {
    "id": 281,
    "category": "digital",
    "categoryName": "Tools Digital",
    "emoji": "◎",
    "art": "art-digital",
    "title": "Panduan langkah demi langkah: Membuat catatan terstruktur",
    "topic": "Membuat catatan terstruktur",
    "format": "panduan",
    "summary": "Pelajari membuat catatan terstruktur dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 25,
    "mood": "calm",
    "symbol": "〰",
    "steps": [
      [
        "Buat bahan kerja",
        "Buka aplikasi yang sesuai untuk membuat catatan terstruktur dan buat salinan kerja agar dokumen asli tetap aman."
      ],
      [
        "Susun struktur",
        "Gunakan judul, nama kolom, folder, atau bagian yang konsisten. Struktur yang jelas memudahkan pencarian dan kolaborasi."
      ],
      [
        "Gunakan fitur inti",
        "Kerjakan satu alur utama terlebih dahulu. Periksa apakah fitur yang dipakai menghasilkan output sesuai tujuan."
      ],
      [
        "Periksa akses dan format",
        "Pastikan orang yang membutuhkan akses dapat membuka file dan formatnya cocok untuk dibagikan."
      ],
      [
        "Uji dari sudut pandang lain",
        "Buka hasil dalam tampilan berbeda atau minta rekan memeriksa apakah instruksi dan informasi mudah dipahami."
      ],
      [
        "Rapikan dan arsipkan",
        "Beri nama file yang jelas, simpan di folder yang tepat, dan catat versi akhir agar tidak tertukar dengan draf lama."
      ]
    ],
    "takeaways": [
      "Tujuan membuat catatan terstruktur perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat catatan terstruktur pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "digital",
      "panduan",
      "advanced",
      "membuat"
    ]
  },
  {
    "id": 282,
    "category": "digital",
    "categoryName": "Tools Digital",
    "emoji": "◎",
    "art": "art-digital",
    "title": "Panduan langkah demi langkah: Mengatur file bersama",
    "topic": "Mengatur file bersama",
    "format": "panduan",
    "summary": "Pelajari mengatur file bersama dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 12,
    "mood": "focus",
    "symbol": "✧",
    "steps": [
      [
        "Buat bahan kerja",
        "Buka aplikasi yang sesuai untuk mengatur file bersama dan buat salinan kerja agar dokumen asli tetap aman."
      ],
      [
        "Susun struktur",
        "Gunakan judul, nama kolom, folder, atau bagian yang konsisten. Struktur yang jelas memudahkan pencarian dan kolaborasi."
      ],
      [
        "Gunakan fitur inti",
        "Kerjakan satu alur utama terlebih dahulu. Periksa apakah fitur yang dipakai menghasilkan output sesuai tujuan."
      ],
      [
        "Periksa akses dan format",
        "Pastikan orang yang membutuhkan akses dapat membuka file dan formatnya cocok untuk dibagikan."
      ],
      [
        "Uji dari sudut pandang lain",
        "Buka hasil dalam tampilan berbeda atau minta rekan memeriksa apakah instruksi dan informasi mudah dipahami."
      ],
      [
        "Rapikan dan arsipkan",
        "Beri nama file yang jelas, simpan di folder yang tepat, dan catat versi akhir agar tidak tertukar dengan draf lama."
      ]
    ],
    "takeaways": [
      "Tujuan mengatur file bersama perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mengatur file bersama pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "digital",
      "panduan",
      "beginner",
      "mengatur"
    ]
  },
  {
    "id": 283,
    "category": "digital",
    "categoryName": "Tools Digital",
    "emoji": "◎",
    "art": "art-digital",
    "title": "Workflow praktis: Membuat survei online",
    "topic": "Membuat survei online",
    "format": "workflow",
    "summary": "Bangun alur kerja membuat survei online yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 28,
    "mood": "calm",
    "symbol": "↗",
    "steps": [
      [
        "Buat bahan kerja",
        "Buka aplikasi yang sesuai untuk membuat survei online dan buat salinan kerja agar dokumen asli tetap aman."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah membuat survei online dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Gunakan fitur inti",
        "Kerjakan satu alur utama terlebih dahulu. Periksa apakah fitur yang dipakai menghasilkan output sesuai tujuan."
      ],
      [
        "Periksa akses dan format",
        "Pastikan orang yang membutuhkan akses dapat membuka file dan formatnya cocok untuk dibagikan."
      ],
      [
        "Uji dari sudut pandang lain",
        "Buka hasil dalam tampilan berbeda atau minta rekan memeriksa apakah instruksi dan informasi mudah dipahami."
      ],
      [
        "Rapikan dan arsipkan",
        "Beri nama file yang jelas, simpan di folder yang tepat, dan catat versi akhir agar tidak tertukar dengan draf lama."
      ]
    ],
    "takeaways": [
      "Tujuan membuat survei online perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat survei online pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "digital",
      "workflow",
      "advanced",
      "membuat"
    ]
  },
  {
    "id": 284,
    "category": "digital",
    "categoryName": "Tools Digital",
    "emoji": "◎",
    "art": "art-digital",
    "title": "Panduan langkah demi langkah: Membuat daftar tugas digital",
    "topic": "Membuat daftar tugas digital",
    "format": "panduan",
    "summary": "Pelajari membuat daftar tugas digital dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 12,
    "mood": "focus",
    "symbol": "✧",
    "steps": [
      [
        "Buat bahan kerja",
        "Buka aplikasi yang sesuai untuk membuat daftar tugas digital dan buat salinan kerja agar dokumen asli tetap aman."
      ],
      [
        "Susun struktur",
        "Gunakan judul, nama kolom, folder, atau bagian yang konsisten. Struktur yang jelas memudahkan pencarian dan kolaborasi."
      ],
      [
        "Gunakan fitur inti",
        "Kerjakan satu alur utama terlebih dahulu. Periksa apakah fitur yang dipakai menghasilkan output sesuai tujuan."
      ],
      [
        "Periksa akses dan format",
        "Pastikan orang yang membutuhkan akses dapat membuka file dan formatnya cocok untuk dibagikan."
      ],
      [
        "Uji dari sudut pandang lain",
        "Buka hasil dalam tampilan berbeda atau minta rekan memeriksa apakah instruksi dan informasi mudah dipahami."
      ],
      [
        "Rapikan dan arsipkan",
        "Beri nama file yang jelas, simpan di folder yang tepat, dan catat versi akhir agar tidak tertukar dengan draf lama."
      ]
    ],
    "takeaways": [
      "Tujuan membuat daftar tugas digital perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat daftar tugas digital pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "digital",
      "panduan",
      "beginner",
      "membuat"
    ]
  },
  {
    "id": 285,
    "category": "digital",
    "categoryName": "Tools Digital",
    "emoji": "◎",
    "art": "art-digital",
    "title": "Workflow praktis: Mengatur notifikasi kerja",
    "topic": "Mengatur notifikasi kerja",
    "format": "workflow",
    "summary": "Bangun alur kerja mengatur notifikasi kerja yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 28,
    "mood": "calm",
    "symbol": "✦",
    "steps": [
      [
        "Buat bahan kerja",
        "Buka aplikasi yang sesuai untuk mengatur notifikasi kerja dan buat salinan kerja agar dokumen asli tetap aman."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah mengatur notifikasi kerja dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Gunakan fitur inti",
        "Kerjakan satu alur utama terlebih dahulu. Periksa apakah fitur yang dipakai menghasilkan output sesuai tujuan."
      ],
      [
        "Periksa akses dan format",
        "Pastikan orang yang membutuhkan akses dapat membuka file dan formatnya cocok untuk dibagikan."
      ],
      [
        "Uji dari sudut pandang lain",
        "Buka hasil dalam tampilan berbeda atau minta rekan memeriksa apakah instruksi dan informasi mudah dipahami."
      ],
      [
        "Rapikan dan arsipkan",
        "Beri nama file yang jelas, simpan di folder yang tepat, dan catat versi akhir agar tidak tertukar dengan draf lama."
      ]
    ],
    "takeaways": [
      "Tujuan mengatur notifikasi kerja perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mengatur notifikasi kerja pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "digital",
      "workflow",
      "advanced",
      "mengatur"
    ]
  },
  {
    "id": 286,
    "category": "digital",
    "categoryName": "Tools Digital",
    "emoji": "◎",
    "art": "art-digital",
    "title": "Workflow praktis: Menggunakan rumus spreadsheet",
    "topic": "Menggunakan rumus spreadsheet",
    "format": "workflow",
    "summary": "Bangun alur kerja menggunakan rumus spreadsheet yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 15,
    "mood": "focus",
    "symbol": "▤",
    "steps": [
      [
        "Buat bahan kerja",
        "Buka aplikasi yang sesuai untuk menggunakan rumus spreadsheet dan buat salinan kerja agar dokumen asli tetap aman."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah menggunakan rumus spreadsheet dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Gunakan fitur inti",
        "Kerjakan satu alur utama terlebih dahulu. Periksa apakah fitur yang dipakai menghasilkan output sesuai tujuan."
      ],
      [
        "Periksa akses dan format",
        "Pastikan orang yang membutuhkan akses dapat membuka file dan formatnya cocok untuk dibagikan."
      ],
      [
        "Uji dari sudut pandang lain",
        "Buka hasil dalam tampilan berbeda atau minta rekan memeriksa apakah instruksi dan informasi mudah dipahami."
      ],
      [
        "Rapikan dan arsipkan",
        "Beri nama file yang jelas, simpan di folder yang tepat, dan catat versi akhir agar tidak tertukar dengan draf lama."
      ]
    ],
    "takeaways": [
      "Tujuan menggunakan rumus spreadsheet perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan menggunakan rumus spreadsheet pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "digital",
      "workflow",
      "beginner",
      "menggunakan"
    ]
  },
  {
    "id": 287,
    "category": "digital",
    "categoryName": "Tools Digital",
    "emoji": "◎",
    "art": "art-digital",
    "title": "Workflow praktis: Membuat grafik sederhana",
    "topic": "Membuat grafik sederhana",
    "format": "workflow",
    "summary": "Bangun alur kerja membuat grafik sederhana yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 21,
    "mood": "creative",
    "symbol": "⌘",
    "steps": [
      [
        "Buat bahan kerja",
        "Buka aplikasi yang sesuai untuk membuat grafik sederhana dan buat salinan kerja agar dokumen asli tetap aman."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah membuat grafik sederhana dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Gunakan fitur inti",
        "Kerjakan satu alur utama terlebih dahulu. Periksa apakah fitur yang dipakai menghasilkan output sesuai tujuan."
      ],
      [
        "Periksa akses dan format",
        "Pastikan orang yang membutuhkan akses dapat membuka file dan formatnya cocok untuk dibagikan."
      ],
      [
        "Uji dari sudut pandang lain",
        "Buka hasil dalam tampilan berbeda atau minta rekan memeriksa apakah instruksi dan informasi mudah dipahami."
      ],
      [
        "Rapikan dan arsipkan",
        "Beri nama file yang jelas, simpan di folder yang tepat, dan catat versi akhir agar tidak tertukar dengan draf lama."
      ]
    ],
    "takeaways": [
      "Tujuan membuat grafik sederhana perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat grafik sederhana pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "digital",
      "workflow",
      "medium",
      "membuat"
    ]
  },
  {
    "id": 288,
    "category": "digital",
    "categoryName": "Tools Digital",
    "emoji": "◎",
    "art": "art-digital",
    "title": "Panduan langkah demi langkah: Membuat agenda kalender",
    "topic": "Membuat agenda kalender",
    "format": "panduan",
    "summary": "Pelajari membuat agenda kalender dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 25,
    "mood": "calm",
    "symbol": "〰",
    "steps": [
      [
        "Buat bahan kerja",
        "Buka aplikasi yang sesuai untuk membuat agenda kalender dan buat salinan kerja agar dokumen asli tetap aman."
      ],
      [
        "Susun struktur",
        "Gunakan judul, nama kolom, folder, atau bagian yang konsisten. Struktur yang jelas memudahkan pencarian dan kolaborasi."
      ],
      [
        "Gunakan fitur inti",
        "Kerjakan satu alur utama terlebih dahulu. Periksa apakah fitur yang dipakai menghasilkan output sesuai tujuan."
      ],
      [
        "Periksa akses dan format",
        "Pastikan orang yang membutuhkan akses dapat membuka file dan formatnya cocok untuk dibagikan."
      ],
      [
        "Uji dari sudut pandang lain",
        "Buka hasil dalam tampilan berbeda atau minta rekan memeriksa apakah instruksi dan informasi mudah dipahami."
      ],
      [
        "Rapikan dan arsipkan",
        "Beri nama file yang jelas, simpan di folder yang tepat, dan catat versi akhir agar tidak tertukar dengan draf lama."
      ]
    ],
    "takeaways": [
      "Tujuan membuat agenda kalender perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat agenda kalender pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "digital",
      "panduan",
      "advanced",
      "membuat"
    ]
  },
  {
    "id": 289,
    "category": "digital",
    "categoryName": "Tools Digital",
    "emoji": "◎",
    "art": "art-digital",
    "title": "Proyek mini: Mengatur komentar dokumen",
    "topic": "Mengatur komentar dokumen",
    "format": "proyek",
    "summary": "Proyek mini yang membantumu mempraktikkan mengatur komentar dokumen dari perencanaan sampai evaluasi.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 21,
    "mood": "creative",
    "symbol": "⌘",
    "steps": [
      [
        "Ruang lingkup proyek",
        "Tentukan hasil mini dari mengatur komentar dokumen yang bisa selesai dalam satu sesi. Batasi fitur agar proyek tetap realistis."
      ],
      [
        "Susun struktur",
        "Gunakan judul, nama kolom, folder, atau bagian yang konsisten. Struktur yang jelas memudahkan pencarian dan kolaborasi."
      ],
      [
        "Gunakan fitur inti",
        "Kerjakan satu alur utama terlebih dahulu. Periksa apakah fitur yang dipakai menghasilkan output sesuai tujuan."
      ],
      [
        "Periksa akses dan format",
        "Pastikan orang yang membutuhkan akses dapat membuka file dan formatnya cocok untuk dibagikan."
      ],
      [
        "Uji dari sudut pandang lain",
        "Buka hasil dalam tampilan berbeda atau minta rekan memeriksa apakah instruksi dan informasi mudah dipahami."
      ],
      [
        "Rapikan dan arsipkan",
        "Beri nama file yang jelas, simpan di folder yang tepat, dan catat versi akhir agar tidak tertukar dengan draf lama."
      ]
    ],
    "takeaways": [
      "Tujuan mengatur komentar dokumen perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mengatur komentar dokumen pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "digital",
      "proyek",
      "medium",
      "mengatur"
    ]
  },
  {
    "id": 290,
    "category": "digital",
    "categoryName": "Tools Digital",
    "emoji": "◎",
    "art": "art-digital",
    "title": "Checklist penerapan: Mengelola versi file",
    "topic": "Mengelola versi file",
    "format": "checklist",
    "summary": "Daftar periksa untuk menerapkan mengelola versi file tanpa melewatkan hal penting.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 18,
    "mood": "creative",
    "symbol": "↗",
    "steps": [
      [
        "Periksa kesiapan",
        "Pastikan tujuan mengelola versi file jelas dan semua bahan penting tersedia."
      ],
      [
        "Susun struktur",
        "Gunakan judul, nama kolom, folder, atau bagian yang konsisten. Struktur yang jelas memudahkan pencarian dan kolaborasi."
      ],
      [
        "Gunakan fitur inti",
        "Kerjakan satu alur utama terlebih dahulu. Periksa apakah fitur yang dipakai menghasilkan output sesuai tujuan."
      ],
      [
        "Periksa akses dan format",
        "Pastikan orang yang membutuhkan akses dapat membuka file dan formatnya cocok untuk dibagikan."
      ],
      [
        "Uji dari sudut pandang lain",
        "Buka hasil dalam tampilan berbeda atau minta rekan memeriksa apakah instruksi dan informasi mudah dipahami."
      ],
      [
        "Rapikan dan arsipkan",
        "Beri nama file yang jelas, simpan di folder yang tepat, dan catat versi akhir agar tidak tertukar dengan draf lama."
      ]
    ],
    "takeaways": [
      "Tujuan mengelola versi file perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mengelola versi file pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "digital",
      "checklist",
      "medium",
      "mengelola"
    ]
  },
  {
    "id": 291,
    "category": "digital",
    "categoryName": "Tools Digital",
    "emoji": "◎",
    "art": "art-digital",
    "title": "Panduan langkah demi langkah: Membuat checklist digital",
    "topic": "Membuat checklist digital",
    "format": "panduan",
    "summary": "Pelajari membuat checklist digital dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 12,
    "mood": "focus",
    "symbol": "✧",
    "steps": [
      [
        "Buat bahan kerja",
        "Buka aplikasi yang sesuai untuk membuat checklist digital dan buat salinan kerja agar dokumen asli tetap aman."
      ],
      [
        "Susun struktur",
        "Gunakan judul, nama kolom, folder, atau bagian yang konsisten. Struktur yang jelas memudahkan pencarian dan kolaborasi."
      ],
      [
        "Gunakan fitur inti",
        "Kerjakan satu alur utama terlebih dahulu. Periksa apakah fitur yang dipakai menghasilkan output sesuai tujuan."
      ],
      [
        "Periksa akses dan format",
        "Pastikan orang yang membutuhkan akses dapat membuka file dan formatnya cocok untuk dibagikan."
      ],
      [
        "Uji dari sudut pandang lain",
        "Buka hasil dalam tampilan berbeda atau minta rekan memeriksa apakah instruksi dan informasi mudah dipahami."
      ],
      [
        "Rapikan dan arsipkan",
        "Beri nama file yang jelas, simpan di folder yang tepat, dan catat versi akhir agar tidak tertukar dengan draf lama."
      ]
    ],
    "takeaways": [
      "Tujuan membuat checklist digital perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat checklist digital pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "digital",
      "panduan",
      "beginner",
      "membuat"
    ]
  },
  {
    "id": 292,
    "category": "digital",
    "categoryName": "Tools Digital",
    "emoji": "◎",
    "art": "art-digital",
    "title": "Panduan langkah demi langkah: Menyusun laporan dari tabel",
    "topic": "Menyusun laporan dari tabel",
    "format": "panduan",
    "summary": "Pelajari menyusun laporan dari tabel dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 25,
    "mood": "calm",
    "symbol": "↗",
    "steps": [
      [
        "Buat bahan kerja",
        "Buka aplikasi yang sesuai untuk menyusun laporan dari tabel dan buat salinan kerja agar dokumen asli tetap aman."
      ],
      [
        "Susun struktur",
        "Gunakan judul, nama kolom, folder, atau bagian yang konsisten. Struktur yang jelas memudahkan pencarian dan kolaborasi."
      ],
      [
        "Gunakan fitur inti",
        "Kerjakan satu alur utama terlebih dahulu. Periksa apakah fitur yang dipakai menghasilkan output sesuai tujuan."
      ],
      [
        "Periksa akses dan format",
        "Pastikan orang yang membutuhkan akses dapat membuka file dan formatnya cocok untuk dibagikan."
      ],
      [
        "Uji dari sudut pandang lain",
        "Buka hasil dalam tampilan berbeda atau minta rekan memeriksa apakah instruksi dan informasi mudah dipahami."
      ],
      [
        "Rapikan dan arsipkan",
        "Beri nama file yang jelas, simpan di folder yang tepat, dan catat versi akhir agar tidak tertukar dengan draf lama."
      ]
    ],
    "takeaways": [
      "Tujuan menyusun laporan dari tabel perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan menyusun laporan dari tabel pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "digital",
      "panduan",
      "advanced",
      "menyusun"
    ]
  },
  {
    "id": 293,
    "category": "digital",
    "categoryName": "Tools Digital",
    "emoji": "◎",
    "art": "art-digital",
    "title": "Panduan langkah demi langkah: Menggunakan pencarian lanjutan",
    "topic": "Menggunakan pencarian lanjutan",
    "format": "panduan",
    "summary": "Pelajari menggunakan pencarian lanjutan dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 12,
    "mood": "focus",
    "symbol": "◈",
    "steps": [
      [
        "Buat bahan kerja",
        "Buka aplikasi yang sesuai untuk menggunakan pencarian lanjutan dan buat salinan kerja agar dokumen asli tetap aman."
      ],
      [
        "Susun struktur",
        "Gunakan judul, nama kolom, folder, atau bagian yang konsisten. Struktur yang jelas memudahkan pencarian dan kolaborasi."
      ],
      [
        "Gunakan fitur inti",
        "Kerjakan satu alur utama terlebih dahulu. Periksa apakah fitur yang dipakai menghasilkan output sesuai tujuan."
      ],
      [
        "Periksa akses dan format",
        "Pastikan orang yang membutuhkan akses dapat membuka file dan formatnya cocok untuk dibagikan."
      ],
      [
        "Uji dari sudut pandang lain",
        "Buka hasil dalam tampilan berbeda atau minta rekan memeriksa apakah instruksi dan informasi mudah dipahami."
      ],
      [
        "Rapikan dan arsipkan",
        "Beri nama file yang jelas, simpan di folder yang tepat, dan catat versi akhir agar tidak tertukar dengan draf lama."
      ]
    ],
    "takeaways": [
      "Tujuan menggunakan pencarian lanjutan perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan menggunakan pencarian lanjutan pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "digital",
      "panduan",
      "beginner",
      "menggunakan"
    ]
  },
  {
    "id": 294,
    "category": "digital",
    "categoryName": "Tools Digital",
    "emoji": "◎",
    "art": "art-digital",
    "title": "Workflow praktis: Membuat template presentasi",
    "topic": "Membuat template presentasi",
    "format": "workflow",
    "summary": "Bangun alur kerja membuat template presentasi yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 28,
    "mood": "calm",
    "symbol": "✦",
    "steps": [
      [
        "Buat bahan kerja",
        "Buka aplikasi yang sesuai untuk membuat template presentasi dan buat salinan kerja agar dokumen asli tetap aman."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah membuat template presentasi dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Gunakan fitur inti",
        "Kerjakan satu alur utama terlebih dahulu. Periksa apakah fitur yang dipakai menghasilkan output sesuai tujuan."
      ],
      [
        "Periksa akses dan format",
        "Pastikan orang yang membutuhkan akses dapat membuka file dan formatnya cocok untuk dibagikan."
      ],
      [
        "Uji dari sudut pandang lain",
        "Buka hasil dalam tampilan berbeda atau minta rekan memeriksa apakah instruksi dan informasi mudah dipahami."
      ],
      [
        "Rapikan dan arsipkan",
        "Beri nama file yang jelas, simpan di folder yang tepat, dan catat versi akhir agar tidak tertukar dengan draf lama."
      ]
    ],
    "takeaways": [
      "Tujuan membuat template presentasi perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat template presentasi pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "digital",
      "workflow",
      "advanced",
      "membuat"
    ]
  },
  {
    "id": 295,
    "category": "digital",
    "categoryName": "Tools Digital",
    "emoji": "◎",
    "art": "art-digital",
    "title": "Panduan langkah demi langkah: Membuat daftar bacaan digital",
    "topic": "Membuat daftar bacaan digital",
    "format": "panduan",
    "summary": "Pelajari membuat daftar bacaan digital dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 12,
    "mood": "focus",
    "symbol": "◈",
    "steps": [
      [
        "Buat bahan kerja",
        "Buka aplikasi yang sesuai untuk membuat daftar bacaan digital dan buat salinan kerja agar dokumen asli tetap aman."
      ],
      [
        "Susun struktur",
        "Gunakan judul, nama kolom, folder, atau bagian yang konsisten. Struktur yang jelas memudahkan pencarian dan kolaborasi."
      ],
      [
        "Gunakan fitur inti",
        "Kerjakan satu alur utama terlebih dahulu. Periksa apakah fitur yang dipakai menghasilkan output sesuai tujuan."
      ],
      [
        "Periksa akses dan format",
        "Pastikan orang yang membutuhkan akses dapat membuka file dan formatnya cocok untuk dibagikan."
      ],
      [
        "Uji dari sudut pandang lain",
        "Buka hasil dalam tampilan berbeda atau minta rekan memeriksa apakah instruksi dan informasi mudah dipahami."
      ],
      [
        "Rapikan dan arsipkan",
        "Beri nama file yang jelas, simpan di folder yang tepat, dan catat versi akhir agar tidak tertukar dengan draf lama."
      ]
    ],
    "takeaways": [
      "Tujuan membuat daftar bacaan digital perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat daftar bacaan digital pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "digital",
      "panduan",
      "beginner",
      "membuat"
    ]
  },
  {
    "id": 296,
    "category": "digital",
    "categoryName": "Tools Digital",
    "emoji": "◎",
    "art": "art-digital",
    "title": "Panduan langkah demi langkah: Mengatur inbox email",
    "topic": "Mengatur inbox email",
    "format": "panduan",
    "summary": "Pelajari mengatur inbox email dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 18,
    "mood": "creative",
    "symbol": "⌘",
    "steps": [
      [
        "Buat bahan kerja",
        "Buka aplikasi yang sesuai untuk mengatur inbox email dan buat salinan kerja agar dokumen asli tetap aman."
      ],
      [
        "Susun struktur",
        "Gunakan judul, nama kolom, folder, atau bagian yang konsisten. Struktur yang jelas memudahkan pencarian dan kolaborasi."
      ],
      [
        "Gunakan fitur inti",
        "Kerjakan satu alur utama terlebih dahulu. Periksa apakah fitur yang dipakai menghasilkan output sesuai tujuan."
      ],
      [
        "Periksa akses dan format",
        "Pastikan orang yang membutuhkan akses dapat membuka file dan formatnya cocok untuk dibagikan."
      ],
      [
        "Uji dari sudut pandang lain",
        "Buka hasil dalam tampilan berbeda atau minta rekan memeriksa apakah instruksi dan informasi mudah dipahami."
      ],
      [
        "Rapikan dan arsipkan",
        "Beri nama file yang jelas, simpan di folder yang tepat, dan catat versi akhir agar tidak tertukar dengan draf lama."
      ]
    ],
    "takeaways": [
      "Tujuan mengatur inbox email perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mengatur inbox email pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "digital",
      "panduan",
      "medium",
      "mengatur"
    ]
  },
  {
    "id": 297,
    "category": "digital",
    "categoryName": "Tools Digital",
    "emoji": "◎",
    "art": "art-digital",
    "title": "Workflow praktis: Membuat papan kanban",
    "topic": "Membuat papan kanban",
    "format": "workflow",
    "summary": "Bangun alur kerja membuat papan kanban yang praktis agar lebih rapi, konsisten, dan mudah diulang.",
    "level": "Pemula",
    "levelKey": "beginner",
    "minutes": 15,
    "mood": "focus",
    "symbol": "〰",
    "steps": [
      [
        "Buat bahan kerja",
        "Buka aplikasi yang sesuai untuk membuat papan kanban dan buat salinan kerja agar dokumen asli tetap aman."
      ],
      [
        "Buat urutan kerja",
        "Susun langkah membuat papan kanban dari yang paling sering dilakukan sampai yang hanya diperlukan sesekali. Tandai titik pemeriksaan di tengah proses."
      ],
      [
        "Gunakan fitur inti",
        "Kerjakan satu alur utama terlebih dahulu. Periksa apakah fitur yang dipakai menghasilkan output sesuai tujuan."
      ],
      [
        "Periksa akses dan format",
        "Pastikan orang yang membutuhkan akses dapat membuka file dan formatnya cocok untuk dibagikan."
      ],
      [
        "Uji dari sudut pandang lain",
        "Buka hasil dalam tampilan berbeda atau minta rekan memeriksa apakah instruksi dan informasi mudah dipahami."
      ],
      [
        "Rapikan dan arsipkan",
        "Beri nama file yang jelas, simpan di folder yang tepat, dan catat versi akhir agar tidak tertukar dengan draf lama."
      ]
    ],
    "takeaways": [
      "Tujuan membuat papan kanban perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat papan kanban pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "digital",
      "workflow",
      "beginner",
      "membuat"
    ]
  },
  {
    "id": 298,
    "category": "digital",
    "categoryName": "Tools Digital",
    "emoji": "◎",
    "art": "art-digital",
    "title": "Latihan mandiri: Membuat diagram mind map",
    "topic": "Membuat diagram mind map",
    "format": "latihan",
    "summary": "Latihan terarah untuk menerapkan membuat diagram mind map sambil mengecek pemahamanmu sendiri.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 31,
    "mood": "calm",
    "symbol": "⌘",
    "steps": [
      [
        "Tantangan mini",
        "Coba lakukan membuat diagram mind map dalam skala kecil selama 10–15 menit. Tuliskan hasil yang ingin kamu capai sebelum mulai."
      ],
      [
        "Susun struktur",
        "Gunakan judul, nama kolom, folder, atau bagian yang konsisten. Struktur yang jelas memudahkan pencarian dan kolaborasi."
      ],
      [
        "Gunakan fitur inti",
        "Kerjakan satu alur utama terlebih dahulu. Periksa apakah fitur yang dipakai menghasilkan output sesuai tujuan."
      ],
      [
        "Periksa akses dan format",
        "Pastikan orang yang membutuhkan akses dapat membuka file dan formatnya cocok untuk dibagikan."
      ],
      [
        "Uji dari sudut pandang lain",
        "Buka hasil dalam tampilan berbeda atau minta rekan memeriksa apakah instruksi dan informasi mudah dipahami."
      ],
      [
        "Rapikan dan arsipkan",
        "Beri nama file yang jelas, simpan di folder yang tepat, dan catat versi akhir agar tidak tertukar dengan draf lama."
      ]
    ],
    "takeaways": [
      "Tujuan membuat diagram mind map perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat diagram mind map pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "digital",
      "latihan",
      "advanced",
      "membuat"
    ]
  },
  {
    "id": 299,
    "category": "digital",
    "categoryName": "Tools Digital",
    "emoji": "◎",
    "art": "art-digital",
    "title": "Panduan langkah demi langkah: Membuat arsip proyek",
    "topic": "Membuat arsip proyek",
    "format": "panduan",
    "summary": "Pelajari membuat arsip proyek dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.",
    "level": "Lanjutan",
    "levelKey": "advanced",
    "minutes": 25,
    "mood": "calm",
    "symbol": "↗",
    "steps": [
      [
        "Buat bahan kerja",
        "Buka aplikasi yang sesuai untuk membuat arsip proyek dan buat salinan kerja agar dokumen asli tetap aman."
      ],
      [
        "Susun struktur",
        "Gunakan judul, nama kolom, folder, atau bagian yang konsisten. Struktur yang jelas memudahkan pencarian dan kolaborasi."
      ],
      [
        "Gunakan fitur inti",
        "Kerjakan satu alur utama terlebih dahulu. Periksa apakah fitur yang dipakai menghasilkan output sesuai tujuan."
      ],
      [
        "Periksa akses dan format",
        "Pastikan orang yang membutuhkan akses dapat membuka file dan formatnya cocok untuk dibagikan."
      ],
      [
        "Uji dari sudut pandang lain",
        "Buka hasil dalam tampilan berbeda atau minta rekan memeriksa apakah instruksi dan informasi mudah dipahami."
      ],
      [
        "Rapikan dan arsipkan",
        "Beri nama file yang jelas, simpan di folder yang tepat, dan catat versi akhir agar tidak tertukar dengan draf lama."
      ]
    ],
    "takeaways": [
      "Tujuan membuat arsip proyek perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan membuat arsip proyek pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "digital",
      "panduan",
      "advanced",
      "membuat"
    ]
  },
  {
    "id": 300,
    "category": "digital",
    "categoryName": "Tools Digital",
    "emoji": "◎",
    "art": "art-digital",
    "title": "Proyek mini: Mengelola tautan referensi",
    "topic": "Mengelola tautan referensi",
    "format": "proyek",
    "summary": "Proyek mini yang membantumu mempraktikkan mengelola tautan referensi dari perencanaan sampai evaluasi.",
    "level": "Menengah",
    "levelKey": "medium",
    "minutes": 21,
    "mood": "creative",
    "symbol": "✧",
    "steps": [
      [
        "Ruang lingkup proyek",
        "Tentukan hasil mini dari mengelola tautan referensi yang bisa selesai dalam satu sesi. Batasi fitur agar proyek tetap realistis."
      ],
      [
        "Susun struktur",
        "Gunakan judul, nama kolom, folder, atau bagian yang konsisten. Struktur yang jelas memudahkan pencarian dan kolaborasi."
      ],
      [
        "Gunakan fitur inti",
        "Kerjakan satu alur utama terlebih dahulu. Periksa apakah fitur yang dipakai menghasilkan output sesuai tujuan."
      ],
      [
        "Periksa akses dan format",
        "Pastikan orang yang membutuhkan akses dapat membuka file dan formatnya cocok untuk dibagikan."
      ],
      [
        "Uji dari sudut pandang lain",
        "Buka hasil dalam tampilan berbeda atau minta rekan memeriksa apakah instruksi dan informasi mudah dipahami."
      ],
      [
        "Rapikan dan arsipkan",
        "Beri nama file yang jelas, simpan di folder yang tepat, dan catat versi akhir agar tidak tertukar dengan draf lama."
      ]
    ],
    "takeaways": [
      "Tujuan mengelola tautan referensi perlu jelas sebelum mulai.",
      "Mulai dari versi sederhana, lalu tingkatkan secara bertahap.",
      "Periksa hasil dengan contoh nyata, bukan hanya perkiraan.",
      "Catat satu hal yang berhasil dan satu hal untuk diperbaiki."
    ],
    "task": "Tantangan: terapkan mengelola tautan referensi pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.",
    "tags": [
      "digital",
      "proyek",
      "medium",
      "mengelola"
    ]
  }
];

const QUIZ_QUESTIONS = [
  { question: "Apa fungsi utama HTML dalam sebuah halaman web?", subtitle: "Pikirkan struktur dan makna konten.", icon: "⌘", options: ["Mengatur struktur dan konten halaman", "Mengatur warna saja", "Menyimpan semua file pengguna", "Menggantikan koneksi internet"], answer: 0, explanation: "HTML membentuk struktur dan makna konten. CSS mengatur tampilan, sedangkan JavaScript menambahkan perilaku." },
  { question: "Apa manfaat memecah proyek menjadi langkah kecil?", subtitle: "Pilih jawaban yang paling membantu proses kerja.", icon: "✧", options: ["Membuat semua pekerjaan hilang", "Memudahkan pengujian dan menemukan masalah", "Menjamin tidak ada kesalahan sama sekali", "Membuat file selalu lebih besar"], answer: 1, explanation: "Langkah kecil lebih mudah diuji, ditinjau, dan diperbaiki ketika ada masalah." },
  { question: "Mana kebiasaan yang lebih aman untuk akun online?", subtitle: "Keamanan biasanya dibangun dari beberapa lapisan.", icon: "盾", options: ["Membagikan kode verifikasi pada teman", "Memakai satu kata sandi untuk semua akun", "Mengaktifkan autentikasi dua faktor", "Mengeklik tautan yang mendesak tanpa memeriksa"], answer: 2, explanation: "Autentikasi dua faktor menambah lapisan perlindungan selain kata sandi." },
  { question: "Apa yang sebaiknya dilakukan setelah membuat desain awal?", subtitle: "Desain yang baik berkembang melalui evaluasi.", icon: "◈", options: ["Langsung menganggapnya sempurna", "Menghapus semua referensi", "Mengabaikan keterbacaan", "Menguji keterbacaan dan meminta masukan spesifik"], answer: 3, explanation: "Pemeriksaan keterbacaan dan masukan yang spesifik membantu menentukan perbaikan yang paling berdampak." },
  { question: "Apa cara sederhana untuk mengingat materi dalam jangka panjang?", subtitle: "Pilih pendekatan belajar aktif.", icon: "▤", options: ["Membaca tanpa jeda selama mungkin", "Active recall dan pengulangan berkala", "Menghindari latihan", "Membuka banyak tab sekaligus"], answer: 1, explanation: "Active recall dan spaced repetition membantu menguji ingatan serta mengulang materi pada waktu yang tepat." },
  { question: "Mengapa nama file yang jelas penting dalam proyek?", subtitle: "Bayangkan kamu membuka proyek setelah beberapa minggu.", icon: "◎", options: ["Supaya file tidak bisa dibuka", "Agar kode menjadi otomatis benar", "Memudahkan pencarian dan pemeliharaan", "Agar folder tidak perlu dirapikan"], answer: 2, explanation: "Nama yang jelas mengurangi kebingungan saat mencari, memperbarui, atau berbagi file." },
  { question: "Apa langkah awal saat menemukan masalah teknis?", subtitle: "Lakukan pemeriksaan yang terukur.", icon: "◉", options: ["Ubah banyak pengaturan sekaligus", "Catat gejala lalu uji satu perubahan", "Hapus semua file", "Abaikan pesan kesalahan"], answer: 1, explanation: "Mengubah satu hal pada satu waktu membantu mengidentifikasi penyebab masalah dengan lebih aman." }
];

const STORAGE_KEY = "oceanglass-academy-v1";
const state = {
  view: "home",
  category: "all",
  search: "",
  sort: "recommended",
  page: 0,
  pageSize: 12,
  selectedLesson: null,
  saved: new Set(),
  completed: new Set(),
  recent: [],
  notes: {},
  focusMinutes: 0,
  quizIndex: 0,
  quizScore: 0,
  quizAnswered: false,
  quizOrder: [],
  quizFinished: false,
  mood: "all",
  userName: "Learner",
  lightMode: false
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const safeText = value => String(value ?? "").replace(/[&<>"']/g, char => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
}[char]));
const getTutorial = id => TUTORIALS.find(item => item.id === Number(id));
const categoryFor = id => CATEGORIES.find(category => category.id === id) || CATEGORIES[0];
const STORAGE_SUPPORTED = (() => {
  try { localStorage.setItem("__og_test", "1"); localStorage.removeItem("__og_test"); return true; }
  catch (error) { return false; }
})();

function loadState() {
  if (!STORAGE_SUPPORTED) return;
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    state.saved = new Set(saved.saved || []);
    state.completed = new Set(saved.completed || []);
    state.recent = saved.recent || [];
    state.notes = saved.notes || {};
    state.focusMinutes = Number(saved.focusMinutes || 0);
    state.userName = saved.userName || "Learner";
    state.lightMode = Boolean(saved.lightMode);
  } catch (error) {
    console.warn("Preferensi lokal belum dapat dibaca.", error);
  }
}

function persistState() {
  if (!STORAGE_SUPPORTED) return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      saved: [...state.saved], completed: [...state.completed], recent: state.recent.slice(0, 40),
      notes: state.notes, focusMinutes: state.focusMinutes, userName: state.userName, lightMode: state.lightMode
    }));
  } catch (error) {
    showToast("Penyimpanan browser penuh atau tidak tersedia.");
  }
}

function showToast(message) {
  const region = $("#toastRegion");
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  region.appendChild(toast);
  window.setTimeout(() => toast.remove(), 3500);
}

function setView(view, options = {}) {
  const valid = ["home", "explore", "saved", "progress", "quiz"];
  if (!valid.includes(view)) return;
  state.view = view;
  $$(".view").forEach(section => section.classList.toggle("active", section.id === `${view}View`));
  $$("[data-view]").forEach(button => button.classList.toggle("active", button.dataset.view === view));
  const labels = { home: "Beranda", explore: "Jelajahi tutorial", saved: "Disimpan", progress: "Progres belajar", quiz: "Latihan cepat" };
  $("#breadcrumbCurrent").textContent = labels[view];
  $("#contentScroll").scrollTo({ top: 0, behavior: options.instant ? "auto" : "smooth" });
  $("#sidebar").classList.remove("mobile-open");
  if (view === "explore") renderExplore();
  if (view === "saved") renderSaved();
  if (view === "progress") renderProgress();
  if (view === "quiz" && !state.quizOrder.length) startQuiz();
  if (view === "home") renderHome();
}

function renderCategoryNavigation() {
  $("#categoryNav").innerHTML = CATEGORIES.map(category => `
    <button class="nav-item" data-category="${category.id}" title="${safeText(category.name)}">
      <span class="category-emoji">${category.emoji}</span><span>${safeText(category.name)}</span>
    </button>`).join("");
  $("#filterChips").innerHTML = `<button class="filter-chip active" data-filter="all">Semua</button>` +
    CATEGORIES.map(category => `<button class="filter-chip" data-filter="${category.id}">${category.emoji} ${safeText(category.name)}</button>`).join("");
}

function tutorialCard(lesson, index = 0) {
  const isSaved = state.saved.has(lesson.id);
  const isCompleted = state.completed.has(lesson.id);
  const category = categoryFor(lesson.category);
  const levelClass = lesson.levelKey === "medium" ? "medium" : lesson.levelKey === "advanced" ? "advanced" : "";
  return `
    <article class="tutorial-card" style="animation-delay:${Math.min(index * 35, 240)}ms">
      <div class="card-art ${lesson.art}">
        <span class="card-category">${category.emoji} ${safeText(category.name)}</span>
        <button class="card-bookmark ${isSaved ? "saved" : ""}" data-save="${lesson.id}" aria-label="${isSaved ? "Hapus dari simpanan" : "Simpan tutorial"}" title="${isSaved ? "Hapus dari simpanan" : "Simpan tutorial"}">${isSaved ? "♥" : "♡"}</button>
        <span class="art-symbol">${lesson.symbol}</span>
      </div>
      <div class="card-body">
        <div class="card-meta"><span>${lesson.minutes} MENIT</span><i class="meta-dot"></i><span>${safeText(lesson.format.toUpperCase())}</span>${isCompleted ? '<i class="meta-dot"></i><span style="color:#79f0d2">✓ SELESAI</span>' : ""}</div>
        <h3 class="card-title">${safeText(lesson.title)}</h3>
        <p class="card-description">${safeText(lesson.summary)}</p>
        <div class="card-footer"><span class="level-pill ${levelClass}">${safeText(lesson.level)}</span><button class="card-open" data-open="${lesson.id}">Buka tutorial <span>↗</span></button></div>
      </div>
    </article>`;
}

function renderHome() {
  $("#heroTutorialCount").textContent = `${TUTORIALS.length}+`;
  $("#statTotal").textContent = TUTORIALS.length.toLocaleString("id-ID");
  $("#statCompleted").textContent = state.completed.size.toLocaleString("id-ID");
  $("#statSaved").textContent = state.saved.size.toLocaleString("id-ID");
  $("#savedCount").textContent = state.saved.size;
  $("#focusMinutes").textContent = String(state.focusMinutes).padStart(2, "0");
  $("#completedPercent").textContent = `${Math.round(state.completed.size / TUTORIALS.length * 100)}%`;
  $("#profileName").textContent = state.userName;
  $("#avatarInitial").textContent = (state.userName[0] || "L").toUpperCase();
  const featured = [TUTORIALS[0], TUTORIALS[18], TUTORIALS[61], TUTORIALS[143], TUTORIALS[276], TUTORIALS[421]].filter(Boolean);
  $("#featuredGrid").innerHTML = featured.map((lesson, index) => tutorialCard(lesson, index)).join("");
  const recent = state.recent.map(getTutorial).filter(Boolean).slice(0, 3);
  $("#continueGrid").innerHTML = recent.length ? recent.map((lesson, index) => tutorialCard(lesson, index)).join("") :
    `<div class="empty-state" style="grid-column:1/-1;padding:22px"><span>✧</span><h3>Perjalananmu dimulai di sini</h3><p>Buka tutorial pertama dan tutorial terakhir akan muncul di area ini.</p><button class="button-secondary" data-view="explore">Cari tutorial ↗</button></div>`;
}

function filteredTutorials() {
  const query = state.search.trim().toLocaleLowerCase("id-ID");
  let list = TUTORIALS.filter(lesson => {
    const matchesCategory = state.category === "all" || lesson.category === state.category;
    const matchesMood = state.mood === "all" || lesson.mood === state.mood;
    const searchable = [lesson.title, lesson.summary, lesson.categoryName, lesson.topic, lesson.level, ...lesson.tags].join(" ").toLocaleLowerCase("id-ID");
    return matchesCategory && matchesMood && (!query || searchable.includes(query));
  });
  if (state.sort === "title") list.sort((a, b) => a.title.localeCompare(b.title, "id"));
  if (state.sort === "short") list.sort((a, b) => a.minutes - b.minutes);
  if (state.sort === "level") list.sort((a, b) => ["beginner", "medium", "advanced"].indexOf(a.levelKey) - ["beginner", "medium", "advanced"].indexOf(b.levelKey));
  return list;
}

function renderExplore(resetPage = false) {
  if (resetPage) state.page = 0;
  $$(".filter-chip").forEach(button => button.classList.toggle("active", button.dataset.filter === state.category));
  const list = filteredTutorials();
  const visible = list.slice(0, (state.page + 1) * state.pageSize);
  $("#exploreGrid").innerHTML = visible.map((lesson, index) => tutorialCard(lesson, index % state.pageSize)).join("");
  $("#resultCount").textContent = `${list.length.toLocaleString("id-ID")} tutorial ditemukan`;
  $("#loadMore").classList.toggle("hidden", visible.length >= list.length || list.length === 0);
  $("#emptySearch").classList.toggle("hidden", list.length !== 0);
  $("#exploreGrid").classList.toggle("hidden", list.length === 0);
}

function renderSaved() {
  const list = TUTORIALS.filter(lesson => state.saved.has(lesson.id));
  $("#savedGrid").innerHTML = list.map((lesson, index) => tutorialCard(lesson, index)).join("");
  $("#savedEmpty").classList.toggle("hidden", list.length !== 0);
  $("#savedGrid").classList.toggle("hidden", list.length === 0);
  $("#savedDescription").textContent = `${list.length} tutorial tersimpan`;
  $("#savedCount").textContent = list.length;
}

function renderProgress() {
  const done = state.completed.size;
  const percent = Math.round(done / TUTORIALS.length * 100);
  $("#progressRing").style.background = `conic-gradient(var(--cyan) ${percent}%, rgba(119,169,202,.12) 0)`;
  $("#progressRingNumber").textContent = `${percent}%`;
  $("#progressDone").textContent = done;
  $("#progressSaved").textContent = state.saved.size;
  $("#progressFocus").textContent = `${state.focusMinutes}m`;
  $("#progressMessage").textContent = done ? `Kamu sudah menyelesaikan ${done} tutorial. Teruskan dengan satu langkah kecil berikutnya.` : "Mulai dari satu tutorial kecil. Kamu bisa menandai tutorial sebagai selesai setelah mempelajarinya.";
  const activity = state.recent.map(id => getTutorial(id)).filter(Boolean).slice(0, 8);
  $("#activityList").innerHTML = activity.length ? activity.map(lesson => `
    <button class="activity-item" data-open="${lesson.id}">
      <span class="activity-symbol">${lesson.symbol}</span><span class="activity-copy"><b>${safeText(lesson.title)}</b><small>${safeText(lesson.categoryName)} · ${lesson.minutes} menit</small></span>
      <span class="activity-status">${state.completed.has(lesson.id) ? "✓ Selesai" : "Dibuka ↗"}</span>
    </button>`).join("") : `<div class="empty-state"><span>◴</span><h3>Belum ada aktivitas</h3><p>Setelah membuka tutorial, aktivitasmu akan tampil di sini.</p><button class="button-secondary" data-view="explore">Mulai menjelajah</button></div>`;
  $("#categoryProgress").innerHTML = CATEGORIES.map(category => {
    const lessons = TUTORIALS.filter(lesson => lesson.category === category.id);
    const completed = lessons.filter(lesson => state.completed.has(lesson.id)).length;
    const percentage = lessons.length ? Math.round(completed / lessons.length * 100) : 0;
    return `<div class="category-progress-item"><div class="category-progress-head"><span>${category.emoji}</span><b>${safeText(category.name)}</b><small>${completed}/${lessons.length}</small></div><div class="progress-track"><i style="width:${percentage}%"></i></div></div>`;
  }).join("");
}

function openLesson(id) {
  const lesson = getTutorial(id);
  if (!lesson) return;
  state.selectedLesson = lesson.id;
  state.recent = [lesson.id, ...state.recent.filter(item => item !== lesson.id)].slice(0, 40);
  persistState();
  const category = categoryFor(lesson.category);
  $("#modalEyebrow").textContent = `${category.emoji} ${category.name.toUpperCase()}`;
  $("#modalTitle").textContent = lesson.title;
  const steps = lesson.steps.map((step, index) => `<article class="lesson-step"><span class="step-number">${String(index + 1).padStart(2, "0")}</span><div><b>${safeText(step[0])}</b><p>${safeText(step[1])}</p></div></article>`).join("");
  const takeaways = lesson.takeaways.map(item => `<div class="takeaway"><span>✓</span><span>${safeText(item)}</span></div>`).join("");
  const isCompleted = state.completed.has(lesson.id);
  const isSaved = state.saved.has(lesson.id);
  $("#modalBody").innerHTML = `
    <p class="modal-description">${safeText(lesson.summary)}</p>
    <div class="lesson-meta"><span>◷ ${lesson.minutes} MENIT</span><span>◇ ${safeText(lesson.level)}</span><span>▤ ${safeText(lesson.format.toUpperCase())}</span><span>${isCompleted ? "✓ SUDAH SELESAI" : "○ BELUM SELESAI"}</span></div>
    <h3 class="lesson-section-title">Langkah yang bisa kamu ikuti</h3><div class="lesson-steps">${steps}</div>
    <h3 class="lesson-section-title">Poin penting</h3><div class="lesson-takeaways">${takeaways}</div>
    <h3 class="lesson-section-title">Tantangan mini</h3><p class="modal-description">${safeText(lesson.task)}</p>
    <label class="note-label" for="lessonNote">CATATAN PRIBADI (TERSIMPAN DI BROWSER)</label><textarea class="lesson-note" id="lessonNote" placeholder="Tulis hal penting atau pertanyaanmu...">${safeText(state.notes[lesson.id] || "")}</textarea>
    <div class="lesson-actions"><button class="button-secondary" data-modal-save="${lesson.id}">${isSaved ? "♥ Tersimpan" : "♡ Simpan tutorial"}</button><button class="button-primary" data-complete="${lesson.id}">${isCompleted ? "✓ Tandai belum selesai" : "Tandai selesai ✓"}</button></div>`;
  $("#modalBackdrop").classList.remove("hidden");
  document.body.style.overflow = "hidden";
  renderHome();
}

function closeModal() {
  $("#modalBackdrop").classList.add("hidden");
  document.body.style.overflow = "";
  state.selectedLesson = null;
}

function toggleSaved(id) {
  id = Number(id);
  if (state.saved.has(id)) { state.saved.delete(id); showToast("Tutorial dihapus dari daftar simpanan."); }
  else { state.saved.add(id); showToast("Tutorial disimpan untuk nanti."); }
  persistState();
  updateCounts();
  renderHome();
  if (state.view === "explore") renderExplore();
  if (state.view === "saved") renderSaved();
  if (state.view === "progress") renderProgress();
  if (state.selectedLesson === id) openLesson(id);
}

function toggleCompleted(id) {
  id = Number(id);
  if (state.completed.has(id)) { state.completed.delete(id); showToast("Status selesai dibatalkan."); }
  else { state.completed.add(id); state.focusMinutes += getTutorial(id)?.minutes || 0; showToast("Bagus! Tutorial ditandai selesai."); }
  persistState();
  updateCounts();
  renderHome();
  if (state.view === "explore") renderExplore();
  if (state.view === "saved") renderSaved();
  if (state.view === "progress") renderProgress();
  if (state.selectedLesson === id) openLesson(id);
}

function updateCounts() {
  $("#savedCount").textContent = state.saved.size;
  $("#statCompleted").textContent = state.completed.size;
  $("#statSaved").textContent = state.saved.size;
  $("#completedPercent").textContent = `${Math.round(state.completed.size / TUTORIALS.length * 100)}%`;
  $("#focusMinutes").textContent = String(state.focusMinutes).padStart(2, "0");
}

function searchChanged(value) {
  state.search = value;
  $("#clearSearch").classList.toggle("visible", Boolean(value));
  if (state.view !== "explore") setView("explore");
  renderExplore(true);
}

function chooseMood(mood) {
  state.mood = mood;
  state.category = "all";
  state.search = "";
  $("#globalSearch").value = "";
  setView("explore");
  renderExplore(true);
  showToast(mood === "focus" ? "Mode fokus dipilih." : mood === "creative" ? "Mode kreatif dipilih." : "Mode santai dipilih.");
}

function startQuiz() {
  state.quizIndex = 0;
  state.quizScore = 0;
  state.quizAnswered = false;
  state.quizFinished = false;
  state.quizOrder = [...QUIZ_QUESTIONS.keys()].sort(() => Math.random() - 0.5).slice(0, 5);
  renderQuiz();
}

function renderQuiz() {
  if (state.quizFinished) {
    const total = state.quizOrder.length;
    const percent = Math.round(state.quizScore / total * 100);
    $("#quizCount").textContent = "SELESAI";
    $("#quizProgressBar").style.width = "100%";
    $("#quizIcon").textContent = percent >= 80 ? "✦" : "◈";
    $("#quizQuestion").textContent = `Skor kamu ${state.quizScore} dari ${total}!`;
    $("#quizSubtitle").textContent = percent >= 80 ? "Keren! Kamu menangkap banyak konsep penting." : "Terus latihan. Setiap percobaan membantumu memahami konsep.";
    $("#quizOptions").innerHTML = `<div class="empty-state"><span>${percent >= 80 ? "✧" : "↗"}</span><h3>${percent}% benar</h3><p>${percent >= 80 ? "Pertahankan rasa ingin tahumu." : "Coba lagi dan perhatikan penjelasan di setiap jawaban."}</p></div>`;
    $("#quizFeedback").textContent = "Hasil latihan selesai.";
    $("#quizNext").textContent = "Coba lagi ↻";
    $("#quizNext").disabled = false;
    return;
  }
  const question = QUIZ_QUESTIONS[state.quizOrder[state.quizIndex]];
  $("#quizCount").textContent = `${String(state.quizIndex + 1).padStart(2, "0")} / ${String(state.quizOrder.length).padStart(2, "0")}`;
  $("#quizProgressBar").style.width = `${(state.quizIndex + 1) / state.quizOrder.length * 100}%`;
  $("#quizIcon").textContent = question.icon;
  $("#quizQuestion").textContent = question.question;
  $("#quizSubtitle").textContent = question.subtitle;
  $("#quizFeedback").textContent = "Pilih salah satu jawaban untuk melanjutkan.";
  $("#quizNext").textContent = state.quizIndex === state.quizOrder.length - 1 ? "Lihat hasil →" : "Berikutnya →";
  $("#quizNext").disabled = true;
  $("#quizOptions").innerHTML = question.options.map((option, index) => `<button class="quiz-option" data-answer="${index}"><span class="option-letter">${String.fromCharCode(65 + index)}</span><span>${safeText(option)}</span></button>`).join("");
  state.quizAnswered = false;
}

function answerQuiz(index) {
  if (state.quizAnswered || state.quizFinished) return;
  const question = QUIZ_QUESTIONS[state.quizOrder[state.quizIndex]];
  state.quizAnswered = true;
  const correct = index === question.answer;
  if (correct) state.quizScore++;
  $$(".quiz-option").forEach((button, optionIndex) => {
    button.disabled = true;
    if (optionIndex === question.answer) button.classList.add("correct");
    else if (optionIndex === index) button.classList.add("incorrect");
  });
  $("#quizFeedback").textContent = `${correct ? "Benar! " : "Belum tepat. "}${question.explanation}`;
  $("#quizNext").disabled = false;
}

function nextQuiz() {
  if (state.quizFinished) { startQuiz(); return; }
  if (!state.quizAnswered) return;
  if (state.quizIndex >= state.quizOrder.length - 1) { state.quizFinished = true; renderQuiz(); return; }
  state.quizIndex++;
  renderQuiz();
}

function openSettings() {
  $("#modalEyebrow").textContent = "PERSONAL PREFERENCES";
  $("#modalTitle").textContent = "Pengaturan OceanGlass";
  $("#modalBody").innerHTML = `
    <p class="modal-description">Atur pengalaman belajar sesuai kebutuhanmu. Preferensi disimpan di browser yang kamu gunakan.</p>
    <label class="note-label" for="settingsName">NAMA TAMPILAN</label><input id="settingsName" class="lesson-note" style="min-height:0" maxlength="28" value="${safeText(state.userName)}">
    <div class="lesson-actions"><button class="button-secondary" id="settingsTheme">${state.lightMode ? "☾ Gunakan mode gelap" : "☼ Gunakan mode terang"}</button><button class="button-primary" id="saveSettings">Simpan pengaturan</button></div>`;
  $("#modalBackdrop").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function toggleTheme() {
  state.lightMode = !state.lightMode;
  document.body.classList.toggle("light-mode", state.lightMode);
  $("#themeToggle").textContent = state.lightMode ? "☾" : "☼";
  persistState();
  showToast(state.lightMode ? "Mode terang diaktifkan." : "Mode gelap diaktifkan.");
}

function exportProgress() {
  const report = {
    exportedAt: new Date().toISOString(),
    completed: [...state.completed].map(getTutorial).filter(Boolean).map(lesson => ({ title: lesson.title, category: lesson.categoryName })),
    saved: [...state.saved].map(getTutorial).filter(Boolean).map(lesson => lesson.title),
    recent: state.recent.map(getTutorial).filter(Boolean).map(lesson => lesson.title),
    focusMinutes: state.focusMinutes
  };
  const blob = new Blob([JSON.stringify(report, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "oceanglass-progress.json";
  anchor.click();
  URL.revokeObjectURL(url);
  showToast("File progres berhasil disiapkan.");
}

function openAbout() {
  $("#modalEyebrow").textContent = "ABOUT THIS PROJECT";
  $("#modalTitle").textContent = "OceanGlass Academy";
  $("#modalBody").innerHTML = `<p class="modal-description">OceanGlass Academy adalah website tutorial mandiri bertema Ocean Blue dan Liquid Glass. Proyek ini dibuat dengan HTML, CSS, dan JavaScript murni, tanpa framework wajib.</p>
  <h3 class="lesson-section-title">Fitur yang tersedia</h3><div class="lesson-takeaways">
  <div class="takeaway"><span>✓</span><span>Pencarian dan filter kategori</span></div><div class="takeaway"><span>✓</span><span>Simpan dan tandai tutorial selesai</span></div><div class="takeaway"><span>✓</span><span>Catatan belajar lokal</span></div><div class="takeaway"><span>✓</span><span>Mode terang dan gelap</span></div><div class="takeaway"><span>✓</span><span>Latihan kuis interaktif</span></div><div class="takeaway"><span>✓</span><span>Ekspor progres belajar</span></div></div>
  <p class="modal-description" style="margin-top:16px">Data progres disimpan di localStorage browser. Jika browser dibersihkan atau kamu memakai perangkat lain, data mungkin tidak ikut berpindah. Google Fonts membutuhkan internet; font sistem tetap digunakan jika offline.</p>`;
  $("#modalBackdrop").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function handleClick(event) {
  const target = event.target.closest("button, [data-view]");
  if (!target) return;
  if (target.dataset.view) { setView(target.dataset.view); return; }
  if (target.dataset.action === "settings") { openSettings(); return; }
  if (target.dataset.action === "about") { openAbout(); return; }
  if (target.dataset.open) { openLesson(target.dataset.open); return; }
  if (target.dataset.save) { toggleSaved(target.dataset.save); return; }
  if (target.dataset.category) {
    state.category = target.dataset.category;
    state.mood = "all";
    setView("explore");
    renderExplore(true);
    return;
  }
  if (target.dataset.filter) {
    state.category = target.dataset.filter;
    renderExplore(true);
    return;
  }
  if (target.dataset.mood) { chooseMood(target.dataset.mood); return; }
  if (target.dataset.answer !== undefined) { answerQuiz(Number(target.dataset.answer)); return; }
  if (target.dataset.modalSave) { toggleSaved(target.dataset.modalSave); return; }
  if (target.dataset.complete) { toggleCompleted(target.dataset.complete); return; }
  switch (target.id) {
    case "startLearning": setView("explore"); break;
    case "randomTutorial": {
      const pool = filteredTutorials();
      const lesson = pool[Math.floor(Math.random() * pool.length)] || TUTORIALS[0];
      openLesson(lesson.id);
      break;
    }
    case "loadMore": state.page++; renderExplore(); break;
    case "resetFilters":
      state.search = ""; state.category = "all"; state.mood = "all"; $("#globalSearch").value = ""; renderExplore(true); break;
    case "clearSearch":
      state.search = ""; $("#globalSearch").value = ""; $("#clearSearch").classList.remove("visible"); renderExplore(true); break;
    case "clearSaved":
      if (!state.saved.size) { showToast("Daftar simpanan sudah kosong."); break; }
      if (window.confirm("Hapus semua tutorial dari daftar simpanan?")) {
        state.saved.clear(); persistState(); renderSaved(); renderHome(); updateCounts(); showToast("Daftar simpanan dibersihkan.");
      }
      break;
    case "modalClose": closeModal(); break;
    case "modalBackdrop": if (event.target.id === "modalBackdrop") closeModal(); break;
    case "themeToggle": toggleTheme(); break;
    case "settingsTheme": toggleTheme(); openSettings(); break;
    case "saveSettings": {
      const name = $("#settingsName").value.trim();
      state.userName = name || "Learner"; persistState(); renderHome(); closeModal(); showToast("Pengaturan disimpan."); break;
    }
    case "editProfile": openSettings(); break;
    case "manageCategories": setView("explore"); break;
    case "settings": openSettings(); break;
    case "helpButton": openAbout(); break;
    case "about": openAbout(); break;
    case "exportProgress": exportProgress(); break;
    case "quizNext": nextQuiz(); break;
    case "restartQuiz": startQuiz(); break;
    case "mobileMenu": $("#sidebar").classList.toggle("mobile-open"); break;
    case "backToTop": $("#contentScroll").scrollTo({ top: 0, behavior: "smooth" }); break;
  }
}

function bindEvents() {
  document.addEventListener("click", handleClick);
  $("#globalSearch").addEventListener("input", event => searchChanged(event.target.value));
  $("#globalSearch").addEventListener("keydown", event => {
    if (event.key === "Enter") { setView("explore"); renderExplore(true); $("#exploreGrid").scrollIntoView({ behavior: "smooth", block: "start" }); }
  });
  $("#sortSelect").addEventListener("change", event => { state.sort = event.target.value; renderExplore(true); });
  $("#modalBody").addEventListener("input", event => {
    if (event.target.id === "lessonNote" && state.selectedLesson) {
      state.notes[state.selectedLesson] = event.target.value;
      persistState();
    }
  });
  document.addEventListener("keydown", event => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
      event.preventDefault(); $("#globalSearch").focus();
    }
    if (event.key === "Escape") closeModal();
    if (event.key.toLowerCase() === "h" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) setView("home");
    if (event.key.toLowerCase() === "e" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) setView("explore");
  });
  $("#contentScroll").addEventListener("scroll", () => {
    $("#backToTop").classList.toggle("visible", $("#contentScroll").scrollTop > 450);
  }, { passive: true });
  window.addEventListener("storage", event => {
    if (event.key === STORAGE_KEY) { loadState(); renderAllViews(); }
  });
}

function renderAllViews() {
  renderHome(); renderExplore(true); renderSaved(); renderProgress(); updateCounts();
}

function init() {
  loadState();
  document.body.classList.toggle("light-mode", state.lightMode);
  $("#themeToggle").textContent = state.lightMode ? "☾" : "☼";
  renderCategoryNavigation();
  bindEvents();
  renderAllViews();
  startQuiz();
}

init();


/* ============================================================
   FIELD GUIDE: EXTENDING THE TUTORIAL LIBRARY
   Catatan per tutorial untuk membantu pengembangan materi.
   ============================================================ */

// LESSON 0001 — Panduan langkah demi langkah: Struktur HTML yang rapi
// Category: Coding & Web | Level: Pemula | Duration: 12 minutes
// Teaching goal: Pelajari struktur html yang rapi dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan struktur html yang rapi pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan struktur html yang rapi perlu jelas sebelum mulai.
// Review prompt: What changed after you applied struktur html yang rapi?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0002 — Proyek mini: Membuat navigasi responsif
// Category: Coding & Web | Level: Lanjutan | Duration: 28 minutes
// Teaching goal: Proyek mini yang membantumu mempraktikkan membuat navigasi responsif dari perencanaan sampai evaluasi.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat navigasi responsif pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat navigasi responsif perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat navigasi responsif?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0003 — Checklist penerapan: Memahami selector CSS
// Category: Coding & Web | Level: Lanjutan | Duration: 25 minutes
// Teaching goal: Daftar periksa untuk menerapkan memahami selector css tanpa melewatkan hal penting.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan memahami selector css pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan memahami selector css perlu jelas sebelum mulai.
// Review prompt: What changed after you applied memahami selector css?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0004 — Panduan langkah demi langkah: Menggunakan CSS Grid
// Category: Coding & Web | Level: Menengah | Duration: 18 minutes
// Teaching goal: Pelajari menggunakan css grid dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan menggunakan css grid pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan menggunakan css grid perlu jelas sebelum mulai.
// Review prompt: What changed after you applied menggunakan css grid?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0005 — Panduan langkah demi langkah: Validasi form sederhana
// Category: Coding & Web | Level: Pemula | Duration: 12 minutes
// Teaching goal: Pelajari validasi form sederhana dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan validasi form sederhana pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan validasi form sederhana perlu jelas sebelum mulai.
// Review prompt: What changed after you applied validasi form sederhana?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0006 — Proyek mini: Validasi form sederhana
// Category: Coding & Web | Level: Menengah | Duration: 21 minutes
// Teaching goal: Proyek mini yang membantumu mempraktikkan validasi form sederhana dari perencanaan sampai evaluasi.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan validasi form sederhana pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan validasi form sederhana perlu jelas sebelum mulai.
// Review prompt: What changed after you applied validasi form sederhana?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0007 — Panduan langkah demi langkah: Manipulasi DOM
// Category: Coding & Web | Level: Lanjutan | Duration: 25 minutes
// Teaching goal: Pelajari manipulasi dom dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan manipulasi dom pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan manipulasi dom perlu jelas sebelum mulai.
// Review prompt: What changed after you applied manipulasi dom?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0008 — Workflow praktis: Membuat modal dialog
// Category: Coding & Web | Level: Menengah | Duration: 21 minutes
// Teaching goal: Bangun alur kerja membuat modal dialog yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat modal dialog pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat modal dialog perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat modal dialog?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0009 — Panduan langkah demi langkah: Menyimpan preferensi lokal
// Category: Coding & Web | Level: Lanjutan | Duration: 25 minutes
// Teaching goal: Pelajari menyimpan preferensi lokal dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan menyimpan preferensi lokal pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan menyimpan preferensi lokal perlu jelas sebelum mulai.
// Review prompt: What changed after you applied menyimpan preferensi lokal?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0010 — Workflow praktis: Mencari bug di console
// Category: Coding & Web | Level: Menengah | Duration: 21 minutes
// Teaching goal: Bangun alur kerja mencari bug di console yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mencari bug di console pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mencari bug di console perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mencari bug di console?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0011 — Latihan mandiri: Menggunakan array dan object
// Category: Coding & Web | Level: Pemula | Duration: 18 minutes
// Teaching goal: Latihan terarah untuk menerapkan menggunakan array dan object sambil mengecek pemahamanmu sendiri.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan menggunakan array dan object pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan menggunakan array dan object perlu jelas sebelum mulai.
// Review prompt: What changed after you applied menggunakan array dan object?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0012 — Panduan langkah demi langkah: Membangun accordion
// Category: Coding & Web | Level: Pemula | Duration: 12 minutes
// Teaching goal: Pelajari membangun accordion dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membangun accordion pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membangun accordion perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membangun accordion?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0013 — Proyek mini: Membuat tombol tema gelap
// Category: Coding & Web | Level: Lanjutan | Duration: 28 minutes
// Teaching goal: Proyek mini yang membantumu mempraktikkan membuat tombol tema gelap dari perencanaan sampai evaluasi.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat tombol tema gelap pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat tombol tema gelap perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat tombol tema gelap?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0014 — Panduan langkah demi langkah: Membuat kartu dinamis
// Category: Coding & Web | Level: Pemula | Duration: 12 minutes
// Teaching goal: Pelajari membuat kartu dinamis dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat kartu dinamis pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat kartu dinamis perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat kartu dinamis?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0015 — Panduan langkah demi langkah: Merapikan proyek VS Code
// Category: Coding & Web | Level: Menengah | Duration: 18 minutes
// Teaching goal: Pelajari merapikan proyek vs code dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan merapikan proyek vs code pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan merapikan proyek vs code perlu jelas sebelum mulai.
// Review prompt: What changed after you applied merapikan proyek vs code?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0016 — Workflow praktis: Membuat komponen kartu
// Category: Coding & Web | Level: Pemula | Duration: 15 minutes
// Teaching goal: Bangun alur kerja membuat komponen kartu yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat komponen kartu pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat komponen kartu perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat komponen kartu?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0017 — Proyek mini: Membuat halaman profil
// Category: Coding & Web | Level: Menengah | Duration: 21 minutes
// Teaching goal: Proyek mini yang membantumu mempraktikkan membuat halaman profil dari perencanaan sampai evaluasi.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat halaman profil pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat halaman profil perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat halaman profil?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0018 — Panduan langkah demi langkah: Membuat progress bar
// Category: Coding & Web | Level: Lanjutan | Duration: 25 minutes
// Teaching goal: Pelajari membuat progress bar dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat progress bar pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat progress bar perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat progress bar?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0019 — Workflow praktis: Membuat toast notification
// Category: Coding & Web | Level: Menengah | Duration: 21 minutes
// Teaching goal: Bangun alur kerja membuat toast notification yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat toast notification pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat toast notification perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat toast notification?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0020 — Panduan langkah demi langkah: Membuat halaman login demo
// Category: Coding & Web | Level: Lanjutan | Duration: 25 minutes
// Teaching goal: Pelajari membuat halaman login demo dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat halaman login demo pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat halaman login demo perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat halaman login demo?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0021 — Workflow praktis: Membuat timer fokus
// Category: Coding & Web | Level: Menengah | Duration: 21 minutes
// Teaching goal: Bangun alur kerja membuat timer fokus yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat timer fokus pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat timer fokus perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat timer fokus?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0022 — Latihan mandiri: Membuat kalkulator dasar
// Category: Coding & Web | Level: Pemula | Duration: 18 minutes
// Teaching goal: Latihan terarah untuk menerapkan membuat kalkulator dasar sambil mengecek pemahamanmu sendiri.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat kalkulator dasar pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat kalkulator dasar perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat kalkulator dasar?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0023 — Panduan langkah demi langkah: Membuat tooltip aksesibel
// Category: Coding & Web | Level: Pemula | Duration: 12 minutes
// Teaching goal: Pelajari membuat tooltip aksesibel dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat tooltip aksesibel pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat tooltip aksesibel perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat tooltip aksesibel?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0024 — Proyek mini: Mengatur variabel CSS
// Category: Coding & Web | Level: Lanjutan | Duration: 28 minutes
// Teaching goal: Proyek mini yang membantumu mempraktikkan mengatur variabel css dari perencanaan sampai evaluasi.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mengatur variabel css pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mengatur variabel css perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mengatur variabel css?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0025 — Panduan langkah demi langkah: Membuat halaman 404
// Category: Coding & Web | Level: Pemula | Duration: 12 minutes
// Teaching goal: Pelajari membuat halaman 404 dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat halaman 404 pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat halaman 404 perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat halaman 404?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0026 — Latihan mandiri: Membuat halaman 404
// Category: Coding & Web | Level: Lanjutan | Duration: 31 minutes
// Teaching goal: Latihan terarah untuk menerapkan membuat halaman 404 sambil mengecek pemahamanmu sendiri.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat halaman 404 pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat halaman 404 perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat halaman 404?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0027 — Workflow praktis: Mengoptimalkan gambar web
// Category: Coding & Web | Level: Pemula | Duration: 15 minutes
// Teaching goal: Bangun alur kerja mengoptimalkan gambar web yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mengoptimalkan gambar web pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mengoptimalkan gambar web perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mengoptimalkan gambar web?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0028 — Panduan langkah demi langkah: Membuat tabel responsif
// Category: Coding & Web | Level: Menengah | Duration: 18 minutes
// Teaching goal: Pelajari membuat tabel responsif dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat tabel responsif pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat tabel responsif perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat tabel responsif?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0029 — Panduan langkah demi langkah: Membuat menu mobile
// Category: Coding & Web | Level: Lanjutan | Duration: 25 minutes
// Teaching goal: Pelajari membuat menu mobile dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat menu mobile pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat menu mobile perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat menu mobile?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0030 — Workflow praktis: Membuat halaman landing
// Category: Coding & Web | Level: Menengah | Duration: 21 minutes
// Teaching goal: Bangun alur kerja membuat halaman landing yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat halaman landing pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat halaman landing perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat halaman landing?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0031 — Panduan langkah demi langkah: Menentukan palet warna
// Category: Desain & Kreativitas | Level: Menengah | Duration: 18 minutes
// Teaching goal: Pelajari menentukan palet warna dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan menentukan palet warna pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan menentukan palet warna perlu jelas sebelum mulai.
// Review prompt: What changed after you applied menentukan palet warna?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0032 — Workflow praktis: Menyusun hierarki visual
// Category: Desain & Kreativitas | Level: Pemula | Duration: 15 minutes
// Teaching goal: Bangun alur kerja menyusun hierarki visual yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan menyusun hierarki visual pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan menyusun hierarki visual perlu jelas sebelum mulai.
// Review prompt: What changed after you applied menyusun hierarki visual?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0033 — Panduan langkah demi langkah: Memilih pasangan font
// Category: Desain & Kreativitas | Level: Menengah | Duration: 18 minutes
// Teaching goal: Pelajari memilih pasangan font dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan memilih pasangan font pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan memilih pasangan font perlu jelas sebelum mulai.
// Review prompt: What changed after you applied memilih pasangan font?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0034 — Workflow praktis: Mendesain kartu UI
// Category: Desain & Kreativitas | Level: Pemula | Duration: 15 minutes
// Teaching goal: Bangun alur kerja mendesain kartu ui yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mendesain kartu ui pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mendesain kartu ui perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mendesain kartu ui?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0035 — Latihan mandiri: Membuat wireframe cepat
// Category: Desain & Kreativitas | Level: Lanjutan | Duration: 31 minutes
// Teaching goal: Latihan terarah untuk menerapkan membuat wireframe cepat sambil mengecek pemahamanmu sendiri.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat wireframe cepat pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat wireframe cepat perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat wireframe cepat?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0036 — Workflow praktis: Mengenal ruang kosong
// Category: Desain & Kreativitas | Level: Lanjutan | Duration: 28 minutes
// Teaching goal: Bangun alur kerja mengenal ruang kosong yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mengenal ruang kosong pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mengenal ruang kosong perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mengenal ruang kosong?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0037 — Workflow praktis: Membuat ikon konsisten
// Category: Desain & Kreativitas | Level: Menengah | Duration: 21 minutes
// Teaching goal: Bangun alur kerja membuat ikon konsisten yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat ikon konsisten pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat ikon konsisten perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat ikon konsisten?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0038 — Checklist penerapan: Mendesain tombol interaktif
// Category: Desain & Kreativitas | Level: Menengah | Duration: 18 minutes
// Teaching goal: Daftar periksa untuk menerapkan mendesain tombol interaktif tanpa melewatkan hal penting.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mendesain tombol interaktif pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mendesain tombol interaktif perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mendesain tombol interaktif?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0039 — Latihan mandiri: Membuat prototipe klik
// Category: Desain & Kreativitas | Level: Menengah | Duration: 24 minutes
// Teaching goal: Latihan terarah untuk menerapkan membuat prototipe klik sambil mengecek pemahamanmu sendiri.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat prototipe klik pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat prototipe klik perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat prototipe klik?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0040 — Workflow praktis: Menerapkan prinsip kontras
// Category: Desain & Kreativitas | Level: Lanjutan | Duration: 28 minutes
// Teaching goal: Bangun alur kerja menerapkan prinsip kontras yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan menerapkan prinsip kontras pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan menerapkan prinsip kontras perlu jelas sebelum mulai.
// Review prompt: What changed after you applied menerapkan prinsip kontras?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0041 — Panduan langkah demi langkah: Mendesain halaman onboarding
// Category: Desain & Kreativitas | Level: Pemula | Duration: 12 minutes
// Teaching goal: Pelajari mendesain halaman onboarding dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mendesain halaman onboarding pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mendesain halaman onboarding perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mendesain halaman onboarding?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0042 — Panduan langkah demi langkah: Membuat komponen reusable
// Category: Desain & Kreativitas | Level: Menengah | Duration: 18 minutes
// Teaching goal: Pelajari membuat komponen reusable dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat komponen reusable pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat komponen reusable perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat komponen reusable?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0043 — Workflow praktis: Menyusun grid editorial
// Category: Desain & Kreativitas | Level: Pemula | Duration: 15 minutes
// Teaching goal: Bangun alur kerja menyusun grid editorial yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan menyusun grid editorial pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan menyusun grid editorial perlu jelas sebelum mulai.
// Review prompt: What changed after you applied menyusun grid editorial?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0044 — Workflow praktis: Mengevaluasi desain sendiri
// Category: Desain & Kreativitas | Level: Lanjutan | Duration: 28 minutes
// Teaching goal: Bangun alur kerja mengevaluasi desain sendiri yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mengevaluasi desain sendiri pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mengevaluasi desain sendiri perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mengevaluasi desain sendiri?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0045 — Workflow praktis: Membuat style guide
// Category: Desain & Kreativitas | Level: Pemula | Duration: 15 minutes
// Teaching goal: Bangun alur kerja membuat style guide yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat style guide pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat style guide perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat style guide?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0046 — Workflow praktis: Membuat efek kaca UI
// Category: Desain & Kreativitas | Level: Menengah | Duration: 21 minutes
// Teaching goal: Bangun alur kerja membuat efek kaca ui yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat efek kaca ui pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat efek kaca ui perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat efek kaca ui?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0047 — Workflow praktis: Memilih radius komponen
// Category: Desain & Kreativitas | Level: Lanjutan | Duration: 28 minutes
// Teaching goal: Bangun alur kerja memilih radius komponen yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan memilih radius komponen pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan memilih radius komponen perlu jelas sebelum mulai.
// Review prompt: What changed after you applied memilih radius komponen?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0048 — Workflow praktis: Membuat cover proyek
// Category: Desain & Kreativitas | Level: Menengah | Duration: 21 minutes
// Teaching goal: Bangun alur kerja membuat cover proyek yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat cover proyek pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat cover proyek perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat cover proyek?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0049 — Checklist penerapan: Mengatur alignment
// Category: Desain & Kreativitas | Level: Menengah | Duration: 18 minutes
// Teaching goal: Daftar periksa untuk menerapkan mengatur alignment tanpa melewatkan hal penting.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mengatur alignment pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mengatur alignment perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mengatur alignment?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0050 — Latihan mandiri: Mendesain kartu profil
// Category: Desain & Kreativitas | Level: Menengah | Duration: 24 minutes
// Teaching goal: Latihan terarah untuk menerapkan mendesain kartu profil sambil mengecek pemahamanmu sendiri.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mendesain kartu profil pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mendesain kartu profil perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mendesain kartu profil?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0051 — Workflow praktis: Merancang notifikasi
// Category: Desain & Kreativitas | Level: Lanjutan | Duration: 28 minutes
// Teaching goal: Bangun alur kerja merancang notifikasi yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan merancang notifikasi pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan merancang notifikasi perlu jelas sebelum mulai.
// Review prompt: What changed after you applied merancang notifikasi?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0052 — Panduan langkah demi langkah: Membuat ikon dengan bentuk
// Category: Desain & Kreativitas | Level: Pemula | Duration: 12 minutes
// Teaching goal: Pelajari membuat ikon dengan bentuk dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat ikon dengan bentuk pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat ikon dengan bentuk perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat ikon dengan bentuk?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0053 — Panduan langkah demi langkah: Membangun variasi tombol
// Category: Desain & Kreativitas | Level: Menengah | Duration: 18 minutes
// Teaching goal: Pelajari membangun variasi tombol dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membangun variasi tombol pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membangun variasi tombol perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membangun variasi tombol?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0054 — Workflow praktis: Memilih warna aksen
// Category: Desain & Kreativitas | Level: Pemula | Duration: 15 minutes
// Teaching goal: Bangun alur kerja memilih warna aksen yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan memilih warna aksen pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan memilih warna aksen perlu jelas sebelum mulai.
// Review prompt: What changed after you applied memilih warna aksen?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0055 — Workflow praktis: Membuat poster digital
// Category: Desain & Kreativitas | Level: Lanjutan | Duration: 28 minutes
// Teaching goal: Bangun alur kerja membuat poster digital yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat poster digital pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat poster digital perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat poster digital?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0056 — Panduan langkah demi langkah: Mendesain halaman portofolio
// Category: Desain & Kreativitas | Level: Lanjutan | Duration: 25 minutes
// Teaching goal: Pelajari mendesain halaman portofolio dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mendesain halaman portofolio pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mendesain halaman portofolio perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mendesain halaman portofolio?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0057 — Workflow praktis: Membuat tampilan mobile
// Category: Desain & Kreativitas | Level: Menengah | Duration: 21 minutes
// Teaching goal: Bangun alur kerja membuat tampilan mobile yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat tampilan mobile pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat tampilan mobile perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat tampilan mobile?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0058 — Panduan langkah demi langkah: Membuat diagram sederhana
// Category: Desain & Kreativitas | Level: Lanjutan | Duration: 25 minutes
// Teaching goal: Pelajari membuat diagram sederhana dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat diagram sederhana pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat diagram sederhana perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat diagram sederhana?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0059 — Workflow praktis: Menyusun komposisi asimetris
// Category: Desain & Kreativitas | Level: Menengah | Duration: 21 minutes
// Teaching goal: Bangun alur kerja menyusun komposisi asimetris yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan menyusun komposisi asimetris pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan menyusun komposisi asimetris perlu jelas sebelum mulai.
// Review prompt: What changed after you applied menyusun komposisi asimetris?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0060 — Checklist penerapan: Mendesain halaman tutorial
// Category: Desain & Kreativitas | Level: Menengah | Duration: 18 minutes
// Teaching goal: Daftar periksa untuk menerapkan mendesain halaman tutorial tanpa melewatkan hal penting.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mendesain halaman tutorial pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mendesain halaman tutorial perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mendesain halaman tutorial?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0061 — Panduan langkah demi langkah: Mengenali komponen komputer
// Category: Teknologi & Komputer | Level: Lanjutan | Duration: 25 minutes
// Teaching goal: Pelajari mengenali komponen komputer dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mengenali komponen komputer pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mengenali komponen komputer perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mengenali komponen komputer?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0062 — Workflow praktis: Mengatur folder kerja
// Category: Teknologi & Komputer | Level: Menengah | Duration: 21 minutes
// Teaching goal: Bangun alur kerja mengatur folder kerja yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mengatur folder kerja pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mengatur folder kerja perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mengatur folder kerja?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0063 — Workflow praktis: Memahami file extension
// Category: Teknologi & Komputer | Level: Lanjutan | Duration: 28 minutes
// Teaching goal: Bangun alur kerja memahami file extension yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan memahami file extension pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan memahami file extension perlu jelas sebelum mulai.
// Review prompt: What changed after you applied memahami file extension?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0064 — Panduan langkah demi langkah: Memeriksa ruang penyimpanan
// Category: Teknologi & Komputer | Level: Pemula | Duration: 12 minutes
// Teaching goal: Pelajari memeriksa ruang penyimpanan dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan memeriksa ruang penyimpanan pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan memeriksa ruang penyimpanan perlu jelas sebelum mulai.
// Review prompt: What changed after you applied memeriksa ruang penyimpanan?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0065 — Proyek mini: Mengelola aplikasi startup
// Category: Teknologi & Komputer | Level: Lanjutan | Duration: 28 minutes
// Teaching goal: Proyek mini yang membantumu mempraktikkan mengelola aplikasi startup dari perencanaan sampai evaluasi.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mengelola aplikasi startup pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mengelola aplikasi startup perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mengelola aplikasi startup?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0066 — Workflow praktis: Memahami RAM dan storage
// Category: Teknologi & Komputer | Level: Pemula | Duration: 15 minutes
// Teaching goal: Bangun alur kerja memahami ram dan storage yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan memahami ram dan storage pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan memahami ram dan storage perlu jelas sebelum mulai.
// Review prompt: What changed after you applied memahami ram dan storage?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0067 — Latihan mandiri: Mengenal sistem operasi
// Category: Teknologi & Komputer | Level: Lanjutan | Duration: 31 minutes
// Teaching goal: Latihan terarah untuk menerapkan mengenal sistem operasi sambil mengecek pemahamanmu sendiri.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mengenal sistem operasi pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mengenal sistem operasi perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mengenal sistem operasi?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0068 — Workflow praktis: Memperbarui aplikasi
// Category: Teknologi & Komputer | Level: Pemula | Duration: 15 minutes
// Teaching goal: Bangun alur kerja memperbarui aplikasi yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan memperbarui aplikasi pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan memperbarui aplikasi perlu jelas sebelum mulai.
// Review prompt: What changed after you applied memperbarui aplikasi?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0069 — Proyek mini: Membuat arsip ZIP
// Category: Teknologi & Komputer | Level: Menengah | Duration: 21 minutes
// Teaching goal: Proyek mini yang membantumu mempraktikkan membuat arsip zip dari perencanaan sampai evaluasi.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat arsip zip pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat arsip zip perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat arsip zip?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0070 — Panduan langkah demi langkah: Membaca spesifikasi perangkat
// Category: Teknologi & Komputer | Level: Lanjutan | Duration: 25 minutes
// Teaching goal: Pelajari membaca spesifikasi perangkat dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membaca spesifikasi perangkat pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membaca spesifikasi perangkat perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membaca spesifikasi perangkat?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0071 — Workflow praktis: Menghubungkan monitor eksternal
// Category: Teknologi & Komputer | Level: Menengah | Duration: 21 minutes
// Teaching goal: Bangun alur kerja menghubungkan monitor eksternal yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan menghubungkan monitor eksternal pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan menghubungkan monitor eksternal perlu jelas sebelum mulai.
// Review prompt: What changed after you applied menghubungkan monitor eksternal?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0072 — Panduan langkah demi langkah: Membersihkan file sementara
// Category: Teknologi & Komputer | Level: Lanjutan | Duration: 25 minutes
// Teaching goal: Pelajari membersihkan file sementara dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membersihkan file sementara pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membersihkan file sementara perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membersihkan file sementara?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0073 — Workflow praktis: Memahami jaringan Wi-Fi
// Category: Teknologi & Komputer | Level: Menengah | Duration: 21 minutes
// Teaching goal: Bangun alur kerja memahami jaringan wi-fi yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan memahami jaringan wi-fi pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan memahami jaringan wi-fi perlu jelas sebelum mulai.
// Review prompt: What changed after you applied memahami jaringan wi-fi?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0074 — Latihan mandiri: Memeriksa koneksi internet
// Category: Teknologi & Komputer | Level: Pemula | Duration: 18 minutes
// Teaching goal: Latihan terarah untuk menerapkan memeriksa koneksi internet sambil mengecek pemahamanmu sendiri.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan memeriksa koneksi internet pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan memeriksa koneksi internet perlu jelas sebelum mulai.
// Review prompt: What changed after you applied memeriksa koneksi internet?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0075 — Panduan langkah demi langkah: Mengelola akun perangkat
// Category: Teknologi & Komputer | Level: Pemula | Duration: 12 minutes
// Teaching goal: Pelajari mengelola akun perangkat dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mengelola akun perangkat pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mengelola akun perangkat perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mengelola akun perangkat?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0076 — Workflow praktis: Mengenal CPU dan GPU
// Category: Teknologi & Komputer | Level: Lanjutan | Duration: 28 minutes
// Teaching goal: Bangun alur kerja mengenal cpu dan gpu yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mengenal cpu dan gpu pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mengenal cpu dan gpu perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mengenal cpu dan gpu?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0077 — Workflow praktis: Memahami format gambar
// Category: Teknologi & Komputer | Level: Pemula | Duration: 15 minutes
// Teaching goal: Bangun alur kerja memahami format gambar yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan memahami format gambar pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan memahami format gambar perlu jelas sebelum mulai.
// Review prompt: What changed after you applied memahami format gambar?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0078 — Latihan mandiri: Memahami format audio
// Category: Teknologi & Komputer | Level: Lanjutan | Duration: 31 minutes
// Teaching goal: Latihan terarah untuk menerapkan memahami format audio sambil mengecek pemahamanmu sendiri.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan memahami format audio pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan memahami format audio perlu jelas sebelum mulai.
// Review prompt: What changed after you applied memahami format audio?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0079 — Workflow praktis: Mengatur backup foto
// Category: Teknologi & Komputer | Level: Pemula | Duration: 15 minutes
// Teaching goal: Bangun alur kerja mengatur backup foto yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mengatur backup foto pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mengatur backup foto perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mengatur backup foto?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0080 — Proyek mini: Membuat folder proyek
// Category: Teknologi & Komputer | Level: Menengah | Duration: 21 minutes
// Teaching goal: Proyek mini yang membantumu mempraktikkan membuat folder proyek dari perencanaan sampai evaluasi.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat folder proyek pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat folder proyek perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat folder proyek?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0081 — Panduan langkah demi langkah: Mengenal virtual memory
// Category: Teknologi & Komputer | Level: Lanjutan | Duration: 25 minutes
// Teaching goal: Pelajari mengenal virtual memory dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mengenal virtual memory pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mengenal virtual memory perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mengenal virtual memory?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0082 — Workflow praktis: Memahami proses aplikasi
// Category: Teknologi & Komputer | Level: Menengah | Duration: 21 minutes
// Teaching goal: Bangun alur kerja memahami proses aplikasi yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan memahami proses aplikasi pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan memahami proses aplikasi perlu jelas sebelum mulai.
// Review prompt: What changed after you applied memahami proses aplikasi?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0083 — Panduan langkah demi langkah: Mengenal file system
// Category: Teknologi & Komputer | Level: Lanjutan | Duration: 25 minutes
// Teaching goal: Pelajari mengenal file system dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mengenal file system pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mengenal file system perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mengenal file system?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0084 — Workflow praktis: Membuat media instalasi secara aman
// Category: Teknologi & Komputer | Level: Menengah | Duration: 21 minutes
// Teaching goal: Bangun alur kerja membuat media instalasi secara aman yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat media instalasi secara aman pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat media instalasi secara aman perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat media instalasi secara aman?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0085 — Latihan mandiri: Mengenal browser developer tools
// Category: Teknologi & Komputer | Level: Pemula | Duration: 18 minutes
// Teaching goal: Latihan terarah untuk menerapkan mengenal browser developer tools sambil mengecek pemahamanmu sendiri.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mengenal browser developer tools pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mengenal browser developer tools perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mengenal browser developer tools?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0086 — Workflow praktis: Mengelola ekstensi browser
// Category: Teknologi & Komputer | Level: Pemula | Duration: 15 minutes
// Teaching goal: Bangun alur kerja mengelola ekstensi browser yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mengelola ekstensi browser pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mengelola ekstensi browser perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mengelola ekstensi browser?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0087 — Workflow praktis: Mengecek kesehatan disk
// Category: Teknologi & Komputer | Level: Lanjutan | Duration: 28 minutes
// Teaching goal: Bangun alur kerja mengecek kesehatan disk yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mengecek kesehatan disk pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mengecek kesehatan disk perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mengecek kesehatan disk?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0088 — Checklist penerapan: Memahami update keamanan
// Category: Teknologi & Komputer | Level: Lanjutan | Duration: 25 minutes
// Teaching goal: Daftar periksa untuk menerapkan memahami update keamanan tanpa melewatkan hal penting.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan memahami update keamanan pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan memahami update keamanan perlu jelas sebelum mulai.
// Review prompt: What changed after you applied memahami update keamanan?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0089 — Latihan mandiri: Mengelola perangkat USB
// Category: Teknologi & Komputer | Level: Lanjutan | Duration: 31 minutes
// Teaching goal: Latihan terarah untuk menerapkan mengelola perangkat usb sambil mengecek pemahamanmu sendiri.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mengelola perangkat usb pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mengelola perangkat usb perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mengelola perangkat usb?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0090 — Workflow praktis: Membuat checklist perawatan
// Category: Teknologi & Komputer | Level: Pemula | Duration: 15 minutes
// Teaching goal: Bangun alur kerja membuat checklist perawatan yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat checklist perawatan pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat checklist perawatan perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat checklist perawatan?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0091 — Panduan langkah demi langkah: Membuat jadwal belajar realistis
// Category: Belajar & Produktivitas | Level: Pemula | Duration: 12 minutes
// Teaching goal: Pelajari membuat jadwal belajar realistis dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat jadwal belajar realistis pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat jadwal belajar realistis perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat jadwal belajar realistis?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0092 — Panduan langkah demi langkah: Membuat catatan Cornell
// Category: Belajar & Produktivitas | Level: Lanjutan | Duration: 25 minutes
// Teaching goal: Pelajari membuat catatan cornell dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat catatan cornell pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat catatan cornell perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat catatan cornell?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0093 — Panduan langkah demi langkah: Menyusun target mingguan
// Category: Belajar & Produktivitas | Level: Pemula | Duration: 12 minutes
// Teaching goal: Pelajari menyusun target mingguan dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan menyusun target mingguan pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan menyusun target mingguan perlu jelas sebelum mulai.
// Review prompt: What changed after you applied menyusun target mingguan?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0094 — Workflow praktis: Membuat flashcard efektif
// Category: Belajar & Produktivitas | Level: Lanjutan | Duration: 28 minutes
// Teaching goal: Bangun alur kerja membuat flashcard efektif yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat flashcard efektif pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat flashcard efektif perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat flashcard efektif?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0095 — Panduan langkah demi langkah: Menerapkan spaced repetition
// Category: Belajar & Produktivitas | Level: Pemula | Duration: 12 minutes
// Teaching goal: Pelajari menerapkan spaced repetition dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan menerapkan spaced repetition pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan menerapkan spaced repetition perlu jelas sebelum mulai.
// Review prompt: What changed after you applied menerapkan spaced repetition?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0096 — Panduan langkah demi langkah: Membuat ringkasan materi
// Category: Belajar & Produktivitas | Level: Menengah | Duration: 18 minutes
// Teaching goal: Pelajari membuat ringkasan materi dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat ringkasan materi pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat ringkasan materi perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat ringkasan materi?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0097 — Workflow praktis: Memecah tugas besar
// Category: Belajar & Produktivitas | Level: Pemula | Duration: 15 minutes
// Teaching goal: Bangun alur kerja memecah tugas besar yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan memecah tugas besar pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan memecah tugas besar perlu jelas sebelum mulai.
// Review prompt: What changed after you applied memecah tugas besar?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0098 — Latihan mandiri: Mengurangi distraksi belajar
// Category: Belajar & Produktivitas | Level: Lanjutan | Duration: 31 minutes
// Teaching goal: Latihan terarah untuk menerapkan mengurangi distraksi belajar sambil mengecek pemahamanmu sendiri.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mengurangi distraksi belajar pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mengurangi distraksi belajar perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mengurangi distraksi belajar?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0099 — Panduan langkah demi langkah: Menyiapkan sesi ujian
// Category: Belajar & Produktivitas | Level: Lanjutan | Duration: 25 minutes
// Teaching goal: Pelajari menyiapkan sesi ujian dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan menyiapkan sesi ujian pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan menyiapkan sesi ujian perlu jelas sebelum mulai.
// Review prompt: What changed after you applied menyiapkan sesi ujian?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0100 — Proyek mini: Mengevaluasi hasil belajar
// Category: Belajar & Produktivitas | Level: Menengah | Duration: 21 minutes
// Teaching goal: Proyek mini yang membantumu mempraktikkan mengevaluasi hasil belajar dari perencanaan sampai evaluasi.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mengevaluasi hasil belajar pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mengevaluasi hasil belajar perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mengevaluasi hasil belajar?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0101 — Panduan langkah demi langkah: Mengatur meja belajar
// Category: Belajar & Produktivitas | Level: Lanjutan | Duration: 25 minutes
// Teaching goal: Pelajari mengatur meja belajar dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mengatur meja belajar pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mengatur meja belajar perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mengatur meja belajar?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0102 — Panduan langkah demi langkah: Mencatat pertanyaan penting
// Category: Belajar & Produktivitas | Level: Pemula | Duration: 12 minutes
// Teaching goal: Pelajari mencatat pertanyaan penting dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mencatat pertanyaan penting pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mencatat pertanyaan penting perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mencatat pertanyaan penting?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0103 — Panduan langkah demi langkah: Membuat checklist tugas
// Category: Belajar & Produktivitas | Level: Lanjutan | Duration: 25 minutes
// Teaching goal: Pelajari membuat checklist tugas dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat checklist tugas pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat checklist tugas perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat checklist tugas?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0104 — Workflow praktis: Mengatur waktu istirahat
// Category: Belajar & Produktivitas | Level: Menengah | Duration: 21 minutes
// Teaching goal: Bangun alur kerja mengatur waktu istirahat yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mengatur waktu istirahat pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mengatur waktu istirahat perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mengatur waktu istirahat?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0105 — Workflow praktis: Membuat rencana proyek sekolah
// Category: Belajar & Produktivitas | Level: Lanjutan | Duration: 28 minutes
// Teaching goal: Bangun alur kerja membuat rencana proyek sekolah yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat rencana proyek sekolah pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat rencana proyek sekolah perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat rencana proyek sekolah?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0106 — Workflow praktis: Membaca teks secara aktif
// Category: Belajar & Produktivitas | Level: Pemula | Duration: 15 minutes
// Teaching goal: Bangun alur kerja membaca teks secara aktif yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membaca teks secara aktif pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membaca teks secara aktif perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membaca teks secara aktif?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0107 — Panduan langkah demi langkah: Mengelola tugas kelompok
// Category: Belajar & Produktivitas | Level: Menengah | Duration: 18 minutes
// Teaching goal: Pelajari mengelola tugas kelompok dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mengelola tugas kelompok pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mengelola tugas kelompok perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mengelola tugas kelompok?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0108 — Workflow praktis: Membagi peran tim
// Category: Belajar & Produktivitas | Level: Pemula | Duration: 15 minutes
// Teaching goal: Bangun alur kerja membagi peran tim yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membagi peran tim pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membagi peran tim perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membagi peran tim?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0109 — Latihan mandiri: Menyusun presentasi singkat
// Category: Belajar & Produktivitas | Level: Lanjutan | Duration: 31 minutes
// Teaching goal: Latihan terarah untuk menerapkan menyusun presentasi singkat sambil mengecek pemahamanmu sendiri.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan menyusun presentasi singkat pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan menyusun presentasi singkat perlu jelas sebelum mulai.
// Review prompt: What changed after you applied menyusun presentasi singkat?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0110 — Panduan langkah demi langkah: Membuat catatan digital
// Category: Belajar & Produktivitas | Level: Lanjutan | Duration: 25 minutes
// Teaching goal: Pelajari membuat catatan digital dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat catatan digital pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat catatan digital perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat catatan digital?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0111 — Proyek mini: Mengarsipkan dokumen sekolah
// Category: Belajar & Produktivitas | Level: Menengah | Duration: 21 minutes
// Teaching goal: Proyek mini yang membantumu mempraktikkan mengarsipkan dokumen sekolah dari perencanaan sampai evaluasi.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mengarsipkan dokumen sekolah pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mengarsipkan dokumen sekolah perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mengarsipkan dokumen sekolah?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0112 — Panduan langkah demi langkah: Membuat daftar prioritas
// Category: Belajar & Produktivitas | Level: Lanjutan | Duration: 25 minutes
// Teaching goal: Pelajari membuat daftar prioritas dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat daftar prioritas pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat daftar prioritas perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat daftar prioritas?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0113 — Panduan langkah demi langkah: Menghindari multitasking
// Category: Belajar & Produktivitas | Level: Pemula | Duration: 12 minutes
// Teaching goal: Pelajari menghindari multitasking dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan menghindari multitasking pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan menghindari multitasking perlu jelas sebelum mulai.
// Review prompt: What changed after you applied menghindari multitasking?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0114 — Panduan langkah demi langkah: Mengecek pemahaman sendiri
// Category: Belajar & Produktivitas | Level: Lanjutan | Duration: 25 minutes
// Teaching goal: Pelajari mengecek pemahaman sendiri dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mengecek pemahaman sendiri pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mengecek pemahaman sendiri perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mengecek pemahaman sendiri?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0115 — Workflow praktis: Mempersiapkan diskusi
// Category: Belajar & Produktivitas | Level: Menengah | Duration: 21 minutes
// Teaching goal: Bangun alur kerja mempersiapkan diskusi yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mempersiapkan diskusi pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mempersiapkan diskusi perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mempersiapkan diskusi?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0116 — Panduan langkah demi langkah: Membuat jurnal belajar
// Category: Belajar & Produktivitas | Level: Menengah | Duration: 18 minutes
// Teaching goal: Pelajari membuat jurnal belajar dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat jurnal belajar pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat jurnal belajar perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat jurnal belajar?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0117 — Workflow praktis: Mengelola deadline
// Category: Belajar & Produktivitas | Level: Pemula | Duration: 15 minutes
// Teaching goal: Bangun alur kerja mengelola deadline yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mengelola deadline pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mengelola deadline perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mengelola deadline?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0118 — Workflow praktis: Membaca grafik dan tabel
// Category: Belajar & Produktivitas | Level: Lanjutan | Duration: 28 minutes
// Teaching goal: Bangun alur kerja membaca grafik dan tabel yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membaca grafik dan tabel pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membaca grafik dan tabel perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membaca grafik dan tabel?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0119 — Workflow praktis: Menyusun laporan sederhana
// Category: Belajar & Produktivitas | Level: Pemula | Duration: 15 minutes
// Teaching goal: Bangun alur kerja menyusun laporan sederhana yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan menyusun laporan sederhana pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan menyusun laporan sederhana perlu jelas sebelum mulai.
// Review prompt: What changed after you applied menyusun laporan sederhana?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0120 — Latihan mandiri: Membuat rutinitas pagi
// Category: Belajar & Produktivitas | Level: Lanjutan | Duration: 31 minutes
// Teaching goal: Latihan terarah untuk menerapkan membuat rutinitas pagi sambil mengecek pemahamanmu sendiri.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat rutinitas pagi pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat rutinitas pagi perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat rutinitas pagi?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0121 — Panduan langkah demi langkah: Menyusun anggaran sederhana
// Category: Kehidupan Sehari-hari | Level: Menengah | Duration: 18 minutes
// Teaching goal: Pelajari menyusun anggaran sederhana dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan menyusun anggaran sederhana pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan menyusun anggaran sederhana perlu jelas sebelum mulai.
// Review prompt: What changed after you applied menyusun anggaran sederhana?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0122 — Workflow praktis: Membuat daftar belanja
// Category: Kehidupan Sehari-hari | Level: Pemula | Duration: 15 minutes
// Teaching goal: Bangun alur kerja membuat daftar belanja yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat daftar belanja pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat daftar belanja perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat daftar belanja?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0123 — Workflow praktis: Mengatur ruang kerja
// Category: Kehidupan Sehari-hari | Level: Menengah | Duration: 21 minutes
// Teaching goal: Bangun alur kerja mengatur ruang kerja yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mengatur ruang kerja pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mengatur ruang kerja perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mengatur ruang kerja?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0124 — Workflow praktis: Membuat rutinitas pagi
// Category: Kehidupan Sehari-hari | Level: Pemula | Duration: 15 minutes
// Teaching goal: Bangun alur kerja membuat rutinitas pagi yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat rutinitas pagi pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat rutinitas pagi perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat rutinitas pagi?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0125 — Checklist penerapan: Merencanakan perjalanan
// Category: Kehidupan Sehari-hari | Level: Pemula | Duration: 12 minutes
// Teaching goal: Daftar periksa untuk menerapkan merencanakan perjalanan tanpa melewatkan hal penting.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan merencanakan perjalanan pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan merencanakan perjalanan perlu jelas sebelum mulai.
// Review prompt: What changed after you applied merencanakan perjalanan?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0126 — Workflow praktis: Membuat checklist barang
// Category: Kehidupan Sehari-hari | Level: Lanjutan | Duration: 28 minutes
// Teaching goal: Bangun alur kerja membuat checklist barang yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat checklist barang pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat checklist barang perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat checklist barang?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0127 — Panduan langkah demi langkah: Menyimpan dokumen digital
// Category: Kehidupan Sehari-hari | Level: Pemula | Duration: 12 minutes
// Teaching goal: Pelajari menyimpan dokumen digital dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan menyimpan dokumen digital pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan menyimpan dokumen digital perlu jelas sebelum mulai.
// Review prompt: What changed after you applied menyimpan dokumen digital?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0128 — Proyek mini: Membuat menu mingguan
// Category: Kehidupan Sehari-hari | Level: Lanjutan | Duration: 28 minutes
// Teaching goal: Proyek mini yang membantumu mempraktikkan membuat menu mingguan dari perencanaan sampai evaluasi.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat menu mingguan pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat menu mingguan perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat menu mingguan?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0129 — Checklist penerapan: Merawat barang elektronik
// Category: Kehidupan Sehari-hari | Level: Lanjutan | Duration: 25 minutes
// Teaching goal: Daftar periksa untuk menerapkan merawat barang elektronik tanpa melewatkan hal penting.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan merawat barang elektronik pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan merawat barang elektronik perlu jelas sebelum mulai.
// Review prompt: What changed after you applied merawat barang elektronik?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0130 — Panduan langkah demi langkah: Menjaga kebiasaan tidur sehat
// Category: Kehidupan Sehari-hari | Level: Menengah | Duration: 18 minutes
// Teaching goal: Pelajari menjaga kebiasaan tidur sehat dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan menjaga kebiasaan tidur sehat pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan menjaga kebiasaan tidur sehat perlu jelas sebelum mulai.
// Review prompt: What changed after you applied menjaga kebiasaan tidur sehat?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0131 — Panduan langkah demi langkah: Mengatur waktu layar
// Category: Kehidupan Sehari-hari | Level: Pemula | Duration: 12 minutes
// Teaching goal: Pelajari mengatur waktu layar dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mengatur waktu layar pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mengatur waktu layar perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mengatur waktu layar?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0132 — Panduan langkah demi langkah: Membuat jurnal syukur
// Category: Kehidupan Sehari-hari | Level: Menengah | Duration: 18 minutes
// Teaching goal: Pelajari membuat jurnal syukur dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat jurnal syukur pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat jurnal syukur perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat jurnal syukur?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0133 — Workflow praktis: Menyiapkan tas sekolah
// Category: Kehidupan Sehari-hari | Level: Pemula | Duration: 15 minutes
// Teaching goal: Bangun alur kerja menyiapkan tas sekolah yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan menyiapkan tas sekolah pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan menyiapkan tas sekolah perlu jelas sebelum mulai.
// Review prompt: What changed after you applied menyiapkan tas sekolah?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0134 — Panduan langkah demi langkah: Mengelola koleksi foto
// Category: Kehidupan Sehari-hari | Level: Menengah | Duration: 18 minutes
// Teaching goal: Pelajari mengelola koleksi foto dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mengelola koleksi foto pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mengelola koleksi foto perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mengelola koleksi foto?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0135 — Workflow praktis: Membuat sistem penyimpanan
// Category: Kehidupan Sehari-hari | Level: Pemula | Duration: 15 minutes
// Teaching goal: Bangun alur kerja membuat sistem penyimpanan yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat sistem penyimpanan pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat sistem penyimpanan perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat sistem penyimpanan?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0136 — Workflow praktis: Membuat rencana menabung
// Category: Kehidupan Sehari-hari | Level: Menengah | Duration: 21 minutes
// Teaching goal: Bangun alur kerja membuat rencana menabung yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat rencana menabung pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat rencana menabung perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat rencana menabung?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0137 — Workflow praktis: Membaca label produk
// Category: Kehidupan Sehari-hari | Level: Lanjutan | Duration: 28 minutes
// Teaching goal: Bangun alur kerja membaca label produk yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membaca label produk pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membaca label produk perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membaca label produk?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0138 — Panduan langkah demi langkah: Mengatur ruang penyimpanan
// Category: Kehidupan Sehari-hari | Level: Pemula | Duration: 12 minutes
// Teaching goal: Pelajari mengatur ruang penyimpanan dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mengatur ruang penyimpanan pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mengatur ruang penyimpanan perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mengatur ruang penyimpanan?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0139 — Proyek mini: Menyiapkan acara kecil
// Category: Kehidupan Sehari-hari | Level: Lanjutan | Duration: 28 minutes
// Teaching goal: Proyek mini yang membantumu mempraktikkan menyiapkan acara kecil dari perencanaan sampai evaluasi.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan menyiapkan acara kecil pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan menyiapkan acara kecil perlu jelas sebelum mulai.
// Review prompt: What changed after you applied menyiapkan acara kecil?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0140 — Checklist penerapan: Membuat rencana hadiah
// Category: Kehidupan Sehari-hari | Level: Lanjutan | Duration: 25 minutes
// Teaching goal: Daftar periksa untuk menerapkan membuat rencana hadiah tanpa melewatkan hal penting.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat rencana hadiah pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat rencana hadiah perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat rencana hadiah?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0141 — Panduan langkah demi langkah: Membuat checklist kebersihan
// Category: Kehidupan Sehari-hari | Level: Menengah | Duration: 18 minutes
// Teaching goal: Pelajari membuat checklist kebersihan dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat checklist kebersihan pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat checklist kebersihan perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat checklist kebersihan?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0142 — Panduan langkah demi langkah: Membuat jadwal olahraga ringan
// Category: Kehidupan Sehari-hari | Level: Pemula | Duration: 12 minutes
// Teaching goal: Pelajari membuat jadwal olahraga ringan dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat jadwal olahraga ringan pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat jadwal olahraga ringan perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat jadwal olahraga ringan?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0143 — Panduan langkah demi langkah: Menyusun perlengkapan bepergian
// Category: Kehidupan Sehari-hari | Level: Menengah | Duration: 18 minutes
// Teaching goal: Pelajari menyusun perlengkapan bepergian dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan menyusun perlengkapan bepergian pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan menyusun perlengkapan bepergian perlu jelas sebelum mulai.
// Review prompt: What changed after you applied menyusun perlengkapan bepergian?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0144 — Workflow praktis: Mengatur koleksi buku
// Category: Kehidupan Sehari-hari | Level: Pemula | Duration: 15 minutes
// Teaching goal: Bangun alur kerja mengatur koleksi buku yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mengatur koleksi buku pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mengatur koleksi buku perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mengatur koleksi buku?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0145 — Panduan langkah demi langkah: Merencanakan kegiatan bersama
// Category: Kehidupan Sehari-hari | Level: Menengah | Duration: 18 minutes
// Teaching goal: Pelajari merencanakan kegiatan bersama dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan merencanakan kegiatan bersama pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan merencanakan kegiatan bersama perlu jelas sebelum mulai.
// Review prompt: What changed after you applied merencanakan kegiatan bersama?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0146 — Panduan langkah demi langkah: Menyimpan resep favorit
// Category: Kehidupan Sehari-hari | Level: Lanjutan | Duration: 25 minutes
// Teaching goal: Pelajari menyimpan resep favorit dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan menyimpan resep favorit pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan menyimpan resep favorit perlu jelas sebelum mulai.
// Review prompt: What changed after you applied menyimpan resep favorit?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0147 — Workflow praktis: Membuat rencana belajar mandiri
// Category: Kehidupan Sehari-hari | Level: Menengah | Duration: 21 minutes
// Teaching goal: Bangun alur kerja membuat rencana belajar mandiri yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat rencana belajar mandiri pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat rencana belajar mandiri perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat rencana belajar mandiri?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0148 — Latihan mandiri: Menata desktop komputer
// Category: Kehidupan Sehari-hari | Level: Pemula | Duration: 18 minutes
// Teaching goal: Latihan terarah untuk menerapkan menata desktop komputer sambil mengecek pemahamanmu sendiri.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan menata desktop komputer pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan menata desktop komputer perlu jelas sebelum mulai.
// Review prompt: What changed after you applied menata desktop komputer?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0149 — Panduan langkah demi langkah: Membuat rencana mingguan
// Category: Kehidupan Sehari-hari | Level: Pemula | Duration: 12 minutes
// Teaching goal: Pelajari membuat rencana mingguan dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat rencana mingguan pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat rencana mingguan perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat rencana mingguan?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0150 — Proyek mini: Menyusun arsip digital
// Category: Kehidupan Sehari-hari | Level: Lanjutan | Duration: 28 minutes
// Teaching goal: Proyek mini yang membantumu mempraktikkan menyusun arsip digital dari perencanaan sampai evaluasi.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan menyusun arsip digital pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan menyusun arsip digital perlu jelas sebelum mulai.
// Review prompt: What changed after you applied menyusun arsip digital?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0151 — Panduan langkah demi langkah: Menyusun ide konten
// Category: Kreativitas & Media | Level: Lanjutan | Duration: 25 minutes
// Teaching goal: Pelajari menyusun ide konten dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan menyusun ide konten pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan menyusun ide konten perlu jelas sebelum mulai.
// Review prompt: What changed after you applied menyusun ide konten?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0152 — Proyek mini: Menulis caption yang jelas
// Category: Kreativitas & Media | Level: Menengah | Duration: 21 minutes
// Teaching goal: Proyek mini yang membantumu mempraktikkan menulis caption yang jelas dari perencanaan sampai evaluasi.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan menulis caption yang jelas pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan menulis caption yang jelas perlu jelas sebelum mulai.
// Review prompt: What changed after you applied menulis caption yang jelas?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0153 — Checklist penerapan: Membuat storyboard pendek
// Category: Kreativitas & Media | Level: Menengah | Duration: 18 minutes
// Teaching goal: Daftar periksa untuk menerapkan membuat storyboard pendek tanpa melewatkan hal penting.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat storyboard pendek pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat storyboard pendek perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat storyboard pendek?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0154 — Panduan langkah demi langkah: Menyusun video pendek
// Category: Kreativitas & Media | Level: Pemula | Duration: 12 minutes
// Teaching goal: Pelajari menyusun video pendek dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan menyusun video pendek pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan menyusun video pendek perlu jelas sebelum mulai.
// Review prompt: What changed after you applied menyusun video pendek?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0155 — Panduan langkah demi langkah: Merekam audio lebih bersih
// Category: Kreativitas & Media | Level: Lanjutan | Duration: 25 minutes
// Teaching goal: Pelajari merekam audio lebih bersih dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan merekam audio lebih bersih pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan merekam audio lebih bersih perlu jelas sebelum mulai.
// Review prompt: What changed after you applied merekam audio lebih bersih?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0156 — Proyek mini: Merekam audio lebih bersih
// Category: Kreativitas & Media | Level: Pemula | Duration: 15 minutes
// Teaching goal: Proyek mini yang membantumu mempraktikkan merekam audio lebih bersih dari perencanaan sampai evaluasi.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan merekam audio lebih bersih pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan merekam audio lebih bersih perlu jelas sebelum mulai.
// Review prompt: What changed after you applied merekam audio lebih bersih?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0157 — Panduan langkah demi langkah: Menulis naskah singkat
// Category: Kreativitas & Media | Level: Menengah | Duration: 18 minutes
// Teaching goal: Pelajari menulis naskah singkat dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan menulis naskah singkat pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan menulis naskah singkat perlu jelas sebelum mulai.
// Review prompt: What changed after you applied menulis naskah singkat?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0158 — Workflow praktis: Membuat kalender konten
// Category: Kreativitas & Media | Level: Pemula | Duration: 15 minutes
// Teaching goal: Bangun alur kerja membuat kalender konten yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat kalender konten pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat kalender konten perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat kalender konten?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0159 — Panduan langkah demi langkah: Mengatur pencahayaan dasar
// Category: Kreativitas & Media | Level: Menengah | Duration: 18 minutes
// Teaching goal: Pelajari mengatur pencahayaan dasar dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mengatur pencahayaan dasar pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mengatur pencahayaan dasar perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mengatur pencahayaan dasar?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0160 — Workflow praktis: Membuat animasi sederhana
// Category: Kreativitas & Media | Level: Pemula | Duration: 15 minutes
// Teaching goal: Bangun alur kerja membuat animasi sederhana yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat animasi sederhana pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat animasi sederhana perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat animasi sederhana?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0161 — Latihan mandiri: Menyusun portofolio kreatif
// Category: Kreativitas & Media | Level: Lanjutan | Duration: 31 minutes
// Teaching goal: Latihan terarah untuk menerapkan menyusun portofolio kreatif sambil mengecek pemahamanmu sendiri.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan menyusun portofolio kreatif pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan menyusun portofolio kreatif perlu jelas sebelum mulai.
// Review prompt: What changed after you applied menyusun portofolio kreatif?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0162 — Panduan langkah demi langkah: Membuat ilustrasi vektor dasar
// Category: Kreativitas & Media | Level: Lanjutan | Duration: 25 minutes
// Teaching goal: Pelajari membuat ilustrasi vektor dasar dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat ilustrasi vektor dasar pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat ilustrasi vektor dasar perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat ilustrasi vektor dasar?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0163 — Proyek mini: Memilih musik yang legal
// Category: Kreativitas & Media | Level: Menengah | Duration: 21 minutes
// Teaching goal: Proyek mini yang membantumu mempraktikkan memilih musik yang legal dari perencanaan sampai evaluasi.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan memilih musik yang legal pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan memilih musik yang legal perlu jelas sebelum mulai.
// Review prompt: What changed after you applied memilih musik yang legal?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0164 — Panduan langkah demi langkah: Membuat template posting
// Category: Kreativitas & Media | Level: Lanjutan | Duration: 25 minutes
// Teaching goal: Pelajari membuat template posting dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat template posting pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat template posting perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat template posting?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0165 — Panduan langkah demi langkah: Mengevaluasi performa konten
// Category: Kreativitas & Media | Level: Pemula | Duration: 12 minutes
// Teaching goal: Pelajari mengevaluasi performa konten dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mengevaluasi performa konten pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mengevaluasi performa konten perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mengevaluasi performa konten?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0166 — Workflow praktis: Membuat poster acara
// Category: Kreativitas & Media | Level: Lanjutan | Duration: 28 minutes
// Teaching goal: Bangun alur kerja membuat poster acara yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat poster acara pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat poster acara perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat poster acara?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0167 — Proyek mini: Menyusun cerita visual
// Category: Kreativitas & Media | Level: Pemula | Duration: 15 minutes
// Teaching goal: Proyek mini yang membantumu mempraktikkan menyusun cerita visual dari perencanaan sampai evaluasi.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan menyusun cerita visual pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan menyusun cerita visual perlu jelas sebelum mulai.
// Review prompt: What changed after you applied menyusun cerita visual?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0168 — Panduan langkah demi langkah: Mengatur ritme editing
// Category: Kreativitas & Media | Level: Menengah | Duration: 18 minutes
// Teaching goal: Pelajari mengatur ritme editing dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mengatur ritme editing pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mengatur ritme editing perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mengatur ritme editing?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0169 — Workflow praktis: Membuat intro video
// Category: Kreativitas & Media | Level: Pemula | Duration: 15 minutes
// Teaching goal: Bangun alur kerja membuat intro video yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat intro video pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat intro video perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat intro video?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0170 — Panduan langkah demi langkah: Membuat stiker digital
// Category: Kreativitas & Media | Level: Menengah | Duration: 18 minutes
// Teaching goal: Pelajari membuat stiker digital dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat stiker digital pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat stiker digital perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat stiker digital?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0171 — Workflow praktis: Mengambil foto produk
// Category: Kreativitas & Media | Level: Pemula | Duration: 15 minutes
// Teaching goal: Bangun alur kerja mengambil foto produk yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mengambil foto produk pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mengambil foto produk perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mengambil foto produk?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0172 — Latihan mandiri: Membuat komik panel sederhana
// Category: Kreativitas & Media | Level: Lanjutan | Duration: 31 minutes
// Teaching goal: Latihan terarah untuk menerapkan membuat komik panel sederhana sambil mengecek pemahamanmu sendiri.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat komik panel sederhana pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat komik panel sederhana perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat komik panel sederhana?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0173 — Panduan langkah demi langkah: Membuat efek teks
// Category: Kreativitas & Media | Level: Lanjutan | Duration: 25 minutes
// Teaching goal: Pelajari membuat efek teks dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat efek teks pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat efek teks perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat efek teks?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0174 — Proyek mini: Menyusun palet untuk video
// Category: Kreativitas & Media | Level: Menengah | Duration: 21 minutes
// Teaching goal: Proyek mini yang membantumu mempraktikkan menyusun palet untuk video dari perencanaan sampai evaluasi.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan menyusun palet untuk video pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan menyusun palet untuk video perlu jelas sebelum mulai.
// Review prompt: What changed after you applied menyusun palet untuk video?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0175 — Panduan langkah demi langkah: Membuat rekaman layar
// Category: Kreativitas & Media | Level: Lanjutan | Duration: 25 minutes
// Teaching goal: Pelajari membuat rekaman layar dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat rekaman layar pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat rekaman layar perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat rekaman layar?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0176 — Latihan mandiri: Membuat rekaman layar
// Category: Kreativitas & Media | Level: Menengah | Duration: 24 minutes
// Teaching goal: Latihan terarah untuk menerapkan membuat rekaman layar sambil mengecek pemahamanmu sendiri.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat rekaman layar pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat rekaman layar perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat rekaman layar?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0177 — Workflow praktis: Menyusun audio narasi
// Category: Kreativitas & Media | Level: Lanjutan | Duration: 28 minutes
// Teaching goal: Bangun alur kerja menyusun audio narasi yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan menyusun audio narasi pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan menyusun audio narasi perlu jelas sebelum mulai.
// Review prompt: What changed after you applied menyusun audio narasi?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0178 — Panduan langkah demi langkah: Mengatur transisi slide
// Category: Kreativitas & Media | Level: Pemula | Duration: 12 minutes
// Teaching goal: Pelajari mengatur transisi slide dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mengatur transisi slide pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mengatur transisi slide perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mengatur transisi slide?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0179 — Panduan langkah demi langkah: Membuat aset media sosial
// Category: Kreativitas & Media | Level: Menengah | Duration: 18 minutes
// Teaching goal: Pelajari membuat aset media sosial dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat aset media sosial pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat aset media sosial perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat aset media sosial?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0180 — Workflow praktis: Membuat konsep kampanye
// Category: Kreativitas & Media | Level: Pemula | Duration: 15 minutes
// Teaching goal: Bangun alur kerja membuat konsep kampanye yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat konsep kampanye pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat konsep kampanye perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat konsep kampanye?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0181 — Panduan langkah demi langkah: Menyusun ide usaha kecil
// Category: Bisnis & Karier | Level: Pemula | Duration: 12 minutes
// Teaching goal: Pelajari menyusun ide usaha kecil dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan menyusun ide usaha kecil pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan menyusun ide usaha kecil perlu jelas sebelum mulai.
// Review prompt: What changed after you applied menyusun ide usaha kecil?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0182 — Workflow praktis: Membuat analisis SWOT sederhana
// Category: Bisnis & Karier | Level: Lanjutan | Duration: 28 minutes
// Teaching goal: Bangun alur kerja membuat analisis swot sederhana yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat analisis swot sederhana pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat analisis swot sederhana perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat analisis swot sederhana?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0183 — Panduan langkah demi langkah: Membuat nama brand
// Category: Bisnis & Karier | Level: Pemula | Duration: 12 minutes
// Teaching goal: Pelajari membuat nama brand dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat nama brand pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat nama brand perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat nama brand?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0184 — Workflow praktis: Menyusun deskripsi produk
// Category: Bisnis & Karier | Level: Lanjutan | Duration: 28 minutes
// Teaching goal: Bangun alur kerja menyusun deskripsi produk yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan menyusun deskripsi produk pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan menyusun deskripsi produk perlu jelas sebelum mulai.
// Review prompt: What changed after you applied menyusun deskripsi produk?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0185 — Latihan mandiri: Membuat katalog digital
// Category: Bisnis & Karier | Level: Menengah | Duration: 24 minutes
// Teaching goal: Latihan terarah untuk menerapkan membuat katalog digital sambil mengecek pemahamanmu sendiri.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat katalog digital pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat katalog digital perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat katalog digital?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0186 — Workflow praktis: Menghitung biaya dasar
// Category: Bisnis & Karier | Level: Menengah | Duration: 21 minutes
// Teaching goal: Bangun alur kerja menghitung biaya dasar yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan menghitung biaya dasar pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan menghitung biaya dasar perlu jelas sebelum mulai.
// Review prompt: What changed after you applied menghitung biaya dasar?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0187 — Workflow praktis: Membuat survei sederhana
// Category: Bisnis & Karier | Level: Pemula | Duration: 15 minutes
// Teaching goal: Bangun alur kerja membuat survei sederhana yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat survei sederhana pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat survei sederhana perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat survei sederhana?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0188 — Checklist penerapan: Menyusun proposal proyek
// Category: Bisnis & Karier | Level: Pemula | Duration: 12 minutes
// Teaching goal: Daftar periksa untuk menerapkan menyusun proposal proyek tanpa melewatkan hal penting.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan menyusun proposal proyek pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan menyusun proposal proyek perlu jelas sebelum mulai.
// Review prompt: What changed after you applied menyusun proposal proyek?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0189 — Latihan mandiri: Membuat portofolio pemula
// Category: Bisnis & Karier | Level: Pemula | Duration: 18 minutes
// Teaching goal: Latihan terarah untuk menerapkan membuat portofolio pemula sambil mengecek pemahamanmu sendiri.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat portofolio pemula pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat portofolio pemula perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat portofolio pemula?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0190 — Workflow praktis: Menyusun CV yang rapi
// Category: Bisnis & Karier | Level: Menengah | Duration: 21 minutes
// Teaching goal: Bangun alur kerja menyusun cv yang rapi yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan menyusun cv yang rapi pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan menyusun cv yang rapi perlu jelas sebelum mulai.
// Review prompt: What changed after you applied menyusun cv yang rapi?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0191 — Panduan langkah demi langkah: Membuat presentasi ide
// Category: Bisnis & Karier | Level: Lanjutan | Duration: 25 minutes
// Teaching goal: Pelajari membuat presentasi ide dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat presentasi ide pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat presentasi ide perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat presentasi ide?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0192 — Panduan langkah demi langkah: Mengelola tugas tim
// Category: Bisnis & Karier | Level: Pemula | Duration: 12 minutes
// Teaching goal: Pelajari mengelola tugas tim dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mengelola tugas tim pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mengelola tugas tim perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mengelola tugas tim?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0193 — Workflow praktis: Menyusun timeline proyek
// Category: Bisnis & Karier | Level: Lanjutan | Duration: 28 minutes
// Teaching goal: Bangun alur kerja menyusun timeline proyek yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan menyusun timeline proyek pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan menyusun timeline proyek perlu jelas sebelum mulai.
// Review prompt: What changed after you applied menyusun timeline proyek?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0194 — Workflow praktis: Membuat daftar risiko
// Category: Bisnis & Karier | Level: Menengah | Duration: 21 minutes
// Teaching goal: Bangun alur kerja membuat daftar risiko yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat daftar risiko pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat daftar risiko perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat daftar risiko?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0195 — Workflow praktis: Mengevaluasi hasil kampanye
// Category: Bisnis & Karier | Level: Lanjutan | Duration: 28 minutes
// Teaching goal: Bangun alur kerja mengevaluasi hasil kampanye yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mengevaluasi hasil kampanye pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mengevaluasi hasil kampanye perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mengevaluasi hasil kampanye?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0196 — Workflow praktis: Membuat persona pelanggan
// Category: Bisnis & Karier | Level: Pemula | Duration: 15 minutes
// Teaching goal: Bangun alur kerja membuat persona pelanggan yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat persona pelanggan pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat persona pelanggan perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat persona pelanggan?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0197 — Workflow praktis: Menyusun value proposition
// Category: Bisnis & Karier | Level: Menengah | Duration: 21 minutes
// Teaching goal: Bangun alur kerja menyusun value proposition yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan menyusun value proposition pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan menyusun value proposition perlu jelas sebelum mulai.
// Review prompt: What changed after you applied menyusun value proposition?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0198 — Workflow praktis: Mengatur inventaris sederhana
// Category: Bisnis & Karier | Level: Pemula | Duration: 15 minutes
// Teaching goal: Bangun alur kerja mengatur inventaris sederhana yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mengatur inventaris sederhana pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mengatur inventaris sederhana perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mengatur inventaris sederhana?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0199 — Checklist penerapan: Menulis deskripsi layanan
// Category: Bisnis & Karier | Level: Pemula | Duration: 12 minutes
// Teaching goal: Daftar periksa untuk menerapkan menulis deskripsi layanan tanpa melewatkan hal penting.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan menulis deskripsi layanan pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan menulis deskripsi layanan perlu jelas sebelum mulai.
// Review prompt: What changed after you applied menulis deskripsi layanan?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0200 — Latihan mandiri: Membuat formulir umpan balik
// Category: Bisnis & Karier | Level: Pemula | Duration: 18 minutes
// Teaching goal: Latihan terarah untuk menerapkan membuat formulir umpan balik sambil mengecek pemahamanmu sendiri.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat formulir umpan balik pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat formulir umpan balik perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat formulir umpan balik?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0201 — Workflow praktis: Membuat daftar kompetitor
// Category: Bisnis & Karier | Level: Menengah | Duration: 21 minutes
// Teaching goal: Bangun alur kerja membuat daftar kompetitor yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat daftar kompetitor pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat daftar kompetitor perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat daftar kompetitor?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0202 — Panduan langkah demi langkah: Menetapkan target realistis
// Category: Bisnis & Karier | Level: Lanjutan | Duration: 25 minutes
// Teaching goal: Pelajari menetapkan target realistis dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan menetapkan target realistis pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan menetapkan target realistis perlu jelas sebelum mulai.
// Review prompt: What changed after you applied menetapkan target realistis?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0203 — Panduan langkah demi langkah: Membuat alur layanan pelanggan
// Category: Bisnis & Karier | Level: Pemula | Duration: 12 minutes
// Teaching goal: Pelajari membuat alur layanan pelanggan dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat alur layanan pelanggan pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat alur layanan pelanggan perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat alur layanan pelanggan?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0204 — Workflow praktis: Menangani komplain dengan sopan
// Category: Bisnis & Karier | Level: Lanjutan | Duration: 28 minutes
// Teaching goal: Bangun alur kerja menangani komplain dengan sopan yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan menangani komplain dengan sopan pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan menangani komplain dengan sopan perlu jelas sebelum mulai.
// Review prompt: What changed after you applied menangani komplain dengan sopan?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0205 — Workflow praktis: Menyusun agenda meeting
// Category: Bisnis & Karier | Level: Menengah | Duration: 21 minutes
// Teaching goal: Bangun alur kerja menyusun agenda meeting yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan menyusun agenda meeting pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan menyusun agenda meeting perlu jelas sebelum mulai.
// Review prompt: What changed after you applied menyusun agenda meeting?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0206 — Panduan langkah demi langkah: Membuat dokumentasi proyek
// Category: Bisnis & Karier | Level: Menengah | Duration: 18 minutes
// Teaching goal: Pelajari membuat dokumentasi proyek dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat dokumentasi proyek pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat dokumentasi proyek perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat dokumentasi proyek?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0207 — Workflow praktis: Membuat strategi konten
// Category: Bisnis & Karier | Level: Pemula | Duration: 15 minutes
// Teaching goal: Bangun alur kerja membuat strategi konten yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat strategi konten pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat strategi konten perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat strategi konten?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0208 — Panduan langkah demi langkah: Menyusun FAQ produk
// Category: Bisnis & Karier | Level: Menengah | Duration: 18 minutes
// Teaching goal: Pelajari menyusun faq produk dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan menyusun faq produk pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan menyusun faq produk perlu jelas sebelum mulai.
// Review prompt: What changed after you applied menyusun faq produk?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0209 — Workflow praktis: Membuat laporan mingguan
// Category: Bisnis & Karier | Level: Pemula | Duration: 15 minutes
// Teaching goal: Bangun alur kerja membuat laporan mingguan yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat laporan mingguan pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat laporan mingguan perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat laporan mingguan?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0210 — Checklist penerapan: Membuat rencana peluncuran
// Category: Bisnis & Karier | Level: Pemula | Duration: 12 minutes
// Teaching goal: Daftar periksa untuk menerapkan membuat rencana peluncuran tanpa melewatkan hal penting.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat rencana peluncuran pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat rencana peluncuran perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat rencana peluncuran?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0211 — Panduan langkah demi langkah: Mengatur kontrol game
// Category: Gaming & Komunitas | Level: Menengah | Duration: 18 minutes
// Teaching goal: Pelajari mengatur kontrol game dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mengatur kontrol game pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mengatur kontrol game perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mengatur kontrol game?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0212 — Workflow praktis: Membuat jadwal latihan
// Category: Gaming & Komunitas | Level: Pemula | Duration: 15 minutes
// Teaching goal: Bangun alur kerja membuat jadwal latihan yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat jadwal latihan pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat jadwal latihan perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat jadwal latihan?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0213 — Workflow praktis: Menganalisis replay permainan
// Category: Gaming & Komunitas | Level: Menengah | Duration: 21 minutes
// Teaching goal: Bangun alur kerja menganalisis replay permainan yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan menganalisis replay permainan pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan menganalisis replay permainan perlu jelas sebelum mulai.
// Review prompt: What changed after you applied menganalisis replay permainan?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0214 — Panduan langkah demi langkah: Membuat komunitas yang ramah
// Category: Gaming & Komunitas | Level: Lanjutan | Duration: 25 minutes
// Teaching goal: Pelajari membuat komunitas yang ramah dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat komunitas yang ramah pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat komunitas yang ramah perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat komunitas yang ramah?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0215 — Proyek mini: Menulis aturan server
// Category: Gaming & Komunitas | Level: Menengah | Duration: 21 minutes
// Teaching goal: Proyek mini yang membantumu mempraktikkan menulis aturan server dari perencanaan sampai evaluasi.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan menulis aturan server pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan menulis aturan server perlu jelas sebelum mulai.
// Review prompt: What changed after you applied menulis aturan server?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0216 — Workflow praktis: Mengelola channel Discord
// Category: Gaming & Komunitas | Level: Lanjutan | Duration: 28 minutes
// Teaching goal: Bangun alur kerja mengelola channel discord yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mengelola channel discord pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mengelola channel discord perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mengelola channel discord?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0217 — Latihan mandiri: Menyusun panduan pemula
// Category: Gaming & Komunitas | Level: Menengah | Duration: 24 minutes
// Teaching goal: Latihan terarah untuk menerapkan menyusun panduan pemula sambil mengecek pemahamanmu sendiri.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan menyusun panduan pemula pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan menyusun panduan pemula perlu jelas sebelum mulai.
// Review prompt: What changed after you applied menyusun panduan pemula?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0218 — Workflow praktis: Menjaga keamanan akun game
// Category: Gaming & Komunitas | Level: Lanjutan | Duration: 28 minutes
// Teaching goal: Bangun alur kerja menjaga keamanan akun game yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan menjaga keamanan akun game pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan menjaga keamanan akun game perlu jelas sebelum mulai.
// Review prompt: What changed after you applied menjaga keamanan akun game?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0219 — Proyek mini: Membuat ide level game
// Category: Gaming & Komunitas | Level: Pemula | Duration: 15 minutes
// Teaching goal: Proyek mini yang membantumu mempraktikkan membuat ide level game dari perencanaan sampai evaluasi.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat ide level game pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat ide level game perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat ide level game?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0220 — Panduan langkah demi langkah: Merancang sistem checkpoint
// Category: Gaming & Komunitas | Level: Menengah | Duration: 18 minutes
// Teaching goal: Pelajari merancang sistem checkpoint dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan merancang sistem checkpoint pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan merancang sistem checkpoint perlu jelas sebelum mulai.
// Review prompt: What changed after you applied merancang sistem checkpoint?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0221 — Workflow praktis: Membuat daftar bug game
// Category: Gaming & Komunitas | Level: Pemula | Duration: 15 minutes
// Teaching goal: Bangun alur kerja membuat daftar bug game yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat daftar bug game pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat daftar bug game perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat daftar bug game?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0222 — Panduan langkah demi langkah: Menulis deskripsi item
// Category: Gaming & Komunitas | Level: Menengah | Duration: 18 minutes
// Teaching goal: Pelajari menulis deskripsi item dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan menulis deskripsi item pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan menulis deskripsi item perlu jelas sebelum mulai.
// Review prompt: What changed after you applied menulis deskripsi item?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0223 — Workflow praktis: Membuat peta level kasar
// Category: Gaming & Komunitas | Level: Pemula | Duration: 15 minutes
// Teaching goal: Bangun alur kerja membuat peta level kasar yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat peta level kasar pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat peta level kasar perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat peta level kasar?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0224 — Latihan mandiri: Menyeimbangkan tingkat kesulitan
// Category: Gaming & Komunitas | Level: Lanjutan | Duration: 31 minutes
// Teaching goal: Latihan terarah untuk menerapkan menyeimbangkan tingkat kesulitan sambil mengecek pemahamanmu sendiri.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan menyeimbangkan tingkat kesulitan pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan menyeimbangkan tingkat kesulitan perlu jelas sebelum mulai.
// Review prompt: What changed after you applied menyeimbangkan tingkat kesulitan?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0225 — Panduan langkah demi langkah: Membuat dokumentasi update
// Category: Gaming & Komunitas | Level: Lanjutan | Duration: 25 minutes
// Teaching goal: Pelajari membuat dokumentasi update dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat dokumentasi update pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat dokumentasi update perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat dokumentasi update?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0226 — Workflow praktis: Membuat nama tim
// Category: Gaming & Komunitas | Level: Menengah | Duration: 21 minutes
// Teaching goal: Bangun alur kerja membuat nama tim yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat nama tim pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat nama tim perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat nama tim?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0227 — Workflow praktis: Menyusun turnamen santai
// Category: Gaming & Komunitas | Level: Lanjutan | Duration: 28 minutes
// Teaching goal: Bangun alur kerja menyusun turnamen santai yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan menyusun turnamen santai pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan menyusun turnamen santai perlu jelas sebelum mulai.
// Review prompt: What changed after you applied menyusun turnamen santai?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0228 — Latihan mandiri: Membuat role komunitas
// Category: Gaming & Komunitas | Level: Menengah | Duration: 24 minutes
// Teaching goal: Latihan terarah untuk menerapkan membuat role komunitas sambil mengecek pemahamanmu sendiri.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat role komunitas pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat role komunitas perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat role komunitas?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0229 — Workflow praktis: Membuat pesan sambutan
// Category: Gaming & Komunitas | Level: Lanjutan | Duration: 28 minutes
// Teaching goal: Bangun alur kerja membuat pesan sambutan yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat pesan sambutan pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat pesan sambutan perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat pesan sambutan?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0230 — Proyek mini: Menyusun FAQ server
// Category: Gaming & Komunitas | Level: Pemula | Duration: 15 minutes
// Teaching goal: Proyek mini yang membantumu mempraktikkan menyusun faq server dari perencanaan sampai evaluasi.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan menyusun faq server pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan menyusun faq server perlu jelas sebelum mulai.
// Review prompt: What changed after you applied menyusun faq server?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0231 — Panduan langkah demi langkah: Menyusun jadwal scrim
// Category: Gaming & Komunitas | Level: Menengah | Duration: 18 minutes
// Teaching goal: Pelajari menyusun jadwal scrim dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan menyusun jadwal scrim pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan menyusun jadwal scrim perlu jelas sebelum mulai.
// Review prompt: What changed after you applied menyusun jadwal scrim?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0232 — Workflow praktis: Membuat catatan strategi
// Category: Gaming & Komunitas | Level: Pemula | Duration: 15 minutes
// Teaching goal: Bangun alur kerja membuat catatan strategi yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat catatan strategi pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat catatan strategi perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat catatan strategi?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0233 — Panduan langkah demi langkah: Menguji pengalaman pengguna
// Category: Gaming & Komunitas | Level: Menengah | Duration: 18 minutes
// Teaching goal: Pelajari menguji pengalaman pengguna dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan menguji pengalaman pengguna pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan menguji pengalaman pengguna perlu jelas sebelum mulai.
// Review prompt: What changed after you applied menguji pengalaman pengguna?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0234 — Workflow praktis: Membuat tutorial kontrol
// Category: Gaming & Komunitas | Level: Pemula | Duration: 15 minutes
// Teaching goal: Bangun alur kerja membuat tutorial kontrol yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat tutorial kontrol pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat tutorial kontrol perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat tutorial kontrol?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0235 — Latihan mandiri: Membuat papan peringkat demo
// Category: Gaming & Komunitas | Level: Lanjutan | Duration: 31 minutes
// Teaching goal: Latihan terarah untuk menerapkan membuat papan peringkat demo sambil mengecek pemahamanmu sendiri.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat papan peringkat demo pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat papan peringkat demo perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat papan peringkat demo?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0236 — Workflow praktis: Membuat konsep karakter
// Category: Gaming & Komunitas | Level: Lanjutan | Duration: 28 minutes
// Teaching goal: Bangun alur kerja membuat konsep karakter yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat konsep karakter pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat konsep karakter perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat konsep karakter?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0237 — Workflow praktis: Menyusun alur tutorial game
// Category: Gaming & Komunitas | Level: Menengah | Duration: 21 minutes
// Teaching goal: Bangun alur kerja menyusun alur tutorial game yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan menyusun alur tutorial game pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan menyusun alur tutorial game perlu jelas sebelum mulai.
// Review prompt: What changed after you applied menyusun alur tutorial game?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0238 — Checklist penerapan: Membuat daftar fitur MVP
// Category: Gaming & Komunitas | Level: Menengah | Duration: 18 minutes
// Teaching goal: Daftar periksa untuk menerapkan membuat daftar fitur mvp tanpa melewatkan hal penting.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat daftar fitur mvp pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat daftar fitur mvp perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat daftar fitur mvp?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0239 — Latihan mandiri: Membuat formulir saran
// Category: Gaming & Komunitas | Level: Menengah | Duration: 24 minutes
// Teaching goal: Latihan terarah untuk menerapkan membuat formulir saran sambil mengecek pemahamanmu sendiri.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat formulir saran pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat formulir saran perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat formulir saran?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0240 — Workflow praktis: Membuat catatan patch
// Category: Gaming & Komunitas | Level: Lanjutan | Duration: 28 minutes
// Teaching goal: Bangun alur kerja membuat catatan patch yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat catatan patch pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat catatan patch perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat catatan patch?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0241 — Panduan langkah demi langkah: Membuat kata sandi kuat
// Category: Keamanan Digital | Level: Lanjutan | Duration: 25 minutes
// Teaching goal: Pelajari membuat kata sandi kuat dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat kata sandi kuat pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat kata sandi kuat perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat kata sandi kuat?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0242 — Panduan langkah demi langkah: Mengenali tautan mencurigakan
// Category: Keamanan Digital | Level: Menengah | Duration: 18 minutes
// Teaching goal: Pelajari mengenali tautan mencurigakan dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mengenali tautan mencurigakan pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mengenali tautan mencurigakan perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mengenali tautan mencurigakan?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0243 — Panduan langkah demi langkah: Memeriksa izin aplikasi
// Category: Keamanan Digital | Level: Lanjutan | Duration: 25 minutes
// Teaching goal: Pelajari memeriksa izin aplikasi dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan memeriksa izin aplikasi pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan memeriksa izin aplikasi perlu jelas sebelum mulai.
// Review prompt: What changed after you applied memeriksa izin aplikasi?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0244 — Workflow praktis: Mengatur privasi media sosial
// Category: Keamanan Digital | Level: Menengah | Duration: 21 minutes
// Teaching goal: Bangun alur kerja mengatur privasi media sosial yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mengatur privasi media sosial pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mengatur privasi media sosial perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mengatur privasi media sosial?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0245 — Panduan langkah demi langkah: Mengenali penipuan online
// Category: Keamanan Digital | Level: Lanjutan | Duration: 25 minutes
// Teaching goal: Pelajari mengenali penipuan online dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mengenali penipuan online pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mengenali penipuan online perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mengenali penipuan online?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0246 — Panduan langkah demi langkah: Mengamankan Wi-Fi rumah
// Category: Keamanan Digital | Level: Pemula | Duration: 12 minutes
// Teaching goal: Pelajari mengamankan wi-fi rumah dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mengamankan wi-fi rumah pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mengamankan wi-fi rumah perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mengamankan wi-fi rumah?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0247 — Workflow praktis: Memeriksa sesi login
// Category: Keamanan Digital | Level: Lanjutan | Duration: 28 minutes
// Teaching goal: Bangun alur kerja memeriksa sesi login yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan memeriksa sesi login pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan memeriksa sesi login perlu jelas sebelum mulai.
// Review prompt: What changed after you applied memeriksa sesi login?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0248 — Latihan mandiri: Mengelola izin lokasi
// Category: Keamanan Digital | Level: Menengah | Duration: 24 minutes
// Teaching goal: Latihan terarah untuk menerapkan mengelola izin lokasi sambil mengecek pemahamanmu sendiri.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mengelola izin lokasi pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mengelola izin lokasi perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mengelola izin lokasi?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0249 — Panduan langkah demi langkah: Membuat kebiasaan update
// Category: Keamanan Digital | Level: Menengah | Duration: 18 minutes
// Teaching goal: Pelajari membuat kebiasaan update dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat kebiasaan update pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat kebiasaan update perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat kebiasaan update?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0250 — Proyek mini: Melindungi data pribadi
// Category: Keamanan Digital | Level: Pemula | Duration: 15 minutes
// Teaching goal: Proyek mini yang membantumu mempraktikkan melindungi data pribadi dari perencanaan sampai evaluasi.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan melindungi data pribadi pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan melindungi data pribadi perlu jelas sebelum mulai.
// Review prompt: What changed after you applied melindungi data pribadi?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0251 — Panduan langkah demi langkah: Menghapus akses aplikasi lama
// Category: Keamanan Digital | Level: Menengah | Duration: 18 minutes
// Teaching goal: Pelajari menghapus akses aplikasi lama dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan menghapus akses aplikasi lama pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan menghapus akses aplikasi lama perlu jelas sebelum mulai.
// Review prompt: What changed after you applied menghapus akses aplikasi lama?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0252 — Panduan langkah demi langkah: Mengenali file mencurigakan
// Category: Keamanan Digital | Level: Lanjutan | Duration: 25 minutes
// Teaching goal: Pelajari mengenali file mencurigakan dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mengenali file mencurigakan pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mengenali file mencurigakan perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mengenali file mencurigakan?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0253 — Panduan langkah demi langkah: Melaporkan akun palsu
// Category: Keamanan Digital | Level: Menengah | Duration: 18 minutes
// Teaching goal: Pelajari melaporkan akun palsu dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan melaporkan akun palsu pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan melaporkan akun palsu perlu jelas sebelum mulai.
// Review prompt: What changed after you applied melaporkan akun palsu?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0254 — Workflow praktis: Berkomunikasi aman di internet
// Category: Keamanan Digital | Level: Pemula | Duration: 15 minutes
// Teaching goal: Bangun alur kerja berkomunikasi aman di internet yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan berkomunikasi aman di internet pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan berkomunikasi aman di internet perlu jelas sebelum mulai.
// Review prompt: What changed after you applied berkomunikasi aman di internet?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0255 — Workflow praktis: Memeriksa sumber informasi
// Category: Keamanan Digital | Level: Menengah | Duration: 21 minutes
// Teaching goal: Bangun alur kerja memeriksa sumber informasi yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan memeriksa sumber informasi pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan memeriksa sumber informasi perlu jelas sebelum mulai.
// Review prompt: What changed after you applied memeriksa sumber informasi?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0256 — Workflow praktis: Membuat passphrase mudah diingat
// Category: Keamanan Digital | Level: Lanjutan | Duration: 28 minutes
// Teaching goal: Bangun alur kerja membuat passphrase mudah diingat yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat passphrase mudah diingat pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat passphrase mudah diingat perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat passphrase mudah diingat?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0257 — Panduan langkah demi langkah: Mengecek perangkat yang login
// Category: Keamanan Digital | Level: Pemula | Duration: 12 minutes
// Teaching goal: Pelajari mengecek perangkat yang login dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mengecek perangkat yang login pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mengecek perangkat yang login perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mengecek perangkat yang login?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0258 — Workflow praktis: Mengenali social engineering
// Category: Keamanan Digital | Level: Lanjutan | Duration: 28 minutes
// Teaching goal: Bangun alur kerja mengenali social engineering yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mengenali social engineering pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mengenali social engineering perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mengenali social engineering?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0259 — Latihan mandiri: Mengatur visibilitas profil
// Category: Keamanan Digital | Level: Menengah | Duration: 24 minutes
// Teaching goal: Latihan terarah untuk menerapkan mengatur visibilitas profil sambil mengecek pemahamanmu sendiri.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mengatur visibilitas profil pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mengatur visibilitas profil perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mengatur visibilitas profil?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0260 — Panduan langkah demi langkah: Memeriksa keamanan unduhan
// Category: Keamanan Digital | Level: Menengah | Duration: 18 minutes
// Teaching goal: Pelajari memeriksa keamanan unduhan dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan memeriksa keamanan unduhan pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan memeriksa keamanan unduhan perlu jelas sebelum mulai.
// Review prompt: What changed after you applied memeriksa keamanan unduhan?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0261 — Proyek mini: Membatasi informasi publik
// Category: Keamanan Digital | Level: Pemula | Duration: 15 minutes
// Teaching goal: Proyek mini yang membantumu mempraktikkan membatasi informasi publik dari perencanaan sampai evaluasi.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membatasi informasi publik pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membatasi informasi publik perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membatasi informasi publik?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0262 — Panduan langkah demi langkah: Mengenali pesan manipulatif
// Category: Keamanan Digital | Level: Menengah | Duration: 18 minutes
// Teaching goal: Pelajari mengenali pesan manipulatif dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mengenali pesan manipulatif pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mengenali pesan manipulatif perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mengenali pesan manipulatif?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0263 — Panduan langkah demi langkah: Mengatur izin kamera
// Category: Keamanan Digital | Level: Lanjutan | Duration: 25 minutes
// Teaching goal: Pelajari mengatur izin kamera dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mengatur izin kamera pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mengatur izin kamera perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mengatur izin kamera?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0264 — Panduan langkah demi langkah: Membuat kebiasaan logout
// Category: Keamanan Digital | Level: Menengah | Duration: 18 minutes
// Teaching goal: Pelajari membuat kebiasaan logout dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat kebiasaan logout pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat kebiasaan logout perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat kebiasaan logout?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0265 — Workflow praktis: Memeriksa alamat situs
// Category: Keamanan Digital | Level: Pemula | Duration: 15 minutes
// Teaching goal: Bangun alur kerja memeriksa alamat situs yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan memeriksa alamat situs pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan memeriksa alamat situs perlu jelas sebelum mulai.
// Review prompt: What changed after you applied memeriksa alamat situs?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0266 — Panduan langkah demi langkah: Mengelola password manager
// Category: Keamanan Digital | Level: Pemula | Duration: 12 minutes
// Teaching goal: Pelajari mengelola password manager dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mengelola password manager pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mengelola password manager perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mengelola password manager?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0267 — Workflow praktis: Menghindari jaringan publik berisiko
// Category: Keamanan Digital | Level: Lanjutan | Duration: 28 minutes
// Teaching goal: Bangun alur kerja menghindari jaringan publik berisiko yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan menghindari jaringan publik berisiko pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan menghindari jaringan publik berisiko perlu jelas sebelum mulai.
// Review prompt: What changed after you applied menghindari jaringan publik berisiko?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0268 — Workflow praktis: Mengenali berita palsu
// Category: Keamanan Digital | Level: Menengah | Duration: 21 minutes
// Teaching goal: Bangun alur kerja mengenali berita palsu yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mengenali berita palsu pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mengenali berita palsu perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mengenali berita palsu?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0269 — Workflow praktis: Mengatur komentar media sosial
// Category: Keamanan Digital | Level: Lanjutan | Duration: 28 minutes
// Teaching goal: Bangun alur kerja mengatur komentar media sosial yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mengatur komentar media sosial pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mengatur komentar media sosial perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mengatur komentar media sosial?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0270 — Latihan mandiri: Membuat checklist keamanan
// Category: Keamanan Digital | Level: Menengah | Duration: 24 minutes
// Teaching goal: Latihan terarah untuk menerapkan membuat checklist keamanan sambil mengecek pemahamanmu sendiri.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat checklist keamanan pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat checklist keamanan perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat checklist keamanan?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0271 — Panduan langkah demi langkah: Membuat dokumen kolaboratif
// Category: Tools Digital | Level: Pemula | Duration: 12 minutes
// Teaching goal: Pelajari membuat dokumen kolaboratif dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat dokumen kolaboratif pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat dokumen kolaboratif perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat dokumen kolaboratif?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0272 — Workflow praktis: Menyusun spreadsheet dasar
// Category: Tools Digital | Level: Lanjutan | Duration: 28 minutes
// Teaching goal: Bangun alur kerja menyusun spreadsheet dasar yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan menyusun spreadsheet dasar pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan menyusun spreadsheet dasar perlu jelas sebelum mulai.
// Review prompt: What changed after you applied menyusun spreadsheet dasar?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0273 — Workflow praktis: Menggunakan filter tabel
// Category: Tools Digital | Level: Pemula | Duration: 15 minutes
// Teaching goal: Bangun alur kerja menggunakan filter tabel yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan menggunakan filter tabel pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan menggunakan filter tabel perlu jelas sebelum mulai.
// Review prompt: What changed after you applied menggunakan filter tabel?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0274 — Workflow praktis: Mengatur folder cloud
// Category: Tools Digital | Level: Lanjutan | Duration: 28 minutes
// Teaching goal: Bangun alur kerja mengatur folder cloud yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mengatur folder cloud pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mengatur folder cloud perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mengatur folder cloud?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0275 — Checklist penerapan: Membuat formulir online
// Category: Tools Digital | Level: Lanjutan | Duration: 25 minutes
// Teaching goal: Daftar periksa untuk menerapkan membuat formulir online tanpa melewatkan hal penting.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat formulir online pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat formulir online perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat formulir online?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0276 — Workflow praktis: Membuat kalender bersama
// Category: Tools Digital | Level: Menengah | Duration: 21 minutes
// Teaching goal: Bangun alur kerja membuat kalender bersama yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat kalender bersama pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat kalender bersama perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat kalender bersama?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0277 — Panduan langkah demi langkah: Menyusun template dokumen
// Category: Tools Digital | Level: Lanjutan | Duration: 25 minutes
// Teaching goal: Pelajari menyusun template dokumen dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan menyusun template dokumen pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan menyusun template dokumen perlu jelas sebelum mulai.
// Review prompt: What changed after you applied menyusun template dokumen?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0278 — Proyek mini: Mengubah dokumen ke PDF
// Category: Tools Digital | Level: Menengah | Duration: 21 minutes
// Teaching goal: Proyek mini yang membantumu mempraktikkan mengubah dokumen ke pdf dari perencanaan sampai evaluasi.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mengubah dokumen ke pdf pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mengubah dokumen ke pdf perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mengubah dokumen ke pdf?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0279 — Checklist penerapan: Membuat diagram alur
// Category: Tools Digital | Level: Menengah | Duration: 18 minutes
// Teaching goal: Daftar periksa untuk menerapkan membuat diagram alur tanpa melewatkan hal penting.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat diagram alur pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat diagram alur perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat diagram alur?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0280 — Panduan langkah demi langkah: Menggunakan shortcut aplikasi
// Category: Tools Digital | Level: Pemula | Duration: 12 minutes
// Teaching goal: Pelajari menggunakan shortcut aplikasi dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan menggunakan shortcut aplikasi pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan menggunakan shortcut aplikasi perlu jelas sebelum mulai.
// Review prompt: What changed after you applied menggunakan shortcut aplikasi?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0281 — Panduan langkah demi langkah: Membuat catatan terstruktur
// Category: Tools Digital | Level: Lanjutan | Duration: 25 minutes
// Teaching goal: Pelajari membuat catatan terstruktur dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat catatan terstruktur pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat catatan terstruktur perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat catatan terstruktur?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0282 — Panduan langkah demi langkah: Mengatur file bersama
// Category: Tools Digital | Level: Pemula | Duration: 12 minutes
// Teaching goal: Pelajari mengatur file bersama dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mengatur file bersama pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mengatur file bersama perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mengatur file bersama?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0283 — Workflow praktis: Membuat survei online
// Category: Tools Digital | Level: Lanjutan | Duration: 28 minutes
// Teaching goal: Bangun alur kerja membuat survei online yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat survei online pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat survei online perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat survei online?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0284 — Panduan langkah demi langkah: Membuat daftar tugas digital
// Category: Tools Digital | Level: Pemula | Duration: 12 minutes
// Teaching goal: Pelajari membuat daftar tugas digital dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat daftar tugas digital pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat daftar tugas digital perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat daftar tugas digital?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0285 — Workflow praktis: Mengatur notifikasi kerja
// Category: Tools Digital | Level: Lanjutan | Duration: 28 minutes
// Teaching goal: Bangun alur kerja mengatur notifikasi kerja yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mengatur notifikasi kerja pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mengatur notifikasi kerja perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mengatur notifikasi kerja?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0286 — Workflow praktis: Menggunakan rumus spreadsheet
// Category: Tools Digital | Level: Pemula | Duration: 15 minutes
// Teaching goal: Bangun alur kerja menggunakan rumus spreadsheet yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan menggunakan rumus spreadsheet pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan menggunakan rumus spreadsheet perlu jelas sebelum mulai.
// Review prompt: What changed after you applied menggunakan rumus spreadsheet?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0287 — Workflow praktis: Membuat grafik sederhana
// Category: Tools Digital | Level: Menengah | Duration: 21 minutes
// Teaching goal: Bangun alur kerja membuat grafik sederhana yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat grafik sederhana pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat grafik sederhana perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat grafik sederhana?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0288 — Panduan langkah demi langkah: Membuat agenda kalender
// Category: Tools Digital | Level: Lanjutan | Duration: 25 minutes
// Teaching goal: Pelajari membuat agenda kalender dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat agenda kalender pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat agenda kalender perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat agenda kalender?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0289 — Proyek mini: Mengatur komentar dokumen
// Category: Tools Digital | Level: Menengah | Duration: 21 minutes
// Teaching goal: Proyek mini yang membantumu mempraktikkan mengatur komentar dokumen dari perencanaan sampai evaluasi.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mengatur komentar dokumen pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mengatur komentar dokumen perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mengatur komentar dokumen?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0290 — Checklist penerapan: Mengelola versi file
// Category: Tools Digital | Level: Menengah | Duration: 18 minutes
// Teaching goal: Daftar periksa untuk menerapkan mengelola versi file tanpa melewatkan hal penting.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mengelola versi file pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mengelola versi file perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mengelola versi file?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0291 — Panduan langkah demi langkah: Membuat checklist digital
// Category: Tools Digital | Level: Pemula | Duration: 12 minutes
// Teaching goal: Pelajari membuat checklist digital dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat checklist digital pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat checklist digital perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat checklist digital?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0292 — Panduan langkah demi langkah: Menyusun laporan dari tabel
// Category: Tools Digital | Level: Lanjutan | Duration: 25 minutes
// Teaching goal: Pelajari menyusun laporan dari tabel dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan menyusun laporan dari tabel pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan menyusun laporan dari tabel perlu jelas sebelum mulai.
// Review prompt: What changed after you applied menyusun laporan dari tabel?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0293 — Panduan langkah demi langkah: Menggunakan pencarian lanjutan
// Category: Tools Digital | Level: Pemula | Duration: 12 minutes
// Teaching goal: Pelajari menggunakan pencarian lanjutan dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan menggunakan pencarian lanjutan pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan menggunakan pencarian lanjutan perlu jelas sebelum mulai.
// Review prompt: What changed after you applied menggunakan pencarian lanjutan?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0294 — Workflow praktis: Membuat template presentasi
// Category: Tools Digital | Level: Lanjutan | Duration: 28 minutes
// Teaching goal: Bangun alur kerja membuat template presentasi yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat template presentasi pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat template presentasi perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat template presentasi?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0295 — Panduan langkah demi langkah: Membuat daftar bacaan digital
// Category: Tools Digital | Level: Pemula | Duration: 12 minutes
// Teaching goal: Pelajari membuat daftar bacaan digital dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat daftar bacaan digital pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat daftar bacaan digital perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat daftar bacaan digital?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0296 — Panduan langkah demi langkah: Mengatur inbox email
// Category: Tools Digital | Level: Menengah | Duration: 18 minutes
// Teaching goal: Pelajari mengatur inbox email dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mengatur inbox email pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mengatur inbox email perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mengatur inbox email?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0297 — Workflow praktis: Membuat papan kanban
// Category: Tools Digital | Level: Pemula | Duration: 15 minutes
// Teaching goal: Bangun alur kerja membuat papan kanban yang praktis agar lebih rapi, konsisten, dan mudah diulang.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat papan kanban pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat papan kanban perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat papan kanban?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0298 — Latihan mandiri: Membuat diagram mind map
// Category: Tools Digital | Level: Lanjutan | Duration: 31 minutes
// Teaching goal: Latihan terarah untuk menerapkan membuat diagram mind map sambil mengecek pemahamanmu sendiri.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat diagram mind map pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat diagram mind map perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat diagram mind map?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0299 — Panduan langkah demi langkah: Membuat arsip proyek
// Category: Tools Digital | Level: Lanjutan | Duration: 25 minutes
// Teaching goal: Pelajari membuat arsip proyek dengan urutan yang jelas, contoh sederhana, dan pemeriksaan hasil di akhir.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan membuat arsip proyek pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan membuat arsip proyek perlu jelas sebelum mulai.
// Review prompt: What changed after you applied membuat arsip proyek?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.

// LESSON 0300 — Proyek mini: Mengelola tautan referensi
// Category: Tools Digital | Level: Menengah | Duration: 21 minutes
// Teaching goal: Proyek mini yang membantumu mempraktikkan mengelola tautan referensi dari perencanaan sampai evaluasi.
// Extension checklist: add a concrete example, explain a common mistake,
// include an accessible alternative, and keep the exercise small.
// Suggested practice: Tantangan: terapkan mengelola tautan referensi pada satu contoh sederhana, lalu tulis dua kalimat tentang hasil dan hal yang masih ingin kamu pahami.
// Key takeaway: Tujuan mengelola tautan referensi perlu jelas sebelum mulai.
// Review prompt: What changed after you applied mengelola tautan referensi?
// Accessibility check: keyboard use, readable contrast, clear labels, plain language.
// Maintenance note: update the example if the software interface changes.
// Quality check: test the instructions from a fresh browser session.
// Reflection: record one success and one question for the next study session.
// End of lesson extension notes.
