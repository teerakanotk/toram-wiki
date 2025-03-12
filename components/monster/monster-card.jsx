import Card from "@/components/card";

export default function MonsterCard() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="grid gap-4 lg:grid-cols-2">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}
