import fetchData from "@/lib/sanity/fetchData";
import RecruitmentForm from "@/components/RecruitmentForm";

export default async function RecruitmentPage() {
  const positions = await fetchData("recruitment");

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-white">Join Our Team</h1>
      <p className="text-gray-400 mb-12">Select a position and fill out the form below.</p>
      
      {positions && positions.length > 0 ? (
        <RecruitmentForm positions={positions} />
      ) : (
        <p className="text-neon-green">We are not currently recruiting. Check back later!</p>
      )}
    </main>
  );
}
