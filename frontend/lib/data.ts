export const school = {
  name: "SMK 10 SMARTSCHOOL",
  tagline: "Aplikasi Digitalisasi untuk Mendukung Pendidikan yang Lebih Baik",
  npsn: "12589647",
  status: "Sekolah Menengah Kejuruan (SMK)",
  akreditasi: "A",
  address: "Jl alamat untuk terus maju Indonesia Emas 2050",
  phone: "1234567890",
  email: "admin@example.com",
  website: "",
  headmaster: "Erick Sanjaya, M.Cs., Ph.D.",
};

export const navItems = [
  { label: "Beranda", href: "/" },
  { label: "Profil", href: "/profil/branding", children: [
    { label: "Branding Sekolah", href: "/profil/branding" },
    { label: "Visi & Misi", href: "/profil/visi-misi" },
    { label: "Sambutan Kepala Sekolah", href: "/profil/sambutan" },
  ]},
  { label: "Info Sekolah", href: "/info-sekolah", children: [
    { label: "Informasi Sekolah", href: "/info-sekolah" },
    { label: "Fasilitas Sekolah", href: "/info-sekolah/fasilitas" },
    { label: "Ekstrakulikuler", href: "/info-sekolah/ekstrakulikuler" },
  ]},
  { label: "Hubungi Kami", href: "/kontak" },
];

export const quickLinks = [
  { label: "Link Web Sekolah / Lembaga Edu", href: "#" },
  { label: "Pengajuan Surat", href: "#" },
];

/** Ganti href "#" dengan link akun resmi sekolah masing-masing */
export const socials = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "WhatsApp", href: "#" },
];

export const visi = "Menjadi sekolah yang unggul, berkarakter, berprestasi, dan mampu menghasilkan generasi yang kompeten serta siap menghadapi perkembangan zaman.";
export const misi = [
  "Menyelenggarakan pendidikan yang berkualitas dan sesuai dengan kebutuhan dunia kerja.",
  "Mengembangkan potensi siswa dalam bidang akademik maupun nonakademik.",
  "Membentuk siswa yang disiplin, bertanggung jawab, kreatif, dan berkarakter.",
  "Meningkatkan keterampilan siswa sesuai dengan kompetensi dan program keahlian yang dipilih.",
  "Mendorong siswa untuk berprestasi melalui berbagai kegiatan dan kompetisi.",
  "Menciptakan lingkungan sekolah yang aman, nyaman, positif, dan mendukung proses pembelajaran.",
  "Memanfaatkan teknologi dalam mendukung pembelajaran dan perkembangan sekolah.",
];

export const sambutan = "Selamat Datang di Website Resmi Sekolah Kami! Platform ini dirancang sebagai pusat informasi dan komunikasi yang efisien untuk seluruh civitas akademika dan masyarakat luas. Di sini, Anda dapat mengakses kabar terbaru seputar kegiatan akademik, aktivitas ekstrakurikuler, pengumuman penting, hingga pencapaian prestasi sekolah. Kami berharap website ini dapat menjadi jembatan digital yang memberikan kemudahan akses informasi bagi kita semua.";

export const programKeahlianSingkat = ["Teknologi Informasi", "Bisnis & Manajemen", "Teknologi Manufaktur & Rekayasa"];

