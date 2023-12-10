import AppLayout from "@/components/layout/app.layout";

export default function Root() {
  return (
    <AppLayout>
      <div className="flex ">
        <div>
          <h1 className="text-3xl  ">Welcome Back, Cassie</h1>
          <p className="text-gray-500 mt-2 text-xl">Statatistics Overview</p>
        </div>
        <div className="flex gap-2">
          <span className="text-gray-500">Total Revenue</span>
          <span className="text-2xl font-semibold">$ 1,250.00</span>
        </div>
      </div>
    </AppLayout>
  );
}
