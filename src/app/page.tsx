import SiteBanner from "@/components/SiteBanner";

export default function Home() {
  return (
    <main
      className="flex flex-col items-center justify-center"
      style={{
        background: "url('/images/background-img.png')",
        height: "calc(100vh - 60px)",
      }}
    >
      <SiteBanner />
    </main>
  );
}