export const fasilitas = [
  { name: "Laboratorium Komputer", desc: "Dilengkapi dengan komputer berstandar industri dan koneksi internet yang stabil.", image: "/images/fasilitas-lab-komputer.jpg" },
  { name: "Perpustakaan", desc: "Tersedia ribuan koleksi buku, baik cetak maupun digital untuk menunjang literasi siswa.", image: "/images/fasilitas-perpustakaan.jpg" },
  { name: "Ruang Kelas", desc: "Ruang kelas yang nyaman, bersih dan dilengkapi fasilitas pembelajaran.", image: "/images/fasilitas-kelas.jpg" },
  { name: "Lapangan Olahraga", desc: "Tersedia lapangan voli, basket, serta fasilitas olahraga lainnya.", image: "/images/fasilitas-lapangan.jpg" },
  { name: "Lab Keahlian", desc: "Fasilitas praktik yang lengkap sesuai dengan program keahlian masing-masing.", image: "/images/fasilitas-lab-keahlian.jpg" },
  { name: "Kantin Sekolah", desc: "Menyediakan makanan dan minuman sehat dengan harga terjangkau.", image: "/images/fasilitas-kantin.jpg" },
];export const ekskul = [
  { name: "Pramuka", desc: "Melatih kedisiplinan, kepemimpinan, dan rasa tanggung jawab.", image: "/images/ekskul-pramuka.jpg" },
  { name: "Band", desc: "Menyalurkan bakat musik dan melatih kreativitas.", image: "/images/ekskul-band.jpg" },
  { name: "Tari Tradisional", desc: "Melestarikan budaya Indonesia dan melatih kepercayaan diri.", image: "/images/ekskul-tari.jpg" },
  { name: "Jurnalistik & Fotografi", desc: "Melatih kemampuan menulis, berpikir kritis, dan dokumentasi kegiatan sekolah.", image: "/images/ekskul-jurnalistik.jpg" },
];

export type PrestasiKategori = "Akademik" | "Seni Budaya";
export const prestasi: { title: string; team: string; date: string; place: string; kategori: PrestasiKategori; image?: string }[] = [
  { title: "Juara Kompetisi Cyber Security Tingkat Kabupaten", team: "Tim TKJ", date: "20 April 2024", place: "Provinsi Jawa Barat", kategori: "Akademik", image: "/images/prestasi-cyber-security.jpg" },
  { title: "Juara Kompetisi Web Development Tingkat Provinsi", team: "Tim RPL", date: "12 Maret 2025", place: "Kab. Sukabumi", kategori: "Akademik", image: "/images/prestasi-web-development.jpg" },
  { title: "Juara Festival Film Animasi Tingkat Provinsi", team: "Tim Animasi", date: "08 Juni 2023", place: "Kota Bekasi", kategori: "Seni Budaya", image: "/images/prestasi-animasi.jpg" },
  { title: "Juara Lomba Robotika Tingkat Nasional", team: "Tim TE", date: "17 Juli 2024", place: "Kota Depok", kategori: "Akademik", image: "/images/prestasi-robotika.jpg" },
  { title: "Juara Teater Pelajar Tingkat Nasional", team: "Tim Teater", date: "22 Juli 2023", place: "Kota Bogor", kategori: "Seni Budaya", image: "/images/prestasi-teater.jpg" },
  { title: "Juara Lomba Musik Band Tingkat Kabupaten", team: "Tim Musik", date: "25 Mei 2024", place: "Kab. Bandung", kategori: "Seni Budaya", image: "/images/prestasi-musik-band.jpg" },
  { title: "Juara I Tari Tradisional", team: "Tim Tari Tradisional", date: "-", place: "-", kategori: "Seni Budaya", image: "/images/prestasi-tari-tradisional.jpg" },
  { title: "Juara Musik Tradisional", team: "Tim Musik Tradisional", date: "-", place: "-", kategori: "Seni Budaya", image: "/images/prestasi-musik-tradisional.jpg" },
];

export type Jurusan = {
  slug: string; short: string; name: string; intro: string; icon: "code" | "network" | "film" | "bag" | "circuit" | "palette"; logo?: string;
  keunggulan: { title: string; text: string }[]; kegiatan: string[]; summary: string;
};

