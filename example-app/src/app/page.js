import JsonForm from "@/app/ui/JsonForm";
import OutputDisplay from "@/app/ui/OutputDisplay";

export default function Home() {
  return (
    <main className="flex min-h-screen flex items-center gap-10 p-24 bg-white">
      <JsonForm />
      <OutputDisplay />
    </main>
  );
}
