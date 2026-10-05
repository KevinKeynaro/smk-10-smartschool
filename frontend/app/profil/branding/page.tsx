import PageHero from "@/components/PageHero";
import ProseSection from "@/components/ProseSection";

export const metadata = { title: "Branding Sekolah — SMK 10 SMARTSCHOOL" };

export default function BrandingPage() {
  return (
    <>
      <PageHero eyebrow="Profile Sekolah" title="Profile SMK 10 Sebagai Contoh Branding Tepat Bagi Sekolah" />
      <ProseSection>
        <p>Sekolah kami merupakan lingkungan pendidikan yang berkomitmen untuk memberikan pembelajaran yang berkualitas, membangun karakter, serta mengembangkan potensi setiap siswa. Dengan dukungan tenaga pendidik, fasilitas yang memadai, dan berbagai kegiatan sekolah, kami berusaha menciptakan suasana belajar yang nyaman, aktif, dan menyenangkan.</p>
        <p className="mt-5">Kami percaya bahwa setiap siswa memiliki kemampuan dan potensi yang berbeda. Karena itu, sekolah terus mendorong siswa untuk berkembang baik dalam bidang akademik, keterampilan, maupun nonakademik. Melalui berbagai program dan kegiatan, siswa diberikan kesempatan untuk belajar, berkarya, berprestasi, dan mempersiapkan diri menghadapi masa depan.</p>
      </ProseSection>
    </>
  );
}