export const jurusan: Jurusan[] = [
  {
    slug: "rpl", short: "RPL", name: "Rekayasa Perangkat Lunak",
    icon: "code",
    logo: "/images/logo-rpl.png",
    summary: "Jurusan ini dirancang untuk membekali siswa dengan kemampuan dalam pengembangan perangkat lunak…",
    intro: "Jurusan ini dirancang untuk membekali siswa dengan kemampuan dalam pengembangan perangkat lunak, pemrograman, pembuatan aplikasi, dan pengelolaan basis data. Siswa akan belajar memahami proses pembuatan software dari tahap perancangan hingga menghasilkan aplikasi yang dapat digunakan.",
    keunggulan: [
      { title: "Pembelajaran Pemrograman", text: "Mempelajari berbagai bahasa pemrograman dan teknologi pengembangan aplikasi." },
      { title: "Pengembangan Aplikasi", text: "Siswa dilatih membuat website, aplikasi desktop, maupun aplikasi berbasis mobile." },
      { title: "Penguasaan Database", text: "Memahami pengelolaan, penyimpanan, dan pengolahan data menggunakan database." },
      { title: "Kesiapan Karier & Kuliah", text: "Membekali siswa untuk melanjutkan pendidikan atau berkarier sebagai programmer, web developer, software developer, dan bidang IT lainnya." },
    ],
    kegiatan: ["Praktik pembuatan website dan aplikasi.", "Proyek pengembangan software secara individu maupun kelompok.", "Lomba pemrograman dan kompetisi teknologi.", "Presentasi dan pengujian hasil proyek."],
  },
  {
    slug: "tkj", short: "TKJ", name: "Teknik Komputer & Jaringan",
    icon: "network",
    logo: "/images/logo-tkj.png",
    summary: "Jurusan ini membekali siswa dengan pengetahuan dan keterampilan dalam perakitan komputer…",
    intro: "Jurusan ini membekali siswa dengan pengetahuan dan keterampilan dalam perakitan komputer, instalasi sistem operasi, jaringan komputer, server, serta keamanan jaringan. Pembelajaran dilakukan melalui praktik langsung agar siswa terbiasa menangani berbagai kebutuhan teknologi jaringan.",
    keunggulan: [
      { title: "Laboratorium Jaringan", text: "Praktik menggunakan komputer, perangkat jaringan, router, switch, dan server." },
      { title: "Penguasaan Jaringan", text: "Mempelajari LAN, WAN, konfigurasi jaringan, dan troubleshooting." },
      { title: "Server & Keamanan", text: "Membekali siswa dengan kemampuan mengelola server serta memahami keamanan jaringan." },
      { title: "Kesiapan Karier", text: "Mempersiapkan siswa untuk berkarier sebagai teknisi jaringan, network administrator, IT support, dan bidang terkait." },
    ],
    kegiatan: ["Praktik instalasi dan konfigurasi jaringan.", "Perakitan dan perawatan komputer.", "Simulasi konfigurasi server dan jaringan.", "Praktik troubleshooting perangkat dan jaringan."],
  },
  {
    slug: "animasi", short: "Animasi", name: "Animasi",
    icon: "film",
    logo: "/images/logo-animasi.png",
    summary: "Jurusan ini membekali siswa dengan keterampilan dalam menciptakan karya animasi…",
    intro: "Jurusan ini membekali siswa dengan keterampilan dalam menciptakan karya animasi, mulai dari membuat konsep, karakter, storyboard, hingga menghasilkan animasi yang menarik. Siswa juga dikenalkan dengan berbagai teknologi dan software yang digunakan dalam industri kreatif.",
    keunggulan: [
      { title: "Kreativitas Visual", text: "Mengembangkan kemampuan menggambar, membuat karakter, dan membangun konsep cerita." },
      { title: "Animasi 2D & 3D", text: "Mempelajari proses pembuatan animasi menggunakan teknologi digital." },
      { title: "Storytelling", text: "Melatih kemampuan membuat cerita dan storyboard yang menarik." },
      { title: "Kesiapan Karier", text: "Mempersiapkan siswa untuk berkarier sebagai animator, illustrator, storyboard artist, dan pekerja industri kreatif." },
    ],
    kegiatan: ["Praktik membuat karakter dan storyboard.", "Pembuatan animasi 2D dan 3D.", "Proyek film animasi pendek.", "Pameran dan presentasi karya animasi."],
  },
  {
    slug: "brf", short: "BRF", name: "Broadcasting & Perfilman",
    icon: "film",
    logo: "/images/logo-bc.png",
    summary: "Jurusan ini dirancang untuk membekali siswa dengan kemampuan produksi siaran, film, dan konten audio visual…",
    intro: "Jurusan ini dirancang untuk membekali siswa dengan pengetahuan dan keterampilan dalam bidang broadcasting dan perfilman, mulai dari produksi program siaran, penyutradaraan, sinematografi, hingga proses pasca-produksi. Siswa akan belajar memahami alur kerja industri penyiaran dan film dari tahap praproduksi sampai tayang.",
    keunggulan: [
      { title: "Produksi Siaran", text: "Praktik produksi program televisi, radio, dan konten digital." },
      { title: "Sinematografi", text: "Mempelajari teknik pengambilan gambar, pencahayaan, dan penyutradaraan film." },
      { title: "Editing & Pasca-Produksi", text: "Menguasai proses penyuntingan gambar, suara, dan efek visual." },
      { title: "Kesiapan Karier", text: "Membekali siswa untuk berkarier sebagai kru produksi, videografer, editor, penyiar, maupun sutradara." },
    ],
    kegiatan: ["Praktik produksi program siaran dan film pendek.", "Proyek sinematografi dan penyutradaraan.", "Editing gambar dan suara di studio.", "Pameran serta pemutaran karya film siswa."],
  },
  {
    slug: "te", short: "TE", name: "Teknik Elektronika",
    icon: "circuit",
    logo: "/images/logo-te.png",
    summary: "Jurusan ini dirancang untuk membekali siswa dengan pengetahuan dan keterampilan dalam bidang elektronika…",
    intro: "Jurusan ini dirancang untuk membekali siswa dengan pengetahuan dan keterampilan dalam bidang elektronika, kelistrikan, rangkaian elektronik, serta teknologi kontrol. Siswa akan banyak melakukan praktik untuk memahami cara kerja dan penerapan berbagai perangkat elektronik.",
    keunggulan: [
      { title: "Laboratorium Elektronika", text: "Praktik menggunakan berbagai komponen dan alat ukur elektronika." },
      { title: "Rangkaian Elektronik", text: "Mempelajari pembuatan, pemasangan, dan pengujian rangkaian." },
      { title: "Teknologi Kontrol", text: "Mengenal sistem kontrol, sensor, dan perangkat berbasis teknologi." },
      { title: "Kesiapan Karier", text: "Membekali siswa untuk bekerja sebagai teknisi elektronika, teknisi perangkat, maupun melanjutkan pendidikan di bidang teknik." },
    ],
    kegiatan: ["Praktik merakit rangkaian elektronika.", "Pengukuran dan pengujian komponen.", "Proyek sistem kontrol sederhana.", "Praktik perbaikan dan troubleshooting perangkat."],
  },
  {
    slug: "dkv", short: "DKV", name: "Desain Komunikasi Visual",
    icon: "palette",
    logo: "/images/logo-dkv.png",
    summary: "Jurusan ini membekali siswa dengan kemampuan dalam menyampaikan pesan melalui karya visual…",
    intro: "Jurusan ini membekali siswa dengan kemampuan dalam menyampaikan pesan melalui karya visual. Siswa mempelajari desain grafis, ilustrasi, fotografi, tipografi, branding, serta berbagai media visual yang digunakan dalam dunia kreatif.",
    keunggulan: [
      { title: "Desain Kreatif", text: "Mengembangkan kemampuan membuat desain yang menarik dan komunikatif." },
      { title: "Penguasaan Software", text: "Mempelajari berbagai aplikasi desain untuk menghasilkan karya profesional." },
      { title: "Branding & Visual", text: "Mengenal pembuatan logo, identitas visual, poster, dan media promosi." },
      { title: "Kesiapan Karier", text: "Mempersiapkan siswa menjadi graphic designer, illustrator, content designer, dan pekerja industri kreatif." },
    ],
    kegiatan: ["Praktik membuat poster, logo, dan ilustrasi.", "Proyek branding dan identitas visual.", "Fotografi dan pengolahan gambar.", "Pameran serta presentasi karya desain siswa."],
  },
];
